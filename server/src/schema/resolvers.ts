/*

const resolvers = {
    Query: {
        //user resolvers
        users: () => users /*here request to db should be*/,
        //here we use default resolvers for fields of user object (name, id, surname ...)
        /*
        user: (parent, args) => {
            const id = Number(args.id);
            const user = users.find((u) => u.id === id);
            return user;
        },
        */
        //but if we want we can specify resolvers for them manually
        /*
        user(parent, args) {
            return {
                id() {
                    return args.id;
                },
                name() {
                    const id = Number(args.id);
                    const user = users.find((u) => u.id === id);
                    return user.name;
                },
                surname() {
                    const id = Number(args.id);
                    const user = users.find((u) => u.id === id);
                    return user.surname;
                },
                profession() {
                    const id = Number(args.id);
                    const user = users.find((u) => u.id === id);
                    return user.profession;
                },
            };
        },
        *//*
    },

    Mutation: {
        addUser: (parent, args) => {
            const u = args.input;
            const id = Date.now();
            const user = { id, ...u };
            users.push(user);
            return user;
        },

        updateUser: (parent, args) => {
            const user = args.input;
            const id = Number(args.input.id);
            const updatedUser = { ...user };
            updatedUser.id = id;
            const newUsers = users.map((u) => {
                if (u.id === id) {
                    return updatedUser;
                }
                return u;
            });
            users = newUsers;
            return user;
        },

        deleteUser: (parent, args) => {
            const id = Number(args.id);
            const newUsers = users.filter((u) => u.id !== id);
            users = newUsers;
            return id;
        },
    },
};


*/
import users from "../mockData";

const resolvers = {
    Query: {
        user: (parent, args) => {
            const id = Number(args.id);
            const user = users.find((u) => u.id === id);
            return user;
        },
    },

    Mutation: {
        addUser: (parent, args) => {
            const u = args.input;
            const id = Date.now();
            const user = { id, ...u };
            users.push(user);
            return user;
        },
    },
};


export default resolvers;