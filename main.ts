input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    ruido = input.soundLevel()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(ruido)
})
let ruido = 0
ruido = 0
