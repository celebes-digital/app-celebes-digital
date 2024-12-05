import {
    extractFirstParagraph,
    extractFirstSentence,
} from "@/lib/paragrafExtract";
import { Category, Portofolio } from "@/types";
import { Link, router } from "@inertiajs/react";

export default function StudiKasusCard({
    portofolio,
}: {
    portofolio: Portofolio;
}) {
    return (
        <div className="mx-auto mb-3 w-full max-w-sm space-y-3 p-2 md:max-w-none">
            <Link
                href={`/case/${portofolio.slug}/detail`}
                className="group relative block overflow-hidden rounded-[10px] after:absolute after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:from-[#292929]/0 after:to-[#292929] after:opacity-0 after:transition after:duration-300 hover:after:opacity-100"
            >
                <img
                    src={`/storage/${portofolio.thumbnail}`}
                    className="w-full transition duration-300 group-hover:scale-105"
                    alt="image"
                />
            </Link>
            <div className="space-y-5 p-2">
                <div className="space-y-2">
                    <Link
                        href={`/case/${portofolio.slug}/detail`}
                        className="text-2xl font-bold hover:underline"
                    >
                        {portofolio.name}
                    </Link>
                    <p className="text-sm">
                        {extractFirstSentence(
                            extractFirstParagraph(portofolio.description),
                        )}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {portofolio.categories.map((category, i) => (
                        <CategoryButton
                            name={category.name}
                            slug={category.slug}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function CategoryButton({ name, slug }: { name: string; slug?: string }) {
    const handleClick = () => {
        const queryParams = new URLSearchParams(window.location.search);
        if (slug) {
            queryParams.set('category', slug);
        } else {
            queryParams.delete('category');
        }
        router.visit(`${window.location.pathname}?${queryParams.toString()}`);
    };

    return (
        <button
            onClick={handleClick}
            className="h-fit rounded-full border-[1.5px] border-black px-5 py-1.5 text-sm font-medium leading-[150%] tracking-[2%] transition hover:bg-black hover:text-white"
        >
            {name}
        </button>
    );
}
