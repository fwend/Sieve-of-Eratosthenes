function sieve(n) {
    const composite = Array(n);
    const limit = Math.sqrt(n);

    composite[0] = composite[1] = 1;

    for (let i = 2; i <= limit; i++) {
        if (!composite[i]) {
            for (let j = i * i; j < n; j += i) {
                composite[j] = 1;
            }
        }
    }
    return [...composite.keys()].filter(i => !composite[i]);
}