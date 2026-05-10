let stack=[]


function push(data) {
    stack.push(data)
    
}
function pop(data) {
     return stack.pop()
    console.log("rem" , stack.pop());
    
    
}

stack.push(100)
stack.push(200)
stack.pop()

console.log(stack);
