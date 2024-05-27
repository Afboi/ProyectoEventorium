// Importing page components
import { ProfileUserResult } from "./ProfileUserResult.jsx";

// The main ModalProfile component
export function ModalProfile({
  isOpen,
  onClose,
  onOpenEditModal,
  profileData,
}) {
  // If the modal is not open, do not render anything.
  if (!isOpen) {
    return null;
  }

  // Return the modal component with the necessary elements
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Semi-transparent dark background for the modal */}
      <div
        role="button"
        className="absolute inset-0 bg-[#1d1d1d] opacity-50"
        onClick={onClose}
        onKeyDown={onClose}
        tabIndex="0"
      ></div>
      {/* Modal content, using the ProfileUserResult component */}
      <ProfileUserResult
        items={profileData.courses}
        profileData={profileData}
        onOpenEditModal={onOpenEditModal}
        onClose={onClose}
      />
    </div>
  );
}
