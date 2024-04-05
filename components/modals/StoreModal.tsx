"use client";

import { useModal } from "@/hooks/useModalStore";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "createStore";

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories."
      isOpen={isModalOpen}
      onClose={onClose}
    ></Modal>
  );
};
