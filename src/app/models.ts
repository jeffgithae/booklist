export interface IBooks {
    id?: number | null;
    title?: string | null;
    year?: number | null;
    author?: string | null;
    action?: string | null;
    category?: IBookCategory | null;

}

export class IBookCategory {
    categoryTitle?: string | null;
    id?: number | null;
}