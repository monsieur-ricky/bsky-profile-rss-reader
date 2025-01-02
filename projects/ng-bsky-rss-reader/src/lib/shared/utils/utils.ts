export const formatDescription = (text: string): string => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const cssClass = `text-xs font-bold underline underline-offset-2 transition-all ease-in-out duration-300`;

  return text
    .replace(
      urlRegex,
      `<a href="$1" target="_blank" class="${cssClass}">$1</a>`
    )
    .replace(/\n/g, '<br />');
};

export const formatHandle = (text: string | undefined): string | undefined => {
  if (!text) {
    return;
  }

  const regex = /^@([\w.]+)\s*-\s*(.+)$/;
  const match = regex.exec(text);

  if (!match) {
    return text;
  }

  const [, handle, name] = match;

  return `${name.trim()} (@${handle})`;
};

export const wait = (ms: number, abortSignal?: AbortSignal): Promise<void> => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(resolve, ms);

    if (abortSignal) {
      abortSignal.addEventListener(
        'abort',
        () => {
          clearTimeout(timeout);
          reject(new Error('Aborted'));
        },
        { once: true }
      );
    }
  });
};
