import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";
import client from "./shared/api/client";

const theme = createTheme({
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </ThemeProvider>
    </React.StrictMode>
);
