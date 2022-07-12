import { ApiMain } from '@l2beat/common'
import { Project } from '@l2beat/config'
import React from 'react'

import { getProps } from './props'
import { ProjectPage } from './view/ProjectPage'

export function getProjectPages(projects: Project[], apiMain: ApiMain) {
  return projects.map((project) => ({
    slug: `/projects/${project.slug}`,
    page: <ProjectPage {...getProps(project, apiMain)} />,
  }))
}
