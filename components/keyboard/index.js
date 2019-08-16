
Component({
  properties: {

  //车牌号码
  plateNumber:{
    type:Array,
    value:["", "", "", "", "", "", "", ""]
  }


  },

  data: {

    //显示
    show: false,


    //省份
    provinces: "京津沪冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁渝",

    //字母
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

    //数字
    numbers: "0123456789",

    //当前输入索引
    activeIndex: -1,

    /* 
    键盘模式 0 关闭状态  1 显示省份输入 2 显示数字和字母输入
    */
    mode: 0

 

  },

  lifetimes: {
    attached: function () {
        console.log(this.data.plateNumber);
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },


  ready(e) {

  },

  methods: {

    inputKeyboard(e) {
      let index = typeof e === 'number' ? e : e.currentTarget.dataset.index;
      this.setData({
        mode: index == 0 ? 1 : 2,
        activeIndex: index,
        show: true
      })
    },

    updateData(v){
      this.triggerEvent("change", v);
    },

    tapDelete(e) {

      let activeIndex = this.data.activeIndex;
      let plateNumber = this.data.plateNumber;
      plateNumber[activeIndex] = "";

      this.updateData(plateNumber);
 
      if (activeIndex > 0) {
        this.inputKeyboard(--activeIndex);
      }
    },

    tapKeyboard(e) {

      let val = e.currentTarget.dataset.val;
      let activeIndex = this.data.activeIndex;
      let plateNumber = this.data.plateNumber;

      plateNumber[activeIndex] = val;
      this.updateData(plateNumber);
     
      if (activeIndex < 7) {
        this.inputKeyboard(++activeIndex);
      } else {
        this.tapFinish();
      }

    },

    tapFinish(e) {

      this.setData({
        show: false,
        mode: 0,
        activeIndex: -1
      });

    },
  }

})
