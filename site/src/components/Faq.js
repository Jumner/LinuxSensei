import {
	Text,
	Accordion,
	AccordionIcon,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Flex,
	Heading,
} from "@chakra-ui/react";

function Question({ q, a }) {
	return (
		<AccordionItem>
			<AccordionButton
				_focus={{
					border: "none",
				}}
				justifyContent="space-between"
			>
				<Flex pt="5" pb="5">
					<Heading fontSize={{ base: "1rem", lg: "1.5rem" }}>{q}</Heading>
				</Flex>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pt="5" pb="5">
				<Text fontSize={{ base: "0.85rem", lg: "1rem" }}>{a}</Text>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default function Faq() {
	return (
		<Accordion allowToggle w="full">
			<Question
				q="What is Linux?"
				a="Linux is an operating system, similar to the more common Windows and macOS. It is completely free and is also open-source. This means that, unlike many of its competitors, the Linux source code is completely open to the public to view and change to the user’s liking. On top of this, there are also multiple “distributions” of Linux, which are varying versions of the operating system that offer distinct software options and components. Due to these unique features, Linux has become a widespread operating system, gaining popularity as more individuals choose to make the switch."
			/>
			<Question
				q="What do I gain from using it?"
				a="Although less popular, Linux offers a variety of unique advantages over the more popular operating systems. With a large number of available open-source distributions, users are given room for flexibility and customizability to a degree far greater than the more popular alternatives. Additionally, as a result of open-source distributions, source code is mass-reviewed and made sure that no vulnerabilities exist. Because of this, Linux distributions are often more secure than Windows and macOS. In fact, it is frequently acknowledged as the most secure operating system of them all! With all of this being freely available, users have found that there are quite a lot of benefits of switching."
			/>
			<Question
				q="Why don’t I hear much about it?"
				a="Operating systems from Apple, Microsoft and Google are preinstalled on most devices as the default operating system of the device, and so most casual users won’t ever hear much about Linux, or ever feel the need to look into it. Additionally, Linux is typically regarded as less user-friendly compared to the much more intuitive Windows and macOS with their common and simpler UI elements. As a result, there is relatively little mainstream knowledge of Linux. However, while perhaps lacking in mainstream popularity, Linux is particularly popular in software and technology circles, as it offers unique flexibility that can be harnessed by professionals. Just because it’s not mainstream does not make it not powerful!"
			/>
			<Question
				q="How do I know if Linux is for me?"
				a="While typically known to be less user friendly, Linux’s large number of available, free, and open-source distros typically means that you will always be able to find applications that will be similar to what you’re used to using. However, with this being said, Linux is not quite as polished as the Windows or macOS, so some may find setting up their system to be frustrating and not straightforward. If you’d like to avoid all of that, then unfortunately Linux may not be the system for you. However, if you don’t mind spending some time to get a better feel of Linux, then you might just find yourself to be surprisingly satisfied!"
			/>
			<Question
				q="How do I get started with Linux?"
				a="First, decide on the distribution that you’d like to use. If you’re unsure, or if you’d like some recommendations, you can visit our OS comparisons section to see a brief overview of many commonly used distros, and what we recommend based on your experience and needs (You don’t need to think too hard though, as you can always change distributions later on if you’d like!). After choosing your distro, you can refer to our Linux guide which covers each individual installation step in detail, designed to assist new but curious users. Alternatively, if plain text isn’t quite your cup of tea, we have our very own in depth video walkthrough on the Linux installation process."
			/>
			<Question
				q="Which distribution of Linux is best?"
				a="The truth is, there really is no “best” distribution of Linux, however there are some slight differences among them which can provide certain advantages and disadvantages depending on the situation. Some distros are known to be more beginner friendly and intuitive to use, while some others are better suited for the well-seasoned user.  You can visit our OS comparisons section for more information about this topic. "
			/>
		</Accordion>
	);
}
