// inject CSS <style> into <head> of page
export default function addStyleToPage(cssRule) {
    const css = document.createElement('style')
    css.type = 'text/css'
    css.appendChild(document.createTextNode(cssRule))
    document.getElementsByTagName('head')[0].appendChild(css)
}
