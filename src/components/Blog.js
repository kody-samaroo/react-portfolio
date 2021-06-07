import React from "react"
import { Carousel } from "react-bootstrap"

function Blog() {

    return (
        <div className="blog">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="blog-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdYEka2IGBPAM9hbgoiBl_s-BEiCGLqICldE2jhPItbS-7gQ8or0IUkWX51g1RpedjQs&usqp=CAU"
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <h5> JavaScript: How to compare elements in an array? </h5>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Blog;