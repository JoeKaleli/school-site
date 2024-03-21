// Fetch student data from JSON file
async function fetchStudentsData() {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    return data;
}

// Function to perform student search
async function searchStudent() {
    const students = await fetchStudentsData();
    
    // Get input values
    const searchName = document.getElementById('searchName').value.trim();
    const searchId = parseInt(document.getElementById('searchId').value);

    // Filter students based on search query
    const matchedStudents = students.filter(student => {
        return student.name.toLowerCase().includes(searchName.toLowerCase()) ||
               student.id === searchId;
    });

    // Display search results
    displaySearchResults(matchedStudents);
}

// Function to display search results
function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        searchResultsDiv.textContent = "No matching students found.";
        return;
    }

    // Create a container for the search results
    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('searchResultsContainer');

    // Iterate through matched students and display their information
    results.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');

        // Create elements for student information
        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${student.name}`;
        studentDiv.appendChild(nameElement);

        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${student.id}`;
        studentDiv.appendChild(idElement);

        const imageElement = document.createElement('img');
        imageElement.src = student.image;
        studentDiv.appendChild(imageElement);

        const classElement = document.createElement('p');
        classElement.textContent = `Class: ${student.class}`;
        studentDiv.appendChild(classElement);

        // Append student info to search results container
        resultsContainer.appendChild(studentDiv);
    });

    // Append search results container just below the search bar
    const searchRightDiv = document.querySelector('.hero_right');
    searchRightDiv.appendChild(resultsContainer);
}
