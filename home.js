const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');

        sections.forEach(section => {
            if (section.classList.contains(target)) {
                section.style.display = 'block';
            
                
                if (target === 'hero') {
                   
                    window.location.href="http://127.0.0.1:5500/home.html";
                
                }
            } else {
                section.style.display = 'none';
            }
        });

      
        if (target !== 'hero') {
            document.querySelector('.features').style.display = 'none';
        }
    });
});

document.querySelector('.sign-in').addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/account';
});


document.querySelector('.btn').addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com';
});
const funFb=()=>{

    window.location.href='https://www.facebook.com';
}
const funInsta=()=>{
    window.location.href='https://www.instagram.com';
}
const funGoog=()=>{
    window.location.href='https://www.google.com';
}
const funTube=()=>{
    window.location.href='https://www.youtube.com';
}
const funTweet=()=>{
    window.location.href='https://www.twitter.com';
}
const funNews=()=>{
    window.location.href='https://www.zee24taas.com';
}