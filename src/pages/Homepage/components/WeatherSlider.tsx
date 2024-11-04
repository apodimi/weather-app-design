import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../../../assets/icons/yellow-arrow.svg";
import Rain from "../../../assets/icons/rain.svg";
import Sun from "../../../assets/icons/sun.svg";
import CloudySun from "../../../assets/icons/cloudy-sun.svg";
import RainSun from "../../../assets/icons/rain-sun.svg";
import Thunder from "../../../assets/icons/thunder.svg";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <style>
        {`
        .slick-next::before {
        display: none;
        }
      `}
      </style>
      <img src={Arrow} alt="Next" />
    </div>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <style>
        {`
        .slick-prev::before {
        display: none;
        }
      `}
      </style>
      <img src={Arrow} alt="Previous" className="rotate-180" />
    </div>
  );
};

const DAYS = [
  {
    icon: Rain,
    day: "Fri",
  },
  {
    icon: Sun,
    day: "Sat",
  },
  {
    icon: CloudySun,
    day: "Sun",
  },
  {
    icon: RainSun,
    day: "Mon",
  },
  {
    icon: Thunder,
    day: "Tue",
  },
];

export const WeatherSlider = () => {
  const settings = {
    className: "center flex",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",

    slidesToShow: 5,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container p-3">
      <Slider {...settings}>
        {DAYS.map((day) => (
          <div className="slide">
            <div className="flex flex-col justify-center">
              <h3 className="text-white text-center text-lg font-normal">
                {day?.day}
              </h3>
              <img src={day?.icon} className=" h-8" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
