import Image from "next/image";
import amen from "../images/clients/amen.png"
import arredo3 from "../images/clients/arredo3.png"
import costa from "../images/clients/costa.png"
import ferrari from "../images/clients/ferrari.png"
import iginio from "../images/clients/iginio.png"
import parma from "../images/clients/parma.png"
import philips from "../images/clients/philips.png"
import sky from "../images/clients/sky.png"
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Philips", philips],
  ["Costa Crociere", costa],
  ["Ferrari Trento", ferrari],
  ["Iginio Massari", iginio],
  ["Amen", amen],
  ["Prosciutto di Parma", parma],
  ["Arredo 3", arredo3],
  ["Sky Sport", sky],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Abbiamo collaborato con aziene e persone magnifiche
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
