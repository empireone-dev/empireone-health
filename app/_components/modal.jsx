import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

/**
 * Modal
 *
 * A clean, accessible modal built on Headless UI's <Dialog>.
 * Handles focus trapping, Escape-to-close, scroll locking, and
 * portal rendering out of the box — no manual mount/portal logic needed.
 *
 * @param {boolean}  isOpen              Whether the modal is visible
 * @param {function} onClose             Called when the modal should close
 * @param {string}   title               Optional header title
 * @param {node}     children            Modal body content
 * @param {string}   maxWidth            Tailwind max-width class, e.g. "max-w-lg"
 * @param {boolean}  closeOnClickOutside Close when clicking the backdrop (default: true)
 * @param {boolean}  hideCloseButton     Hide the top-right close button
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
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
                </Transition.Child>

                {/* Panel container */}
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
                                className={`w-full ${maxWidth} max-h-[85vh] flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow-xl ring-1 ring-slate-900/5 transition-all`}
                            >
                                {/* Header */}
                                {(title || !hideCloseButton) && (
                                    <div className="flex flex-none items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
                                        {title ? (
                                            <Dialog.Title className="text-base font-semibold text-slate-900">
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
                                                className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                                            >
                                                <X size={20} strokeWidth={2} />
                                            </button>
                                        )}
                                    </div>
                                )}

                                {/* Body */}
                                <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-6 py-5">
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