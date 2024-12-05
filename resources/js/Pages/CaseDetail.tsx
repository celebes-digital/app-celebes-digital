import Hero from "@/Components/MyComponent/Hero";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { extractFirstParagraph } from "@/lib/paragrafExtract";
import { Portofolio } from "@/types";
import { useForm } from "@inertiajs/react";
import { SyntheticEvent } from "react";
import toast from "react-hot-toast";

export default function CaseDetail({ portofolio }: { portofolio: Portofolio }) {
    const categories = portofolio.categories
        .map((category) => category.name)
        .join(", ");

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        portofolio_id: portofolio.id,
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
            <Hero title={portofolio.name} />

            <div className="font-jakarta relative pb-20">
                <img
                    src="/assets/image/halfcircle_2.webp"
                    alt="half circle"
                    className="absolute right-0 top-40"
                    width={80}
                    loading="lazy"
                />
                <div className="container space-y-20 px-5">
                    <div className="space-y-5">
                        <div
                            className={`relative z-20 -mt-20 h-[550px] w-full rounded-md bg-cover bg-center shadow-md`}
                            style={{
                                backgroundImage: `url(/storage/${portofolio.screenshots[0]})`,
                            }}
                        ></div>
                        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                            <span className="order-2 text-sm font-bold text-black/50 md:order-1">
                                Client: {portofolio.client.name}
                            </span>
                            <span className="order-1 text-sm font-bold text-black/50 md:order-2">
                                Service: {categories}
                            </span>
                        </div>
                    </div>

                    <div className="mx-auto max-w-screen-lg space-y-5">
                        <div
                            className="space-y-4 text-justify"
                            dangerouslySetInnerHTML={{
                                __html: `${portofolio.description}`,
                            }}
                        />
                    </div>

                    <div className="space-y-5">
                        {portofolio.screenshots
                            .slice(1, portofolio.screenshots.length)
                            .map((screenshot, i) => (
                                <div
                                    className={`relative z-20 h-[550px] w-full rounded-md bg-cover bg-center shadow-md`}
                                    style={{
                                        backgroundImage: `url(/storage/${screenshot})`,
                                    }}
                                    key={i}
                                ></div>
                            ))}
                    </div>
                </div>
            </div>

            <div className="font-jakarta py-20">
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
