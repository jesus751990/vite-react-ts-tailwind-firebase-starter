import { createRoot } from 'react-dom/client';
import "./index.css";
import { App } from "~/components/root/App";

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
