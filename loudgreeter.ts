import { Greeter } from "./greeter";

class LoudGreeter extends Greeter {

    private extra: string ="!";

    addVolumae(): void {
        this.extra
    }

    greet(name: string): string{
        return "{greeting}, {name}!!!"
    }
}

   
