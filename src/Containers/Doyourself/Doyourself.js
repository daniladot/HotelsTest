import React, {useRef, useEffect} from "react"
import classes from "./Doyourself.module.scss"
import Header from "../../Components/Header/Header"
import GallerySection from "../../Components/GallerySection/GallerySection"
import AboutCourseSection from "../../Components/AboutCourseSection/AboutCourseSection"
import ava1 from '../../image/AboutCourseSection/ava1.png'

const Doyourself = () => {
    const openLibrary = useRef(null)
    const scrollElement = useRef(null)

    const clickGallery = () => {
        openLibrary.current.childNodes[0].click()
    }

    const scrollMenu = () => {
        if(window.pageYOffset > 105){
            scrollElement.current.style.position = 'fixed'
            scrollElement.current.style.top = '98px'
            scrollElement.current.style.margin = '0px'
            scrollElement.current.style.padding = '0px'
            scrollElement.current.style.height = '80px'
        } else {
            scrollElement.current.style.position = 'relative'
            scrollElement.current.style.top = '0'
            scrollElement.current.style.margin = '44px'
            scrollElement.current.style.paddingBottom = '24px'
            scrollElement.current.style.height = '80px'
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', () => scrollMenu() )
    })
    return (
        <div className={classes.Doyourself}>
            <Header
                scrollElement={scrollElement}
            />
            <GallerySection
                clickGallery={clickGallery}
                openLibrary={openLibrary}
                countPhoto='99'
                subName='Обзор тура:'
                textBlock='Среди сыроваров есть тенденция, что они не хотят делиться своими секретами и рецептами. Говорят, что это очень сложное дело...что нужно ехать в Европу или идти в подмастерье к настоящему сыровару на несколько лет, да и то не факт, что тебе раскроют все секреты. Но это не так!'
            />
            <AboutCourseSection
                subName='Организатор:'
                name='Yvonnick Alexandrovich'
                date='Января 2021'
                text1='Сейчас я готов передать свою технологию сыроделия! За последний год я смог обучить более 200 000 человек сыроделию онлайн. Уверен, что приготовить сыр получится и у вас! Вы узнаете как на самом деле делается сыр на производстве и на кухне. Увидите и узнаете все тонкости и нюансы реального сыроделия от человека, который развил сыроварню с 0 до 1000л молока в день!'
                text2='Современные молочные заводы, в большинстве своем работают без молока. Сухая сыворотка и химические реагенты - вот что вы купите в магазине под названием "сыр". Хороший сыр можно найти только на небольших частных сыроварнях, да и то не всегда он вкусный, а зачастую ещё и дорогой! Что же, пора вам решать, что вы будете кушать. Химическое сырье из магазина или свой настоящий сыр?'
            />
        </div>
    )
}

export default Doyourself
