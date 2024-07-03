export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
};

export const validateName = (name: string): boolean => {
  const re = /^[a-zA-Z\s]{2,}$/;
  return re.test(name);
};

export const validateMessage = (message: string): boolean => {
  return message.length > 0;
};
