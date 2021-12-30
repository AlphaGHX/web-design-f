//主页图片切换方法
const switchIcon = (element, iconSet, iconInfo) => {
  let jqElements = $(element)
  jqElements.css('opacity', 0).css('filter', 'blur(15px)')
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let icons = jqElements.children('i').eq(0)
      icons.removeClass()
      icons.addClass(iconSet)
      icons.addClass(iconInfo)
      resolve()
    }, 1000)
  }).then(() => {
    jqElements.addClass('notransition')
    jqElements.css(
      'transform',
      'translate(0, -50%) scale(120%, 120%) rotate(5deg)'
    )
    jqElements[0].offsetHeight //清除缓存样式，强制重排
    jqElements.removeClass('notransition')
    jqElements.css('opacity', 1).css('transform', '').css('filter', '')
  })
}

//主页文字切换方法
const switchText = (element, friText, secText) => {
  let jqElements = $(element)
  jqElements.css('opacity', 0).css('filter', 'blur(15px)')
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let texts = jqElements.children('div')
      texts.eq(0).text(friText)
      texts.eq(1).text(secText)
      resolve()
    }, 1000)
  }).then(() => {
    jqElements.addClass('notransition')
    jqElements.css('transform', 'translate(-70%, -50%)')
    jqElements[0].offsetHeight
    jqElements.removeClass('notransition')
    jqElements.css('opacity', 1).css('transform', '').css('filter', '')
  })
}

//主页数据
const pageData = [
  {
    text: [
      'Hello!',
      'Welcome to my page, I will introduce some interesting development software that I have used.'
    ],
    icon: ['fab', 'fa-canadian-maple-leaf'],
    url: '#'
  },
  {
    text: [
      'Sketch',
      'Sketch gives you all the tools you need for a truly collaborative design process.'
    ],
    icon: ['fab', 'fa-sketch'],
    url: 'https://www.sketch.com'
  },
  {
    text: [
      'Figma',
      'Figma connects everyone in the design process so teams can deliver better products, faster.'
    ],
    icon: ['fab', 'fa-figma'],
    url: 'https://www.figma.com'
  },
  {
    text: ['Vue', 'A progressive framework for building user interfaces.'],
    icon: ['fab', 'fa-vuejs'],
    url: 'https://vuejs.org'
  },
  {
    text: ['React', 'A JavaScript library for building user interfaces.'],
    icon: ['fab', 'fa-react'],
    url: 'https://reactjs.org'
  },
  {
    text: [
      'Angular',
      'Angular is a platform for building mobile and desktop web applications.'
    ],
    icon: ['fab', 'fa-angular'],
    url: 'https://angular.io'
  }
]

//当前数据
var nowItem = 0
var timeInterval
var timeTimeout

//设置当前页面
const setPage = (item) => {
  console.log(item)
  switchText(
    document.getElementById('switchText'),
    pageData[item].text[0],
    pageData[item].text[1]
  )
  switchIcon(
    document.getElementById('switchIcon'),
    pageData[item].icon[0],
    pageData[item].icon[1]
  )
}

//循环播放方法
const playSwitch = (timeout) => {
  if (nowItem === pageData.length) {
    nowItem = 0
  }
  setPage(nowItem)
  nowItem++
  timeInterval = setInterval(() => {
    if (nowItem === pageData.length) {
      nowItem = 0
    }
    setPage(nowItem)
    nowItem++
  }, timeout)
}

//单击跳转链接
const toUrl = () => {
  window.open(pageData[nowItem - 1].url)
}

//鼠标进入范围暂停播放
const switchPause = () => {
  clearInterval(timeInterval)
  clearTimeout(timeTimeout)
}

//鼠标离开范围继续3秒后播放
const switchPlay = () => {
  timeTimeout = setTimeout(() => {
    playSwitch(5000)
  }, 3000)
}

//向左切换
const toLeft = () => {
  if (nowItem > 1) {
    nowItem -= 2
  } else {
    nowItem = pageData.length - 1
  }
  setPage(nowItem)
  nowItem++
}

//向右切换
const toRight = () => {
  if (nowItem === pageData.length) {
    nowItem = 0
  }
  setPage(nowItem)
  nowItem++
}

$(document).ready(() => {
  playSwitch(5000)

  let jqElements0 = $('#info0')
  let jqElements1 = $('#info1')
  let jqElements2 = $('#info2')
  $(window).scroll(() => {
    if ($(window).scrollTop() > 0.95 * $(window).height()) {
      jqElements0.find('#switchIconInfo').css('left', '50%')
      jqElements0.find('#switchTextInfo').css('left', '35%').css('opacity', 1)
    } else {
      jqElements0.find('#switchIconInfo').css('left', '')
      jqElements0.find('#switchTextInfo').css('left', '').css('opacity', '')
    }
    if ($(window).scrollTop() > 1.95 * $(window).height()) {
      jqElements1.find('#switchIconInfo').css('left', '50%')
      jqElements1.find('#switchTextInfo').css('left', '35%').css('opacity', 1)
    } else {
      jqElements1.find('#switchIconInfo').css('left', '')
      jqElements1.find('#switchTextInfo').css('left', '').css('opacity', '')
    }
    if ($(window).scrollTop() > 2.95 * $(window).height()) {
      jqElements2.find('#switchIconInfo').css('left', '50%')
      jqElements2.find('#switchTextInfo').css('left', '35%').css('opacity', 1)
    } else {
      jqElements2.find('#switchIconInfo').css('left', '')
      jqElements2.find('#switchTextInfo').css('left', '').css('opacity', '')
    }
  })
})
