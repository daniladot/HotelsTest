import React from "react"
import classes from "./GallerySection.module.scss"
import Gallery from "./Gallery/Gallery"
import SubName from "../UI/SubName/SubName"
import Text from "../UI/Text/Text"

const GallerySection = (props) => {
    return (
        <div className={classes.GallerySection}>
            <div className={classes.GallerySectionWrapper}>
                <Gallery
                    clickGallery={props.clickGallery}
                    ref={props.openLibrary}
                    countPhoto={props.countPhoto}
                />
                <div className={classes.AboutTour}>
                    <SubName
                        title={props.subName}
                    />
                    <div className={classes.TextWrapper}>
                        <Text
                            textBlock={props.textBlock}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySection