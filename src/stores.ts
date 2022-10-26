import { writable } from "svelte/store";

export const firebaseConfig = {
  apiKey: "AIzaSyC61tYlJA9lrS5_qfJKSaVpW8CpLWaCcFo",
  authDomain: "reciclage-game-416af.firebaseapp.com",
  projectId: "reciclage-game-416af",
  storageBucket: "reciclage-game-416af.appspot.com",
  messagingSenderId: "766413579133",
  appId: "1:766413579133:web:c1a6f325721afeb10ea214",
  measurementId: "G-J4GJ778B27",
};

export const currentTrash = writable("");
export const trashItems = {
  trashs: {
    eletronic: [
      "eletronico",
      "eletronico-1",
      "eletronico-2",
      "eletronico-3",
      "eletronico-4",
    ],
    glass: ["vidro", "vidro-1", "vidro-2", "vidro-3", "vidro-4"],
    metal: ["matal", "matal-1", "matal-2", "matal-3", "matal-4"],
    organic: [
      "organico",
      "organico-1",
      "organico-2",
      "organico-3",
      "organico-4",
    ],
    paper: ["papel", "papel-1", "papel-2", "papel-3", "papel-4"],
    plastic: [
      "plastico",
      "plastico-1",
      "plastico-2",
      "plastico-3",
      "plastico-4",
    ],
  },
};

export const connectionAPI = "http://127.0.0.1:3000";
