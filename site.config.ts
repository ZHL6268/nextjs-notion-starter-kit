import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ada987d82cd44084820e241fa5c69b37?pvs=4',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  // rootNotionSpaceId: 'fde5ac74eea345278f004482710e1af3',

  // basic site info (required)
  name: 'ZHL-note',
  domain: 'https://pepper-zinc-183.notion.site/Getting-Started-ada987d82cd44084820e241fa5c69b37?pvs=4',
  author: 'ZHL',

  // open graph metadata (optional)
  description: 'ZHL-note',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'ZHL6268',
  linkedin: 'zhihanli6268',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fi.ibb.co%2FFgKqQ4J%2FWechat-IMG472.png?table=block&id=ada987d8-2cd4-4084-820e-241fa5c69b37&spaceId=3ce19e5f-61e7-4f28-b101-335363351825&width=250&userId=a040b2b8-4ea7-4a5e-bd55-5fa88af7f5b4&cache=v2',
  defaultPageCover: 'https://www.notion.so/images/page-cover/rijksmuseum_mignons_1660.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '8d0062776d0c4afca96eb1ace93a7538'
    },
    {
      title: 'Contact',
      pageId: '9a7ddf2973444067bbc5ce0a4e0e0058'
    }
  ]
})
