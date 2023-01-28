import {
  Alert as CuiAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface PropType {
  itemName: string;
}

export const Alert = ({ itemName }: PropType) => {
  return (
    <CuiAlert status="success" w="max-content" borderRadius="lg">
      <AlertIcon />

      <AlertTitle pt={1}>Success!</AlertTitle>
      <AlertDescription pt={1}>{itemName} added to cart!</AlertDescription>
    </CuiAlert>
  );
};
