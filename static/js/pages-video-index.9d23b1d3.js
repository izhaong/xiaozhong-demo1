(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video-index"],{"48b6":function(t,a,e){"use strict";e.r(a);var i=e("5df5"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);a["default"]=n.a},"5df5":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{TabCur:0,scrollLeft:0,vdoList:[],tabList:[]}},onHide:function(){this.videoContext.pause()},onLoad:function(){this.getTabList(),this.getTabListById(34)},methods:{meIsPlaying:function(t){var a=t.currentTarget.dataset.palyingindex;this.videoContext=uni.createVideoContext(a),this.vdoList.forEach(function(t,e){var i="vdo".concat(e);a!=i&&uni.createVideoContext(i).pause()})},timestampToTime:function(t){var a=new Date(t),e=a.getFullYear()+"-",i=(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"-",n=a.getDate()+" ",s=a.getHours()+":",o=a.getMinutes()+":",c=a.getSeconds();return e+i+n+s+o+c},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1);var a=this.tabList[this.TabCur].id;this.getTabListById(a)},getTabList:function(){var t=this;uni.showLoading({title:"树叶的一生只是落叶归根吗?",mask:!0}),uni.request({url:"https://api.apiopen.top/videoCategory",success:function(a){if(a.data.code-0===200||"成功!"===a.data.msg){var e=[];t.tabList=[];var i="";Object.assign(e,a.data.result.itemList),e.forEach(function(a){i={title:a.data.title.replace("#",""),id:a.data.id},t.tabList.unshift(i)})}},complete:function(){uni.hideLoading()}})},getTabListById:function(t){var a=this;uni.showLoading({title:"树叶的一生只是落叶归根吗?",mask:!0}),uni.request({url:"https://api.apiopen.top/videoCategoryDetails?id=".concat(t),success:function(t){if(a.vdoList=[],t.data.code-0===200||"成功!"===t.data.msg){var e={};t.data.result.forEach(function(t){e={title:t.data.content.data.title,time:a.timestampToTime(t.data.content.data.date),description:t.data.content.data.description,playUrl:t.data.content.data.playUrl,cover:t.data.content.data.cover.homepage,authorIcon:t.data.content.data.author.icon,authorName:t.data.content.data.author.name,tags:t.data.content.data.tags},a.vdoList.push(e)})}},complete:function(){uni.hideLoading()}})}}};a.default=i},"931d":function(t,a,e){var i=e("db09");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("9dbfbee0",i,!0,{sourceMap:!1,shadowMode:!1})},c69aa:function(t,a,e){"use strict";e.r(a);var i=e("c8a5"),n=e("48b6");for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);e("dc34");var o=e("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"460665fb",null);a["default"]=c.exports},c8a5:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"news"},[e("v-uni-scroll-view",{staticClass:"bg-white nav fixed",attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},t._l(t.tabList,function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-blue cur":"",attrs:{"data-id":i,"item-id":a.id},on:{click:function(a){a=t.$handleEvent(a),t.tabSelect(a)}}},[t._v(t._s(a.title))])}),1),e("v-uni-view",{staticClass:"cu-bar"}),t._l(t.tabList,function(a,i){return i==t.TabCur?e("v-uni-view",{key:i},t._l(t.vdoList,function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-card dynami"},[e("v-uni-view",{staticClass:"shadow zh-item margin-tb-sm"},[e("v-uni-view",{staticClass:"cu-list menu-avatar"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar round lg",style:"background-image:url("+a.authorIcon+");"}),e("v-uni-view",{staticClass:"content flex-sub"},[e("v-uni-view",[t._v(t._s(a.authorName))]),e("v-uni-view",{staticClass:"text-gray text-sm flex justify-between"},[t._v(t._s(a.time))])],1)],1)],1),e("v-uni-view",{staticClass:"text-bold margin-sm"},[t._v(t._s(a.title)),e("v-uni-view",{staticClass:"text-gray text-content"},[t._v(t._s(a.description))])],1),e("v-uni-view",{staticClass:"zh-video"},[e("v-uni-video",{staticClass:"zh-video",attrs:{id:"vdo"+i,"data-palyingIndex":"vdo"+i,src:a.playUrl,poster:a.cover,controls:""},on:{play:function(a){a=t.$handleEvent(a),t.meIsPlaying(a)}}})],1),e("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top"},t._l(a.tags,function(a,i){return a.desc?e("v-uni-view",{key:i,staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+a.headerImage+");"}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(a.name))]),e("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v(t._s(a.desc))])],1)],1):t._e()}),1)],1)],1)}),1):t._e()})],2)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},db09:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".zh-video[data-v-460665fb]{width:100%}.zh-item[data-v-460665fb]{display:block;background-color:#fff;overflow:hidden;border-radius:%?10?%;margin:%?15?% 0}",""])},dc34:function(t,a,e){"use strict";var i=e("931d"),n=e.n(i);n.a}}]);