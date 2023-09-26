'use client'
import FadeIn from "./FadeIn";
import AddCart from "./AddCart";

const Card = ({ item, confermPop }) => {
    const conferma = () => {
        confermPop()
    }
    return (
        <FadeIn>
            <div className=" bg-white text-black shadow-md relative">
                <img className="pb-5" src="https://i.pinimg.com/originals/33/14/03/3314031914056608500c925e0dbd3cf8.jpg" alt="cinepresa" />
                <div className="absolute bottom-4 left-4 bg-blue-700 bg-transaparent p-1 rounded-full">
                    <div className=" rounded-full text-white pl-4 flex items-center gap-4">
                        <span className="text-white font-medium">{item.name}</span>
                        <AddCart item={item} confermPop={conferma} />
                    </div>

                </div>

            </div>
        </FadeIn>
    )
}

export default Card