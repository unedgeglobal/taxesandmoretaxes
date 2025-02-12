import { Box } from "@chakra-ui/react";
import { WindowSection } from "./components/WindowSection.module";
import { HeroSection } from "./components/HeroSection.module";
// import { TokenSection } from "./components/TokenSection.module";

export default function App() {
  return (
    <Box position="fixed" top={0} left={0} w="full" h="full" overflowY={"auto"}>
      <WindowSection>
        <HeroSection />
      </WindowSection>

      {/* <WindowSection>
        <TokenSection />
      </WindowSection> */}
    </Box>
  );
}
