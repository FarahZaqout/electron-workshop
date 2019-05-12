const addTabs = document.querySelector('.add-tab')
const path = require('path')


addTabs.addEventListener('click', () => {
    ipcRenderer.send('new tab')
})
