'use client'
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Rental from "@/components/Rental";

const RentalPage = () => {
  return (
    <>
      <PageIntro eyebrow="Rental" title="Preventivo personalizzato" />
      <Container>
        <Rental />
      </Container>
    </>
  );
};

export default RentalPage;
