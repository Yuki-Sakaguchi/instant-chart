# Instant Chart
URLにグラフのデータを渡すといい感じのグラフが生成できるサイト

https://instant-chart.firebaseapp.com/?t=%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB&n=React,Angular,Vue.js&v=40,30,20&c=61dafb,dd0231,4fc08d

# deploy
## hosting
https://instant-chart.firebaseapp.com/

```
npm run build
firebase serve
firebase deploy
```

# Firebaseのホスティングの流れ
* `npx create-react-app instant-chart`
* アプリを作る
* Firebaseの管理画面でアプリを作る
* `firebase login`でFirebaseを使えるように
* `firebase init`で使うサービスとかを選択
  * ホスティングだけでよければすでに作っているアプリを選択する
* `firebase.json`の`public`を`build`に変更する
  * `public/index.html`がfirebaseように変わってる場合があるのでDOMのエラーが出た時はいい感じに直す
* `firebase serve`で確認できる
* `firebase deploy`でデプロイ