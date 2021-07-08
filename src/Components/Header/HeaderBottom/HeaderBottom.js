import React from "react"
import classes from "./HeaderBottom.module.scss"

const HeaderBottom = React.forwardRef((props, ref) => {

    return (
        <div className={classes.HeaderBottom} ref={ref}>
            <div className={classes.Tabs} data-icon='overview'>Обзор</div>
            <div className={classes.Tabs} data-icon='organization'>Организатор</div>
            <div className={classes.Tabs} data-icon='information'>Информация</div>
            <div className={classes.Tabs} data-icon='date'>Выбрать даты</div>
        </div>
    )
})

export default HeaderBottom