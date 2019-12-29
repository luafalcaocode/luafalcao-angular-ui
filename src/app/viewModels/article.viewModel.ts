export class ArticleViewModel {
    public id: number;
    public title: string;
    public preview: string;
    public creationDate: string;
    public publishedDate: string;
    public content: string;
    public image: string;
    public author: string;

    constructor(id: number, image: string, author: string, publishedDate: string, title: string, preview: string) {
        this.id = id;
        this.image = image;
        this.author = author;
        this.publishedDate = publishedDate;
        this.title = title;
        this.preview = preview;
    }
}