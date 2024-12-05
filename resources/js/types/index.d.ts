export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Portofolio {
    id: number;
    product_id: number;
    name: string;
    slug: string;
    client: Client;
    description: string;
    thumbnail: string;
    screenshots: string[];
    categories: Category[];
    created_at: string;
    updated_at: string;
}

export interface KontenProps {
    id: number;
    link: string;
    thumbnail: string;
}

export interface Category {
    id: number;
    slug: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Product {
    id: number;
    slug: string;
    name: string;
    image: string;
    description: string;
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

export interface Warrior {
    id: number;
    fullname: string;
    profession: string;
    instagram: string;
    linkedin: string;
    image: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
