import users from "../mockData";
import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
    Query: {
        user: (parent, args) => {
            const id = args.id;
            const user = users.find((u) => u.id === id);
            return user;
        },
    },

    Mutation: {
        addUser: (parent, args) => {
            const u = args.input;
            const id = Date.now().toString();
            const user = { id, ...u };
            users.push(user);
            return user;
        },
    },
};

export default resolvers;
