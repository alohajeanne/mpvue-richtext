<template>
	<div>
		<div class="good-recommand" v-if="mpvuePlatform === 'wx'">
			<div class="boxDetailContainer">
				<div v-html="richText" :style="scale"></div>
			</div>
		</div>
		<div class="good-recommand" v-else-if="mpvuePlatform === 'my'">
			<div class="boxDetailContainer">
				<div v-html="nodes" :style="scale"></div>
			</div>
		</div>
	</div>
</template>

<script>
import parse from 'mini-html-parser2';
export default {

  name: 'mpvueRichText',

  data () {
    return {
    	nodes: []
    }
  },
  props:{
    richText: String
  },
  computed: {
    scale() {
    	let systemInfoSync = mpvue.getSystemInfoSync()
      let radio = systemInfoSync.windowWidth / 750
      let scale = `transform: scale(${radio}); -webkit-transform: scale(${radio});`
      return scale;
    }
  },
  onLoad() {
  	 if (mpvuePlatform === 'my' && this.goodsBasicInfogoods.goodsDesc) {
  		// 支付宝富文本
  		parse(this.richText, (err, nodes) => {
  	   	if (!err) {
  	   		this.nodes = nodes
  	   	}
  	  })
  	}
  }
}
</script>

<style lang="scss" scoped>
</style>
