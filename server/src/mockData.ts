import { Gender, RegDeviceType, User } from "./__generated__/resolvers-types.js";

const users: User[] = [
    {
        id: "1",
        first_name: "Mark",
        last_name: "Marksman",
        birthday: "1716904148252",
        gender: Gender.Male,
        reg_device: {
            type: RegDeviceType.Email,
            value: "lalalal@gmail.com",
        },
    },
];

console.log(Date.now());
export default users;
