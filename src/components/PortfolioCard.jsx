const PortfolioCard = ({ className, ...restProps }) => {
    return (
        <div className={`inline-block text-black shadow-md relative transition-transform transform hover:scale-105 hover:shadow-2xl ${className}`} {...restProps}>
            PortfolioCard
        </div>
    );
}

export default PortfolioCard;
