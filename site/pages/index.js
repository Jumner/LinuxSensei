import Nav from "../src/components/Nav";
import Home1 from "../src/components/home";
import Footer from "../src/components/Footer";
import Section from "../src/components/Section";
import { Flex } from "@chakra-ui/layout";
export default function Home() {
	return (
		<Flex justify="space-between" direction="column">
			<Nav />
			<Home1 />
			<Section heading="hello">bruh</Section>
			<Footer />
		</Flex>
	);
}
