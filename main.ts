input.onGesture(Gesture.LogoUp, function () {
	
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        狀態 = 1
    }
    if (receivedNumber == 2) {
        狀態 = 2
    }
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
function 循線 () {
    // 白線上
    // 停下來
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.stop(BBStopMode.Brake)
        // 開始計時
        開始時間 = input.runningTime()
        // 在黑線上
        while (!((bitbot.readLine(BBLineSensor.Left) == 1 || bitbot.readLine(BBLineSensor.Right) == 1) && input.runningTime() - 開始時間 <= 400 || input.runningTime() - 開始時間 > 400)) {
            bitbot.rotate(BBRobotDirection.Right, 30)
        }
        bitbot.stop(BBStopMode.Brake)
        結束時間 = input.runningTime() - 開始時間
        if (input.runningTime() - 開始時間 <= 400) {
            // 在黑線上
            while (!(bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1)) {
                bitbot.rotate(BBRobotDirection.Right, 30)
            }
        } else {
            // 在黑線上
            while (!(bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1)) {
                bitbot.rotate(BBRobotDirection.Left, 30)
            }
        }
    }
    // 右邊
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotate(BBRobotDirection.Left, 15)
    }
    // 左邊
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 15)
    }
    // 黑線上
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, 100)
    }
}
input.onGesture(Gesture.Shake, function () {
	
})
input.onGesture(Gesture.ScreenUp, function () {
	
})
function 距離循線 () {
    while (bitbot.sonar(BBPingUnit.Centimeters) > 10) {
        循線()
    }
    bitbot.stop(BBStopMode.Brake)
}
input.onGesture(Gesture.LogoDown, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
radio.onReceivedString(function (receivedString) {
	
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
	
})
radio.onReceivedValue(function (name, value) {
    if ("a" == name) {
        basic.showNumber(value)
    }
})
let 結束時間 = 0
let 開始時間 = 0
let 狀態 = 0
radio.setGroup(3)
let 頁面 = 1
basic.showNumber(頁面)
狀態 = 2
basic.forever(function () {
    while (狀態 == 1) {
        循線()
    }
    bitbot.stop(BBStopMode.Brake)
})
