import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Persisted on disk (not in /public) so the sequence survives dev/build
// restarts and deployments, instead of resetting like an in-memory counter.
const COUNTER_FILE = path.join(process.cwd(), ".data", "appointment-id-counter.json");
const START_ID = 1120;

// Serializes concurrent requests within this process so two near-simultaneous
// submissions can't read the same "last" value and issue a duplicate ID.
let writeQueue = Promise.resolve();

async function readCounter() {
  try {
    const raw = await fs.readFile(COUNTER_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Number.isInteger(parsed.lastId) ? parsed.lastId : START_ID - 1;
  } catch {
    return START_ID - 1;
  }
}

async function writeCounter(lastId) {
  await fs.mkdir(path.dirname(COUNTER_FILE), { recursive: true });
  await fs.writeFile(COUNTER_FILE, JSON.stringify({ lastId }), "utf-8");
}

export async function GET() {
  const result = (writeQueue = writeQueue.then(async () => {
    const lastId = await readCounter();
    const nextId = lastId + 1;
    await writeCounter(nextId);
    return nextId;
  }));

  try {
    const nextId = await result;
    return NextResponse.json({ success: true, appointment_id: `${nextId}` });
  } catch (error) {
    console.error("Failed to generate appointment id:", error);
    return NextResponse.json(
      { success: false, message: "Failed to generate appointment id" },
      { status: 500 },
    );
  }
}
