const prompt = require('prompt-sync')({sigint: true});
const { group } = require('console');


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArr) {
        this._fieldArr = fieldArr;
        this._indexA = 0;
        this._indexB = 0;
    }

    print() {
        this._fieldArr.forEach(line => {
            console.log(line.join(' '))
        })
    }

    setCharacter(userInput) {
        const input = userInput.toString().replace(/\s+/g, '').trim();

        const destinationA = this._fieldArr.findIndex(e => e.includes(hat));
        const destinationB = this._fieldArr[destinationA].findIndex(e => e == hat);


        if(input === 'u') {
            if(this._indexA == 0){
                console.log('going out of bounds, already at top')
            }else {
                this._indexA -= 1;
                // this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                // this.print();

                if(this._indexA == destinationA && this._indexB == destinationB) {
                    this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                    this.print();
                    console.log('Hat found!');
                    process.exit();
                }else if(this._fieldArr[this._indexA][this._indexB] == hole) {
                    console.log('fell into a hole! GAME OVER :(')
                    process.exit();
                }else {
                    this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                    this.print();
                    process.stdout.write("Where next? \n >>>")
                }
            }
        }else if(input === 'd') {
            if(this._indexA === 2) {
                console.log('going out of bounds, already at bottom')
            }else {
                this._indexA += 1;
                // this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                // this.print();

                if(this._indexA == destinationA && this._indexB == destinationB) {
                    this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                    this.print();
                    console.log('Hat found!');
                    process.exit();
                }else if(this._fieldArr[this._indexA][this._indexB] == hole) {
                    console.log('fell into a hole! GAME OVER :(')
                    process.exit();
                }else {
                    this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                    this.print();
                    process.stdout.write("Where next? \n >>>")
                }
            }
        }else if(input === 'l'){
            if(this._indexB === 0) {
                console.log('already at beginning of line');
            }else {
                this._indexB -= 1;
                // this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                // this.print();

                if(this._indexA == destinationA && this._indexB == destinationB) {
                    this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                    this.print();
                    console.log('Hat found!');
                    process.exit();
                }else if(this._fieldArr[this._indexA][this._indexB] == hole) {
                    console.log('fell into a hole! GAME OVER :(')
                    process.exit();
                }else {
                    this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                    this.print();
                    process.stdout.write("Where next? \n >>>")
                }
            }
        }else if(input === 'r') {
            if(this._indexB === 2) {
                console.log('already at end of line')
            }else {
                this._indexB += 1;
                // this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                // this.print();

                if(this._indexA == destinationA && this._indexB == destinationB) {
                    this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                    this.print();
                    console.log('Hat found!');
                    process.exit();
                }else if(this._fieldArr[this._indexA][this._indexB] == hole) {
                    console.log('fell into a hole! GAME OVER :(')
                    process.exit();
                }else {
                    this._fieldArr[this._indexA][this._indexB] = pathCharacter;
                    this.print();
                    process.stdout.write("Where next? \n >>>")
                }
            }
        }
    }

}

const input = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
];

// const field1 = new Field(input);

function handleGame(fieldInput) {
    const field = new Field(fieldInput);

    process.stdout.write('\n WELCOME TO OUR FIND YOUR HAT GAME! \n \n');
    process.stdout.write('\n This is your field. It is your job to find the hat \n \n');
    field.print()
    process.stdout.write('\n which direction would you like to go? \n >>> ')

    process.stdin.on('data', dataInput => {
        field.setCharacter(dataInput);
    })

}

handleGame(input);