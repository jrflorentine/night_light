input.onButtonPressed(Button.A, function () {
    lightsOn()
})
function lightsOn () {
    while (true) {
        for (let index = 0; index <= 30; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
            if (index < 15) {
                strip.setPixelColor(index % 15 + 15, neopixel.colors(NeoPixelColors.Blue))
            } else {
                strip.setPixelColor(index % 15 + 0, neopixel.colors(NeoPixelColors.Blue))
            }
            strip.show()
            basic.pause(100)
        }
    }
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
