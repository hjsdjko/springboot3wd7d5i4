<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230926/553d3a500b354e2eba5284b118ccdbeb.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"30px 0 130px","margin":"100px auto 60px","borderRadius":"12px","background":"url(http://codegen.caihongy.cn/20230926/2c5c44ca8f254e66a66e98a9a603782c.png) no-repeat center top / 110% auto,#259b24","clipPath":"polygon(5% 0, 95% 0, 100% 5%, 100% 85%, 50% 100%, 50% 100%, 0 85%, 0 5%)","width":"30vw","position":"relative","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"0px auto 10px","color":"#fff","textAlign":"center","width":"100%","letterSpacing":"4px","lineHeight":"44px","fontSize":"26px"}'>基于Web的毕业设计选题系统的设计与实现注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshigonghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('jiaoshigonghao')?'required':''">教师工号：</div>
				<el-input v-model="registerForm.jiaoshigonghao"  placeholder="请输入教师工号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshixingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('jiaoshixingming')?'required':''">教师姓名：</div>
				<el-input v-model="registerForm.jiaoshixingming"  placeholder="请输入教师姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in jiaoshixingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="jiaoshitouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="dianhuahaoma">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('dianhuahaoma')?'required':''">电话号码：</div>
				<el-input v-model="registerForm.dianhuahaoma"  placeholder="请输入电话号码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xueshengzhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xueshengzhanghao')?'required':''">学生账号：</div>
				<el-input v-model="registerForm.xueshengzhanghao"  placeholder="请输入学生账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xueshengxingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xueshengxingming')?'required':''">学生姓名：</div>
				<el-input v-model="registerForm.xueshengxingming"  placeholder="请输入学生姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xueshengtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in xueshengxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="dianhuahaoma">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('dianhuahaoma')?'required':''">电话号码：</div>
				<el-input v-model="registerForm.dianhuahaoma"  placeholder="请输入电话号码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="zhuanye">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('zhuanye')?'required':''">专业：</div>
                <el-select v-model="registerForm.zhuanye" placeholder="请选择专业" >
                  <el-option
                      v-for="(item,index) in xueshengzhuanyeOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="yuanxi">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('yuanxi')?'required':''">院系：</div>
                <el-select v-model="registerForm.yuanxi" placeholder="请选择院系" >
                  <el-option
                      v-for="(item,index) in xueshengyuanxiOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="youxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('youxiang')?'required':''">邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="banji">
				<div v-if="true" :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"90px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('banji')?'required':''">班级：</div>
				<el-input v-model="registerForm.banji"  placeholder="请输入班级" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","boxShadow":"0px 4px 0px #075c06","margin":"20px 10px 0 10vw","color":"#fff","display":"inline-block","outline":"none","borderRadius":"4px","background":"#09bd09","width":"auto","fontSize":"16px","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0px auto 0px","color":"#eee","textAlign":"right","display":"inline-block","outline":"none","borderRadius":"4px","background":"#49c549","width":"auto","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 20px","margin":"20px 0 40px","color":"#eee","textAlign":"right","display":"inline-block","width":"92%","lineHeight":"1","fontSize":"14px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			rules: {},
			requiredRules: {},
            jiaoshixingbieOptions: [],
            xueshengxingbieOptions: [],
            xueshengzhuanyeOptions: [],
            xueshengyuanxiOptions: [],
		}
    },
	mounted() {
		this.tableName = this.$route.query.role;
		if(this.tableName=='jiaoshi'){
			this.registerForm = {
                jiaoshigonghao: '',
                jiaoshixingming: '',
                mima: '',
                xingbie: '',
                touxiang: '',
                dianhuahaoma: '',
			}
		}
		if(this.tableName=='xuesheng'){
			this.registerForm = {
                xueshengzhanghao: '',
                xueshengxingming: '',
                mima: '',
                touxiang: '',
                xingbie: '',
                dianhuahaoma: '',
                zhuanye: '',
                yuanxi: '',
                youxiang: '',
                banji: '',
			}
		}
		if ('jiaoshi' == this.tableName) {
			this.requiredRules.jiaoshigonghao = [{ required: true, message: '请输入教师工号', trigger: 'blur' }]
		}
		if ('jiaoshi' == this.tableName) {
			this.requiredRules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }]
		}
		if ('jiaoshi' == this.tableName) {
			this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
		}
		if ('xuesheng' == this.tableName) {
			this.requiredRules.xueshengzhanghao = [{ required: true, message: '请输入学生账号', trigger: 'blur' }]
		}
		if ('xuesheng' == this.tableName) {
			this.requiredRules.xueshengxingming = [{ required: true, message: '请输入学生姓名', trigger: 'blur' }]
		}
		if ('xuesheng' == this.tableName) {
			this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
		}
	},
    created() {
      this.pageFlag = this.$route.query.pageFlag;
      if ('jiaoshi' == this.tableName) {
        this.rules.jiaoshigonghao = [{ required: true, message: '请输入教师工号', trigger: 'blur' }];
      }
      if ('jiaoshi' == this.tableName) {
        this.rules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }];
      }
      if ('jiaoshi' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
        this.jiaoshixingbieOptions = "男,女".split(',');
      if ('jiaoshi' == this.tableName) {
        this.rules.dianhuahaoma = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
      if ('xuesheng' == this.tableName) {
        this.rules.xueshengzhanghao = [{ required: true, message: '请输入学生账号', trigger: 'blur' }];
      }
      if ('xuesheng' == this.tableName) {
        this.rules.xueshengxingming = [{ required: true, message: '请输入学生姓名', trigger: 'blur' }];
      }
      if ('xuesheng' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
        this.xueshengxingbieOptions = "男,女".split(',');
      if ('xuesheng' == this.tableName) {
        this.rules.dianhuahaoma = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
        this.$http({
          url: `option/zhuanye/zhuanye`,
          method: "get",
          params: {}
        }).then(({ data }) => {
          if (data && data.code === 0) {
              this.xueshengzhuanyeOptions = data.data;
          }
        });
        this.$http({
          url: `option/yuanxi/yuanxi`,
          method: "get",
          params: {}
        }).then(({ data }) => {
          if (data && data.code === 0) {
              this.xueshengyuanxiOptions = data.data;
          }
        });
      if ('xuesheng' == this.tableName) {
        this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
      }
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      jiaoshitouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      xueshengtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.jiaoshigonghao) && `jiaoshi` == this.tableName){
					this.$message.error(`教师工号不能为空`);
					return
				}
				if((!this.registerForm.jiaoshixingming) && `jiaoshi` == this.tableName){
					this.$message.error(`教师姓名不能为空`);
					return
				}
               if(`jiaoshi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `jiaoshi` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
					if(`jiaoshi` == this.tableName && this.registerForm.dianhuahaoma &&(!this.$validate.isMobile2(this.registerForm.dianhuahaoma))){
						this.$message.error(`电话号码应输入手机格式`);
						return
					}
				if((!this.registerForm.xueshengzhanghao) && `xuesheng` == this.tableName){
					this.$message.error(`学生账号不能为空`);
					return
				}
				if((!this.registerForm.xueshengxingming) && `xuesheng` == this.tableName){
					this.$message.error(`学生姓名不能为空`);
					return
				}
               if(`xuesheng` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `xuesheng` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
					if(`xuesheng` == this.tableName && this.registerForm.dianhuahaoma &&(!this.$validate.isMobile2(this.registerForm.dianhuahaoma))){
						this.$message.error(`电话号码应输入手机格式`);
						return
					}
					if(`xuesheng` == this.tableName && this.registerForm.youxiang &&(!this.$validate.isEmail2(this.registerForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20230926/553d3a500b354e2eba5284b118ccdbeb.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
						flex-wrap: wrap;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #1abc9e30;
						border-width: 0 0 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #1abc9e30;
						border-width: 0 0 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #1abc9e30;
						border-width: 0 0 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #1abc9e30;
						border-width: 0 0 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #1abc9e80;
		  		  background: #fff;
		  		  width: 150px;
		  		  font-size: 32px;
		  		  border-color: #1abc9e30;
		  		  border-width: 0 0 1px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #1abc9e80;
		  		  background: #fff;
		  		  width: 150px;
		  		  font-size: 32px;
		  		  border-color: #1abc9e30;
		  		  border-width: 0 0 1px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #1abc9e80;
		  		  background: #fff;
		  		  width: 150px;
		  		  font-size: 32px;
		  		  border-color: #1abc9e30;
		  		  border-width: 0 0 1px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 68px;
				position: absolute;
				content: "*";
				order: 2;
			}
</style>
