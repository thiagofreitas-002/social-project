import axios from 'axios'

export const apiProject = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
})
