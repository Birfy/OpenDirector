/** Application shell, common actions and formatting vocabulary. */
export const common = {
  "app.title": "OpenDirector · 创作画布",
  "app.description":
    "本地创作画布：组织素材、编辑图像、编排时间线与导演预演。",
  "app.loading": "正在打开画布…",

  "common.auto": "自动",
  "common.cancel": "取消",
  "common.confirm": "确认",
  "common.close": "关闭",
  "common.save": "保存",
  "common.saving": "保存中…",
  "common.saved": "已保存",
  "common.retry": "重试",
  "common.delete": "删除",
  "common.rename": "重命名",
  "common.upload": "上传",
  "common.download": "下载",
  "common.search": "搜索",
  "common.searchNamed": "搜索{name}",
  "common.chooseNamed": "选择{name}",
  "common.noMatches": "未找到匹配项",
  "common.settings": "设置",
  "common.language": "语言",
  "common.languageHint": "选择应用的显示语言",
  "common.chinese": "中文",
  "common.english": "English",
  "common.theme": "主题",
  "common.themeHint": "选择浅色或深色主题",
  "common.light": "浅色",
  "common.dark": "深色",
  "common.more": "更多",
  "common.done": "完成",
  "common.apply": "应用",
  "common.reset": "重置",
  "common.back": "返回",
  "common.next": "下一步",
  "common.previous": "上一步",
  "common.untitled": "未命名",
  "common.unknown": "未知",
  "common.none": "无",
  "common.enabled": "已开启",
  "common.disabled": "已关闭",
  "common.yes": "是",
  "common.no": "否",

  "common.error.retry": "操作未完成，请重试。",
  "common.error.network":
    "无法连接本地服务，请用 scripts/opendirector.py 启动 OpenDirector。",
  "common.error.localRequest":
    "本地服务请求失败（{status}），请检查启动终端。",
  "common.error.unknown": "未知错误",
  "common.error.saveUnconfirmed":
    "保存未确认：{reason} 请核对当前状态后重试。",

  "common.count.nodes": {
    one: "{count} 个节点",
    other: "{count} 个节点",
  },
  "common.count.items": {
    one: "{count} 项",
    other: "{count} 项",
  },
  "common.count.results": {
    one: "{count} 个结果",
    other: "{count} 个结果",
  },
  "common.count.images": {
    one: "{count} 张图片",
    other: "{count} 张图片",
  },
  "common.count.videos": {
    one: "{count} 条视频",
    other: "{count} 条视频",
  },
  "common.count.seconds": {
    one: "{count} 秒",
    other: "{count} 秒",
  },
} as const;
