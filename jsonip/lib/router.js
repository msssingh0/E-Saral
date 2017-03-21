Router.route('/',{name:'home',waitOn:function(){this.subscribe('schemes')}});
Router.route('/schemes',{name:'schemes',waitOn:function(){this.subscribe('schemes')}});
Router.route('/editScheme',{name:'editScheme',waitOn:function(){this.subscribe('schemes')}});