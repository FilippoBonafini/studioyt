import Container from "../../components/Container";
import Cultures from "../../components/Cultures";
import ContactSection from "../../components/ContactSection";
import PageIntro from "../../components/PageIntro";
import { StatList, StatListItem } from "../../components/StatList";
import React from "react";

export const metadata = {
  title: 'Tulpa Studio | Chi siamo',
  description: 'Scopri la storia di tulpa studio e il metodo di lavoro che adotta.',
}

const AboutPage = () => {
  return (
    <>
      {/* <video
      controls
      autoPlay={true}
      className="mt-12 object-contain rounded-xl "
    >
      <source src="/presentation.mp4" type="video/mp4" />
    </video> */}
      <PageIntro eyebrow="Chi siamo" title="Dal pensiero alla forma">
        <p>
          Tulpa Studio è fondata da Michelangelo Ingrosso, operatore di ripresa e direttore della fotografia con molti anni di esperienza nel settore commerciale.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            La casa di produzione si avvale di una vasta rete di professionisti dell’audiovisivo come produttori, sceneggiatori, operatori di ripresa, montatori, colorist, direttori della fotografia e registi.
          </p>
          <p>
            Ogni progetto è analizzato è valutato con la massima attenzione per consentire la costruzione di un team dedicato all’esecuzione del lavoro dalla pre-produzione alle riprese e montaggio del prodotto.
          </p>
        </div>
        <p className="mt-4">
          In poche parole, amiamo raccontare incredibili storie.

        </p>
      </PageIntro>



      {/* <Container className="mt-20">
        <StatList>
          <StatListItem value="35" label="Macchine professionali" />
          <StatListItem value="140m²" label="Superficie stage" />
          <StatListItem value="20" label="luci" />
        </StatList>
      </Container>
      <Cultures /> */}
      <ContactSection />
    </>
  );
};

export default AboutPage;
