import Nav from "../src/components/Nav";
<<<<<<< HEAD
import Home1 from "../src/components/home";
export default function Home() {
	return <> <Nav /> <Home1 /> </>;
=======
import Footer from "../src/components/Footer";
import { Flex } from "@chakra-ui/layout";
export default function Home() {
	return (
		<Flex justify="space-between" direction="column">
			<Nav />
			<Footer />
		</Flex>
	);
>>>>>>> main
}
