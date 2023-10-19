import Link from "next/link";

const PortfolioCard = ({ className, ...restProps }) => {
    return (
        <Link href={'portfolio/test'} className="inline-block text-black shadow-md relative cursor-pointer h-200px overflow-hidden group" {...restProps}>
            <div className="relative">
                <img src="https://placehold.co/500x300" alt="test" />
            </div>
            <div className="absolute top-0 right-0 bottom-0  bg-blue-700 text-white p-4 w-[140px] group-hover:right-[-110px] transition-all duration-300 ease-in-out z-10 flex items-center">

                <h2 className="text-2xl">Progetto di prova asdasda </h2>
            </div>
            <div className=" absolute top-0 right-6 bottom-0 bg-blue-700 text-white  w-[150px] group-hover:right-[-110px] group-hover:skew-x-0 transition-all duration-300 ease-in-out skew-x-12"></div>
        </Link>
    );
}

export default PortfolioCard;
