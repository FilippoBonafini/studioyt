
import Button from "./Button"
import { BsCart2 } from "react-icons/bs";


const CartButton = ({ invert }) => {
    return (
        <Button href={"/carrello"} invert={invert}>
            <div className="flex items-center gap-1">
                <BsCart2 className="h-5 w-5 fill-current" />
            </div>
        </Button>
    )
}

export default CartButton