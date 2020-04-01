
      const filters = require('./_utils/filters.js');
      
      module.exports = function(eleventyConfig) {

        const references = JSON.parse('{}');

        filters(eleventyConfig, references);

        eleventyConfig.addPassthroughCopy("static/**");
        eleventyConfig.addPassthroughCopy("admin/**");
        
        return {
          dir: {
            input: "site",
            includes: "_views",
            output: "public"
          }
        };
      };