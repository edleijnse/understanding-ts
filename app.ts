
/*const person: {
    name: string,
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};*/
enum Role { ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
let favoriteActivities: string[];
console.log(person.name);
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}
// person.role.push('admin');
if (person.role === Role.AUTHOR){
    console.log('is author');
}
console.log(person);
