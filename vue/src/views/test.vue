<template>
<div>
	<!-- ここにh1を持ってきてabsoluteで固定して
	アニメーションで回ってるように見せる -->
	<div id="sectionLogos">
		<h1 id="section1Logo" class="nonActiveSection nonSection">Section 1</h1>
		<h1 id="section2Logo" class="nonSection">Tokyo Gate Bridge by SONY a7R3</h1>
		<h1 id="section3Logo" class="nonSection">Section 3</h1>
		<h1 id="section5Logo" class="nonSection">Section 5</h1>
	</div>
	<div class="fullPageScroll">
		<section id="section1" class="section section1">
			
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
				at dolorem, eveniet fugit iste maxime nihil sint. Aperiam dolor in
				ipsam nesciunt, nihil odio rem, sit suscipit totam velit voluptate?
			</p>
		</section>
		<section id="section2" class="section section2">
			<div class="imageWrapper">
				<img src="../assets/logo.png" alt="" width="800" height="534" />
			</div>
			
		</section>
		<section id="section3" class="section section3">
			
			<div class="innerScroll">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
					at dolorem, eveniet fugit iste maxime nihil sint. Aperiam dolor in
					ipsam nesciunt, nihil odio rem, sit suscipit totam velit voluptate?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Dignissimos distinctio eius laborum laudantium optio qui vero. A
					aspernatur cupiditate dolore enim ipsam magni necessitatibus nemo
					quae, repudiandae rerum soluta voluptatum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi
					asperiores consequatur cum deserunt, dignissimos ea excepturi fugiat
					id in labore libero odit quasi quis quisquam quo quod sint voluptas.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
					at dolorem, eveniet fugit iste maxime nihil sint. Aperiam dolor in
					ipsam nesciunt, nihil odio rem, sit suscipit totam velit voluptate?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Dignissimos omnis, repudiandae! At atque aut deserunt facilis fugit
					hic ipsa labore molestiae nemo numquam placeat provident quidem quos
					repellendus reprehenderit, sit. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Asperiores at dolorem, eveniet fugit
					iste maxime nihil sint. Aperiam dolor in ipsam nesciunt, nihil odio
					rem, sit suscipit totam velit voluptate?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
					incidunt nam sint ullam. Beatae consequuntur placeat saepe ullam
					vero. Assumenda aut autem dolor enim optio repellat sunt. Facere
					laboriosam, quo? Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Asperiores, quas unde. At, blanditiis dicta dolore doloribus,
					exercitationem facilis fugiat inventore ipsam libero, maiores
					officiis praesentium quae ratione rem repellat vitae? Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Asperiores at dolorem,
					eveniet fugit iste maxime nihil sint. Aperiam dolor in ipsam
					nesciunt, nihil odio rem, sit suscipit totam velit voluptate?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque
					doloremque laudantium neque obcaecati saepe tempora, temporibus
					voluptate? Corporis culpa illum incidunt, ipsum obcaecati officiis
					quae quaerat qui reiciendis sunt. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Asperiores at dolorem, eveniet fugit
					iste maxime nihil sint. Aperiam dolor in ipsam nesciunt, nihil odio
					rem, sit suscipit totam velit voluptate?
				</p>
			</div>
		</section>
		<section id="section4" class="section section4">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/Vk6rbXQK7Qc"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</section>
		<section id="section5" class="section section5">
			
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
				at dolorem, eveniet fugit iste maxime nihil sint. Aperiam dolor in
				ipsam nesciunt, nihil odio rem, sit suscipit totam velit voluptate?
			</p>
		</section>
	</div>
	<nav id="pagination" class="pagination">
      <a id="pagination1" href="#section1"></a>
      <a id="pagination2" href="#section2"></a>
      <a id="pagination3" href="#section3"></a>
      <a id="pagination4" href="#section4"></a>
      <a id="pagination5" href="#section5"></a>
    </nav>
		</div>
</template>

<script>

