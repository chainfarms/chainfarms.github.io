(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c266856c"],{"1b39":function(t,e,n){"use strict";var s=n("754e"),r=n.n(s);r.a},"1d62":function(t,e,n){},2129:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contentabout"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row m-auto"},t._l(t.contents,(function(t,e){return n("div",{key:e,staticClass:"about-card col-md-6"},[n("quarter",{attrs:{quaterContent:t}})],1)})),0)])])},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quarter-content"},[n("h1",[t._v(t._s(t.content.number))]),n("h2",[t._v(t._s(t.content.topic))]),n("p",[t._v(t._s(t.content.txt))])])},i=[],o={props:{quaterContent:{type:Object,default:function(){return{number:"01.",topic:"監測",txt:"田間氣象監測，是給予農民安心的保證。我們期許成為田間的守護者，幫忙像擔心孩子受餓著冷父母般的農民，透過氣象數據蒐集，將科學術語轉換成親切問候，在日常中提醒您在田間的作物生長環境變化，就像稻草人，靜靜地在農田中做好守護者的角色。"}}}},data:function(){return{content:this.quaterContent}}},a=o,u=(n("d353"),n("2877")),p=Object(u["a"])(a,c,i,!1,null,"0f37bece",null),d=p.exports,l={props:{quaterContent:{type:Array,default:function(){return[{number:"01.",topic:"監測",txt:"田間氣象監測，是給予農民安心的保證。我們期許成為田間的守護者，幫忙像擔心孩子受餓著冷父母般的農民，透過氣象數據蒐集，將科學術語轉換成親切問候，在日常中提醒您在田間的作物生長環境變化，就像稻草人，靜靜地在農田中做好守護者的角色。"},{number:"02.",topic:"預測",txt:"田間氣象監測，是給予農民安心的保證。我們期許成為田間的守護者，幫忙像擔心孩子受餓著冷父母般的農民，透過氣象數據蒐集，將科學術語轉換成親切問候，在日常中提醒您在田間的作物生長環境變化，就像稻草人，靜靜地在農田中做好守護者的角色。"}]}}},data:function(){return{contents:this.quaterContent}},components:{quarter:d}},m=l,f=(n("ca87"),Object(u["a"])(m,s,r,!1,null,"6b463b08",null));e["a"]=f.exports},"3da3":function(t,e,n){},6332:function(t,e,n){},"754e":function(t,e,n){},8854:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title_darkred"},[n("h4",[t._v(t._s(t.title))])])},r=[],c={props:{title:{type:String,default:"HELLO DARKRED TITLE"}},data:function(){return{}}},i=c,o=(n("f3dd"),n("2877")),a=Object(o["a"])(i,s,r,!1,null,"e74ef906",null);e["a"]=a.exports},ac81:function(t,e,n){"use strict";var s=n("6332"),r=n.n(s);r.a},ad18:function(t,e,n){},ca87:function(t,e,n){"use strict";var s=n("f410"),r=n.n(s);r.a},d353:function(t,e,n){"use strict";var s=n("1d62"),r=n.n(s);r.a},f3dd:function(t,e,n){"use strict";var s=n("3da3"),r=n.n(s);r.a},f410:function(t,e,n){},f6ac:function(t,e,n){"use strict";var s=n("ad18"),r=n.n(s);r.a},f820:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("Banner",{attrs:{words:t.bannerTitle,pictures:t.bannerPictures}}),n("WhoWeAre",{attrs:{contentWords:t.contentWords}}),n("GrayNumber",{attrs:{quaterContent:t.quaterContent}}),n("Performance",{attrs:{performance:t.performance}}),n("Footer")],1)},r=[],c=n("590a"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row m-auto"},[n("div",{staticClass:"topic col col-12 col-md-5"},[n("Title",{attrs:{title:t.words.title}}),n("h1",[t._v(t._s(t.words.topic))])],1),n("div",{staticClass:"txt col col-12 col-md-7"},[n("div",{staticClass:"txt-inside"},[n("p",[t._v(t._s(t.words.content))])])])])])])},o=[],a=n("8854"),u={props:{contentWords:{type:Object,default:function(){return{title:"WHO WE ARE",topic:"我們所提供的服務",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Reiciendis mollitia sunt fugiat animi. Repellendus laboriosam et est,totam, consequuntur quaerat tempore temporibus vero qui sequi officiis ad,nam fugiat! Aspernatur!",button:"了解我們的服務"}}}},data:function(){return{words:this.contentWords,btncolor:["whoweare","hover-btn"]}},components:{Title:a["a"]},methods:{understandMore:function(){this.$router.push("/services")}}},p=u,d=(n("1b39"),n("2877")),l=Object(d["a"])(p,i,o,!1,null,"dafcf7f6",null),m=l.exports,f=n("2129"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"picturecard"},[n("div",{staticClass:"content"},[n("div",{staticClass:"container"},[n("Title",{attrs:{msg:t.content.title}}),n("div",{staticClass:"row m-auto"},t._l(t.content.cards,(function(t,e){return n("div",{key:e,staticClass:"col col-12 col-lg-4 col-md-6"},[n("performanceCard",{attrs:{cards:t}})],1)})),0)],1)])])},b=[],v=n("c92b"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pic-card"},[n("div",{staticClass:"pic"},[n("img",{attrs:{src:t.card.picture}})]),n("div",{staticClass:"txt"},[n("h4",[t._v(t._s(t.card.title))]),n("p",[t._v(t._s(t.card.type))])])])},C=[],x={props:{cards:{type:Object,default:function(){return{picture:"https://picsum.photos/300/200?random=11",title:"露天農田",type:"農民服務"}}}},data:function(){return{card:this.cards}}},w=x,y=(n("ac81"),Object(d["a"])(w,_,C,!1,null,"1d4644ac",null)),g=y.exports,E={props:{performance:{type:Object,default:function(){return{title:"服務實績",cards:[{title:"露天農田",type:"農民服務",picture:"https://picsum.photos/300/200?random=11"},{title:"露天農田",type:"農民服務",picture:"https://picsum.photos/300/200?random=12"}]}}}},data:function(){return{content:this.performance}},components:{Title:v["a"],performanceCard:g}},W=E,A=(n("f6ac"),Object(d["a"])(W,h,b,!1,null,"2b0b423f",null)),O=A.exports,j=n("02eb"),q={data:function(){return{bannerTitle:{title:"關於我們",smalltitle:"ABOUT US",subtitle:"",content:""},bannerPictures:["https://picsum.photos/800/500?random=25","https://picsum.photos/800/500?random=26","https://picsum.photos/800/500?random=27","https://picsum.photos/800/500?random=28","https://picsum.photos/800/500?random=29"],contentWords:{title:"WHO WE ARE",topic:"千農科技有限公司",content:"天氣變化大，若能克服天氣障礙，農民將會更安心。我們將保護農田、成為農民的得力幫手，減少農損、提高作物產量、監測田野、取得田中數據，將科學轉換成農民也能了解的方式，以了解作物生長的變化，輕鬆守護整座農田。",button:"了解我們的服務"},quaterContent:[{number:"01.",topic:"監測",txt:"監測就是希望可以讓農民安心，減少農損、提高作物產量、監測田野、取得田中數據，將科學轉換成農民也能了解的方式，以了解作物生長的變化，輕鬆守護整座農田。"},{number:"02.",topic:"預測",txt:"氣候變遷大，尤其是突如其來的雨，都有可能會使得農民心血毀於一旦，因此透過預測，減少事發的可能，讓天氣變化之前就先預測，讓農民盡早做出相應的對策。"}],license:{topic:"團體預報許可證",content:"氣象預報是特許行業，須得到預報證照才能提供預報資訊。天氣探長團隊由氣象博士與農學專家結合而成，致力投入將學理專業走入田間，帶領農業走向新契機。氣候變遷的可怕在於難以抓摸，但天氣探長的專長就在於帶您認識您的農田，利用天氣變化創造穩贏的營運計畫。",darkredname:"千農科技",picture:"https://picsum.photos/500/500?random=5"},titleBackground:{url:"https://picsum.photos/600/300?random=21",fixed:!0},memberWords:{title:"TEAM MEMBERS",subtitle:"團隊成員",content:"天氣探長，與您一起探索作物健康成長！團隊致力於將農田監測裝置普及化、智能農業施作實際化，希望能在全球氣候環境劇烈變化的現今，及早窺探天機，以協助農友們在農務安排上捷足先登，便可力挽狂瀾，在危機處看見生機。",button:"獲取免費諮詢"},memberCards:[{name:"王小明",picture:"https://picsum.photos/300/300?random=11",description:"三橫一束王、大小的小、明天的明"},{name:"王2明",picture:"https://picsum.photos/300/300?random=12",description:"三橫一束王、大小的小、明天的明"},{name:"王3明",picture:"https://picsum.photos/300/300?random=13",description:"三橫一束王、大小的小、明天的明"}],titleBackground2:{url:"https://picsum.photos/600/300?random=31",fixed:!1},awardsArea:{title:"AWARD WINNING",subtitle:"獲獎經驗",awards:[{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"},{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"},{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"},{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"},{description:"2019 生醫產業與新農業 創新創業競賽",get:"新農業組 金獎"}],pictures:[{description:"三橫一束王、大小的小、明天的明",picture:"https://picsum.photos/600/400?random=11"},{description:"三橫一束王、大小的小、明天的明",picture:"https://picsum.photos/600/400?random=12"},{description:"三橫一束王、大小的小、明天的明",picture:"https://picsum.photos/600/400?random=13"}]},performance:{title:"服務實績",cards:[{title:"屏東香蕉銷日破千噸",type:"",picture:"https://i.epochtimes.com/assets/uploads/2020/07/319da2215b788c093895151dfc17a08e-600x400.jpg"},{title:"用AI種火龍果 搶外銷訂單",type:"",picture:"https://s.yimg.com/ny/api/res/1.2/dm7IxVAzVts7dfUoBxa14A--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjU2/https://media.zenfs.com/ko/chinatimes_newspapers_146/84ef0920b4da6bb9300cbdd4ace09e62"},{title:"無人機於智慧農業應用研討會",type:"",picture:"https://cdn.101mediaimage.com/img/2019/11/11/1911092113cp4pt.jpg"}]}}},components:{Banner:c["a"],WhoWeAre:m,GrayNumber:f["a"],Performance:O,Footer:j["a"]}},T=q,k=Object(d["a"])(T,s,r,!1,null,"9e6cd51a",null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-c266856c.d1e13bb4.js.map