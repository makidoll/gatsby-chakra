import { useToast } from "@chakra-ui/toast";
import { navigate } from "gatsby-link";
import * as React from "react";

function NotFound() {
	const toast = useToast();
	toast({
		title: "Page not found",
		status: "error",
		duration: 3000,
		isClosable: true,
	});
	navigate("/");
	return <></>;
}

export default NotFound;
