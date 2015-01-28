    module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            files: [
                'Gruntfile.js',
                'app/static/js/**/*.js',
                'test/**/*.js',
                
                //Ignore vendor files
                '!app/static/js/libs/**/*.js'
            ],

            globals: {
                jQuery: true
            }
        },

        compass: {
            compiling: {
                options: {
                    basePath: 'app/static',
                    httpPath: '/',
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'images',
                    javascriptDir: 'js',
                    fontsDir: 'fonts',
                    noLineComments: true,
                    relativeAssets: true,
                    outputStyle: 'compressed'
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },

            target: {
                files: {
                    'app/static/js/build-min.js': ['app/static/js/build.js']
                }
            }
        },

        clean: {
            js: ['static/js/build.js']
        },

        concat: {
            options: {
                separator: ';'
            },

            dist: {
                src: ['static/js/**/*.js'],
                dest: 'static/js/build.js'
            }
        },

        usemin: {
            html: 'index.html'
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: '127.0.0.1',
                    base: 'app/'
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                browsers: ['PhantomJS'],
                port: 9000,
                hostname: '127.0.0.1'
            }
        },

        watch: {
            jshint:{
                files: '<%= jshint.files %>',
                tasks: ['jshint']
            },

            compass:{
                files: ['app/static/sass/**'],
                tasks: ['compass:compiling']
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('deploy', ['compass', 'concat', 'uglify', 'clean', 'usemin']);
};
