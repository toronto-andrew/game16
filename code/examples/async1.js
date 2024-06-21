// Simulate an asynchronous operation with a Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

// Use async and await to handle the asynchronous operation
async function getData() {
    console.log("Fetching data...");
    let data = await fetchData();
    console.log(data); // "Data fetched"
    return data;
}

// Call the async function
getData();
