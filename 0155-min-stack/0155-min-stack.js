var MinStack = function() {
    this.stack = []
    this.min =[] 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length===0){
        this.min.push(val)
    }else{
        let minimum = Math.min(val,this.min[this.min.length-1]);
        this.min.push(minimum)
    }
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};

