import { create } from "zustand";

interface DisplayDesignState {
  displayElementName: boolean;
  setDisplayElementName: (displayElementName: boolean) => void;
}

export const useDisplayDesign = create<DisplayDesignState>((set) => ({
  displayElementName: true,
  setDisplayElementName: (displayElementName: boolean) => set({ displayElementName }),
}));
