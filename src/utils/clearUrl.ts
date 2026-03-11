export function clearUrl(url: string): string {
	if (!url) return '';

	return url?.split('/')?.pop() || "";
}
