import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Icon from "@/shared/Icon"
import Media from "@/shared/Media"
import Slider from "@/shared/Slider"
import { useState } from "react"

const Evolving = () => {
  const [swiper, setSwiper] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(1)

  const images = [
    "/images/1713199309.webp",
    "/images/1713199323.webp",
    "/images/1713199350.webp",
    "/images/1713199368.webp",
  ]

  const nextSlide = () => {
    if (selectedIndex === images.length - 1) return

    const temp = selectedIndex

    setSelectedIndex(temp + 1)
    swiper.slideTo(temp + 1)
  }

  const prevSlide = () => {
    if (selectedIndex === 0) return

    const temp = selectedIndex

    setSelectedIndex(temp - 1)
    swiper.slideTo(temp - 1)
  }

  return (
    <FadeInWhenVisible className="mt-8 w-full flex flex-col items-center">
      <p className="font-madeoutersans_bold text-[32px] text-white flex flex-col items-center">
        Ever evolving.
      </p>
      <div className="flex justify-center w-[1024px] relative">
        <Slider
          sliderProps={{
            slidesPerView: 3.5,
            spaceBetween: 10,
            loop: true,
            onSwiper(swiperCtrl) {
              setSwiper(swiperCtrl)
            },
          }}
          className="relative z-[1] w-full mt-8"
        >
          {images.map((image) => (
            <Media
              key={image}
              link={image}
              blurLink={image}
              containerClasses="w-[275px] h-[350px] !rounded-[20px]
                            !overflow-hidden"
              imageClasses="!object-cover"
            />
          ))}
        </Slider>
        <div className="absolute w-full h-full left-0 top-0 z-[2]">
          {selectedIndex !== 0 && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              type="button"
              onClick={prevSlide}
              className="w-[40px] !aspect-[1/1] rounded-full flex bg-black_1 justify-center items-center
            !absolute left-0 top-1/2"
            >
              <Icon name="arrowLeft" className="text-white" raw size={20} />
            </button>
          )}
          {selectedIndex !== 1 && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              type="button"
              onClick={nextSlide}
              className="w-[40px] !aspect-[1/1] rounded-full flex bg-black_1 justify-center items-center
            !absolute right-0 top-1/2"
            >
              <Icon name="arrowRight" className="text-white" raw size={20} />
            </button>
          )}
        </div>
      </div>
      <p className="text-white text-center mt-8">
        <span>
          {`I've described El Niño`} as a <em>trilogy</em>, with two more albums coming (some side
          quests ;)
          <br />
          <br />
          The project is ever-evolving...
          <br />
          <br />
          The smart album is limited edition until July 4th. Over time there will be metadata
          updates and improvements to the experience as well as product and brand experiences.
          <br />
          <br /> In the future, you can collect the next projects using the smart album (6551) tech
          to continue adding to your collection, completing an ultimate set. <br />
          <br />
          We believe this could potentially give the smart wallet album - rarity and scarcity,
          making it a unique digital box set to own in your collection.
          <br />
          <br />
          We will continue adding more to the story of el niño until then...
          <br />
        </span>
      </p>
    </FadeInWhenVisible>
  )
}

export default Evolving
