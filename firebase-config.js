// Firebase shared config (fill this once)
// IMPORTANT: Replace the placeholders with your Firebase web app config from:
// Firebase Console -> Project settings -> General -> Your apps (Web) -> SDK setup and configuration

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAm-Jd8omw_BPqWbAmsm9YfE326PJPCfLw",
  authDomain: "depmn-38c32.firebaseapp.com",
  projectId: "depmn-38c32",
  appId: "1:933530156383:web:c3e72c3a3841b7819d4aea"
};

// Prevent double-initialization when navigating between pages
export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);





