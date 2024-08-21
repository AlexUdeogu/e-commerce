import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import CartCountBadge from "./CartCountBadge" 



const Navbar = ({setShowCart}: any) => {
  return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className="text-4xl font-medium">Logo</h1>
                <div className="flex gap-4">
                    <div className="icon__wrapper">
                        <AiOutlineUser />
                    </div>
                    <div 
                    className="icon__wrapper relative cursor-pointer" 
                    onClick={() => setShowCart(true)}>
                        <AiOutlineShoppingCart />
                        <CartCountBadge size="w-[25px] h-[25px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
