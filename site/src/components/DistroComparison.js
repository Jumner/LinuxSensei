import { HStack } from "@chakra-ui/react";
import Os from "./Os";
export default function DistroComparison() {
	return (
		<HStack w="80vw" justify="space-between">
			<Os name="Debian" items={["hi", "b", "c"]} />
			<Os name="Ubuntu" items={["a", "b", "c"]} />
			<Os name="Arch" items={["a", "b", "c"]} />
		</HStack>
	);
}
