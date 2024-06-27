import React from 'react';

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-6 shadow-lg z-10 max-w-[45rem] w-full">
        <h2 className="text-2xl font-bold text-blue mb-4">Terms and Conditions</h2>
        <p className="mb-4">
          Welcome to our event and activity registration application. By using this application, you agree to abide by the following terms and conditions:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>You must provide accurate and up-to-date information when registering.</li>
          <li>The application must not be used for illegal or unauthorized activities.</li>
          <li>All provided data must be genuine, and impersonation of others is not allowed.</li>
          <li>We reserve the right to modify or discontinue the application without prior notice.</li>
          <li>We are committed to protecting the privacy of your personal data.</li>
        </ol>
        <p className="mb-2">
        If you have any questions or doubts about these conditions, please do not hesitate to contact us at the following numbers:
        </p>
        <p className='mb-4'> 8682 2547 - 8449 4250</p>
        <button
          className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
