export function on (elem, type, listener, useCapture = false) {
    elem.addEventListener(type, listener, useCapture)
}

export function off (elem, type, listener, useCapture = false) {
    elem.removeEventListener(type, listener, useCapture)
}
