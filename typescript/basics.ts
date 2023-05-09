let age: number = 24;

age = 12;

let userName: string;

userName = 'Max'

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ['Sports', 'Cooking']

// let person: {
//     name: string, 
//     age: number
//     // isEmployee: boolean;
// }

type Person = {
    name: 'Max',
    age: 32
};

let person: Person;

// person = {
//     isEmployee: true
// }

let people: Person[]

let course: string | number = 'React Guide'

course = 123 // type inference causes this to return error

function add(a: number, b: number): number {
    return a+b
}

function print_output(value: any) {
    console.log(value)
}
