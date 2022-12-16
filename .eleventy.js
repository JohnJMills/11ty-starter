/**
 * 11ty Config
 * See: https://www.11ty.dev/docs/config/ 
 */

module.exports = function(config) {

  // add assets to the watch folder list
  config.addWatchTarget("./src/assets/")

  // pass through copy media files 
  config.addPassthroughCopy("./src/assets/images/")

  // configure the dev server options
  config.setServerOptions({
    port: 8080,
  });

  return {
    dir: {
      input: "src",
      output: ".build",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
    },
  }
}