export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')];

export const server_loads = [];

export const dictionary = {
	"": [2],
	"adventure": [3],
	"arcade": [5],
	"casually": [6],
	"login": [8],
	"pre-game": [9],
	"adventure/pre-game": [4],
	"casually/pre-game": [7]
};