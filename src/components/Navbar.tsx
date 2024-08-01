import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

type AppLink = {
    name: string;
    to: string;
};

const links: AppLink[] = [
    {
        name: "Om oss",
        to: "/"
    },
    {
        name: "Våra tjänster",
        to: "/"
    },
    {
        name: "Våra kunder",
        to: "/"
    },
    {
        name: "Kontakt",
        to: "/"
    }
];

function Navbar() {
    const [showExpandableMenu, setShowExpandableMenu] = useState(false);

    function expandableMenuButtonClickHandler() {
        setShowExpandableMenu((prevValue) => !prevValue);
    }

    const linkLIs = links.map((l) => (
        <li key={l.name}>
            <Link to={l.to} className="whitespace-nowrap hover-underline">
                {l.name}
            </Link>
        </li>
    ));

    return (
        <>
            <div className="h-20 flex border-b border-grey-300">
                <div className="w-6/12 flex items-center pl-12">
                    <Link to="/" className=" flex cursor-pointer">
                        <img src={logo} alt="Logga" className="me-1" />
                        <h1 className="text-5xl font-bold">DAFI</h1>
                    </Link>
                </div>
                <div className="w-6/12 pr-12 flex justify-end">
                    <ul className="space-x-8 items-center text-xl hidden lg:inline-flex">{linkLIs}</ul>
                    <div className="h-full flex justify-end lg:hidden">
                        <button onClick={expandableMenuButtonClickHandler}>
                            {showExpandableMenu ? (
                                <i className="fas fa-x text-3xl"></i>
                            ) : (
                                <i className="fas fa-bars text-3xl"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`lg:hidden px-12 w-full border-b border-grey-300 absolute navigation-menu overflow-hidden flex items-center ${
                    showExpandableMenu ? "expanded" : ""
                } `}
            >
                <ul className="text-2xl w-full">{linkLIs}</ul>
            </div>
        </>
    );
}

export default Navbar;
