"use client";

import { useModal } from "@/hooks/useModalStore";
import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
  loading: boolean;
  onConfirm: () => void;
}

const AlertModal = ({ loading, onConfirm }: AlertModalProps) => {
  const { isOpen, onClose, type } = useModal();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const isModalOpen = isOpen && type === "alert";
  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone."
      isOpen={isModalOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
