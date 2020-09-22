<template>
<div>
<div class="box box1">
  <h2>box1</h2>
</div><!--box-->
<div class="box box2">
  <h2>box2</h2>
</div><!--box-->
<div class="box box3">
  <h2>box3</h2>
</div><!--box-->
<div class="box box4">
  <h2>box4</h2>
</div>
	</div>
</template>




<script src="https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js"></script>


<script>
import {$,jQuery} from "jquery";

export default {
	name: 'test',
	data(){
		return{
		}
	},
	mounted: function() {
		jQuery(function($){
		var current;
$.scrollify({section:".box",});
});
	}
	
}

// とりあえず、これで動いてた
// function() {
//     var e = window.navigator
//             $("#section-logo ul").stop(!0, !1).animate({
//                 top: 85 * (e - 1) - 250
//             }, 1e3, "easeInOutQuad", fcunction() {}),
// 1e3=>https://www.webopixel.net/javascript/940.html
// easeInOutQuad=>https://easings.net/ja


//         $("#section-logo").on({
//             mouseenter: function(e) {},
//             mouseleave: function(e) {},
//             click: function(e) {
//                 f(b[l])
//             }
//         })
</script>

<style>
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
.box{
	color: #fff;
	height: 100vh;
	padding: 40px;
}
.box1{
	background: #F43959;
}
.box2{
	background: #4CA4CF;
}
.box3{
	background: #e5cf54;
}
.box4{
	background: #45CB99;
}
</style>