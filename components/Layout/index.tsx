import BaseLayout from "./BaseLayout"
import { ILayout } from "./types"

const layoutContainers = {
  base: BaseLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type, backgroundImage }: ILayoutFactory) {
  const Container = layoutContainers[type]

  return <Container backgroundImage={backgroundImage}>{children}</Container>
}

export default Layout
