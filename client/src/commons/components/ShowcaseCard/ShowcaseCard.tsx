import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Image, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export function ShowcaseCard({
    image,
    heading,
    description,
    price,
}) {

  return (
    <Card maxW='sm'>
        <CardBody>
            <Image
            src={image}
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{heading}</Heading>
            <Text>{description}</Text>
            <Text color='blue.600' fontSize='2xl'>
                {price}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Add to cart
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
  );
}
