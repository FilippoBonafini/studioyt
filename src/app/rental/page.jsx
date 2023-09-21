import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
// import { client } from "../../../sanity/lib/client";



export const metadata = {
  title: 'Tulpa Studio | Rental',
  description: 'Sfoglia il catalogo con le varie attrezzature disponibili e trova la soluzione che fa al caso tuo.',
}

// async function getData() {
//   const data = await client.fetch(`*[_type == "attrezzatura"]`)
// }

const RentalPage = () => {
  return (
    <>
      <PageIntro eyebrow="Rental" title="Ottieni un preventivo in base all'attrezzatura di cui hai bisogno" />

      <Container>
        <h1 className="text-black">corpo del rental</h1>
      </Container>
    </>
  );
};

export default RentalPage;


