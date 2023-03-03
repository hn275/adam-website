import { type CartItem as CartItemType } from "modules/contexts/cart/types";
import { Text } from "@chakra-ui/react";
import { useScreenSize } from "modules/hooks";

interface PropType {
  item: CartItemType;
}

export const CartItem = ({ item }: PropType) => {
  const { screenLg, screenMd, screenSm } = useScreenSize();

  return <>{screenSm ? <Text as="h4">{item.title}</Text> : null}</>;
};
