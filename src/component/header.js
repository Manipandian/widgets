import React from "react";
import Link from "./link";


const Header = () => {

    return (
        <div className="ui secondary pointing menu">
            <Link href="/widgets" className="item">
                Accordion
            </Link>
            <Link href="/widgets/list" className="item">
                Search List
            </Link>
            <Link href="/widgets/dropdown" className="item">
                DropDown
            </Link>
            <Link href="/widgets/translate" className="item">
                Translate
            </Link>
        </div>
    )
}

export default Header;