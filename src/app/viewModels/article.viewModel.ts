export class ArticleViewModel {
    public id?: number;
    public titulo?: string;
    public descricao?: string;
    public dataPublicacao?: string;
    public thumbnail?: any;

    constructor(id?: number, thumbnail?: string, dataPublicacao?: string, titulo?: string, descricao?: string) {
        this.id = id;
        this.thumbnail = thumbnail;
        this.dataPublicacao = dataPublicacao;
        this.titulo = titulo;
        this.descricao = descricao;
    }
}
