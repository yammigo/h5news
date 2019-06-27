//guulp 自动化任务部署
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
	  less = require('gulp-less');
    // imgmin = require('gulp-imagemin'),
    // rename = require('gulp-rename'),
	  // uglify = require('gulp-uglify'),
  	// htmlmin = require('gulp-htmlmin'),
	  // px2rem = require('gulp-px2rem-plugin'),
    // cssUglify = require('gulp-minify-css'),
    // autoprefixer = require('gulp-autoprefixer'),
    // concat = require("gulp-concat"),
    // serve = require('gulp-connect');
    
  //编译less  
  gulp.task('comless',function () {
	gulp.src('src/lecss/*.less')
		.pipe(less())
		.pipe(px2rem({
			baseDpr:1,             // base device pixel ratio (default: 2)
			threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
			remVersion: true,       // whether to generate rem version (default: true)
			remUnit: 75,            // rem unit value (default: 75)
			remPrecision: 6         // rem precision (default: 6)
		  }))
		.pipe(autoprefixer({
         browsers: ['last 2 versions'], //浏览器前缀
         cascade: false
        }))
		.pipe(gulp.dest('src/dist/css'));
  });

// gulp.task('rename', function () {
//     gulp.src('src/js/*.js')
//     .pipe(uglify())  //压缩
//     .pipe(rename('*.min.js')) //会将jquery.js重命名为jquery.min.js
//     .pipe(gulp.dest('src/dist/js'));
//     //关于gulp-rename的更多强大的用法请参考https://www.npmjs.com/package/gulp-rename
// });

// //图片压缩
// gulp.task('imgmin',function () {
// 	gulp.src('src/img/*.{jpg,png,gif}')
// 		.pipe(imgmin())
// 		.pipe(gulp.dest('src/dist/img'));
// });
// //js压缩
// gulp.task('minjs',function () {
// 	gulp.src('src/js/*.js')
//         .pipe(uglify())
// 		.pipe(gulp.dest('src/dist/js'));
// });
// //css压缩
// gulp.task('mincss',function () {
// 	gulp.src('src/css/*.css')
// 		.pipe(cssUglify())
// 		.pipe(gulp.dest('src/dist/css'));
// });
// //html压缩
// gulp.task('htmlmin',function () {
// 	gulp.src('src/*.html')
// 		.pipe(htmlmin({collapseWhitespace: true}))
// 		.pipe(gulp.dest('dist/'));
// });
// //合并js
// gulp.task('concat', function () {
//     gulp.src('src/js/*.js')  //要合并的文件
//     .pipe(concat('src/common.js'))  // 合并匹配到的js文件并命名为 "all.js"
//     .pipe(gulp.dest('src/dist/js'));
// });
// //默认任务
gulp.task('default',['comless'],function(){
	 console.log('adadad')
});

// //开启服务
// gulp.task('serve', function() {
//     serve.server({
//       root: 'app',
//       livereload: true
//     });
// })
//监听任务
gulp.task('watch',function () {
	gulp.watch('src/css/*.less','comless');
});