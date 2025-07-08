export type ProjectType = {
  href: string
  title: string
  src: string
  framework: string
  features: string
  skills: string
}

export type ProjectsProps = {
  projects: ProjectType[]
}
