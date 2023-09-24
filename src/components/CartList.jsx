'use client';

import React, { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

const CartList = () => {
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        // Verifica se l'applicazione è in esecuzione nel browser
        if (typeof window !== 'undefined') {
            const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items")) || [];
            setCurrentItems(itemsFromLocalStorage);
        }
    }, []);

    return (
        <FadeIn className="max-w-3xl">
            <div className="text-black">
                <ul>
                    {currentItems.map((item, index) => (
                        <li key={index}>
                            <span>{item.title}</span> - <span>{item.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </FadeIn>
    );
};

export default CartList;