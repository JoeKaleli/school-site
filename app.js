const Searchbar = document.querySelector('.Searchbar');

Searchbar.addEventListener('click', function(event) {
    const searchName = document.getElementById('searchInput').value.trim();
    const searchId = parseInt(document.getElementById('searchId').value);

    const classes = [
        { name: "John Joe", id: 1 },
        { name: "Nomsa Wambuku", id: 2 }
    ];

    let foundClass = null;

    for (const classItem of classes) {
        if (classItem.name === searchName && classItem.id === searchId) {
            foundClass = classItem;
            break;
        }
    }

    if (foundClass !== null) {
        console.log("Found class:", foundClass);
    } else {
        console.log("Class not found.");
    }
});

// Note: You should remove one of the duplicate `searchStudent()` function definitions.
// Here, I'll remove the second definition.

// Function to perform student search
function searchStudent() {
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
        searchResultsDiv.appendChild(studentDiv);
    });
}




