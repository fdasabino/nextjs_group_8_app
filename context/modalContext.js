import { createContext, useState } from "react";

export const ModalContext = createContext();
export const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e) => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, showModal, handleOk, handleCancel }}
    >
      {children}
    </ModalContext.Provider>
  );
};
