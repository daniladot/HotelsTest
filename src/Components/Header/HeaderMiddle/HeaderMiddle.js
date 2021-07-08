import React from "react"
import classes from "./HeaderMiddle.module.scss"
import BreadCrumbs from "../../UI/BreadCrumbs/BreadCrumbs";

const HeaderMiddle = (props) => {
    return (
        <div className={classes.HeaderMiddle}>
            <div className={classes.HeaderMiddleWrapper}>
                <div className={classes.Left}>
                    <div className={classes.BreadCrumbsWrapper}>
                        <BreadCrumbs
                            text='Франция'
                            separator={true}
                        />
                        <BreadCrumbs
                            text='Париж'
                            separator={true}
                        />
                        <BreadCrumbs
                            text='Туры'
                            separator={true}
                        />
                        <BreadCrumbs
                            text='Своими руками'
                        />
                    </div>
                    <div className={classes.Title}>Урок сыроделия</div>
                </div>

                <div className={classes.Right}>
                    <div className={classes.ButtonShare}>Поделиться</div>
                    <div className={classes.ButtonFavorites}>В избраное</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle