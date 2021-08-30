$(function () {
  /**
   * Data
   */

  let intervalId;             // айди итервала
  let pomodoroLength = 25 * 60// длина помидорки в секундах
  // let pomodoroLength = document.getElementById('pomidor').value
  let shortBreakLength = 5 * 60 // длинна короткого перерыва
  let logBrackLength = 15 * 60 // длинна большего перерыва
  let longBrackPeriud = 4 // количество помидорок до длиного перерыва
  let time = pomodoroLength // текущее время в секундах
  let currentState = ['p', 'b']
  let pomodoroCount = 0 // количество пройденных помидоров
  /**
   * Functions
   */
  
  function settingsBl() {
    pomodoroLength = 0
    let vremya = document.getElementById('pomidor').value
    pomodoroLength = vremya
    // alert("PRivet")
    time = pomodoroLength
    play()
    $('.modal').removeClass('show')
    
  }
  $('#uniq').on("submit",settingsBl)
  
  
  // function settingsBl() {
  //   pomodoroLength = document.getElementById('pomidor').value
  // }
  
  // function settingsBl() {
  //   pomodoroLength = parcelInt(document.getElementById('pomidor').value)
  //   console.log(settingsBl)
  // }
  
  // function settingsBl() {
  //   pomodoroLength = +(document.getElementById('pomidor').value)
  // }
  
  // pBtn.onclick = function() {
  //   pomodoroLength = document.getElementById('pomidor').value;
  //   document.getElementById("pomidor").innerHTML = pomodoroLength;
  // };
  
  // $('.saveBtn').on('click', function () {
  //   pomodoroLength = document.getElementById('pomidor').value;
  // });
  
  // pBtn.onclick = function() {
  //   pomodoroLength = document.querySelector("pomidor");
  // };
  
  function play() {
    console.log('Текущийй помидор: ', pomodoroCount)

    $('#progress circle').css('transition', 'all 1s linear')

    // проверка на то закончилось время или нет
    if (time === -1) {
      // Менять состояние нашего таймера
      currentState.reverse()
      $('#progress circle').css('transition', 'none')

      if (currentState[0] === 'p') {
        time = pomodoroLength

        $('.bg-red').css('opacity', '1')
        $('.bg-blue').css('opacity', '0')
      }

      if (currentState[0] === 'b') {
        pomodoroCount++

        // Здесь добавляем првоерку на то какой помидор идет
        // и если этот помидор делится без остатка на 4
        // то в переменную time записываем longBrackPeriud

        if (pomodoroCount % longBrackPeriud === 0) {
          time = logBrackLength
        } else {
          time = shortBreakLength
        }


        $('.bg-red').css('opacity', '0')
        $('.bg-blue').css('opacity', '1')
      }
    }

    let minutes = Math.floor(time / 60)
    let seconds = time % 60;

    $('.min').html(minutes > 9 ? minutes : '0' + minutes)
    $('.sec').html(seconds > 9 ? seconds : '0' + seconds)

    // Отрисовка прогресс бара (кружок)

    let allTime

    if (currentState[0] === 'p') allTime = pomodoroLength
    if (currentState[0] === 'b' && pomodoroCount % longBrackPeriud === 0) allTime = logBrackLength
    if (currentState[0] === 'b' && pomodoroCount % longBrackPeriud !== 0) allTime = shortBreakLength

    let progress = (time / allTime) * 880

    $('#progress circle').attr('stroke-dashoffset', progress)

    time--
  }

  /**
   * Handlers
   */
  $('.js-start').on('click', function () {
    intervalId = window.setInterval(play, 1000)

    $('.js-pause').show()
    $('.js-stop').show()
    $('.js-start').hide()
  });

  $('.js-pause').on('click', function () {
    window.clearInterval(intervalId)

    $('.js-pause').hide()
    $('.js-continue').show()
  })

  $('.js-continue').on('click', function () {
    intervalId = window.setInterval(play, 1000)

    $('.js-continue').hide()
    $('.js-pause').show()
  })

  $('.js-stop').on('click', function () {
    // Как сбросить наш таймер к начальному состоянию?

    window.clearInterval(intervalId)
    time = pomodoroLength
    currentState = ['p', 'b']

    $('.js-stop').hide()
    $('.js-pause').hide()
    $('.js-continue').hide()
    $('.js-start').show()

    $('.bg-red').css('opacity', '1')
    $('.bg-blue').css('opacity', '0')

    play()
  })

  play()

  // Modal

  $('.settings-btn').on('click', function() {
    $('.modal').addClass('show')
    $('.js-pause').click()
  })

  $('.js-modalHide, .modal-overlay').on('click', function() {
    $('.modal').removeClass('show')
  })


  $('#pomodoro').val(pomodoroLength / 60)
  $('#short-break').val(shortBreakLength / 60)
  $('#long-break').val(logBrackLength / 60)
  $('#period').val(longBrackPeriud / 60)
  
  $('.js-settingsForm').on('submit', function(event) {
    event.preventDefault()
  })

});

