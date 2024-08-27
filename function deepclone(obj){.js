function deepclone(obj){
    if ( typeof obj !=='object'){
        return obj;
    }
    
    let new_arr = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            new_arr[i] = deepclone(obj[i]);
        }
    }
    return new_arr;
}

const person = {
    firstName: "Omar",
    lastName: "Tharwat",
    age: 30,
    city: "Alex"
};

const clonedPerson = deepclone(person);
clonedPerson .age = 40;
console.log('Original Array:', person);
console.log('Cloned Array:', clonedPerson);