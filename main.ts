let Distance = 0
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.MicroSeconds
    )
    basic.showString("" + Math.round(Distance / (58 * (100 / 100))) + "cm")
    basic.pause(1000)
})
