import { extendBaseTheme } from "@chakra-ui/react";
import chakra from "@chakra-ui/theme";

const { Drawer, Input } = chakra.components;

export default extendBaseTheme({
  colors: {
    brand: "#744210",
  },
  components: {
    Drawer,
    Input,
  },
});
