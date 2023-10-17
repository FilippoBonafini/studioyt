import Link from 'next/link'
import Button from './Button';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/lib/client';
import Image from 'next/image';
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
    return builder.image(source)
}
const AddConferm = ({ item }) => {
    return (
        <>
            <Link href={'/carrello'} className="flex fixed bottom-3 right-6 bg-white rounded-lg border-gray-300 hover:border-blue-700 duration-300 border p-3 shadow-lg min-w-max gap-5">
                <div>
                    <Image loading='eager' width={80} height={80} src={urlFor(item.images[0]).width(80).height(80).url()} />
                </div>
                <div className='flex flex-col justify-around'>
                    <span className='text-black text-lg'>Aggiunto al carrello</span>
                    <Button className='flex justify-center'>
                        Checkout
                    </Button>
                </div>
            </Link>
        </>
    )
}

export default AddConferm