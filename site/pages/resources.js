import { Center, Flex, HStack, Text } from "@chakra-ui/layout";
import Faq from "../src/components/Faq";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Section from "../src/components/Section";
import OsComparison from "../src/components/OsComparison";
import DistroComparison from "../src/components/DistroComparison";

import cheatsheet from "./img/cheatsheet.png";

export default function resources() {
	return (
		<Flex justify="space-between" direction="column">
			<Nav />
			<Section heading="Faq">
				<Faq />
			</Section>
			<Section heading="OS Comparison">
				<OsComparison />
			</Section>
			<Section heading="Distro Comparison">
				<DistroComparison />
			</Section>
			<Section heading="The Linux Cheat sheet" img={cheatsheet}>
				<Center>
					<Text
						as="a"
						href={cheatsheet.src}
						color="main.400"
						textDecor="underline"
						fontWeight="bolder"
					>
						Here is a direct link to the image
					</Text>
				</Center>
			</Section>
			<Footer />
		</Flex>
	);
}
