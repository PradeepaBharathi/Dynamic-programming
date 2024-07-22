function dailyTemperatures(T) {
    const stack = [];

    for (let i = 0; i < T.length; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            const index = stack.pop();
            T[index] = i - index;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const index = stack.pop();
        T[index] = 0;
    }

    return T;
}


const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));