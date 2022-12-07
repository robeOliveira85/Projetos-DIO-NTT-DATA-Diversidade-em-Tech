export class Article {
  id: number = 0;
  title: string = '';
  summary: string = '';
  body: string = '';
  image: string = '';

  constructor(
    id: number,
    title: string,
    summary: string,
    body: string,
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.summary = summary;
    this.image = image;
  }
}
