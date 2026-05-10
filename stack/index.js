let stack=[]


function push(data) {
    stack.push(data)
    
}
function pop(data) {
    stack.pop()
    console.log("rem" , stack.removed);
    
    
}

console.log(stack);
stack.push(100)
stack.push(200)
stack.pop()
