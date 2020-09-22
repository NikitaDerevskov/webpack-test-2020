async function start() {
    await Promise.resolve('just test')
}

start().then(() => console.log('async await is working'))

const unusedVar = 42

import('lodash').then( _=> {
    console.log('Lodash', _.random(0, 42, true))
})
