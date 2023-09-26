'use client'
import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Link from "next/link";
import CartList from "@/components/CartList";
import FadeIn from "@/components/FadeIn";
import RentalForm from "@/components/RentalForm";


const Page = () => {
    const [visible, setVisible] = useState(true)
    const [element, setElement] = useState([]);
    const handleEmptyCart = () => {
        localStorage.removeItem("items");
        setElement([]);
        setVisible(false)
    };
    useEffect(() => {
        // Verifica se l'applicazione è in esecuzione nel browser
        if (typeof window !== 'undefined') {
            setVisible(true)
            const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items")) || [];
            setElement(itemsFromLocalStorage);
        }
    }, []);

    return (
        <Container className="mt-16 text-black">
            <FadeIn>
                {visible ? (
                    <>
                        <Link href={'/rental'} prefetch={true}>
                            <Button>
                                Indietro
                            </Button>
                        </Link>
                        <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-20">
                            <div>
                                <CartList />
                            </div>
                            <div>
                                <RentalForm onEmptyCart={handleEmptyCart} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center flex-col gap-5">
                        <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-green-700 sm:text-4xl">
                            La tua richiesta è stata inviata
                        </h3>
                        <span>Verrai contattato a breve</span>
                        <Button href={"/"}>
                            Torna alla Home
                        </Button>
                    </div>
                )}

            </FadeIn>
        </Container>
    )
}

export default Page;
