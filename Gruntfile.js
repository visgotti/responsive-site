module.exports = function(grunt){
    grunt.initConfig({
        concat:{
            js:{
                src:['js/*.js'],
                dest: 'scripts.js'
            }
        },
        watch:{
            js:{
                files:['src/js/*.js'],
                tasks:['concat:js'],
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    keepalive: true
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['concat', 'watch']);
}