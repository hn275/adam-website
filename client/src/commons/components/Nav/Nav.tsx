import { useNavigate } from "react-router-dom";
import { useScreenSize } from "modules/hooks";
import { Drawer, Link, PAGE_LINKS } from "./components";
import { Box, Flex, Text } from "@chakra-ui/react";

export function Nav() {
  const renderLinks = () => {
    return PAGE_LINKS.map((link, index) => (
      <Link key={index} to={link.to}>
        {link.content}
      </Link>
    ));
  };

  const { screenSm, screenMd, screenLg } = useScreenSize();
  const nav = useNavigate();

  return (
    <Flex
      position="relative"
      justify="space-between"
      align="center"
      py="0.4rem"
      borderBottom="1px solid hsla(0deg, 0%, 0%, 5%)"
      bg="white"
    >
      <Box>{screenLg ? renderLinks() : <div> </div>}</Box>

      <Flex flexGrow={1} justify="center" align="center">
        <Text
          p={0}
          mt={2}
          color="yellow.900"
          fontFamily="Marck Script;serifs"
          fontWeight="bold"
          fontSize="2xl"
          letterSpacing="wide"
          cursor="pointer"
          onClick={() => nav("/")}
        >
          Johnson&Books
        </Text>
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
