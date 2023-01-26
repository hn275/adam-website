import { useNavigate } from "react-router-dom";
import { useScreenSize } from "modules/hooks";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, PAGE_LINKS } from "./components/Link";
import { Drawer } from "./components/Drawer";
import { SearchBar } from "./components/SearchBar";
import { CartIcon } from "./components/CartIcon";

export function Nav() {
  const { screenSm, screenMd, screenLg } = useScreenSize();
  const nav = useNavigate();

  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      pt="0.8rem"
      pb="0.6rem"
      px="1rem"
      borderBottom="1px solid hsla(0deg, 0%, 0%, 5%)"
      bg="white"
      position="sticky"
      top={0}
    >
      {screenLg && (
        <Flex as="ul" gap="2.5rem">
          {PAGE_LINKS.map((link) => {
            return (
              <li key={link.to}>
                <Link to={link.to}>{link.content}</Link>
              </li>
            );
          })}
        </Flex>
      )}

      <Text
        color="brand.main"
        fontFamily="Marck Script;serifs"
        fontWeight="bold"
        fontSize="2xl"
        letterSpacing="wide"
        cursor="pointer"
        onClick={() => nav("/")}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-45%)",
        }}
      >
        Johnson&Books
      </Text>

      <Box>
        {screenSm || screenMd ? (
          <Drawer />
        ) : (
          <Flex align="center" gap="1rem">
            <SearchBar />
            <CartIcon />
          </Flex>
        )}
      </Box>
    </Flex>
  );
}
