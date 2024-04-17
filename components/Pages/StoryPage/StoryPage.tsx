import Layout from "@/components/Layout"
import Journey from "./Journey"
import Started from "./Started"
import Spark from "./Spark"

const StoryPage = () => (
  <Layout type="base">
    <div className="flex flex-col w-screen">
      <Journey />
      <Started />
      <Spark />
    </div>
  </Layout>
)

export default StoryPage
