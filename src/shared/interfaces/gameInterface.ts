export interface cardValues {
   T: number,
   R: number,
   B: number,
   L: number
}

export interface card {
   name: string,
   cardValues: cardValues,
   image: string
}
export interface tile {
   tileNumber: number,
   card: card,
   tileControlledBy?: string
}