export type Action = {
  type: 'setUser',
  user: IState['user']
} | {
  type: 'setBooks',
  books: IState['books']
} | {
  type: 'setMovies',
  movies: IState['movies']
}

export interface IUser {name?: string;}

export interface IState {
  user: IUser;
  books: string[];
  movies: string[];
}
