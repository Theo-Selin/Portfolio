import { createRoot } from 'react-dom/client';
import App from "./App"
import "./index.css"

const container = document.getElementById('root');
const root = createRoot(container);
window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});
root.render(<App tab="home" />);