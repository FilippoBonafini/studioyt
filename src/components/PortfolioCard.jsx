import Link from "next/link";
import Image from "next/image";
import image from "../images/editing-color-grading-suite.jpg"

const PortfolioCard = ({ className, ...restProps }) => {
    return (
        <Link href={'portfolio/test'} className="inline-block text-black shadow-xl relative cursor-pointer h-200px overflow-hidden rounded-md group" {...restProps}>
            <div className="relative ">
                <Image className="scale-100 group-hover:scale-110 transition-all duration-1000" src={image} width={600} height={400} alt="image" />
            </div>
            <div className="absolute top-0 right-0 bottom-0  bg-blue-700 text-white p-4 w-[130px] group-hover:right-[-110px] transition-all duration-300 ease-in-out z-10 flex items-center">

                <h2 className="text-2xl">Progetto di prova asdasda </h2>
            </div>
            <div className=" absolute top-0 right-6 bottom-0 bg-blue-700 text-white  w-[150px] group-hover:right-[-110px] group-hover:skew-x-0 transition-all duration-300 ease-in-out skew-x-12"></div>
        </Link>
    );
}

export default PortfolioCard;
