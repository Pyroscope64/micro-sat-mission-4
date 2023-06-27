radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 2) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 3) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 4) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
    } else if (receivedNumber == 5) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
})
radio.setGroup(10)
radio.setTransmitPower(0)
basic.showNumber(5)
loops.everyInterval(1000, function () {
    radio.sendNumber(5)
})
