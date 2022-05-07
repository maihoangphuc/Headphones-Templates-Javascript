
//ẩn và hiện menu trên điện thoại
document.querySelector('#mobile-header-icon-bars').addEventListener('click', () => document.querySelector('#mobile-header-menu').classList.add('active'))

document.querySelector('#mobile-header-menu-icon-close').addEventListener('click', () => document.querySelector('#mobile-header-menu').classList.remove('active'))