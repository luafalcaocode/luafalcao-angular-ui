export class MenuViewModel {
    public id: number;
    public name: string;
    public url: string;
    public disabled: boolean;

    constructor(id: number, name: string, url: string, disabled: boolean) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.disabled = disabled;
    }
}