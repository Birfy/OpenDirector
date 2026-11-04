/** English shell copy. Keys must match `zh-CN/common.ts`. */
export const common = {
  "app.title": "OpenDirector · Creation Canvas",
  "app.description":
    "A local creation canvas for organizing assets, editing images, arranging timelines and previewing scenes.",
  "app.loading": "Opening canvas…",

  "common.auto": "Auto",
  "common.cancel": "Cancel",
  "common.confirm": "Confirm",
  "common.close": "Close",
  "common.save": "Save",
  "common.saving": "Saving…",
  "common.saved": "Saved",
  "common.retry": "Retry",
  "common.delete": "Delete",
  "common.rename": "Rename",
  "common.upload": "Upload",
  "common.download": "Download",
  "common.search": "Search",
  "common.searchNamed": "Search {name}",
  "common.chooseNamed": "Choose {name}",
  "common.noMatches": "No matches",
  "common.settings": "Settings",
  "common.language": "Language",
  "common.languageHint": "Choose the application language",
  "common.chinese": "中文",
  "common.english": "English",
  "common.theme": "Theme",
  "common.themeHint": "Choose a light or dark theme",
  "common.light": "Light",
  "common.dark": "Dark",
  "common.more": "More",
  "common.done": "Done",
  "common.apply": "Apply",
  "common.reset": "Reset",
  "common.back": "Back",
  "common.next": "Next",
  "common.previous": "Previous",
  "common.untitled": "Untitled",
  "common.unknown": "Unknown",
  "common.none": "None",
  "common.enabled": "On",
  "common.disabled": "Off",
  "common.yes": "Yes",
  "common.no": "No",

  "common.error.retry": "The operation did not complete. Try again.",
  "common.error.network":
    "Cannot reach the local service. Start OpenDirector with scripts/opendirector.py.",
  "common.error.localRequest":
    "The local service request failed ({status}). Check the terminal that started OpenDirector.",
  "common.error.unknown": "Unknown error",
  "common.error.saveUnconfirmed":
    "Save was not confirmed: {reason} Check the current state and try again.",

  "common.count.nodes": {
    one: "{count} node",
    other: "{count} nodes",
  },
  "common.count.items": {
    one: "{count} item",
    other: "{count} items",
  },
  "common.count.results": {
    one: "{count} result",
    other: "{count} results",
  },
  "common.count.images": {
    one: "{count} image",
    other: "{count} images",
  },
  "common.count.videos": {
    one: "{count} video",
    other: "{count} videos",
  },
  "common.count.seconds": {
    one: "{count} second",
    other: "{count} seconds",
  },
} satisfies Record<string, string | { one: string; other: string }>;
