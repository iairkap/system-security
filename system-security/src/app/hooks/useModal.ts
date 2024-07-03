import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function onRequestClose() {
    setIsOpen(false);
  }

  return {
    isOpen,
    toggleModal,
    onRequestClose,
  };
}

export default useModal;
