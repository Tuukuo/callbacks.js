// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.
const promise = new Promise(function(resolve) {
    setTimeout(function() {
     const greeting = "Hello Tuukuo";
     resolve(greeting);
     console.log({greeting})
    }, 5000);
   });
   //You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given
   // a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
   async function getUserData(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`User data for ID ${id}`);
      }, 1000);
    });
  }
  const userIds = [1, 2, 3, 4, 5,6,7,8];
  async function fetchAndLogUserData(userIds) {
    const results = await userIds.reduce(async (previousPromise, id) => {
      await previousPromise;
      const userData = await getUserData(id);
           console.log(userData);
      return getUserData(id + 1);
    }, Promise.resolve());
    console.log('All user data has been logged.');
  }
fetchAndLogUserData(userIds);
//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if
//there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom
// error message if there's an error.
const result = true;
const ourPromise = new Promise((resolve, reject)=>{
    if(result){
        resolve ("How to work from home");
    }
    else{
       reject("Task not successful")
    }
})
ourPromise.then((response)=>{
    console.log({response});
    console.log("Task successful");
})
.catch((error)=>{
    console.log({error});
    console.log("Task is not successful");
})
console.log({ourPromise});
async function performTask(){
    try{
        console.log("Task successful");
        await ourPromise;
    }
    catch{
        console.log("Task has not been successful");
    }
}
performTask();
//Retry Logic:
// Scenario:
// Write a function unstableTask that:
// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:
// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.
async function executeWithRetry(taskName, retries, failureProbability) {
    let attempt = 0;
    while (attempt < retries) {
        try {
            await unstableTask(taskName, failureProbability);
            console.log(`${taskName} succeeded after ${attempt + 1} attempts.`);
            return;
        } catch (error) {
            console.error(`${taskName} failed on attempt ${attempt + 1}.`);
            attempt++;
        }
    }
    console.error(`${taskName} failed after ${retries} attempts.`);
}
executeWithRetry("SampleTask", 3, 0.5);