import PortfolioCard from "./PortfolioCard"
const PortfolioGrid = () => {
    return (
        <div className="grid mt-14 lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 items-center">
            <PortfolioCard />
        </div>
    )
}

export default PortfolioGrid