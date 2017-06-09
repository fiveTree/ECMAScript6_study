var gulp = require("gulp");
var babel = require("gulp-babel"), connect = require('gulp-connect');//使用connect启动一个Web服务器;
gulp.task('connect', function() {
    connect.server({
        host: '', //地址，可不写，不写的话，默认localhost
        port: 3000, //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自动刷新
    });
});
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task("es6", function () {
  return gulp.src("src/es6/*.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['es6']);
  // gulp.watch('./*.scss', ['scss']);
  gulp.watch('./css/*.css', ['html']); //监控css文件
    gulp.watch('./js/*.js', ['html']); //监控js文件
    gulp.watch(['./*.html'], ['html']); //监控html文件
});
gulp.task('server', ['connect', 'watch']);
gulp.task('default', ['server'], function () {
  console.log('done!');
});