import Hero from "@/Components/MyComponent/Hero";
import StudiKasusCard, {
    CategoryButton,
} from "@/Components/MyComponent/StudiKasusCard";
import GuestLayout from "@/Layouts/GuestLayout";
import { Category, PortofolioPaginate, Product } from "@/types";
import { Filter } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination"

export default function CaseStudy({
    portofolios,
    categories,
    product
}: {
    portofolios: PortofolioPaginate;
    categories: Category[];
    product?: Product;
}) {
    return (
        <GuestLayout>
            <Hero
                title={product ? product.name : "Studi Kasus"}
                subtitle={product ? product.description : "Kasus Nyata, Dampak Nyata: Solusi yang Mengubah Industri"}
            />

            <div className="container space-y-5 px-5 py-20">
                {!product && (
                    <div className="gap-5 space-y-5 border-b border-b-black pb-2 md:flex md:items-center md:justify-between md:space-y-0">
                        <div className="mb-3 flex items-center gap-2">
                            <h4 className="font-semibold">Filter</h4>
                            <Filter className="h-5 w-5" />
                        </div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <li className="mb-3">
                                <CategoryButton name="All" />
                            </li>
                            {categories.map((category, i) => (
                                <li className="mb-3" key={i}>
                                    <CategoryButton
                                        name={category.name}
                                        slug={category.slug}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {portofolios.data.length > 0 ? (
                    <>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {portofolios.data.map((portofolio, i) => (
                                <StudiKasusCard portofolio={portofolio} key={i} />
                            ))}
                        </div>

                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious className="cursor-pointer" href={portofolios.prev_page_url} />
                                </PaginationItem>
                                <PaginationItem>
                                    {portofolios.links.slice(1, portofolios.links.length - 1).map(link => (
                                        <PaginationLink href={link.url} isActive={link.active}>{link.label}</PaginationLink>
                                    ))}
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href={portofolios.next_page_url} className="cursor-pointer" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </>
                ) : (
                    <p>Belum ada portofolio yang ditambah.</p>
                )}
            </div>
        </GuestLayout>
    );
}
