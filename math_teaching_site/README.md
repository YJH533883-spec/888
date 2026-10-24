# 数学教学网站（GitHub Pages 版）

这是一个轻量的静态网站，适合部署到 GitHub Pages。网站前台不展示任何视频服务商名称。

## 文件结构
- `index.html`：首页
- `course.html`：课程详情页
- `style.css`：统一样式，包含手机端优先适配
- `config.js`：集中管理品牌文字、课程名称、介绍和视频嵌入代码

## 如何预览
直接打开 `index.html` 可以预览大部分效果。为避免部分浏览器限制本地脚本，建议用 VS Code 的 Live Server，或部署到 GitHub Pages 后查看。

## 如何修改内容
打开 `config.js`，修改：
- `brandName`：品牌名称
- `slogan`：宣传语
- `heroDescription`：首页简介
- `courses`：课程标题、简介、状态、视频嵌入代码

课程状态：
- `status: "ready"`：已规划/可展示的课程
- `status: "pending"`：显示“待更新”

## 后续接入视频
在对应课程对象中填入 `embedHtml`，例如：

```js
{
  id: "01",
  title: "总思维篇",
  subtitle: "建立整体视角，理解数学如何思考",
  status: "ready",
  embedHtml: '<iframe src="在这里放入平台提供的嵌入地址" title="课程视频" allowfullscreen></iframe>',
  description: "课程介绍"
}
```

注意：
1. 使用视频平台提供的网页嵌入代码/播放地址，不要使用后台管理链接。
2. 部分视频平台可能限制跨域播放、外部网站播放或要求特定参数，届时需要按其官方嵌入方式调整。
3. 请只将可公开访问、允许嵌入播放的视频地址放入前端配置。写在 `config.js` 的内容会被网站访客查看。
4. 当前版本没有后台管理系统。修改 `config.js` 后提交到 GitHub，网站更新后即可生效。

## 部署到 GitHub Pages
1. 新建一个 GitHub 仓库。
2. 上传本项目中的四个文件。
3. 在仓库打开 **Settings → Pages**。
4. 在 **Build and deployment** 中选择从分支部署（Deploy from a branch）。
5. 选择 `main` 分支和 `/(root)` 目录，保存。
6. 等待 GitHub Pages 发布完成后，使用页面提供的网址访问。

## 设计说明
- 手机端优先：小屏幕下课程卡片为两列，正文和按钮保持可读、易点击。
- 首页 + 独立课程详情页：点击课程卡片进入 `course.html?id=01` 这样的详情页。
- 10 个课程位置已预留。第 3—10 个只使用临时编号，没有替你规划课程主题。
- 视觉采用现代极简为主，辅以几何、圆轨迹和数学符号；没有加入繁杂的历史图片，避免手机端首屏拥挤。
