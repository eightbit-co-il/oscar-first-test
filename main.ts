input.onButtonPressed(Button.A, function () {
    turtleBit.Motor(LR.LeftSide, MD.Forward, 80)
    turtleBit.Led(LR.RightSide, COLOR.red)
    basic.pause(1000)
    turtleBit.Led(LR.RightSide, COLOR.green)
    basic.pause(1000)
    turtleBit.Led(LR.RightSide, COLOR.green)
    basic.pause(1000)
    turtleBit.Motor(LR.LeftSide, MD.Forward, 0)
    turtleBit.OFFLed()
})
input.onButtonPressed(Button.B, function () {
    turtleBit.Motor(LR.RightSide, MD.Forward, 80)
    turtleBit.Led(LR.LeftSide, COLOR.red)
    basic.pause(1000)
    turtleBit.Led(LR.LeftSide, COLOR.green)
    basic.pause(1000)
    turtleBit.Led(LR.LeftSide, COLOR.green)
    basic.pause(1000)
    turtleBit.Motor(LR.RightSide, MD.Forward, 0)
    turtleBit.OFFLed()
})
basic.forever(function () {
    basic.showString("*** OsCar ***")
})
