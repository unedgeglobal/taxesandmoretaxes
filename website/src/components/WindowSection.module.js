import { Flex } from "@chakra-ui/react";

export function WindowSection({ children }) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      w="full"
      h="100vh"
    >
      {children}
    </Flex>
  );
}
