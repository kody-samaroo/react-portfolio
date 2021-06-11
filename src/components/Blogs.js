import React from "react"
import { Carousel } from "react-bootstrap"

export default function Blogs() {

    return (
        <div className="blog">
            Blog Page
            <Carousel interval={5000}>
                <Carousel.Item>
                    <a href="https://kodysamaroo.medium.com/javascript-how-to-compare-elements-in-an-array-6a52a7a04339">
                        <img
                        className="blog-image"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdYEka2IGBPAM9hbgoiBl_s-BEiCGLqICldE2jhPItbS-7gQ8or0IUkWX51g1RpedjQs&usqp=CAU"
                        alt="First slide"
                        />
                    </a>
                <Carousel.Caption>
                    <h5 className="blog-title"> JavaScript: Compare array elements </h5>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://kodysamaroo.medium.com/a-look-at-this-keyword-in-javascript-3c951aab7f1f">
                        <img
                        className="blog-image"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdYEka2IGBPAM9hbgoiBl_s-BEiCGLqICldE2jhPItbS-7gQ8or0IUkWX51g1RpedjQs&usqp=CAU"
                        alt="Second slide"
                        />
                    </a>
                <Carousel.Caption>
                    <h5 className="blog-title"> JavaScript: "this" keyword </h5>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <a href="https://kodysamaroo.medium.com/git-it-together-45f354c6023">
                        <img
                        className="blog-image"
                        src="https://pbs.twimg.com/media/EOPWjS0XsAAqICb.jpg"
                        alt="Third slide"
                        />
                    </a>
                <Carousel.Caption>
                    <h5 className="blog-title"> GitHub introudction </h5>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}