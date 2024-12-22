import { vectorSize } from ".";

export function unitVector(x: number, y: number) {
    const magnitude = vectorSize(x, y);
    return { x: x / magnitude, y: y / magnitude };
}
