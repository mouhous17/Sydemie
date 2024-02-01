// Redux.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Créer le slice pour gérer l'état d'authentification
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated:
      localStorage.getItem("isAuthenticated") === "true" || false,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
    },
  },
});

// Exporter les actions du slice
export const { login, logout } = authSlice.actions;

// Types pour les actions
export type AuthAction = PayloadAction<boolean>;

// Créer le reducer avec le slice
const rootReducer = {
  auth: authSlice.reducer,
  // ... ajouter d'autres reducers si nécessaire
};

// Configurer le store
export const store = configureStore({
  reducer: rootReducer,
  // ... configurer d'autres paramètres du store si nécessaire
});
