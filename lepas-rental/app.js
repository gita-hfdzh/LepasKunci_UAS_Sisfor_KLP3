/* ============================================
   LEPAS RENTAL - APPLICATION LOGIC
   ============================================ */

// ---- DATA ----
const rentalData = [
    { id: 'r1', name: 'AutoPro Rental', location: 'Jakarta Selatan', rating: 4.8, reviews: 120, price: 'Rp 350.000', tag: 'Terpopuler', initial: 'A' },
    { id: 'r2', name: 'MobilKu Rent', location: 'Jakarta Barat', rating: 4.6, reviews: 85, price: 'Rp 300.000', tag: 'Terdekat', initial: 'M' },
    { id: 'r3', name: 'DriveEasy', location: 'Tangerang', rating: 4.9, reviews: 200, price: 'Rp 400.000', tag: 'Premium', initial: 'D' },
    { id: 'r4', name: 'GoRent Jakarta', location: 'Jakarta Pusat', rating: 4.5, reviews: 60, price: 'Rp 280.000', tag: 'Budget', initial: 'G' },
];

const carData = [
    { id: 'c1', name: 'Toyota Avanza', type: 'MPV', year: 2024, transmission: 'Matic', seats: 7, fuel: 'Bensin', price: 'Rp 350.000', perDay: '/hari', rentalId: 'r1', rentalName: 'AutoPro Rental', desc: 'Toyota Avanza terbaru dengan fitur lengkap dan nyaman untuk perjalanan keluarga. Dilengkapi dengan AC double blower, audio touchscreen, dan fitur keamanan terbaru.', features: ['AC Double Blower', 'Audio Touchscreen', 'Parking Sensor', 'USB Charger', 'Bluetooth'] },
    { id: 'c2', name: 'Honda Brio', type: 'Hatchback', year: 2024, transmission: 'Matic', seats: 5, fuel: 'Bensin', price: 'Rp 280.000', perDay: '/hari', rentalId: 'r2', rentalName: 'MobilKu Rent', desc: 'Honda Brio yang irit bahan bakar, cocok untuk mobilitas sehari-hari di kota. Desain modern dengan interior yang nyaman dan fitur keselamatan standar.', features: ['AC', 'Power Window', 'Central Lock', 'Audio System', 'Airbag'] },
    { id: 'c3', name: 'Toyota Innova', type: 'MPV', year: 2023, transmission: 'Matic', seats: 7, fuel: 'Diesel', price: 'Rp 500.000', perDay: '/hari', rentalId: 'r3', rentalName: 'DriveEasy', desc: 'Toyota Innova Reborn, pilihan terbaik untuk perjalanan nyaman jarak jauh. Mesin diesel yang bertenaga dan hemat bahan bakar.', features: ['Captain Seat', 'AC Digital', 'Cruise Control', 'Keyless Entry', 'Hill Assist'] },
    { id: 'c4', name: 'Mitsubishi Xpander', type: 'MPV', year: 2024, transmission: 'Matic', seats: 7, fuel: 'Bensin', price: 'Rp 380.000', perDay: '/hari', rentalId: 'r1', rentalName: 'AutoPro Rental', desc: 'Mitsubishi Xpander Cross dengan ground clearance tinggi dan tampilan gagah. Cocok untuk berbagai medan perjalanan.', features: ['Roof Rail', 'DRL LED', 'Rear Camera', 'Auto Climate', 'Paddle Shift'] },
    { id: 'c5', name: 'Daihatsu Xenia', type: 'MPV', year: 2023, transmission: 'Manual', seats: 7, fuel: 'Bensin', price: 'Rp 250.000', perDay: '/hari', rentalId: 'r4', rentalName: 'GoRent Jakarta', desc: 'Daihatsu Xenia yang ekonomis dan tangguh. Pilihan tepat untuk budget terbatas dengan kenyamanan yang tetap terjaga.', features: ['AC', 'Power Steering', 'Electric Mirror', 'Audio 2-DIN', 'Fog Lamp'] },
    { id: 'c6', name: 'Honda HR-V', type: 'SUV', year: 2024, transmission: 'Matic', seats: 5, fuel: 'Bensin', price: 'Rp 550.000', perDay: '/hari', rentalId: 'r3', rentalName: 'DriveEasy', desc: 'Honda HR-V dengan desain sporty dan teknologi canggih. Kabin luas dengan fitur Honda SENSING untuk keamanan berkendara.', features: ['Honda SENSING', 'Sunroof', 'Wireless Charger', 'Remote Start', 'LED Headlamp'] },
];

