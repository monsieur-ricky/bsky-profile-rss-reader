export const formatDescription = (text: string): string => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const cssClass = `font-bold underline underline-offset-2 transition-all ease-in-out duration-300`;

  return text
    .replace(
      urlRegex,
      `<a href="$1" target="_blank" class="${cssClass}">$1</a>`
    )
    .replace(/\n/g, '<br />');
};

export const removeHandleFromProfile = (text: string): string =>
  text.replace(/@([^-]+)-/g, '');
