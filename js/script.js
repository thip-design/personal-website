// เปลี่ยนสไตล์ Navbar เมื่อ Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        nav.style.padding = '1rem 10%';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
    } else {
        nav.style.padding = '1.5rem 10%';
        nav.style.boxShadow = 'none';
    }
});

// จัดการการส่งฟอร์ม (จำลอง)
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('ขอบคุณที่สนใจครับ! Thip Design Studio จะติดต่อกลับหาคุณโดยเร็วที่สุด');
        this.reset();
    });
}