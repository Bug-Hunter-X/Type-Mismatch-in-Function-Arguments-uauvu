# Type Mismatch in Function Arguments in TypeScript

This repository demonstrates a common TypeScript error involving type mismatches in function arguments.  The `bug.ts` file contains code with the error, while `bugSolution.ts` shows how to fix it.

**The Bug:**

The function `add` is defined to accept two numbers. However, in the call to `add`, a string ("1") is passed as the first argument.  This results in a compilation error because TypeScript's type system detects the type mismatch.

**The Solution:**

The solution involves ensuring that the arguments passed to the `add` function are indeed numbers.  This can be achieved through type assertion, type checking or input validation before calling the function.