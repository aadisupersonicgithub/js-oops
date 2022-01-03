// console.log("Welcome Mr. Aadi");
// IMP NOTE Predict result before compiling 
// NOTE Dont repeat yourself 
// IMP Write only relevant comments so that while revision you can go through each line confidently , being assured on its quality.

// data : property , code : methods/behaviour
// objects interact with eachother
// interaction via public interface API , even outside objects can access its methods
// imp : js dont support real classes

// 4 principal 
// 1. abstraction : hiding highVolate, vibration (ie useful but user need not info about it) etc

// 2. encapsulation : keeping something private so that bahar se unaccessible (only andar se accessible),  kuch ko expose via public api 
// private varible, method dono ko kr skte 
// imp : js dont have any private keyword 

// 3. inheritance : user , admin  (deleteUser(), persmissiono) ie making all props and methods avail to child class, reuse common logic 

// 4. polymorphism : overwriting parents method in child  eg login, 2factorAuthenticated login 


// prototypal inheritance :: instance inheriting from class 
// inheritance : class inheriting from classs 

// objects (can access methods)  === (prototypal inheritance/delegation) == >> prototypes (contains methods)

// to implement oops in js  3 methods (as classes hai nahi, we can say these 3 simulate classe)

// 1. constructor function  2. es6 classes   3. object.create 

// 1. constructor function
// create object with function Array, Map Set isise implemented 

// 2. es6 classes 
// look alag , behind the scene same as 1 , syntactic sugar , DONT behave like classsicalOOPS classes 


// 3. object.create 
// straight forward and easy 

// Rule1  convention : 1st letter of constructor is capital 
// note : arrow functino dont work as constructor as it dont have its 'this' keyword 
// instance/object same cheez 



'user strict';

// {} === new john 
// const john = {
//     firstName: 'john',
//     lastName: 'cena',
//     birthyear: 1299
// };

// 2 levels 
// console.log(john, typeof john, john.__proto__, john.__proto__.__proto__); 
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // IMP DONT do this (though works fine):: create methods in constructor ie memory overkill 
    // INSTEAD use prototpyes 
    // If both have this then obviously this will be preffered a/c to prototype chain 
    // this.calcAge = function () {
    //     return 2038 - this.birthYear;
    // };
}

Person.prototype.calcAge = function () {
    return 2037 - this.birthYear;
};




const aadi = new Person("aadi", 2000);
// 4 steps 
// 1 create a new {} object 
// 2 link it to 'this' keyword of calling function
// 3. link this to the function prototype 
// 4 returns AUTOMATICALLY the modified(if any in the function) this 

const jonas = new Person('jonas', 1985);
const nikhil = new Person('nikhil', 1999);

// console.log(aadi.calcAge());
// console.log(nikhil.calcAge());

// 3 levels
// console.log(jonas, typeof jonas, jonas.__proto__, jonas.__proto__.__proto__, jonas.__proto__.__proto__.__proto__);
// NOTE __proto__ of this function constructor further whose __proto__ is object , but of object literal __proto__ is object directl. TODO Q1. why so ?

// console.log(aadi, aadi instanceof Person, aadi instanceof Object);
// NOTE object not defineed its 'Object'  (remember rule1)


// IMP in JS, every function have a property called prototype .. its A1 to Q1. .. which is created in Step3 of making object with new.


// console.log(aadi); // {"firstName": "aadi","birthYear": 2000}
// console.log(aadi.__proto__); // {calcAge: ƒ, constructor: ƒ}
// console.log(aadi.__proto__ === Person.prototype); // true 

// console.log(aadi.calcAge.__proto__); // native code 
// console.log(aadi.calcAge.prototype); // constructor f 
// console.log(aadi.calcAge.prototype.prototype); // undefined 

// console.log(aadi.calcAge.prototype.__proto__); // Object constructor prototype 
// console.log(typeof aadi.calcAge.prototype.__proto__); // object   

// console.log(aadi.calcAge.prototype.__proto__.__proto__); // null 
// console.log(typeof aadi.calcAge.prototype.__proto__.__proto__); // object   

// console.log(typeof null, typeof NaN, typeof false, typeof undefined);


// NOTE Person.prototpye != prototype of person  RATHER  Person.prototpye != prototype of linked objects to Person ie
// console.log(Person.prototype.isPrototypeOf(aadi));
// console.log(Person.prototype.isPrototypeOf(Person));

