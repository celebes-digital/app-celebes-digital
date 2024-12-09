import ClientSlider from "@/Components/MyComponent/ClientSlider";
import Hero from "@/Components/MyComponent/Hero";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { Product } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { SyntheticEvent } from "react";
import toast from "react-hot-toast";

export default function ProductDetail({ product }: { product: Product }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        product_id: product.id,
        no_telepon: '',
        email: '',
        ide: ''
    })

    const submit = (e: SyntheticEvent) => {
        e.preventDefault()
        post('/contact', {
            onSuccess: () => {
                toast.success('Mengirim pesan berhasil!')
                reset()
            },
            onError: (err) => {
                toast.error('Gagal mengirim pesan!')
                console.log(err)

            }
        })
    }

    return (
        <GuestLayout>
            <Hero title={product.name} subtitle={product.description} />

            <div className="font-jakarta relative pb-20">
                <img
                    src="/assets/image/halfcircle_2.webp"
                    alt="half circle"
                    className="absolute right-0 top-40"
                    width={80}
                    loading="lazy"
                />

                <div className="container space-y-20 px-5 py-10">
                    <div className="space-y-5">
                        <h2 className="font-bold text-2xl">Galeri Produk</h2>
                        <div className="space-y-5 flex items-center overflow-auto scroll-hidden gap-4">
                            {product.screenshots
                                .map((screenshot, i) => (
                                    <img src={`/storage/${screenshot}`} width={300} className="rounded-md" alt={screenshot} key={i} />
                                ))}
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div
                            className="space-y-4 text-justify"
                            dangerouslySetInnerHTML={{
                                __html: `${product.detail}`,
                            }}
                        />
                    </div>
                    <Link href={`/case/${product.slug}`} className="block">
                        <ClientSlider clients={product.clients} />
                    </Link>
                </div>
            </div>

            <div className="font-jakarta pb-20">
                <div className="mx-auto max-w-screen-sm flex-col gap-10 px-5 lg:max-w-screen-lg lg:flex-row">
                    <div className="w-full space-y-10">
                        <h1 className="text-2xl font-bold leading-[150%] tracking-[2%]">
                            Beritahu Kami Idemu
                        </h1>
                        <form onSubmit={submit} className="space-y-5">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="font-semibold">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    name="name"
                                    id="name"
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Cth. John Doe"
                                    className="rounded-full border px-5 py-2 focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
                                />
                                {errors.name && <span className="text-red-700">{errors.name}</span>}
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="no_telepon" className="font-semibold">
                                    No. Telpon
                                </label>
                                <input
                                    type="tel"
                                    value={data.no_telepon}
                                    onChange={(e) => setData('no_telepon', e.target.value)}
                                    name="no_telepon"
                                    id="no_telepon"
                                    placeholder="Cth. 085"
                                    className="rounded-full border px-5 py-2 focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
                                />
                                {errors.no_telepon && <span className="text-red-700">{errors.no_telepon}</span>}

                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="email" className="font-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    name="email"
                                    id="email"
                                    placeholder="johndoe@contoh.com"
                                    className="rounded-full border px-5 py-2 focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
                                />
                                {errors.email && <span className="text-red-700">{errors.email}</span>}
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="ide" className="font-semibold">
                                    Ide Kamu
                                </label>
                                <textarea
                                    placeholder="Deskripsikan Idemu"
                                    value={data.ide}
                                    name="ide"
                                    id="ide"
                                    onChange={(e) => setData('ide', e.target.value)}
                                    className="h-[150px] rounded-xl border px-5 py-2 focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
                                ></textarea>
                                {errors.ide && <span className="text-red-700">{errors.ide}</span>}
                            </div>
                            <Button
                                type="submit"
                                disabled={processing}
                                className="hover:bg-red bg-primary p-6 font-semibold transition hover:scale-105"
                            >
                                Kirim
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
