import { defineStyleConfig } from "@chakra-ui/react";

// HEADING
export default defineStyleConfig({
  baseStyle: {
    color: "gray.700",
    pt: 1,
  },

  variants: {
    main: {
      bg: "brand.main",
      color: "gray.50",
    },
    secondary: {
      bg: "transparent",
      color: "brand.main",
    },
  },
});
