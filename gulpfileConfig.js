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


//全局安装: npm install gulp -g (gulp插件)
//本地安装: npm install gulp --save-dev (gulp插件)
//本地安装: npm install gulp-concat --save-dev (合并插件)
//本地安装：npm install gulp-uglify --save-dev (压缩插件)
//版本：gulp -v 
//执行：gulp taskName

var fs = require('fs');
var gp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//压缩设置
var options_uglify = {
    //不混淆变量名false 
    mangle: false,
    //排除混淆关键字
    compress: {
        sequences: true, //使用逗号操作符加入连续的简单语句
        properties: true, //使用点好重写属性访问，例如foo["bar"] → foo.bar
        dead_code: true, //移除不可达的代码
        drop_debugger: true, //移除调试器和调试语句
        conditionals: true, //为if -else 和条件表达式应用优化
        evaluate: true, //尝试去计算常量表达式
        booleans: true, //多种针对布尔上下文的优化，例如 !!a ? b : c → a ? b : c
        loops: true, //当我们可以静态的判断条件的取值时，针对do,while和for循环的优化
        unused: true, //去掉没有被引用过的函数和变量
        hoist_funs: true, // 提升函数声明
        if_return: true, //这对 if/return 和 if/continue 的优化
        inline: true,//内嵌简单方法
        join_vars: true, //加入连续的var语句
        drop_console: true, //默认为false.  传入true会丢弃对console.函数的调用.
        comparisons: true, //针对二进制节点应用某些特定的优化，例如:!(a <= b) → a > b (只在不安全时), 尝试去否认二进制节点，例如.a = !b && !c && !d && !e → a=!(b||c||d||e) 等等.
        unsafe: false //应用“不安全”的转换
    }
};

gp.task("taskName", function () {
    // 把1.js和2.js合并压缩为main.js，输出到dest/js目录下
    gp.src([
        './bin/1.js',
        './bin/2.js',
        './bin/3.js',
        './bin/4.js'
    ])
        .pipe(concat('main.js'))//输出合并后的js
        .pipe(uglify(options_uglify))//压缩
        .pipe(gp.dest('./bin/release/'))//输出目录
        .on('end', callback);//结束事件回调
});

//检查文件体积
function callback() {
    var path = "./bin/release/main.js";
    var exists = fs.existsSync(path);
    if (!exists) {
        return;
    }
    var states = fs.statSync(path);
    console.log("输出文件体积：" + Math.ceil(states.size / 1024) + "kb");
}  
