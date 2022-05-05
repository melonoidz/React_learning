# About
[O'REILLY:「React ハンズオンラーニング」](https://www.oreilly.co.jp/books/9784873119380/)の実践履歴:brain:
- 公式githubリポジトリ:https://github.com/oreilly-japan/learning-react-2e-ja

## やりたいこと
- 本の内容を自分用にまとめる
- いつでも使えるようにドキュメントとして残す

## その他意向
- JavaScriptの学習も兼ねたい
- TypeScriptで実装したい
- まとめQを作る

## まとめQ
- Reactプロジェクトの作成
    ```Shell
    $ npx create-react-app my-project
    $ cd my-project
    ```

# 本の構成
1. Reactの世界へようこそ
 - 環境構築
  - React Developer Tools
  - Node.js, npm, yarn

2. React学習に必要なJavaScriptの知識
 - JavaScriptの変遷
  - 変数の定義
  - 関数の作成
  - Babelを用いたコンパイル
  - オブジェクトと配列
  - 非同期処理
  - クラス宣言
  - モジュール

3. JavaScriptにおける関数型プログラミング
 - パス

4. Reactの基本
 - 使用するライブラリ
   - React
   - ReactDOM
 - React要素の使い方
 - Reactコンポーネント
   - 実装方針：関数コンポーネントが良い

5. ReactとJSX
 - JSXを利用することで，JSとシームレスに記述しやすくなる．
   - 使用感はHTMLライク
 - 適切にモジュール化する練習，分割した各ファイルをwebpackで結合する練習
 - Create React Appの紹介
  
6. ステート管理
 - ステートとは：描画後に変更されるデータ
   - フックを利用することで，ステートの更新が可能
     - フック(Hook)：関数コンポーネントでステートを使う時に使用する
       - useState:ステートの初期値を受け取って配列を返す
         - 第二引数には更新関数
       - useRef:DOMノードに直接アクセスできる
         - △使い方に注意．uncontrolled componentになる可能性がある
         - 推奨ではなさそう useStateをなるべく使いたい
       - カスタムフックの作成が可能 
         - 関数切り出しが可能
 - ステートの更新について
   - ステート管理は，一元管理が好ましい 
     - 例えば，rootからchildへ/childからrootへ伝播
       - f=>fというアロー関数
   - Reactコンテキスト
     - スポットにピンポイントに伝播可能
       - ContextProvider/Consumer
     - プロバイダー使用時，データの変更対応は一工夫必要
       - カスタムプロバイダーの使用
     - コンテキストとカスタムフックの併用が最良
       - Appのロジックをフックに切り分けることで，「関心の分離」が促進される

