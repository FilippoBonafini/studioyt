import React, { useState } from "react";
import Button from "./Button";
import { AiFillDelete } from "react-icons/ai";


const CartListButtons = ({ item, onIncrease, onDecrease, onDelete }) => {
    const [quantity, setQuantity] = useState(item.quantity);

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onIncrease(newQuantity);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onDecrease(newQuantity);
        } else {
            // Rimuovi completamente l'elemento quando la quantità è 1 o meno
            onDelete();
        }
    };

    return (
        <div className="flex gap-1">
            <Button onClick={handleIncrease}>+</Button>
            <Button onClick={handleDecrease}>-</Button>
            <Button className={'flex justify-center items-center'} onClick={onDelete}>
                <AiFillDelete />
            </Button>
        </div>
    );
};

export default CartListButtons;