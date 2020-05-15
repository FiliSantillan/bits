// promise.allSettled

const p1 = new Promise((resolve, reject) => resolve("✅"));
const p2 = new Promise((resolve, reject) => reject("❌"));
const p3 = new Promise((resolve, reject) => resolve("✅"));

Promise.allSettled([p1, p2, p3])
    .then(response => console.log(response))
    .catch(error => console.log(error));

/*

0: {status: "fulfilled", value: "✅"}
1: {status: "rejected", reason: "❌"}
2: {status: "fulfilled", value: "✅"}

*/

const promises = [ 
	fetch("https://url.com"), 
	fetch("https://otherUrl.com") 
];

Promise.allSettled(promises)
	.then(response => 
		response.filter(p => p.status === "reject")
						.map(p => p.reason)
	)
	.catch(error => console.log(error));