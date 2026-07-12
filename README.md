# 瑪諾藥局官網

這是一個以 Vue 3 + Vite 建立的藥局品牌官網專案，主要用來呈現瑪諾藥局的品牌形象、服務內容、門市據點與聯絡資訊。

## 專案內容

目前網站包含以下主要區塊：

- 首頁輪播 Hero Carousel
- 亮點統計 Highlight Facts
- 關於我們 About Us
- 核心價值 Core Values
- 服務項目 Our Services（含互動式 modal）
- 門市據點 Store Branches
- 聯絡我們 Contact Us（線上諮詢表單）
- 頁尾 Footer

## 技術堆疊

- Vue 3
- Vite
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## 本機開發

安裝依賴：

```bash
npm install
```

啟動開發伺服器：

```bash
npm run dev
```

建立正式版：

```bash
npm run build
```

預覽正式版：

```bash
npm run preview
```

## GitHub Pages 部署

此專案已設定 GitHub Actions 自動部署流程，部署檔案位於：

- `.github/workflows/deploy.yml`

部署時會使用 GitHub Pages 的公開網址：

```text
https://ariesism.github.io/mano-pharmacy-vue/
```

## 主要重點

- 使用 `vite.config.js` 的 `base` 路徑適配 GitHub Pages 子路徑
- 靜態資源會在 `npm run build` 後輸出到 `dist/`
- Pages 的 Source 建議設為 `GitHub Actions`

## 專案目的

這個網站的目標是讓訪客能快速了解：

- 藥局的品牌理念與服務精神
- 主要提供的藥事與保健服務
- 全台門市資訊
- 透過線上表單與客服聯繫

