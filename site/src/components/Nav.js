import { Heading, HStack } from "@chakra-ui/layout";
function Item({ name, page, n, link }) {
	return (
		<Heading as="a" href={link} color={page == n ? "main.300" : 0}>
			{name}
		</Heading>
	);
}
export default function Nav({ page }) {
	return (
		<HStack w="full" justify="space-evenly" bg="main.600" color="white" p="2">
			<Item name="Home" page={page} n="0" link="/" />
			<Item name="Resources" page={page} n="1" link="/resources" />
		</HStack>
	);
}
