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
    const [popularCategories, setPopularCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const categoryFilter = selectedCategories.length > 0 ? ` && categories[0].name match "*"` : '';
                const query = `*[_type == "attrezzatura" && name match "${searchInput}*"${categoryFilter}] {
                    name,
                    price,
                    priority,
                    images,
                    "categories": categories[]->{
                        priority,
                        name
                    },
                    slug
                }`;

                const result = await client.fetch(query);
                // Ordina i risultati in base alla priorità della categoria e della priorità dell'elemento
                result.sort((a, b) => {
                    const categoryPriorityA = a.categories[0].priority;
                    const categoryPriorityB = b.categories[0].priority;

                    if (categoryPriorityA !== categoryPriorityB) {
                        return categoryPriorityA - categoryPriorityB;
                    }

                    const priorityA = a.priority;
                    const priorityB = b.priority;

                    return priorityA - priorityB;
                });

                setData(result);
                setIsLoading(false);
            } catch (error) {
                console.error('Errore durante il recupero dei dati da Sanity:', error);
            }
        }
        fetchData();
    }, [searchInput, selectedCategories]);

    useEffect(() => {
        // Restituisci le categorie con più priorità (le prime 5)
        const categoryQuery = `*[_type == "category"] | order(priority asc) [0...5] {
        name,
        priority
    }`;

        async function fetchCategories() {
            try {
                const categories = await client.fetch(categoryQuery);
                setPopularCategories(categories);
            } catch (error) {
                console.error('Errore durante il recupero delle categorie:', error);
            }
        }

        fetchCategories();
    }, []);

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

    // Gestore per la selezione/deselezione delle categorie
    const handleCategoryFilter = (category, checked) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        }
    };

    return (
        <>
            <div className="grid lg:grid-cols-2 items-center md:grid-cols-1">
                {/* SEARCHBAR  */}
                <Searchbar
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />

                {/* CHECKBOX CATEGORIE  */}
                {/* <div className="flex gap-4">
                    {popularCategories.map((category) => (
                        <div key={category.name} className="flex">
                            <input
                                value={category.name}
                                onChange={(event) => handleCategoryFilter(category.name, event.target.checked)}
                                checked={selectedCategories.includes(category.name)}
                                type="checkbox"
                                id={category.name}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={category.name}
                                className="select-none cursor-pointer rounded-lg border-2 border-gray-200 py-3 px-6 font-bold text-blue-700 transition-colors duration-200 ease-in-out peer-checked:bg-blue-700 peer-checked:text-white peer-checked:border-gray-200 "
                            >
                                {category.name}
                            </label>
                        </div>
                    ))}
                </div> */}
            </div>

            {/* CORPO DELLA PAGINA  */}
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
                    // CONFERMA DI AGGIUNTA AL CARRELLO 
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
