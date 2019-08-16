
 Page({


  data: {
      show:true,
      plateNumber:"粤A23231".split('')
  },

  onChange(e){
     this.setData({
       plateNumber:e.detail
     })
     console.log(e.detail);
  }
  

})