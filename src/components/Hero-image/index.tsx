import { Box, AspectRatio, Flex, Img } from "@chakra-ui/react";

import Image from 'next/image'
import  me from '../../../public/Iconeanimado-Juan.gif'
// import StatusIndicator from "../status-indicator";

const HeroImage = () => {
  return (
    <Flex position="relative" justify="center" pb={4}>
      <AspectRatio as="figure" flexShrink={0} w={56} h={56} ratio={1}>
        <Box overflow="hidden" rounded="full">
        <Image 
           src={me}
           width={400}
           height={400}
           layout='intrinsic'
           />
        </Box>
      </AspectRatio>
      {/* <StatusIndicator /> */}
    </Flex>
  );
};

export default HeroImage;
