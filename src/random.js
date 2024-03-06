function pick(arr) {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
} 

export {pick};