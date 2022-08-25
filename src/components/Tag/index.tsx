import React, { ReactNode } from "react"
import { Tag, TagLabel, TagRightIcon, Tooltip } from "@chakra-ui/react"


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