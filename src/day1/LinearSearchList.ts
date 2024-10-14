export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let index = 0; index < haystack.length; index++) {
        if (needle === haystack[index]) {
            return true;
        }
    }
    return false;
}
