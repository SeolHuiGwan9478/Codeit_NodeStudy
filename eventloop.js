let num = 1;

setTimeout(() => {
num = 2;
}, 1000);

num = 3;

console.log(num);

setTimeout(() => {
num = 5;
}, 2000);