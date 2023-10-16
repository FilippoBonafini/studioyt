'use client'
import FadeIn from "./FadeIn";
import AddCart from "./AddCart";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'


// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
    return builder.image(source)
}

const Card = ({ item, confermPop, load }) => {
    const conferma = () => {
        confermPop()
    }

    return (
        <FadeIn>
            <div className="inline-block text-black shadow-md relative transition-transform transform hover:scale-105 hover:shadow-2xl">
                {load ? (
                    <h1>load</h1>
                ) : (<>
                    <Link href={'/rental/' + item.slug.current}>
                        <img
                            className="rounded"
                            src={urlFor(item.images[0]).width(400).height(350).fit('fill').url()}
                            alt={item.slug.current}
                        />
                    </Link>

                    <div className="absolute bottom-4 left-4 bg-blue-700 bg-transaparent p-1 rounded-full">
                        <div className="rounded-full text-white pl-4 flex items-center gap-4">
                            <Link href={'/rental/' + item.slug.current} className="text-white font-medium">{item.name}</Link>
                            <AddCart item={item} className={'hover:bg-white hover:text-black'} confermPop={conferma}>{item.price} $</AddCart>
                        </div>
                    </div></>
                )}

            </div>
        </FadeIn>
    );
};

export default Card;