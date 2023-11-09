import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";

const SingleSection = ({ title, image, children }) => {
    return (
        <Container className="group/section [counter-increment:section]">
            <div className="lg:flex flex-row-reverse lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center">
                    <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                        <StylizedImage
                            {...image}
                            sizes="(min-width: 1024px) 41rem, 31rem"
                            className="justify-center lg:justify-end lg:group-even/section:justify-start"
                        />
                    </FadeIn>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                    <FadeIn>
                        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                            {title}
                        </h2>
                        <div className="mt-6">{children}</div>
                    </FadeIn>
                </div>
            </div>
        </Container>
    );
};

export default SingleSection;
