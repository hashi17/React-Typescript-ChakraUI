import { Button, ChakraProvider, Flex, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import theme from "./theme/theme";

export default function App() {
  const parse = (val: string) => val.replace(/^\$/, "");
  const [value, setValue] = useState("");
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Input
          placeholder="ここにテキスト"
          marginRight="8px"
          size="md"
          width="200px"
        />
        <Button colorScheme="teal">ボタン</Button>
      </Flex>
      <p>ああああ</p>
    </ChakraProvider>
  );
}
