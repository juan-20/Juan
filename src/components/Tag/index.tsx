import React, { ReactNode } from "react"
import { Box, Tag, TagLabel, TagRightIcon, Tooltip } from "@chakra-ui/react"
import { render } from "react-dom"
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

type tagProps ={
  title: string,
  details: string,
  photo: ReactNode,
  color: string,
  colorScheme: string,
}

const CustomToolTip = ({title, details, photo, color, colorScheme}: tagProps) => (
  <Tooltip hasArrow
  bg={color}
  label={details}>
    <Tag size='sm' variant='subtle' colorScheme={colorScheme} bg={color}>
      <TagLabel color='gray.200'>{title}</TagLabel>
      {photo}
    </Tag>
  </Tooltip>
)

export default CustomToolTip;