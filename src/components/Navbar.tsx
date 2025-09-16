import NavbarLinks from "./NavbarLinks.tsx";
import NavbarSearch from "./NavbarSearch.tsx";

const Navbar = () => {
    console.log("Navbar Rendered");
    return (
        <div>
            <NavbarLinks />
            <NavbarSearch />
        </div>
    );
};

export default Navbar;
//NOTE : You have to keep the client only compo at the lowest level in order to avoid making every child of the client component also client
//
//
//NOTE : All paterns are support except Server Components inside Client Components but you can use childre props
//Example : Passwing a <ClientComp>
//<ServerCompo/>
//</ClientComp>
//and in client Component ({children}) => {
//<div>{children}</diV>
//}
