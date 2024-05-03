function Zeige_Ergebnis (Wert: number) {
    basic.setLedColor(0x00ff00)
    _4digit.show(Wert)
    basic.showNumber(Wert)
    basic.pause(500)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    Würfeltyp += -1
    if (Würfeltyp < 0) {
        Würfeltyp = 0
    }
    Zeige_Würfel()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.setLedColor(0x0000ff)
    music.playTone(698, music.beat(BeatFraction.Whole))
    Dice = randint(1, WürfelMax[Würfeltyp])
    if (Würfeltyp == 0) {
        Dice += -1
    }
    Zeige_Ergebnis(Dice)
    basic.pause(1000)
    basic.setLedColor(0xff0000)
    Zeige_Würfel()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playTone(494, music.beat(BeatFraction.Whole))
    Würfeltyp += 1
    if (Würfeltyp >= Würfeltext.length) {
        Würfeltyp = Würfeltext.length - 1
    }
    Zeige_Würfel()
})
function Zeige_Würfel () {
    basic.showString("" + (Würfeltext[Würfeltyp]))
}
let Dice = 0
let _4digit: grove.TM1637 = null
let Würfeltext: string[] = []
let WürfelMax: number[] = []
let Würfeltyp = 0
let Ausgabe = ""
basic.pause(1000)
basic.setLedColor(0xff0000)
music.playMelody("C E G E G E C - ", 240)
Würfeltyp = 0
WürfelMax = [
4,
6,
8,
10,
12,
20,
100
]
Würfeltext = [
"A",
"B",
"C",
"D",
"E",
"F",
"G"
]
_4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4digit.clear()
Zeige_Würfel()
basic.forever(function () {
    basic.pause(randint(25, 55))
})
