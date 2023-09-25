import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Rental from "@/components/Rental";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

const RentalPage = () => {
  return (
    <>

      <PageIntro title={"Rental"} />
      <div className="py-6 bg-gray-50">
        <FadeIn>
          <Container>
            <Rental />
          </Container >
        </FadeIn>

      </div>
      <div className="flex justify-center pt-5">
        <Button href={"/carrello"}>Vai al carrello</Button>
      </div>

    </>
  );
};

export default RentalPage;
