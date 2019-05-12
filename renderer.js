const { ipcRenderer } = require('electron')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
// const browserTabs = document.querySelector('.browser-tabs')

submit.addEventListener('click', () => {
    ipcRenderer.send('load', input.value)
})