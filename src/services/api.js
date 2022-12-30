import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const apiProject = axios.create({
  baseURL: `${API_URL}/api`,
})

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
})
