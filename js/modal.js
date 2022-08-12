'use strict';

const setWindowVisibility = function(visible)
{
    Array.from(document.querySelectorAll('.modal__holder')).forEach(element => 
        {
            if(visible)
            {
                element.style.display='block'
                element.style.opacity=1
            }
            else
            {
                if(Math.random()<.5)
                    element.style.left = '100vw'
                else
                    element.style.top = '100vh'
                
                setTimeout(()=>
                {
                    element.style.display='none'
                    element.style.left = 0
                    element.style.top = 0
                }, 500)
            }
        })
}

const setContent = function(selector, content)
{
    Array.from(document.querySelectorAll(selector)).forEach(element => element.innerHTML=content)
}

const openWindow = function()
{
    setWindowVisibility(true)
    document.querySelector('.modal__footer button').focus()
}

const closeWindow = function()
{
    setWindowVisibility(0)
}

const okModal = function()
{
    console.log('ok pressed')
    closeWindow()
    return true
}

const cancelModal = function()
{
    console.log('cancel pressed')
    closeWindow()
    return true
}

const clickOutsideModal = function()
{
    console.log('outside pressed')
    closeWindow()
    return true
}

const xModal = function()
{
    console.log('x pressed')
    closeWindow()
    return true
}

const configureModal = function(title, description)
{
    setContent('.modal__title', title)
    setContent('.modal__description', description)
}

const openAgnus = function()
{
    configureModal("ROMANES EUNT DOMUS", "What smokes and has two eyes?")
    openWindow()
}

const openRana = function()
{
    configureModal("ROMANI ITE DOMUM", "POMPEII")
    openWindow()
}

