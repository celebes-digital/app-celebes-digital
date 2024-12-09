export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Portofolio {
    id: number;
    product: Product;
    name: string;
    slug: string;
    client: Client;
    description: string;
    thumbnail: string;
    screenshots: string[];
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
    clients: Client[];
    categories: Category[];
    screenshots: string[];
    name: string;
    image: string;
    description: string;
    detail: string;
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

export interface Galeri {
    id: number;
    name: string;
    description: string;
    image: string;
    thumbnail: string;
}

export interface GaleriPaginate {
    current_page: number;
    data: Galeri[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: { url: string; label: string; active: boolean }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}

export interface PortofolioPaginate {
    current_page: number;
    data: Portofolio[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: { url: string; label: string; active: boolean }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
