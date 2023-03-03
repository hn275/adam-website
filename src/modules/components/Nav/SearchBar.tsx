import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [iconColor, setIconColor] = useState<string>("gray.500");

  useEffect(() => {
    const focusIn = () => {
      setIconColor(() => "brand.main");
    };
    const focusOut = () => {
      setIconColor(() => "gray.500");
    };

    inputRef.current?.addEventListener("focusin", focusIn);
    inputRef.current?.addEventListener("focusout", focusOut);

    return () => {
      inputRef.current?.removeEventListener("focusin", focusIn);
      inputRef.current?.removeEventListener("focusout", focusOut);
    };
  }, []);

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<MdSearch className="text-gray-400" />}
      />
      <Input
        ref={inputRef}
        placeholder="Search anything..."
        color="gray.700"
        variant="filled"
        focusBorderColor="brand.main"
        onFocus={(e) => console.log(e)}
        pt={2}
      />
    </InputGroup>
  );
};
