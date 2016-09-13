'use strict';

const path = require('path');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');
const serve = serveStatic(__dirname+'/public', { 'index': ['index.html', 'index.htm'] });


module.exports = (grunt) => {
  grunt.initConfig({
    env: {
      prod: {
        NODE_ENV: 'production',
      },
      dev: {
        NODE_ENV: 'development',
      },
    },
    // jshint: {
    //   options: {
    //     jshintrc: '.jshintrc',
    //   },
    //   all: [
    //     '!app/doc/**/*.js',
    //     'Gruntfile.js',
    //     'src/**/*.js',
    //     'test/**/*.js',
    //     'package.json',
    //   ],
    // },
    browserify: {
      dist: {
        files: [{
          expand: true,
          cwd: '',
          src: ['index.ios.js'],
          dest: '../public/web/build',
          rename: function (dest, src) {
            var finallocation = path.join(dest, src);
            finallocation = finallocation.replace('ios.js', 'ios_build.js');
            // finallocation = finallocation.replace('resources', 'public');
            finallocation = path.resolve(finallocation);
            return finallocation;
          },
        }],
        options: {
          transform: [
            ['babelify', {
              presets: ['es2015', 'react'],
            }],
            [ 'aliasify', {
              aliases: { 'react-native' : 'react-web', },
            }]
          ],
        },
      },
    },
    uglify: {
      options: {
        sourceMap: true,
        compress: {
          drop_console: false,
        },
      },
      all: {
        files: [{
          expand: true,
          cwd: '../public/web/build',
          src: ['**/*_build.js'],
          dest: '',
          rename: function (dest, src) {
            var finallocation = path.join(dest, src);
            finallocation = finallocation.replace('_build', '.min');
            finallocation = path.resolve(finallocation);
            return finallocation;
          },
        }],
      },
    },
    connect: {
      server: {
        options: {
          port: 3001,
          base: {
            path: 'web/build',
            options: {
              index: 'index.html',
              maxAge: 300000,
            },
          },
          debug: true,
          // keepalive: true,
          middleware: [
            function myMiddleware(req, res, next) {
              console.log('middleware call');
              next();
            },
            function staticFiles(req, res) {
              serve(req, res, finalhandler(req, res));
            },
          ],
        },
      },
    },
    watch: {
      options: {
        interrupt: true,
      },
      // css: {
      //   files: ['public/stylesheets/**/*.less'],
      //   tasks: ['newer:less']
      // },
      js: {
        files: ['**/*.js','**/*.jsx'],
        tasks: ['env', 'browserify', 'uglify'],
      },
    },
  });

  // Loading dependencies
  for (var key in grunt.file.readJSON('package.json').devDependencies) {
    if (key.indexOf('grunt') === 0 && key !== 'grunt') {
      grunt.loadNpmTasks(key);
    }
  }
  // grunt.registerTask('doc', 'jsdoc');
  // grunt.registerTask('test', 'mocha_istanbul');
  grunt.registerTask('lint', 'jshint');
  grunt.registerTask('default', ['connect', 'watch']);
};