function generateTable() {
    const number = document.getElementById("numberInput").value;
    const limit = document.getElementById("limitInput").value;
    const table = document.getElementById("generatedTable");

    // Clear the table content
    table.innerHTML = '';

    // Generate multiplication table
    for (let i = 1; i <= limit; i++) {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.innerText = number + " * " + i + " = " + (number * i);
    }
}