interface GPS{
    coordinates: string,
    getCoordinates: ()=>string 
}

interface MediaPlayer{
    start: boolean,
    stop: boolean,
    pause: boolean,
}

class MobilePhone implements MediaPlayer,GPS {
    start: boolean;
    stop: boolean;
    pause: boolean;
    coordinates: string;
    constructor(start: boolean, stop: boolean, pause: boolean, coordinates: string)
    {
        this.start=start;
        this.stop=stop;
        this.pause=pause;
        this.coordinates=coordinates;
    }
    getCoordinates(): string{
        return this.coordinates;
    }
}

const app:any=new MobilePhone(true,false,false,"23.76");
console.log(app.getCoordinates());
