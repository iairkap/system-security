import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../hooks/useForm"; // Adjust the import path as necessary

describe("useForm hook", () => {
  const initialState = { name: "", email: "", message: "" };

  it("should initialize form with initial state", () => {
    const { result } = renderHook(() => useForm(initialState));
    expect(result.current.formData).toEqual(initialState);
  });

  it("should handle input changes", () => {
    const { result } = renderHook(() => useForm(initialState));
    const event = {
      target: { name: "name", value: "Iair Kaplun" },
    };

    act(() => {
      result.current.handleChange(event);
    });

    expect(result.current.formData.name).toBe("Iair Kaplun");
  });

  it("should set errors if validation fails", () => {
    const { result } = renderHook(() => useForm(initialState));
    const callback = jest.fn();

    act(() => {
      result.current.handleChange({
        target: { name: "email", value: "wrong-email" },
      });
      result.current.handleSubmit({ preventDefault: jest.fn() }, callback);
    });

    expect(callback).not.toHaveBeenCalled();
    expect(result.current.errors.email).not.toBe("");
  });

  // New tests
  it("should set errors if only email is provided but not name and message", () => {
    const { result } = renderHook(() => useForm(initialState));
    act(() => {
      result.current.handleChange({
        target: { name: "email", value: "test@test.com" },
      });
      result.current.handleSubmit({ preventDefault: jest.fn() }, jest.fn());
    });
    expect(result.current.errors.name).not.toBe("");
    expect(result.current.errors.message).not.toBe("");
  });

  it("should set errors if no fields are provided", () => {
    const { result } = renderHook(() => useForm(initialState));
    act(() => {
      result.current.handleSubmit({ preventDefault: jest.fn() }, jest.fn());
    });
    expect(result.current.errors.email).not.toBe("");
    expect(result.current.errors.name).not.toBe("");
    expect(result.current.errors.message).not.toBe("");
  });
});
