const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const githubBtn = document.querySelector('.visit-btn');

githubBtn.addEventListener('click', () => {
    window.open('https://github.com/Akshitgit6', '_blank');
});

const downloadCV = document.querySelector('.btn1');

downloadCV.addEventListener('click', () => {
    const link = document.createElement('a');

    link.href = './resume.pdf';
    link.download = 'resume.pdf';

    link.click();
});

const lkIN = document.getElementById('LinkedIN');

lkIN.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/akshit-sirohi-40a427326/?isSelfProfile=true', '_blank');
});