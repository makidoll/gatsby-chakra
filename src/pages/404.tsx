import { useToast } from "@chakra-ui/toast";
import { navigate, withPrefix } from "gatsby-link";
import * as React from "react";
import { useLocation } from "@reach/router";

function NotFound() {
	React.useEffect(() => {
		const location = useLocation();
		const toast = useToast();
		toast({
			title: "Page not found",
			description: location.pathname,
			status: "error",
			duration: 3000,
			isClosable: true,
		});
		navigate(withPrefix("/"));
	});
	return <></>;
}

export default NotFound;
