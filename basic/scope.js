/**
 * II.Scope in javascript 
 * Javascript have 3 type of scope 
 * Before ES6 javascript variables had only FUNCTION SCOPE and GLOBAL SCOPE
*/
// 1. block scope
// 2. function scope
// 3. global scope

let gl_a = 'global1';  // global scope
const gl_b = 'global2'; // global scope
const gl_c = 'global3'; // global scope
function funcScope(){
    const a = 1; // function scope
    let b = 2; // function scope
    var c = 3; // function scope

    console.log(gl_a);
    console.log(gl_b);
    console.log(gl_c);
    if(a) {
        console.log(a);
        console.log(b);
        console.log(c);
        
        // block scope
        const d = '4';
        let e = '5';
        var g = '6';
    }
    // console.log(d);
    // console.log(e);
    console.log(g);
};
funcScope();
