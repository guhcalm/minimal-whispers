import { Dispatch, SetStateAction, useEffect } from "react"

let mouse = { x: innerWidth / 2, y: innerHeight / 2 }
addEventListener("mousemove", ({ x, y }: MouseEvent) => (mouse = { x, y }))

const lerp = (origin: number, target: number, t: number) =>
  origin + (target - origin) * t

export const useEntityBehavior = (
  setEntity: Dispatch<SetStateAction<HTMLDivElement>>
) =>
  useEffect(() => {
    const loop = () =>
      setEntity(entity => {
        requestAnimationFrame(loop)
        const { x, y, width, height } = entity.getBoundingClientRect()
        entity.setAttribute(
          "style",
          `
            left: ${lerp(x + width / 2, mouse.x, 0.03)}px; 
            top: ${lerp(y + height / 2, mouse.y, 0.03)}px;
          `
        )
        return entity
      })
    requestAnimationFrame(loop)
  }, [])
