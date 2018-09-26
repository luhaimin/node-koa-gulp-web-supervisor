/**
 * Created by 62766 on 2018/7/3.
 */

var gulp = require("gulp"),
    htmlmin = require('gulp-htmlmin'),
    clean = require('gulp-clean'),
    sequence = require("run-sequence"),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    assetRev = require('gulp-asset-rev'),
    // gulpCopy = require('gulp-copy'),
    browserSync = require('browser-sync').create();

var entry_path = {
    js: ["./develop/js/**/*"],
    ejsPath: ["./develop/views/**/*"],
    sassPath: "./develop/sass/**/*",
    libPath: ["./develop/lib/**/*"]
}

var output_path = {
    jsPath: "./static/js/",
    ejsPath: ["./views/"],
    cssPath: "./static/css"
}

//清除sass
gulp.task("clean:css", function () {
    return gulp.src(output_path.cssPath, {read: false})
        .pipe(clean({
            force: true
        }));
})

gulp.task("build:sass", function () {
    return gulp.src(entry_path.sassPath, {})
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['iOS >= 7', 'Android >= 4.1'],
            // browsers: ['iOS >= 7', 'Android >= 4.1','last 2 Explorer versions',"Firefox >= 20"],
            // browsers: ['>1%'],cascade: false
            // csacsde:true,    //csacsde和remove取兼容最近两个版本的功效
            // remove:false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest(output_path.cssPath))
        .pipe(browserSync.stream())
})

//清除ejs----------------------------------------
gulp.task("clean:html", function () {
    return gulp.src(output_path.ejsPath, {})
        .pipe(clean({
            force: true
        }));
})

//压缩html
gulp.task("html:build", function () {
    return gulp.src(['./develop/views/**/*.html'])
		.pipe(htmlmin({
		 removeComments: true,//清除HTML注释
		 collapseWhitespace: true,//压缩html
		 removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
		 minifyJS: true,//压缩页面JS
		 minifyCSS: true//压缩页面CSS
		 }))
        .pipe(assetRev())
        .pipe(gulp.dest('./views/'))
        .pipe(browserSync.stream())


})

/*.pipe(htmlmin({
 removeComments: true,//清除HTML注释
 // collapseWhitespace: true,//压缩html
 removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
 minifyJS: true,//压缩页面JS
 minifyCSS: true//压缩页面CSS
 }))*/

//清除js-----------------------------------------js
gulp.task("clean:js", function () {
    return gulp.src(output_path.jsPath, {read: false})
        .pipe(clean({
            force: true
        }));
})

//压缩js
gulp.task("build:js", function () {
    return gulp.src(["./develop/js/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest(output_path.jsPath))
        .pipe(browserSync.stream())
})

//清除第三方css、js库--------------------------------
gulp.task("clean:lib", function () {
    return gulp.src(["./static/lib/"], {read: false})
        .pipe(clean({
            force: true
        }))
})

//复制
gulp.task("copy:lib", function () {
    return gulp.src(["./develop/lib/**/*"])
        .pipe(gulp.dest("./static/lib/"))
        .pipe(browserSync.stream())

})


//同步到浏览器--------------------------------------
gulp.task("build:brower", function () {
    browserSync.init({
        proxy: "http://localhost:3000"    //代理、监听node开发3000端口

    });

})

//执行顺序---------------------------
gulp.task("watch:html", function () {
    sequence("clean:html", ["html:build"])
})
gulp.task("watch:sass", function () {
    sequence("clean:css", ["build:sass"])
})

gulp.task("watch:js", function () {
    sequence("clean:js", ["build:js"])
})

gulp.task("watch:lib", function () {
    sequence("clean:lib", ["copy:lib"])
})


//监听
gulp.task("watch", function () {
    gulp.watch(entry_path.ejsPath, ["watch:html"]);
    gulp.watch(entry_path.sassPath, ["watch:sass"]);
    gulp.watch(entry_path.js, ["watch:js"]);
    gulp.watch(entry_path.libPath, ["watch:lib"]);

})


//入口
gulp.task("default", function () {
    gulp.start("watch:sass", "watch:js", "watch:lib", "watch:html", ["watch", "build:brower"])
})


