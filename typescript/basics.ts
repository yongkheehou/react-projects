let age: number = 24;

age = 12;

let userName: string;

userName = 'Max'

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ['Sports', 'Cooking']

let person: {
    name: string, 
    age: number
    // isEmployee: boolean;
}

person = {
    name: 'Max',
    age: 32
}

// person = {
//     isEmployee: true
// }

let people: {
    name: string, 
    age: number
    // isEmployee: boolean;
}[]

let course: string | number = 'React Guide'

course = 123 // type inference causes this to return error
