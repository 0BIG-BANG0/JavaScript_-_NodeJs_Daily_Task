const users = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Chicago' },
    { name: 'Charlie', age: 35, city: 'New York' },
    { name: 'David', age: 22, city: 'Los Angeles' },
    { name: 'Eve', age: 28, city: 'New York' }
];

const search = users.filter((u)=> u.age>25 && u.city=="New York")
console.log(search)