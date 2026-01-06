// store/useStorie.js
import { create } from "zustand";
import { IUtilisateurPopulated } from "../interface/IUtilisateur";

interface idata {
  dataUtilisateur?: IUtilisateurPopulated;
}

interface itoken {
  tocken: string;
}

// 1️⃣ Définition de l'interface pour le store
interface StorieState {
  data: idata | null;
  setData: (data: idata) => void;
  token?: itoken | null;
  setToken?: (e: itoken) => void;
}

// 3️⃣ Création du store avec typage
export const useStorie = create<StorieState>((set) => ({
  data: null,
  setData: (e) => set({ data: e }),
  token: null,
  setToken: (e) => set({ token: e }),
}));
