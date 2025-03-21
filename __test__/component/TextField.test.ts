import { render, screen, fireEvent } from "@testing-library/react";
import TextField from "../../src/components/atom/TextField";

describe("TextField", () => {
  const placeholder = "Search Movie";
  const type = "text";
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(
      <TextField
        placeholder={placeholder}
        type={type}
        value=""
        onChange={mockOnChange}
      />
    );
  });

  test("renders correctly with placeholder text", () => {
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  test("types into input field", () => {
    const inputElement = screen.getByPlaceholderText(placeholder);
    fireEvent.change(inputElement, { target: { value: "Inception" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: "Inception" } })
    );
  });

  test("input type is correct", () => {
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toHaveAttribute("type", type);
  });

  test("input value is passed correctly", () => {
    // Render the input with a specific value
    const { rerender } = render(
      <TextField
        placeholder={placeholder}
        type={type}
        value="Some Value"
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toHaveValue("Some Value");

    // Simulate a change and verify that the mock function is called
    fireEvent.change(inputElement, { target: { value: "New Value" } });
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: "New Value" } })
    );
  });
});
