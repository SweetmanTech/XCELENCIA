// import useCountdown, { SCREEN } from "@/hooks/useCountDown"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
// import CounterDown from "./CounterDown"
import LiveHome from "./LiveHome"

const LandingPage = () => (
  // const { screenMode } = useCountdown()

  <Layout type="base">
    <SeoHead />
    <LiveHome />
    {/* {screenMode === SCREEN.COLLECT && <LiveHome />} */}
    {/* {screenMode === SCREEN.COUNTDOWN && (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
          <CounterDown />
        </div>
      )} */}
  </Layout>
)

export default LandingPage
