let database = require('../data/database_students');
let students = database.students;


exports.listAll = (req, res) => {
    res.status(200).json(students);
};

exports.findById = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID must be a valid number" });
    }

    const student = students.find(student => student.id === id);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
};

// Função para criar um novo aluno
exports.create = (req, res) => {
    const { name, surname, age, course } = req.body;

    if (!name || !surname || !age || !course) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
    const newStudent = { id: newId, name, surname, age, course };

    students.push(newStudent);

    res.status(201).send();
};

// Função para remover um aluno
exports.remove = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID must be a valid number" });
    }

    const index = students.findIndex(student => student.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const [removedStudent] = students.splice(index, 1);
    res.status(200).json(removedStudent);
};
