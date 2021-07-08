import React from "react"
import classes from "./HeaderTop.module.scss"
import HeaderLink from "../../UI/HeaderLink/HeaderLink";

const HeaderTop = (props) => {
    return (
        <div className={classes.HeaderTop}>
            <div className={classes.HeaderTopWrapper}>
                <div className={classes.Left}>
                    <div className={classes.Logo}/>
                    <div className={classes.Menu}>
                        <HeaderLink
                            text='Пляжи'
                        />
                        <HeaderLink
                            text='Breezzor pass'
                        />
                        <HeaderLink
                            text='Впечатления'
                        />
                        <HeaderLink
                            text='Маршруты'
                        />
                    </div>
                </div>
                <div className={classes.Right}>
                    <div className={classes.Find}/>
                    <div className={classes.Button}>Вход</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop