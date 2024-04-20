let AirConditioner = require("./airConditioner.js")

describe('AirConditioner', () => {
    let ac;
});

    beforeEach(() => {
        ac = new AirConditioner();
    });

    test('air conditioner can come on', () => {
        expect(ac.getIsOn()).toBe(false);
        ac.toggle();
        expect(ac.getIsOn()).toBe(true);
    });

    test('air conditioner can be turned off', () => {
        expect(ac.getIsOn()).toBe(false);
        ac.toggle();
        expect(ac.getIsOn()).toBe(true);
        ac.toggle();
        expect(ac.getIsOn()).toBe(false);
    });

    test('turn ac on and increase temperature', () => {
        expect(ac.getIsOn()).toBe(false);
        ac.toggle();
        expect(ac.getIsOn()).toBe(true);
        ac.increaseTemperature();
        expect(ac.getTemperature()).toBe(17);
    });

    test(' increase ac temperature without turning it on', () => {
        expect(ac.getIsOn()).toBe(false);
        ac.increaseTemperature();
        expect(ac.getTemperature()).toBe(16);
    });

    test('turn on ac,  increase ac temperature 15 times, temperature remains 30 degree celcius', () => {
        expect(ac.getIsOn()).toBe(false);
        ac.toggle();
        expect(ac.getIsOn()).toBe(true);
        for(index = 0; index < 16; index ++){
            ac.increaseTemperature();
        }
        expect(ac.getTemperature()).toBe(30);
    });

    test('turn ac on , increase temperature to 17, decrease temperature to 16', () => {
        expect(ac.getIsOn()).toBe(false);
        ac.toggle();
        expect(ac.getIsOn()).toBe(true);
        ac.increaseTemperature();
        expect(ac.getTemperature()).toBe(17);
        ac.decreaseTemperature();
        expect(ac.getTemperature()).toBe(16);
    });

    test('turn ac on , decrease temperature, temperature remains 16', () => {
        expect(ac.getIsOn()).toBe(false);
        ac.toggle();
        expect(ac.getIsOn()).toBe(true);
        ac.decreaseTemperature();
        expect(ac.getTemperature()).toBe(16);
    });

    test('turn on ac,  increase ac temperature 14 times, temperature becomes 30 degree celcius, decrease temperature 14 times to 16 degree celcius', () => {
        expect(ac.getIsOn()).toBe(false);
        ac.toggle();
        expect(ac.getIsOn()).toBe(true);
        for(index = 0; index < 15; index ++){
            ac.increaseTemperature();
        }
        expect(ac.getTemperature()).toBe(30);
        for(index = 0; index < 15; index ++){
            ac.decreaseTemperature();
        }
        expect(ac.getTemperature()).toBe(16);
    });






