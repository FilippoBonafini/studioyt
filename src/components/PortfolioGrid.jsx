import PortfolioCard from "./PortfolioCard"
const PortfolioGrid = () => {
    return (
        <div className="grid mt-14 lg:grid-cols-2 gap-6 md:grid-cols-2 sm:grid-cols-1 items-center">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
        </div>
    )
}

export default PortfolioGrid