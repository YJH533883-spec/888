/*
 * 数学讲解师网站配置
 * 后续修改品牌文字、课程名称、课程介绍和视频嵌入代码，优先编辑本文件。
 * 视频嵌入代码示例：
 * embedHtml: '<iframe src="YOUR_EMBED_URL" title="课程视频" allowfullscreen></iframe>'
 * 请只填入可信视频平台提供的官方嵌入代码；不要把管理后台链接放在这里。
 */
window.SITE_CONFIG = {
  brandName: "数学讲解师",
  slogan: "思考不止，求证不息。",
  heroEyebrow: "HIGH SCHOOL MATHEMATICS",
  heroDescription: "从理解原理开始，建立自己的数学思维。",
  navItems: [
    { label: "课程体系", href: "#courses" },
    { label: "数学文化", href: "#culture" },
    { label: "关于理念", href: "#about" }
  ],
  cultureTitle: "数学，不止于公式",
  cultureDescription: "从东方算学到古希腊几何，从经典问题到现代思想。数学既是求真的方法，也是一种观察世界的方式。",
  aboutDescription: "不只记住解法，更要理解问题为什么成立。让每一次思考，都有迹可循。",
  footerNote: "以理解为起点，以求证为习惯。",
  courses: [
    {
      id: "01",
      title: "总思维篇",
      subtitle: "建立整体视角，理解数学如何思考",
      status: "ready",
      embedHtml: "",
      description: "从整体上认识高中数学的学习方法、思考路径与知识之间的联系。"
    },
    {
      id: "02",
      title: "短期提分思维篇",
      subtitle: "把有限时间，用在关键之处",
      status: "ready",
      embedHtml: "",
      description: "围绕阶段性复习与提分目标，梳理更有效的学习和解题思路。"
    },
    { id: "03", title: "课程板块 03", subtitle: "课程主题待定", status: "pending", embedHtml: "", description: "课程内容待规划，敬请期待。" },
    { id: "04", title: "课程板块 04", subtitle: "课程主题待定", status: "pending", embedHtml: "", description: "课程内容待规划，敬请期待。" },
    { id: "05", title: "课程板块 05", subtitle: "课程主题待定", status: "pending", embedHtml: "", description: "课程内容待规划，敬请期待。" },
    { id: "06", title: "课程板块 06", subtitle: "课程主题待定", status: "pending", embedHtml: "", description: "课程内容待规划，敬请期待。" },
    { id: "07", title: "课程板块 07", subtitle: "课程主题待定", status: "pending", embedHtml: "", description: "课程内容待规划，敬请期待。" },
    { id: "08", title: "课程板块 08", subtitle: "课程主题待定", status: "pending", embedHtml: "", description: "课程内容待规划，敬请期待。" },
    { id: "09", title: "课程板块 09", subtitle: "课程主题待定", status: "pending", embedHtml: "", description: "课程内容待规划，敬请期待。" },
    { id: "10", title: "课程板块 10", subtitle: "课程主题待定", status: "pending", embedHtml: "", description: "课程内容待规划，敬请期待。" }
  ]
};
