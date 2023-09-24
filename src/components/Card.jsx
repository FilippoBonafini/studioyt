import Button from "./Button"
import FadeIn from "./FadeIn";

const Card = ({ title, price }) => {

    const addToLocalStorage = () => {
        const itemToAdd = { title, price };
        const currentItems = JSON.parse(localStorage.getItem("items")) || [];
        currentItems.push(itemToAdd);
        localStorage.setItem("items", JSON.stringify(currentItems));
    };


    return (
        <FadeIn>
            <div className="my-4 rounded-md p-2 bg-white text-black shadow-xl">
                <h1>{title}</h1>
                <h2>{price}$</h2>
                <Button className="rounded-md" onClick={addToLocalStorage}>Add</Button>
            </div>
        </FadeIn>
    )
}

export default Card