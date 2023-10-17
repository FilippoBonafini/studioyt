import React from "react";
import Section from "./Section";
import imageMeeting from "../images/meeting.jpg";
import List, { ListItem } from "./List";

const DietroLeQuinte = () => {
  return (
    <Section title="Dietro le quinte" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Il “dietro le quinte” al Tulpa Studio consiste in diverse aree disposte intorno alla sala posa, in modo che tutto il processo di produzione sia interconnesso, fluido e di immediata implementazione.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950 mb-8">
        Punti di forza
      </h3>
      <List>
        <ListItem title="Attrezzeria">
          L’attrezzeria situata a fianco alla sala posa è dotata di moltissimi illuminatori LED, tubi e bulbi, modificatori di luce, strumenti ed attrezzature di ausilio alle riprese come dolly, crane, slider, gimbal e molto altro.
        </ListItem>
        <ListItem title="Area trucco">
          Lla stazione make-up permette di farsi truccare comodamente in studio.
        </ListItem>
        <ListItem title="Editing & Color Grading Suite">
          Lla sala riservata alla post-produzione è attrezzata di tre monitor calibrati, un’ampia scrivania dotata di DaVinci Resolve Mini Panel, pareti colore grigio 50% e trattamento acustico.
        </ListItem>
      </List>
    </Section>
  );
};

export default DietroLeQuinte;
