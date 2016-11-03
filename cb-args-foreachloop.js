function findWaldo(arr, found) {
  arr.forEach(function (elm, i){
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// Line 9~13 could be rewritten inline, like this:
    // findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
    //   console.log("Found Waldo at index " + index + "!");
    // });
