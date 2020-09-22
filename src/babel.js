async function start() {
    await Promise.resolve('just test')
}

start().then(x => console.log('async await is working'))
