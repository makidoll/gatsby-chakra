import { Button } from "@chakra-ui/button";
import {
	FormControl,
	FormHelperText,
	FormLabel,
} from "@chakra-ui/form-control";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Container, Heading, HStack, VStack } from "@chakra-ui/layout";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
} from "@chakra-ui/modal";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { Context } from "../components/context-provider";
import frog from "../images/frog.png";

function Contact() {
	const context = React.useContext(Context);

	const [alertText, setAlertText] = React.useState("");
	const closeAlert = () => setAlertText("");
	const cancelRef = React.useRef();

	const [helped, setHelped] = React.useState(false);

	const onSubmit = async (values, actions) => {
		const name = values.name.toLowerCase();
		if (!context.names.includes(name)) {
			context.setNames([...context.names, name]);
		}

		setAlertText(JSON.stringify(values, null, 4));
		setHelped(true);
	};

	const onHelpAgain = () => {
		setHelped(false);
	};

	return (
		<Container pt="8">
			<AlertDialog
				isOpen={alertText != ""}
				leastDestructiveRef={cancelRef}
				onClose={closeAlert}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Thank you!
						</AlertDialogHeader>
						<AlertDialogBody>{alertText}</AlertDialogBody>
						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={closeAlert}>
								We're so happy for you
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
			<Heading size="2xl" mb="8" textAlign="center">
				{helped ? "Yay, we all helped!" : "You're helping..."}
			</Heading>
			{helped ? (
				<Box display="flex" alignItems="center" flexDirection="column">
					<Image borderRadius="8" src={frog}></Image>
					<Button mt="4" onClick={onHelpAgain}>
						Help again!
					</Button>
				</Box>
			) : (
				<Formik initialValues={{}} onSubmit={onSubmit}>
					{props => (
						<Form>
							<VStack spacing="8">
								<Field name="name">
									{({ field, form }) => (
										<FormControl
											isRequired
											isDisabled={props.isSubmitting}
										>
											<FormLabel>Name</FormLabel>
											<Input
												{...field}
												type="text"
												placeholder="Fairy"
											></Input>
											<FormHelperText>
												Otherwise we don't know what to
												call you...
											</FormHelperText>
										</FormControl>
									)}
								</Field>
								<Field name="isCute">
									{({ field, form }) => (
										<FormControl
											as="fieldset"
											isRequired
											isDisabled={props.isSubmitting}
										>
											<FormLabel>
												Important question
											</FormLabel>
											<RadioGroup>
												<HStack>
													<Radio
														{...field}
														value="cute"
													>
														Cute
													</Radio>
													<Radio
														{...field}
														value="not-cute"
													>
														Not cute
													</Radio>
												</HStack>
											</RadioGroup>
											<FormHelperText>
												Really really important
											</FormHelperText>
										</FormControl>
									)}
								</Field>
								<Button
									isLoading={props.isSubmitting}
									type="submit"
								>
									Ok, help
								</Button>
							</VStack>
						</Form>
					)}
				</Formik>
			)}
		</Container>
	);
}

export default Contact;
