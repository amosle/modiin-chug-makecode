radio.onReceivedString(function (receivedString) {
    if (receivedString == "beep!") {
        music.playTone(262, music.beat(BeatFraction.Breve))
    }
})
radio.setGroup(1)
radio.sendString("beep!")
