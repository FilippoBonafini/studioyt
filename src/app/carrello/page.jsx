'use client'

import Container from "@/components/Container"
import Button from "@/components/Button";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const page = () => {
    return (
        <Container className="mt-16 text-black">
            <Link href={'/rental'} scroll={false} prefetch={true}>
                <Button>
                    Indietro
                </Button>
            </Link>
            <div className=" mt-10 grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2">
                <div className=" hidden lg:block">immagine</div>
                <div>contenuto</div>
            </div>
        </Container >
    )
}

export default page;