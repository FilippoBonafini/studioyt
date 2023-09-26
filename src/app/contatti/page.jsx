'use client'

import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/Button";



export const metadata = {
  title: 'Tulpa Studio | Contatti',
  description: 'Inizia a collaborare con Tulpa e mettiti subito in contatto con loro!',
}

const ContactPage = () => {
  const [visible, setVisible] = useState(true)
  const handleSubmit = () => {
    setVisible(false)
  };
  return (
    <>
      {visible ? (<>
        <PageIntro eyebrow="Contattaci" title="Iniziamo a lavorare insieme">
          <p>Raccontaci il tuo progetto</p>
        </PageIntro>
      </>) : (<></>)}

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          {visible ? (
            <ContactForm handleSubmitProp={handleSubmit} />
          ) : (
            <div className="flex items-center flex-col gap-5">
              <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-green-700 sm:text-4xl">
                La tua richiesta è stata inviata
              </h3>
              <span className="text-black">Verrai contattato a breve</span>
              <Button href={"/"}>
                Torna alla Home
              </Button>
            </div>
          )}

          <ContactDetails />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
