import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-ui/core";
import AppRoutes from "./Routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ThemeProvider children={<AppRoutes />}></ThemeProvider>);
