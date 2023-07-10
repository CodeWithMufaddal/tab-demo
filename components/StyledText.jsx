import { FONT } from "../constants"
import { Text } from "./Themed"

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: FONT.regular }]} />
}
