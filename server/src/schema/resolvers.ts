//why js look here https://stackoverflow.com/questions/62619058/appending-js-extension-on-relative-import-statements-during-typescript-compilat
import users from "../mockData.js";
import { Resolvers } from "../__generated__/resolvers-types.js";

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
