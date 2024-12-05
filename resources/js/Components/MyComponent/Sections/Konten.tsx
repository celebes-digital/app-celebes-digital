import { KontenProps } from "@/types";

export default function Konten({
    kontens,
}: {
    kontens: KontenProps[];
}) {
    return (
        <div className="relative" id="case">
            <img
                src="/assets/image/halfcircle_2.webp"
                loading="lazy"
                className="absolute top-1/2 right-0 h-72"
                alt="half circle"
            />
            <div className="font-jakarta container relative space-y-14 px-5 py-20">
                <div className="relative space-y-5 text-center">
                    <h1 className="text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                        Cek Konten Kami!
                    </h1>
                    <p className="font-semibold">
                        Ikuti Update dan Tren Terkini di Industri Kami
                    </p>
                </div>
                {kontens.length > 0 ? (
                    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                        {kontens.map((konten, i) => (
                            <a href={konten.link} target="_blank" key={i}>
                                <img src={`/storage/${konten.thumbnail}`} className="w-full rounded-xl hover:scale-105 transition duration-300" loading="lazy" alt={konten.link} />
                            </a>
                        ))}
                    </div>
                ) : (
                    <p className="col-span-3 text-center">
                        Belum ada konten yang ditambah.
                    </p>
                )}
            </div>
        </div>
    );
}
