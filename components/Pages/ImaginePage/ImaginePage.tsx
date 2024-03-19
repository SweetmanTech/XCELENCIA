import Layout from "@/components/Layout"
import Content from "@/components/Layout/Content"
import LoginButton from "@/components/LoginButton"
import SeoHead from "@/components/SeoHead"

const ImaginePage = () => (
  <Layout type="base">
    <SeoHead />
    <Content>
      <div className="h-full flex justify-center items-center">
        <LoginButton />
      </div>
    </Content>
  </Layout>
)

export default ImaginePage
