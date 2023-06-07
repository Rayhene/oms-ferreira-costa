import { Box, Flex, Stack, Progress, Text } from '@chakra-ui/react';

export const ChartProgressError = () => {
  return (
    <Flex justifyContent="flex-end">
      <Box border="1px solid black" width={454} height={546} marginLeft="auto" borderRadius={15}>
        <Flex direction="column" height="100%" paddingLeft={4} paddingTop={9} paddingBottom={2}>
          <Text as="h1" fontWeight="bold" fontSize={30} textAlign="left" marginBottom={4}>
            Problemas resolvidos
          </Text>
          <Flex justifyContent="center" alignItems="center" height="100%">
            <Stack spacing={15} marginRight={3}>
              <Box>
                <Text as="h3" fontSize={19}  textAlign="left" marginBottom={2}>
                  Anti-Fraude
                </Text>
                <Progress colorScheme="yellow" width={390} height="20px" borderRadius={20} value={67}>
                  <Box width={`${20}%`} bg="#E3A400" height="100%" />
                </Progress>
                <Text as="p" fontWeight="bold" fontSize={17}  textAlign="left" marginTop={2} marginLeft={2}>
                  67%
                </Text>
              </Box>
              <Box>
                <Text as="h3" fontSize={19}  textAlign="left" marginBottom={2}>
                  Carrinho
                </Text>
                <Progress colorScheme="blue" width={390} height="20px" borderRadius={20} value={76}>
                  <Box width={`${20}%`} bg="#00B2FF" height="100%" />
                </Progress>
                <Text as="p" fontWeight="bold" fontSize={17} textAlign="left" marginTop={2} marginLeft={2}>
                  76%
                </Text>
              </Box>
              <Box>
                <Text as="h3" fontSize={19}  textAlign="left" marginBottom={2}>
                  Captura
                </Text>
                <Progress colorScheme="purple" width={390} height="20px" borderRadius={20} value={64}>
                  <Box width={`${20}%`} bg="#7003C6" height="100%" />
                </Progress>
                <Text as="p" fontWeight="bold" fontSize={17}  textAlign="left" marginTop={2} marginLeft={2}>
                  64%
                </Text>
              </Box>
              <Box>
                <Text as="h3" fontSize={19}  textAlign="left" marginBottom={2}>
                  Picking
                </Text>
                <Progress colorScheme="red" width={390} height="20px" borderRadius={20} value={57}>
                  <Box width={`${20}%`} bg="#EC5466" height="100%" />
                </Progress>
                <Text as="p" fontWeight="bold" fontSize={17}  textAlign="left" marginTop={2} marginLeft={2}>
                  57%
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
