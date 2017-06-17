module.exports = function(grunt) {
var serveStatic = require('serve-static');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
      connect: {
        options: {
          port:9001,
          hostname:'*',
          livereload:9002,
          open: false,
        },
        proxies: [
          {
            context: ['/api'],
            host: '127.0.0.1',
            port: 3002,
            https: false
          }
        ],
      development: {
        options: {
          middleware: function( connect ) {
            return [
              require('grunt-connect-proxy/lib/utils').proxyRequest,
              require('connect-livereload')(),
              serveStatic('.', {
                'setHeaders': function( res, path ) {
                  if ( !!path.match(/\.json$/) ) {
                    res.setHeader( 'Content-Type', 'application/json; charset=utf-8' );
                  }
                }
              })];
            }
          }
        }
    },
    watch: {
      options: {
        livereload:9002
      },
      html: {
        files: ["./index.html"]
      },
      templates: {
        files: ["app/**/*.html"],
        tasks: ["concat:generated"]
      },
      js: {
        files: [ "app/*.js", "app/**/*.js" ],
        tasks: [ "concat:generated" ]
      },
      css: {

        files:  ["app/*.css", "app/**/*.css"],
        tasks: [ "concat:generated" ]
      }
    },
   concat: {
     generated: {
       files: [
         {
           dest: './app.js',
           src: [
             'app/**/*.js'
           ]
         },
         {
           dest:'./app.css',
           src: [
             'app/**/*.css'
           ]
         }
       ]
     }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', [
    'configureProxies',
    'connect:development',
    'concat:generated',
    'uglify',
    'watch'
  ]);

};
