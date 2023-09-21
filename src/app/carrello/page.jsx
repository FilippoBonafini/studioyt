import Container from "@/components/Container"

const page = () => {
    return (
        <Container className="mt-16 text-black">
            <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                <div className=" hidden sm:block">immagine</div>
                <div>contenuto</div>
            </div>
        </Container>
    )
}

export default page