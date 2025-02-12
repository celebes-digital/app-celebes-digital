import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";
import { useInView } from "@/hooks/useInView";
import { Product } from "@/types";
import { Link } from "@inertiajs/react";
export default function Products({
    products,
}: {
    products: Product[];
}) {
    const { ref, isVisible } = useInView();

    return (
        <div className="relative">
            <img
                src="/assets/image/halfcircle_2.webp"
                loading="lazy"
                className="absolute top-1/2 right-0 h-72"
                alt="half circle"
            />
            <div className="font-jakarta container relative space-y-14 px-5 py-20" id="produk">
                <div className="relative space-y-5 text-center">
                    <h1 className="text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                        Produk Kami
                    </h1>
                    <p className="font-semibold">
                        Berikut beberapa produk yang telah kami bangun untuk{" "}
                        <span className="relative">
                            kebutuhan
                            <svg
                                ref={ref}
                                className={`${isVisible ? "draw" : ""} path absolute -bottom-2 right-0 w-20 lg:-bottom-2 lg:w-[85px]`}
                                width="122"
                                height="10"
                                viewBox="0 0 122 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 7C21.0315 4.61936 69.4756 0.808722 119 4.61124"
                                    stroke="#DD0000"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>{" "}
                        para klien.
                    </p>
                </div>
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {products.map((product, i) => (
                            <div key={i} className="w-full space-y-3 max-w-sm mx-auto bg-white p-5 rounded-md gap-2 flex flex-col justify-between">
                                <div className="h-24 flex items-center">
                                    <img src={`/storage/${product.image}`} className="saturate-150 mx-auto max-h-24 max-w-36" loading="lazy" alt={product.name} />
                                </div>
                                <h3 className="font-bold text-2xl min-h-">{product.name}</h3>
                                <p className="text-sm lg:text-base line-clamp-2">{product.description}</p>
                                <Button asChild className="hover:bg-red-600 transition">
                                    <Link href={`/product/${product.slug}`}>Lihat Studi Kasus</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="col-span-3 text-center">
                        Belum ada layanan yang ditambah.
                    </p>
                )}
            </div>
        </div >
    );
}
