import { NavLink, NavLinkProps } from "react-router-dom";
import { useScreenSize } from "modules/hooks";
import { Drawer, Link } from "./components";
// @ts-ignore
import { Box, Flex, Text } from "@chakra-ui/react";

const PAGE_LINKS = [
  { to: "/", content: "Home" },
  { to: "/services", content: "Services" },
  { to: "/about", content: "About" },
];

export function Nav() {
  const renderLinks = () => {
    return PAGE_LINKS.map((link, index) => (
      <Link key={index} to={link.to}>
        {link.content}
      </Link>
    ));
  };

  const { screenSm, screenMd, screenLg } = useScreenSize();

  return (
    <Flex position="relative" justify="space-between" align="center">
      <Box>{screenLg ? renderLinks() : <div> </div>}</Box>

      <Flex flexGrow={1} justify="center" align="center">
        <Text>Johnson&Books</Text>
      </Flex>

      <Box>
        {screenSm || screenMd ? (
          <Drawer />
        ) : (
          <Box>
            <div>regularsiuzescreeen shit</div>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
