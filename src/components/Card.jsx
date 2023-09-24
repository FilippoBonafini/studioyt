import Button from "./Button"
import FadeIn from "./FadeIn";

const Card = ({ item }) => {

    const addToLocalStorage = () => {
        const itemToAdd = { item };
        const currentItems = JSON.parse(localStorage.getItem("items")) || [];
        currentItems.push(itemToAdd);
        localStorage.setItem("items", JSON.stringify(currentItems));
    };


    return (
        <FadeIn>
            <div className="my-4 rounded-md p-2 bg-white text-black shadow-xl">
                <h1>{item.name}</h1>
                <h2>{item.price}$</h2>
                <Button className="rounded-md" onClick={addToLocalStorage}>Add</Button>
            </div>
        </FadeIn>
    )
}

export default Card