// console.log(aadi.hasOwnProperty('firstName')); // true 
// console.log(aadi.hasOwnProperty('calcAge')) // false 

Person.prototype.species = 'Home sapiens';
// console.log(aadi.species);
// console.log(aadi.hasOwnProperty('species')); // false

// console.log(Person.prototype.__proto__) // object, next null
// console.log(Person.prototype.constructor); // code for Person object (ie Person itself)
// console.log(Person.prototype.constructor === Person); // true
// DOUBT TODO is constructor function == Person (ie how to print constructor function) DONE
// console.log(Person); // prints the Person constructor function

// constructorFunction.prototype = object.__proto__ == Person.prototype
// console.log(Person.prototype == aadi.__proto__); // true








// TOPIC Prototype Chain
// NOTE __proto__ always points to an objects prototype

// IMP any function in js is object as well, hence have an prototype object
// console.log(typeof Person.prototype.constructor, typeof Person);

// NOTE Array.prototype.filter() => filter() property lies within prototype property of Array constructor function

// prototype vs __proto__
// ans Type 1
// _proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
// The prototype property is only present for functions and is a property that's set only if
//  you're using the 'new' keyword when creating objects with this (constructor) function
// ans Type 2
// IMP prototype is a property of a Function object. It is the prototype of objects constructed by that function.
// __proto__ is an internal property of an object, pointing to its prototype



// console.log(Array.prototype == Object);
// console.log(Array.prototype.__proto__);

// console.log(Array.__proto__.__proto__ == Object.prototype); // true
// console.log(Array.__proto__ == Object); // false

// console.log(Array.prototype == Array.__proto__);

// Round 4 DONE

// NOTE All the DOM elements  behind the scenes are object ie HTMLElement NodeList etc  eg H1 has 7 level of prototypal inheritance ending in object.

// console.log(aadi.__proto__); // calcAge, species, constructor, prototype
// IMP Person se prototype lagake OR object se proto lagake ... is class ke prototype pe pahunchoge

// console.log(aadi.__proto__.__proto__); // object prototype
// console.log(aadi.__proto__.__proto__.__proto__); // null 







// TOPIC prototypal inheritance in Builtin object eg array

const arr = [2, 4, 5, 0, 8, 5, 6, 7, 0, 5, 4, 6, 8];
// console.dir(arr.__proto__);
// console.dir(arr.__proto__ == Array.prototype);
// console.dir(arr.__proto__.__proto__);

// NOTE BAD practice but can do like this 
Array.prototype.unique = function () {
    return [... new Set(this)];
}
// console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);






// TOPIC Creating objects coding 

// METHOD1 using constructors 
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is running at ${this.speed}`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is running at ${this.speed}`);
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.brake();

// Revise constructor 
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }
// Person.prototype.calcAge = function () {
//     return 2037 - this.birthYear;
// };

// TOPIC Getters AND Setters 
// NOTE declarations like functions, but behave like properties ie variabless
// APP used for data validation 

const account = {
    owner: 'aadi',
    movements: [200, 532, 234, 453],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    // NOTE takes 1 value 
    set latest(mov) {
        this.movements.push(mov);
    }
};

// console.log(account.latest);
account.latest = 43;
// console.log(account.movements);




// METHOD 2 ES6 classes 
// IMP NOTE Classes are special type of functions, behind the scenes. ie why class declaration, class expression (as in fns)
class PersonClass {
    // const PersonClass = Class {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Due to ES6 behind the scene works same as constructors (ie no memory) AS these method are added to prototype directly  
    calcAge() {
        return 2037 - this.birthYear;
    }
    greet() {
        console.log(`Hello Mr. ${this.firstName}, Good Morning!`);
    }
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            alert("Not a full name");
        }
    }
    get fullName() {
        return this._fullName;
    }
}
const aadi2 = new PersonClass('aadi', 2000);
const nikhil2 = new PersonClass('nikhil', 2001);
// NOTE calcAge bhale class me, but actually its in prototype, ie no overkill of memory and looks cleaner 
// console.log(aadi2, nikhil2.calcAge());
// console.log(aadi2.__proto__ === PersonClass.prototype);

// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);

// NOTE 1 Classes are not Hoisted (ie we cant use them before declaring (as we could do in function))

// NOTE 2 Classes are first class citizens (ie we can typecast them into function OR return them from functions)

