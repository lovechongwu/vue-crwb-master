/* eslint-disable one-var,no-cond-assign */
/**
 * Created by android on 2017/8/29.
 */
export const setCookie = (name, value, expiredays) => {
  var nowDate = new Date()
  nowDate.setDate(nowDate.getDate() + expiredays)
  document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + nowDate.toGMTString())
}

/* 获取cookie */
export const getCookie = (name) => {
  let arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2])
  } else {
    return null
  }
}

export const deleteCookie = (name, value, expiredays) => {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) { document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() }
}
