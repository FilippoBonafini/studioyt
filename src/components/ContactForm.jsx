'use client';

import React, { useRef, useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";
import MailOk from "./MailOk";




export default function ContactForm() {

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
      messaggio: event.target.messaggio.value,
      budget: event.target.budget.value
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    // console.log(response)
    if (response.ok) {
      setActiveForm(false);
      setMessageSent(true);
      setContent('MESSAGGIO INVIATO');
      scrollIntoViewWithOffset(messageRef.current, 40);
    }

    if (!response.ok) {
      setActiveForm(false);
      setContent("ERRORE NELL'INVIO");
      scrollIntoViewWithOffset(messageRef.current, 40);
    }

    function scrollIntoViewWithOffset(element, offset) {
      if (element) {
        const scrollOptions = {
          behavior: 'smooth',
          block: 'start',
        };

        const currentPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const newPosition = currentPosition - offset;

        window.scrollTo({
          top: newPosition,
          ...scrollOptions,
        });
      }
    }
  }

  return (
    <FadeIn>
      <div ref={messageRef} id="message" className="my-6">
        <MailOk message={messageContent} />
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
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
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="€0 – €1K" name="budget" value="1" />
              <RadioInput label="€1 – €5K" name="budget" value="5" />
              <RadioInput label="€5 – €10K" name="budget" value="10" />
              <RadioInput label="Più di €10K" name="budget" value="15" />
            </div>
          </div>
        </div>
        <Button disabled={activeForm ? false : true} type="submit" className="mt-10">
          Iniziamo a lavorare insieme
        </Button>
      </form>
    </FadeIn>
  );
};
