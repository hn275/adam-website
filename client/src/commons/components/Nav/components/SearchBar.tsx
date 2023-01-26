import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon color="gray.500" />}
      />
      <Input
        placeholder="Search anything..."
        color="gray.700"
        variant="filled"
        pt={2}
      />
    </InputGroup>
  );
};
