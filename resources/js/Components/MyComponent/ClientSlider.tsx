import { Client } from "@/types";
import Marquee from "react-fast-marquee";

export default function ClientSlider({ clients }: { clients: Client[] }) {
    return (
        <>
            {clients.length > 0 ? (
                <Marquee
                    autoFill={true}
                    pauseOnHover={true}
                    className="grid overflow-hidden"
                >
                    {clients.map((client, i) => (
                        <img
                            src={`/storage/${client.image}`}
                            alt={client.name}
                            loading="lazy"
                            key={i}
                            className="mr-10 opacity-30 transition duration-200 hover:opacity-100"
                            width={150}
                        />
                    ))}
                </Marquee>
            ) : (
                <p className="text-center">
                    Belum ada data client yang ditambah.
                </p>
            )}
        </>
    );
}
