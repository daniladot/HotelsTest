import React from "react"
import classes from "./HeaderLink.module.scss"

const HeaderLink = (props) => {
    return(
        <a href={props.url ? props.url : '#'} className={classes.HeaderLink}>
            {props.text}
        </a>
    )
}

export default HeaderLink