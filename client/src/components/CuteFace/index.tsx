import { ComponentPropsWithoutRef, useState } from "react"
import { useEntityBehavior } from "./hooks"
import Container, { Face, Mounth } from "./styles"

export default (props: ComponentPropsWithoutRef<"div">) => {
  const [, setEntity] = useState<HTMLDivElement>(null!)
  useEntityBehavior(setEntity)
  return (
    <Container data-cute-face {...props}>
      <Face ref={setEntity}>
        <Mounth />
      </Face>
    </Container>
  )
}
