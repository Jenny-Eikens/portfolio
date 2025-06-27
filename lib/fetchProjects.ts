import fs from 'fs'
import path from 'path'

export async function fetchProjects() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data.json')
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileContent)
    if (!data) {
      throw new Error('Failed to retrieve data')
    }
    return data
  } catch (err) {
    console.error('Failed to fetch data: ', err)
    return null
  }
}
