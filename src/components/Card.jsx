

const Card = ({ title, price }) => {
    return (
        <div className="bg-blue-700 my-4 rounded-md p-2">
            <h1>{title}</h1>
            <h2>{price}</h2>
        </div>
    )
}

export default Card