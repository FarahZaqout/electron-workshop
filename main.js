const { BrowserWindow, app, ipcMain, BrowserView } = require('electron')
const path = require('path')

app.on('ready', () => {
    let tabsArray= []
    let win = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true } })
    win.loadFile(path.join(__dirname, 'index.html'))
    // win.setMenu(null)
    let view = new BrowserView()
    win.setBrowserView(view)
    tabsArray.push(win)
    view.setBounds({ x: 50, y: 50, width: 800, height: 600 })
    // view.webContents.loadURL('https://electronjs.org')
    ipcMain.on('load', (event, url) => {
        if (!url.startsWith('https://')) {
            view.webContents.loadURL(`https://${url}`)
        }
        view.webContents.loadURL(url)
    })

    ipcMain.on('new tab', (event) => {
        console.log(event, 'hello')
        let k = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true } })

        let tab = new BrowserView();
        k.setBrowserView(tab)
        tabsArray.push(tab)
        tab.setBounds({ x: 50, y: 50, width: 800, height: 600 })
        k.loadFile(path.join(__dirname, 'index.html'))
    })
})
