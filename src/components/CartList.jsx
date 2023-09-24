'use client';

import FadeIn from "./FadeIn";

const CartList = () => {
    const currentItems = JSON.parse(localStorage.getItem("items")) || [];

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
            </div></FadeIn>
    );
};

export default CartList;