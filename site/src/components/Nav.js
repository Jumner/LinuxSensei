import { Heading, HStack } from "@chakra-ui/layout";

export default function Nav() {
	return (
		<HStack w="full" justify="space-evenly">
			<Heading as="a" href="/">
				Home
			</Heading>
			<Heading as="a" href="/resources">
				Resources
			</Heading>
			<Heading as="a" href="/curtis">
				Curtis
			</Heading>
		</HStack>
	);
}
