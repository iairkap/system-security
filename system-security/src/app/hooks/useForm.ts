"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../types/types";
import {
  validateEmail,
  validateName,
  validateMessage,
} from "../helpers/validation";

export interface UseFormReturn {
  formData: FormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, callback: () => void) => void;
  errors: { [key: string]: string };
}

const useForm = (initialState: FormData): UseFormReturn => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    callback: () => void
  ): void => {
    e.preventDefault();

    const newErrors = {
      name: validateName(formData.name)
        ? ""
        : "Por favor ingrese un nombre válido",
      email: validateEmail(formData.email)
        ? ""
        : "Por favor ingrese un email válido",
      message: validateMessage(formData.message)
        ? ""
        : "Por favor ingrese un mensaje",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== "")) {
      callback();
      setFormData(initialState);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
