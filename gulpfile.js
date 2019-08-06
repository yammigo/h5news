//guulp 自动化任务部署
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
	less = require('gulp-less'),
	imgmin = require('gulp-imagemin'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	px2rem = require('gulp-px2rem-plugin'),
	cssUglify = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	gutil = require('gulp-util');
var fs = require('fs');
var config_c = require('./config.js');
var channelList = ['kh1'];
function FileSize(filePath, dir) {
	var path = filePath;
	var exists = fs.existsSync(path);
	if (!exists) {
		return;
	}
	var states = fs.statSync(path);
	console.log(dir + "输出文件体积：" + Math.ceil(states.size / 1024) + "kb");
}
gulp.task('comless', function () {
	gulp.src('webview/src/less/*.less')
		.pipe(less())
		.pipe(px2rem({
			'width_design': 375,
			'valid_num': 6,
			'pieces': 10,
			'ignore_px': [1, 2],
			'ignore_selector': ['.class1'],
			'if_use_flexible': true
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'], //浏览器前缀
			cascade: false
		}))
		.pipe(gulp.dest("webview/src/css/"));
});

gulp.task('watch', function () {
	gulp.watch('webview/src/less/*.less', ['comless']);
});

gulp.task('imgmin', function () {
	gulp.src('webview/src/img/*.{jpg,png}')
		.pipe(imgmin())
		.pipe(gulp.dest('webview/dist/static/img'));
});

//压缩js
gulp.task('minjs', function () {
	channelList.forEach(function (dir) {
		(function (dir) {
			gulp.src(dir + '/dist/js/news.js')
				.pipe(uglify())
				.on('error', function (err) {
					gutil.log(gutil.colors.red('[Error]'), err.toString());
				})
				.pipe(gulp.dest(dir + '/dist/js_dev/'));
		})(dir);
	})

	console.log("执行完毕压缩代码");
});

//合并js
//压缩设置
var options_uglify = {
	//不混淆变量名false 
	mangle: { except: ['$', 'exports', 'module', 'require'] },
	//排除混淆关键字
	compress: true,
	drop_console: true,
};
var callback = function (dir) {
	var path = dir + '/dist/minjs/main.js';
	var exists = fs.existsSync(path);
	if (!exists) {
		return;
	}
	var states = fs.statSync(path);
	console.log("输出文件体积：" + Math.ceil(states.size / 1024) + "kb");
}
gulp.task('concat', function () {
	channelList.forEach(function (dir) {
		(function (dir) {
			gulp.src([
				dir + '/dist/js/mescroll.js',
				dir + '/dist/js/jquery.js',
				dir + '/dist/js/channel_name.js',
				dir + '/dist/js/rem.js',
				dir + '/dist/js/report.js',
				dir + '/dist/js/adtype.js',
				// dir + '/dist/js/news.js',
				// dir + '/dist/js/details.js'
			])
				.pipe(concat('main.js'))//输出合并后的js
				.pipe(uglify())//压缩
				.pipe(gulp.dest(dir + '/dist/minjs/'));

			   FileSize(dir+'/dist/minjs/main.js',dir+"_main.js");

		})(dir)
		;(function(dir){
			   gulp.src([
				dir + '/dist/js/news.js',
				// dir + '/dist/js/details.js'
			   ])
				.pipe(uglify())//压缩
				.pipe(gulp.dest(dir + '/dist/minjs/'));

			   FileSize(dir+'/dist/minjs/news.js',dir+"_news.js");

		})(dir)
		;(function(dir){
			gulp.src([
			//  dir + '/dist/js/news.js',
			 dir + '/dist/js/details.js'
			])
			 .pipe(uglify())//压缩
			 .pipe(gulp.dest(dir + '/dist/minjs/'));

			FileSize(dir+'/dist/minjs/details.js',dir+"_details.js");

	   })(dir)
	})
})



gulp.task('mincss', function () {
	gulp.src('webview/css/*.css')
		.pipe(cssUglify())
		.pipe(gulp.dest('css'));
});

gulp.task('htmlmin', function () {
	gulp.src('webview/src/*.html')
		.pipe(htmlmin())
		.pipe(gulp.dest('webview/dist/'));
});
//默认任务
gulp.task('default', ['comless']);
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径
//渠道打包配置
gulp.task("build", function () {
	channelList.forEach(function (dir) {
		(function (dir) {
			//打包渠道图片
			gulp.src('webview/dist/img/*')
				.pipe(gulp.dest(dir + '/dist/img'));
			//打包渠道css
			gulp.src('webview/dist/css/*')
				.pipe(gulp.dest(dir + '/dist/css'));
			//打包渠道js
			gulp.src('webview/dist/js/*')
				.pipe(gulp.dest(dir + '/dist/js'));
			//打包渠道html
			gulp.src('webview/*.html')
				.pipe(gulp.dest(dir + '/'));
			//生成测试html
			gulp.src('webview/testHTML/*.html')
				.pipe(gulp.dest(dir + '/testHTML/'));

		})(dir);
	})
	console.log('记得执行config任务😯');
})
//更新js文件
gulp.task('v-js', function () {

})
//更新指定的渠道版本号
gulp.task('v-html', function () {

})
//生成渠道配置文件
gulp.task('config', function () {
	channelList.forEach(function (dir) {
		//写入渠道名称
		(function (dir) {
			//渠道名称
			var w_data = 'var CHANNEL_NAME="' + dir + '";';
			//渠道代码位
			var w_config = 'var ZZJK_adConfig={"' + dir + '":' + JSON.stringify(config_c[dir]) + '};'
			//写入渠道名称
			fs.open(dir + "/dist/js/channel_name.js", "w", function (err, fd) {
				fs.write(fd, w_data, { 'flag': 'a' }, function (err) {
					if (err) {
						throw err;
					}
					console.log('渠道名' + dir + '写入成功');

				});
			});
			//写入渠道配置文件
			fs.open(dir + "/dist/js/config.js", "w", function (err, fd) {
				fs.write(fd, w_config, { 'flag': 'a' }, function (err) {
					if (err) {
						throw err;
					}
					console.log('渠道' + dir + '广告配置写入成功');
				});

			})

		})(dir);
		//写入读取渠道配置然后写入

	})
})