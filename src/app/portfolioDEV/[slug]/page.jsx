import Link from 'next/link'
import Container from '../../../components/Container'
import PageIntro from '../../../components/PageIntro'

const page = () => {
    return (<>
        <Container className="mt-12">
            <Link href={'/portfolio'} className='text-blue-800 text-lg underline underline-offset-4'>Indietro</Link>
        </Container>
        <div className="mt-10">
            <PageIntro
                eyebrow="progetto di prova"
                title="Tulpa"
            >
            </PageIntro>
        </div>
    </>
    )
}

export default page