import { Box, Grid, GridItem, Text, Flex, Button, useClipboard, useBreakpointValue } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

export function TokenSection() {
  // Dados do token (pode ser dinâmico no futuro)
  const tokenData = {
    address: "0xe09ee00a13d48528c9e8e88d472fc9d9beab64ca",
    volume: "$1,500,000",
    marketCap: "$50,000,000",
    change24h: "+3.5%",
    totalSupply: "1,000,000,000 TAX",
    holders: "12,345",
    liquidity: "$5,000,000",
    transactions24h: "8,000",
  };

  // Hook para copiar o endereço
  const { hasCopied, onCopy } = useClipboard(tokenData.address);

  return (
    <Box w="full" py={10} px={6} bg="blackAlpha.900" color="white" textAlign="center">
      {/* Endereço do contrato */}
      <Flex justify="center" align="center" mb={6}>
        <Text fontSize="lg" fontWeight="bold" mr={3}>
          {tokenData.address}
        </Text>
        <Button size="sm" onClick={onCopy} leftIcon={<FaCopy />} colorScheme="gray">
          {hasCopied ? "Copied!" : "Copy"}
        </Button>
      </Flex>

      {/* Grid de Informações */}
      {/* <Grid
        templateColumns={useBreakpointValue({ base: "1fr", md: "repeat(2, 1fr)" })}
        gap={6}
        maxW="800px"
        mx="auto"
      >
        <GridItem bg="gray.800" p={4} borderRadius="md">
          <Text fontSize="sm" opacity={0.7}>Volume 24h</Text>
          <Text fontSize="xl" fontWeight="bold">{tokenData.volume}</Text>
        </GridItem>

        <GridItem bg="gray.800" p={4} borderRadius="md">
          <Text fontSize="sm" opacity={0.7}>Market Cap</Text>
          <Text fontSize="xl" fontWeight="bold">{tokenData.marketCap}</Text>
        </GridItem>

        <GridItem bg="gray.800" p={4} borderRadius="md">
          <Text fontSize="sm" opacity={0.7}>Variação 24h</Text>
          <Text fontSize="xl" fontWeight="bold">{tokenData.change24h}</Text>
        </GridItem>

        <GridItem bg="gray.800" p={4} borderRadius="md">
          <Text fontSize="sm" opacity={0.7}>Total Supply</Text>
          <Text fontSize="xl" fontWeight="bold">{tokenData.totalSupply}</Text>
        </GridItem>

        <GridItem bg="gray.800" p={4} borderRadius="md">
          <Text fontSize="sm" opacity={0.7}>Holders</Text>
          <Text fontSize="xl" fontWeight="bold">{tokenData.holders}</Text>
        </GridItem>

        <GridItem bg="gray.800" p={4} borderRadius="md">
          <Text fontSize="sm" opacity={0.7}>Liquidity</Text>
          <Text fontSize="xl" fontWeight="bold">{tokenData.liquidity}</Text>
        </GridItem>

        <GridItem bg="gray.800" p={4} borderRadius="md">
          <Text fontSize="sm" opacity={0.7}>Transactions 24h</Text>
          <Text fontSize="xl" fontWeight="bold">{tokenData.transactions24h}</Text>
        </GridItem>
      </Grid> */}
    </Box>
  );
}
