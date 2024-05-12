import "../../index.css";
import { TaskCards } from "./TaskCards.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function TasksLists({items}){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:4 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                vertical: true,
                verticalSwiping: true,
                dots: false,
              }
            }
        ]
      };

    return (
        <>
            <div className="bg-[#E9F1F8] rounded-sm lg:rounded-lg mx-6 lg:mx-12 my-6 pt-3 pb-6 px-8 h-auto lg:h-auto shadow-main">
                <Slider {...settings}>
                        { items.map( item => <TaskCards
                            key={item.id}
                            fecha={item.fecha}
                            curso={item.curso}
                            tarea={item.tarea} />)}
                </Slider>
            </div>
        </>
    );    
}