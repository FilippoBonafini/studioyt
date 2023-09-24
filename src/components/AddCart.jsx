import Button from "./Button"

const AddCart = ({ item }) => {

    const addToLocalStorage = (item) => {
        const itemToAdd = { item };
        const currentItems = JSON.parse(localStorage.getItem("items")) || [];
        currentItems.push(itemToAdd);
        localStorage.setItem("items", JSON.stringify(currentItems));
    };

    return (
        <Button className="rounded-md" onClick={addToLocalStorage(item)}>
            Add
        </Button>
    )
}

export default AddCart