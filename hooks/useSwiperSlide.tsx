import { useState } from "react"

const useSwiperSlide = ({ size }) => {
  const [swiper, setSwiper] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const nextSlide = () => {
    if (selectedIndex === size - 1) return

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

  return {
    setSwiper,
    nextSlide,
    prevSlide,
    selectedIndex,
  }
}

export default useSwiperSlide
