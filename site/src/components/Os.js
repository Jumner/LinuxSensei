import {
	Heading,
	Flex,
	UnorderedList,
	ListItem,
	Divider,
} from "@chakra-ui/layout";

export default function Os({ name, items }) {
	items = items.map((item) => {
		return (
			<>
				<Divider my="5" />
				<ListItem key={item} m="4">
					{item}
				</ListItem>
			</>
		);
	});
	return (
		<Flex
			direction="column"
			justify="space-evenly"
			bg="main.400"
			w="90%"
			p="8"
			boxShadow="md"
			borderRadius="15"
		>
			<Heading textAlign="center">{name}</Heading>
			<UnorderedList>{items}</UnorderedList>
		</Flex>
	);
}
