//why js look here https://stackoverflow.com/questions/62619058/appending-js-extension-on-relative-import-statements-during-typescript-compilat
import users from "../mockData.js";
import { Resolvers } from "../__generated__/resolvers-types.js";
import { GraphQLError } from "graphql";

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
        login: (parent, args) => {
            const creds = args.input;
            if (creds.password && creds.reg_device.value) {
                const user = users.find((u) => u.id === "1");
                return user;
            } else {
                throw new GraphQLError("You are not authorized to perform this action.", {
                    extensions: {
                        code: "FORBIDDEN",
                    },
                });
            }
        },
    },
};

export default resolvers;
