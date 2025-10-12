// let btnCount = document.getElementById("btn-count");
// let textAppear = document.getElementById("countNum");
// let count = 0;
// let countv2 = 0;

// function CountNumber() {
//     count += 1;
//     textAppear.innerHTML = count
//     console.log(count);
// }

// const CountNumberv2 = () => {
//     countv2 += 1;
//     textAppear.innerHTML = count
//     console.log(count);
// }

// btnCount.addEventListener('click', CountNumberv2);

let username = document.getElementById("username");
let password = document.getElementById("pwd");
let male = document.getElementById("male");
let fmale = document.getElementById("female");
let country = document.getElementById("country");
let terms = document.getElementById("terms");
let btnRegister = document.getElementById("btn-register");

function saveFormData() {
    localStorage.setItem("form_username", username.value);
    localStorage.setItem("form_password", password.value);
    localStorage.setItem("form_male", male.checked ? "male" : (fmale.checked ? 'female' : ''));
    localStorage.setItem("form_country", country.value);
    localStorage.setItem("form_terms", terms.checked);
}

function loadFormData() {
    username.value = localStorage.getItem('form_username') || '';
    password.value = localStorage.getItem('form_password') || '';

    let savedGender = localStorage.getItem('form_gender');

    if (savedGender == 'male') {
        male.checked = true;
    } else if (savedGender == 'female') {
        fmale.checked = true;
    }

    country.value = localStorage.getItem("form_country") || 'VN';
    terms.checked = localStorage.getItem("form_terms") === true;
}

function removeFormData() {
    localStorage.removeItem('form_username');
    localStorage.removeItem('form_password');
    localStorage.removeItem('form_gender');
    localStorage.removeItem('form_country');
    localStorage.removeItem('form_terms');
}

function registerAccount() {
    saveFormData();

    // Disable button
    btnRegister.disabled = true;
    btnRegister.value = "Đang xử lý...";

    // Validation username
    if (!username.value.trim()) {
        Toastify({
            text: "Vui lòng nhập username!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #ff416c, #ff4b2b)",
            }
        }).showToast();
        username.focus();
        resetButton();
        loadFormData();
        removeFormData()
        return;
    }

    // Validation password
    if (!password.value.trim()) {
        Toastify({
            text: "Vui lòng nhập password!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #ff416c, #ff4b2b)",
            }
        }).showToast();
        password.focus();
        resetButton();
        loadFormData();
        removeFormData()
        return;
    }
    
    // Validation độ dài password
    if (password.value.length < 6) {
        Toastify({
            text: "Password phải có ít nhất 6 ký tự!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #ff416c, #ff4b2b)",
            }
        }).showToast();
        password.focus();
        resetButton();
        loadFormData();
        removeFormData()
        return;
    }
    
    // Validation giới tính
    if (!male.checked && !fmale.checked) {
        Toastify({
            text: "Vui lòng chọn giới tính!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #ff416c, #ff4b2b)",
            }
        }).showToast();
        resetButton();
        loadFormData();
        return;
    }
    
    // Validation checkbox terms
    if (!terms.checked) {
        Toastify({
            text: "Vui lòng đồng ý với điều khoản!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #ff416c, #ff4b2b)",
            }
        }).showToast();
        resetButton();
        loadFormData();
        return;
    }

    // CHỈ CHẠY KHI TẤT CẢ VALIDATION PASS
    let formData = {
        username: username.value.trim(),
        password: password.value,
        gender: male.checked ? 'male' : 'female',
        country: country.value,
        agreeTerms: terms.checked,
    };

    removeFormData();

    console.log('Form data: ', formData);

    // CHỈ 1 TOAST THÀNH CÔNG
    Toastify({
        text: `Chào mừng ${formData.username}! Đăng ký thành công!`,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();

    resetForm();
    resetButton();
}

function resetForm() {
    username.value = '';
    password.value = '';
    male.checked = false;
    fmale.checked = false;
    country.selectedIndex = 0;
    terms.checked = false;
}

function resetButton() {
    btnRegister.disabled = false;
    btnRegister.value = "Submit";
}