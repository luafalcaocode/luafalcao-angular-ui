export class ArticleViewModel {
    public id?: number;
    public title?: string;
    public description?: string;
    public publishedDate?: string;
    public image?: string;

    constructor(id?: number, image?: string, publishedDate?: string, title?: string, description?: string) {
        this.id = id;
        this.image = image;
        this.publishedDate = publishedDate;
        this.title = title;
        this.description = description;
    }
}
