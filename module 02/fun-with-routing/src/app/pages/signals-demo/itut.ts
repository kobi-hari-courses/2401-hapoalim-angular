export function itut<T>(value: T) {
    const res = () => value;

    res.set = (val: T) => value = val;

    return res;
}

export function mechushav<T>(func: () => T) {
    return func;
}