import { Flex, HStack } from "@chakra-ui/layout";
import Faq from "../src/components/Faq";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Section from "../src/components/Section";
import OsComparison from "../src/components/OsComparison";
import DistroComparison from "../src/components/DistroComparison";
export default function resources() {
	return (
		<Flex justify="space-between" direction="column">
			<Nav />
			<Section heading="Faq">
				<Faq />
			</Section>
			<Section heading="Os Comparison">
				<OsComparison />
			</Section>
			<Section heading="Distro Comparison">
				<DistroComparison />
			</Section>
			<Footer />
		</Flex>
	);
}
