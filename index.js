let faq = document.querySelector('.faq')

faq.addEventListener('click', (e)=> {
    let inner =  e.target.nextElementSibling
    inner.classList.toggle('hidden')
})