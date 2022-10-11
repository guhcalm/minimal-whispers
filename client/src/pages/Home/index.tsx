import { ComponentPropsWithoutRef } from "react"
import { CuteFace } from "../../components"
import Container from "./styles"

export default ({ ...rest }: ComponentPropsWithoutRef<"div">) => (
  <Container data-home {...rest}>
    <CuteFace />
  </Container>
)
