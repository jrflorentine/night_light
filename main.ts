function lightsOn (bool: boolean) {
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
    return
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    while (input.lightLevel() < 50) {
        lightsOn(true)
        servos.P1.run(5)
    }
    while (input.buttonIsPressed(Button.A)) {
        servos.P1.run(5)
        lightsOn(true)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    servos.P1.stop()
})
