
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Login/login","pages/quanxian/home","pages/home/home","pages/dashboard/dashboard","pages/ducha/ducha","pages/shukuducha/shukuducha","pages/question/question","pages/gaowashuiku/gaowashuiku","pages/action-sheet/action-sheet","pages/button/button","pages/card/card","pages/cell/cell","pages/col/col","pages/dialog/dialog","pages/field/field","pages/icon/icon","pages/loading/loading","pages/nav-bar/nav-bar","pages/notice-bar/notice-bar","pages/notify/notify","pages/panel/panel","pages/popup/popup","pages/progress/progress","pages/stepper/stepper","pages/steps/steps","pages/switch/switch","pages/search/search","pages/slider/slider","pages/tab/tab","pages/tabbar/tabbar","pages/tag/tag","pages/toast/toast","pages/transition/transition","pages/tree-select/tree-select","pages/area/area","pages/submit-bar/submit-bar","pages/radio/radio","pages/checkbox/checkbox","pages/goods-action/goods-action","pages/swipe-cell/swipe-cell","pages/datetime-picker/datetime-picker","pages/rate/rate","pages/collapse/collapse","pages/picker/picker","pages/Smallreservoir/Smallreservoir","pages/waterResource/waterResource","pages/waterDamage/waterDamage","pages/Riversystem/Riversystem","pages/Rivermanagement/Rivermanagement","pages/Groundwater/Groundwater","pages/drinkWater/drinkWater","pages/waterResource/waterResource","pages/waterDamage/waterDamage","pages/Riversystem/Riversystem","pages/Rivermanagement/Rivermanagement","pages/Groundwater/Groundwater","pages/drinkWater/drinkWater","pages/seeandxiu/seeandxiu","pages/question/question1","pages/seeandxiu/seeandxiu1","pages/question/question2","pages/seeandxiu/seeandxiu2"],"window":{"navigationBarTitleText":"Vant For Uni-app","navigationBarBackgroundColor":"#f8f8f8","navigationBarTextStyle":"black","backgroundTextStyle":"dark","backgroundColor":"#f8f8f8","navigationStyle":"custom","titleView":false,"animationType":"slide-in-bottom"},"tabBar":{"backgroundColor":"#ffffff","color":"#797979","selectedColor":"#2863DB","borderStyle":"white","list":[{"pagePath":"pages/home/home","iconPath":"static/image/homeCopy.png","selectedIconPath":"static/image/home.png","text":"首页"},{"pagePath":"pages/rate/rate","iconPath":"static/image/picCopy.png","selectedIconPath":"static/image/pic.png","text":"一张图"},{"pagePath":"pages/ducha/ducha","iconPath":"static/image/dctbCopy.png","selectedIconPath":"static/image/dctb.png","text":"督查"},{"pagePath":"pages/collapse/collapse","iconPath":"static/images/wt (2).png","selectedIconPath":"static/images/wt (1).png","text":"问题"},{"pagePath":"pages/popup/popup","iconPath":"static/image/myCopy.png","selectedIconPath":"static/image/my.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"水利督查app","compilerVersion":"3.4.7","entryPagePath":"pages/Login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Login/login","meta":{"isQuit":true},"window":{}},{"path":"/pages/quanxian/home","meta":{},"window":{}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/dashboard/dashboard","meta":{},"window":{}},{"path":"/pages/ducha/ducha","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/shukuducha/shukuducha","meta":{},"window":{}},{"path":"/pages/question/question","meta":{},"window":{}},{"path":"/pages/gaowashuiku/gaowashuiku","meta":{},"window":{}},{"path":"/pages/action-sheet/action-sheet","meta":{},"window":{"navigationBarTitleText":"ActionSheet 上拉菜单"}},{"path":"/pages/button/button","meta":{},"window":{"navigationBarTitleText":"Button 按钮"}},{"path":"/pages/card/card","meta":{},"window":{"navigationBarTitleText":"Card 商品卡片"}},{"path":"/pages/cell/cell","meta":{},"window":{"navigationBarTitleText":"Cell 单元格"}},{"path":"/pages/col/col","meta":{},"window":{"navigationBarTitleText":"Layout 布局"}},{"path":"/pages/dialog/dialog","meta":{},"window":{"navigationBarTitleText":"dialog"}},{"path":"/pages/field/field","meta":{},"window":{"navigationBarTitleText":"Field 输入框"}},{"path":"/pages/icon/icon","meta":{},"window":{"navigationBarTitleText":"icon"}},{"path":"/pages/loading/loading","meta":{},"window":{"navigationBarTitleText":"loading"}},{"path":"/pages/nav-bar/nav-bar","meta":{},"window":{"navigationBarTitleText":"nav-bar"}},{"path":"/pages/notice-bar/notice-bar","meta":{},"window":{"navigationBarTitleText":"notice-bar"}},{"path":"/pages/notify/notify","meta":{},"window":{"navigationBarTitleText":"notify"}},{"path":"/pages/panel/panel","meta":{},"window":{"navigationBarTitleText":"panel"}},{"path":"/pages/popup/popup","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"popup"}},{"path":"/pages/progress/progress","meta":{},"window":{"navigationBarTitleText":"progress"}},{"path":"/pages/stepper/stepper","meta":{},"window":{"navigationBarTitleText":"stepper"}},{"path":"/pages/steps/steps","meta":{},"window":{"navigationBarTitleText":"steps"}},{"path":"/pages/switch/switch","meta":{},"window":{"navigationBarTitleText":"switch"}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"search"}},{"path":"/pages/slider/slider","meta":{},"window":{"navigationBarTitleText":"slider"}},{"path":"/pages/tab/tab","meta":{},"window":{"navigationBarTitleText":"tab"}},{"path":"/pages/tabbar/tabbar","meta":{},"window":{"navigationBarTitleText":"tabbar"}},{"path":"/pages/tag/tag","meta":{},"window":{"navigationBarTitleText":"tag"}},{"path":"/pages/toast/toast","meta":{},"window":{"navigationBarTitleText":"toast"}},{"path":"/pages/transition/transition","meta":{},"window":{"navigationBarTitleText":"transition 动画"}},{"path":"/pages/tree-select/tree-select","meta":{},"window":{"navigationBarTitleText":"TreeSelect 分类选择"}},{"path":"/pages/area/area","meta":{},"window":{"navigationBarTitleText":"Area 省市区选择"}},{"path":"/pages/submit-bar/submit-bar","meta":{},"window":{"navigationBarTitleText":"SubmitBar 提交订单栏"}},{"path":"/pages/radio/radio","meta":{},"window":{"navigationBarTitleText":"radio"}},{"path":"/pages/checkbox/checkbox","meta":{},"window":{"navigationBarTitleText":"checkbox"}},{"path":"/pages/goods-action/goods-action","meta":{},"window":{"navigationBarTitleText":"GoodsAction 商品导航"}},{"path":"/pages/swipe-cell/swipe-cell","meta":{},"window":{"navigationBarTitleText":"SwipeCell 滑动单元格"}},{"path":"/pages/datetime-picker/datetime-picker","meta":{},"window":{"navigationBarTitleText":"DatetimePicker 时间选择"}},{"path":"/pages/rate/rate","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"Rate 评分"}},{"path":"/pages/collapse/collapse","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"collapse折叠面板"}},{"path":"/pages/picker/picker","meta":{},"window":{"navigationBarTitleText":"Picker 选择器"}},{"path":"/pages/Smallreservoir/Smallreservoir","meta":{},"window":{"navigationBarTitleText":"Picker 选择器"}},{"path":"/pages/waterResource/waterResource","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/waterDamage/waterDamage","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Riversystem/Riversystem","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Rivermanagement/Rivermanagement","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Groundwater/Groundwater","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/drinkWater/drinkWater","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/seeandxiu/seeandxiu","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/question/question1","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/seeandxiu/seeandxiu1","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/question/question2","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/seeandxiu/seeandxiu2","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
