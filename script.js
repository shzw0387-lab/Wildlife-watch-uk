Papa.parse("animaldata.csv", {
  download: true,
  header: true,
  skipEmptyLines: true,

  complete: function(results) {
    const tbody = document.querySelector("#dataTable tbody");

    results.data.forEach(row => {
      const tr = document.createElement("tr");

      const groupCell = document.createElement("td");
      groupCell.textContent = row.AnimalGroup;

      const indexCell = document.createElement("td");
      indexCell.textContent =
        Number(row.RedListIndex).toFixed(4);

      tr.appendChild(groupCell);
      tr.appendChild(indexCell);
      tbody.appendChild(tr);
    });
  },

  error: function(error) {
    console.error("Could not load the CSV:", error);
  }
});