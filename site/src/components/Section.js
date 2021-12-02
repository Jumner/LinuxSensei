import { Divider, Heading, Flex } from "@chakra-ui/react";

export default function Section({ children, heading }) {
	return (
		<Flex justify="space-evenly" direction="column" align="center">
			<Divider my="10" w="95vw" />
			<Heading my="2">{heading}</Heading>
			{children}
		</Flex>
	);
}
