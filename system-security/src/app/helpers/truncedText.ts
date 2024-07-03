export interface TruncationOptions {
  maxLength: number;
}

export const truncateText = (
  text: string,
  options: TruncationOptions
): string => {
  const { maxLength } = options;
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
