import React from "react"
import classes from "./Gallery.module.scss"
import {Image} from 'antd'
import 'antd/dist/antd.css'
import image1 from '../../../image/gallery/gallery1.jpg'
import image2 from '../../../image/gallery/gallery2.jpg'
import image3 from '../../../image/gallery/gallery3.jpg'
import image4 from '../../../image/gallery/gallery4.jpg'
import image5 from '../../../image/gallery/gallery5.jpg'
import image6 from '../../../image/gallery/gallery6.jpg'

const Gallery = React.forwardRef((props, ref) => {

    return (
        <div className={classes.Gallery}>
            <Image.PreviewGroup>
                <div id='imageNew'>
                    <Image
                        width={740}
                        src={image1}
                    />
                </div>

                <div className={classes.ImageGroup}>
                    <Image
                        width={170}
                        src={image2}
                    />
                    <Image
                        width={170}
                        src={image3}
                    />
                    <Image
                        width={170}
                        src={image4}
                    />
                </div>

                <div className={classes.ImageGroup}>
                    <Image
                        width={170}
                        src={image5}
                    />
                    <div className='dfsdsd' ref={ref}>
                        <Image
                            width={170}
                            src={image6}
                        />
                    </div>
                    <div
                        className={classes.All}
                        onClick={() => props.clickGallery()}
                    >
                        <div className={classes.Text}>Все фото: {props.countPhoto}</div>
                    </div>
                </div>
            </Image.PreviewGroup>

        </div>
    )
})

export default Gallery