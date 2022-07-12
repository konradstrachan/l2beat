import { ApiMain } from '@l2beat/common'
import { Project } from '@l2beat/config'

import { HeaderProps } from '../../../common'
import { formatUSD, getFromEnd, getPercentageChange } from '../../../utils'

export function getHeader(project: Project, apiMain: ApiMain): HeaderProps {
  const daily = apiMain.projects[project.name]?.charts.daily.data ?? []
  const tvl = getFromEnd(daily, 0)?.[1] ?? 0
  const tvlSevenDaysAgo = getFromEnd(daily, 7)?.[1] ?? 0
  const sevenDayChange = getPercentageChange(tvl, tvlSevenDaysAgo)

  return {
    icon: `/icons/${project.slug}.png`,
    title: project.name,
    titleLength: getTitleLength(project.name),
    tvl: formatUSD(tvl),
    sevenDayChange,
  }
}

function getTitleLength(name: string): 'long' | 'very-long' | undefined {
  switch (name) {
    case 'Optimism':
    case 'DeversiFi':
    case 'Immutable X':
      return 'long'
    case 'OMG Network':
    case 'Layer2.Finance':
    case 'ZKSwap V2':
    case 'Polygon Hermez':
    case 'Metis Andromeda':
      return 'very-long'
  }
}
