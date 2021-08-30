$('.calculator').on('change input', calculatePrice)
  
  function calculatePrice() {
    let orientation = +$('[name="orientation"]:checked').val()
    let design = +$('[name="design"]:checked').val()
    let dops = $('[name="dops"]:checked')

    let dopsPrice = 0
    for (let i = 0; i < dops.length; i++) {
      let dop = $(dops[i])
      dopsPrice += +dop.val()
    }

    let pages = +$('[name="pages"]').val()

    let sum = +(orientation * +pages) + (+design * +pages) + dopsPrice + 180

    $('.money').html(sum)
  }
