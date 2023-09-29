// Use Javascript 
console.log("Welcome TO My Youtube Channel")

// home page return script
function home(){
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('video-list').style.display = 'none';
}

// Make About Page System 
function about() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('play').style.display = 'none';
    document.getElementById('chan').style.display = 'none';
    document.getElementById('com').style.display = 'none';
    document.getElementById('about').style.display = 'block';
}


// video page script 
function video(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('video-list').style.display = 'block';
    document.getElementById('short').style.display = 'none';
}

// shorts page script
function shorts(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('short').style.display = 'block';
    document.getElementById('video-list').style.display = 'none';

}

// Comminity post script 
function com(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('short').style.display = 'none';
    document.getElementById('video-list').style.display = 'none';
    document.getElementById('com').style.display = 'block';
}

// Comminity post script 
function play(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('short').style.display = 'none';
    document.getElementById('video-list').style.display = 'none';
    document.getElementById('play').style.display = 'block';
    document.getElementById('chan').style.display = 'none';
}

// Comminity post script 
function channel(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('short').style.display = 'none';
    document.getElementById('video-list').style.display = 'none';
    document.getElementById('com').style.display = 'none';
    document.getElementById('chan').style.display = 'block';
}
