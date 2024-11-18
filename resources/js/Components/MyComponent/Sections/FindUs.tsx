import { useInView } from "@/hooks/useInView";

export default function FindUs() {
    const { ref, isVisible } = useInView();

    return (
        <div className="font-jakarta flex flex-col items-center space-y-16 pt-20">
            <h1 className="relative w-fit text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                Temukan Kami
                <svg
                    width="41"
                    ref={ref}
                    className={`${isVisible ? "draw" : ""} path absolute -right-10 top-4 w-8`}
                    height="70"
                    viewBox="0 0 41 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.5001 2.50003C18.5851 2.50016 34.6698 22.874 18.5852 61.3246"
                        stroke="#DD0000"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    <path
                        d="M13.0568 49.4596C16.7047 55.1742 18.4615 61.8159 17.0749 67.3234"
                        stroke="#DD0000"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    <path
                        d="M29.009 53.7464C23.1283 56.9003 18.4615 61.8159 17.0749 67.3234"
                        stroke="#DD0000"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </svg>
            </h1>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.6300353201514!2d119.42331144919636!3d-5.163075107786435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee33c12065e47%3A0xda6d2b591322fb5a!2sPT%20Celebes%20solusi%20digital!5e0!3m2!1sid!2sid!4v1731301371752!5m2!1sid!2sid"
                height="400"
                className="w-full border-none"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
