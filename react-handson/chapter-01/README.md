# 環境構築
- 公式md:https://github.com/oreilly-japan/learning-react-2e-ja/tree/master/chapter-01

1. React Developer Toolsの導入
Chrome及びFirefox向けブラウザ拡張ツール．Component Treeの中身を見ることができ，デバッグなどに便利．
   - [URL](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja)にアクセスしてインストールする．

2. Node.jsの導入 
Node.jsとは，フルスタックAppを構築するために設計されたJavaScript実行環境．
インストールされているか確認するため，ターミナルで以下のコマンドを実行する．
```Shell
$ node -v
```
8.6.2より新しいバージョンならばよい．
  
  - npmの導入
  npmとは，Node.jsのパッケージ管理システムのこと．Nodeインストール時に同時にインストールされる．
  npmでプロジェクトを作成すると，package.jsonというファイルが生成される．そこには，依存関係などが記載してある.
  JavaScriptのプロジェクトにはたいてい含まれている．これらのソースをクローンしたとき，開発者はnpm insallを実行し依存パッケージをインストールする． 
  ```Shell
    $ npm init -y // package.json生成コマンド
    $ npm install package-name // 依存パッケージのインストールコマンド
  ```
  - yarn
  依存パッケージのバージョンを固定化する．yarn.lockというファイルが含まれており，yarnコマンド実行時はこのファイルを参照する．
  ```Shell
    $ npm install -g yarn // yarnのインストール
    $ yarn add package-name // 特定のパッケージを追加でインストール
  ```