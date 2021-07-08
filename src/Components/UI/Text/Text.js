import React from "react"
import classes from "./Text.module.scss"

const Text = (props) => {
    return(
        <div className={classes.Text}>{props.textBlock}</div>
    )
}

export default Text