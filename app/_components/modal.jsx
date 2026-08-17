import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

/**
 * Glass / Transparent Modal
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-lg",
  closeOnClickOutside = true,
  hideCloseButton = false,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => closeOnClickOutside && onClose()}
      >
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        {/* Modal Container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95 translate-y-2"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-2"
            >
              <Dialog.Panel
                className={`
                                    relative
                                    w-full
                                    ${maxWidth}
                                    overflow-hidden
                                    rounded-3xl

                                    /* Glass effect */
                                    bg-white/10
                                    backdrop-blur-md
                                    backdrop-saturate-150

                                    /* Glass border */
                                    border
                                    border-white/40

                                    /* Soft shadow */
                                    shadow-[0_25px_60px_rgba(0,0,0,0.25)]

                                    /* Optional subtle inner highlight */
                                    ring-1
                                    ring-white/10
                                `}
              >
                {/* Header */}
                {(title || !hideCloseButton) && (
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    {title ? (
                      <Dialog.Title className="text-lg font-semibold text-white drop-shadow-sm">
                        {title}
                      </Dialog.Title>
                    ) : (
                      <span />
                    )}

                    {!hideCloseButton && (
                      <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close modal"
                        className="
                                                    rounded-full
                                                    bg-white/10
                                                    p-2
                                                    text-white/70
                                                    backdrop-blur-md
                                                    transition-all
                                                    hover:bg-white/20
                                                    hover:text-white
                                                    focus:outline-none
                                                    focus-visible:ring-2
                                                    focus-visible:ring-white/50
                                                "
                      >
                        <X size={18} strokeWidth={2} />
                      </button>
                    )}
                  </div>
                )}

                {/* Body */}
                <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pb-6 mt-5">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
