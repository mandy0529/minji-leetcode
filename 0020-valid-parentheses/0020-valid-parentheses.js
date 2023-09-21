/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c === "(") {
            stack.push(")");
        } else if (c === "{") {
            stack.push("}");
        } else if (c === "[") {
            stack.push("]");
        } else {
            if (c !== stack.pop()) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};