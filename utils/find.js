const loadContent = () => {
  let jqElements = $('.main-content')
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  }).then(() => {
    jqElements.addClass('notransition')
    jqElements.css('transform', 'translate(0%, 100px)')
    jqElements[0].offsetHeight //清除缓存样式，强制重排
    jqElements.removeClass('notransition')
    jqElements.css('opacity', 1).css('transform', '')
  })
}

const showInfo = (element) => {
  $(element).children('div').css('opacity', 1).css('transform', 'scale(1, 1)')
}

const hideInfo = (element) => {
  $(element).children('div').css('opacity', '').css('transform', '')
}

$(document).ready(() => {
  loadContent()
})