// NOTE 3 everything inside class is executed in STRICT mode 

// aadi2.fullName = 'deviprasad';
aadi2.fullName = 'devi prasad';
// console.log(aadi2.fullName);






// TOPIC Static Methods
// NOTE Attached to constructor (not prototypes, so ofc objects cant access it) 
// NOTE hence 'this' keyword points to function constructor foc 
// APP used to create helper function about class 

// Type1 Creation in function constructor 
Person.iAmStaticMethod = function () {
    console.log(this);
    console.log("i am only for construction, i am not in prototypes either ie why objects cant access me");
}

// Person.iAmStaticMethod();
// aadi.iAmStaticMethod(); ERROR 

// eg Array.from method is static
// console.log([1, 2, 3].from()) ERROR

// console.log(aadi, aadi instanceof Person); // to see location of iAmStaticMethod in prototype Chain in console

// Type2 Creation in es6 class 
PersonClass.iAmClassStaticMethod = function () {
    console.log("Now this pointer will point to entire class", this);
    console.log("");
};
// PersonClass.iAmClassStaticMethod();
// i repeat objects cant access it, as its not been linked to prototype ie 
// aadi2.iAmClassStaticMethod(); // ERROR








// TOPIC object.create method to make objects 

// NOTE Its a function , different from above two ie constructor and es6 
// NOTE manually created OR already existing prototype ...ko current object ka prototype declare krke ..object banate hai 
// IMP comma after every property OR method 

// Remember prototype contains methods, whom objects can access.
// Manually creating prototype here , (for 'already existing proto' see in inheritance)
const PersonPrototype = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    // NOTE its different from constructor as it dont need any 'new' keyword to make this 
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

// IMP NOTE it returns an empty object always initialze with this, then perform actions, ow all those actions will overridden by this by making object {}
const peter = Object.create(PersonPrototype);
// IMP NOTE in constructor, automatic step3 me constructor ka prototype 'this' of object se link hota tha 
// BUT here automatically object ka prototype se link hoke object return ho jaaye, constructor fun ka intermediate stage khatam 

// console.log(PersonPrototype === peter.__proto__); // true 
// NOTE if needed peter ki 'properties' manully set krlo ya prototype me koi function define krdo 
// i) using function 
// peter.init('peter', 1995); 
// ii) manually 
peter.firstName = 'peter';
peter.birthYear = 1995;
// console.log(peter);



// TOPIC Inheritance
// child ka prototype ko parent ke prototype se link kra ke, iski prototypeChain length badha do 
// SUBTOPIC 1. constructor function 

const Persona = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Persona.prototype.calcAge = function () {
    return 2037 - this.birthYear;
}
const Student = function (firstName, birthYear, course) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // NOTE Person(firstName, birthYear) ERROR as no caller so 'this' will become undefined there 
    Person.call(this, firstName, birthYear); // IMP 
    this.course = course;
}

// 2 issues i) constructor me 2 properties repeat (large scale pe troublesome) ii) linking prototype of childs to parents 

Student.prototype = Object.create(Persona.prototype);
// IMP it must be here as it returns empty object ow override all methods already in prototype if before it to {} 
// NOTE creating connection manully .. it links child to parent, ie now child can access parents methods ie calcAge here  ...
//  its eg of linking already existing persona.prototype 

Student.prototype.introduce = function () {
    console.log(`Hello myself ${this.firstName} , born in ${this.birthYear} currently enrolled in ${this.course}`);
}

// FIXME  :: Student.prototype = Persona.prototype; whats the issue in this ? 
// ANS o/w jo automatic constructor function pahle student ke prototype se link hota tha wo nahi hoga , ye direct person se link ho jayega 
// NOTE student ke prototype ki existence hi khatam smjho as overwrite krke use parent ko point kra diya 

const aadi3 = new Student('aadi', 2000, 'CSE');
// steven.introduce();
// console.log(steven.calcAge());

// console.log(aadi3);

const p4 = new Persona('nikhil', 2000);
// console.log(p4.__proto__ === Persona.prototype);


// console.log(Student.prototype.constructor === Student); // ie linking is bad FIXME 
// console.log(Student.prototype.constructor === Persona); // ie linking is bad ie parent ko point krra tha FIXME 
Student.prototype.constructor = Student; // ANS ow Student.prototype = Persona (ie wrong  it should be Student)
// console.log(Student.prototype.constructor === Student); // now it would work  
// console.log(Student.prototype.constructor === Persona); // 
// console.log(aadi3);
// console.log(Student.prototype.constructor === Student);
// console.log(aadi3.__proto__ === Student.prototype); true ofc as new linked this much itself

