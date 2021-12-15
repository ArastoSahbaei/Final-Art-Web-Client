export const determineTileIndex = (column: number, row: number) => {
	let value = [1, 2, 3, 4];
	(row === 1) ? null :
		(row === 2) ? value = [5, 6, 7, 8] :
			(row === 3) ? value = [9, 10, 11, 12] :
				(row === 4) ? value = [13, 14, 15, 16] : null
	return value[column - 1]
}