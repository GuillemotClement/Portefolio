import { htmlToText } from "html-to-text";

export const parseContent = (content: string): string => {
  return htmlToText(content, {
    wordwrap: false,
    selectors: [{ selector: "a", options: { ignoreHref: true } }],
  }).trim();
};
