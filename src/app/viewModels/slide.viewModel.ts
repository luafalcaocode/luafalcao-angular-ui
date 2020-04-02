export class SlideViewModel {
    public title: string;
    public subtitle: string;
    public image: string;
    public id: number;
    public isActive: boolean;
    public style: string;

    constructor(title: string, subtitle: string, image: string, id: number, style: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.id = id;
        this.style = style;
    }
}