import Layout from "@/components/Layout"
import Journey from "./Journey"
import Started from "./Started"
import Spark from "./Spark"
import Dynamic from "./Dynamic"
import Evolving from "./Evolving"

const StoryPage = () => (
  <Layout type="base">
    <div className="flex flex-col w-screen">
      <Journey />
      <Started />
      <Spark />
      <Dynamic />
      <Evolving />
    </div>
  </Layout>
)

export default StoryPage
