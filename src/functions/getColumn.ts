export const getColumn = (tile: number) => { 
	return [1, 5, 9, 13].includes(tile) ? 1 : [2, 6, 10, 14].includes(tile) ? 2 : [3, 7, 11, 15].includes(tile) ? 3 : 4 
}
