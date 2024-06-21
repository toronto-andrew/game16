function function1() {
    // Simulate a synchronous operation
    return new Promise((resolve) => {
        console.log("function1 complete");
        resolve("result1");
    });
}

function function2() {
    // Simulate a synchronous operation
    return new Promise((resolve) => {
        console.log("function2 complete");
        resolve("result2");
    });
}

function function3() {
    // Simulate a synchronous operation
    return new Promise((resolve) => {
        console.log("function3 complete");
        resolve("result3");
    });
}

// Running the functions concurrently using Promise.all
async function runConcurrently() {
    try {
        const [result1, result2, result3] = await Promise.all([function1(), function2(), function3()]);
        console.log("All functions complete");
        console.log(result1); // "result1"
        console.log(result2); // "result2"
        console.log(result3); // "result3"
        const [result4] = await Promise.all([function1()]);
        console.log(result1); // "result1"
        const [result5] = await Promise.all([function2()]);
        console.log(result5); // "result1"
        const [result6] = await Promise.all([function3()]);
        console.log(result6); // "result3"                
    } catch (error) {
        console.error("Error running functions concurrently:", error);
    }
}

runConcurrently();
