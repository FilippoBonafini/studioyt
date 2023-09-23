import Link from "next/link"
import Button from "./Button"

const MailOk = ({ message }) => {
    return (<>
        <div>
            <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-green-700 sm:text-4xl">
                {message}
            </h3>
            <Button className={"my-5"}>
                <Link href={"/"}>
                    Torna alla home
                </Link>
            </Button>
        </div>

    </>
    )
}

export default MailOk