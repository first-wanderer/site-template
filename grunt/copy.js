module.exports = function(grunt) {

  grunt.config('copy', {
    build: {
      files: [{
        expand: true,
        cwd: 'source',
        src: [
        'image/**',
        'js/**',
        '*.html'
        ],
        dest: 'build'
      }]
    },
    libs: {
      files: [{
        expand: true,
        cwd: 'bower_components',
        src: [
        'html5shiv/dist/html5shiv.min.js',
        'html5shiv/dist/html5shiv-printshiv.min.js',
        'respond/dest/respond.min.js'
        ],
        dest: 'build/libs'
      }]
    },
    watchhtml: {
      files: [{
        expand: true,
        cwd: 'source',
        src: ['*.html'],
        dest: 'build'
      }]
    },
    watchscript: {
      files: [{
        expand: true,
        cwd: 'source',
        src: ['js/**'],
        dest: 'build'
      }]
    }
  });

};
