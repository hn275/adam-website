import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Alert } from "./Alert";
import { useCartCtx } from "modules/hooks";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PropType {
  id: number;
  image: string;
  item: string;
  description: string;
  price: number;
}

export function ShowcaseCard({
  id,
  image,
  item,
  description,
  price,
}: PropType) {
  const { cartDispatch } = useCartCtx();
  const { isOpen, onOpen } = useAlertHook();

  const handleAddToCart = () => {
    cartDispatch({
      type: "cart/addItem",
      payload: {
        id,
        quantity: 1,
        costPerItem: price,
        title: item,
        description,
      },
    });
    onOpen();
  };

  return (
    <>
      <Card maxW="xs">
        <CardBody>
          <Image loading="lazy" src={image} borderRadius="lg" />

          <Stack mt="6" spacing="3">
            <Heading size="md" color="brand.main">
              {item}
            </Heading>

            <Text>{description}</Text>

            <Text color="brand.main" fontSize="2xl">
              ${price.toFixed(2)}
            </Text>
          </Stack>
        </CardBody>

        <Divider />

        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="main">Buy now</Button>

            <Button variant="secondary" onClick={handleAddToCart}>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/* ADD TO CART ALERT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ type: "tween" }}
            style={{
              overflow: "hidden",
              position: "fixed",
              left: "1rem",
              bottom: "1rem",
              zIndex: 999,
            }}
          >
            <Alert itemName={item} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function useAlertHook() {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const timeoutID = setTimeout(() => setOpen(() => false), 2000);
      return () => clearTimeout(timeoutID);
    }

    return;
  }, [isOpen]);

  const onOpen = () => setOpen(() => true);

  return { isOpen, onOpen };
}
