import React, { useEffect, useState } from "react";
import CartListButtons from "./CartListButtons";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/lib/client';
import Image from 'next/image';
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
    return builder.image(source)
}


const CartList = () => {
    const [currentItems, setCurrentItems] = useState([]);
    const [removeConfirmation, setRemoveConfirmation] = useState(null);

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
            // Chiedi conferma prima di rimuovere completamente l'elemento
            setRemoveConfirmation(item);
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
        setRemoveConfirmation(null); // Chiudi la conferma
    };

    const updateLocalStorage = (items) => {
        localStorage.setItem("items", JSON.stringify(items));
    };

    // Calcola il totale del carrello
    const calculateTotal = () => {
        let total = 0;
        currentItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <div className="text-black">
            {currentItems.length === 0 ? (
                <div>
                    <p className="my-4 text-2xl">Il tuo carrello è vuoto</p>
                    <Link href={'/rental'} className="text-blue-700 underline underline-offset-4">Vai al rental</Link>
                </div>
            ) : (
                <div>
                    <ul>
                        {currentItems.map((item, index) => (
                            <li
                                key={index}
                                className="my-3 flex justify-between border-blue-900 border-2 p-3 items-center rounded-md"
                            >

                                <div className="flex items-center gap-4">
                                    <Link prefetch={true} href={`/rental/${item.slug.current}`}>
                                        <Image className="rounded hidden  lg:block" quality={100} loading='eager' width={80} height={80} src={urlFor(item.images[0]).width(80).height(80).url()} />
                                    </Link>

                                    <div className="flex flex-col">
                                        <Link prefetch={true} href={`/rental/${item.slug.current}`}>

                                            <span>{item.name}</span>
                                        </Link>

                                        <span>{item.price}€</span>
                                    </div>

                                </div>
                                <div>
                                    <div>Quantità: {item.quantity}</div>
                                    <CartListButtons
                                        item={item}
                                        onIncrease={(newQuantity) => increaseQuantity(item, newQuantity)}
                                        onDecrease={(newQuantity) => decreaseQuantity(item, newQuantity)}
                                        onDelete={() => setRemoveConfirmation(item)}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <span>Totale: {calculateTotal()}€</span>
                </div>
            )}
            {removeConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded-lg m-4">
                        <p className="text-xl mb-4 mt-2">Vuoi davvero rimuovere "{removeConfirmation.name}" dal carrello?</p>
                        <button
                            onClick={() => removeFromLocalStorage(removeConfirmation)}
                            className="bg-blue-700 text-white py-1 px-2 rounded text-xl"
                        >
                            Conferma
                        </button>
                        <button
                            onClick={() => setRemoveConfirmation(null)}
                            className="bg-gray-300 text-gray-700 py-1 px-2 rounded text-xl ml-2"
                        >
                            Annulla
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartList;
