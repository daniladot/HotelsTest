import React from 'react'
import classes from './PeopleMini.module.scss'
import {Image} from "antd"
import ava1 from '../../../image/AboutCourseSection/ava1.png'

const PeopleMini = (props) => {

    return(
        <div className={classes.PeopleMini}>
            <img className={classes.Image} src={ava1} alt=""/>
            <div className={classes.InformationBlock}>
                <div className={classes.Name}>{props.name}</div>
                <div className={classes.DateRegister}>На сайте с {props.date} г.</div>
            </div>
        </div>
    )
}

export default PeopleMini