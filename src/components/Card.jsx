'use client'
import FadeIn from "./FadeIn";
import AddCart from "./AddCart";

const Card = ({ item, confermPop }) => {
    const conferma = () => {
        confermPop()
    }
    return (
        <FadeIn>
            <div className=" rounded-sm p-2 bg-white text-black shadow-md">
                <h1>{item.name}</h1>
                <h2>{item.price}$</h2>
                <AddCart item={item} confermPop={conferma} />
            </div>
        </FadeIn>
    )
}

export default Card