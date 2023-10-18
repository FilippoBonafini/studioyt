import Link from "next/link";

const PortfolioCard = ({ className, ...restProps }) => {
    return (
        <Link href={'portfolio/test'} className={`inline-block text-black shadow-md relative transition-transform transform hover:scale-[1.02] cursor-pointer h-[200px] overflow-hidden ${className}`} {...restProps}>
            <video src="https://placehold.co/3840x2160.mp4?text=Hello+World"></video>
        </Link>
    );
}

export default PortfolioCard;

