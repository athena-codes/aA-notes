function foo() {
    console.log("a");
    bar();         // 2. bar is on top of stack, prints "ab"
    console.log("e");  // 6. foo on top after all stacks within are popped, returns ("abcde") and program is done
}

function bar() {
    console.log("b");
    baz();     // 3. baz is on top of stack, printsw "abc"
    console.log("d");  // 5. adds d ("abcd") now bar is on top, gets popped off stack
}

function baz() {
    console.log("c"); // 4. baz gets popped off of stack after c is added, bar now on top
}

console.log(foo());  // 1. call foo function, on top of stack (functions within get executed)
  // => prints abcde
