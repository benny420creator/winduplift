let assembliesData = [];

// Load assemblies data (assuming you have a local or hosted JSON file)
fetch('path/to/testedAssemblies.json')
    .then(response => response.json())
    .then(data => {
        assembliesData = data;
        populateAssemblyOptions();
    })
    .catch(error => console.error('Error loading assembly data:', error));

function populateAssemblyOptions() {
    const selectElement = document.getElementById('assemblySelect');
    assembliesData.forEach(assembly => {
        const option = document.createElement('option');
        option.value = assembly.manufacturer;
        option.textContent = assembly.manufacturer; // or any other identifier
        selectElement.appendChild(option);
    });
}

function performCalculations() {
    calculateWindLoad();
    displaySelectedAssemblyInfo();
}

function calculateWindLoad() {
    let buildingHeight = parseFloat(document.getElementById('buildingHeight').value);
    let roofWidth = parseFloat(document.getElementById('roofWidth').value);
    let roofLength = parseFloat(document.getElementById('roofLength').value);
    let locationFactor = parseFloat(document.getElementById('locationFactor').value);

    let windLoad = buildingHeight * roofWidth * roofLength * locationFactor; // Placeholder calculation
    document.getElementById('windLoadResult').innerText = `Calculated Wind Load: ${windLoad.toFixed(2)} [units]`;
}

function displaySelectedAssemblyInfo() {
    const selectedAssembly = document.getElementById('assemblySelect').value;
    const assemblyData = assembliesData.find(assembly => assembly.manufacturer === selectedAssembly);

    // Display relevant information about the selected assembly
    document.getElementById('assemblyResult').innerText = `Selected Assembly: ${assemblyData.manufacturer}, Uplift Resistance: ${assemblyData.dynamicUpliftResistance.kPa} kPa`;
}

