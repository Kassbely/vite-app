const user = {
    id: "1",
    email: "test@test.ru",
    name: "Тестовый",
    surname: "Пользователь",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    about: "О себе",
}

const users = {
    0:{name: "Ольха", surname: "Щепковая"},
    1:{name: "Береза", surname: "Полосатая"},
    2:{name: "Ясень", surname: "Тягучий"},
    3:{name: "Корвалол", surname: "Жидкий"},
    4:{name: "Дуб", surname: "Крепкий"},
}
export function getUser() {
    return user;
}
export function getUsers() {
    return users;
}