export interface cardValues {
   N: number,
   E: number,
   S: number,
   W: number
}

export interface card {
   name: string,
   cardValues: cardValues,
   image: string
}
export interface tile {
   tileNumber: number,
   card: card
}