import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Card from "./Card";

export default function Rental() {
    const [data, setData] = useState([]);

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
    }, []); // Esegui solo al mount iniziale

    // // Stampa i dati dopo il caricamento
    // useEffect(() => {
    //     if (data && data.length > 0) {
    //         console.log(data[0]);
    //     }
    // }, [data]);

    return <>
        {data.map((item) => (
            <Card
                title={item.name}
                price={item.price}
            />
        ))}
    </>;
}