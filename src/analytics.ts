import * as $ from 'jquery'

function createAnalytics(): object {
    let counter : number = 0
    let isDestroyed : boolean = false
    const listener = (): number => counter++;
    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
        },
        getClicks() : number|string {
            if (isDestroyed) {
                return `Analytics is destroyed = ${counter}`
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics()