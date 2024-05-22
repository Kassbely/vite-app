const user = {
    id: "1",
    email: "test@test.ru",
    name: "Тестовый",
    surname: "Пользователь",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    about: "О себе",
}

// const users = {
//     0:{name: "Ольха", surname: "Щепковая", id: 24, email: "olha@olha.ru", avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80"},
//     1:{name: "Береза", surname: "Полосатая", id: 2, email: "beresa@beresa.ru", avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80"},
//     2:{name: "Ясень", surname: "Тягучий", id: 14, email: "yasen@yasen.ru", avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80"},
//     3:{name: "Корвалол", surname: "Жидкий", id: 52, email: "korvalol@korvalol.ru", avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80"},
//     4:{name: "Дуб", surname: "Крепкий", id: 12, email: "dub@dub.ru", avatar:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80"},
// }
// export function getUser(userId) {
//     for (let i = 0; i < Object.keys(users).length; i++) {
//         if (users[i].id == userId)  return users[i];
//     }
//     return user;
// }
// export function getUsers() {
//     return users;
// }

let users = [];

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++ ) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("https://066.napli.hru/getUsers");
  users = await response.json();
  //console.log(users);
  return users;
}