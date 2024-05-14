import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import useSwiperSlide from "@/hooks/useSwiperSlide"
import Icon from "@/shared/Icon"
import Slider from "@/shared/Slider"
import ZoraVideo from "./ZoraVideo"
import TBAViewer from "./TBAViewer"
import PdfDocument from "./PdfDocument"
import IframePlayer from "./IframePlayer"
import Collage from "./Collage"

const SmartAlbum = () => {
  const { setSwiper, nextSlide, prevSlide, selectedIndex } = useSwiperSlide({ size: 5 })

  return (
    <FadeInWhenVisible className="w-fit flex gap-2 items-center">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        onClick={prevSlide}
        className="w-[40px] aspect-[1/1] rounded-full flex bg-black_1 justify-center items-center"
        disabled={selectedIndex === 0}
      >
        <Icon name="arrowLeft" color="white" raw size={20} />
      </button>
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
        <IframePlayer />
        <TBAViewer />
        <ZoraVideo />
        <PdfDocument />
        <Collage />
      </Slider>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        onClick={nextSlide}
        className="w-[40px] aspect-[1/1] rounded-full flex bg-black_1 justify-center items-center"
        disabled={selectedIndex === 4}
      >
        <Icon name="arrowRight" color="white" raw size={20} />
      </button>
    </FadeInWhenVisible>
  )
}

export default SmartAlbum
