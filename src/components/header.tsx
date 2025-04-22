import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <header className="flex justify-between px-5 pt-6">
            <Image src="/logo.svg" width={100} height={30}  alt="" />
            {/* <Image src="/menu.svg" width={30} height={30}  alt="" /> */}
            <Button size="icon" variant="outline" className="border-none bg-transparent">
                <MenuIcon  />
            </Button>
        </header>
     );
}
 
export default Header;