const motorData = [
    {
        id: 'm1',
        name: 'Honda Beat',
        type: 'Matic',
        year: 2024,
        transmission: 'Matic',
        fuel: 'Bensin',
        price: 'Rp 80.000',
        perDay: '/hari',
        rentalId: 'r1',
        rentalName: 'AutoPro Rental',
        desc: 'Honda Beat matic yang irit dan nyaman untuk perjalanan dalam kota.',
        features: ['Irit BBM', 'Bagasi Luas', 'Matic', 'Ringan'],
        category: 'motor'
    },
    {
        id: 'm2',
        name: 'Yamaha NMAX',
        type: 'Matic',
        year: 2023,
        transmission: 'Matic',
        fuel: 'Bensin',
        price: 'Rp 150.000',
        perDay: '/hari',
        rentalId: 'r2',
        rentalName: 'MobilKu Rent',
        desc: 'Yamaha NMAX cocok untuk perjalanan santai dengan posisi berkendara nyaman.',
        features: ['ABS', 'Bagasi Luas', 'Matic', 'Nyaman'],
        category: 'motor'
    },
    {
        id: 'm3',
        name: 'Honda Vario',
        type: 'Matic',
        year: 2024,
        transmission: 'Matic',
        fuel: 'Bensin',
        price: 'Rp 100.000',
        perDay: '/hari',
        rentalId: 'r3',
        rentalName: 'DriveEasy',
        desc: 'Honda Vario cocok untuk mobilitas harian dan irit bahan bakar.',
        features: ['Matic', 'Irit BBM', 'LED', 'Bagasi'],
        category: 'motor'
    },
    {
        id: 'm4',
        name: 'Yamaha Aerox',
        type: 'Matic',
        year: 2024,
        transmission: 'Matic',
        fuel: 'Bensin',
        price: 'Rp 130.000',
        perDay: '/hari',
        rentalId: 'r4',
        rentalName: 'GoRent Jakarta',
        desc: 'Yamaha Aerox memiliki tampilan sporty dan tenaga yang responsif.',
        features: ['Sporty', 'Matic', 'Digital Speedometer', 'LED'],
        category: 'motor'
    }
];

function getAllVehicles() {
    return [
        ...carData.map(item => ({ ...item, category: 'mobil' })),
        ...motorData.map(item => ({ ...item, category: 'motor' }))
    ];
}

function getVehicleById(vehicleId) {
    return getAllVehicles().find(item => item.id === vehicleId);
}

const notifData = [
    { id: 'n1', type: 'success', icon: 'check_circle', title: 'Booking Dikonfirmasi', desc: 'Booking Toyota Avanza untuk tanggal 5-7 Juni 2026 telah dikonfirmasi oleh AutoPro Rental.', time: '2 jam lalu', unread: true },
    { id: 'n2', type: 'info', icon: 'info', title: 'Pengingat Pengembalian', desc: 'Jangan lupa mengembalikan Honda Brio besok tanggal 4 Juni 2026 sebelum pukul 17:00.', time: '5 jam lalu', unread: true },
    { id: 'n3', type: 'promo', icon: 'local_offer', title: 'Promo Spesial! 🎉', desc: 'Dapatkan diskon 30% untuk rental mobil SUV selama bulan Juni. Gunakan kode JUNISERU.', time: '1 hari lalu', unread: true },
    { id: 'n4', type: 'warning', icon: 'warning', title: 'Dokumen Belum Lengkap', desc: 'Lengkapi dokumen perjanjian sewa untuk booking #LPS-0042 sebelum pengambilan mobil.', time: '2 hari lalu', unread: false },
    { id: 'n5', type: 'success', icon: 'payment', title: 'Pembayaran Berhasil', desc: 'Pembayaran sebesar Rp 1.050.000 untuk rental Toyota Innova telah berhasil diproses.', time: '3 hari lalu', unread: false },
    { id: 'n6', type: 'info', icon: 'star', title: 'Berikan Rating', desc: 'Bagaimana pengalaman Anda menyewa di MobilKu Rent? Berikan rating dan ulasan Anda.', time: '5 hari lalu', unread: false },
];

const historyData = [
    { id: 'h1', carName: 'Toyota Avanza', rentalName: 'AutoPro Rental', status: 'active', statusText: 'Aktif', startDate: '1 Jun 2026', endDate: '3 Jun 2026', price: 'Rp 1.050.000', carId: 'c1' },
    { id: 'h2', carName: 'Honda Brio', rentalName: 'MobilKu Rent', status: 'pending', statusText: 'Menunggu', startDate: '5 Jun 2026', endDate: '7 Jun 2026', price: 'Rp 840.000', carId: 'c2' },
    { id: 'h3', carName: 'Toyota Innova', rentalName: 'DriveEasy', status: 'completed', statusText: 'Selesai', startDate: '20 Mei 2026', endDate: '23 Mei 2026', price: 'Rp 1.500.000', carId: 'c3' },
    { id: 'h4', carName: 'Daihatsu Xenia', rentalName: 'GoRent Jakarta', status: 'cancelled', statusText: 'Dibatalkan', startDate: '15 Mei 2026', endDate: '17 Mei 2026', price: 'Rp 500.000', carId: 'c5' },
    { id: 'h5', carName: 'Mitsubishi Xpander', rentalName: 'AutoPro Rental', status: 'completed', statusText: 'Selesai', startDate: '10 Mei 2026', endDate: '12 Mei 2026', price: 'Rp 760.000', carId: 'c4' },
];

