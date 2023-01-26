import { extendTheme } from "@chakra-ui/react";
import Text from "./Text";
import Button from "./Button";

export default extendTheme({
  colors: {
    brand: {
      main: "#744210",
    },
  },
  components: {
    Text,
    Button,
  },
});
