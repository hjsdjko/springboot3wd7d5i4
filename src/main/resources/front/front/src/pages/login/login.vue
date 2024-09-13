<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230926/553d3a500b354e2eba5284b118ccdbeb.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"padding":"30px 0 130px","margin":"0px auto","borderRadius":"12px","background":"url(http://codegen.caihongy.cn/20230926/2c5c44ca8f254e66a66e98a9a603782c.png) no-repeat center top / 110% auto,#259b24","clipPath":"polygon(5% 0, 95% 0, 100% 5%, 100% 75%, 50% 100%, 50% 100%, 0 75%, 0 5%)","width":"30vw","position":"relative","height":"auto"}' :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"18px","color":"#333","textAlign":"center"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"margin":"0 auto 10px","color":"#fff","textAlign":"center","width":"100%","letterSpacing":"2px","lineHeight":"44px","fontSize":"26px","fontWeight":"500"}'>基于Web的毕业设计选题系统的设计与实现登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"80%","margin":"0 auto 10px"}' prop="username">
				<div v-if="true" :style='{"color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"auto","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}'>账号：</div>
				<input :style='{"padding":"0 10px","borderColor":"#1abc9e30","color":"#666","borderRadius":"4px","borderWidth":"0 0 1px","width":"auto","fontSize":"14px","minWidth":"300px","borderStyle":"solid","height":"40px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"80%","margin":"0 auto 10px"}' prop="password">
				<div v-if="true" :style='{"color":"#fff","textAlign":"right","background":"none","display":"inline-block","width":"auto","lineHeight":"36px","fontSize":"14px","minWidth":"80px"}'>密码：</div>
				<input :style='{"padding":"0 10px","borderColor":"#1abc9e30","color":"#666","borderRadius":"4px","borderWidth":"0 0 1px","width":"auto","fontSize":"14px","minWidth":"300px","borderStyle":"solid","height":"40px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>

			<el-form-item class="list-type select" :style='{"width":"80%","margin":"0 auto 10px"}' v-if="roles.length>1">
			  <el-select v-model="loginForm.tableName" placeholder="请选择角色" @change="selectChange">
				<el-option v-for="item,index in roles" :key="index" :label="item.roleName" :value="item.tableName" />
			  </el-select>
			</el-form-item>

			
			<el-form-item :style='{"width":"80%","textAlign":"center","margin":"20px auto"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","boxShadow":"0px 4px 0px #075c06","margin":"0 5px","color":"#fff","letterSpacing":"4px","outline":"none","borderRadius":"4px","background":"#09bd09","width":"auto","fontSize":"16px","height":"40px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","boxShadow":"0px 4px 0px #075c06","margin":"0 5px","color":"#fff","textAlign":"right","letterSpacing":"4px","outline":"none","borderRadius":"4px","background":"#49c549","width":"auto","fontSize":"14px","height":"40px"}' @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
			<div :style='{"width":"80%","textAlign":"center","margin":"30px auto"}'>
			<router-link :style='{"cursor":"pointer","border":"1px solid #ffffff50","padding":"6px","margin":"0 5px","color":"#fff","borderRadius":"4px","background":"none","fontSize":"14px","textDecoration":"none"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
</div>
</template>

<script>
import menu from '@/config/menu'
export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}],
			flag: false,
			verifyCheck2: false,
		}
	},
  components: {
  },
	created() {
		this.roleMenus = menu.list()
		for(let item in this.roleMenus) {
		    if(this.roleMenus[item].hasFrontLogin=='是') {
		        this.roles.push(this.roleMenus[item]);
		    }
		}
		
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
	  selectChange(e){
		  this.role = e
	  },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }

		this.loginPost(formName)
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  loginPost(formName) {
		this.$refs[formName].validate((valid) => {
		  if (valid) {
		    this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
		      if (res.data.code === 0) {
		        localStorage.setItem('Token', res.data.token);
		        localStorage.setItem('UserTableName', this.loginForm.tableName);
		        localStorage.setItem('username', this.loginForm.username);
		        localStorage.setItem('adminName', this.loginForm.username);
		        localStorage.setItem('sessionTable', this.loginForm.tableName);
		        localStorage.setItem('role', this.role);
		        localStorage.setItem('keyPath', 0);
		        this.$router.push('/');
		        this.$message({
		          message: '登录成功',
		          type: 'success',
		          duration: 1500,
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
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20230926/553d3a500b354e2eba5284b118ccdbeb.jpg);
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-form-item__content {
			display: flex;
			width: 80%;
		}

		.list-code /deep/ .el-form-item__content {
			display: flex;
			width: 80%;
			justify-content: space-between;
		}

		.list-type /deep/ .el-form-item__content {
			padding: 0 0 0 80px;
			margin: 20px 0 0;
			display: flex;
		}

		.list-btn /deep/ .el-form-item__content {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			border-radius: 4px;
			padding: 0 10px;
			color: #666;
			width: auto;
			font-size: 14px;
			border-color: #1abc9e30;
			border-width: 0 0 1px;
			border-style: solid;
			min-width: 300px;
			height: 40px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			border-radius: 4px;
			padding: 0 10px;
			outline: none;
			color: #666;
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 110px);
			font-size: 14px;
			border-color: #1abc9e30;
			border-width: 0 0 0px;
			border-style: solid;
			height: 40px;
		}

		// select
		.list-type.select .el-select /deep/ .el-input__inner {
			border-radius: 4px;
			padding: 0 10px;
			color: #666;
			width: 100%;
			font-size: 14px;
			border-color: #1abc9e30;
			border-width: 0 0 1px;
			border-style: solid;
			min-width: 300px;
			height: 40px;
		}
	}

</style>
