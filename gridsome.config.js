// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pure Drop',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          }
        }
      }
    },
    {
      use: "gridsome-plugin-netlify-cms",
      options: {
        publicPath: "/admin",
        modulePath: `src/admin/index.js`
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"]
    }
  }
}
