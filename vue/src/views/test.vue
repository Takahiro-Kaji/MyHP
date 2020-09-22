<template>
	<div>
		{{scrollY}}
	<div id="section-logo">
		<ul>
			<li><img src="../assets/test4.png" width="350" height="85" alt=""></li>
			<li><img src="../assets/test3.png" width="350" height="85" alt=""></li>
			<li><img src="../assets/test2.png" width="350" height="85" alt=""></li>
			<li><img src="../assets/test1.png" width="450" height="85" alt=""></li>
		</ul>
	</div>
  <div>
    <button id="btn">クリックでテキスト挿入</button>
    <p id="hogehoge"></p>
  </div>
	</div>
</template>

<script>
import $ from "jquery";

export default {
	name: 'test',
	data(){
		return{
		scrollY: 0
		}
	},
	mounted: function() {
		$('#btn').click(function() {
      $("#hogehoge").text("テキスト挿入");
    });
		var e = window.navigator
    $("#section-logo ul").stop(!0, !1).animate({
      top: 85 * (e - 1) - 250
			}, 1e3, "easeInOutQuad");
		window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
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
#section-logo{
	position:absolute;
	top:100;left:180px;
	width:450px;
	height:85px;
	overflow:hidden;
}

section #section-logo ul{
	position:absolute;
	top:-250px
}
section #section-logo ul li{
	height:85px;
	line-height:85px
	}
</style>