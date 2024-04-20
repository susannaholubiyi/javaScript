class AirConditioner{
    constructor(){
        this.isOn = false;
        this.temperature = 16;
    }
    getIsOn(){
        return this.isOn;
    }
    toggle(){
        this.isOn = !this.isOn;
    }
    increaseTemperature(){
        if(this.isOn ){
            if(this.temperature >= 16 && this.temperature < 30)this.temperature ++;
        }
        else(console.log("Air conditioner is off"));
    }
    decreaseTemperature(){
        if(this.isOn ){
            if(this.temperature <= 30 && this.temperature > 16)this.temperature --;
        }
        else(console.log("Air conditioner is off"));
    }
    getTemperature(){
        return this.temperature;
    }

}
module.exports =(AirConditioner)

