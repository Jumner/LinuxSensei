import { HStack } from "@chakra-ui/react";
import Os from "./Os";
export default function OsComparison() {
	return (
		<HStack w="80vw" justify="space-between">
			<Os name="Windows" items={["a", "b", "c"]} />
			<Os name="Linux" items={["a", "b", "c"]} />
			<Os name="Mac Os" items={["a", "b", "c"]} />
		</HStack>
	);
}
