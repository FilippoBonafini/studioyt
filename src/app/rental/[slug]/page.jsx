'use client'
import { usePathname } from "next/navigation"
import { client } from "../../../../sanity/lib/client";
import Container from "../../../components/Container";
import FadeIn from "../../../components/FadeIn";
import { useEffect, useState } from "react";
import SectionIntro from "../../../components/SectionIntro";
import AddCart from "../../../components/AddCart";
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
    return builder.image(source)
}

export default function Page() {
    const pathName = usePathname();
    const slug = pathName.split("/")[2];
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const query = `*[_type == "attrezzatura" && slug.current == "${slug}"]`;
                const result = await client.fetch(query);
                if (result && result.length > 0) {
                    setData(result[0]);
                }
                setLoad(false);
            } catch (error) {
                console.error("Errore durante il recupero dei dati da Sanity:", error);
            }
        }
        fetchData();
    }, [slug]); // Aggiungi slug come dipendenza per caricare dati quando cambia

    return (
        <Container className="mt-16 text-black">
            <FadeIn>
                <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-20 mt-20 sm:mt-10">
                    <div>
                        {load ? (<>carico</>) : (<>
                            <img
                                className="pb-5"
                                src={urlFor(data.images[0]).width(420).height(360).url()}
                                alt={data.slug.current}
                            />
                        </>)}
                    </div>
                    <div>
                        {data ? (
                            <div>
                                <SectionIntro
                                    title={data.name}
                                    className=""
                                >
                                    <p>{data.description}</p>
                                </SectionIntro>
                                <div className=" flex justify-end mt-4">
                                    <AddCart item={data} />
                                </div>

                            </div>
                        ) : null}
                    </div>
                </div>
            </FadeIn>
        </Container>
    );
}
