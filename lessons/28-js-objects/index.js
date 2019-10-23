const user = {
    username: 'batman',
    password: 'hunter2'
};

console.log(user);
console.log(typeof user);

if(user.name === 'batman' && user.password === '*******') {
    console.log('Access Granted');
} else {
    console.log('Access Denied');
}

const user2 = {
    username: 'wonderwoman',
    password: 123123,
    greet() {
        console.log(`Hello, I am a ${this.username}`);
    },
    updateName(newName) {
        this.username = newName;
    }
};
user2.greet();
user2.updateName('magician');
user2.greet();