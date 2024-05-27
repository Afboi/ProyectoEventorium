import { useState } from 'react';

// useModal is a custom hook designed to manage the state of a modal.
export function useModal() {
    // isOpen: It is a state variable that tracks whether the modal is open (true) or closed (false). Initialized as false.
    const [isOpen, setIsOpen] = useState(false);

    // openModal: It is a function that sets the isOpen state to true, indicating that the modal should be open.
    // closeModal: It is a function that sets the isOpen state to false, indicating that the modal should be closed.
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    //The hook returns an array containing the isOpen state variable and the openModal and closeModal functions to control the modal.
    return [isOpen, openModal, closeModal];
}
