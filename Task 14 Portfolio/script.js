const projects = [
    {
        "name": "Task Master",
        "description": "A task management app with user authentication and task assignment.",
        "link": "https://github.com/notjawad404/Task-Master",
        "image": "https://static.vecteezy.com/system/resources/previews/006/506/843/original/unique-modern-flat-design-concept-of-task-management-for-website-and-mobile-website-easy-to-edit-and-customize-illustration-free-vector.jpg"
    },
    {
        "name": "Blog Verse",
        "description": "A blogging platform where users can share and view blogs.",
        "link": "https://github.com/notjawad404/Blog-Verse",
        "image": "https://img.freepik.com/free-photo/blog-website-development-data-network-concept_53876-125055.jpg"
    },
    {
        "name": "Mr. Recipe",
        "description": "A food recipe website where users can share and view recipes.",
        "link": "https://github.com/notjawad404/MrRecipe",
        "image": "https://img.freepik.com/free-psd/pancakes-bakery-landing-page-template_197582-340.jpg"
    },
    {
        "name": "Atinity Solutions",
        "description": "A web development agency offering digital solutions.",
        "link": "https://github.com/notjawad404/AtinitySolutions",
        "image": "https://cdn.prod.website-files.com/606a802fcaa89bc357508cad/61701b4e166c837543d8f0ce_2_How%20To%20a%20Create%20Personal%20Portfolio%20Website.png"
    }
];

function displayProjects(filteredProjects) {
    const projects = document.getElementById('projects');
    projects.innerHTML = '';

    filteredProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-card');

        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projects.appendChild(projectItem);
    });
}

function sortProjects(order) {
    const sortedProjects = projects.sort((a, b) => {
        if (order === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    displayProjects(sortedProjects);
}

function searchProjects(query) {
    const filteredProjects = projects.filter(project => 
        project.name.toLowerCase().includes(query.toLowerCase())
    );
    displayProjects(filteredProjects);
}

document.getElementById('sort').addEventListener('change', function() {
    const sortOrder = this.value;
    sortProjects(sortOrder);
});

document.getElementById('search').addEventListener('input', function() {
    const searchQuery = this.value;
    searchProjects(searchQuery);
});

displayProjects(projects);
