import PageIntro from "../../components/PageIntro";
import Container from "../../components/Container";
import Rental from "../../components/Rental";
import Button from "../../components/Button";
import FadeIn from "../../components/FadeIn";
export const metadata = {
  title: 'Tulpa Studio | Rental',
  description: 'Esplora il catalogo delle nostre attrezzature, scopri quale sarebbe la soluzione migliore per te!',
}

const RentalPage = () => {
  return (
    <>
      <FadeIn>
        <PageIntro title={"Rental"} />
        <div className="py-6 bg-gray-50">
          <Container >
            <Rental />
          </Container >
        </div>
        <div className="flex justify-center pt-5">
          <Button href={"/carrello"}>Vai al carrello</Button>
        </div>
      </FadeIn>
    </>
  );
};

export default RentalPage;
