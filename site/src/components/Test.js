import { Flex, HStack, Heading, Box } from "@chakra-ui/react";
export default function Test() {
  return (
    <Flex w="full" mt={10} justifyContent="flex-end">
      <HStack spacing={59} pr={59} display={{ base: "none", lg: "flex" }}>
        <Heading as="a" href="#about" fontSize="lg">
          About
        </Heading>
        <Heading as="a" href="#streams" fontSize="lg">
          Streams
        </Heading>
        <Heading as="a" href="#schedule" fontSize="lg">
          Schedule
        </Heading>
        <Heading as="a" href="#sponsors" fontSize="lg">
          Sponsors
        </Heading>
        <Heading as="a" href="#team" fontSize="lg">
          Team
        </Heading>
        <Heading as="a" href="#register" fontSize="lg">
          Register
        </Heading>
      </HStack>
    </Flex>
  );
}
