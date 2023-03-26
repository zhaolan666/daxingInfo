<template>
	<view class="container bg-f7">
		<!-- p1 -->
		<view class="padv10"></view>
		<view class="bg-white padv20">
			<view class="c-m flex  a-c j-s padh20">
				<view class="flex a-c">
					<view class="iconfont icon-shaixuan font38"></view>
					<view class="padh10 font30">条件筛选</view>
				</view>

				<view @click="showMore=!showMore" class="iconfont c-d font40"
					:class="{'icon-yihangyige22':!showMore,'icon-yihangyige23':showMore}">
				</view>

			</view>
			<sb-line></sb-line>
			<view class=" flex padv6 padh20">
				<template v-if="!showMore">
					<view class="flex mar30 marv10" v-for="(d,i) in dictTop5" :key="i">
						<view class="font27">
							{{d.type}}
						</view>
						<view class="padh6"></view>
						<u-icon name="arrow-down" size="13" color="#ccc"></u-icon>
					</view>
				</template>

				<template v-else>
					<view class="flex mar30 marv10" v-for="(d,i) in dict" :key="i">
						<view class="font27">
							{{d.type}}
						</view>
						<view class="padh6"></view>
						<u-icon name="arrow-down" size="13" color="#ccc"></u-icon>
					</view>
				</template>
			</view>
		</view>
		<!-- p2 -->
		<view class="padv10"></view>
		<view class="bg-white  pad20">
			<view class="flex a-c c-m">
				<view class="iconfont icon-shaixuanzhong  font40">

				</view>
				<view class="padh10 font26">
					已选(14)个
				</view>
			</view>
			<sb-line></sb-line>
			<view class="flex pav6 padh20">
				<scroll-view scroll-x>
					<view class="flex flex-nowrap">
						<u-tag :text="`条件${i+1}`" v-for="(item, i) in 14" :key="i" size="mini" type="error" closable>
						</u-tag>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- p3 -->
		<view class="flex j-s bg-white">
			<view style="width: 240rpx;">
				<view class="th j-a-c flex c-w" style="background-color: #0Ec7ab;">
					产品
				</view>
				<view class="product flex j-a-c" v-for="(item, i) in products" :key="i">
					<template v-if="item.icon">
						<image style="width: 60rpx; height: 60rpx;"
							:src="`http://43.142.29.179:7700/public/xlxxzx_imgs/banks/${item.icon}`">
						</image>
						<view class="padh6"></view>
					</template>
					<view class="font26">
						{{item.name}}
					</view>
				</view>
			</view>

			<scroll-view scroll-x style="width: calc(100vw - 242rpx);">
				<!-- 表头 -->
				<view class="flex flex-nowrap">
					<view class="th j-a-c flex c-w" v-for="(c,i) in columns" :key="i">
						{{c.label}}
					</view>
				</view>

				<!-- 内容 -->
				<view class="flex flex-nowrap" v-for="(b,i) in products" :key="i">
					<view class="product flex j-a-c" v-for="(c, j) in columns" :key="j" style="color:orange">
						{{b[c.key]}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>


<script>
	let dict = [{
		"type": "主借人年龄",
		"values": ["18-29", "21-65", "65以上"]
	}, {
		"type": "主借人身份",
		"values": ["法人", "股东", "个独企业投资者", "合伙人"]
	}, {
		"type": "查询次数",
		"values": [
			[{
				"type": "近一月",
				"values": ["零次", "1次", "2次", "3次", "4次", "5次以上"]
			}, {
				"type": "近二年逾期",
				"values": ["零次", "1次", "2次", "3次", "4次", "5次以上"]
			}, {
				"type": "近三年逾期",
				"values": ["零次", "1次", "2次", "3次", "4次", "5次以上"]
			}, {
				"type": "近六年逾期",
				"values": ["零次", "1次", "2次", "3次", "4次", "5次以上"]
			}]
		]
	}, {
		"type": "逾期",
		"values": [{
				"type": "无逾期",
				"values": []
			},
			{
				"type": "近一年逾期",
				"values": ["1次", "2次", "3次"]
			},
			{

				"type": "近二年逾期",
				"values": ["1次", "2次", "3次"]
			},
			{

				"type": "近五年逾期",
				"values": ["1次", "2次", "3次"]
			},
			{

				"type": "累计逾期近一年",
				"values": ["1次", "2次", "3次", "4次", "5次", "6次", "7次", "8次", "9次", "10次", "11次", "12次", "13次",
					"14次", "15次"
				]
			},
			{
				"type": "累计逾期近两年",
				"values": ["1次", "2次", "3次", "4次", "5次", "6次", "7次", "8次", "9次", "10次", "11次", "12次", "13次",
					"14次", "15次"
				]
			}
		]
	}, {
		"type": "房产类型",
		"values": ["住宅", "公寓", "别墅", "商铺", "办公楼", "厂房"]
	}, {
		"type": "房龄",
		"values": ["1-25年", "26-30年", "38年以上"]
	}, {
		"type": "面积",
		"values": ["无要求", "面积1-46平m2", "40-50", "51-70", "70-200", "面积选项", "里", "四个面积选择"]
	}, {
		"type": "小孩房",
		"values": ["是", "否", "二选一"]
	}, {
		"type": "持证时间",
		"values": ["新产证", "3个月", "6个月", "12个月"]
	}, {
		"type": "营业执照",
		"values": ["新公司", "3个月", "6个月", "12个月", "24个月"]
	}, {
		"type": "持股时间",
		"values": ["新入股", "3个月", "6个月", "12个月", "24个月"]
	}, {
		"type": "放款账户",
		"values": ["主借人账号", "三方对公", "三方对私"]
	}, {
		"type": "额度",
		"values": ["30-100", "100-500", "500-1000", "1000-1500", "1500-2000", "2000-3000", "3000-5000"]
	}, {
		"type": "抵押准入",
		"values": ["1押", "2押"]
	}]

	let columns = [{
		"key": "额度(万)",
		"label": "额度(万)"
	}, {
		"key": "利率%",
		"label": "利率%"
	}, {
		"key": "还款方式",
		"label": "还款方式"
	}, {
		"key": "抵押准入",
		"label": "抵押准入"
	}, {
		"key": "最高成数",
		"label": "最高成数"
	}, {
		"key": "借款人年龄(岁)",
		"label": "借款人年龄(岁)"
	}, {
		"key": "借款人身份",
		"label": "借款人身份"
	}, {
		"key": "查询次数",
		"label": "查询次数"
	}, {
		"key": "逾期",
		"label": "逾期"
	}, {
		"key": "权利人",
		"label": "权利人"
	}, {
		"key": "房产类型",
		"label": "房产类型"
	}, {
		"key": "房龄(年)",
		"label": "房龄(年)"
	}, {
		"key": "面积(m2)",
		"label": "面积(m2)"
	}, {
		"key": "小孩房",
		"label": "小孩房"
	}, {
		"key": "持证时间",
		"label": "持证时间"
	}, {
		"key": "备用房",
		"label": "备用房"
	}, {
		"key": "营业执照(月)",
		"label": "营业执照(月)"
	}, {
		"key": "持股时间(月)",
		"label": "持股时间(月)"
	}, {
		"key": "流水覆盖(倍)",
		"label": "流水覆盖(倍)"
	}, {
		"key": "进入行业(天)",
		"label": "进入行业(天)"
	}, {
		"key": "放款方式",
		"label": "放款方式"
	}, {
		"key": "放款账户",
		"label": "放款账户"
	}, {
		"key": "流程",
		"label": "流程"
	}, {
		"key": "资料",
		"label": "资料"
	}]

	export default {
		onShareAppMessage() {

		},
		onShareTimeline() {

		},
		data() {
			return {
				dict,
				products: [],
				columns,
				showMore: false
			}
		},
		methods: {
			getList() {
				uni.request({
					url: 'http://43.142.29.179:7700/public/xlxxzx_imgs/products.json',
					success: ({
						statusCode,
						data
					}) => {
						if (statusCode === 200) {
							this.products = data
						}
					}
				})
			}
		},
		computed: {
			dictTop5() {
				return dict.slice(0, 5)
			}
		},
		onReady() {
			this.getList()
		}
	}
</script>

<style lang="scss" scoped>
	.th {
		background-color: #17BeDc;
		min-width: 240rpx;
		border: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		height: 70rpx;
	}

	.product {
		height: 250rpx;
		min-width: 240rpx;
		border-right: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
</style>
