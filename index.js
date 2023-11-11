const root = document.querySelector(':root')

let paddingRangeValue = document.querySelector('.padding-setting input')
let borderRangeValue = document.querySelector('.border-setting input')
let marginRangeValue = document.querySelector('.margin-setting input')

let paddingValue = document.querySelector('.padding-value')
let borderValue = document.querySelector('.border-value')
let marginValue = document.querySelector('.margin-value')

const settings = {
  padding: { rangeValue: paddingRangeValue.value, value: paddingValue.textContent },
  border: { rangeValue: borderRangeValue.value, value: borderValue.textContent },
  margin: { rangeValue: marginRangeValue.value, value: marginValue.textContent }
}


const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
  input.addEventListener('input', (e) => {
    settings[e.target.id].rangeValue = e.target.value
    settings[e.target.id].value = `${e.target.value}px`
    console.log(settings)

    updateSettings()
    updateDisplay()
  })

});
// root.style.setProperty('--margin-size', '20px')

const updateSettings = () => {
  paddingRangeValue.value = settings.padding.rangeValue
  paddingValue.textContent = settings.padding.value

  borderRangeValue.value = settings.border.rangeValue
  borderValue.textContent = settings.border.value

  marginRangeValue.value = settings.margin.rangeValue
  marginValue.textContent = settings.margin.value
}

const updateDisplay = () => {
  root.style.setProperty('--padding-size', settings.padding.value)
  root.style.setProperty('--border-size', `${+settings.border.rangeValue + +settings.padding.rangeValue}px`)
  root.style.setProperty('--margin-size', `${+settings.border.rangeValue + +settings.padding.rangeValue + +settings.margin.rangeValue}px`)
  root.style.setProperty('--gap', `${+settings.border.rangeValue + +settings.padding.rangeValue + +settings.margin.rangeValue + 1}px`)
}