import Layout from "@/components/Layout"
import Journey from "./Journey"
import Started from "./Started"

const StoryPage = () => (
  <Layout type="base">
    <div className="flex flex-col w-screen">
      <Journey />
      <Started />
    </div>
  </Layout>
)

export default StoryPage
