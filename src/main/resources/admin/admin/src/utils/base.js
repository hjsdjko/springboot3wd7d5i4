const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot3wd7d5i4/",
            name: "springboot3wd7d5i4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot3wd7d5i4/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Web的毕业设计选题系统的设计与实现"
        } 
    }
}
export default base
