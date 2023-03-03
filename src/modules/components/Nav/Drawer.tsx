import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  Button,
  VStack,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, PAGE_LINKS } from "./Link";
import { SearchBar } from "./SearchBar";
import { RiMenu4Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { useCartCtx } from "modules/hooks";

export const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    cart: { cartItems },
    cartDispatch,
  } = useCartCtx();

  const handleClick = () => {
    cartDispatch({ type: "cart/toggle" });
    onClose();
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="bg-transparent absolute top-0"
        aria-label="menu"
      >
        <Icon as={RiMenu4Fill} size="1em" />
      </button>

      <ChakraDrawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader mb="1rem">
            <DrawerCloseButton size="lg">
              <MdClose />
            </DrawerCloseButton>
          </DrawerHeader>

          <DrawerBody>
            {/* Search bar */}
            <SearchBar />

            {/* Links */}
            <VStack as="ul" align="left" gap="1rem" mt="3rem" ml="2rem">
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

            {/* Buttons */}
            <Flex direction="column" gap={3}>
              <Button
                variant="outline"
                onClick={handleClick}
                leftIcon={<Icon mb={2} as={BsCart2} />}
                pt={1}
                color="gray.600"
              >
                View cart&nbsp;
                {cartItems.length !== 0 ? (
                  <Text color="gray.400" fontWeight="normal" fontSize="sm">
                    ({cartItems.length})
                  </Text>
                ) : null}
              </Button>

              <Button bg="brand.main" color="white" pt={1}>
                Checkout
                {/* Link to checkout page */}
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};
