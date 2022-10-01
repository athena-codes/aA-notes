
// Pen POJO

const penPOJO = {
    bodyColor: 'clear',
    inkColor: 'blue',
    inkLevel: 75,
    type: 'ball-point',
    refillable: true,
     write: function (string) {
       for (let i = 0; i < string.length; i++) {
           pen.inkLevel -= 2
            if (pen.inkLevel <= 0) {
               console.log('Need to refill ink. ');
               pen.inkLevel = 0
               return;
           }
         }
         console.log(string)
         if (pen.inkLevel < 10) {
            console.log('WARNING: Need to refill ink. ');
         }
      },
    refillInk: function() {
        if (!pen.refillable) {
            console.log('This pen is not refillable. ');
            return;
        }
        console.log('Refilling Ink. '); {
            pen.inkLevel = 100
        }
    }
}

// console.log(penPOJO)


// POJO => Class

class Pen {
    constructor(bodyColor, inkColor, inkLevel, type, refillable) {
        this.bodyColor = bodyColor
        this.inkColor = inkColor
        this.inkLevel = inkLevel
        this.type = type
        this.refillable = refillable
  }
}

const pen = new Pen(
    'clear',
     'blue',
     75,
     'ball-point',
      true );

const fountainPen = new Pen(
     'black',
     'black',
     100,
     'fountain',
     true );

const feltPen = new Pen(
     'grey',
     'red',
     100,
     'ball-point',
     true );

console.log(pen instanceof Pen)
console.log(feltPen)
