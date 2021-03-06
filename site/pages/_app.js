import "@fontsource/major-mono-display";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";

import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "../src/theme/index";
import "../src/theme/styles.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme}>
			<title>Linux Sensei</title>
			<style global jsx>
				{`
					html {
						scroll-behavior: smooth;
					}
				`}
			</style>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
