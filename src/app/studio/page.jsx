import SetCucina from "../../components/SetCucina";
import DietroLeQuinte from "../../components/DietroLeQuinte";
import MainSet from "../../components/MainSet";
import PageIntro from "../../components/PageIntro";
import Values from "../../components/Values";
import React from "react";
import ContactSection from "../../components/ContactSection";

export const metadata = {
  title: 'Tulpa Studio | Studio',
  description: 'Scopri lo studio che Tulpa ti mette a disposizione per la realizzazione dei tuoi progetti.',
}

const StudioPage = () => {
  return (
    <>
      <PageIntro title="Lo studio">
        <p>
          Tulpa Studio ha sede in un capannone di 400 mq. in provincia di Ferrara con un’infrastruttura tecnologicamente avanzata e all’avanguardia per la realizzazione di prodotti cinematografici.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <MainSet />
        {/* Build */}
        <SetCucina />
        {/* Deliver */}
        <DietroLeQuinte />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default StudioPage;
