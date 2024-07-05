// script.js

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const dataVisualization = document.getElementById("data-visualization");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const domain = tab.getAttribute("data-domain");
            updateDataVisualization(domain);
            setActiveTab(tab);
        });
    });

    // Initialize with the first tab active
    if (tabs.length > 0) {
        updateDataVisualization(tabs[0].getAttribute("data-domain"));
        setActiveTab(tabs[0]);
    }
});

function updateDataVisualization(domain) {
    fetch(`/api/data?domain=${domain}`)
        .then(response => response.json())
        .then(data => {
            populateTable(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function populateTable(data) {
    const tbody = document.querySelector("#data-table tbody");
    tbody.innerHTML = ""; // Clear existing rows

    data.forEach((item, index) => {
        const row = document.createElement("tr");
        
        const idCell = document.createElement("td");
        idCell.textContent = index + 1;
        row.appendChild(idCell);
        
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
        
        const valueCell = document.createElement("td");
        valueCell.textContent = item.value;
        row.appendChild(valueCell);
        
        tbody.appendChild(row);
    });
}

function setActiveTab(activeTab) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
    activeTab.classList.add("active");
}
