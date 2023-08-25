export type Viewing = {
  date: string
  location: string
}

export type Movie = {
  title: string
  poster: string
  year: number
  viewings: Viewing[]
  rating: number
  comment?: string
}

export type Movies = {
  [key: string]: Movie
}
