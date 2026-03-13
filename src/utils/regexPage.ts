export const regexPage = (url: string): string | undefined => url.match(/[?&]page=(\d+)/)?.[1];

