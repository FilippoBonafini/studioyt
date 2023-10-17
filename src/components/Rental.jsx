'use client'
import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import Card from './Card';
import Searchbar from './Searchbar';
import AddConferm from './AddConferm';
import { motion, AnimatePresence } from 'framer-motion';

export default function Rental() {
    const [data, setData] = useState([]);
    const [conferm, setConferm] = useState(false);
    const [element, setElement] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');

    // Funzione di confronto personalizzata per ordinare gli elementi
    function customSort(a, b) {
        const categoryPriorityA = a.category.priority;
        const categoryPriorityB = b.category.priority;

        if (categoryPriorityA !== categoryPriorityB) {
            return categoryPriorityA - categoryPriorityB;
        }

        const priorityA = a.priority;
        const priorityB = b.priority;

        return priorityA - priorityB;
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const query = `*[_type == "attrezzatura" && name match "${searchInput}*"] {
                name,
                price,
                priority,
                images,
                "categories": categories->{
                    priority,
                    name
                },
                slug
            } | order(category.priority asc, priority asc)`;

                const result = await client.fetch(query);
                setData(result);
                setIsLoading(false);
                console.log(result)
            } catch (error) {
                console.error('Errore durante il recupero dei dati da Sanity:', error);
            }
        }
        fetchData();
    }, [searchInput]);

    const confermPop = (item) => {
        setElement(item);
        setConferm(true);
        setTimeout(() => {
            setConferm(false);
        }, 3000);
    };

    // Gestore per l'input di ricerca
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Gestore per l'invio della ricerca
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <>
            <Searchbar
                value={searchInput}
                onChange={handleSearchInputChange}
                onSubmit={handleSearchSubmit}
            />

            <div className="grid mt-14 lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 items-center justify-center">
                {data.length === 0 && isLoading === false ? (
                    <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-neutral-900 sm:text-2xl">
                        Nessun risultato
                    </h3>
                ) : (
                    data.map((item, index) => (
                        <Card
                            key={index}
                            item={item}
                            confermPop={() => confermPop(item)}
                            load={isLoading}
                        />
                    ))
                )}
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
                                    <AddConferm item={element} />
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}