const categories = [
    { name: 'Sedan', icon: 'directions_car', count: 12 },
    { name: 'SUV', icon: 'airport_shuttle', count: 18 },
    { name: 'MPV', icon: 'commute', count: 25 },
    { name: 'Hatchback', icon: 'drive_eta', count: 10 },
    { name: 'Sport', icon: 'sports_motorsports', count: 5 },
    { name: 'Minibus', icon: 'local_shipping', count: 8 },
    { name: 'Pick Up', icon: 'local_shipping', count: 6 },
    { name: 'Elektrik', icon: 'electric_car', count: 4 },
];

// ---- STATE ----
let currentPage = 'splash';
let currentUser = null;
let savedCars = new Set();
let uploadedFiles = [];

// ---- NAVIGATION ----
function navigateTo(page) {
    const oldPage = document.querySelector('.page.active');
    if (oldPage) {
        oldPage.classList.remove('active');
    }
    
    const newPage = document.getElementById(`page-${page}`);
    if (newPage) {
        newPage.classList.add('active');
        newPage.scrollTop = 0;
        currentPage = page;
    }
}

function switchTab(page) {
    navigateTo(page);
    // Update all bottom navs
    document.querySelectorAll('.bottom-nav').forEach(nav => {
        nav.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.page === page);
        });
    });
}

// ---- AUTH ----
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email && password) {
        currentUser = {
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email: email,
            initial: email.charAt(0).toUpperCase()
        };
        updateUserInfo();
        navigateTo('dashboard');
        renderDashboard();
        showToast('Login berhasil! Selamat datang 👋');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;
    
    if (password !== confirm) {
        showToast('Password tidak cocok!');
        return;
    }
    
    currentUser = {
        name: name,
        email: email,
        initial: name.charAt(0).toUpperCase()
    };
    updateUserInfo();
    navigateTo('dashboard');
    renderDashboard();
    showToast('Registrasi berhasil! Selamat datang 🎉');
}

function handleLogout() {
    currentUser = null;
    savedCars.clear();
    uploadedFiles = [];
    navigateTo('login');
    showToast('Berhasil keluar');
}

function updateUserInfo() {
    if (!currentUser) return;
    
    const elements = {
        'dash-username': currentUser.name,
        'dash-avatar': currentUser.initial,
        'menu-username': currentUser.name,
        'menu-email': currentUser.email,
        'menu-avatar': currentUser.initial,
    };
    
    Object.entries(elements).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    });
}

function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector('.material-icons-outlined');
    if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = 'visibility';
    } else {
        input.type = 'password';
        icon.textContent = 'visibility_off';
    }
}

// ---- RENDER FUNCTIONS ----
function renderDashboard() {
    renderRentalRecommendations();
    renderCarRecommendations();
    renderMotorRecommendations();
    renderSavedList('mobil');
    renderNotifications();
    renderHistory();
    renderCategories();
}

