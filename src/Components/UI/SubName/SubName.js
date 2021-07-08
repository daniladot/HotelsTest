import React from 'react'
import classes from './SubName.module.scss'

const SubName = (props) => {
    return(
        <div className={classes.SubName}>{props.title}</div>
    )
}

export default SubName