import * as React from "react"
import Button from "./Button"

const contact = () => window.open("mailto:elie@dappworks.co", "_blank")

export default () => {
  return <Button onClick={contact}>GET IN TOUCH</Button>
}
