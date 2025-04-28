interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A PR reviewer Notifier',
    description: `A GitHub action that can notify reviewers about PRs, waiting for more than a threshold time.`,
    imgSrc: '/static/PR_notifier.png',
    href: 'https://github.com/oppia/stale-review-request-notifier/',
  },
]

export default projectsData
