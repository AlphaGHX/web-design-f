const inputeTextFocus = () => {
  $('#inputeTextFocus').addClass('placeholder-active')
}

const inputeTextBlur = () => {
  if ($('#inputUsername').val().length === 0) {
    $('#inputeTextFocus').removeClass('placeholder-active')
  }
}

const inputePwdFocus = () => {
  $('#inputePwdFocus').addClass('placeholder-active')
}

const inputePwdBlur = () => {
  if ($('#inputPassword').val().length === 0) {
    $('#inputePwdFocus').removeClass('placeholder-active')
  }
}

const switchIcon = (element, iconSet, iconInfo, text) => {
  let jqElements = $(element)
  jqElements.css('opacity', 0)
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let icons = jqElements.children('i').eq(0)
      icons.removeClass()
      icons.addClass(iconSet)
      icons.addClass(iconInfo)
      jqElements.children('div').eq(0).text(text)
      resolve()
    }, 1000)
  }).then(() => {
    jqElements.addClass('notransition')
    jqElements.css(
      'transform',
      'translate(-80%, -20%) scale(120%, 120%) rotate(-5deg)'
    )
    jqElements[0].offsetHeight //清除缓存样式，强制重排
    jqElements.removeClass('notransition')
    jqElements.css('opacity', 1).css('transform', '')
  })
}

const switchInput = (element) => {
  let jqElements = $(element)
  jqElements.css('opacity', 0)
  setTimeout(() => {
    jqElements.addClass('notransition')
    jqElements.css('transform', 'translate(0, -50%)')
    jqElements[0].offsetHeight //清除缓存样式，强制重排
    jqElements.removeClass('notransition')
    jqElements.css('opacity', 1).css('transform', '')
  }, 1000)
}

const login = () => {
  let userName = $('#inputUsername').val()
  let password = $('#inputPassword').val()
  if (
    sessionStorage.userName === userName &&
    sessionStorage.password === password
  ) {
    switchIcon(
      document.getElementById('switchIcon'),
      'far',
      'fa-check-circle',
      'Hello! ' + userName
    )
  } else {
    switchIcon(
      document.getElementById('switchIcon'),
      'far',
      'fa-times-circle',
      'Error! check your info'
    )
  }
}

const register = () => {
  sessionStorage.userName = $('#inputUsername').val()
  sessionStorage.password = $('#inputPassword').val()
  switchIcon(
    document.getElementById('switchIcon'),
    'far',
    'fa-check-circle',
    'Success! Thank you'
  )
  $('#inputUsername').val('')
  $('#inputPassword').val('')
}

$(document).ready(() => {
  switchIcon(
    document.getElementById('switchIcon'),
    'fab',
    'fa-telegram-plane',
    'Sign in or Sign up'
  )
  switchInput(document.getElementById('switchInput'))
})
