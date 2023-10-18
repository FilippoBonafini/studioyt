import PageIntro from "../../components/PageIntro";
import Container from "../../components/Container";
import PortfolioGrid from "../../components/PortfolioGrid";

export const metadata = {
  title: 'Tulpa Studio | Portfolio',
  description: 'Esplora i progetti di Tulpa Studio e scopri cosa sono in grado di realizzare.',
}

const PortfolioPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="I nostri lavori"
        title="Portfolio"
      >
      </PageIntro>

      <Container className='mt-10'>
        <PortfolioGrid />
      </Container>

    </>
  );
};

export default PortfolioPage;
