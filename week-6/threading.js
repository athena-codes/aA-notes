// Threading - JS is a single threaded language

function blockingThread() {
    while(true) {
     
    }
    console.log("done!")
}

setTimeout(function() {
    console.log("times up!")
}, 1000 )

blockingThread()   // infinite loop is blocking thread
