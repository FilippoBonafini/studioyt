'use client'
import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Card from "./Card";
import Searchbar from "./Searchbar";
import AddConferm from "./AddConferm";
import { motion, AnimatePresence } from "framer-motion";

export default function Rental() {
    const [data, setData] = useState([]);
    const [conferm, setConferm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState(""); // Aggiunto stato per l'input di ricerca

    // Funzione di confronto personalizzata per ordinare gli elementi
    function customSort(a, b) {
        // Ordina in base alla priorità della categoria
        const categoryPriorityA = a.category.priority;
        const categoryPriorityB = b.category.priority;

        if (categoryPriorityA !== categoryPriorityB) {
            return categoryPriorityA - categoryPriorityB;
        }

        // Se le priorità della categoria sono uguali, ordina per priorità dell'elemento
        const priorityA = a.priorità;
        const priorityB = b.priorità;

        return priorityA - priorityB;
    }

    useEffect(() => {
        async function fetchData() {
            try {
                // Modificato il filtro in base all'input di ricerca
                const query = `*[_type == "attrezzatura" && name match "${searchInput}*"]`;
                const result = await client.fetch(query);
                setData(result);
                setIsLoading(false);
            } catch (error) {
                console.error("Errore durante il recupero dei dati da Sanity:", error);
            }
        }
        fetchData();
    }, [searchInput]); // Aggiunto searchInput come dipendenza

    const confermPop = () => {
        setConferm(true);
        setTimeout(() => {
            setConferm(false);
        }, 3000);
    }

    // Gestore per l'input di ricerca
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Gestore per l'invio della ricerca
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchData(); // Richiama fetchData() quando l'utente invia la ricerca
    };

    return (
        <>
            <Searchbar
                value={searchInput}
                onChange={handleSearchInputChange}
                onSubmit={handleSearchSubmit} // Aggiunto onSubmit per l'invio della ricerca
            />

            <div className="grid mt-14 lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                {data.length === 0 && isLoading === false ? (
                    <>
                        <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-neutral-900 sm:text-2xl">
                            Nessun risultato
                        </h3>
                    </>

                ) : <>
                    {data.map((item) => (
                        <Card
                            key={item._id}
                            item={item}
                            confermPop={confermPop}
                            load={isLoading}
                        />
                    ))}
                </>}

            </div>

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
        </>
    );
}
