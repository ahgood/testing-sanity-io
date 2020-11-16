export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb284a2885daeee79b87c44',
                  title: 'Sanity Studio',
                  name: 'testing-sanity-io-studio',
                  apiId: '6747fbd6-65d1-4a5c-a76f-8b5f50320fbb'
                },
                {
                  buildHookId: '5fb284a25e7fd5cbe09ba837',
                  title: 'Blog Website',
                  name: 'testing-sanity-io',
                  apiId: 'baca4641-5039-428c-a94d-6ad4f280ccd6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahgood/testing-sanity-io',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://testing-sanity-io.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
