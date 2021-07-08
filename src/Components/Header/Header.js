import React from "react"
import classes from "./Header.module.scss"
import HeaderTop from "./HeaderTop/HeaderTop"
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle"
import HeaderBottom from "./HeaderBottom/HeaderBottom"
import GallerySection from "../GallerySection/GallerySection";

const Header = (props) => {
    return(
        <div className={classes.Header}>
            <HeaderTop/>
            <HeaderMiddle/>
            <HeaderBottom
                ref={props.scrollElement}
            />
        </div>
    )
}

export default Header