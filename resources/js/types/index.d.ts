export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Portofolio {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    screenshots: string[];
    categories: Category[];
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Testimoni {
    id: number;
    image: string;
    fullname: string;
    profession: string;
    company: string;
    message: string;
    created_at: string;
    updated_at: string;
}

export interface Client {
    id: number;
    image: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
