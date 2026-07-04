import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { Fragment } from "react";
import { cn } from "../../utils/cn";
import { LuX } from "react-icons/lu";

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
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className={cn("bg-white rounded-xl w-fit", className)}>
                  <DialogPanel
                    className={cn(
                      "w-full transform overflow-hidden rounded-xl text-left align-middle shadow-xl transition-all",
                      padding,
                    )}
                  >
                    <DialogTitle className="text-lg font-medium leading-6 text-gray-900">
                      <div className="flex items-center justify-between">
                        <span>{title}</span>
                        <LuX
                          className="text-red-400 cursor-pointer"
                          onClick={closeModal}
                        />
                      </div>
                    </DialogTitle>
                    {children}
                  </DialogPanel>
                </div>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
