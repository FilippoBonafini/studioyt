'use client'
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Rental from "@/components/Rental";

const RentalPage = () => {
  return (
    <>

      <PageIntro title={"Rental"} />
      <div className="bg-blue-100 py-6">
        <Container>
          <Rental />
        </Container >
      </div>

    </>
  );
};

export default RentalPage;
