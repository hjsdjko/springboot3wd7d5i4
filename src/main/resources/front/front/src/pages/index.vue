<template>
	<div class="main-containers">
		<div class="body-containers" :style='{"minHeight":"100vh","padding":"0","margin":"0","position":"relative","background":"#fff"}'>
		<div class="top-container" :style='{"boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","padding":"0px 7% 0","borderColor":"#eee","alignItems":"center","color":"#fff","textAlign":"right","display":"block","overflow":"hidden","top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20230925/01447e8b0451416798a94c2d7d454ac5.png) repeat-x center top,#fff","borderWidth":"0px","width":"100%","fontSize":"14px","position":"relative","borderStyle":"solid","height":"120px","zIndex":"1002"}'>
			<!-- info -->
			<div :style='{"margin":"60px 0 0","position":"absolute","float":"left","display":"block"}'>
			  <span :style='{"padding":"0 0 0 12px","lineHeight":"44px","fontSize":"24px","color":"#f95927","float":"left","fontWeight":"600"}'>基于Web的毕业设计选题系统的设计与实现</span>
			</div>
			
			<div v-if="false" :style='{"margin":"0 10px","fontSize":"inherit","color":"inherit","display":"inline-block"}'></div>
			
			<div v-if="Token" :style='{"padding":"0 12px","fontSize":"inherit","lineHeight":"24px","color":"inherit","display":"inline-block","height":"24px"}'>{{username}}</div>
			<div v-if="Token && notAdmin" :style='{"padding":"0 12px","fontSize":"inherit","lineHeight":"24px","color":"inherit","display":"inline-block","height":"24px"}' @click="goMenu('/index/center')">个人中心</div>
			<el-button v-if="!Token" @click="toLogin()" :style='{"border":"0","padding":"0 20px","margin":"60px 0 0","color":"#f4f4f5","borderRadius":"2px","background":"#1d8001","display":"inline-block","fontSize":"14px","lineHeight":"32px","position":"absolute","right":"calc(7% + 90px)","height":"32px"}'>登录/注册</el-button>
			<el-button v-if="Token" @click="logout" :style='{"border":"0px solid #666","padding":"0 20px","margin":"60px 0 0","color":"#fff","borderRadius":"2px","background":"#f95927","display":"inline-block","fontSize":"14px","lineHeight":"32px","position":"absolute","right":"7%","height":"32px"}'>退出</el-button>
		</div>


			<div class="menu-preview" :style='{"padding":"0","borderColor":"#efefef","margin":"0 auto","background":"none","borderWidth":"0 0 0px 0","clipPath":"polygon(99% 0, 100% 50%, 99% 100%, 1% 100%, 0 50%, 1% 0)","width":"98%","borderStyle":"solid","height":"auto"}'>
			<el-scrollbar wrap-class="scrollbar-wrapper-horizontal">
				<el-menu class="el-menu-horizontal-demo" :style='{"border":"0","padding":"4px 7% 0","listStyle":"none","margin":"0","alignItems":"flex-start","background":"linear-gradient(180deg, rgba(241,246,239,1) 0%, rgba(219,232,214,1) 100%),#1d800110","display":"flex","justifyContent":"space-between"}' :default-active="activeMenu" :unique-opened="true" mode="horizontal" :router="true" @select="handleSelect">
					<div class="userinfo" :style='{"width":"84px","padding":"6px 10px 0","display":"none","height":"auto"}'>
					  <el-image :style='{"width":"100%","objectFit":"cover","borderRadius":"20px","display":"block","height":"32px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover"></el-image>
					  <div :style='{"fontSize":"12px","lineHeight":"1.5","color":"#333","textAlign":"center"}'>nickname</div>
					</div>
					<el-menu-item class="home" index="/index/home" @click.native="goMenu('/index/home')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"auto","fontSize":"16px","height":"auto"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>首页</span>
					</el-menu-item>
					<el-menu-item class="item" v-for="(menu, index) in menuList" :index="menu.url" :key="index" @click.native="goMenu(menu.url)">
						<i :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"16px","lineHeight":"auto","fontSize":"16px","height":"auto"}' :class="iconArr[index]"></i>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>{{menu.name}}</span>
					</el-menu-item>
					<el-menu-item class="user" index="/index/center" v-if="Token && notAdmin" @click.native="goMenu('/index/center')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"auto","fontSize":"14px","height":"auto"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>个人信息</span>
					</el-menu-item>
				</el-menu>
			</el-scrollbar>
			</div>




			<div class="swiper3" :style='{"width":"100%","padding":"0 1%","margin":"20px auto 0","height":"auto"}'>
			  <div class="swiper-container mySwiper3">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
			        <div :style='{"width":"100%","height":"auto"}'>
			          <el-image @click="carouselClick(item.url)" :style='{"width":"100%","objectFit":"cover","clipPath":"polygon(97% 0, 100% 50%, 97% 100%, 3% 100%, 0 54%, 3% 0)","height":"500px"}' :src="baseUrl + item.value" fit="cover"></el-image>
			        </div>
			      </div>
			    </div>
			    <!-- Add Pagination -->
			    <div class="swiper-pagination" :style='{"width":"100%","left":"0","bottom":"10px"}'></div>
			    <!-- Add Arrows -->
			    <div class="swiper-button-next" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","display":"none","height":"24px"}'>
			      <span class="icon iconfont icon-jiantou18" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			    </div>
			    <div class="swiper-button-prev" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","display":"none","height":"24px"}'>
			      <span class="icon iconfont icon-jiantou39" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			    </div>
			  </div>
			</div>
			<router-view></router-view>
			
			<div class="bottom-preview" :style='{"width":"100%","height":"auto"}'>
				<div :style='{"minHeight":"150px","padding":"20px 7%","overflow":"hidden","color":"#fff","textAlign":"center","background":"#38921d","width":"100%","fontSize":"14px","height":"auto"}'><div v-html="bottomContent"></div></div>
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
import Swiper from "swiper";
import axios from 'axios'

