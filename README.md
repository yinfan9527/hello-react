## 创建项目
通过create-react-app脚手架创建的react示例项目<br>
#create-react-app hello-react

## 运行项目
Inside the "hello-react" directory, you can run several commands:<br>
#yarn start
    starts the development server. This command can open default Browser.<br>
#yarn build
    Bundles the app into static files for production.<br>
    After compiled successfully, the builded files(file size after gzip) in "build" directory, <br>
    The build folder is reader to be deployed.<br>
    You may serve it with a static server by the following commands:<br>
        1: yarn global add serve    //install serve by yarn, and this is the global installing <br>
        2: serve -s build    // boot the serve.

#yarn test
    Starts the test runner.<br>
#yarn eject
    Remove this tool and copies build dependencies, configuration files<br>
    and scripts into the app directory. If you do this , you can't go back.<br>

## git操作
#git init 
#git add . 
#git commit -m "first commit" 
#git remote add origin https://github.com/yinfan9527/hello-react.git 
#git push -u origin master 