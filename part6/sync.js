// Sync
/*IGNORE THIS CODE*/
const preparing = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
/*IGNORE THIS CODE*/



// user code
console.log("Asking Dosa...");
console.log("Dosai takes 10mins preparation");
console.log("Waiting 10 mins....");
await preparing(5000);
console.log("Serving Dosai to Customer");
console.log("Asking Idly...");
await preparing(500);
console.log("Serving Idly to Customer");