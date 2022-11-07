radio.onReceivedString(function (receivedString) {
    if (receivedString == "beep!") {
        music.playMelody("- F - F - G - E ", 120)
    }
})
let accel = 0
radio.setGroup(1)
basic.forever(function () {
    accel = input.acceleration(Dimension.X)
    serial.writeNumber(accel)
    serial.writeLine("")
    basic.pause(100)
    if (accel > 500) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendString("beep!")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (accel < -500) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
