const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 Resolved...");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise2 Resolved...");
  }, 1500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise3 Resolved...");
  }, 2000);
});
/**
 * executes all promises return an array
 * if all resolved in same sequences if any rejectes returns
 * that one promise in catch and stop execution
 */
Promise.all([promise1, promise2, promise3])
  .then((response) => {
    console.log("all then " + response);
  })
  .catch((errors) => {
    console.log("all catch " + errors);
  });
/**
 * executes promieses ad return an array of object
 * { status: 'fulfilled', value: 33 } for fullfilled
 * { status: 'rejected', reason: Error: an error } for rejected
 * .catch never runs and only runs if there is an error in
 * response function body
 */
Promise.allSettled([promise1, promise2, promise3])
  .then((response) => {
    console.log("allSetteled " + JSON.stringify(response));
  })
  .catch((errors) => {
    console.log("allSetteled " + errors);
  });
/**
 * fastest promise executes resolve/reject and rest other remain pending
 */
Promise.race([promise1, promise2, promise3])
  .then((response) => {
    console.log("race then " + response);
  })
  .catch((errors) => {
    console.log("race catch " + errors);
  });
/**
 * fastest promise executes and fulfills with that response,
 * if all rejected that it rejectes with,
 * AggregateError: All promises were rejected
 */
Promise.any([promise1, promise2, promise3])
  .then((response) => {
    console.log("any " + response);
  })
  .catch((errors) => {
    console.log("any " + errors);
  });
