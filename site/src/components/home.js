import { Center, VStack, Heading, Image, Text } from "@chakra-ui/layout";
export default function Home1() {
	return (
		<VStack bg="main.400" p="10" justify="space-evenly" spacing="10">
			<Center w="full">
				<Heading fontSize="4em">Linux Sensei</Heading>
			</Center>
			<Text>An inviting resource for linux</Text>
		</VStack>
	);
}
