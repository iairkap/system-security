import { renderHook, act } from "@testing-library/react-hooks";
import useModal from "../hooks/useModal";

describe("useModal Hook", () => {
  it("should initialize with modal closed", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpen).toBe(false);
  });

  it("should toggle modal open state", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.toggleModal();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggleModal();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it("should close modal when onRequestClose is called", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.toggleModal();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.onRequestClose();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
