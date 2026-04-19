# Mt Fuji Guide

富士山登山の外国人向け情報サイト。2026年の最新ルール、ルート比較、装備、ツアー予約を網羅。

## 技術スタック

- Next.js 15 (App Router)
- React 18
- Lucide React (icons)

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 でアクセス可能。

## 環境変数

`.env.local` を作成して以下を設定：

```
NEXT_PUBLIC_GA_ID=G-X43N2SVLPZ
NEXT_PUBLIC_KLOOK_AID=your_klook_id
NEXT_PUBLIC_VIATOR_PID=your_viator_id
NEXT_PUBLIC_GYG_PARTNER_ID=your_gyg_id
NEXT_PUBLIC_BOOKING_AID=your_booking_id
NEXT_PUBLIC_AMAZON_TAG=your_amazon_tag
```

アフィリエイトIDは各プログラムに申請後に取得。GA IDは既に設定済み。

## デプロイ

Vercelと連携してGitHubにpushすれば自動デプロイされる。

## 構成

```
app/
├── page.jsx          Home
├── routes/           4ルート比較
├── rules/            2026年ルール
├── gear/             装備チェックリスト
├── when/             登山時期ガイド
├── access/           アクセス・宿泊
└── tours/            ガイドツアー比較（マネタイズ主力）

components/           共通コンポーネント
data/                 静的データ（ルート・ツアー・装備情報）
lib/                  ユーティリティ（トークン・アフィリエイト）
```

## コンテンツ更新

- ルート情報: `data/routes.json`
- ツアー情報: `data/tours.json`
- 装備リスト: `data/gear.json`

全ページが自動的にこれらのデータを参照するので、JSONを更新すれば全箇所に反映される。

## ライセンス

Private project.
