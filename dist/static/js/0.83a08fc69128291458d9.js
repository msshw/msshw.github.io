webpackJsonp([0],{LEyA:function(t,e){},YOGg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"vue-proper-image",data:function(){return{ratio:0}},props:{src:{type:String,default:""},alt:{type:String,default:""},containerStyles:{type:Object,default:function(){return{}}},containerClass:{type:String,default:"vue-proper-image-container"},contentContainerClass:{type:String,default:"vue-proper-image-content"},imageStyles:{type:Object,default:function(){return{}}},imageClass:{type:String,default:"vue-proper-image"},ratioWidth:{type:Number,default:0},ratioHeight:{type:Number,default:0},contentPosition:{type:String,default:""}},computed:{computedContainerStyles:function(){return this.containerStyles||(this.containerStyles={}),this.containerStyles},computedImageStyles:function(){return this.imageStyles||(this.imageStyles={}),this.src&&(this.imageStyles.backgroundImage="url('"+this.src+"')"),this.ratio&&(this.imageStyles.paddingTop=this.ratio+"%"),this.imageStyles},computedContentContainerClass:function(){var t=this.contentPosition?" vue-proper-image-content-"+this.contentPosition:"";return this.contentContainerClass+" "+t}},created:function(){if(this.ratioHeight&&this.ratioWidth)this.ratio=this.ratioHeight/this.ratioWidth*100;else if(!this.ratio){var t=this,e=new Image;e.src=this.src,e.onload=function(){t.ratio=this.height/this.width*100}}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.src&&t.ratio?a("div",{class:t.containerClass,style:t.computedContainerStyles},[a("div",{class:t.imageClass,style:t.computedImageStyles},[a("noscript",[a("img",{attrs:{src:t.src,alt:t.alt}})]),t._v(" "),t.$slots.default?a("div",{class:t.computedContentContainerClass},[t._t("default")],2):t._e()])]):t._e()},staticRenderFns:[]};var r={name:"PageVueProperImage",components:{VueProperImage:a("VU/8")(s,i,!1,function(t){a("LEyA")},null,null).exports},data:function(){return{containerStyles:{}}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-proper-image-demo"},[a("h1",{staticClass:"container"},[t._v("Vue Proper Image component")]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"column"},[a("VueProperImage",{attrs:{containerStyles:t.containerStyles,src:"https://images.unsplash.com/photo-1486174975375-bd1c9e108596?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39eaf4c47cc69019aa7d1d4485325c31&auto=format&fit=crop&w=2550&q=80",alt:"Alt text"}},[a("a",{staticClass:"author",attrs:{href:"https://unsplash.com/@thatsmrbio",target:"_blank"}},[t._v("Matthew Hamilton")]),t._v(" "),a("span",{staticClass:"ratio-text"},[t._v("natural ratio")])]),t._v(" "),a("VueProperImage",{attrs:{containerStyles:t.containerStyles,src:"https://images.unsplash.com/photo-1453791232035-0bd4996082a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4bf4c093887ac0a351969e82bce519f&auto=format&fit=crop&w=2550&q=80",alt:"Alt text",ratioWidth:16,ratioHeight:9,contentPosition:"bottom-right"}},[a("a",{staticClass:"author",attrs:{href:"https://unsplash.com/@veeterzy",target:"_blank"}},[t._v("veeterzy")]),t._v(" "),a("span",{staticClass:"ratio-text"},[t._v("16:9")])]),t._v(" "),a("VueProperImage",{attrs:{containerStyles:t.containerStyles,src:"https://images.unsplash.com/photo-1460647927807-8e664765c97c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=267a84e640dc58ae3e5e382af6d02994&auto=format&fit=crop&w=2550&q=80",alt:"Alt text",ratioWidth:2,ratioHeight:3}},[a("a",{staticClass:"author",attrs:{href:"https://unsplash.com/@randomlies",target:"_blank"}},[t._v("Ashim D’Silva")]),t._v(" "),a("span",{staticClass:"ratio-text"},[t._v("2:3")])])],1),t._v(" "),a("div",{staticClass:"column"},[a("VueProperImage",{attrs:{containerStyles:t.containerStyles,src:"https://images.unsplash.com/photo-1506073561693-14bfb93f7580?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a78944fd4fcd6f968eedc56dbe5b567&auto=format&fit=crop&w=1703&q=80",alt:"Alt text",ratioWidth:1,ratioHeight:1,contentPosition:"top-right"}},[a("a",{staticClass:"author",attrs:{href:"https://unsplash.com/@heysupersimi",target:"_blank"}},[t._v("Simone Hutsch")]),t._v(" "),a("span",{staticClass:"ratio-text"},[t._v("1:1")])]),t._v(" "),a("VueProperImage",{attrs:{containerStyles:t.containerStyles,src:"https://images.unsplash.com/photo-1463471931752-562bc2f299e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7de443d1d5625e2a0d193efc666d1b72&auto=format&fit=crop&w=2553&q=80",alt:"Alt text",ratioWidth:4,ratioHeight:3,contentPosition:"bottom-left"}},[a("a",{staticClass:"author",attrs:{href:"https://unsplash.com/@dmpop",target:"_blank"}},[t._v("Dmitri Popov")]),t._v(" "),a("span",{staticClass:"ratio-text"},[t._v("4:3")])]),t._v(" "),a("VueProperImage",{attrs:{containerStyles:t.containerStyles,src:"https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-0.3.5&s=b7c17c97b26388e30891d416820e30e4&auto=format&fit=crop&w=2547&q=80",alt:"Alt text",ratioWidth:3,ratioHeight:2,contentPosition:"top-right"}},[a("a",{staticClass:"author",attrs:{href:"https://unsplash.com/@etnbr",target:"_blank"}},[t._v("Étienne Beauregard-Riverin")]),t._v(" "),a("span",{staticClass:"ratio-text"},[t._v("3:2")])])],1),t._v(" "),a("div",{staticClass:"column"},[a("VueProperImage",{attrs:{containerStyles:t.containerStyles,src:"https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ee2cea2b71182cf6c9743f86deceb47&auto=format&fit=crop&w=2550&q=80",alt:"Alt text",ratioWidth:2,ratioHeight:1,contentPosition:"top-right"}},[a("a",{staticClass:"author",attrs:{href:"https://unsplash.com/@grantlemons",target:"_blank"}},[t._v("Grant Lemons")]),t._v(" "),a("span",{staticClass:"ratio-text"},[t._v("2:1")])]),t._v(" "),a("VueProperImage",{attrs:{containerStyles:t.containerStyles,src:"https://images.unsplash.com/photo-1489949148730-b1c68cd128bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1e549d474c13c8ce6857d03990857f9&auto=format&fit=crop&w=3934&q=80",alt:"Alt text",ratioWidth:9,ratioHeight:16}},[a("a",{staticClass:"author",attrs:{href:"https://unsplash.com/@abrkett",target:"_blank"}},[t._v("Adam Birkett")]),t._v(" "),a("span",{staticClass:"ratio-text"},[t._v("9:16")])])],1)])])},staticRenderFns:[]};var n=a("VU/8")(r,o,!1,function(t){a("gZWM")},"data-v-0bac0f63",null);e.default=n.exports},gZWM:function(t,e){}});
//# sourceMappingURL=0.83a08fc69128291458d9.js.map