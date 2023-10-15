import React from "react";
import Section from "./Section";
import imageLaptop from "../images/laptop.jpg";
import Blockquote from "./Blockquote";

const SetCucina = () => {
  return (
    <Section title="Set Cucina" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          All’interno del nostro studio è presente un set cucina funzionante attrezzato di elettrodomestici e stoviglie, con griglia sospesa per luci e telecamere zenitali dedicata.
        </p>
        <p>
          Il set è studiato per essere completamente personalizzabile in base alle esigenze, dalle luci in grado di simulare diverse ore del giorno o di essere impostate in maniera creativa tramite un tablet, alle pareti e mobili di sfondo scelti in base al tipo di ambiente che si intende ricreare.
        </p>
      </div>
      {/* <Blockquote
        author={{ name: "Michelangelo", role: "Proprietario" }}
        className="mt-12"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum enim cupiditate molestiae, voluptatem debitis unde omnis exercitationem ipsam ad reiciendis nisi! Sint quaerat quis laboriosam aliquam adipisci nam numquam.
      </Blockquote> */}
    </Section>
  );
};

export default SetCucina;
