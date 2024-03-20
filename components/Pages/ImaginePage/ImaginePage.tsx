import Layout from "@/components/Layout"
import Content from "@/components/Layout/Content"
import SeoHead from "@/components/SeoHead"
import SignButton from "@/components/SignButton"

const ImaginePage = () => (
  <Layout type="base">
    <SeoHead />
    <Content>
      <div className="h-full flex justify-center items-center">
        <SignButton />
      </div>
    </Content>
  </Layout>
)

export default ImaginePage
