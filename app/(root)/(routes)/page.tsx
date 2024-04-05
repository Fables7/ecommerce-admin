"use client";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModalStore";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

const SetupPage = () => {
  const { onOpen, isOpen } = useModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen("createStore");
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;
