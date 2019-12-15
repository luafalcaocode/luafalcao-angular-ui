export class SlideViewModel {
    public title: string;
    public subtitle: string;
    public image: string;
    public id: number;

    constructor(title: string, subtitle: string, image: string, id: number) {
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.id = id;
    }
}