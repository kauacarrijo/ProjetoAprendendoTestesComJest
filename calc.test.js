const {calculateFuelConsumption} = require('./fuelCalculator')

describe('calculateFuelConsumption', () => {
    test('should throw an error if distanceInMeters is not an integer', () => {
        expect(() => calculateFuelConsumption(100.5, 'gasolina')).toThrow('distanceInMeters deve ser um inteiro não negativo')
        expect(() => calculateFuelConsumption('1000', 'gasolina')).toThrow('distanceInMeters deve ser um inteiro não negativo')
    })

    test('should throw an error if distanceInMeters is negative', () => {
        expect(() => calculateFuelConsumption(-1000, 'gasolina')).toThrow('distanceInMeters deve ser um inteiro não negativo')
    })

    test('should throw an error if typeOfFuel is not a valid string', () => {
        expect(() => calculateFuelConsumption(1000, 'diesel')).toThrow('typeOfFuel deve ser uma string válida: "gasolina" ou "etanol"')
        expect(() => calculateFuelConsumption(1000, 123)).toThrow('typeOfFuel deve ser uma string válida: "gasolina" ou "etanol"')
    })

    test('should not throw an error for valid inputs', () => {
        expect(() => calculateFuelConsumption(1000, 'gasolina')).not.toThrow()
        expect(() => calculateFuelConsumption(1000, 'etanol')).not.toThrow()
    })

    test('should calculate fuel consumption correctly for gasoline', () => {
        expect(calculateFuelConsumption(16000, 'gasolina')).toBe(1)
        expect(calculateFuelConsumption(32000, 'gasolina')).toBe(2)
    })

    test('should calculate fuel consumption correctly for ethanol', () => {
        expect(calculateFuelConsumption(11000, 'etanol')).toBe(1)
        expect(calculateFuelConsumption(22000, 'etanol')).toBe(2)
    })
})