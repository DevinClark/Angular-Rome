/*jslint node: true*/
/*jslint unparam: true*/
module.exports = function (grunt) {
  "use strict";

  require('load-grunt-tasks')(grunt);

  var username = grunt.option('username'),
  password = grunt.option('password');

  grunt.initConfig({

    // __        __          _            _
    // \ \      / /   __ _  | |_    ___  | |__
    //  \ \ /\ / /   / _` | | __|  / __| | '_ \
    //   \ V  V /   | (_| | | |_  | (__  | | | |
    //    \_/\_/     \__,_|  \__|  \___| |_| |_|
    watch: {
      js: {
        files: [
          'js/*.js',
          'js/**/*.js',
          '!js/portal.js',
          '!js/portal.min.js',
          'node_modules/angular-rome/index.js'
        ],
        tasks: ['browserify'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      css: {
        files: [
          'sass/*.scss',
          'sass/**/*.scss',
          'sass/*.sass',
          'sass/**/*.sass',
          'node_modules/angular-rome/sass/*'
        ],
        tasks: ['sass:dist', 'autoprefixer:dist'],
        options: {
          spawn: true
        }
      },
      templates: {
        files: [
          'templates/**/*.html',
          'templates/*.html'
        ],
        tasks: ['ngtemplates', 'browserify'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      livereload: {
        files: ['css/*.css'],
        options: {
          livereload: true
        }
      }
    },

    //      _                           ____                  _           _
    //     | |   __ _  __   __   __ _  / ___|    ___   _ __  (_)  _ __   | |_
    //  _  | |  / _` | \ \ / /  / _` | \___ \   / __| | '__| | | | '_ \  | __|
    // | |_| | | (_| |  \ V /  | (_| |  ___) | | (__  | |    | | | |_) | | |_
    //  \___/   \__,_|   \_/    \__,_| |____/   \___| |_|    |_| | .__/   \__|
    //                                                           |_|
    browserify: {
      build: {
        files: {
          'js/portal.js': [
          'js/app.js'
        ]
        },
        options: {
          transform: ['brfs']
        }
      }
    }
    uglify: {
      options: {
        mangle: false
      },
      build: {
        files: {
          'js/portal.min.js': ['js/portal.js']
        }
      }
    },

    eslint: {
      options: {
        config: '.eslintrc'
      },
      all: [
        'index.js'
      ]
    },

    //   ____   ____    ____
    //  / ___| / ___|  / ___|
    // | |     \___ \  \___ \
    // | |___   ___) |  ___) |
    //  \____| |____/  |____/
    sass: {
      options: {
        quiet: true
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/ng-rome.css': 'sass/rome.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/ng-rome.css': 'sass/rome.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ["last 2 versions", "> 1%", "ie 9"]
      },
      dist: {
        options: {},
        src: 'dist/ng-rome.css'
      }
    }
  );

  grunt.registerTask('default', []);
  grunt.registerTask('build', [
    'sass:dist',
    'autoprefixer',
    'ngAnnotate',
    'ngtemplates',
    'browserify',
    'uglify'
  ]);

};
