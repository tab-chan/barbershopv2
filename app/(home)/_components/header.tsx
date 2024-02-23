import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
    return ( 
        <Card> 
            <CardContent className="p-3 justify-between items-center flex flex-row">
            <Image src="/logo.png" alt="FSW logo" height={22} width={120}  />
            <Button variant="outline" size="icon" className="h-8 w-6">
                <MenuIcon size={18}/>
            </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;