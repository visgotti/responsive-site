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
    })

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'watch']);
}