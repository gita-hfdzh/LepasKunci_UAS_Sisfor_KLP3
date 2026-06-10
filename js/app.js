let selectedRole = null;

function showPage(page) {
    document.querySelectorAll('.page').forEach(item => {
        item.classList.remove('active');
    });

    document.getElementById(`page-${page}`).classList.add('active');
}

function selectRole(role) {
    selectedRole = role;

    const loginTitle = document.getElementById('login-title');
    const loginDesc = document.getElementById('login-desc');

    if (role === 'user') {
        loginTitle.textContent = 'Login User';
        loginDesc.textContent = 'Masuk untuk menyewa kendaraan';
    } else {
        loginTitle.textContent = 'Login Owner';
        loginDesc.textContent = 'Masuk untuk mengelola kendaraan rental';
    }

    showPage('login');
}

function openRegister() {
    if (selectedRole === 'user') {
        showPage('register-user');
    } else if (selectedRole === 'owner') {
        showPage('register-owner');
    } else {
        alert('Pilih role terlebih dahulu.');
        showPage('role');
    }
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!selectedRole) {
        alert('Pilih login sebagai User atau Owner dulu.');
        showPage('role');
        return;
    }

    if (email === '' || password === '') {
        alert('Email dan password wajib diisi.');
        return;
    }

    localStorage.setItem('lepasLoginRole', selectedRole);
    localStorage.setItem('lepasLoginEmail', email);

    if (selectedRole === 'user') {
        window.location.href = 'user.html';
    } else {
        window.location.href = 'owner.html';
    }
}

function handleRegisterUser(event) {
    event.preventDefault();

    const userData = {
        role: 'user',
        name: document.getElementById('user-name').value,
        email: document.getElementById('user-email').value,
        phone: document.getElementById('user-phone').value,
        password: document.getElementById('user-password').value
    };

    localStorage.setItem('lepasUserAccount', JSON.stringify(userData));
    localStorage.setItem('lepasLoginRole', 'user');
    localStorage.setItem('lepasLoginEmail', userData.email);

    alert('Akun user berhasil dibuat!');
    window.location.href = 'user.html';
}

function handleRegisterOwner(event) {
    event.preventDefault();

    const ownerData = {
        role: 'owner',
        name: document.getElementById('owner-name').value,
        email: document.getElementById('owner-email').value,
        phone: document.getElementById('owner-phone').value,
        address: document.getElementById('owner-address').value,
        password: document.getElementById('owner-password').value
    };

    localStorage.setItem('lepasOwnerAccount', JSON.stringify(ownerData));
    localStorage.setItem('lepasLoginRole', 'owner');
    localStorage.setItem('lepasLoginEmail', ownerData.email);

    alert('Akun owner berhasil dibuat!');
    window.location.href = 'owner.html';
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('splash');

    setTimeout(() => {
        showPage('role');
    }, 2500);
});