import React from "react";
import Section from "./Section";
import imageWhiteboard from "../images/sound-stage.jpg";

const MainSet = () => {
  return (
    <Section title="Sala Posa" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          La Sala Posa di 200 mq. è attrezzata con tende a binario, griglia per luci sospesa e pannelli acustici. Adiacente all’attrezzeria, rende immediata l’implementazione degli strumenti a disposizione in loco come dolly, crane, slider, modificatori e moltissimi altri.
        </p>
        <p>
          Grazie all’ampiezza della sala è possibile costruire set personalizzati, creando stanze arredate o altre strutture, usufruendo della comodità di uno spazio a luce controllata con tutta l’attrezzatura necessaria per qualsiasi progetto audiovisivo.
        </p>
        <p>
          La sala posa al Tulpa Studio è perfetta per realizzare spot pubblicitari, video musicali, shooting fotografici, riprese multicamera, dirette e concerti in streaming.

        </p>
      </div>
      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Quello che offriamo
      </h3>
      <TagList className="mt-4">
        <TagListItem>Ampi spazi</TagListItem>
        <TagListItem>Live</TagListItem>
      </TagList> */}
    </Section>
  );
};

export default MainSet;
