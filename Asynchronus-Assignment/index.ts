// Question # 1

// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.




    async function fetchGreeting(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve("Assalamu Alaikum, How are you doing!");
            }, 2000); // 2 second delay
        }); 
        }
    fetchGreeting().then((message) => {
        console.log(message);
    });


    // Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask () {
    console.log("Task started");

    setTimeout(() => {
        console.log("Task completed")
    }, 1000);
}
simulateTask();


// Question # 3
//Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.

async function fetchData (): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!")
        }, 1000);
    });
    fetchData().then((message) => {
        console.log(message);
    })
}


// Question # 4
//Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

function fetchwithError (): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
      const success = Math.random() > 0.5;
      if(success) {
        resolve("Data fetched successfully");
      }     else {
        reject("Data fetch failed!");
      }
        }, 1000);
    });
}
fetchwithError().then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.