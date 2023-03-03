import { defineStyleConfig } from "@chakra-ui/react";

// BUTTON
export default defineStyleConfig({
  baseStyle: {
    color: "gray.600",
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
