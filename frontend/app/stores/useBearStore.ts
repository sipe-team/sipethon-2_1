import { create } from "zustand";

interface UserState {
  uuid: number;
  setUuid: (uuid: number) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  uuid: 0,
  setUuid: (newUuid) => set(() => ({ uuid: newUuid })),
}));
