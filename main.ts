input.onButtonPressed(Button.A, function () {
    if (je_žárovka_v_seznamu() == -1) {
        led.unplot(x, y)
    }
    x += 1
    if (x == 5) {
        if (y == 4) {
            x = 0
            y = 0
        } else {
            x = 0
            y += 1
        }
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    rozsvícené_x = []
    rozsvícené_y = []
    x = -1
    y = 0
})
input.onButtonPressed(Button.B, function () {
    index = je_žárovka_v_seznamu()
    if (index == -1) {
        rozsvícené_x.push(x)
        rozsvícené_y.push(y)
    } else {
        rozsvícené_x[index] = -1
        rozsvícené_y[index] = -1
    }
})
function je_žárovka_v_seznamu () {
    index = 0
    for (let aktuální_x of rozsvícené_x) {
        if (aktuální_x == x) {
            if (rozsvícené_y[index] == y) {
                return index
            }
        }
        index += 1
    }
    return -1
}
let index = 0
let y = 0
let rozsvícené_y: number[] = []
let rozsvícené_x: number[] = []
let x = 0
x = -1
rozsvícené_x = []
rozsvícené_y = []
