import {
  Alert as CuiAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from "@chakra-ui/react";

interface PropType {
  itemName: string;
}

export const Alert = ({ itemName }: PropType) => {
  return (
    <CuiAlert status="success" w="max-content" borderRadius="lg">
      <AlertIcon />

      <AlertTitle pt={1}>{itemName} Added to cart!</AlertTitle>

      <AlertDescription>
        <Button>View cart now</Button>
      </AlertDescription>
    </CuiAlert>
  );
};
