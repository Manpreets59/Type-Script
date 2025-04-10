"use strict";
;
function AgeSum(user1, user2) {
    return user1.age + user2.age;
}
const result = AgeSum({ name: 'Man', age: 25 }, { name: 'Kam', age: 30 });
console.log(result);
