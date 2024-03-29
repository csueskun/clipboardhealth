# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. Variable **candidate** value is set to **TRIVIAL_PARTITION_KEY** at the beginning to eventually save an **else** block.
2. **if**s for **event** exists and **event.partitionKey** exists were combined.
3. The candidate partition key creation is moved to an **else** block called when **event** exists but **event.partitionKey** does not.
4. Checking for whether **candidate** is **string** type is moved outside the if statement since **candidate** always exists.