console.log('custom script works')


if (typeof window !== 'undefined'){

  var btn_product_titles = document.querySelectorAll('.btn-product-title')
console.log(btn_product_titles)

btn_product_titles.forEach(function (btn) {
  btn.addEventListener('click', function handleProductTitleClick (event) {
    console.log('check')
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




}



console.log('check22')
console.log('check33')



// const blog_post_cards = document.querySelectorAll('.blog-list-page article')
// console.log(blog_post_cards)

// blog_post_cards.forEach(function (card){

//   console.log(card)

// })
