# 5章:ReactとJSX
個人メモ付き

chap4などでは，createElementを使用して構築していたが，実際はJSXが多用される．
JSXを用いたReact実装を学ぶ.
----

- 5.1 JSXを使ってReact要素を記述する
  - 5.1.1 JSXとHTMLの違い
    - だいたいに対応している
    - 5.1.1.1 コンポーネントタグ
    - 5.1.1.2 classNameプロパティ
    - 5.1.1.3 JavaScript式
  - 5.1.2 BabelによるJSXの変換
  
- 5.2 レシピのコンポーネントをJSXで記述する
- chap04で実装したものに JSX実装 → Babelによるコンパイル　の流れを行う
- Menuというルートコンポーネントを作成し，そこにデータを処理するコンポーネントを紐づける
- 01.html 参照
- 5.2.1 Reactフラグメント
  - MenuとRecipeは包含関係にあった．並列描画するにはどうするか？
    - Reactでは，2つ以上の要素をコンポーネントの戻り値として返せない
    - フラグメントを使うとdiv不使用でスッキリする
      - React.Fragment
  
- 5.3 webpackを使ってビルド環境を構築する
  - モジュール化とネットワークパフォーマンスのため
    - モジュール化：管理しやすくするため．
    - ネットワークパフォーマンス：依存ファイルを単一ファイルにまとめることで，HTTPリクエスト遅延を抑制できる
  - 5.3.1 プロジェクトの作成
    - Reactプロジェクトを1から作成する
      - 1:プロジェクトフォルダの作成
        以下のコマンドを打つ
        ```Shell
        $ npm init -y // package.json生成コマンド
        $ npm install react react-dom serve // react, react-domのインストール
        ```
      - 2:モジュール分割
        - chap04で作成したRecipeをモジュール分割し，webpackビルドする
          以下のコマンドを打つ
            ```Shell
            $ npm install --save-dev- webpack webpack-cli
            ```
          依存関係のグラフなどが作成される
          Babelをインストールする
          以下のコマンドを打つ
            ```Shell
            $ npm install babel-loader @babel/core --save-dev
            $ npm install @babel/preset-env @babel/preset-react --save-dev
            ```
          Babelの挙動を変更する．「.babelrc」を作成する
          webpackを実行する!
          ```Shell
            $ npx webpack --mode development
          ```
          → 上手くいかなかった source-mapをコメントアウトしたが，ダメ

  - 5.3.2 バンドルファイルのダウンロード 
    - 結合済みファイル：bundle.js
  - 5.3.3 ソースマップ
    - 結合処理後のデバッグ用
  
  - 5.4 Create React App
    - 構築自動化ツール 
    ```Shell
    $ npx create-react-app my-project
    $ cd my-project
    ```
    TypeScriptで始めたい場合は，別途コマンドが存在する