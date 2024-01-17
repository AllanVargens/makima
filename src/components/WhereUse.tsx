import { Flex } from "@chakra-ui/react";
import { CardWhereUse } from "./assets/CardWhereUse";
import { FaCircle } from "react-icons/fa";

export function WhereUse() {
    return (
        <Flex as='article' direction={{ base: 'column', md: 'row' }} justifyContent='space-around' maxW='80%' mx='auto' align='center'>
            <CardWhereUse title='Marketing and Advertisement'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Fusce ac lacus ac est euismod finibus. Nunc vitae enim eu augue ultrices sollicitudin eget eget ipsum.'
            />
            <FaCircle color='#919EA2' size='1.5rem'/>
            <CardWhereUse title='E-Commerce'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Fusce ac lacus ac est euismod finibus. Nunc vitae enim eu augue ultrices sollicitudin eget eget ipsum.'
            />
            <FaCircle color='#919EA2' size='1.5rem'/>
            <CardWhereUse title='Knowledge'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Fusce ac lacus ac est euismod finibus. Nunc vitae enim eu augue ultrices sollicitudin eget eget ipsum.'
            />
        </Flex>
    )
}