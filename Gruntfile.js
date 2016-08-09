module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    run: {
      buildJS: {
        cmd: './scripts/build',
        args: ['js']
      },
      buildMinJS: {
        cmd: './scripts/build',
        args: ['minjs']
      },
      buildHTML: {
        cmd: './scripts/build',
        args: ['html']
      },
      buildCSS: {
        cmd: './scripts/build',
        args: ['css']
      },
      buildImages: {
        cmd: './scripts/build',
        args: ['images']
      },
      buildData: {
        cmd: './scripts/build',
        args: ['data']
      },
      buildFonts: {
        cmd: './scripts/build',
        args: ['fonts']
      },
      buildDev: {
        cmd: './scripts/build',
        args: ['dev']
      },
      buildProd: {
        cmd: './scripts/build',
        args: ['prod']
      }
    },
    watch: {
      js: {
        files: ['app/javascript/**/*.js'],
        tasks: ['run:buildJS'],
        options: {
          interrupt: true,
          debounceDelay: 1000
        }
      },
      html: {
        files: ['app/html/**/*.html'],
        tasks: ['run:buildHTML'],
        options: {
          interrupt: true,
          debounceDelay: 1000
        }
      },
      css: {
        files: ['app/stylesheets/**/*.css'],
        tasks: ['run:buildCSS'],
        options: {
          interrupt: true,
          debounceDelay: 1000
        }
      },
      images: {
        files: ['app/images/**/*'],
        tasks: ['run:buildImages'],
        options: {
          interrupt: true,
          debounceDelay: 1000
        }
      },
      data: {
        files: ['app/html/**/*'],
        tasks: ['run:buildData'],
        options: {
          interrupt: true,
          debounceDelay: 1000
        }
      },
      fonts: {
        files: ['app/fonts/**/*'],
        tasks: ['run:buildFonts'],
        options: {
          interrupt: true,
          debounceDelay: 1000
        }
      }
    }
  });

  grunt.registerTask('dev', ['run:buildDev', 'watch']);
  grunt.registerTask('prod', ['run:buildProd']);
};
