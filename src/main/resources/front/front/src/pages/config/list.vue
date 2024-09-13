<template>
<div>
	<div :style='{"padding":"20px 0","margin":"0px auto","borderColor":"#1d8001","borderRadius":"0px","background":"none","borderWidth":"0 0 2px","width":"86%","borderStyle":"solid"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'>'" :style='{"fontSize":"14px","lineHeight":"1","justifyContent":"flex-end","display":"flex"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div v-if="centerType" :style='{"padding":"20px 0","margin":"0px auto","borderColor":"#1d8001","borderRadius":"0px","background":"none","borderWidth":"0 0 2px","width":"86%","borderStyle":"solid"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="list-preview" :style='{"padding":"0 7%","margin":"0px auto","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","position":"relative","justifyContent":"space-between"}'>
		

	
    <el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"0 0 0 250px","margin":"20px 0 0","borderColor":"#ddd","alignItems":"center","display":"flex","justifyContent":"center","overflow":"hidden","flexWrap":"wrap","background":"#fff","borderWidth":"0 0 0px","width":"100%","borderStyle":"solid","height":"auto","order":"1"}'>
      <el-form-item :style='{"margin":"0 0 0px"}'>
	    <div class="lable" v-if="true" :style='{"width":"auto","padding":"0 0 0 0px","lineHeight":"42px","textAlign":"right","display":"inline-block"}'>名称：</div>
        <el-input v-model="formSearch.name" placeholder="名称" @keydown.enter.native="getList(1, curFenlei)" clearable></el-input>
      </el-form-item>
	  <el-button v-if=" true " :style='{"cursor":"pointer","border":"0","padding":"0px 15px","margin":"0px 10px 0 60px","color":"#fff","display":"inline-block","outline":"none","borderRadius":"30px","background":"#1d8001","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}' type="primary" @click="getList(1, curFenlei)"><i v-if="true" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-search"></i>查询</el-button>
	  <el-button v-if="btnAuth('config','新增')" :style='{"cursor":"pointer","border":"0px solid #ddd","padding":"0px 15px","margin":"0px 10px 0 0","color":"#fff","display":"inline-block","outline":"none","borderRadius":"30px","background":"#f95927","width":"80px","fontSize":"14px","lineHeight":"36px","height":"36px"}' type="primary" @click="add('/index/configAdd')"><i v-if="false" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-circle-plus-outline"></i>添加</el-button>
    </el-form>
	<div class="sort_view" :style='{"padding":"0 2%","margin":"20px 0 0","overflow":"hidden","textAlign":"right","background":"#fff","width":"100%","order":"1"}'>
		<el-button :style='{"border":"0","padding":"0 0px","margin":"0 5px","borderRadius":"0px"}' @click="sortClick('clicknum')">
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"14px","color":"#333"}' class="icon iconfont icon-xiaoliang17" v-if="sortType!='clicknum'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"14px","color":"#333"}' class="icon iconfont icon-xiaoliang13" v-else-if="sortType=='clicknum'&&sortOrder=='desc'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"14px","color":"#333"}' class="icon iconfont icon-xiaoliang13" v-else-if="sortType=='clicknum'&&sortOrder=='asc'"></span>
			<span :style='{"color":"#333","lineHeight":"20px","fontSize":"14px"}'>点击量</span>
		</el-button>
	</div>
	<div class="list" :style='{"width":"calc(100% - 300px)","padding":"0","margin":"26px 0 20px","background":"#fff","order":"6"}'>
		
		<!-- 样式四 -->
		<div :style='{"width":"100%","padding":"0px","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto"}' class="list list4 index-pv1">
		  <div v-for="(item, index) in dataList" :key="index" @click.stop="toDetail(item)" :style='{"width":"23%","margin":"0 2% 30px 0","overflow":"hidden","position":"relative","background":"#fff","height":"240px"}' class="item">
			<div class="content">
		      <div :style='{"padding":"20px 10px 20px 0","borderColor":"#ddd","color":"inherit","alignItems":"center","display":"none","textIndent":"2em","overflow":"hidden","flex":"1","borderWidth":"0 1px 0 0","lineHeight":"30px","fontSize":"inherit","borderStyle":"dashed","height":"240px"}'>{{item.url}}</div>
		      <div class="info">
				<div v-if="item.price" :style='{"color":"#fff","lineHeight":"40px","fontSize":"14px"}' class="price"><span :style='{"fontSize":"12px"}'>￥</span>{{item.price}}</div>
				<div :style='{"width":"100%","padding":"0","borderColor":"#ddd","borderStyle":"dashed","borderWidth":"0 0 0px","display":"none"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"24px","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"24px","fontSize":"inherit"}'>{{item.addtime}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</div>

	
	<el-pagination
	  background
	  id="pagination"
	  class="pagination"
	  :pager-count="7"
	  :page-size="pageSize"
	  :page-sizes="pageSizes"
	  prev-text="<"
	  next-text=">"
	  :hide-on-single-page="false"
	  :layout='["total","prev","pager","next","sizes"].join()'
	  :total="total"
	  :style='{"padding":"5px 7%","margin":"20px auto","color":"#333","textAlign":"center","width":"100%","clear":"both","lineHeight":"40px","fontWeight":"500","height":"40px","order":"50"}'
	  @current-change="curChange"
      @size-change="sizeChange"
	  @prev-click="prevClick"
	  @next-click="nextClick"
	></el-pagination>

  </div>
  <el-dialog title="预览图" :visible.sync="previewVisible" width="50%">
  	<img :src="previewImg" alt="" style="width: 100%;">
  </el-dialog>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
	    layouts: '',
		swiperIndex: -1,
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '轮播图管理'
          }
        ],
        formSearch: {
          name: '',
        },
        fenlei: [],
		feileiColumn: '',
        dataList: [],
        total: 1,
        pageSize: 12,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        curFenlei: '全部',
        isPlain: false,
        indexQueryCondition: '',
        timeRange: [],
		centerType:false,
		previewImg: '',
		previewVisible: false,
		sortType: 'id',
		sortOrder: 'desc',
      }
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
		this.indexQueryCondition = this.$route.query.indexQueryCondition ? this.$route.query.indexQueryCondition : '';
		this.baseUrl = this.$config.baseUrl;
      this.getFenlei();
      this.getList(1, '全部');
    },
    //方法集合
    methods: {
		add(path) {
			let query = {}
			if(this.centerType){
				query.centerType = 1
			}
			this.$router.push({path: path,query:query});
		},
      getFenlei() {
      },
      getList(page, fenlei, ref = '') {
        let params = {page, limit: this.pageSize};
        let searchWhere = {};
        if (this.formSearch.name != '') searchWhere.name = '%' + this.formSearch.name + '%';
		if (this.sortType) searchWhere.sort = this.sortType
		if (this.sortOrder) searchWhere.order = this.sortOrder
        this.$http.get(`config/${this.centerType?'page':'list'}`, {params: Object.assign(params, searchWhere)}).then(res => {
          if (res.data.code == 0) {
            this.dataList = res.data.data.list;
            this.total = Number(res.data.data.total);
            this.pageSize = Number(res.data.data.pageSize);
            this.totalPage = res.data.data.totalPage;
			
			this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
          }
        });
      },
	  sortClick(type){
		  if(this.sortType==type){
			  if(this.sortOrder == 'desc'){
				  this.sortOrder = 'asc'
			  }else{
				  this.sortOrder = 'desc'
			  }
		  }else{
			  this.sortType = type
			  this.sortOrder = 'desc'
		  }
		  this.getList(1, '全部')
	  },
      curChange(page) {
        this.getList(page);
      },
      prevClick(page) {
        this.getList(page);
      },
      sizeChange(size){
        this.pageSize = size
        this.getList(1);
      },
      nextClick(page) {
        this.getList(page);
      },
	  imgPreView(url){
		  this.previewImg = url
		  this.previewVisible = true
	  },
      toDetail(item) {
		  let params = {
			  id: item.id
		  }
		  if(this.centerType){
			  params.centerType = 1
		  }
        this.$router.push({path: '/index/configDetail', query: params});
      },
	btnAuth(tableName,key){
		if(this.centerType){
			return this.isBackAuth(tableName,key)
		}else{
			return this.isAuth(tableName,key)
		}
	},
	backClick() {
		this.$router.push({path: '/index/center'});
	},
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.list-preview .list-form-pv .el-input {
		width: auto;
	}

	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #ccc;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #333;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #666;
		display: inline-block;
	}
	
	.category-1 .item {
		cursor: pointer;
		border: 1px solid #ddd;
		padding: 0 20px;
		margin: 0 12px 12px 0;
		color: #333;
		display: inline-block;
		font-size: 16px;
		line-height: 40px;
		border-radius: 30px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
		background: #fff;
		width: 100%;
		text-align: center;
	}
	
	.category-1 .item:hover {
		cursor: pointer;
		border: 1px solid #28890b;
		margin: 0 12px 12px 0;
		color: #fff;
		background: #28890b;
		width: 100%;
		font-size: 16px;
		line-height: 40px;
		text-align: center;
	}
	
	.category-1 .item.active {
		border: 1px solid #28890b;
		border-radius: 30px;
		margin: 0 12px 12px 0;
		color: #fff;
		background: #28890b;
		width: 100%;
		font-size: 16px;
		line-height: 40px;
	}
	
	.category-2 .item {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item:hover {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item.active {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-3 .item {
		cursor: pointer;
		padding: 0;
		margin: 0 12px 12px 0;
		color: #333;
		display: flex;
		border-color: #ddd;
		min-height: 50px;
		line-height: 2;
		flex-wrap: wrap;
		border-radius: 30px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
		background: none;
		width: 100%;
		justify-content: center;
		border-width: 1px;
		align-items: center;
		border-style: solid;
		text-align: center;
	}
	
	.category-3 .item:hover {
		border: 1px solid #28890b;
		border-radius: 30px;
		padding: 0;
		color: #fff;
		background: #28890b;
		width: 100%;
		line-height: 2;
	}
	
	.category-3 .item.active {
		border: 1px solid #28890b;
		border-radius: 30px;
		padding: 0;
		color: #fff;
		background: #28890b;
		width: 100%;
		line-height: 2;
	}
	
	.list-form-pv .el-input /deep/ .el-input__inner {
		border: 1px solid #ddd;
		border-radius: 0px;
		padding: 0 10px;
		margin: 0;
		outline: none;
		color: #333;
		width: 150px;
		font-size: 14px;
		line-height: 36px;
		height: 36px;
	}
	
	.list-form-pv .el-select /deep/ .el-input__inner {
	}
	
	.list-form-pv .el-date-editor /deep/ .el-input__inner {
		border: 1px solid #ddd;
		border-radius: 0px;
		padding: 0 30px;
		margin: 0;
		outline: none;
		color: #333;
		display: inline-block;
		width: 150px;
		font-size: 14px;
		line-height: 36px;
		height: 36px;
	}
	
	.list .index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.list .index-pv1 .animation-box:hover {
		transform: rotate(0deg) scale(1.02) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
		z-index: 1;
	}
	
	.list .index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.list .index-pv1 .animation-box img:hover {
		transform: rotate(0deg) scale(1.05) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #f4f4f5;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #28890b;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #28890b;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}

	.list4 .item .image {
				clip-path: polygon(0% 0%, 95% 0, 100% 50%, 95% 100%, 0% 100%);
				object-fit: cover;
				display: block;
				width: 100%;
				transition: 0.3s;
				height: 100%;
			}

	.list4 .item:hover .image {
				transform: scale(1);
			}
	
	.list4 .item .content {
				cursor: pointer;
				padding: 20px;
				color: #fff;
				bottom: -100%;
				display: flex;
				font-size: 14px;
				transition: 0.3s;
				clip-path: polygon(0% 0%, 95% 0, 100% 50%, 95% 100%, 0% 100%);
				left: 0;
				background: rgba(0,0,0,.5);
				width: 100%;
				position: absolute;
				height: 100%;
			}
	
	.list4 .item:hover .content {
				bottom: 0;
			}
	
</style>
