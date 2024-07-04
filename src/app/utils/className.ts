const getClassName = (
  styles: { [key: string]: string },
  component: "input" | "textArea",
  error?: boolean
) => {
  if (component === "input") {
    return error ? styles.inputError : styles.input;
  } else if (component === "textArea") {
    return error ? styles.textAreaError : styles.textArea;
  }
};

export default getClassName;
