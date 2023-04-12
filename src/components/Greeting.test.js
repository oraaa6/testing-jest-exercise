import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

describe("Greeting component", () => {
  test("renders Hello World", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you?' if button is not clicked", () => {
    render(<Greeting />);
    const textElement = screen.getByText("good to see you?", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if button is clicked", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const textElement = screen.getByText("Changed!");
    expect(textElement).toBeInTheDocument();
  });

  test("should not render 'good to see you?' if button is clicked", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const textElement = screen.queryByText("good to see you?", {
      exact: false,
    });
    expect(textElement).toBeNull();
  });
});
