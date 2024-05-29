import { Link } from "react-router-dom";
import banner from "@/assets/images/undraw_page_not_found_re_e9o6.svg";

const Error404 = () => {
    return (
        <>
            <section className="min-h-screen flex flex-col gap-5 items-center justify-center">
                <img src={banner} alt="error-banner" className="w-50" />
                <Link to="/" className="hover:underline shadow-custom rounded-xl p-4 bg-zinc-200/75 border-2">
                    Go back to Home
                </Link>
            </section>
        </>
    );
};

export default Error404;
