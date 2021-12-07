import { HStack } from "@chakra-ui/react";
import Os from "./Os";
export default function DistroComparison() {
	return (
		<HStack w="80vw" justify="space-between">
			<Os
				name="Debian"
				items={[
					"Independant",
					"Community driven project",
					" Long Term Support (LTS) and regular releases",
					"LTS release comes every 2 years, and each one is supported for 5",
					"Non-LTS releases come every 6 months and are supported for 9. The shorter lifespan means they have newer features, but users are forced to move on to a new release once the 9 months is up.",
					"Does not include drivers and firmware, less support for various hardware. Manual installation needed",
				]}
			/>
			<Os
				name="Ubuntu"
				items={[
					"Derives from Debian",
					"Corporate driven project",
					"Stable, Testing and Unstable releases",
					"New stable release comes every 2 years, and each is supported for 5",
					"Testing releases are used to prepare for stable releases. Some users prefer these releases to get new features early, as well as to try out experimental features. Unstable releases should not be used by ordinary users.",
					"Provides proprietary drivers and firmware upon installation. This means smoother installation.",
				]}
			/>
			<Os
				name="Arch"
				items={[
					" Independant",
					"Community driven project",
					"Rolling release model",
					"Does not depend on scheduled major releases. Constantly updating",
					"Regular system updates keep the software updated. This keeps the features and versions of Arch constantly up to date. ",
					"one more",
					"another one",
				]}
			/>
		</HStack>
	);
}
