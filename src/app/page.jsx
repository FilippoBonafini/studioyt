import Clients from "../components/Clients";
import ContactSection from "../components/ContactSection";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

// import videoBg from "public/presentation.mp4"

export const metadata = {
  title: 'Tulpa Studio',
  description: 'Dal pensiero alla forma',

}


export default function Home() {
  return (
    <main className="text-black mt-20">


      {/* <video loop autoPlay muted className="w-full h-screen md:h-full object-cover ">
        <source src="/presentation.mp4" type="video/mp4" />
      </video> */}

      <Container className="mt-10">
        <FadeIn className="max-w-3xl">

          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Dal pensiero alla <span className="text-blue-700">forma</span>
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Trasformiamo le idee in progetti reali.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        Portiamo un’idea dal pensiero alla forma attraverso strumenti audiovisivi all’avanguardia e vaste competenze dettate da reale esperienza sul campo
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
