"use client";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModalStore";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

const SetupPage = () => {
  const { onOpen, isOpen, onClose } = useModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen("createStore");
    }
  }, [isOpen, onClose, onOpen]);

  return null;
};

export default SetupPage;
