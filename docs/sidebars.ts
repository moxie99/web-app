import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Crypto Tracker Docs',
      collapsible: false,
      items: [
        'project-setup',
        'api-integration',
        'state-management',
        'challenges',
      ],
    },
  ],
}

export default sidebars
