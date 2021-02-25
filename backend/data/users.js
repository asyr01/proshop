import bcyrpt from 'bcryptjs';

const users = [
    {
        name: 'Ali Sayar',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234564', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'johnd@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'janed@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;