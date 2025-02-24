import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";

test("Test hook", () => {
	const { getByTestId } = render(<App />);
	const button = getByTestId("button");
	const counter = getByTestId("pressed");
	expect(counter).toHaveTextContent("The button has not been pressed!");
	button.click();
	waitFor(
		() => {
			expect(counter).toHaveTextContent("The button has been pressed!");
		},
		{ timeout: 100 }
	);
});
