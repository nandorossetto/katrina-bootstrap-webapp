module.exports = function(config){
    config.set({
        autoWatch: true,

        frameworks: ['jasmine'],
        
        browsers: ['PhantomJS', 'PhantomJS_custom'],

        files : [
            'app/static/js/libs/angular.js',
            'app/static/js/libs/angular-mock.js',
            'app/static/js/libs/angular-route.js',

            'app/static/js/controllers/**/*.js',
            'test/**/*.js'
        ],

        exclude: [],

        plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ],

        singleRun: false,
    });
};