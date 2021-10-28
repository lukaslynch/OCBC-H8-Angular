// Menerapkan TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Deklarasi Variable
//ts
// [let | const] [namaVariable]: [tipeData | tipeDataLain | ...] = [value]
var message = "Hello FSD OCBC 1";
var students = [
    ['Gusti', true, ['FSD', 'OCBC']],
    ['Ricky', true],
    ''
];
// Deklarasi Function
//ts
function greetParticipant(name, age) {
    console.log("Hello " + name + "! Your age is " + age + ".");
}
greetParticipant('Ricky');
// Deklarasi Object
// cara 1: declare type langsung
//ts
var student = {
    name: 'Budi',
    age: 71,
    score: 100,
    address: "Jl. Merdeka 1234"
};
// kemudian kita bisa declare seperti ini...
var anotherStudent = {
    name: "Rara",
    age: "infinite",
    score: 100
};
// atau kita bisa declare sebagai array...
var employees = [
    // kemudian kita input object secara langsung di sini...
    {
        name: "Bayu",
        age: 21,
        score: 100
    },
    // atau pass sebuah variable di sini,
    // selama object memiliki tipe data yang sama
    anotherStudent
];
// Deklarasi Class
//ts
// Deklarasi class utama
var Person = /** @class */ (function () {
    // name: string;
    // private age: number;
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "personAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
// Deklarasi class turunan/anakan
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, score, firstMentor) {
        var _this = 
        // pakai super()
        _super.call(this, name, age) || this;
        _this.mentors = [];
        _this.score = score;
        _this.mentors.push(firstMentor);
        return _this;
    }
    Student.prototype.changeScore = function (newScore) {
        this.score = newScore;
    };
    Student.prototype.addMentor = function (mentorName) {
        this.mentors.push(mentorName);
    };
    Object.defineProperty(Student.prototype, "studentName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Person));
var riyan = new Student('Riyan', 22, 100, 'Arif');
console.log(riyan);
riyan.changeScore(105);
riyan.addMentor('Eas');
console.log(riyan.studentName);
