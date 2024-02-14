import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
    return ( 
        <Card> 
            <CardContent className="p-3 justify-between flex flex-row">
            <Image src="/logo.png" alt="FSW logo" width={120} height={22} />
            <Button variant="outline" size="icon" className="h-8 w-">
                <MenuIcon size={18}/>

            </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;