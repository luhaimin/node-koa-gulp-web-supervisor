开发： html文件在develop=》views文件夹编写，经过gulp编译之后打包到views里面
       开发用sass，从static=》sass编译到static=》css

上线：1、上线去掉package.json去掉（防止服务器下载多余依赖包）：
            "gulp": "^3.9.1",
            "gulp-clean": "^0.4.0",
            "run-sequence": "^2.2.1"
            "gulp-sass": "^4.0.1",
            "gulp-autoprefixer": "^5.0.0",
            "gulp-cssmin": "^0.2.0",
            "browser-sync": "^2.24.5",
            "gulp-uglify": "^3.0.0",
            "gulp-htmlmin": "^4.0.0",
			"gulp-asset-rev": "0.0.15"
            "getmac": "^1.4.3",//看大数据是否有需求  获取mac地址工具包
            
            
            
            
本地环境：后台热更新工具 supervisor ,全局安装     npm i supervisor -g   