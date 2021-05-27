AFRAME.registerComponent('cube', {  
    schema: {
      interval: { type: 'number', default: 5000 },
      defaultColor: { type: 'color', default: '#fff' }
    },
    
    init: function() {
      var el = this.el 
      var interval = this.data.interval 
      
      var colors = ["#97B00B", "#0BB071", "#DC3EEC", "#3EECDC", "#EC883E"] 
      
      var i = 0
       
      el.setAttribute('color', colors[0]) 
      
      this.colorInterval = setInterval(function(){ 
        i = (i + 1) % colors.length 
        el.setAttribute('color', colors[i])
      }, interval) 
    },
    
    update: function() {},
  
    remove: function() {
      var el = this.el
      var defaultColor = this.data.defaultColor
      
      clearInterval(this.colorInterval)
      el.setAttribute('color', defaultColor)
    }
  })