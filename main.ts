input.onButtonPressed(Button.A, function () {
    lightsOn()
})
function lightsOn () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    while (true) {
        for (let index = 0; index <= 30; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
            if (index >= 15) {
                strip.setPixelColor(index % 15, neopixel.colors(NeoPixelColors.Red))
            }
            strip.show()
            basic.pause(100)
        }
    }
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
