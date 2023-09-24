import React, { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import Button from "./Button";

const CartList = () => {
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        // Verifica se l'applicazione è in esecuzione nel browser
        if (typeof window !== 'undefined') {
            const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items")) || [];
            setCurrentItems(itemsFromLocalStorage);
        }
    }, []);

    const removeFromLocalStorage = (itemToRemove) => {
        const currentItemsCopy = [...currentItems]; // Crea una copia dell'array corrente

        const indexToRemove = currentItemsCopy.findIndex((item) => item.id === itemToRemove.id);

        if (indexToRemove !== -1) {
            currentItemsCopy.splice(indexToRemove, 1);
            localStorage.setItem("items", JSON.stringify(currentItemsCopy));
            setCurrentItems(currentItemsCopy);
        }
    };

    return (

        <div className="text-black">
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index} className="my-3 flex justify-between border-blue-900 border-2 p-3 items-center rounded-md">
                        <div>
                            <span>{item.item.name}</span> - <span>{item.item.price}$</span>
                        </div>

                        <Button onClick={() => removeFromLocalStorage(item)}>Remove</Button>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default CartList;