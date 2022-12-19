import axios from 'axios'

export const apiProject = axios.create({
  baseURL: 'http://20.20.0.225:8000/api',
})

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
})
