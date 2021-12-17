import { Greeter } from "./greeter";

class JavaScriptGreeter extends Greeter {
    greet(name: string): string {
        return "console.log({greeting}, {name}!)"; 
    }
}

// working on testsgit add 