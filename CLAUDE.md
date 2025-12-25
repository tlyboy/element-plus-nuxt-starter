# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Nuxt 4 + Element Plus + Tailwind CSS 4 的启动模板。

## 常用命令

```bash
pnpm dev        # 启动开发服务器
pnpm build      # 生产构建
pnpm preview    # 预览生产构建
pnpm generate   # 静态生成
```

## 技术栈

- **Nuxt 4** - Vue 3 全栈框架
- **Element Plus** - UI 组件库，使用 SCSS 导入样式，支持深色主题
- **Tailwind CSS 4** - 使用 Vite 插件集成
- **@nuxtjs/color-mode** - 深色模式切换
- **pnpm** - 包管理器

## 架构

### 目录结构

- `app/` - Nuxt 应用目录（Nuxt 4 新结构）
  - `pages/` - 页面路由
  - `components/` - Vue 组件
  - `layouts/` - 布局组件
  - `assets/css/main.css` - Tailwind 入口和全局样式
  - `assets/scss/element/` - Element Plus 主题定制
- `server/` - Nitro 服务端
- `public/` - 静态资源

### Element Plus 主题

主题色通过 SCSS 变量覆盖（`app/assets/scss/element/`），主色为 `#3498db`。深色模式使用 `dark.scss` 单独配置。

### Tailwind 图标

使用 `@egoist/tailwindcss-icons` 插件，图标以 `i-` 前缀的 class 使用，如 `i-carbon-sun`。

## 代码风格

- Prettier 配置：不使用分号，使用单引号
- Element Plus 默认使用中文语言包（zh-cn）
