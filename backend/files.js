import { writeFileSync, readFileSync } from 'node:fs'

const users = [{ name: 'Andrew Apollo', email: 'andthetank@icloud.com' }]

const usersJson = JSON.stringify(users)
writeFileSync('users.json', usersJson)

const readUsersJson = readFileSync('users.json')
const readUsers = JSON.parse(readUsersJson)

console.log(readUsers)
