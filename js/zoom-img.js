
// ========================== phóng to ảnh ==============================
const defaultZooming = new Zooming()
const customZooming = new Zooming()
const config = customZooming.config()
const TRANSITION_DURATION_DEFAULT = config.transitionDuration
const BG_COLOR_DEFAULT = config.bgColor
const SCALE_BASE_DEFAULT = config.scaleBase

document.addEventListener('DOMContentLoaded', function () {
  defaultZooming.listen('#img-default')
})

btnFast.addEventListener('click', function (event) {
  const transitionDuration = toggleActive(btnFast)
    ? 0.2
    : TRANSITION_DURATION_DEFAULT

  customZooming.config({ transitionDuration })
})

btnDark.addEventListener('click', function (event) {
  const bgColor = toggleActive(btnDark)
    ? 'black'
    : BG_COLOR_DEFAULT

  customZooming.config({ bgColor })
})

btnScaleSmall.addEventListener('click', function (event) {
  const scaleBase = toggleActive(btnScaleSmall)
    ? 0.7
    : SCALE_BASE_DEFAULT

  customZooming.config({ scaleBase })
})

function isActive(el) {
  return el.classList.contains(ACTIVE_CLASS)
}

function activate(el) {
  el.classList.add(ACTIVE_CLASS)
}

function deactivate(el) {
  el.classList.remove(ACTIVE_CLASS)
}

function toggleActive(el) {
  if (isActive(el)) {
    deactivate(el)
    return false
  } else {
    activate(el)
    return true
  }
}