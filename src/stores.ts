import { writable } from 'svelte/store'

export const firebaseConfig = {
  apiKey: 'AIzaSyC61tYlJA9lrS5_qfJKSaVpW8CpLWaCcFo',
  authDomain: 'reciclage-game-416af.firebaseapp.com',
  projectId: 'reciclage-game-416af',
  storageBucket: 'reciclage-game-416af.appspot.com',
  messagingSenderId: '766413579133',
  appId: '1:766413579133:web:c1a6f325721afeb10ea214',
  measurementId: 'G-J4GJ778B27',
}

export const currentTrash = writable('')
export const trashItems = {
  trashs: {
    eletronic: ['cellphone', 'headser', 'powerPlug', 'stacks', 'battery'],
    glass: ['glassBottle', 'mirror', 'testTube', 'magnifyingGlass', 'juicePitcher'],
    metal: ['beerCan', 'screw', 'ironBar', 'spanner', 'keyspanner'],
    organic: ['apple', 'watermelon', 'orange', 'strawberry', 'poop'],
    paper: ['book', 'toiletPaper', 'book', 'newspaper', 'paperSheet'],
    plastic: ['gallonOfWater', 'bag', 'cup', 'cellPhone', '...'],
  },
}

export const connectionAPI = 'http://127.0.0.1:3333/'
