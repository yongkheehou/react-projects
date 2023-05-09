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

// generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array] // original array does not change
    return newArray
}

const demoArray = [1,2,3]

const updatedArray = insertAtBeginning(demoArray, -1) // gives [-1,1,2,3]

// updatedArray[0].split('') // <> tells TS that type of updatedArray is number
