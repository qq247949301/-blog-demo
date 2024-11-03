import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { getEnUSNav } from '../navs'
import { getEnUSSidebar } from '../sidebars'

// https://vitepress.dev/reference/site-config
export const enUSConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: '老付的博客',
  title: '老付',
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    darkModeSwitchLabel: 'Theme',
    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
    lastUpdatedText: 'Last updated',
    nav: getEnUSNav(),
    outline: {
      level: [2, 6],
      label: 'List',
    },
    returnToTopLabel: 'Return to the top',
    sidebarMenuLabel: 'Menu',
    sidebar: getEnUSSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
}
