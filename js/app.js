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

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', selectedRole);

    fetch('api/login.php', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('lepasLoginRole', data.user.role);
            localStorage.setItem('lepasUserId', data.user.id);
            localStorage.setItem('lepasUserName', data.user.nama);
            localStorage.setItem('lepasLoginEmail', data.user.email);
            localStorage.setItem('lepasUserPhone', data.user.no_hp);
            localStorage.setItem('lepasOwnerAddress', data.user.alamat || '');

            if (data.user.role === 'user') {
                window.location.href = 'user.html';
            } else {
                window.location.href = 'owner.html';
            }
        } else {
            alert(data.message);
        }
    })
    .catch(err => {
        console.error(err);
        alert('Gagal terhubung ke server');
    });
}

function handleRegisterUser(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nama', document.getElementById('user-name').value);
    formData.append('email', document.getElementById('user-email').value);
    formData.append('no_hp', document.getElementById('user-phone').value);
    formData.append('password', document.getElementById('user-password').value);

    fetch('api/register_customer.php', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);

        if (data.success) {
            selectedRole = 'user';
            showPage('login');
        }
    })
    .catch(err => {
        console.error(err);
        alert('Gagal daftar user');
    });
}

function handleRegisterOwner(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nama', document.getElementById('owner-name').value);
    formData.append('email', document.getElementById('owner-email').value);
    formData.append('no_hp', document.getElementById('owner-phone').value);
    formData.append('alamat', document.getElementById('owner-address').value);
    formData.append('password', document.getElementById('owner-password').value);

    fetch('api/register_owner.php', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);

        if (data.success) {
            selectedRole = 'owner';
            showPage('login');
        }
    })
    .catch(err => {
        console.error(err);
        alert('Gagal daftar owner');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('splash');

    setTimeout(() => {
        showPage('role');
    }, 2500);
});