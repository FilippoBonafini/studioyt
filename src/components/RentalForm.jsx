'use client';

import React, { useRef, useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";
import MailOk from "./MailOk";



export default function RentalForm() {

    const [messageSent, setMessageSent] = useState(false);
    const messageRef = useRef(null);
    const [messageContent, setContent] = useState('')
    const [activeForm, setActiveForm] = useState(true)


    async function handleSubmit(event) {
        event.preventDefault();

        const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items")) || [];

        setActiveForm(false);

        const data = {
            nome: event.target.nome.value,
            email: event.target.email.value,
            telefono: event.target.telefono.value,
            messaggio: event.target.messaggio.value,
            carrello: itemsFromLocalStorage
        }

        const response = await fetch("/api/rental", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            setActiveForm(true);
            setMessageSent(true);
            setContent('PREVENTIVO RICHIESTO');
            scrollIntoViewAtTop(messageRef.current, 40); // Scroll in cima
        }

        if (!response.ok) {
            setActiveForm(true);
            setContent("ERRORE NELLA RICHIESTA");
            scrollIntoViewAtTop(messageRef.current, 40); // Scroll in cima
        }

        function scrollIntoViewAtTop(element, offset) {
            if (element) {
                const scrollOptions = {
                    top: 0, // Imposta la posizione in alto
                    behavior: 'smooth',
                    block: 'start',
                };

                window.scrollTo({
                    ...scrollOptions,
                });
            }
        }
    }

    return (
        <FadeIn>
            <div ref={messageRef} id="message" className="my-6 sticky top-0">
                <MailOk message={messageContent} linkVisible={false} />
            </div>
            <form onSubmit={handleSubmit}>
                <h2 className=" font-display text-base font-semibold text-neutral-950">
                    Finalizza
                </h2>
                <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                    <TextInput label="Nome" name="nome" autoComplete="name" />
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                    />
                    <TextInput label="Telefono" type="tel" name="telefono" autoComplete="tel" />
                    <TextInput label="Messaggio" name="messaggio" />
                </div>
                <Button disabled={activeForm ? false : true} type="submit" className="mt-10">
                    Richiedi preventivo
                </Button>
            </form>
        </FadeIn>
    );
};
