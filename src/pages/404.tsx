import { useToast } from "@chakra-ui/toast";
import { navigate } from "gatsby-link";
import * as React from "react";
import { useLocation } from "@reach/router";

function NotFound() {
	const location = useLocation();
	const toast = useToast();
	toast({
		title: "Page not found",
		description: location.pathname,
		status: "error",
		duration: 3000,
		isClosable: true,
	});
	navigate("/");
	return <></>;
}

export default NotFound;