// console.log(aadi3 instanceof Student);
// console.log(aadi3 instanceof Persona);
// console.log(aadi3 instanceof Object);

// console.log(Object.getPrototypeOf(aadi3) === Student.prototype);

// IMP NOTE 
// wtf it shows the prototype of student, but write names Persona 
// console.log(aadi3.__proto__);
// wtf it shows the prototype of Persona, but dont write its name ie ""
// console.log(aadi3.__proto__.__proto__);


// Challenge 3
/*

TOPIC

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is moving at ${this.speed}`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make}  is moving at ${this.speed}`);
}

const EV = function (make, speed, charge) {
    // this.make = make;
    // this.speed = speed;
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.introduce = function () {
    console.log(`${this.make} is running at ${this.speed} with charged charge of ${this.charge} %. `)
}
EV.prototype.chargeBattery = function (chargeTo) {
    let dis = " ";
    if (chargeTo < this.charge) {
        dis = " dis";
    }
    console.log(`The battery of ${this.make} has been${dis}charged from ${this.charge} to ${chargeTo}`);
    this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
    if (this.charge == 0) {
        console.log("Battery discharged. Cant move!!!");
        return;
    }
    console.log(`${this.make} has accelerated from ${this.speed} to ${this.speed + 20} while its charged dropped from ${this.charge} to ${this.charge - 1}`);
    this.charge -= 1;
    this.speed += 20;
}

EV.prototype.constructor = EV;
const ev = new EV('Ford', 120, 23);
ev.introduce();
ev.chargeBattery(55);
ev.chargeBattery(42);
ev.accelerate();
ev.accelerate();
ev.brake();
console.log(ev); */

/*
// TOPIC using es6 classes
let ct = 0;
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is moving at ${this.speed}`);
        return this;
    }
    accelerate() {
        this.speed = this.speed + 10;
        console.log(`${this.make} is moving at ${this.speed}`);
    }
    set make(make) {
        if (make.includes(' ')) {
            this._make = make;
        } else {
            alert("invalid name!!!");
        }
    }
    get make() {
        return this._make;
    }

    get speed() {
        ++ct;
        console.log(" --- ", ct);
        return this.miles;
    }
    set speed(val) {
        this.miles = val / 1.6;
    }

}

class EV extends Car {
    #charge;
    constructor(make, speed, charge) {
        // MUST super function call should be done first, IMP as it create 'this' keyword for subclass in constructor
        // this.make = make;
        // this.speed = speed;
        // earlier Car.call(this, make, speed);
        super(make, speed);
        this.#charge = charge;
    }




    getCharge() {
        return this.#charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    accelerate() {
        let x = this.speed * 1.6;
        this.speed = x + 20;
        this.#charge -= 1;
        console.log(`${this.make} accelerated to ${this.speed} and now at charge ${this.#charge} %`);
        return this;
    }
    introduce() {
        console.log(`${this.make} is running at ${this.speed} with charged charge of ${this.#charge} %. `)
    }
}

// in ES6 classes
// 2 things i. extends ii. Super keyword in constructor
const ev = new EV('tesla nicola', 100, 23);
ev.accelerate();
// ev.introduce();
// ev.brake();
// console.log(ev);
// ev.accelerate().accelerate().chargeBattery(15).accelerate().brake().brake();
*/

