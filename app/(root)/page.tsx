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

  return <div className="p-4">Rootpage</div>;
};

export default SetupPage;