function renderRentalRecommendations() {
    const container = document.getElementById('rental-recommendations');
    if (!container) return;
    
    container.innerHTML = rentalData.map((rental, i) => `
        <div class="rental-card animate-in animate-delay-${i + 1}" onclick="navigateTo('categories')">
            <div class="rental-card-img">
                <span class="material-icons-outlined">storefront</span>
                <div class="rental-card-rating">
                    <span class="material-icons-outlined">star</span>
                    ${rental.rating}
                </div>
            </div>
            <div class="rental-card-body">
                <div class="rental-card-name">${rental.name}</div>
                <div class="rental-card-location">
                    <span class="material-icons-outlined">location_on</span>
                    ${rental.location}
                </div>
                <div class="rental-card-footer">
                    <div class="rental-card-price">
                        ${rental.price} <span>/hari</span>
                    </div>
                    <span class="rental-card-tag">${rental.tag}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCarRecommendations() {
    const container = document.getElementById('car-recommendations');
    if (!container) return;

    container.innerHTML = carData.map((car, i) => `
        <div class="vehicle-card-horizontal animate-in animate-delay-${(i % 4) + 1}" onclick="viewVehicleDetail('${car.id}')">
            <div class="car-card-img">
                <span class="material-icons-outlined">directions_car</span>
                <button class="car-card-save ${savedCars.has(car.id) ? 'saved' : ''}" onclick="event.stopPropagation(); toggleSave('${car.id}', this)">
                    <span class="material-icons-outlined">${savedCars.has(car.id) ? 'bookmark' : 'bookmark_border'}</span>
                </button>
            </div>
            <div class="car-card-body">
                <div class="car-card-name">${car.name}</div>
                <div class="car-card-specs">
                    ${car.type} <span class="dot"></span> ${car.transmission} <span class="dot"></span> ${car.year}
                </div>
                <div class="car-card-footer">
                    <div class="car-card-price">
                        ${car.price} <span>/hari</span>
                    </div>
                    <button class="btn-rent-small" onclick="event.stopPropagation(); viewVehicleDetail('${car.id}')">Sewa</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderMotorRecommendations() {
    const container = document.getElementById('motor-recommendations');
    if (!container) return;

    container.innerHTML = motorData.map((motor, i) => `
        <div class="vehicle-card-horizontal animate-in animate-delay-${(i % 4) + 1}" onclick="viewVehicleDetail('${motor.id}')">
            <div class="car-card-img">
                <span class="material-icons-outlined">two_wheeler</span>
                <button class="car-card-save ${savedCars.has(motor.id) ? 'saved' : ''}" onclick="event.stopPropagation(); toggleSave('${motor.id}', this)">
                    <span class="material-icons-outlined">${savedCars.has(motor.id) ? 'bookmark' : 'bookmark_border'}</span>
                </button>
            </div>
            <div class="car-card-body">
                <div class="car-card-name">${motor.name}</div>
                <div class="car-card-specs">
                    ${motor.type} <span class="dot"></span> ${motor.transmission} <span class="dot"></span> ${motor.year}
                </div>
                <div class="car-card-footer">
                    <div class="car-card-price">
                        ${motor.price} <span>/hari</span>
                    </div>
                    <button class="btn-rent-small" onclick="event.stopPropagation(); viewVehicleDetail('${motor.id}')">Sewa</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSavedList(filter = 'mobil') {
    const container = document.getElementById('saved-list');
    if (!container) return;

    const allVehicles = getAllVehicles();
    const savedList = allVehicles.filter(item => {
        return savedCars.has(item.id) && item.category === filter;
    });

    if (savedList.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="material-icons-outlined">${filter === 'motor' ? 'two_wheeler' : 'directions_car'}</span>
                <h3>Belum Ada ${filter === 'motor' ? 'Motor' : 'Mobil'} Disimpan</h3>
                <p>${filter === 'motor' ? 'Motor' : 'Mobil'} yang kamu simpan akan muncul di sini</p>
            </div>
        `;
        return;
    }

    container.innerHTML = savedList.map(item => `
        <div class="saved-item" onclick="viewVehicleDetail('${item.id}')">
            <div class="saved-item-img">
                <span class="material-icons-outlined">${item.category === 'motor' ? 'two_wheeler' : 'directions_car'}</span>
            </div>
            <div class="saved-item-info">
                <div class="saved-item-name">${item.name}</div>
                <div class="saved-item-detail">${item.type} • ${item.transmission} • ${item.rentalName}</div>
                <div class="saved-item-bottom">
                    <span class="saved-item-price">${item.price}<span style="color:var(--text-tertiary);font-weight:400;font-size:11px"> /hari</span></span>
                    <button class="saved-item-remove" onclick="event.stopPropagation(); removeSaved('${item.id}')">
                        <span class="material-icons-outlined" style="font-size:20px">close</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderNotifications() {
    const container = document.getElementById('notif-list');
    if (!container) return;
    
    container.innerHTML = notifData.map(notif => `
        <div class="notif-item ${notif.unread ? 'unread' : ''}">
            <div class="notif-icon-box ${notif.type}">
                <span class="material-icons-outlined">${notif.icon}</span>
            </div>
            <div class="notif-item-body">
                <div class="notif-item-title">${notif.title}</div>
                <div class="notif-item-desc">${notif.desc}</div>
                <div class="notif-item-time">${notif.time}</div>
            </div>
        </div>
    `).join('');
}

function renderHistory(filter = 'semua') {
    const container = document.getElementById('history-list');
    if (!container) return;
    
    let filtered = historyData;
    if (filter === 'aktif') filtered = historyData.filter(h => h.status === 'active' || h.status === 'pending');
    if (filter === 'selesai') filtered = historyData.filter(h => h.status === 'completed');
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="material-icons-outlined">history</span>
                <h3>Belum Ada Riwayat</h3>
                <p>Riwayat rental kamu akan muncul di sini</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(item => `
        <div class="history-item" onclick="viewRentalDetail('${item.id}')">
            <div class="history-item-top">
                <div class="history-item-img">
                    <span class="material-icons-outlined">directions_car</span>
                </div>
                <div class="history-item-info">
                    <div class="history-item-name">${item.carName}</div>
                    <div class="history-item-rental">${item.rentalName}</div>
                    <span class="status-badge ${item.status}">${item.statusText}</span>
                </div>
            </div>
            <div class="history-item-bottom">
                <div class="history-dates">
                    <span class="material-icons-outlined">calendar_today</span>
                    ${item.startDate} - ${item.endDate}
                </div>
                <div class="history-price">${item.price}</div>
            </div>
        </div>
    `).join('');
}

function renderCategories() {
    const container = document.getElementById('categories-grid');
    if (!container) return;
    
    container.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="showToast('Kategori ${cat.name}')">
            <div class="category-card-img">
                <span class="material-icons-outlined">${cat.icon}</span>
            </div>
            <div class="category-card-body">
                <div class="category-card-name">${cat.name}</div>
                <div class="category-card-count">${cat.count} mobil tersedia</div>
            </div>
        </div>
    `).join('');
}

// ---- CAR DETAIL ----
function viewCarDetail(carId) {
    const car = carData.find(c => c.id === carId);
    if (!car) return;
    
    const body = document.getElementById('car-detail-body');
    const saveIcon = document.getElementById('save-car-icon');
    
    // Update save button
    saveIcon.textContent = savedCars.has(carId) ? 'bookmark' : 'bookmark_border';
    document.getElementById('btn-save-car').dataset.carId = carId;
    
    body.innerHTML = `
        <h2 class="car-detail-title">${car.name}</h2>
        <p class="car-detail-subtitle">${car.type} • ${car.year}</p>
        
        <div class="car-specs-grid">
            <div class="spec-item">
                <span class="material-icons-outlined">settings</span>
                <span class="spec-value">${car.transmission}</span>
                <span class="spec-label">Transmisi</span>
            </div>
            <div class="spec-item">
                <span class="material-icons-outlined">event_seat</span>
                <span class="spec-value">${car.seats}</span>
                <span class="spec-label">Kursi</span>
            </div>
            <div class="spec-item">
                <span class="material-icons-outlined">local_gas_station</span>
                <span class="spec-value">${car.fuel}</span>
                <span class="spec-label">Bahan Bakar</span>
            </div>
        </div>
        
        <div class="car-detail-section">
            <h3>Deskripsi</h3>
            <p>${car.desc}</p>
        </div>
        
        <div class="car-detail-section">
            <h3>Fitur</h3>
            <div class="car-features">
                ${car.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
        </div>
        
        <div class="car-detail-rental-info" onclick="showToast('${car.rentalName}')">
            <div class="rental-avatar">${car.rentalName.charAt(0)}</div>
            <div>
                <div class="rental-detail-name">${car.rentalName}</div>
                <div class="rental-detail-loc">
                    <span class="material-icons-outlined" style="font-size:14px">location_on</span>
                    ${rentalData.find(r => r.id === car.rentalId)?.location || 'Jakarta'}
                </div>
            </div>
        </div>
        
        <div class="car-detail-bottom">
            <div class="car-detail-price">
                ${car.price} <span>${car.perDay}</span>
            </div>
            <button class="btn-rent-now" onclick="handleRentCar('${car.id}')">
                Sewa Sekarang
            </button>
        </div>
    `;
    
    navigateTo('car-detail');
}

function toggleSaveCar() {
    const btn = document.getElementById('btn-save-car');
    const icon = document.getElementById('save-car-icon');
    const carId = btn.dataset.carId;
    
    if (savedCars.has(carId)) {
        savedCars.delete(carId);
        icon.textContent = 'bookmark_border';
        showToast('Dihapus dari simpanan');
    } else {
        savedCars.add(carId);
        icon.textContent = 'bookmark';
        showToast('Disimpan!');
    }
    renderCarRecommendations();
    renderSavedList();
}

function toggleSave(vehicleId, btn) {
    if (savedCars.has(vehicleId)) {
        savedCars.delete(vehicleId);
        btn.classList.remove('saved');
        btn.querySelector('.material-icons-outlined').textContent = 'bookmark_border';
        showToast('Dihapus dari simpanan');
    } else {
        savedCars.add(vehicleId);
        btn.classList.add('saved');
        btn.querySelector('.material-icons-outlined').textContent = 'bookmark';
        showToast('Disimpan!');
    }

    renderCarRecommendations();
    renderMotorRecommendations();
    renderSavedList('mobil');
}

function removeSaved(vehicleId) {
    savedCars.delete(vehicleId);
    renderSavedList('mobil');
    renderCarRecommendations();
    renderMotorRecommendations();
    showToast('Dihapus dari simpanan');
}

function viewVehicleDetail(vehicleId) {
    const vehicle = getVehicleById(vehicleId);
    if (!vehicle) return;

    const body = document.getElementById('car-detail-body');
    const saveIcon = document.getElementById('save-car-icon');

    saveIcon.textContent = savedCars.has(vehicleId) ? 'bookmark' : 'bookmark_border';
    document.getElementById('btn-save-car').dataset.carId = vehicleId;

    const icon = vehicle.category === 'motor' ? 'two_wheeler' : 'directions_car';
    const labelKapasitas = vehicle.category === 'motor' ? 'Jenis' : 'Kursi';
    const kapasitasValue = vehicle.category === 'motor' ? vehicle.type : vehicle.seats;

    body.innerHTML = `
        <h2 class="car-detail-title">${vehicle.name}</h2>
        <p class="car-detail-subtitle">${vehicle.category === 'motor' ? 'Motor' : 'Mobil'} • ${vehicle.year}</p>

        <div class="car-specs-grid">
            <div class="spec-item">
                <span class="material-icons-outlined">settings</span>
                <span class="spec-value">${vehicle.transmission}</span>
                <span class="spec-label">Transmisi</span>
            </div>
            <div class="spec-item">
                <span class="material-icons-outlined">${vehicle.category === 'motor' ? 'two_wheeler' : 'event_seat'}</span>
                <span class="spec-value">${kapasitasValue}</span>
                <span class="spec-label">${labelKapasitas}</span>
            </div>
            <div class="spec-item">
                <span class="material-icons-outlined">local_gas_station</span>
                <span class="spec-value">${vehicle.fuel}</span>
                <span class="spec-label">Bahan Bakar</span>
            </div>
        </div>

        <div class="car-detail-section">
            <h3>Deskripsi</h3>
            <p>${vehicle.desc}</p>
        </div>

        <div class="car-detail-section">
            <h3>Fitur</h3>
            <div class="car-features">
                ${vehicle.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
        </div>

        <div class="car-detail-rental-info">
            <div class="rental-avatar">${vehicle.rentalName.charAt(0)}</div>
            <div>
                <div class="rental-detail-name">${vehicle.rentalName}</div>
                <div class="rental-detail-loc">
                    <span class="material-icons-outlined" style="font-size:14px">location_on</span>
                    ${rentalData.find(r => r.id === vehicle.rentalId)?.location || 'Jakarta'}
                </div>
            </div>
        </div>

        <div class="car-detail-bottom">
            <div class="car-detail-price">
                ${vehicle.price} <span>${vehicle.perDay}</span>
            </div>
            <button class="btn-rent-now" onclick="handleRentVehicle('${vehicle.id}')">
                Sewa Sekarang
            </button>
        </div>
    `;

    navigateTo('car-detail');
}

function handleRentVehicle(vehicleId) {
    const vehicle = getVehicleById(vehicleId);
    if (!vehicle) return;

    showToast(`Booking ${vehicle.name} berhasil! 🚗`);
    navigateTo('dashboard');
}

function showAllVehicles(type) {
    const title = type === 'motor' ? 'Motor Tersedia' : 'Mobil Tersedia';
    const list = type === 'motor' ? motorData : carData;
    const container = document.getElementById('categories-grid');

    if (!container) return;

    document.querySelector('#page-categories .sub-header h2').textContent = title;

    container.innerHTML = list.map(item => `
        <div class="category-card" onclick="viewVehicleDetail('${item.id}')">
            <div class="category-card-img">
                <span class="material-icons-outlined">${type === 'motor' ? 'two_wheeler' : 'directions_car'}</span>
            </div>
            <div class="category-card-body">
                <div class="category-card-name">${item.name}</div>
                <div class="category-card-count">${item.type} • ${item.price}/hari</div>
            </div>
        </div>
    `).join('');

    navigateTo('categories');
}

function handleRentCar(carId) {
    const car = carData.find(c => c.id === carId);
    if (!car) return;

    uploadedFiles = [];

    const rental = rentalData.find(r => r.id === car.rentalId);
    const container = document.getElementById('rental-detail-content');

    container.innerHTML = `
        <div class="rental-detail-card">
            <h3><span class="material-icons-outlined">directions_car</span> Detail Mobil</h3>

            <div class="rental-info-row">
                <span class="rental-info-label">Mobil</span>
                <span class="rental-info-value">${car.name}</span>
            </div>

            <div class="rental-info-row">
                <span class="rental-info-label">Rental</span>
                <span class="rental-info-value">${car.rentalName}</span>
            </div>

            <div class="rental-info-row">
                <span class="rental-info-label">Alamat</span>
                <span class="rental-info-value">${rental ? rental.location : 'Banda Aceh'}</span>
            </div>

            <div class="rental-info-row">
                <span class="rental-info-label">Harga</span>
                <span class="rental-info-value">${car.price} /hari</span>
            </div>
        </div>

        <form class="rental-form" onsubmit="submitRentalForm(event, '${car.id}')">
            <div class="rental-detail-card">
                <h3><span class="material-icons-outlined">person</span> Isi Data Penyewa</h3>

                <div class="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" id="rent-name" placeholder="Masukkan nama lengkap" required>
                </div>

                <div class="form-group">
                    <label>No HP</label>
                    <input type="tel" id="rent-phone" placeholder="Masukkan nomor HP" required>
                </div>

                <div class="form-group">
                    <label>Alamat Lengkap</label>
                    <textarea id="rent-address" placeholder="Masukkan alamat lengkap" required></textarea>
                </div>
            </div>

            <div class="rental-detail-card">
                <h3><span class="material-icons-outlined">event</span> Durasi Sewa</h3>

                <div class="date-grid">
                    <div class="form-group">
                        <label>Tanggal Mulai</label>
                        <input type="date" id="rent-start" required>
                    </div>

                    <div class="form-group">
                        <label>Tanggal Selesai</label>
                        <input type="date" id="rent-end" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Jenis Pembayaran</label>
                    <select id="rent-payment-status" required>
                        <option value="">Pilih pembayaran</option>
                        <option value="DP 30%">DP 30%</option>
                        <option value="Lunas">Lunas</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Metode Pembayaran</label>
                    <select id="rent-payment-method" required>
                        <option value="">Pilih metode</option>
                        <option value="E-Wallet">E-Wallet</option>
                        <option value="Kartu Kredit/Debit">Kartu Kredit/Debit</option>
                        <option value="Transfer Bank">Transfer Bank</option>
                    </select>
                </div>
            </div>

            <div class="rental-detail-card">
                <h3><span class="material-icons-outlined">upload_file</span> Unggah Dokumen</h3>

                <p class="rental-note">
                    Unggah semua dokumen wajib: KTP, SIM, dan Surat Pernyataan Serah Terima Sewa Mobil.
                </p>

                <div class="doc-upload-box">
                    <label>KTP</label>
                    <input type="file" id="doc-ktp" accept=".pdf,.jpg,.jpeg,.png" required>
                </div>

                <div class="doc-upload-box">
                    <label>SIM</label>
                    <input type="file" id="doc-sim" accept=".pdf,.jpg,.jpeg,.png" required>
                </div>

                <div class="doc-upload-box">
                    <label>Surat Pernyataan Serah Terima Sewa Mobil</label>
                    <input type="file" id="doc-surat" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" required>
                </div>
            </div>

            <button type="submit" class="btn-submit-docs rental-confirm-btn">
                <span class="material-icons-outlined">check_circle</span>
                Konfirmasi Rental
            </button>
        </form>
    `;

    navigateTo('rental');
}

function submitRentalForm(event, carId) {
    event.preventDefault();

    const car = carData.find(c => c.id === carId);
    if (!car) return;

    const name = document.getElementById('rent-name').value;
    const phone = document.getElementById('rent-phone').value;
    const address = document.getElementById('rent-address').value;
    const startDate = document.getElementById('rent-start').value;
    const endDate = document.getElementById('rent-end').value;
    const paymentStatus = document.getElementById('rent-payment-status').value;
    const paymentMethod = document.getElementById('rent-payment-method').value;

    const ktp = document.getElementById('doc-ktp').files[0];
    const sim = document.getElementById('doc-sim').files[0];
    const surat = document.getElementById('doc-surat').files[0];

    if (!ktp || !sim || !surat) {
        showToast('KTP, SIM, dan Surat Pernyataan wajib diunggah!');
        return;
    }

    const newHistory = {
        id: 'h' + Date.now(),
        carName: car.name,
        rentalName: car.rentalName,
        status: 'pending',
        statusText: 'Menunggu',
        startDate: startDate,
        endDate: endDate,
        price: car.price,
        carId: car.id
    };

    historyData.unshift(newHistory);

    renderHistory();

    showToast(`Rental ${car.name} berhasil diajukan! Menunggu konfirmasi owner ✅`);

    navigateTo('riwayat');
}

// ---- RENTAL DETAIL ----
function viewRentalDetail(historyId) {
    const item = historyData.find(h => h.id === historyId);
    if (!item) return;
    
    const car = carData.find(c => c.id === item.carId);
    const container = document.getElementById('rental-detail-content');
    
    uploadedFiles = [];
    
    container.innerHTML = `
        <!-- Car Info -->
        <div class="rental-detail-card">
            <h3><span class="material-icons-outlined">directions_car</span> Informasi Mobil</h3>
            <div class="rental-info-row">
                <span class="rental-info-label">Mobil</span>
                <span class="rental-info-value">${item.carName}</span>
            </div>
            <div class="rental-info-row">
                <span class="rental-info-label">Rental</span>
                <span class="rental-info-value">${item.rentalName}</span>
            </div>
            <div class="rental-info-row">
                <span class="rental-info-label">Tipe</span>
                <span class="rental-info-value">${car ? car.type : '-'}</span>
            </div>
            <div class="rental-info-row">
                <span class="rental-info-label">Transmisi</span>
                <span class="rental-info-value">${car ? car.transmission : '-'}</span>
            </div>
        </div>
        
        <!-- Rental Info -->
        <div class="rental-detail-card">
            <h3><span class="material-icons-outlined">event_note</span> Detail Rental</h3>
            <div class="rental-info-row">
                <span class="rental-info-label">No. Booking</span>
                <span class="rental-info-value">#LPS-00${historyId.replace('h', '')}</span>
            </div>
            <div class="rental-info-row">
                <span class="rental-info-label">Status</span>
                <span class="rental-info-value"><span class="status-badge ${item.status}">${item.statusText}</span></span>
            </div>
            <div class="rental-info-row">
                <span class="rental-info-label">Tanggal Mulai</span>
                <span class="rental-info-value">${item.startDate}</span>
            </div>
            <div class="rental-info-row">
                <span class="rental-info-label">Tanggal Selesai</span>
                <span class="rental-info-value">${item.endDate}</span>
            </div>
            <div class="rental-info-row">
                <span class="rental-info-label">Total Biaya</span>
                <span class="rental-info-value" style="color:var(--primary);font-size:16px">${item.price}</span>
            </div>
        </div>
    `;
    
    navigateTo('rental');
}

// ---- FILE UPLOAD ----
function handleFileUpload(event, historyId) {
    const files = event.target.files;
    for (const file of files) {
        addUploadedFile(file, historyId);
    }
    event.target.value = '';
}

function handleDragOver(event, historyId) {
    event.preventDefault();
    const area = document.getElementById(`upload-area-${historyId}`);
    area.classList.add('dragover');
}

function handleDragLeave(event, historyId) {
    event.preventDefault();
    const area = document.getElementById(`upload-area-${historyId}`);
    area.classList.remove('dragover');
}

function handleDrop(event, historyId) {
    event.preventDefault();
    const area = document.getElementById(`upload-area-${historyId}`);
    area.classList.remove('dragover');
    
    const files = event.dataTransfer.files;
    for (const file of files) {
        addUploadedFile(file, historyId);
    }
}

function addUploadedFile(file, historyId) {
    // Check file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
        showToast('File terlalu besar! Maks. 10MB');
        return;
    }
    
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|jpg|jpeg|png|doc|docx)$/i)) {
        showToast('Format file tidak didukung!');
        return;
    }
    
    const fileData = {
        id: 'f' + Date.now() + Math.random().toString(36).substr(2, 5),
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type
    };
    
    uploadedFiles.push(fileData);
    renderUploadedFiles(historyId);
}

