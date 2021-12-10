import { HStack } from "@chakra-ui/react";
import Os from "./Os";
export default function DistroComparison() {
	return (
		<HStack
			display={{ base: "none", lg: "flex" }}
			w="full"
			h="full"
			justify="space-between"
			align="stretch"
			spacing="10"
			my="10"
		>
			<Os
				name="Debian"
				items={[
					"Independant",
					"Community driven project",
					" Long Term Support (LTS) and regular releases",
					"LTS release comes every 2 years, and each one is supported for 5",
					"Non-LTS releases come every 6 months and are supported for 9. The shorter lifespan means they have newer features, but users are forced to move on to a new release once the 9 months is up.",
					"Does not include drivers and firmware, less support for various hardware. Manual installation needed",
					"Available in many architectures, such as alpha, arm, hppa, i386, x86_64, ia64, m68k, mips, mipsel, powerpc, s390, and sparc",
					"More user customization possible",
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
					"Available in i386, x86_64, and powerpc",
					"Provides preconfigured system",
				]}
			/>
			<Os
				name="Arch"
				items={[
					"Independant",
					"Community driven project",
					"Rolling release model",
					"Does not depend on scheduled major releases. Constantly updating",
					"Regular system updates keep the software updated. This keeps the features and versions of Arch constantly up to date. ",
					"Hardware is auto-detected during the boot process, as well as required drivers.",
					"Arch is only available for x86_64 architectures, although some arch based distributions support more options",
					"Designed for users who prefer to do things themselves, more user customization",
				]}
			/>
		</HStack>
	);
}
