'use client'
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Rental from "@/components/Rental";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

const RentalPage = () => {
  return (
    <>

      <PageIntro title={"Rental"} />
      <div className="bg-blue-100 py-6">
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
