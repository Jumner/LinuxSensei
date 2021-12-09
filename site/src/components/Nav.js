import { Heading, HStack } from "@chakra-ui/layout";

export default function Nav() {
	return (
		<HStack w="full" justify="space-evenly" bg="main.600" color="white" p="2">
			<Heading as="a" href="/">
				Home
			</Heading>
			<Heading as="a" href="/resources">
				Resources
			</Heading>
		</HStack>
	);
}
