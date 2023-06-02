import { Box, Spinner } from '@chakra-ui/react';

const Loading = (props) => (
    <Box display="flex" justifyContent="center" {...props}>
        <Spinner size="xl" color='red.500' />
    </Box>
);

export default Loading;