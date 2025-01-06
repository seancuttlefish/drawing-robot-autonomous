function Left (degrees: number) {
    basic.showArrow(ArrowNames.West)
    minibit.rotatems(mbRobotDirection.Left, speed, degrees)
    basic.showNumber(ID)
}
function Forward (distance: number) {
    basic.showArrow(ArrowNames.North)
    minibit.goms(mbDirection.Forward, speed, distance)
    basic.showNumber(ID)
}
function Right (degrees: number) {
    basic.showArrow(ArrowNames.East)
    minibit.rotatems(mbRobotDirection.Right, speed, degrees)
    basic.showNumber(ID)
}
function Stop () {
    minibit.stop(mbStopMode.Brake)
    basic.showNumber(ID)
}
function Backward (distance: number) {
    basic.showArrow(ArrowNames.South)
    minibit.goms(mbDirection.Reverse, speed, distance)
    basic.showNumber(ID)
}
let distance = 0
let speed = 0
let ID = 0
ID = 1
speed = 70
basic.showNumber(ID)
basic.forever(function () {
    distance = minibit.sonar(mbPingUnit.Centimeters)
    if (distance > 100 || distance < 10) {
        if (randint(0, 1) == 0) {
            Left(200)
            minibit.setLedColor(0xff0000)
        } else {
            Right(200)
            minibit.setLedColor(0x18E600)
        }
    } else {
        Forward(200)
        minibit.setLedColor(0x0000FF)
    }
})
