import { useEffect, useRef } from "react";
import { useScreenSize } from "modules/hooks";

import { Center, Image } from "@chakra-ui/react";
import heroImg from "../assets/hero.jpg";
import logoSvg from "../assets/logo.svg";

import "./style.css";

export const Hero = () => {
  const logoContainerRef = useRef<HTMLDivElement | null>(null);
  const logoSVGRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      logoContainerRef.current?.classList.add("mounted");
      logoSVGRef.current?.classList.add("mounted");
    }, 500);

    return () => clearTimeout(timeoutID);
  }, []);

  const { screenSm } = useScreenSize();

  return (
    <>
      <Center
        h="50vh"
        maxHeight={screenSm ? "240px" : "400px"}
        overflow="hidden"
        position="relative"
        style={{ isolation: "isolate" }}
      >
        <Image src={heroImg} fit="contain" />

        <Center
          position="absolute"
          top="50%"
          left="50%"
          className="logo-container"
          transform="translate(-50%, -50%)"
          w="100%"
          h="100%"
          ref={logoContainerRef}
        >
          <Image
            src={logoSvg as string}
            boxSize={screenSm ? "28rem" : "32rem"}
            ref={logoSVGRef}
            className="logo-svg"
          />
        </Center>
      </Center>
    </>
  );
};
