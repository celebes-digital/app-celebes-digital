import { Client } from "@/types";
import Marquee from 'react-fast-marquee'

export default function ClientSlider({ clients }: { clients: Client[] }) {
    return (
        <Marquee autoFill={true} className="overflow-hidden grid">
            {clients.length > 0 ? (
                clients.map((client, i) => (
                    <img
                        src={`/storage/${client.image}`}
                        alt={client.name}
                        key={i}
                        className="opacity-30 transition duration-200 hover:opacity-100 mr-10"
                        height={20}
                    />
                ))
            ) : (
                <p>Belum ada data client yang dibuat.</p>
            )}
        </Marquee>
    )
}