/*
// TOPIC using object create method

const CarPrototype = {
    init(make, speed) {
        this.make = make;
        this.speed = speed;
    },
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is moving at ${this.speed}`);
    },
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is moving at ${this.speed}`);
    }
};


const car1 = Object.create(CarPrototype);
// car1.init('tesla', 120);
// car1.accelerate();
const EVProto = Object.create(CarPrototype);
// note car1.__proto__ = EVProto.__proto__ , just using diff names for better readability ie
EVProto.init('teslax', 135);
EVProto.accelerate();
EVProto.brake();

EVProto.init = function (make, speed, charge) {
    // this.make = make;
    // this.speed = speed;
    CarPrototype.init.call(this, make, speed);
    this.charge = charge;
};
EVProto.introduce = function () {
    console.log(`${this.make} is running at ${this.speed} with charged charge of ${this.charge} %. `)
}
EVProto.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} accelerated to ${this.speed} and now at charge ${this.charge}`);
}

// In this we dont worry about i. constructor ii. prototype properties iii. new operator

const tesla = Object.create(EVProto);
tesla.init('tesla', 120, 23);
tesla.introduce();
tesla.accelerate();
tesla.brake();
console.dir(tesla);

*/
// to show fake private use underscore in name of fields, methods '_funName, _varName' but its not 100% safe;
// for 100% safe proposal chalra
// 4 types in proposal to implement real privacy
//  1. public fields  2. private fields  3. public methods 4. private methods
// note there is also 4 static version of these (ie in total 8)
/*
class Account {
    // 1. public fields (avail to all objects outside. accesbile bhi)
    locale = navigator.language;

    // 2. private fields (avail to all objects outside, but not accessible)
    #movements = [];
    #pin;  // defining fields
    // NOTE we cant define fields in constructer, all fields outside without any let,const if private use # / _ for (100% / ( < 100%) ) privacy

    constructor(owner, currency, pin) {
        // NOTE properties inside it are unique to each object, while public fields are avail to all instances so not unique.
        this.owner = owner;
        this.currency = currency;
        // redefining fields
        this.#pin = pin;
        // Can make extra variables as well

        // this.locale = navigator.language;
    }
    // Public interface (API)
    // 3. Public methods

    deposit(val) {
        this.#movements.push(val);
        return this;
    }
    withdrawl(val) {
        this.#movements.push(-val);
        return this;
    }
    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan of ${val} approved`);
            return this;
        }
    }
    // IMP TIP declaring methods like these are preferred over getters and setters
    getMovements() {
        return this.#movements;
    }

    // _approveLoan(val) {
    //     return true;
    // }
    // 4. Private methods (not launched so far)
    // NOTE : important as good in hiding details from outside
    #approveLoan(val) {
        // unaccesible from outside but as field (not method as its not launched)
        return true;
    }
    // static public method (as helper and only for class)
    static goa() {
        console.log("lets go");
    }

}
const acc1 = new Account('aadi', 'INR', 1234);
Account.goa();
// TIP BLock direct access to minimize
// TIP try to abstract '-' when withdrawl
// TIP try to see a public interface (API) in it
// Before
// console.log(acc1.#pin);
// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdrawl(140);
// NOTE but still no boundation in direct access, user can still perform that with followup bugs.

acc1.requestLoan(1000);

// TIP In real world, we should not be allowed to approve such method
// acc1.#approveLoan(1000);

console.log(acc1);

// IMP NOTE all of it leads to dataPrivacy and dataEncapsulation
// Note keep some methods private so that they cant be accessed from outside and expose rest to user ie public interface API
// IMP not perfect ,just add '_' laga do jise private krna hai, its not safe, but shows ki its private
// IMP classfields concepts are brining js free from 'syntactic sugar on constructor fun' image

// console.log(acc1.#movements); ERROR private fields must be declare in enclosing class (CRUX cant access from outside)
// NOTE now to access movements use public interface ie API
console.log(acc1.getMovements());

// TOPIC chaining ...ie return type this in all set_something methods
acc1.deposit(300).deposit(500).withdrawl(35).requestLoan(25000).withdrawl(4000);
console.log(acc1.getMovements());
*/
// ES6 classes summary 
/*
class Personx {
    constructor() {

    }
}
class Studentx extends Personx {
    university = 'university of london';
    #studyHours = 0;
    #course;
    static numSubjects = 10;

    constructor(fullName, birthYear, startYear, course) {
        super(fullName, birthYear);
        this.startYear = startYear;
        this.course = course;
    }

    introduce() {
        console.log(`Myself ${this.fullName} born in ${this.birthYear} studying ${this.course} from ${this.startYear}`);
    }
    study(h) {
        this.#makeCoffee();
        this.#studyHours += h;
    }
    #makeCoffee() {
        return `Here is a coffee for you`;
    }
    get testScore() {
        return this._testScore;
    }
    set testScore(score) {
        this._testScore = (score <= 20 ? score : 25);
    }
    static printCurriculum() {
        console.log(`There are ${this.numOfSubjects} subjects `);
    }
}
const me = new Studentx('aadi', 2000, 2018, 'CSE');
console.log(me);
*/
