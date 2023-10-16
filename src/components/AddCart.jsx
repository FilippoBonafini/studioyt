import React, { useEffect } from "react";
import Button from "./Button";

const AddCart = ({ item, className, confermPop, children }) => {
    const addToLocalStorage = () => {
        // Ottieni l'array corrente dal localStorage o inizializza un array vuoto
        const currentItems = JSON.parse(localStorage.getItem("items")) || [];

        // Cerca se un elemento con lo stesso id è già presente nell'array
        const existingItemIndex = currentItems.findIndex((existingItem) => existingItem.slug.current === item.slug.current);

        if (existingItemIndex !== -1) {
            // Se l'elemento esiste, incrementa la quantità invece di aggiungere un nuovo elemento
            currentItems[existingItemIndex].quantity += 1;
        } else {
            // Altrimenti, aggiungi il nuovo elemento
            currentItems.push({ ...item, quantity: 1 });
        }

        // Aggiorna il localStorage con l'array aggiornato
        localStorage.setItem("items", JSON.stringify(currentItems));
        confermPop();
    };

    return (
        <Button className={`rounded-full  ${className}`} onClick={addToLocalStorage}>
            {children}
        </Button>
    );
};

export default AddCart;