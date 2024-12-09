import Hero from "@/Components/MyComponent/Hero";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import GuestLayout from "@/Layouts/GuestLayout";
import { GaleriPaginate } from "@/types";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination"

export default function Galery({
    galeries,
}: {
    galeries: GaleriPaginate;
}) {
    return (
        <GuestLayout>
            <Hero
                title={"Galeri Kami"}
                subtitle={"Berikut ini adalah dokumentasi kegiatan kami."}
            />

            <div className="container space-y-5 px-5 py-20">
                {galeries.data.length > 0 ? (
                    <>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                            {galeries.data.map((galeri, index) => (
                                <Dialog key={index}>
                                    <DialogTrigger asChild>
                                        <div className="space-y-3">
                                            <img src={`/storage/${galeri.thumbnail}`} loading="lazy" className="w-full rounded-md hover:scale-105 transition duration-300 cursor-pointer" alt={galeri.name} />
                                            <p className="text-gray-600 text-sm">{galeri.name}</p>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="gap-2">
                                        <img src={`/storage/${galeri.image}`} className="mx-auto" alt={galeri.name} loading="lazy" />
                                        <h4 className="font-bold text-2xl">{galeri.name}</h4>
                                        <p>{galeri.description}</p>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious className="cursor-pointer" href={galeries.prev_page_url} />
                                </PaginationItem>
                                <PaginationItem>
                                    {galeries.links.slice(1, galeries.links.length - 1).map(link => (
                                        <PaginationLink href={link.url} isActive={link.active}>{link.label}</PaginationLink>
                                    ))}
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href={galeries.next_page_url} className="cursor-pointer" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </>
                ) : (
                    <p>
                        Belum ada konten yang ditambah.
                    </p>
                )}
            </div>
        </GuestLayout>
    );
}
