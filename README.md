## 開発環境構築

- asdf のインストール
  - [Getting Started](https://asdf-vm.com/guide/getting-started.html)
- ts-node のインストール<br>
  - `npm install --save-dev typescript@4.8.3 ts-node@10.9.1`
- express のインストール
  - `npm install express@4.18.1`
  - `npm install --save-dev @types/express@4.17.14`
- ホットリロードの設定（nodemon のインストール）
  - `npm install --save-dev nodemon@2.0.20`
- アクセスログの設定（morgan のインストール）
  - `npm install morgan@1.10.0`
  - `npm install --save-dev @types/morgan@1.9.3`
  ```typescript
  app.use(morgan("dev"));
  ```
- エラーハンドリングの設定

  - `npm install express-async-errors@3.1.1`

  ```typescript
  import "express-async-errors";

  // 省略
  app.use(errorHandler);

  // 省略

  function errorHandler(
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) {
    console.error("Unexpected error occured", err);
    res.status(500).send({
      message: "Unexpected error occured",
    });
  }
  ```

- mysql2 のインストール
  - `npm install mysql2@2.3.3`

## 設計

- コンテキスト図
  - 開発する対象のシステムと、関わる人や他のシステムを整理した図
- ユースケース図
  - 登場人物がシステムで何をするかを整理した図
- クラス図（概念モデル）
  - クラス図を使って概念を整理すると、機能の洗い出しや認識合わせに有効活用することができる
- 機能一覧
- 画面イメージ

### アプリケーション内部の 3 層アーキテクチャ

- プレゼンテーション層（インターフェース層）
  - アプリケーションの利用者とやりとりをする
- ビジネスロジック層（アプリケーション層）
  - ビジネスロジックを実装する
- データアクセス層
  - DB やファイルなどのデータの保存先とやりとりをする

### Table Data Gateway パターン

- データアクセス層の実装
  - Table Data Gateway（Java では DAO パターン）
    - 1 対 1 対応するクラスを作成し、対象のテーブルとのやりとりを記述する
  - Repository
  - Active Record
# reversi-app
