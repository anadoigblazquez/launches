import React from 'react'

import { Tag } from "./ui/tag";
import { HiCalendar } from 'react-icons/hi';
import { Box, Text, Spacer, Flex, Button } from '@chakra-ui/react';

const LaunchItem = (launch) => {
  const { mission_name, launch_date_local, launch_success, mission_year } =
    launch;

  return (
    <Box 
        key={launch.flight_number} 
        bg="gray.100" 
        p={5} m={5} 
        borderRadius="lg">
            <Flex>
                <Text fontSize="2xl">
                    Mission <strong>{mission_name}</strong>({mission_year})
                </Text>
            <Spacer />
            <Tag 
                p={4} 
                colorPalette={launch_success ? "green" : "red"}>
                {launch_success ? "Success" : "False"}
            </Tag>
        </Flex>
        <Flex>
            <HiCalendar />
            <Text fontSize="sm" ml={1}>
                {launch_date_local.split("T")[0]}
            </Text>
        </Flex>
        <Flex justify="center" mt={5}>
            <Button 
                bg="blue" size='md'>Details</Button>
        </Flex>
        
    </Box>
  );
};

export default LaunchItem;