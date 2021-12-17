const swMode = (mode) => {
  const lightThemeData = {
    '--main-background-color': 'var(--bgc-light)',
    '--main-btn-primary-color': 'var(--btn-prc-light)',
    '--main-btn-secondary-color': 'var(--btn-sec-light)',
    '--main-btn-text-color': 'var(--btn-txc-light)',
    '--main-btn-shadow-color': 'var(--btn-sdc-light)'
  }

  const nightThemeData = {
    '--main-background-color': 'var(--bgc-night)',
    '--main-btn-primary-color': 'var(--btn-prc-night)',
    '--main-btn-secondary-color': 'var(--btn-sec-night)',
    '--main-btn-text-color': 'var(--btn-txc-night)',
    '--main-btn-shadow-color': 'var(--btn-sdc-night)'
  }

  let mainTheme = document.documentElement
  if (mode === true) {
    for (const theme in lightThemeData) {
      mainTheme.style.setProperty(theme, lightThemeData[theme])
    }
  } else if (mode === false) {
    for (const theme in nightThemeData) {
      mainTheme.style.setProperty(theme, nightThemeData[theme])
    }
  }
}
