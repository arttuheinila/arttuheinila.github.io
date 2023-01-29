const date_started_coding = new Date ('June 12, 2019 09:30:00')
const started_coding_seconds = (date_started_coding.valueOf() / 1000) 

function updateTime() {    
    let now_in_sec = Math.floor((Date.now() / 1000))
    let been_coding = (now_in_sec - started_coding_seconds);
    document.getElementById("time-container").innerHTML = been_coding
}

setInterval(updateTime, 1000)
