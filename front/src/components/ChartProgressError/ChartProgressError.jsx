import { Flex, Stack, Progress, Box } from '@chakra-ui/react';

export const ChartProgressError = () => {
  return (
    <Flex justifyContent="flex-end">
      <Stack spacing={5}>
        <Progress colorScheme="yellow" width={390} height='32px' borderRadius={20} value={67}>
          <Box width={`${20}%`} bg='#E3A400' height='100%' />
        </Progress>
        <Progress colorScheme="blue" width={390} height='32px' borderRadius={20} value={76}>
          <Box width={`${20}%`} bg='#00B2FF' height='100%' />
        </Progress>
        <Progress colorScheme="purple" width={390} height='32px' borderRadius={20} value={64}>
          <Box width={`${20}%`} bg='#7003C6' height='100%' />
        </Progress>
        <Progress colorScheme="red" width={390} height='32px' borderRadius={20} value={57}>
          <Box width={`${20}%`} bg='#EC5466' height='100%' />
        </Progress>
      </Stack>
    </Flex>
  );
};
