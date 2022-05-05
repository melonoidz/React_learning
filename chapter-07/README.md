# 7章:フック
個人メモ付き

- 6章で出てこなかったフックについての紹介
  - useEffect
  - useLayoutEffect
  - useReducer
  - useCallback
  - useMemo
  
- 7.1 useEffect
  - 描画が完了した後に，何か処理を実行する
    - 「描画後の副作用」と表現されている
      - EX:チェックボックスをチェック後にalertを出したい場合
  - 7.1.1 依存配列
    - useEffectは，ステート管理のフックと協調する
      - ステートが更新され，コンポーネントツリーが再描画された後に動作する
      - useEffect内での動作条件を分けたい時に「依存配列」を使う
        - 副作用の実行条件を指定できる！
    - 7.1.2 依存配列の同一性チェック
      - JavaScriptの同一=インスタンス評価
        - C++でいうと，ポインタ一致みたいなもの(おそらく)
          - 一見同じ配列でも，インスタンスが異なる場合がある
            - useMemoの使用
              - メモ化した値
              - useCallbackとの違い
                - useMemoはメモ化された値を返すが，useCallbackはメモ化された関数を返す
                  - 関数fnが不変になり，関数内部の処理が1回だけ動く
  
- 7.2 useLayoutEffect
  - useEffectとの違い
    - 動作タイミング
  - 7.2.1 フックの使い方に関するルール
    - フックはコンポーネントのスコープで実行すること
    - 1つのフックで多くのことをせず，分割すること
    - フックは常に描画関数のトップレベルから呼び出さなければならない
      - for文内では呼べない

- 7.3 useReducer
  - 「f→!f」の操作を行うものをリデューサーという
  - ステートの初期値とリデューサー関数を引数に取る
  - 7.3.1 複雑なステート管理
    - 複数の値を包含したステート値の管理や，他のステートに基づいて変化する場合に便利

- 7.4 コンポーネントのパフォーマンス改善
  - フックを使ってパフォーマンス改善ができる
    - まずは愚直に実装，そのあとでよい