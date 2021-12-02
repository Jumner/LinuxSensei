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
		<Accordion allowToggle>
			<Question q="question" a="answer" />;
		</Accordion>
	);
}
