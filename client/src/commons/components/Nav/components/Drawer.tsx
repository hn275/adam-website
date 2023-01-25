import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  Button,
  useDisclosure,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Search2Icon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link, PAGE_LINKS } from "./Link";
import { RiMenu4Fill } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { useCartCtx } from "modules/hooks";

export const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    cart: { cartItems },
  } = useCartCtx();

  return (
    <>
      <Button
        onClick={onOpen}
        p={0}
        m={0}
        bg="transparent"
        aria-label="menu"
        position="absolute"
        right="3px"
        top="3px"
      >
        <Icon as={RiMenu4Fill} size="1em" />
      </Button>

      <ChakraDrawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader mb="1rem">
            <DrawerCloseButton size="lg">
              <ChevronRightIcon />
            </DrawerCloseButton>
          </DrawerHeader>

          <DrawerBody>
            {/* Search bar */}
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.500" />}
              />
              <Input
                placeholder="Search anything..."
                color="gray.700"
                variant="filled"
              />
            </InputGroup>
            {/* Links */}
            <VStack as="ul" align="start" gap="1rem" mt="3rem">
              {PAGE_LINKS.map((link) => {
                return (
                  <li key={link.to}>
                    <Link to={link.to} handleClick={() => onClose()}>
                      {link.content}
                    </Link>
                  </li>
                );
              })}
            </VStack>

            <Divider my="3rem" color="gray.200" />

            <Flex direction="column" gap={3}>
              <Button colorScheme="blue">Link to checkout page</Button>
              <Button
                variant="outline"
                onClick={onClose}
                leftIcon={<Icon as={BsCart2} />}
              >
                View cart&nbsp;
                {cartItems.length !== 0 ? (
                  <Text color="gray.400" fontWeight="normal" fontSize="sm">
                    ({cartItems.length})
                  </Text>
                ) : null}
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};
