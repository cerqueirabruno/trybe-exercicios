let student = {}

function addProperty(object, key, value) {
    object[key] = value;
};

addProperty(student, 'Nome', 'Bruno');
addProperty(student, 'email:', 'brunocerqueira@hotmail.com')
addProperty(student, 'telefone', '00-1234-56789')
addProperty(student, 'github', 'https://github.com/cerqueirabruno')
addProperty(student, 'linkedin', 'https://www.linkedin.com/in/developerbrunocerqueira/')



console.log(student);