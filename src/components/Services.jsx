import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/lounge-area.jpg";
import Link from "next/link";

const Services = () => {
  return (
    <>

      <div className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <SectionIntro
            eyebrow="Cosa offriamo"
            title="Aiutiamo a creare contenuti di qualità"
            className="mt-10"
          >
            <p className="mb-2">
              Tulpa Studio è una casa di produzione cinematografica ed audiovisiva con sede in provincia di Ferrara all’interno di un capannone di 400 mq. con sala posa, servizio di noleggio attrezzature, editing & color grading suite.
            </p>
            <Link className="text-blue-700 underline" href={'/studio'}>Scopri lo Studio</Link>
          </SectionIntro>
          {/* List item */}
          {/* <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Riprese">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, provident dolorum ducimus quo non accusamus praesentium quos repudiandae magnam soluta rerum cumque optio voluptas officia error, laboriosam unde fuga similique.
            </ListItem>
            <ListItem title="Riprese">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, provident dolorum ducimus quo non accusamus praesentium quos repudiandae magnam soluta rerum cumque optio voluptas officia error, laboriosam unde fuga similique.
            </ListItem>
            <ListItem title="Riprese">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, provident dolorum ducimus quo non accusamus praesentium quos repudiandae magnam soluta rerum cumque optio voluptas officia error, laboriosam unde fuga similique.
            </ListItem>
            <ListItem title="Riprese">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, provident dolorum ducimus quo non accusamus praesentium quos repudiandae magnam soluta rerum cumque optio voluptas officia error, laboriosam unde fuga similique.
            </ListItem>
          </List> */}
        </div>
      </div>
    </>
  );
};

export default Services;
