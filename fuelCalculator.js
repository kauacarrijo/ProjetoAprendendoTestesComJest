function calculateFuelConsumption(distanceInMeters, typeOfFuel) {
    if (!Number.isInteger(distanceInMeters) || distanceInMeters < 0) {
        throw new Error('distanceInMeters deve ser um inteiro não negativo')
    }
    if (typeof typeOfFuel !== 'string' || (typeOfFuel !== 'gasolina' && typeOfFuel !== 'etanol')) {
        throw new Error('typeOfFuel deve ser uma string válida: "gasolina" ou "etanol"')
    }

    let litersNeeded
    const distanceInKm = distanceInMeters / 1000
    if (typeOfFuel === 'gasolina') {
        litersNeeded = distanceInKm / 16
    } else if (typeOfFuel === 'etanol') {
        litersNeeded = distanceInKm / 11
    }

    return Math.ceil(litersNeeded)
}

module.exports = {calculateFuelConsumption}