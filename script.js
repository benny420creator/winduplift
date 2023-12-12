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
        option.value = assembly.manufacturer; // assuming 'manufacturer' is a unique identifier
        option.textContent = assembly.manufacturer; // Adjust based on how you want to display the assemblies
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

    // Placeholder for wind load calculation - replace with actual formula
    let windLoad = buildingHeight * roofWidth * roofLength * locationFactor;
    document.getElementById('windLoadResult').innerText = `Calculated Wind Load: ${windLoad.toFixed(2)} [units]`;
}

function displaySelectedAssemblyInfo() {
    const selectedAssembly = document.getElementById('assemblySelect').value;
    const assemblyData = assembliesData.find(assembly => assembly.manufacturer === selectedAssembly);

    // Display relevant information about the selected assembly
    // Modify this based on what details you want to show
    let assemblyInfo = `Selected Assembly: ${assemblyData.manufacturer}, Uplift Resistance: ${assemblyData.dynamicUpliftResistance.kPa} kPa`;
    document.getElementById('assemblyResult').innerText = assemblyInfo;
}
