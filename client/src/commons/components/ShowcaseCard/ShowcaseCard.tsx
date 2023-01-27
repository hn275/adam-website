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

interface PropType {
  image: string;
  heading: string;
  description: string;
  price: number;
}

export function ShowcaseCard({ image, heading, description, price }: PropType) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image loading="lazy" src={image} borderRadius="lg" />

        <Stack mt="6" spacing="3">
          <Heading size="md" color="brand.main">
            {heading}
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

          <Button variant="secondary">Add to cart</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
