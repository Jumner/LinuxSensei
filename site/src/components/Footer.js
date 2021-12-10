import {
	Text,
	SimpleGrid,
	Flex,
	Heading,
	Divider,
	Container,
} from "@chakra-ui/layout";
import { SocialIcon } from "react-social-icons";

function Team({ name, email }) {
	return (
		<Flex p="3" justify="space-between">
			<Heading fontSize="20" mr="3">
				{name}
			</Heading>
			<Text as="a" href={`mailto:${email}`} textDecor="underline">
				{email}
			</Text>
		</Flex>
	);
}

export default function Footer() {
	return (
		<SimpleGrid
			w="full"
			bg="main.300"
			p="5"
			// columns="1"
			justifyItems="center"
			templateColumns={{ base: "1fr", xl: "1fr auto 2fr" }}
			mt="10"
		>
			<Flex flexDir="column" w="full" p="5">
				<Heading textAlign="center">Contact Us</Heading>
				<Divider w="90%" my="10" alignSelf="center" />
				<Team name="Max" email="1childerhmax@hdsb.ca" />
				<Team name="Justin" email="1frankjus@hdsb.ca" />
				<Team name="Curtis" email="1sinopolicur@hdsb.ca" />
				<Team name="James" email="1yangjam@hdsb.ca" />
				<Divider w="90%" my="10" alignSelf="center" />
				<Flex flexDir="row" justify="flex-end" alignItems="center">
					<SocialIcon
						target="_blank"
						network="instagram"
						url="https://www.instagram.com/linuxsensei/"
						bgColor="main.400"
					></SocialIcon>
					<Text
						as="a"
						href="https://www.instagram.com/linuxsensei"
						target="_blank"
						fontSize="25"
						fontWeight="bolder"
						ml="5"
					>
						LinuxSensei
					</Text>
				</Flex>
			</Flex>
			<Divider orientation="vertical" h="70%" my="auto" mx="5" />
			<Flex
				flexDir="column"
				w="full"
				p="5"
				display={{ base: "none", xl: "flex" }}
			>
				<Heading textAlign="center">{"Where We're headed"}</Heading>
				<Divider w="90%" my="10" alignSelf="center" />
				<Flex flexDir="row" w="full" justify="space-evenly">
					<Container>
						<Heading>Outreach</Heading>
						<Text fontSize="20" p="8">
							Greater social media presence,
							<br />
							connecting with more users
						</Text>
					</Container>
					<Container>
						<Heading>More</Heading>
						<Text fontSize="20" p="8">
							More Distros,
							<br />
							More Questions
							<br />
							More options
							<br />
							More users
						</Text>
					</Container>
					<Container>
						<Heading>Customization</Heading>
						<Text fontSize="20" p="8">
							Learn to bend linux to your specific needs
						</Text>
					</Container>
				</Flex>
			</Flex>
		</SimpleGrid>
	);
}
