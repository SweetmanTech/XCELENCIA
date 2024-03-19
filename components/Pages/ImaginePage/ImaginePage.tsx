import Layout from "@/components/Layout"
import Content from "@/components/Layout/Content"
import SeoHead from "@/components/SeoHead"
import LoginButton from "@/components/LoginButton"

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
