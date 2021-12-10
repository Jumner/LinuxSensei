import Nav from "../src/components/Nav";
import Home1 from "../src/components/home";
import Footer from "../src/components/Footer";
import Section from "../src/components/Section";
import { Flex, Link, Text } from "@chakra-ui/layout";

import Faq from "../src/components/Faq";

export default function Home() {
	return (
		<Flex justify="space-between" direction="column">
			<Nav page="0" />
			<Home1 />
			<Section heading="Faq">
				<Text p="10">
					These are some frequently asked questions that new users often come up
					with when considering or attempting to learn more about Linux! If you
					have any unanswered questions, feel free to contact us!
				</Text>
				<Faq />
			</Section>
			<Section heading="Ready to get started?">
				Check out the{" "}
				<Link
					href="/resources"
					textDecor="underline"
					color="main.400"
					fontWeight="bold"
				>
					installation guide
				</Link>{" "}
				when you{"'"}re ready
			</Section>
			<Footer />
		</Flex>
	);
}
