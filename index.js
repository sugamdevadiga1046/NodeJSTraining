function displayMessage(msg) {
    return new Promise((resolve,reject)=>{
        console.log(msg);
        resolve();
    });
}

displayMessage('Welcome to NodeJS!...').then(()=>{
    console.log('Promise has been Resolved');
})
.catch((error)=>{
    console.error(error);
})