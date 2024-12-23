import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import { Galeri as GaleriProps } from "@/types";
import { Link } from "@inertiajs/react";

export default function Galeri({
    galeries,
}: {
    galeries: GaleriProps[];
}) {
    return (
        <div className="relative">
            <img
                src="/assets/image/halfcircle_1.webp"
                loading="lazy"
                className="absolute top-1/2 left-0 h-72"
                alt="half circle"
            />
            <div className="font-jakarta container relative space-y-14 px-5 py-28" id="galeri">
                <div className="relative space-y-5 text-center">
                    <h1 className="text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                        Cek Galeri Kami!
                    </h1>
                    <p className="font-semibold">
                        Berikut ini adalah dokumentasi kegiatan kami.
                    </p>
                </div>
                <div className="space-y-10">
                    {galeries.length > 0 ? (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                            {galeries.map((galeri, index) => (
                                <Dialog key={index}>
                                    <DialogTrigger asChild>
                                        <img src={`/storage/${galeri.thumbnail}`} className="w-full rounded-md hover:scale-105 transition duration-300 cursor-pointer" alt={galeri.name} />
                                    </DialogTrigger>
                                    <DialogContent className="gap-2">
                                        <img src={`/storage/${galeri.image}`} className="mx-auto" alt={galeri.name} loading="lazy" />
                                        <h4 className="font-bold text-2xl">{galeri.name}</h4>
                                        <p>{galeri.description}</p>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    ) : (
                        <p className="col-span-4 text-center">
                            Belum ada konten yang ditambah.
                        </p>
                    )}
                    <div className="flex justify-center">
                        <Button
                            variant={"outline"}
                            asChild
                            className="border-2 border-black bg-transparent p-5 hover:bg-black hover:text-white"
                        >
                            <Link href="/galeri">Selengkapnya</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
