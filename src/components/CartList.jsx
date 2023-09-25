import React, { useEffect, useState } from "react";
import CartListButtons from "./CartListButtons";

const CartList = () => {
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        // Verifica se l'applicazione è in esecuzione nel browser
        if (typeof window !== 'undefined') {
            const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items")) || [];
            setCurrentItems(itemsFromLocalStorage);
        }
    }, []);

    const increaseQuantity = (item, newQuantity) => {
        const updatedItems = currentItems.map((cartItem) => {
            if (cartItem.slug.current === item.slug.current) {
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
        });
        setCurrentItems(updatedItems);
        updateLocalStorage(updatedItems);
    };

    const decreaseQuantity = (item, newQuantity) => {
        if (newQuantity <= 0) {
            // Rimuovi completamente l'elemento se la quantità è <= 0
            removeFromLocalStorage(item);
        } else {
            const updatedItems = currentItems.map((cartItem) => {
                if (cartItem.slug.current === item.slug.current) {
                    return { ...cartItem, quantity: newQuantity };
                }
                return cartItem;
            });
            setCurrentItems(updatedItems);
            updateLocalStorage(updatedItems);
        }
    };

    const removeFromLocalStorage = (itemToRemove) => {
        const updatedItems = currentItems.filter((cartItem) => cartItem.slug.current !== itemToRemove.slug.current);
        setCurrentItems(updatedItems);
        updateLocalStorage(updatedItems);
    };

    const updateLocalStorage = (items) => {
        localStorage.setItem("items", JSON.stringify(items));
    };

    return (
        <div className="text-black">
            {currentItems.length === 0 ? (
                <p>Il tuo carrello è vuoto.</p>
            ) : (
                <ul>
                    {currentItems.map((item, index) => (
                        <li
                            key={index}
                            className="my-3 flex justify-between border-blue-900 border-2 p-3 items-center rounded-md"
                        >
                            <div className="flex flex-col">
                                <span>{item.name}</span>
                                <span>{item.price}€</span>
                            </div>

                            <div>
                                x {item.quantity}
                            </div>
                            <div>

                                <CartListButtons
                                    item={item}
                                    onIncrease={(newQuantity) => increaseQuantity(item, newQuantity)}
                                    onDecrease={(newQuantity) => decreaseQuantity(item, newQuantity)}
                                    onDelete={() => removeFromLocalStorage(item)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartList;