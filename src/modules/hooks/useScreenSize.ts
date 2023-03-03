import { useMediaQuery } from "@chakra-ui/react";

export const useScreenSize = () => {
  const sm = useMediaQuery(["(min-width: 0px)", "(max-width: 640px)"]);
  const md = useMediaQuery(["(min-width: 641px)", "(max-width: 1007px)"]);
  const lg = useMediaQuery(["(min-width: 1008px)"]);

  const screenSm = sm[0] === true && sm[1] === true;
  const screenMd = md[0] === true && md[1] === true;
  const screenLg = lg[0] === true;

  return { screenSm, screenMd, screenLg };
};
