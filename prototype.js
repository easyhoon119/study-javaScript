//es5;
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//es6;
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set name(value) {
        if (value.length < 4) {
            console.error("이름은 5자 이상입니다!");
        }
        this._name = value;
    }

    set age(value) {
        if (value <= 0) {
            console.error("나이는 양수 입니다.");
        }
        this._age = value;
    }
}

Animal.prototype.say = "hihi";

class 사나운동물 extends Animal {
    constructor(name, age, feed) {
        super(name, age);
        this.feed = feed;
    }
}

const monkey = new Animal("ban", -1);
const lion = new 사나운동물("라이언이닼", 456, "고기");
const chulsoo = new Person("chulsoo", 123);

// console.log(chulsoo);
console.log(monkey);
console.log(lion);
console.log(monkey.say);
lion.say = "바보";
console.log(lion.say);
console.log(monkey.say);

//const examArray = new Array(1,2,3);
const examString = "안녕하세요";
// const examString = new String("안녕하세요");

console.log(examArray.length);
console.log(examString.length);

const examArray = [1, 2, 3];

Array.prototype.changeThirdFive = function () {
    return this.map((item, index) => (index === 2 ? 5 : item));
};

console.log(examArray.changeThirdFive());
