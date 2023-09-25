'use client'
import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Link from "next/link";
import CartList from "@/components/CartList";
import FadeIn from "@/components/FadeIn";
import RentalForm from "@/components/RentalForm";

const Page = () => {
    const [element, setElement] = useState([]);

    useEffect(() => {
        // Verifica se l'applicazione è in esecuzione nel browser
        if (typeof window !== 'undefined') {
            const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items")) || [];
            setElement(itemsFromLocalStorage);
        }
    }, []);

    return (
        <Container className="mt-16 text-black">
            <FadeIn className="">
                <Link href={'/rental'} scroll={false} prefetch={true}>
                    <Button>
                        Indietro
                    </Button>
                </Link>
                <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-20">
                    <div>
                        <CartList />
                    </div>
                    <div>
                        <RentalForm />
                    </div>


                </div>
            </FadeIn>
        </Container>
    )
}

export default Page;
