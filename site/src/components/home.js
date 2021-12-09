import { Center, VStack, Heading, Image, Text } from "@chakra-ui/layout";
export default function Home1() {
	return (
		<VStack>
			<Center w="full" bg="main.400">
				<Heading m="67" fontSize="4em">
					Linux Information
				</Heading>
			</Center>
			<Text p="5">An inviting guide to linux</Text>
		</VStack>
	);
}
