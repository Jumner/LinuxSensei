import Nav from "../src/components/Nav";
import Home1 from "../src/components/home";
import Footer from "../src/components/Footer";
import Section from "../src/components/Section";
import { Flex } from "@chakra-ui/layout";

import GraphicalInstall from "./img/GraphicalInstall.png";
import hostname from "./img/hostname.png";
import root from "./img/root.png";
import users from "./img/users.png";
import partition from "./img/partition.png";
import partition2 from "./img/partition2.png";
import media from "./img/media.png";
import mirror from "./img/mirror.png";
import proxy from "./img/proxy.png";
import popularity from "./img/popularity.png";
import software from "./img/software.png";
import grub from "./img/grub.png";

export default function Home() {
	return (
		<Flex justify="space-between" direction="column">
			<Nav />
			<Home1 />
			<Section heading="Obtaining a Bootable Usb" img={GraphicalInstall}>
				Obtain a bootable usb with a linux debian installer on it. Once
				inserting it in the computer, the installer menu will start up and you
				can select your method of installation.
			</Section>
			<Section heading="Select Graphical Install" img={hostname}>
				After clicking “graphical install”, you will be brought to a page where
				you can select your desired language, your location, and keyboard type.
				You’ll then need to enter the hostname of the system. The purpose of
				this is so that your system can be uniquely identified over a network.
			</Section>
			<Section heading="Domain Name">
				You may then be prompted to enter a domain name. It’s perfectly fine to
				leave this blank and move on.
			</Section>
			<Section heading="Root Account Creation" img={root}>
				The next step of the process is to set up a root account. Essentially,
				this is an account with full administrative privileges, and access to
				all commands and files on the system. It is important that you have
				access to this account when you may need to use these privileges, so you
				should write down the username and password of the root account and keep
				it somewhere safe.
			</Section>
			<Section heading="User Account Creation & Time Zone" img={users}>
				Afterwards, a prompt for the user’s real name and chosen password will
				be displayed. Immediately after, a username. Similar to the root
				account, it is essential to keep this information written somewhere
				where it can be referred to if forgotten. This is to ensure that no
				progress or time is lost by forgetting something. Note: Adding uppercase
				letters to the username will halt your progress, lowercase letters only.
				Enter your time zone next.
			</Section>
			<Section heading="Partioning" img={partition}>
				you will be prompted to partition a disk. This step is done to designate
				a specific space on a disk for your install to be located. If you are
				unaware of how to partition a disk, the installer offers a guide. This
				will outline the process and make recommendations for how to partition.
			</Section>
			<Section heading="Partioning Scheme" img={partition2}>
				Debian offers different schemes for partitioning, where you are able to
				separate things into multiple different disks. For beginners, we
				recommend that everything stay on the same disk for a simpler setup, but
				this isn’t completely necessary. After this, you can continue and skip
				past all of the extra customization options for partitioning, and
				finally hit confirm when the installer asks permission to complete the
				partitioning.
			</Section>
			<Section heading="Additional Installation" img={media}>
				After, you will be prompted to install anything else, but it’s best to
				save customization for later, and there is nothing else to install, so
				this process can be skipped.
			</Section>
			<Section heading="Debian Archive" img={mirror}>
				Time to select the Debian Archive Country and Mirror. These consist of
				your country and the suggested domain for it. These decide where debian
				is installed from. After choosing the country, it is best to select the
				recommended archive mirror, for Canada, this was deb.debian.org.
			</Section>
			<Section heading="HTTP Proxy" img={proxy}>
				Afterwards, there is the option to enter an HTTP proxy, an external
				connection to install through. This is a middleman that can be helpful
				in bypassing any restrictions that may come up depending on the network.
				For new users without any restrictions, this can be left blank
			</Section>
			<Section heading="Popularity Contest" img={popularity}>
				Next is what’s called the Popularity Contest. This is no social event,
				just an ask if your data can be used for developers to better the
				experience. This decision will not impact the experience at all, so it
				is all up to the user.
			</Section>
			<Section heading="Additional Software" img={software}>
				Approaching the end, there is a checklist with names of software
				available to install. A few will be already selected, and these are
				basics. Everything will run perfectly fine with the default selections,
				and the other options are just different versions of file managers,
				desktop environments and other components. It is recommended to just
				continue with the already selected elements.
			</Section>
			<Section heading="Grub Boot Loader" img={grub}>
				Asking to install the GRUB boot loader. This is a must, as this is what
				actually starts the OS. Once again, it will ask for a device to install
				it on, and there will be a drive selected on default. It is recommended
				that you choose the disk that has your previous operating system on it.
				This is so you dont have to change the boot device in your bios later.
				After a final installation and some loading, you will be prompted to log
				in with the password for the user you created earlier and you’re done!
				Congratulations! You installed Debian!
			</Section>
			<Footer />
		</Flex>
	);
}
