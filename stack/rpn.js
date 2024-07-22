function rpn(arr){
    let stack =[]

    for(let value of arr){
        if(!isNaN(value)){
            stack.push(parseInt(value))
        }
        else{
            const b = stack.pop()
            const a = stack.pop()

            switch(value){
                case '+':
                    stack.push(a+b)
                    break;
                case '-':
                    stack.push(a-b)
                    break;
                case '*':
                    stack.push(a*b)
                    break;
                case '/':
                    stack.push(Math.floor(a/b))
                    break;
                default:
                    return 1
            }
        }
    }
    return stack.pop()
}

console.log(rpn(["4", "13", "5", "/", "+"]))