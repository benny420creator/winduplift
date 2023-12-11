function calculateResistance() {
    let sustainedPressure = document.getElementById('sustainedPressure').value;
    sustainedPressure = parseFloat(sustainedPressure);

    let resistanceFactor = sustainedPressure <= 11.5 ? 0.65 : 1.0; // Placeholder for actual RF calculation

    let roofingSystemResistance = sustainedPressure * resistanceFactor;
    document.getElementById('result').innerText = `Roofing System Resistance (RS): ${roofingSystemResistance.toFixed(2)} kPa`;
}
