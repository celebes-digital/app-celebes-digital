import Hero from "@/Components/MyComponent/Hero";
import StudiKasusCard, {
    CategoryButton,
} from "@/Components/MyComponent/StudiKasusCard";
import GuestLayout from "@/Layouts/GuestLayout";
import { Category, Portofolio, Product } from "@/types";
import { Filter } from "lucide-react";

export default function CaseStudy({
    portofolios,
    categories,
    product
}: {
    portofolios: Portofolio[];
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
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {portofolios.length > 0 ? (
                        portofolios.map((portofolio, i) => (
                            <StudiKasusCard portofolio={portofolio} key={i} />
                        ))
                    ) : (
                        <p>Belum ada portofolio yang ditambah.</p>
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}
