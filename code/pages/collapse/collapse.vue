<template>
  <div class="app">
	核查
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '../../wxcomponents/vant/toast/toast';
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 4,
      value4: 2,
    };
  },
  methods: {
    onChange(event) {
      const {key} = event.currentTarget.dataset;
      this[key] = event.detail;
    },
  },
  components: {
    wrap,
  },
  onTabItemTap(e){
  	
  },
  onLoad() {
	  
  }

};
</script>

<style>
.demo-radio-group {
  padding: 0 17px;
}

.demo-radio {
  margin-bottom: 10px;
}
</style>
<strong></strong>

