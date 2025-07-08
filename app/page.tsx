import { fetchProjects } from '@/lib/fetchProjects'
import Homepage from './components/Homepage/Homepage'
import type { ProjectType } from '@/types/projects'

const Home = async () => {
  const projects: ProjectType[] = await fetchProjects()
  return <Homepage projects={projects} />
}

export default Home
