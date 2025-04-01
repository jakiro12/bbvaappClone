import { useContext } from "react";
import { BankContext } from "../_layout";  // Ajusta la ruta si es necesario
import { TransferData } from "@/constants/stateType";

export const useHandleInputChange = () => {
  const { setNewTransfer }: any = useContext(BankContext);

  const handleInputChange = (key: keyof TransferData, value: string | boolean) => {
    setNewTransfer((prev: TransferData) => ({ ...prev, [key]: value }));
  };

  return { handleInputChange };
};
