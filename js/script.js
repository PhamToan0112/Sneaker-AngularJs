window.addEventListener('scroll', function () {
    var header = document.querySelector('.scroll-window');

    if (window.scrollY > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
var modal = document.getElementById('id01');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ==============SWIPER===========
var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector(".prev")
var nextBtn = document.querySelector('.next')

var currentIndex = 0;

function updateImagebyIndex(index) {

    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active_bd')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active_bd')
}

listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImagebyIndex(index)
    })
})

// ==============SWIPER===========
// =============Checked===================
document.querySelectorAll('.form-check-label').forEach(function (button) {
    button.addEventListener('click', function () {
        var targetId = this.getAttribute('data-target');
        var targetCheckbox = document.getElementById(targetId);

        // Đảo ngược trạng thái của checkbox khi nút được nhấn
        targetCheckbox.checked = !targetCheckbox.checked;

        // Thêm hoặc xóa lớp 'active' cho nút
        if (targetCheckbox.checked) {
            this.classList.add('checked_cl');
        } else {
            this.classList.remove('checked_cl');
        }
    });
});
// =============Checked===================
