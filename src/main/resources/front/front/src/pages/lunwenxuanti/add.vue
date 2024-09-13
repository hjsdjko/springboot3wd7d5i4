<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"border":"0px solid #28890b30","width":"100%","padding":"30px","position":"relative","background":"#fff"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="题目名称" prop="timumingcheng">
            <el-input  v-model="ruleForm.timumingcheng" 
                placeholder="题目名称" clearable :readonly=" false  ||ro.timumingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="图片" v-if="type!='cross' || (type=='cross' && !ro.tupian)" prop="tupian">
            <file-upload
            tip="点击上传图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.tupian?ruleForm.tupian:''"
            @change="tupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' class="upload" v-else label="图片" prop="tupian">
                <img v-if="ruleForm.tupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.tupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="申报时间" prop="shenbaoshijian">
              <el-date-picker
				  :disabled=" false  ||ro.shenbaoshijian"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.shenbaoshijian" 
                  type="date"
                  placeholder="申报时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学生账号" prop="xueshengzhanghao">
            <el-input  v-model="ruleForm.xueshengzhanghao" 
                placeholder="学生账号" clearable :readonly=" false  ||ro.xueshengzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学生姓名" prop="xueshengxingming">
            <el-input  v-model="ruleForm.xueshengxingming" 
                placeholder="学生姓名" clearable :readonly=" false  ||ro.xueshengxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="院系" prop="yuanxi">
            <el-input  v-model="ruleForm.yuanxi" 
                placeholder="院系" clearable :readonly=" false  ||ro.yuanxi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="班级" prop="banji">
            <el-input  v-model="ruleForm.banji" 
                placeholder="班级" clearable :readonly=" false  ||ro.banji"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="专业" prop="zhuanye">
            <el-input  v-model="ruleForm.zhuanye" 
                placeholder="专业" clearable :readonly=" false  ||ro.zhuanye"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="教师工号" prop="jiaoshigonghao">
            <el-select  @change="jiaoshigonghaoChange" v-model="ruleForm.jiaoshigonghao" placeholder="请选择教师工号">
              <el-option
                  v-for="(item,index) in jiaoshigonghaoOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="教师姓名" prop="jiaoshixingming">
            <el-input  v-model="ruleForm.jiaoshixingming" 
                placeholder="教师姓名" clearable :readonly=" false  ||ro.jiaoshixingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="论文详情" prop="lunwenxiangqing">
            <editor 
                :style='{"minHeight":"250px","padding":"0","margin":"0","borderColor":"#1abc9e30","backgroundColor":"none","borderRadius":"0","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.lunwenxiangqing" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0px","background":"#28890b","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid #eee","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"0px","background":"#f95927","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            timumingcheng : false,
            tupian : false,
            lunwenxiangqing : false,
            shenbaoshijian : false,
            xueshengzhanghao : false,
            xueshengxingming : false,
            yuanxi : false,
            banji : false,
            zhuanye : false,
            jiaoshigonghao : false,
            jiaoshixingming : false,
            sfsh : false,
            shhf : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          timumingcheng: '',
          tupian: '',
          lunwenxiangqing: '',
          shenbaoshijian: '',
          xueshengzhanghao: '',
          xueshengxingming: '',
          yuanxi: '',
          banji: '',
          zhuanye: '',
          jiaoshigonghao: '',
          jiaoshixingming: '',
        },
        jiaoshigonghaoOptions: [],


        rules: {
          timumingcheng: [
          ],
          tupian: [
          ],
          lunwenxiangqing: [
          ],
          shenbaoshijian: [
          ],
          xueshengzhanghao: [
          ],
          xueshengxingming: [
          ],
          yuanxi: [
          ],
          banji: [
          ],
          zhuanye: [
          ],
          jiaoshigonghao: [
          ],
          jiaoshixingming: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.shenbaoshijian = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='timumingcheng'){
              this.ruleForm.timumingcheng = obj[o];
              this.ro.timumingcheng = true;
              continue;
            }
            if(o=='tupian'){
              this.ruleForm.tupian = obj[o].split(",")[0];
              this.ro.tupian = true;
              continue;
            }
            if(o=='lunwenxiangqing'){
              this.ruleForm.lunwenxiangqing = obj[o];
              this.ro.lunwenxiangqing = true;
              continue;
            }
            if(o=='shenbaoshijian'){
              this.ruleForm.shenbaoshijian = obj[o];
              this.ro.shenbaoshijian = true;
              continue;
            }
            if(o=='xueshengzhanghao'){
              this.ruleForm.xueshengzhanghao = obj[o];
              this.ro.xueshengzhanghao = true;
              continue;
            }
            if(o=='xueshengxingming'){
              this.ruleForm.xueshengxingming = obj[o];
              this.ro.xueshengxingming = true;
              continue;
            }
            if(o=='yuanxi'){
              this.ruleForm.yuanxi = obj[o];
              this.ro.yuanxi = true;
              continue;
            }
            if(o=='banji'){
              this.ruleForm.banji = obj[o];
              this.ro.banji = true;
              continue;
            }
            if(o=='zhuanye'){
              this.ruleForm.zhuanye = obj[o];
              this.ro.zhuanye = true;
              continue;
            }
            if(o=='jiaoshigonghao'){
              this.ruleForm.jiaoshigonghao = obj[o];
              this.ro.jiaoshigonghao = true;
              continue;
            }
            if(o=='jiaoshixingming'){
              this.ruleForm.jiaoshixingming = obj[o];
              this.ro.jiaoshixingming = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.xueshengzhanghao!=''&&json.xueshengzhanghao) || json.xueshengzhanghao==0){
                this.ruleForm.xueshengzhanghao = json.xueshengzhanghao
            }
            if((json.xueshengxingming!=''&&json.xueshengxingming) || json.xueshengxingming==0){
                this.ruleForm.xueshengxingming = json.xueshengxingming
            }
            if((json.yuanxi!=''&&json.yuanxi) || json.yuanxi==0){
                this.ruleForm.yuanxi = json.yuanxi
            }
            if((json.banji!=''&&json.banji) || json.banji==0){
                this.ruleForm.banji = json.banji
            }
            if((json.zhuanye!=''&&json.zhuanye) || json.zhuanye==0){
                this.ruleForm.zhuanye = json.zhuanye
            }
          }
        });
        this.$http.get('option/jiaoshi/jiaoshigonghao', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.jiaoshigonghaoOptions = res.data.data;
          }
        });
      },
      // 下二随
      jiaoshigonghaoChange () {
        this.$http.get('follow/jiaoshi/jiaoshigonghao?columnValue=' + this.ruleForm.jiaoshigonghao, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.jiaoshixingming){
              this.ruleForm.jiaoshixingming = res.data.data.jiaoshixingming
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`lunwenxuanti/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('lunwenxuanti/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post(`lunwenxuanti/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post(`lunwenxuanti/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      tupianUploadChange(fileUrls) {
          this.ruleForm.tupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #28890b30;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 200px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #28890b30;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 200px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  border-color: #28890b30;
	  border-width: 1px;
	  border-style: solid;
	  min-width: 200px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  cursor: pointer;
	  color: #28890b60;
	  font-size: 24px;
	  border-color: #28890b30;
	  line-height: 54px;
	  border-radius: 2px;
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  text-align: center;
	  min-width: 200px;
	  height: 54px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  color: #28890b60;
	  font-size: 24px;
	  border-color: #28890b30;
	  line-height: 54px;
	  border-radius: 2px;
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  text-align: center;
	  min-width: 200px;
	  height: 54px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  cursor: pointer;
	  color: #28890b60;
	  font-size: 24px;
	  border-color: #28890b30;
	  line-height: 54px;
	  border-radius: 2px;
	  background: none;
	  width: auto;
	  border-width: 1px;
	  border-style: solid;
	  text-align: center;
	  min-width: 200px;
	  height: 54px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #28890b30;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: none;
	  width: auto;
	  font-size: 14px;
	  min-width: 800px;
	  height: 120px;
	}
</style>
