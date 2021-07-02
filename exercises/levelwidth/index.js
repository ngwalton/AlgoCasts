// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counters = [0];
    const sep = 's';
    const nodes = [root, sep];

    while (nodes.length > 1) {
        const node = nodes.shift();

        if (node === sep) {
            counters.push(0);
            nodes.push(sep);
        } else {
            nodes.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;
}

module.exports = levelWidth;
