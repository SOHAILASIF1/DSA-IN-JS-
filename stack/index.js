let stack=[]


function push(data) {
    stack.push(data)
    
}
function pop(data) {
     return stack.pop()
    console.log("rem" , stack.pop());
    
    
}

function top() {
    return stack[stack.length-1]
    
}
function size(params) {
    return stack.length
}
function isEmpty(params) {
    return stack.length==0
    
}

function behaviorOfStack(){
    while (!stack!=isEmpty) {
        console.log(top());
        
        stack.pop()
    }

}


stack.push(100)
stack.push(200)
stack.push(110)


console.log(behaviorOfStack());

