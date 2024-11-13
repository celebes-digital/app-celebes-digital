import Hero from "@/Components/MyComponent/Hero";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Contact() {
    return (
        <GuestLayout>
            <Hero title="Hubungi Kami!" subtitle="Ayo bekerja sama dengan kami untuk mewujudkan impian bisnismu!" />

            <div className="py-20 font-jakarta">
                <div className=" max-w-screen-sm lg:max-w-screen-lg mx-auto px-5 flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/2 space-y-10">
                        <h1 className="text-2xl leading-[150%] tracking-[2%] font-bold">Beritahu Kami Idemu</h1>
                        <form action="" className="space-y-5">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="font-semibold">Nama</label>
                                <input type="text" placeholder="Cth. John Doe" className="rounded-full border px-5 py-2 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-primary" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="name" className="font-semibold">No. Telpon</label>
                                <input type="text" placeholder="Cth. 085" className="rounded-full border px-5 py-2 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-primary" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="name" className="font-semibold">Email</label>
                                <input type="email" placeholder="johndoe@contoh.com" className="rounded-full border px-5 py-2 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-primary" />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="name" className="font-semibold">Ide Kamu</label>
                                <textarea placeholder="Deskripsikan Idemu" className="rounded-xl border px-5 py-2 focus:ring-0 h-[150px] focus:ring-offset-0 focus:outline-none focus:border-primary"></textarea>
                            </div>
                            <Button type="submit" className="hover:bg-red bg-primary p-6 font-semibold transition hover:scale-105">
                                Kirim
                            </Button>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-10">
                        <h1 className="text-2xl leading-[150%] tracking-[2%] font-bold">Kontak Kami</h1>
                        <ul className="grid gap-5">
                            <li className="flex items-center gap-2">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00333 6.38355L9.99995 10.3819L17.9967 6.3835C17.9363 5.33315 17.0655 4.5 16 4.5H4C2.93452 4.5 2.06363 5.33318 2.00333 6.38355Z" fill="#000000" />
                                    <path d="M18 8.6179L9.99995 12.6179L2 8.61796V14.5C2 15.6046 2.89543 16.5 4 16.5H16C17.1046 16.5 18 15.6046 18 14.5V8.6179Z" fill="#000000" />
                                </svg>
                                <span className="underline">cs@celebesdigital.id</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 3.5C2 2.94772 2.44772 2.5 3 2.5H5.15287C5.64171 2.5 6.0589 2.85341 6.13927 3.3356L6.87858 7.77147C6.95075 8.20451 6.73206 8.63397 6.3394 8.8303L4.79126 9.60437C5.90756 12.3783 8.12168 14.5924 10.8956 15.7087L11.6697 14.1606C11.866 13.7679 12.2955 13.5492 12.7285 13.6214L17.1644 14.3607C17.6466 14.4411 18 14.8583 18 15.3471V17.5C18 18.0523 17.5523 18.5 17 18.5H15C7.8203 18.5 2 12.6797 2 5.5V3.5Z" fill="#000000" />
                                </svg>
                                <span className="underline">+ 62 853-4291-3781</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05025 4.55025C7.78392 1.81658 12.2161 1.81658 14.9497 4.55025C17.6834 7.28392 17.6834 11.7161 14.9497 14.4497L10 19.3995L5.05025 14.4497C2.31658 11.7161 2.31658 7.28392 5.05025 4.55025ZM10 11.5C11.1046 11.5 12 10.6046 12 9.5C12 8.39543 11.1046 7.5 10 7.5C8.89543 7.5 8 8.39543 8 9.5C8 10.6046 8.89543 11.5 10 11.5Z" fill="#000000" />
                                </svg>
                                <span className="underline">
                                    Jalan Andi Djemma No. 38, Makassar, Sulawesi Selatan
                                </span>
                            </li>
                            <li>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.6300353201514!2d119.42331144919636!3d-5.163075107786435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee33c12065e47%3A0xda6d2b591322fb5a!2sPT%20Celebes%20solusi%20digital!5e0!3m2!1sid!2sid!4v1731301371752!5m2!1sid!2sid" height="400" className="w-full border-none rounded-md" allowFullScreen={true} loading="lazy" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}