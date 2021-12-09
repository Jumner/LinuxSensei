import { Divider, Heading, Flex, Container, Image } from "@chakra-ui/react";

export default function Section({ children, heading, img }) {
	let image = img ? <Image src={img.src} alt="Image not found" m="5" /> : "";
	return (
		<Flex justify="space-evenly" direction="column" align="center">
			<Divider my="10" w="95vw" />
			<Heading my="5">{heading}</Heading>
			<Container>{children}</Container>
			{image}
		</Flex>
	);
}
