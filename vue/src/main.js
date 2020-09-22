import Vue from 'vue';
import App from './App.vue';
// ヘッダーとフッターのコンポーネントを読み込む
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

// VueRouterを読み込む
import VueRouter from "vue-router";
// ルーティング用のファイル（後述）を読みこむ
import { routes } from "./routes/routes.js";

// jQueryを使えるようにする
import jQuery from 'jquery'

Vue.component('vue-header',Header)
Vue.component('vue-footer',Footer)

// Vue.use()を使って上で読み込んだVueRouterのプラグインを使えるようにする
// これをやらないと任意のVueコンポーネント内でVueRouterが使えない
Vue.use(VueRouter);

// ルーターインスタンスを作成して上述のルーティング用のファイルから読み込んだ
// routes(ルートオプション）を渡す
const router = new VueRouter({
  routes,
  // vue-routerのデフォルトはハッシュモードなのでhistoryモードに変更してハッシュなしでURL遷移できるようにする
  // 参考URL https://router.vuejs.org/ja/guide/essentials/history-mode.html
  mode: 'history',
  // scrollBehaviorについては https://router.vuejs.org/ja/guide/advanced/scroll-behavior.html を参照
  scrollBehavior(to,from,savedPosition){
    // 遷移先のページのパス
    console.log(to);
    // 遷移元（すなわち現在）のページのパス
    console.log(from);
    // 画面遷移したあと遷移元のページに戻った時に遷移元のスクロールポジションがsavedPosition
    console.log(savedPosition);

    // savedPositionが存在すればsavedPositionの位置から画面が始まる
    // savedPositonが存在しなければページの一番上から画面が始まる
    // ちなみにsavedPositionはブラウザの戻る・進むボタンを押した時のみ定義される

    if(savedPosition){
      return savedPosition;
    }else{
      return{
        x:0,
        y:0,
      }
    }


  }
})

// グローバルビフォーガード
// 全てのrouter-linkをクリックした際に画面遷移する前に実行される
router.beforeEach((to,from,next)=>{
  // 参考URL https://router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E3%83%93%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AC%E3%83%BC%E3%83%89
  console.log('global router link');

  // next()で次のページへの遷移を許可する
  // これはグローバルビフォーガードなのでnext(false)にすると全てのリンクが使用不可になる
  next();
})

// Vueインスタンスの中に上で作成したルーターインスタンスが入った定数routerを入れる
new Vue({
    el:'#app',
    router,
    render: h => h(App)
});

// jQueryを使えるようにする
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')
