// Условие доступа

const someUser = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
};

function checkAccess(user) {
    return user.isAdmin ? true :
        (!user.blocked && user.paid && !user.badUsername && user.age >= 18 && user.age <= 35)
}

console.log(checkAccess(someUser));