export default {
	name: 'test',
	data(){
		return{
			currentSection:null,
		}
	},
	mounted : function(){
		/**	<div id="sectionLogo">
		<h1 id="pagLogo1">Section 1</h1>
		<h1 id="pagLogo2">Tokyo Gate Bridge by SONY a7R3</h1>
		<h1 id="pagLogo3">Section 3</h1>
		<h1 id="pagLogo5">Section 5</h1>
	</div>
		 * セクションの表示を浮いて出るようにする
		 * @param element - HTMLElement 現在表示中のスライドのHTML要素を引数に取ります。
		 */
		function activateSection(element) {
			const currentActiveIndex = document.querySelector("#sectionLogos .activeSection");
			if (currentActiveIndex !== null) {
				currentActiveIndex.classList.remove("activeSection");
				currentActiveIndex.classList.add("nonActiveSection");
			}
			const logoId = element.id + "Logo";
			const newActiveIndex = document.querySelector(`h1[id='${logoId}']`);
			newActiveIndex.classList.remove("nonActiveSection");
			newActiveIndex.classList.add("activeSection");
		}


		/**
		 * ページネーションのボタンをクリックした時に各セクションに飛ぶ関数
		 * @param 
		 */
		const paginations = document.querySelectorAll(".pagination a");
		paginations.forEach(pagination => {
			pagination.addEventListener("click", e => {
				// クリック時のデフォルトの挙動ではなく、指定した挙動を行うように指定している
				// https://qiita.com/tochiji/items/4e9e64cabc0a1cd7a1ae
				e.preventDefault();
				// hashはHTML要素のIDをとってくるプロパティの指定の仕方っぽい
				const targetId = e.target.hash;
				// 
				// https://wp-p.info/tpl_rep.php?cat=js-intermediate&fl=r4
				const target = document.querySelector(targetId);
				target.scrollIntoView({ behavior: "smooth" });
				},
			{passive: false}
			);
		});

// Intersection Observer
		const sections = document.querySelectorAll(".section");
		const observerRoot = document.querySelector(".fullPageScroll");
		const options = {
			root: observerRoot,
			rootMargin: "-50% 0px",
			threshold: 0
		};
		const observer = new IntersectionObserver(doWhenIntersect, options);
		sections.forEach(section => {
			observer.observe(section);
		});

		/**
		 * 交差したときに呼び出す関数
		 * @param entries - IntersectionObserverEntry IntersectionObserverが交差したときに渡されるオブジェクトです。
		 */
		function doWhenIntersect(entries) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					activatePagination(entry.target);
					activateSection(entry.target);
				}
			});
		}

		/**
		 * ページネーションの大きさを変える関数
		 * @param element - HTMLElement 現在表示中のスライドのHTML要素を引数に取ります。
		 */
		function activatePagination(element) {
			const currentActiveIndex = document.querySelector("#pagination .active");
			if (currentActiveIndex !== null) {
				currentActiveIndex.classList.remove("active");
			}
			const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
			newActiveIndex.classList.add("active");
		}
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#section2Logo {
	color: #fcfcfc;
}
h1 {
	margin-bottom: 1.8em;
}

p {
	margin-bottom: 2em;
}

.fullPageScroll {
	width: 100%;
	height: 100vh;
	scroll-snap-type: y mandatory;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
}

.section {
	width: 100%;
	height: 100vh;
	padding: 10%;
	scroll-snap-align: start;
}

.section1 {
	background-color: #ffba49;
}

.section2 {
	background-color: #212124;
	position: relative;
}

/* .imageWrapper{
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
} */

.section2 img {
	display: block;
	position: absolute;
	width: 100%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.section2 h1 {
	position: absolute;
	left: 0;
	top: 88%;
	width: 100%;
	color: #ffffff;
	text-align: center;
}

.section3 {
	background-color: #ef5b5b;
}

.section3 .innerScroll {
	height: 80%;
	overflow-y: scroll;
}

.section4 {
	background-color: #a4a9ad;
	padding: 0;
}

.section4 iframe {
	width: 100%;
	height: 100%;
}

.section5 {
	background-color: #20a39e;
}

.pagination {
	position: fixed;
	top: 50%;
	right: 32px;
	transform: translateY(-50%);
}

.pagination a {
	display: block;
	width: 12px;
	height: 12px;
	margin: 24px 0;
	border-radius: 50%;
	background-color: #fcfcfc;
	transition: transform 0.2s;
}

.pagination a.active {
	transform: scale(1.8);
}

.nonSection {
	
	opacity: 0;
	position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  height: 95px;
  font-size: 20px;
  z-index: 100;
}
/* アニメーションについて
https://www.webcreatorbox.com/tech/css3-animation-colour */

@keyframes fade-in {
	0% {
		opacity: 0;
		transform: translate3d(0, 20px, 0);
	} /*アニメーション開始時は不透明度0%*/
	20% {
		opacity: 0;
		transform: translate3d(0, 20px, 0);
	} /*アニメーション開始時は不透明度0%*/

  100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
		} /*アニメーション終了時は不透明度100%*/
  /* 0% { color: #e74c3c; }
  20% { color: #f1c40f; }
  40% { color: #1abc9c; }
  60% { color: #3498db; }
  80% { color: #9b59b6; }
  100% { color: #e74c3c; } */
}
.activeSection {
  animation: fade-in 1.5s;
	opacity: 1;
	position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
  height: 95px;
  font-size: 20px;
  z-index: 100;

}

@keyframes fade-out {
	0% {opacity: 1;
		transform: translate3d(0, 0, 0);
	} /*アニメーション開始時は不透明度0%*/
	20% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	} /*アニメーション開始時は不透明度0%*/

  100% {
		opacity: 0;
		transform: translate3d(0, -20px, 0);
		
		} /*アニメーション終了時は不透明度100%*/
  /* 0% { color: #e74c3c; }
  20% { color: #f1c40f; }
  40% { color: #1abc9c; }
  60% { color: #3498db; }
  80% { color: #9b59b6; }
  100% { color: #e74c3c; } */
}
.nonActiveSection {
	animation: fade-out 1.5s;
	opacity: 0;
	position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
  height: 95px;
  font-size: 20px;
  z-index: 100;
}

</style>