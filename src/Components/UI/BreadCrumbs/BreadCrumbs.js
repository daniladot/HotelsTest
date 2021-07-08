import React from 'react'
import classes from './BreadCruombs.module.scss'

const BreadCrumbs = (props) => {
    return (
        <a href={props.url ? props.url : '#'} className={classes.BreadCrumbs}>
            <div className={classes.Text}>{props.text}</div>
            {props.separator
                ? <div className={classes.Separator}/>
                : null
            }
        </a>
    )
}

export default BreadCrumbs