import { HStack } from "@chakra-ui/react";
import Os from "./Os";
export default function OsComparison() {
	return (
		<HStack w="80vw" justify="space-between">
			<Os
				name="Windows"
				items={[
					"Created by Microsoft",
					"Found on most PC products, but available on other devices using software",
					"Used often for personal devices, also sees widespread use in workplace",
					"Computer gaming revolves almost entirely around windows",
					"Recently, Windows has been criticized for their boxy and bland ui.",
				]}
			/>
			<Os
				name="Linux"
				items={[
					"Created by Linus Torvaldis, currently devloped by thousands of developers worldwide",
					"Free",
					"Widely used for security, servers, smart devices, internet of things",
					"Open source is actually disadvantageous for linux in terms of gaming",
					"Bare bones without any configuration, but highly customizable.",
				]}
			/>
			<Os
				name="MacOS"
				items={[
					"Created by Apple",
					"Free",
					"Mostly found on Apple devices, but technically available anywhere using software",
					"Apple products have hardware capable of playing games, but few games are ported to Mac systems",
					" Visual flair and ui design make MacOS appealing for casual tech users",
				]}
			/>
		</HStack>
	);
}
