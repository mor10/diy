module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
		    files: {
		      'sass/compiled/style.css': 'sass/style.scss'
		    }
		  },
		  dist: {
		    options: {
		      style: 'compressed',
		      sourcemap: 'none',
		    },
		    files: {
		      'sass/compiled/style_min.css': 'sass/style.scss'
		    }
		  }
		},

		/**
		 * Autoprefixer
		 */
		autoprefixer: {
		    options: {
	      		browsers: ['last 4 versions']
		    },
			// prefix all files
			multiple_files: {
				expand: true,
				flatten: true,
				src: 'sass/compiled/*.css', 
				dest: 'css/' 
			},
	  	},

	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer']
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}