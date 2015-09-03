module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./public/less"],
                    yuicompress: true
                },
                files: {
                    "./public/css/style.css": "./public/less/style.less"
                }
            }
        },
        watch: {
            files: "./public/less/**/*",
            tasks: ["less"]
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default','watch');
};
