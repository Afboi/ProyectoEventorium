import { ProfileUserResult } from "./ProfileUserResult.jsx";
export function ModalProfile({
  isOpen,
  onClose,
  onOpenEditModal,
  profileData,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-[#1d1d1d] opacity-50 cursor-default" onClick={onClose} role="button"
      />
      <ProfileUserResult
        items={profileData.courses}
        profileData={profileData}
        onOpenEditModal={onOpenEditModal}
        onClose={onClose}
      />
    </div>
  );
}
