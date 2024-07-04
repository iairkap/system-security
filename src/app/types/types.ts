import { ChangeEvent } from "react";
export type Interest = {
  id: number;
  interest: string;
};

export type User = {
  id: number;
  name: string;
  lastName: string;
  profession: string;
  profilePicture: string;
  age: number;
  email: string;
  interests: Interest[];
};

export type FormData = {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
};

export type FormField = {
  id: string;
  name: keyof FormData;
  type: string;
  component: React.FC<InputProps | TextAreaProps>;
};

export type TextAreaProps = {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
};

export type InputProps = {
  id: string;
  name: string;
  type: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
};

export type HeaderProps = {
  name: string;
  lastName: string;
  profilePicture: string;
  profession: string;
};

export type AboutMe = {
  aboutMe: string;
};

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  styleButton: string;
};

export type SocialMedia = {
  id: number;
  name: string;
  url: string;
  icon: string;
};
