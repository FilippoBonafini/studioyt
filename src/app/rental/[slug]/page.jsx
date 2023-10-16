'use client'
import { usePathname } from "next/navigation"
import { client } from "../../../../sanity/lib/client";
import Container from "../../../components/Container";
import FadeIn from "../../../components/FadeIn";
import { useEffect, useState } from "react";
import SectionIntro from "../../../components/SectionIntro";
import AddCart from "../../../components/AddCart";
import imageUrlBuilder from '@sanity/image-url';
import AddConferm from "../../../components/AddConferm";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"
import { BsCart } from "react-icons/bs";

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
    const [load, setLoad] = useState(true);
    const [conferm, setConferm] = useState(false)


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
    const conferma = () => {
        setConferm(true);
        setTimeout(() => {
            setConferm(false);
        }, 3000);
    }
    return (
        <Container className="mt-16 text-black">
            <FadeIn>
                {/* <div className="mb-3">
                    <Link href={'/rental'}>Indietro</Link>
                </div> */}

                <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-10 ">
                    <div className="flex justify-center">
                        {load ? (<>carico</>) : (<>
                            <img
                                className="rounded shadow-md"
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
                                >
                                    <p>{data.description}</p>

                                    <div className=" mt-10">
                                        <AddCart item={data} confermPop={conferma} className={'hover:bg-blue-700 text-xl'}>
                                            <div className="flex justify-center items-center gap-2">
                                                <span>
                                                    Aggiungi al carrello
                                                </span>
                                                <BsCart />
                                            </div>

                                        </AddCart>
                                    </div>

                                </SectionIntro>


                            </div>
                        ) : null}
                    </div>
                </div>
            </FadeIn>
            {conferm ? (
                <AnimatePresence>
                    {conferm && (
                        <div className="flex fixed bottom-0 right-0">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <AddConferm />
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            ) : (
                <></>
            )}
        </Container>
    );
}
