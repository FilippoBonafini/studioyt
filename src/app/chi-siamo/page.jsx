
import ContactSection from "../../components/ContactSection";
import PageIntro from "../../components/PageIntro";
import SingleSection from "../../components/SingleSection";
import michelangelo from "../../images/michelangelo.jpg"
import Testimonials from "../../components/Testimonials"

export const metadata = {
  title: 'Tulpa Studio | Chi siamo',
  description: 'Scopri la storia di tulpa studio e il metodo di lavoro che adotta.',
}

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Chi siamo" title="Dal pensiero alla forma">
        <p className="mb-10 md:mb-20">
          Tulpa Studio è fondata da Michelangelo Ingrosso, operatore di ripresa e direttore della fotografia con molti anni di esperienza nel settore commerciale.
        </p>
      </PageIntro>


      <SingleSection title="" image={{ src: michelangelo }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            La casa di produzione si avvale di una vasta rete di professionisti dell’audiovisivo come produttori, sceneggiatori, operatori di ripresa, montatori, colorist, direttori della fotografia e registi.
          </p>
          <p>
            Ogni progetto è analizzato è valutato con la massima attenzione per consentire la costruzione di un team dedicato all’esecuzione del lavoro dalla pre-produzione alle riprese e montaggio del prodotto.
          </p>
        </div>
      </SingleSection>


      < p className="mt-4" >
        In poche parole, amiamo raccontare incredibili storie.
      </p >
      <Testimonials
        className="mt-4 sm:mt-10 lg:mt-15"
      >

        In poche parole, amiamo raccontare incredibili storie.

      </Testimonials>
      <ContactSection />
    </>
  );
};

export default AboutPage;
