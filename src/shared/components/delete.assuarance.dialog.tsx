import AppModal from "./app.modal";
import AppButton from "./app.button";
import { GoTrash } from "react-icons/go";
import AppSpinner from "./loading.indicators";

export default function DeleteAssuaranceDialog({
  itemName,
  isOpen,
  setIsOpen,
  isRemoving = false,
  onRemoving,
}: {
  itemName: string;
  isOpen: boolean;
  isRemoving: boolean;
  setIsOpen: (value: boolean) => void;
  onRemoving: () => void;
}) {
  return (
    <AppModal
      padding="py-3 px-6"
      className="w-xs bg-slate-50 border border-slate-600/50"
      isOpen={isOpen}
      setIsOpen={isRemoving ? (_value: boolean) => {} : setIsOpen}
    >
      <div className="flex flex-col gap-3">
        <div className="bg-red-300/30 rounded-full p-2 w-fit">
          <GoTrash className="text-red-600 text-xl" />
        </div>
        <span className="text-sm">
          Are you sure you want to permanently remove{" "}
          <span className="text-red-500">{itemName}</span>?
        </span>
        <div className="flex flex-col gap-2">
          <span className="text-xs">This action can not be undone</span>
          {isRemoving ? (
            <div className="flex justify-center">
              <AppSpinner />
            </div>
          ) : (
            <div className="flex gap-5">
              <AppButton
                variant="outline"
                className="flex-1 h-7 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Close
              </AppButton>
              <AppButton
                variant="danger"
                className="flex-1 h-7 flex items-center"
                onClick={onRemoving}
              >
                Remove
              </AppButton>
            </div>
          )}
        </div>
      </div>
    </AppModal>
  );
}
