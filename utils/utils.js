// 黑夜模式与白天模式
const setThemeMode = (mode) => {
  const themeData = {
    '--main-background-color': 'var(--bgc-' + mode + ')',
    '--main-btn-primary-color': 'var(--btn-prc-' + mode + ')',
    '--main-btn-secondary-color': 'var(--btn-sec-' + mode + ')',
    '--main-btn-text-color': 'var(--btn-txc-' + mode + ')',
    '--main-btn-shadow-color': 'var(--btn-sdc-' + mode + ')'
  }

  const mainTheme = document.documentElement

  for (const theme in themeData) {
    mainTheme.style.setProperty(theme, themeData[theme])
  }

  sessionStorage.nowThemeMode = mode
}

const THEME_MODE = {
  LIGHT: 'light',
  NIGHT: 'night'
}

let nowThemeMode = sessionStorage.nowThemeMode
  ? sessionStorage.nowThemeMode
  : THEME_MODE.LIGHT

setThemeMode(nowThemeMode)

// 顶栏部分

// 顶栏跳转
const toPage = (data) => {
  window.location.href = data.getAttribute('data-page') + '.html'
}

// 顶栏动画
const switchTop = () => {
  let jqElements = $('.main-top')
  jqElements.css('top', '-100px')
  setTimeout(() => {
    jqElements.css('top', '0')
  }, 1000)
}

$(document).ready(() => {
  switchTop()
})
