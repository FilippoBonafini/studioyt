import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Card from "./Card";
import FadeIn from "./FadeIn";

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
    }, []);

    return <>
        <div className="grid  lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">

            {data.map((item) => (
                <Card
                    key={item._id}
                    item={item}
                />
            ))}

        </div>

    </>
}