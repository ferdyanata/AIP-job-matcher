export function truncateString(string) {
    if (string && string.length > 80)
        return string.substring(0, 80) + '...';
    else
        return string;
};