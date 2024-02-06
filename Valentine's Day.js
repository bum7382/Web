const text = ['진짜로?', 
'정말로?',
'다시 생각해봐!',
'마지막 기회야',
'아니를 누른 거 확실하지?',
'분명 후회할거야!',
'다른 걸 생각해봐',
'진짜 정말 완전 확신해?',
'실수일거야...',
'인정을 베풀어봐!',
'너무 쿨하게 굴지마',
'혹시 마음이 바뀌었어?',
'다시 생각해보지 않을래?',
'이게 진짜 너의 답이 맞지?',
'넌 내 마음을 짓밟았어 :(', ]
let currentScale = 1;
var count = 0;
const clickCountSpan = document.getElementById('clickCount');
function check(yes_btn, no_btn){
    if(count < text.length-1){
        count++;
        no_btn.innerText = text[count];
        nobtnSize(no_btn,count)
    }
    bigger(yes_btn, no_btn);
}



function bigger(yes_btn, no_btn){
    currentScale *= 1.15;
    yes_btn.style.transform = `scale(${currentScale})`;
    adjustPosition(yes_btn, no_btn);
}

function adjustPosition(yes_btn, no_btn) {
    const yes_rect = yes_btn.getBoundingClientRect();
    const no_rect = no_btn.getBoundingClientRect();
    
    if (yes_rect.right > no_rect.left) {
        const offset = yes_rect.right - no_rect.left + 10;
        no_btn.style.left = `${parseFloat(no_rect.left) + offset}px`;
        adjustPosition(yes_btn, no_btn);
    }
}

function nobtnSize(no_btn,count){
    var len = text[count].length;
    no_btn.style.width = len*25 + 'px';
}

function move() {
    localStorage.setItem('noClickCount', count);
    window.location.href = 'sub1.html';
}

window.onload = function() {
    const clickCountSpan = document.getElementById('clickCount');
    if (clickCountSpan) {
        const noClickCount = localStorage.getItem('noClickCount');
        if (noClickCount === null || noClickCount === '0') {
            clickCountSpan.innerText = '거절 안 해줘서 고마워!';
        } else {
            clickCountSpan.innerText = `${noClickCount}번이나 거절했네...`;
        }
        
    }
};


