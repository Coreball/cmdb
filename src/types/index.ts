export type Viewing = {
  date: string
}

export type Movie = {
  title: string
  poster: string
  year: number
  viewings: Viewing[]
}

export type Movies = {
  [key: string]: Movie
}
