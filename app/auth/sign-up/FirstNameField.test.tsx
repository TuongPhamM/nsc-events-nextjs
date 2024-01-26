import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FirstNameField from "./FirstNameField";
describe("FirstNameField", () => {
  it("renders the input field", () => {
    render(
      <FirstNameField
        handleFirstNameChange={() => {}}
        handleFirstNameError={() => {}}
      />
    );
    expect(screen.getByLabelText(/first name input/i)).toBeInTheDocument();
  });

  it("calls handleFirstNameChange on input change", () => {
    const mockChangeHandler = jest.fn();
    render(
      <FirstNameField
        handleFirstNameChange={mockChangeHandler}
        handleFirstNameError={() => {}}
      />
    );

    fireEvent.change(screen.getByLabelText(/first name input/i), {
      target: { value: "John" },
    });
    expect(mockChangeHandler).toHaveBeenCalledWith("John");
  });

  it("displays error message when input is too short", () => {
    render(
      <FirstNameField
        handleFirstNameChange={() => {}}
        handleFirstNameError={() => {}}
      />
    );

    const input = screen.getByLabelText(/first name input/i);
    fireEvent.change(input, { target: { value: "J" } });
    fireEvent.blur(input);

    expect(
      screen.getByText(/must be at least 2 characters/i)
    ).toBeInTheDocument();
  });

  it("does not display an error message for valid input", () => {
    render(
      <FirstNameField
        handleFirstNameChange={() => {}}
        handleFirstNameError={() => {}}
      />
    );

    const input = screen.getByLabelText(/first name input/i);
    fireEvent.change(input, { target: { value: "John" } });
    fireEvent.blur(input);

    expect(
      screen.queryByText(/must be at least 2 characters/i)
    ).not.toBeInTheDocument();
  });

  it("calls handleFirstNameError with true for invalid input", () => {
    const mockErrorHandler = jest.fn();
    render(
      <FirstNameField
        handleFirstNameChange={() => {}}
        handleFirstNameError={mockErrorHandler}
      />
    );

    const input = screen.getByLabelText(/first name input/i);
    fireEvent.change(input, { target: { value: "J" } });
    fireEvent.blur(input);

    expect(mockErrorHandler).toHaveBeenCalledWith(true);
  });

  it("calls handleFirstNameError with false for valid input", () => {
    const mockErrorHandler = jest.fn();
    render(
      <FirstNameField
        handleFirstNameChange={() => {}}
        handleFirstNameError={mockErrorHandler}
      />
    );

    const input = screen.getByLabelText(/first name input/i);
    fireEvent.change(input, { target: { value: "John" } });
    fireEvent.blur(input);

    expect(mockErrorHandler).toHaveBeenCalledWith(false);
  });
});
