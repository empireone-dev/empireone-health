// HTML email bodies for the Google Apps Script mailer, ported 1:1 from the
// Laravel blade templates in app/empireonehealth/*.blade.php.

const BASE_STYLE = `
        body {
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            font-family: Arial, Helvetica, sans-serif;
            color: #333333;
        }

        .email-wrapper {
            width: 100%;
            padding: 24px 0;
            background-color: #f4f4f4;
        }

        .container {
            width: 600px;
            max-width: calc(100% - 40px);
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
        }

        .header {
            padding: 22px 20px;
            text-align: center;
            background-color: #5B5BF7;
        }

        .header h1 {
            margin: 0;
            color: #ffffff;
            font-size: 20px;
            line-height: 1.4;
            font-weight: 700;
        }

        .content {
            padding: 42px 30px 20px;
        }

        .content p {
            margin: 0 0 22px;
            font-size: 15px;
            line-height: 1.6;
            color: #444444;
        }

        .greeting {
            margin-bottom: 18px !important;
        }

        .otp-intro {
            margin-bottom: 15px !important;
        }

        .details-box {
            margin: 25px 0;
            border: 1px solid #e5e5e5;
            border-radius: 8px;
            overflow: hidden;
        }

        .details-box table {
            width: 100%;
            border-collapse: collapse;
        }

        .details-box td {
            padding: 12px 18px;
            font-size: 14px;
            line-height: 1.5;
            border-bottom: 1px solid #eeeeee;
            vertical-align: top;
        }

        .details-box tr:last-child td {
            border-bottom: none;
        }

        .details-box td.label {
            width: 120px;
            color: #777777;
            font-weight: 700;
            background-color: #f7f7f7;
        }

        .details-box td.value {
            color: #333333;
        }

        .signature {
            margin-top: 35px;
        }

        .signature p {
            margin-bottom: 3px;
        }

        .signature .company {
            font-weight: 700;
            color: #333333;
        }

        .footer {
            padding: 28px 20px 18px;
            text-align: center;
            background-color: #ffffff;
        }

        .footer p {
            margin: 0;
            font-size: 12px;
            line-height: 1.6;
            color: #777777;
        }

        @media only screen and (max-width: 600px) {
            .email-wrapper {
                padding: 15px 0;
            }

            .container {
                max-width: calc(100% - 24px);
            }

            .content {
                padding: 30px 22px 15px;
            }

            .header h1 {
                font-size: 18px;
            }
        }
`;

function escapeHtml(value) {
  if (value === undefined || value === null) return "";
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function layout({ title, headerTitle, bodyHtml }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)}</title>
    <style>${BASE_STYLE}</style>
</head>
<body>
    <div class="email-wrapper">
        <div class="container">
            <div class="header">
                <h1>${escapeHtml(headerTitle)}</h1>
            </div>
            <div class="content">
                ${bodyHtml}
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} EmpireOne Health All rights reserved.</p>
            </div>
        </div>
    </div>
</body>
</html>`;
}

function signature() {
  return `<div class="signature">
    <p>Best Regards,</p>
    <p class="company"><b>EmpireOne Health</b></p>
    <p>
        <img src="https://careers.empireonecx.com/images/empireone-health.png"
             alt="EmpireOne Health Logo" style="width: 155px; height: auto;">
    </p>
</div>`;
}

function detailsRow(label, value) {
  return `<tr><td class="label">${escapeHtml(label)}</td><td class="value">${escapeHtml(value)}</td></tr>`;
}

export function bookingConfirmationEmail({ name }) {
  return layout({
    title: "Booking",
    headerTitle: "Thank You for Reaching Out!",
    bodyHtml: `
        <p class="greeting">Hi ${escapeHtml(name) || "there"},</p>
        <p class="otp-intro">Thank you for contacting EmpireOne Health.</p>
        <p>A member of our team will contact you within 24 hours. For immediate assistance, please call us at +1 800 233 0843.</p>
        ${signature()}
    `,
  });
}

export function bookingNotificationEmail({
  name,
  company_name,
  email,
  phone,
  looking_for,
  notes,
}) {
  return layout({
    title: "New Booking Notification",
    headerTitle: "New Booking Received",
    bodyHtml: `
        <p class="greeting">Hi Admin,</p>
        <p class="otp-intro">A new booking has been submitted on the EmpireOne Health website. Details below:</p>
        <div class="details-box">
            <table role="presentation">
                ${detailsRow("Name", name || "N/A")}
                ${detailsRow("Company Name", company_name || "N/A")}
                ${detailsRow("Email", email || "N/A")}
                ${detailsRow("Phone", phone || "N/A")}
                ${detailsRow("Looking For", looking_for || "A callback")}
                ${detailsRow("Notes", notes || "N/A")}
            </table>
        </div>
        <p>Please follow up with the client as soon as possible.</p>
        ${signature()}
    `,
  });
}

export function consultationConfirmationEmail({ name }) {
  return layout({
    title: "Booking",
    headerTitle: "Thank You for Reaching Out!",
    bodyHtml: `
        <p class="greeting">Hi ${escapeHtml(name) || "there"},</p>
        <p class="otp-intro">Thank you for contacting EmpireOne Health.</p>
        <p>A member of our team will contact you within 24 hours. For immediate assistance, please call us at +1 800 233 0843.</p>
        ${signature()}
    `,
  });
}

export function consultationNotificationEmail({
  name,
  company_name,
  email,
  phone,
  looking_for,
  notes,
}) {
  return layout({
    title: "New Consultation Notification",
    headerTitle: "New Consultation Appointment Received",
    bodyHtml: `
        <p class="greeting">Hi Admin,</p>
        <p class="otp-intro">A new Consultation Appointment has been submitted on the EmpireOne Health website. Details below:</p>
        <div class="details-box">
            <table role="presentation">
                ${detailsRow("Name", name || "N/A")}
                ${detailsRow("Company Name", company_name || "N/A")}
                ${detailsRow("Email", email || "N/A")}
                ${detailsRow("Phone", phone || "N/A")}
                ${detailsRow("Looking For", looking_for || "A callback")}
                ${detailsRow("Notes", notes || "N/A")}
            </table>
        </div>
        <p>Please follow up with the client as soon as possible.</p>
        ${signature()}
    `,
  });
}
