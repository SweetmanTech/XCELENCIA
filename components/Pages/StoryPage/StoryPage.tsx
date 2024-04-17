import Layout from "@/components/Layout"
import Journey from "./Journey"
import Started from "./Started"
import Spark from "./Spark"
import Dynamic from "./Dynamic"

const StoryPage = () => (
  <Layout type="base">
    <div className="flex flex-col w-screen">
      <Journey />
      <Started />
      <Spark />
      <Dynamic />
    </div>
  </Layout>
)

export default StoryPage
