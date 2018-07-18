/*
for ([initialization]; [condition]; [iteration]) {
  [loopBody]
  
  - separated out by semi colons
  - triple === for an equality check
  
  - array.push is used here to add / lilnk to the array
}                      */ 

function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {
      array.push("I am 1 strange loop.");
    } 
    else {
      array.push(`I am ${i} strange loops.`);
    } 
  }
}

/* while ([condition]) {
  [loopBody]
}                          */


function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done";
}

   