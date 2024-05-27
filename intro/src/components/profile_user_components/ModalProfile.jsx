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
      <div role="button" className="absolute inset-0 bg-[#1d1d1d] opacity-50" onClick={onClose} tabIndex="0">
        <ProfileUserResult
          items={profileData.courses}
          profileData={profileData}
          onOpenEditModal={onOpenEditModal}
          onClose={onClose}
        />
      </div>
    </div>
  );
}