export default {
    data() {
		return {
            activeIndex: '0',
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"院系","menuJump":"列表","tableName":"yuanxi"}],"menu":"院系管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","修改","删除"],"menu":"专业","menuJump":"列表","tableName":"zhuanye"}],"menu":"专业管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","修改","删除"],"menu":"课题分类","menuJump":"列表","tableName":"ketifenlei"}],"menu":"课题分类管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","修改","删除","审核"],"menu":"课题信息","menuJump":"列表","tableName":"ketixinxi"}],"menu":"课题信息管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除"],"menu":"选题信息","menuJump":"列表","tableName":"xuantixinxi"}],"menu":"选题信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改","删除"],"menu":"任务书","menuJump":"列表","tableName":"renwushu"}],"menu":"任务书管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改","删除"],"menu":"开题报告","menuJump":"列表","tableName":"kaitibaogao"}],"menu":"开题报告管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除"],"menu":"开题成绩","menuJump":"列表","tableName":"kaitichengji"}],"menu":"开题成绩管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改","删除"],"menu":"论文选题","menuJump":"列表","tableName":"lunwenxuanti"}],"menu":"论文选题管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","删除"],"menu":"在线留言","tableName":"messages"}],"menu":"在线留言"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息分类","tableName":"newstype"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","选题"],"menu":"课题信息列表","menuJump":"列表","tableName":"ketixinxi"}],"menu":"课题信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除"],"menu":"课题信息","menuJump":"列表","tableName":"ketixinxi"}],"menu":"课题信息管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除","审核","任务书下发"],"menu":"选题信息","menuJump":"列表","tableName":"xuantixinxi"}],"menu":"选题信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改","删除"],"menu":"任务书","menuJump":"列表","tableName":"renwushu"}],"menu":"任务书管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改","删除","审核","答辩成绩"],"menu":"开题报告","menuJump":"列表","tableName":"kaitibaogao"}],"menu":"开题报告管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除"],"menu":"开题成绩","menuJump":"列表","tableName":"kaitichengji"}],"menu":"开题成绩管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","审核"],"menu":"论文选题","menuJump":"列表","tableName":"lunwenxuanti"}],"menu":"论文选题管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"在线留言","tableName":"messages"}],"menu":"在线留言"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","选题"],"menu":"课题信息列表","menuJump":"列表","tableName":"ketixinxi"}],"menu":"课题信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"选题信息","menuJump":"列表","tableName":"xuantixinxi"}],"menu":"选题信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","上传报告"],"menu":"任务书","menuJump":"列表","tableName":"renwushu"}],"menu":"任务书管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看"],"menu":"开题报告","menuJump":"列表","tableName":"kaitibaogao"}],"menu":"开题报告管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"开题成绩","menuJump":"列表","tableName":"kaitichengji"}],"menu":"开题成绩管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"论文选题","menuJump":"列表","tableName":"lunwenxuanti"}],"menu":"论文选题管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","选题"],"menu":"课题信息列表","menuJump":"列表","tableName":"ketixinxi"}],"menu":"课题信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"}],
			baseUrl: '',
			carouselList: [],
			menuList: [],
			form: {
				ask: '',
				userid: localStorage.getItem('userid')
			},
			headportrait: localStorage.getItem('headportrait')?localStorage.getItem('headportrait'):'',
			Token: localStorage.getItem('Token'),
            username: localStorage.getItem('username'),
            notAdmin: localStorage.getItem('sessionTable')!='"users"',
			timer: '',
			iconArr: [
				'el-icon-star-off',
				'el-icon-goods',
				'el-icon-warning',
				'el-icon-question',
				'el-icon-info',
				'el-icon-help',
				'el-icon-picture-outline-round',
				'el-icon-camera-solid',
				'el-icon-video-camera-solid',
				'el-icon-video-camera',
				'el-icon-bell',
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check'
			],
			bottomContent: '',
		}
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.menuList = this.$config.indexNav;
		this.getCarousel();
        if(localStorage.getItem('Token') && localStorage.getItem('Token')!=null) {
			this.getSession()
        }
    },
    mounted() {
        this.activeIndex = localStorage.getItem('keyPath') || '0';


		// banner
		setTimeout(()=>{
			new Swiper(".mySwiper3", {"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"autoplay":{"delay":2500,"disableOnInteraction":false},"pagination":{"el":".swiper-pagination","clickable":true}})
		}, 10)

    },
    computed: {
		activeMenu() {
			const route = this.$route
			const {
				meta,
				path
			} = route
			// if st path, the sidebar will highlight the path you sete
			if (meta.activeMenu) {
				return meta.activeMenu
			}
			return path
		},
    },
    watch: {
        $route(newValue) {
            let that = this
            let url = window.location.href
            let arr = url.split('#')
            for (let x in this.menuList) {
                if (newValue.path == this.menuList[x].url) {
                    this.activeIndex = x
                }
            }
            this.Token = localStorage.getItem('Token')
            // window.scrollTo( 0, 100 )
        },
		headportrait(){
			this.$forceUpdate()
		},
    },
    methods: {

		getSession() {
			this.$http.get(`${localStorage.getItem('UserTableName')}/session`, {emulateJSON: true}).then(res => {
				if (res.data.code == 0) {
					localStorage.setItem('sessionForm',JSON.stringify(res.data.data))
					localStorage.setItem('userid', res.data.data.id);
					if(res.data.data.vip) {
						localStorage.setItem('vip', res.data.data.vip);
					}
					if(res.data.data.touxiang) {
						this.headportrait = res.data.data.touxiang
						localStorage.setItem('headportrait', res.data.data.touxiang);
					} else if(res.data.data.headportrait) {
						this.headportrait = res.data.data.headportrait
						localStorage.setItem('headportrait', res.data.data.headportrait);
					}
				}
			});
		},
        handleSelect(keyPath) {
            if (keyPath) {
                localStorage.setItem('keyPath', keyPath)
            }
        },
		toLogin() {
		  this.$router.push('/login');
		},
        logout() {
            localStorage.clear();
            Vue.http.headers.common['Token'] = "";
            this.$router.push('/index/home');
            this.activeIndex = '0'
            localStorage.setItem('keyPath', this.activeIndex)
            this.Token = ''
            this.$forceUpdate()
            this.$message({
                message: '登出成功',
                type: 'success',
                duration: 1000,
            });
        },
		getCarousel() {
			this.$http.get('config/list', {params: { page: 1, limit: 3 }}).then(res => {
				if (res.data.code == 0) {
					this.carouselList = res.data.data.list;
				}
			});
		},
		// 轮播图跳转
		carouselClick(url) {
			if (url) {
				if (url.indexOf('https') != -1) {
					window.open(url)
				} else {
					this.$router.push(url)
				}
			}
		},
		goBackend() {
			window.open(`${this.$config.baseUrl}admin/dist/index.html`, "_blank");
		},
		goMenu(path) {
            this.$router.push(path);
		},
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	  
	    & /deep/ .scrollbar-wrapper-vertical {
	      overflow-x: hidden;
	    }
	  
	    & /deep/ .scrollbar-wrapper-horizontal {
	      overflow-y: hidden;
	  
	      .el-scrollbar__view {
	        white-space: nowrap;
	      }
	    }
	  }
	}
	
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				margin: 0;
				color: #333;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				line-height: 44px;
				background: none;
				justify-content: center;
				align-items: center;
				position: relative;
				list-style: none;
				height: 44px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home:hover {
				color: #333;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home.is-active {
				color: #333;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 44px;
				order: 3;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 44px;
				order: 4;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				list-style: none;
				height: 44px;
				order: 5;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 44px;
				order: 6;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item {
				cursor: pointer;
				padding: 0 12px;
				margin: 0;
				color: #333;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				border-color: #ddd;
				line-height: 44px;
				background: none;
				justify-content: center;
				border-width: 0 0px 0 0;
				align-items: center;
				position: relative;
				border-style: solid;
				list-style: none;
				text-align: center;
				height: 44px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.banner-preview {
	  .el-carousel /deep/ .el-carousel__indicator button {
	    width: 0;
	    height: 0;
	    display: none;
	  }
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: red;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: red;
	}

	.banner-preview .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}

    .chat-content {
        padding-bottom: 20px;
        width: 100%;
        margin-bottom: 10px;
        max-height: 300px;
        height: 300px;
        overflow-y: scroll;
        border: 1px solid #eeeeee;
        background: #fff;

        .left-content {
            float: left;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }

        .right-content {
            float: right;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }
    }

    .clear-float {
        clear: both;
    }


	.swiper3 .swiper-button-prev:after {
      display:none;
    }
    .swiper3 .swiper-button-next:after {
      display:none;
    }
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet {
				border-radius: 100%;
				margin: 0 4px;
				background: #000;
				display: inline-block;
				width: 20px;
				opacity: .2;
				height: 20px;
			}
	
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet:hover {
				background: #1d8001;
				opacity: 1;
			}
	
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet.swiper-pagination-bullet-active {
				background: #1d8001;
				opacity: 1;
			}
	
	// -------- search --------
	.main-containers .search .select /deep/ .el-input__inner {
				border: 0;
				border-radius: 4px;
				padding: 0 30px 0 10px;
				box-shadow: 0 0 6px rgba(64, 158, 255, .3);
				outline: none;
				color: rgba(64, 158, 255, 1);
				width: 180px;
				font-size: 14px;
				height: 44px;
			}
	
	.main-containers .search .input /deep/ .el-input__inner {
				border: 0;
				border-radius: 4px;
				padding: 0 10px;
				box-shadow: 0 0 6px rgba(64, 158, 255, .3);
				outline: none;
				color: rgba(64, 158, 255, 1);
				width: 180px;
				font-size: 14px;
				height: 44px;
			}
	// -------- search --------
	
	.main-containers .btn-service {
				border: 0;
				padding: 0 8px;
				margin: 0 10px;
				color: #fff;
				background: none;
				width: auto;
				font-size: 14px;
				line-height: 32px;
				height: 32px;
			}
	
	.main-containers .btn-service:hover {
				color: #fff;
				background: none;
			}
	
	.main-containers .btn-shop {
				border: 0;
				padding: 0 8px;
				margin: 0 10px;
				color: #fff;
				background: none;
				width: auto;
				font-size: 14px;
				line-height: 32px;
				height: 32px;
				order: 2;
			}
	
	.main-containers .btn-shop:hover {
				color: #fff;
				background: none;
			}
</style>
