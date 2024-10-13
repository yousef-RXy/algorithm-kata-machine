export default function bs_list(haystack: number[], needle: number): boolean {
    let first = 0;
    let last = haystack.length;

    if (haystack[first] === needle) return true;
    if (haystack.length === 1) return false;
    if (haystack[last] === needle) return true;

    while (last !== first) {
        const mid = Math.floor((last + first) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] > needle) {
            last = mid;
        } else {
            first = mid + 1;
        }
    }

    return false;
}
