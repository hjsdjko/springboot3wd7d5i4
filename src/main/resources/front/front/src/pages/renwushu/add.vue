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
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="任务书编号" prop="renwushubianhao">
              <el-input v-model="ruleForm.renwushubianhao" placeholder="任务书编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="课题名称" prop="ketimingcheng">
            <el-input  v-model="ruleForm.ketimingcheng" 
                placeholder="课题名称" clearable :readonly=" false  ||ro.ketimingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="课题分类" prop="ketifenlei">
            <el-input  v-model="ruleForm.ketifenlei" 
                placeholder="课题分类" clearable :readonly=" false  ||ro.ketifenlei"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="课题封面" v-if="type!='cross' || (type=='cross' && !ro.ketifengmian)" prop="ketifengmian">
            <file-upload
            tip="点击上传课题封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.ketifengmian?ruleForm.ketifengmian:''"
            @change="ketifengmianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' class="upload" v-else label="课题封面" prop="ketifengmian">
                <img v-if="ruleForm.ketifengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.ketifengmian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.ketifengmian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="下任务时间" prop="xiarenwushijian">
              <el-date-picker
				  :disabled=" false  ||ro.xiarenwushijian"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.xiarenwushijian" 
                  type="date"
                  placeholder="下任务时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="学生账号" prop="xueshengzhanghao">
            <el-input  v-model="ruleForm.xueshengzhanghao" 
                placeholder="学生账号" clearable :readonly=" false  ||ro.xueshengzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="专业" prop="zhuanye">
            <el-input  v-model="ruleForm.zhuanye" 
                placeholder="专业" clearable :readonly=" false  ||ro.zhuanye"></el-input>
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
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="教师工号" prop="jiaoshigonghao">
            <el-input  v-model="ruleForm.jiaoshigonghao" 
                placeholder="教师工号" clearable :readonly=" false  ||ro.jiaoshigonghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="教师姓名" prop="jiaoshixingming">
            <el-input  v-model="ruleForm.jiaoshixingming" 
                placeholder="教师姓名" clearable :readonly=" false  ||ro.jiaoshixingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="任务书内容" prop="renwushuneirong">
            <editor 
                :style='{"minHeight":"250px","padding":"0","margin":"0","borderColor":"#1abc9e30","backgroundColor":"none","borderRadius":"0","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.renwushuneirong" 
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
            renwushubianhao : false,
            ketimingcheng : false,
            ketifenlei : false,
            ketifengmian : false,
            renwushuneirong : false,
            xiarenwushijian : false,
            xueshengzhanghao : false,
            zhuanye : false,
            xueshengxingming : false,
            yuanxi : false,
            banji : false,
            jiaoshigonghao : false,
            jiaoshixingming : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          renwushubianhao: this.getUUID(),
          ketimingcheng: '',
          ketifenlei: '',
          ketifengmian: '',
          renwushuneirong: '',
          xiarenwushijian: '',
          xueshengzhanghao: '',
          zhuanye: '',
          xueshengxingming: '',
          yuanxi: '',
          banji: '',
          jiaoshigonghao: '',
          jiaoshixingming: '',
        },


        rules: {
          renwushubianhao: [
          ],
          ketimingcheng: [
          ],
          ketifenlei: [
          ],
          ketifengmian: [
          ],
          renwushuneirong: [
          ],
          xiarenwushijian: [
          ],
          xueshengzhanghao: [
          ],
          zhuanye: [
          ],
          xueshengxingming: [
          ],
          yuanxi: [
          ],
          banji: [
          ],
          jiaoshigonghao: [
          ],
          jiaoshixingming: [
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
      this.ruleForm.xiarenwushijian = this.getCurDate()
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
            if(o=='renwushubianhao'){
              this.ruleForm.renwushubianhao = obj[o];
              this.ro.renwushubianhao = true;
              continue;
            }
            if(o=='ketimingcheng'){
              this.ruleForm.ketimingcheng = obj[o];
              this.ro.ketimingcheng = true;
              continue;
            }
            if(o=='ketifenlei'){
              this.ruleForm.ketifenlei = obj[o];
              this.ro.ketifenlei = true;
              continue;
            }
            if(o=='ketifengmian'){
              this.ruleForm.ketifengmian = obj[o].split(",")[0];
              this.ro.ketifengmian = true;
              continue;
            }
            if(o=='renwushuneirong'){
              this.ruleForm.renwushuneirong = obj[o];
              this.ro.renwushuneirong = true;
              continue;
            }
            if(o=='xiarenwushijian'){
              this.ruleForm.xiarenwushijian = obj[o];
              this.ro.xiarenwushijian = true;
              continue;
            }
            if(o=='xueshengzhanghao'){
              this.ruleForm.xueshengzhanghao = obj[o];
              this.ro.xueshengzhanghao = true;
              continue;
            }
            if(o=='zhuanye'){
              this.ruleForm.zhuanye = obj[o];
              this.ro.zhuanye = true;
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
            if((json.jiaoshigonghao!=''&&json.jiaoshigonghao) || json.jiaoshigonghao==0){
                this.ruleForm.jiaoshigonghao = json.jiaoshigonghao
            }
            if((json.jiaoshixingming!=''&&json.jiaoshixingming) || json.jiaoshixingming==0){
                this.ruleForm.jiaoshixingming = json.jiaoshixingming
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`renwushu/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

		  if(this.ruleForm.renwushubianhao){
			  this.ruleForm.renwushubianhao = String(this.ruleForm.renwushubianhao)
		  }
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
                 this.$http.get('renwushu/list', {
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


                          this.$http.post(`renwushu/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


                  this.$http.post(`renwushu/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
      ketifengmianUploadChange(fileUrls) {
          this.ruleForm.ketifengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
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
