'use client';

import React, { useRef, useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";
import MailOk from "./MailOk";





export default function ContactForm({ handleSubmitProp }) {

  const [messageSent, setMessageSent] = useState(false);
  const messageRef = useRef(null);
  const [messageContent, setContent] = useState('')
  const [activeForm, setActiveForm] = useState(true)

  async function handleSubmit(event) {
    event.preventDefault();
    setActiveForm(false);

    const data = {
      nome: event.target.nome.value,
      email: event.target.email.value,
      compagnia: event.target.compagnia.value,
      telefono: event.target.telefono.value,
      messaggio: event.target.messaggio.value
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    if (response.ok) {
      setActiveForm(true);
      setMessageSent(true);
      setContent('MESSAGGIO INVIATO');
      scrollIntoViewAtTop(messageRef.current, 40); // Scroll in cima
      handleSubmitProp();
    }

    if (!response.ok) {
      setActiveForm(true);
      setContent("ERRORE NELL'INVIO");
      scrollIntoViewAtTop(messageRef.current, 40); // Scroll in cima
      handleSubmitProp();
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
      <div ref={messageRef} id="message" className="my-6">
        <MailOk message={messageContent} linkVisible={messageSent} />
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-blue-800">
          Modulo di contatto
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nome" name="nome" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Compagnia"
            name="compagnia"
            autoComplete="Compagnia"
          />
          <TextInput label="Telefono" type="tel" name="telefono" autoComplete="tel" />
          <TextInput label="Messaggio" name="messaggio" />
        </div>
        <Button disabled={activeForm ? false : true} type="submit" className="mt-10">
          Iniziamo a lavorare insieme
        </Button>
      </form>
    </FadeIn>
  );
};
