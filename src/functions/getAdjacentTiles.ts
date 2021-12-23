import { getColumn } from './getColumn'
import { getRow } from './getRow'

export const getAdjacentTiles = (tile: number) => {
	const row = getRow(tile)
	const column = getColumn(tile)

	const adjacent = {
		E: getRow(tile - 1) === row ? tile - 1 : null,
		W: getRow(tile + 1) === row ? tile + 1 : null,
		N: (tile - 4 > 0) ? tile - 4 : null,
		S: (tile + 4 <= 16) ? tile + 4 : null
	}

	/* 	console.log('VALUE: ' + tile)
		console.log('ROW: ' + row, 'COLUMN: ' + column) */
	/* 	console.log(`ADJACENT VALUES: E:${adjacent.E} W:${adjacent.W} N:${adjacent.N} S:${adjacent.S}`) */
	console.log(adjacent)
	return adjacent
}