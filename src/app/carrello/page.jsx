'use client'

import Container from "@/components/Container"
import Button from "@/components/Button";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import CartList from "@/components/CartList";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const page = () => {
    return (
        <Container className="mt-16 text-black">
            <FadeIn className="max-w-3xl">
                <Link href={'/rental'} scroll={false} prefetch={true}>
                    <Button>
                        Indietro
                    </Button>
                </Link>
                <div className=" mt-10 grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2">
                    <div className=" hidden lg:block">
                        <Image src="/images/laptop-tulpa.png" width={600} height={600} alt="tulpa-laptop" />
                    </div>
                    <CartList />
                </div></FadeIn>
        </Container >
    )
}

export default page;