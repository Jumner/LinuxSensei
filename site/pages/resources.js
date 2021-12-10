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
				These are some frequently asked questions that new users often come up
				with when considering or attempting to learn more about Linux! If you have
				any unanswered questions, feel free to contact us!
				<Faq />
			</Section>
			<Section heading="OS Comparison">
				Linux, while being the most popular open-source operating system, is relatively
				unknown to the general public compared to the standard Windows or MacOS. However, 
				it offers quite a lot of extra versatility and customizability, and is free. 
				There are a couple benefits and downsides of using Linux over its more popular competitors,
				so this following chart is provided to give you a better idea of how Linux compares.
				<OsComparison />
			</Section>
			<Section heading="Distro Comparison">
				Linux comes available in multiple distributions, which are different
				versions operating system that offer distinct software options
				and components. They can be thought of as different "flavours"
				of Linux. Unfortunately, due to the vast number of available Linux 
				distributions, it is quite difficult to provide a summary for 
				every single Linux distribution out there, so we’ve selected 
				some of the more common names you’ll hear so that you can 
				get an idea of what the most popular distributions are like.
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
