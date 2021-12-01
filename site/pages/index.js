import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import { Flex } from "@chakra-ui/layout";
export default function Home() {
	return (
		<Flex justify="space-between" direction="column">
			<Nav />
			<Footer />
		</Flex>
	);
}
