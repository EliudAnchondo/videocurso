const $video = document.querySelector('video')
    const $play = document.querySelector('#play')
    const $pause = document.querySelector('#pause')
    const $forward = document.querySelector('#forward')
    const $backward = document.querySelector('#backward')
    //const $mute = document.querySelector('#mute')

     $play.addEventListener('click', handlePlay )
     $pause.addEventListener('click', handlePause )
     $forward.addEventListener('click', handleForward )
     $backward.addEventListener('click', handleBackward )
     //$mute.addEventListener('click', handleMute )
     
     function handlePlay(){
         $video.play()
         $play.hidden = true
         $pause.hidden = false
         console.log('le diste click al boton de play')
     }
     function handlePause(){
         $video.pause()
         $play.hidden = false
         $pause.hidden = true
         console.log('le diste click al boton de pause')
     }

     function handleForward(){
        $video.currentTime += 10;
        console.log($video.currentTime)
     }

     function handleBackward(){
        $video.currentTime -= 10;
        console.log($video.currentTime)
     }

     const $progress = document.querySelector('#progress')

     $video.addEventListener ('loadedmetadata', handleLoaded)
     $video.addEventListener ('timeupdate', handletimeupdate)
     $progress.addEventListener('input' , handleInput)

     
     function handleLoaded() {
        $progress.max = Math.ceil($video.duration)

        console.log('a cargado mi video' , $video.duration)
     }
     function handletimeupdate(){
        $progress.value = $video.currentTime
        // console.log($video.currentTime)


     }


     function handleInput(){
         $video.currentTime = $progress.value
        console.log ($progress.value)
     }

    // function handleMute(){
      //  if ($video.volume === 0) {
        //    $video.volume = 1
        //} else {
          //  $video.volume = 0
       // }
        // if(condicion) {
        //  accion  
        // }
     //}