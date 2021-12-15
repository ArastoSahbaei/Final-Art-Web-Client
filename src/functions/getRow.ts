export const getRow = (tile: number) => {
	return tile > 0 && tile < 5 ? 1 :
		tile < 9 ? 2 : tile < 13 ? 3 :
			tile < 17 ? 4 : null
}