function renderUploadedFiles(historyId) {
    const container = document.getElementById(`uploaded-files-${historyId}`);
    const submitBtn = document.getElementById(`btn-submit-${historyId}`);
    
    if (!container) return;
    
    submitBtn.disabled = uploadedFiles.length === 0;
    
    container.innerHTML = uploadedFiles.map(file => {
        const iconType = file.name.endsWith('.pdf') ? 'picture_as_pdf' : 
                         file.name.match(/\.(jpg|jpeg|png)$/i) ? 'image' : 'description';
        return `
            <div class="uploaded-file">
                <div class="file-icon">
                    <span class="material-icons-outlined">${iconType}</span>
                </div>
                <div class="file-info">
                    <div class="file-name">${file.name}</div>
                    <div class="file-size">${file.size}</div>
                </div>
                <button class="file-remove" onclick="removeFile('${file.id}', '${historyId}')">
                    <span class="material-icons-outlined" style="font-size:20px">close</span>
                </button>
            </div>
        `;
    }).join('');
}

function removeFile(fileId, historyId) {
    uploadedFiles = uploadedFiles.filter(f => f.id !== fileId);
    renderUploadedFiles(historyId);
}

function submitDocuments(historyId) {
    if (uploadedFiles.length === 0) return;
    
    showToast(`${uploadedFiles.length} dokumen berhasil dikirim! ✅`);
    uploadedFiles = [];
    renderUploadedFiles(historyId);
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// ---- TAB SWITCHING ----
function switchSavedTab(tab, btn) {
    btn.parentElement.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderSavedList(tab);
}

function switchHistoryTab(tab, btn) {
    btn.parentElement.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderHistory(tab);
}

// ---- NOTIFICATIONS ----
function markAllRead() {
    notifData.forEach(n => n.unread = false);
    renderNotifications();
    showToast('Semua notifikasi telah dibaca');
}

// ---- TOAST ----
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ---- INITIALIZATION ----
document.addEventListener('DOMContentLoaded', () => {
    // Show splash screen first, then auto-navigate to login
    navigateTo('splash');
    
    setTimeout(() => {
        navigateTo('login');
    }, 2500);
    
    // Pre-save some cars for demo
    savedCars.add('c1');
    savedCars.add('c3');
    savedCars.add('m1');
    savedCars.add('m2');
    
    // Pre-render all data
    renderDashboard();
});
