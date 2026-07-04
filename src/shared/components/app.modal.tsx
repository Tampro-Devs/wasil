import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { cn } from "../../utils/cn";

interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
  title?: string;
  isOpen: boolean;
  padding?: string;
  children?: React.ReactNode;
  setIsOpen: (value: boolean) => void;
}
export default function AppModal({
  title,
  children,
  isOpen,
  setIsOpen,
  className,
  padding = "p-6",
}: ModalProps) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className={cn("bg-white rounded-xl w-fit", className)}>
                  <Dialog.Panel
                    className={cn(
                      "w-full transform overflow-hidden rounded-xl text-left align-middle shadow-xl transition-all",
                      padding,
                    )}
                  >
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    {children}
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
