export const xSmall = 300;
export const small = 500;
export const standard = 820;

export const between = (first, second) =>
  `${first != null ? `${first}px` : '_'}-${
    second != null ? `${second}px` : '_'
  }`;
