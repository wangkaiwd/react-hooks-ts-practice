export interface IData {hits: IHit[];}

interface IHit {
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: any;
  comment_text?: any;
  _tags: string[];
  num_comments: number;
  objectID: string;
  _highlightResult: IHighlightResult;
}

interface IHighlightResult {
  title: ITitle;
  url: ITitle;
  author: IAuthor;
}

interface IAuthor {
  value: string;
  matchLevel: string;
  matchedWords: string[];
}

interface ITitle {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}
