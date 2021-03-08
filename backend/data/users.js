import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Ali Sayar',
    email: 'alisayar0107@gmail.com',
    password: bcrypt.hashSync('adana0101', 10),
    isAdmin: true,
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
  },
];

export default users;
