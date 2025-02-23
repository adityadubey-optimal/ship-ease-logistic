import React from 'react';
import Slick from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTheme } from "../../context/ThemeContext"

interface SliderProps {
    children: React.ReactNode[]
}

const Slider: React.FC<SliderProps> = ({ children }) => {
    const { theme } = useTheme()

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        // slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    // slidesToShow: 2,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                }
            }
        ],
        customPaging: (i: number) => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#C8C8C8",
                    opacity: 0.5,
                    transition: "opacity 0.3s ease",
                }}
            />
        ),
    }

    return (
        <div className="slider-container" style={{ padding: "20px 0 40px 0" }}>
            <Slick {...settings}>
                {React.Children.map(children, (child) => (
                    <div style={{ padding: "0 12px", margin: "0 16px" }}>
                        {child}
                    </div>
                ))}
            </Slick>
            <style jsx global>{`
                .slick-list {
                    margin: 0 -12px;
                }
                .slick-dots {
                    bottom: -35px;
                }
                .slick-dots li {
                    margin: 0 4px;
                }
                .slick-dots li.slick-active div {
                    opacity: 1;
                    background-color:  #7B7B7B !important;
                }
                .slick-track {
                    margin-left: 0;
                }
              
            `}</style>
        </div>
    )
}

export default Slider
