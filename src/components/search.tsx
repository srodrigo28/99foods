import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
    return ( 
        <div className="flex gap-4 p-5">
            <Input placeholder="Buscar restaurantes" 
            className="outline-none" />
            <Button size="icon" variant="destructive" className="hover:border duration-300">
                <SearchIcon size={20} />
            </Button>
        </div>
     );
}
 
export default Search;