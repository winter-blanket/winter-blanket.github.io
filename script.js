console.log('check')
const btn_product_titles = document.querySelectorAll('.btn-product-title')

btn_product_titles.forEach(function (btn) {
  btn.addEventListener('click', function handleProductTitleClick (event) {
    if (event.target.classList.contains('clicked')) {
      event.target.classList.remove('clicked')
      event.target.parentElement.parentElement.nextElementSibling.classList.remove(
        'visible'
      )
    } else {
      event.target.classList.add('clicked')
      event.target.parentElement.parentElement.nextElementSibling.classList.add(
        'visible'
      )
    }
  })
})
