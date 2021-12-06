import { Flex } from "@chakra-ui/layout";
import Faq from "../src/components/Faq";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Section from "../src/components/Section";
export default function resources() {
	return (
		<Flex justify="space-between" direction="column">
			<Nav />
			<Section heading="Faq">
				<Faq />
			</Section>
			<Footer />
		</Flex>
	);
}
