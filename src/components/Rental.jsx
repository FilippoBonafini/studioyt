'use client'
import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Card from "./Card";
import Searchbar from "./Searchbar";
import AddConferm from "./AddConferm";
import { motion, AnimatePresence } from "framer-motion";

export default function Rental() {
    const [data, setData] = useState([]);
    const [conferm, setConferm] = useState(false)


    useEffect(() => {
        async function fetchData() {
            try {
                const result = await client.fetch(`*[_type == "attrezzatura"]`);
                setData(result);
            } catch (error) {
                console.error("Errore durante il recupero dei dati da Sanity:", error);
            }
        }
        fetchData();
    }, []);


    const confermPop = () => {
        setConferm(true)
        setTimeout(() => {
            setConferm(false)
        }, 3000);

    }

    return <>

        <Searchbar />
        <div className=" mt-14 grid  lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
            {data.map((item) => (
                <Card
                    key={item._id}
                    item={item}
                    confermPop={confermPop}
                />
            ))}
        </div>
        {conferm ? (<AnimatePresence>
            {conferm && (
                <div>
                    <div className="flex fixed bottom-0 right-0">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} // Stato iniziale (fuori schermo)
                            animate={{ opacity: 1, y: 0 }} // Animazione di entrata
                            exit={{ opacity: 0, y: -20 }} // Animazione di uscita
                            transition={{ duration: 0.3 }} // Durata dell'animazione in secondi
                        >  <AddConferm />
                        </motion.div>
                    </div>
                </div>


            )}
        </AnimatePresence >) : (<></>)
        }

    </>
}