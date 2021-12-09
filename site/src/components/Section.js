import { Divider, Heading, Flex, Box, Image } from "@chakra-ui/react";

export default function Section({ children, heading, img }) {
	let image = img ? (
		<Image
			src={img.src}
			alt="Image not found"
			m="5"
			borderRadius="15"
			boxShadow="md"
		/>
	) : (
		""
	);
	return (
		<Flex justify="space-evenly" direction="column" align="center">
			<Divider my="10" w="95vw" />
			<Heading my="5">{heading}</Heading>
			<Box w="75vw">{children}</Box>
			{image}
		</Flex>
	);
}
