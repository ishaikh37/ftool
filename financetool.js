// Function to create and append the button to the financetool div
    function createButton() {
        var financetoolDiv = document.getElementById("financetool");

        // Create and append the Bootstrap button
        var addButton = document.createElement("button");
        addButton.id = "customButton";
        addButton.className = "btn btn-primary"; // Bootstrap button styling
        addButton.innerHTML = "Add to Finance";
        addButton.setAttribute("data-toggle", "modal");
        addButton.setAttribute("data-target", "#customModal");
        financetoolDiv.appendChild(addButton);
    }

    // Function to create and append the Bootstrap modal to the financetool div
    function createBootstrapModal() {
        var financetoolDiv = document.getElementById("financetool");

        // Create and append the Bootstrap modal
        var modalDiv = document.createElement("div");
        modalDiv.id = "customModal";
        modalDiv.className = "modal fade";

        var modalDialogDiv = document.createElement("div");
        modalDialogDiv.className = "modal-dialog";

        var modalContentDiv = document.createElement("div");
        modalContentDiv.className = "modal-content";

        var modalHeaderDiv = document.createElement("div");
        modalHeaderDiv.className = "modal-header";

        var closeModalButton = document.createElement("button");
        closeModalButton.type = "button";
        closeModalButton.className = "close";
        closeModalButton.setAttribute("data-dismiss", "modal");
        closeModalButton.innerHTML = "&times;";

        var modalTitle = document.createElement("h4");
        modalTitle.className = "modal-title";
        modalTitle.innerHTML = "User List";

        modalHeaderDiv.appendChild(closeModalButton);
        modalHeaderDiv.appendChild(modalTitle);

        var modalBodyDiv = document.createElement("div");
        modalBodyDiv.className = "modal-body";

        // Create and append a button inside the modal body
        var modalButton = document.createElement("button");
        modalButton.type = "button";
        modalButton.className = "btn btn-success"; // Customize button styling
        modalButton.innerHTML = "Get Users List";
        modalButton.addEventListener("click", function() {
            // Call your custom function here
            fetchDataAndDisplayTable();
        });

        modalBodyDiv.appendChild(modalButton);

        // Create and append the table for displaying API data
        var table = document.createElement("table");
        table.className = "table table-bordered";
        table.id = "apiDataTable";

        modalBodyDiv.appendChild(table);

        // Create and append the button below the table
        var openFinancePayButton = document.createElement("button");
        openFinancePayButton.type = "button";
        openFinancePayButton.className = "btn btn-info"; // Sky blue color
        openFinancePayButton.innerHTML = "Open Finance Pay";
        openFinancePayButton.style.display = "none"; // Initially hidden
        openFinancePayButton.addEventListener("click", function() {
            // Open a new Google link in a new tab
            window.open("https://www.google.com", "_blank");
        });

        modalBodyDiv.appendChild(openFinancePayButton);

        modalContentDiv.appendChild(modalHeaderDiv);
        modalContentDiv.appendChild(modalBodyDiv);

        modalDialogDiv.appendChild(modalContentDiv);
        modalDiv.appendChild(modalDialogDiv);

        financetoolDiv.appendChild(modalDiv);
    }

    // Function to fetch data from the API and display it in a table
    function fetchDataAndDisplayTable() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                // Display only the first 3 records in the table
                displayDataInTable(data.slice(0, 3));

                // Show the "Open Finance Pay" button
                document.querySelector("#customModal .btn-info").style.display = "block";
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function to display data in a table
    function displayDataInTable(data) {
        var tableBody = document.getElementById("apiDataTable");

        // Clear existing table content
        tableBody.innerHTML = "";

        // Create table header
        var thead = document.createElement("thead");
        var headerRow = document.createElement("tr");

        ["Name", "Username", "Email"].forEach(headerText => {
            var th = document.createElement("th");
            th.appendChild(document.createTextNode(headerText));
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        tableBody.appendChild(thead);

        // Create table body
        var tbody = document.createElement("tbody");

        data.forEach(item => {
            var row = document.createElement("tr");

            ["name", "username", "email"].forEach(key => {
                var cell = document.createElement("td");
                cell.appendChild(document.createTextNode(item[key]));
                row.appendChild(cell);
            });

            tbody.appendChild(row);
        });

        tableBody.appendChild(tbody);
    }

    // Call the functions to create and append the button and modal
    createButton();
    createBootstrapModal();
