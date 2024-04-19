import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import useSwiperSlide from "@/hooks/useSwiperSlide"
import Icon from "@/shared/Icon"
import Slider from "@/shared/Slider"
import ZoraVideo from "./ZoraVideo"
import IframePlayer from "./IframePlayer"

const SmartAlbum = () => {
  const { setSwiper, nextSlide, prevSlide, selectedIndex } = useSwiperSlide({ size: 2 })

  return (
    <FadeInWhenVisible className="w-fit flex gap-2 items-center">
      {selectedIndex !== 0 && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
          type="button"
          onClick={prevSlide}
          className="w-[40px] aspect-[1/1] rounded-full flex bg-black_1 justify-center items-center"
        >
          <Icon name="arrowLeft" color="white" raw size={20} />
        </button>
      )}
      <Slider
        sliderProps={{
          slidesPerView: 1,
          loop: true,
          onSwiper(swiperCtrl) {
            setSwiper(swiperCtrl)
          },
        }}
        className="relative z-[1] !w-[460px] !px-0"
      >
        <ZoraVideo />
        <IframePlayer />
      </Slider>
      {selectedIndex !== 1 && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
          type="button"
          onClick={nextSlide}
          className="w-[40px] aspect-[1/1] rounded-full flex bg-black_1 justify-center items-center"
        >
          <Icon name="arrowRight" color="white" raw size={20} />
        </button>
      )}
    </FadeInWhenVisible>
  )
}

export default SmartAlbum
