async function start() {
    await Promise.resolve('just test')
}

start().then(() => console.log('async await is working'))

const unusedVar = 42
