import Link from "next/link";

const PortfolioCard = ({ className, ...restProps }) => {
    return (
        <Link href={'portfolio/test'} className={`inline-block text-black shadow-md relative transition-transform transform hover:scale-[1.02] cursor-pointer h-[200px] overflow-hidden ${className}`} {...restProps}>
            <video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" autoPlay loop></video>
        </Link>
    );
}

export default PortfolioCard;

