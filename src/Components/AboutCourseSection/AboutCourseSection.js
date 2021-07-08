import React from 'react'
import classes from './AboutCourseSection.module.scss'
import SubName from '../UI/SubName/SubName'
import Status from "../UI/Status/Status";
import PeopleMini from "../UI/PepopleMini/PeopleMini";
import Text from "../UI/Text/Text";

const AboutCourseSection = (props) => {

    return (
        <div className={classes.AboutCourseSection}>
            <div className={classes.AboutCourseSectionWrapper}>
                <div className={classes.Top}>
                    <SubName
                        title={props.subName}
                    />
                    <Status/>
                </div>
                <div className={classes.Bottom}>
                    <PeopleMini
                        name={props.name}
                        date={props.date}
                    />
                    <div className={classes.TextBlock}>
                        <div className={classes.TextWrapper}>
                            <Text
                                textBlock={props.text1}
                            />
                        </div>
                        <div className={`${classes.TextWrapper} ${classes.TextBottom}}`}>
                            <Text
                                textBlock={props.text2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCourseSection