/* ============================================
   LEPAS OWNER - CORE APPLICATION LOGIC
   ============================================ */

// ============================================
// 1. DATA STATE (MOCK SQL DATABASE REPLICAS)
// ============================================

// TABLE: owner
let ownerData = [
    { id_owner: 1, nama: "Mita Jaya Rent", email: "owner@mitajaya.com", password: "owner", no_hp: "081250779999" }
];

// TABLE: customer
let customerData = [
    { id_customer: 101, nama: "Rizki Pratama", email: "rizki@gmail.com", no_hp: "081250771111" },
    { id_customer: 102, nama: "Ahmad Dani", email: "dani@email.com", no_hp: "081250772222" },
    { id_customer: 103, nama: "Siti Rahma", email: "siti@email.com", no_hp: "081250773333" },
    { id_customer: 104, nama: "Faisal Reza", email: "faisal@email.com", no_hp: "081250774444" },
    { id_customer: 105, nama: "Nabila Putri", email: "nabila@email.com", no_hp: "081250775555" },
    { id_customer: 106, nama: "Budi Santoso", email: "budi@email.com", no_hp: "081250776666" }
];

// TABLE: kendaraan
// Matching the Stats in Mockup: 10 di sewa, 24 tersedia, 5 di service (Total: 39)
let kendaraanData = [
    // --- DI SEWA (10) ---
    { id_kendaraan: 1, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 1024 AB", harga_sewa: 200000, status: "Di Sewa" },
    { id_kendaraan: 2, id_owner: 1, nama_kendaraan: "Honda Brio", jenis: "city car", plat_nomor: "BL 4512 JK", harga_sewa: 180000, status: "Di Sewa" },
    { id_kendaraan: 3, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 9081 OP", harga_sewa: 200000, status: "Di Sewa" },
    { id_kendaraan: 4, id_owner: 1, nama_kendaraan: "Toyota Innova", jenis: "MPV", plat_nomor: "BL 8821 YY", harga_sewa: 350000, status: "Di Sewa" },
    { id_kendaraan: 5, id_owner: 1, nama_kendaraan: "Honda HR-V", jenis: "SUV", plat_nomor: "BL 7762 DR", harga_sewa: 400000, status: "Di Sewa" },
    { id_kendaraan: 6, id_owner: 1, nama_kendaraan: "Mitsubishi Xpander", jenis: "MPV", plat_nomor: "BL 2039 LK", harga_sewa: 300000, status: "Di Sewa" },
    { id_kendaraan: 7, id_owner: 1, nama_kendaraan: "Honda City", jenis: "sedan", plat_nomor: "BL 1109 NM", harga_sewa: 350000, status: "Di Sewa" },
    { id_kendaraan: 8, id_owner: 1, nama_kendaraan: "Yamaha NMax", jenis: "motor", plat_nomor: "BL 5812 PP", harga_sewa: 100000, status: "Di Sewa" },
    { id_kendaraan: 9, id_owner: 1, nama_kendaraan: "Honda Vario", jenis: "motor", plat_nomor: "BL 6620 ZZ", harga_sewa: 750000, status: "Di Sewa" },
    { id_kendaraan: 10, id_owner: 1, nama_kendaraan: "Suzuki Ertiga", jenis: "MPV", plat_nomor: "BL 3042 FG", harga_sewa: 250000, status: "Di Sewa" },

    // --- DI SERVICE (5) ---
    { id_kendaraan: 11, id_owner: 1, nama_kendaraan: "Honda HR-V", jenis: "SUV", plat_nomor: "BL 3012 GH", harga_sewa: 400000, status: "Di Service" },
    { id_kendaraan: 12, id_owner: 1, nama_kendaraan: "Toyota Fortuner", jenis: "SUV", plat_nomor: "BL 8899 DS", harga_sewa: 700000, status: "Di Service" },
    { id_kendaraan: 13, id_owner: 1, nama_kendaraan: "Daihatsu Sigra", jenis: "city car", plat_nomor: "BL 1523 EE", harga_sewa: 150000, status: "Di Service" },
    { id_kendaraan: 14, id_owner: 1, nama_kendaraan: "Honda Civic", jenis: "sedan", plat_nomor: "BL 9900 VX", harga_sewa: 600000, status: "Di Service" },
    { id_kendaraan: 15, id_owner: 1, nama_kendaraan: "Vespa Primavera", jenis: "motor", plat_nomor: "BL 4022 UI", harga_sewa: 150000, status: "Di Service" },

    // --- TERSEDIA (24) ---
    { id_kendaraan: 16, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2005 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 17, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2006 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 18, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2007 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 19, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2008 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 20, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2009 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 21, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2010 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 22, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2011 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 23, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2012 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 24, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2013 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 25, id_owner: 1, nama_kendaraan: "Honda Brio", jenis: "city car", plat_nomor: "BL 1542 LL", harga_sewa: 180000, status: "Tersedia" },
    { id_kendaraan: 26, id_owner: 1, nama_kendaraan: "Honda Jazz", jenis: "city car", plat_nomor: "BL 9021 KK", harga_sewa: 250000, status: "Tersedia" },
    { id_kendaraan: 27, id_owner: 1, nama_kendaraan: "Toyota Yaris", jenis: "city car", plat_nomor: "BL 8781 OO", harga_sewa: 280000, status: "Tersedia" },
    { id_kendaraan: 28, id_owner: 1, nama_kendaraan: "Toyota Vios", jenis: "sedan", plat_nomor: "BL 5519 FF", harga_sewa: 300000, status: "Tersedia" },
    { id_kendaraan: 29, id_owner: 1, nama_kendaraan: "Hyundai Creta", jenis: "SUV", plat_nomor: "BL 2290 DA", harga_sewa: 380000, status: "Tersedia" },
    { id_kendaraan: 30, id_owner: 1, nama_kendaraan: "Daihatsu Terios", jenis: "SUV", plat_nomor: "BL 6041 AS", harga_sewa: 300000, status: "Tersedia" },
    { id_kendaraan: 31, id_owner: 1, nama_kendaraan: "Honda PCX", jenis: "motor", plat_nomor: "BL 3381 KL", harga_sewa: 120000, status: "Tersedia" },
    { id_kendaraan: 32, id_owner: 1, nama_kendaraan: "Honda Beat", jenis: "motor", plat_nomor: "BL 4920 ER", harga_sewa: 60000, status: "Tersedia" },
    { id_kendaraan: 33, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2014 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 34, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2015 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 35, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2016 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 36, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2017 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 37, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2018 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 38, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2019 MJ", harga_sewa: 200000, status: "Tersedia" },
    { id_kendaraan: 39, id_owner: 1, nama_kendaraan: "Toyota Avanza", jenis: "MPV", plat_nomor: "BL 2020 MJ", harga_sewa: 200000, status: "Tersedia" }
];

// TABLE: penyewaan
// Active bookings and history items. Some have denda (late fine) > 0.
let penyewaanData = [
    { id_penyewaan: 201, id_customer: 101, id_kendaraan: 1, tanggal_sewa: "2026-06-01", tanggal_kembali: "2026-06-15", total_bayar: 2800000, status: "sedang di sewa", denda: 0 },
    { id_penyewaan: 202, id_customer: 102, id_kendaraan: 2, tanggal_sewa: "2026-06-02", tanggal_kembali: "2026-06-16", total_bayar: 2520000, status: "baru", denda: 0 },
    { id_penyewaan: 203, id_customer: 103, id_kendaraan: 3, tanggal_sewa: "2026-06-01", tanggal_kembali: "2026-06-15", total_bayar: 2800000, status: "baru", denda: 0 },
    { id_penyewaan: 204, id_customer: 104, id_kendaraan: 8, tanggal_sewa: "2026-05-20", tanggal_kembali: "2026-06-03", total_bayar: 1400000, status: "sedang di sewa", denda: 0 },
    
    // --- LATE RETURNS (DENDA > 0) (5 matching stats) ---
    { id_penyewaan: 205, id_customer: 105, id_kendaraan: 4, tanggal_sewa: "2026-05-15", tanggal_kembali: "2026-05-29", total_bayar: 4900000, status: "denda", denda: 150000 },
    { id_penyewaan: 206, id_customer: 106, id_kendaraan: 5, tanggal_sewa: "2026-05-10", tanggal_kembali: "2026-05-24", total_bayar: 5600000, status: "denda", denda: 250000 },
    { id_penyewaan: 207, id_customer: 101, id_kendaraan: 6, tanggal_sewa: "2026-05-12", tanggal_kembali: "2026-05-26", total_bayar: 4200000, status: "denda", denda: 100000 },
    { id_penyewaan: 208, id_customer: 102, id_kendaraan: 7, tanggal_sewa: "2026-05-08", tanggal_kembali: "2026-05-22", total_bayar: 4900000, status: "denda", denda: 300000 },
    { id_penyewaan: 209, id_customer: 103, id_kendaraan: 9, tanggal_sewa: "2026-05-18", tanggal_kembali: "2026-05-30", total_bayar: 9000000, status: "denda", denda: 500000 },

    // --- COMPLETED (RIWAYAT) ---
    { id_penyewaan: 210, id_customer: 104, id_kendaraan: 10, tanggal_sewa: "2026-05-01", tanggal_kembali: "2026-05-15", total_bayar: 3500000, status: "riwayat", denda: 0 },
    { id_penyewaan: 211, id_customer: 105, id_kendaraan: 16, tanggal_sewa: "2026-04-10", tanggal_kembali: "2026-04-17", total_bayar: 1400000, status: "riwayat", denda: 0 },
    { id_penyewaan: 212, id_customer: 106, id_kendaraan: 17, tanggal_sewa: "2026-04-20", tanggal_kembali: "2026-04-27", total_bayar: 1400000, status: "riwayat", denda: 50000 }
];

// TABLE: pembayaran
// Payments matching the bookings. Total payments should sum to around Rp12.000.000 (prepopulated)
let pembayaranData = [
    { id_pembayaran: 301, id_penyewaan: 201, tanggal_bayar: "2026-06-01", jumlah_bayar: 2800000, metode_pembayaran: "e-wallet", status_pembayaran: "Lunas" },
    { id_pembayaran: 302, id_penyewaan: 202, tanggal_bayar: "2026-06-02", jumlah_bayar: 756000, metode_pembayaran: "kartu kredit/debit", status_pembayaran: "DP 30%" },
    { id_pembayaran: 303, id_penyewaan: 203, tanggal_bayar: "2026-06-01", jumlah_bayar: 2800000, metode_pembayaran: "e-wallet", status_pembayaran: "Lunas" },
    { id_pembayaran: 304, id_penyewaan: 204, tanggal_bayar: "2026-05-20", jumlah_bayar: 1400000, metode_pembayaran: "e-wallet", status_pembayaran: "Lunas" },
    { id_pembayaran: 305, id_penyewaan: 205, tanggal_bayar: "2026-05-15", jumlah_bayar: 1470000, metode_pembayaran: "kartu kredit/debit", status_pembayaran: "DP 30%" },
    { id_pembayaran: 306, id_penyewaan: 206, tanggal_bayar: "2026-05-10", jumlah_bayar: 1680000, metode_pembayaran: "e-wallet", status_pembayaran: "DP 30%" },
    { id_pembayaran: 307, id_penyewaan: 211, tanggal_bayar: "2026-04-10", jumlah_bayar: 1400000, metode_pembayaran: "e-wallet", status_pembayaran: "Lunas" }
    // Total is: 2800000 + 756000 + 2800000 + 1400000 + 1470000 + 1680000 + 1400000 = Rp12.306.000 (roughly Rp12.000.000)
];

// ============================================
// 2. SESSION & APP STATE
// ============================================
const savedOwnerAccount = JSON.parse(localStorage.getItem('lepasOwnerAccount'));

let currentOwner = savedOwnerAccount
    ? {
        id_owner: 1,
        nama: savedOwnerAccount.name,
        email: savedOwnerAccount.email,
        password: savedOwnerAccount.password,
        no_hp: savedOwnerAccount.phone
    }
    : ownerData[0];

let currentMainTab = 'dashboard';
let currentBookingFilter = 'baru';
let currentProfileFilter = 'mobil';
let customProfileTags = [];
let trackerInterval = null;
// ============================================
// 3. NAVIGATION & ROUTING
// ============================================
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const target = document.getElementById(`page-${pageId}`);
    if (target) {
        target.classList.add('active');
        target.scrollTop = 0;
    }
}

function switchMainTab(tabName) {
    currentMainTab = tabName;
    navigateTo(tabName);
    
    // Update bottom navigation active indicators
    document.querySelectorAll('.bottom-nav').forEach(nav => {
        nav.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.page === tabName);
        });
    });

    if (tabName === 'dashboard') {
        renderDashboard();
    } else if (tabName === 'booking') {
        renderBookingList(currentBookingFilter);
    } else if (tabName === 'profil') {
        renderOwnerVehicleGrid(currentProfileFilter);
    }
}

function openTableModal(tableName) {
    const el = document.getElementById(`view-table-${tableName}`);
    if (el) {
        el.classList.add('active');
        
        // Refresh tables on open
        if (tableName === 'pembayaran') renderPembayaranTable();
        if (tableName === 'kendaraan') renderKendaraanTable();
        if (tableName === 'sewa') renderSewaTable();
    }
}

function closeTableModal(tableName) {
    const el = document.getElementById(`view-table-${tableName}`);
    if (el) {
        el.classList.remove('active');
        renderDashboard(); // Re-render dashboard stats to show edits/additions
    }
}


// ============================================
// 5. RENDER FUNCTIONS
// ============================================

// A. Dashboard Page
function renderDashboard() {
    // 1. Calculate vehicle counts from SQL mock data
    const diSewa = kendaraanData.filter(k => k.status === 'Di Sewa').length;
    const tersedia = kendaraanData.filter(k => k.status === 'Tersedia').length;
    const diService = kendaraanData.filter(k => k.status === 'Di Service').length;
    
    document.getElementById('stat-di-sewa').textContent = diSewa;
    document.getElementById('stat-tersedia').textContent = tersedia;
    document.getElementById('stat-di-service').textContent = diService;

    // 2. Calculate late returns (penyewaan with denda > 0 and status is denda)
    const totalDendaPenyewa = penyewaanData.filter(p => p.denda > 0 && p.status === 'denda').length;
    document.getElementById('stat-denda').textContent = totalDendaPenyewa;

    // 3. Compute total revenue from pembayaranData table
    const totalRevenue = pembayaranData.reduce((sum, pay) => sum + pay.jumlah_bayar, 0);
    document.getElementById('revenue-amount').textContent = formatCurrency(totalRevenue);
}

// B. Data Pembayaran Table
function renderPembayaranTable() {
    const body = document.getElementById('pembayaran-table-body');
    if (!body) return;
    
    body.innerHTML = pembayaranData.map(pay => {
        const badgeClass = pay.status_pembayaran === 'Lunas' ? 'badge-lunas' : 
                           pay.status_pembayaran === 'DP 30%' ? 'badge-dp' : 'badge-refund';
        return `
            <tr>
                <td><strong>${pay.id_pembayaran}</strong></td>
                <td>${pay.id_penyewaan}</td>
                <td>${pay.tanggal_bayar}</td>
                <td>${formatCurrency(pay.jumlah_bayar)}</td>
                <td>${pay.metode_pembayaran}</td>
                <td><span class="badge ${badgeClass}">${pay.status_pembayaran}</span></td>
                <td>
                    <button class="table-btn-action" onclick="togglePaymentStatus(${pay.id_pembayaran})">Toggle Status</button>
                </td>
            </tr>
        `;
    }).join('');
}

// C. Data Kendaraan Table
function renderKendaraanTable() {
    const body = document.getElementById('kendaraan-table-body');
    if (!body) return;
    
    body.innerHTML = kendaraanData.map(car => {
        const statusBadge = car.status === 'Tersedia' ? 'badge-tersedia' : 
                            car.status === 'Di Sewa' ? 'badge-sewa' : 'badge-service';
        return `
            <tr>
                <td><strong>${car.id_kendaraan}</strong></td>
                <td>${car.id_owner}</td>
                <td>${car.nama_kendaraan}</td>
                <td>${car.jenis}</td>
                <td>${car.plat_nomor}</td>
                <td>${formatCurrency(car.harga_sewa)}</td>
                <td><span class="badge ${statusBadge}">${car.status}</span></td>
                <td>
                    <button class="table-btn-action" onclick="editVehicle(${car.id_kendaraan})">Edit</button>
                    <button class="table-btn-action table-btn-danger" onclick="deleteVehicle(${car.id_kendaraan})">Hapus</button>
                </td>
            </tr>
        `;
    }).join('');
}

// D. Data Sewa Table
function renderSewaTable() {
    const body = document.getElementById('sewa-table-body');
    if (!body) return;
    
    body.innerHTML = penyewaanData.map(rental => {
        const statusClass = rental.status === 'baru' ? 'badge-dp' :
                            rental.status === 'sedang di sewa' ? 'badge-sewa' :
                            rental.status === 'denda' ? 'badge-refund' : 'badge-lunas';
        return `
            <tr>
                <td><strong>${rental.id_penyewaan}</strong></td>
                <td>${rental.id_customer}</td>
                <td>${rental.id_kendaraan}</td>
                <td>${rental.tanggal_sewa}</td>
                <td>${rental.tanggal_kembali}</td>
                <td>${formatCurrency(rental.total_bayar)}</td>
                <td><span class="badge ${statusClass}">${rental.status}</span></td>
                <td><span class="${rental.denda > 0 ? 'denda-danger' : ''}">${formatCurrency(rental.denda)}</span></td>
                <td>
                    ${rental.status === 'sedang di sewa' || rental.status === 'denda' ? 
                      `<button class="table-btn-action btn-track-booking" onclick="showLiveTracker(${rental.id_penyewaan})">Lacak</button>` : ''}
                    <button class="table-btn-action" onclick="toggleRentalStatus(${rental.id_penyewaan})">Toggle</button>
                </td>
            </tr>
        `;
    }).join('');
}

function handleOwnerLogout() {
    localStorage.removeItem('lepasLoginRole');
    localStorage.removeItem('lepasLoginEmail');

    showToast('Berhasil keluar dari akun owner');

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 700);
}

function renderBookingList(filter) {
    const container = document.getElementById('booking-list-container');
    if (!container) return;

    // Filter penyewaanData based on selection
    let filtered = [];
    if (filter === 'baru') {
        filtered = penyewaanData.filter(p => p.status === 'baru');
    } else if (filter === 'denda') {
        filtered = penyewaanData.filter(p => p.status === 'denda' || p.denda > 0);
    } else if (filter === 'sedang di sewa') {
        filtered = penyewaanData.filter(p => p.status === 'sedang di sewa');
    } else if (filter === 'riwayat') {
        filtered = penyewaanData.filter(p => p.status === 'riwayat');
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 40px 20px; color: var(--text-tertiary);">
                <span class="material-icons-outlined" style="font-size: 48px; margin-bottom:10px;">no_accounts</span>
                <p style="font-size:14px; font-weight:500;">Tidak ada kendaraan yang sedang dibooking (${filter})</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(item => {
        const car = kendaraanData.find(k => k.id_kendaraan === item.id_kendaraan) || { nama_kendaraan: 'Kendaraan', plat_nomor: 'Unknown' };
        const customer = customerData.find(c => c.id_customer === item.id_customer) || { nama: 'Customer', no_hp: '08125077XXXX' };
        
        // Match payment info to get Lunas or DP status
        const pay = pembayaranData.find(pb => pb.id_penyewaan === item.id_penyewaan);
        const payStatusText = pay ? pay.status_pembayaran : 'Menunggu Pembayaran';
        const payBadgeClass = payStatusText === 'Lunas' ? 'status-lunas-text' : 'status-dp-text';

        // Calculate lease duration string
        const start = new Date(item.tanggal_sewa);
        const end = new Date(item.tanggal_kembali);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const durationString = diffDays >= 7 ? `${Math.round(diffDays/7)} minggu` : `${diffDays} hari`;

        // Render Action Buttons
        let actionButtons = '';
        if (item.status === 'sedang di sewa' || item.status === 'denda') {
            actionButtons = `
                <div style="display:flex; justify-content: flex-end; width:100%;">
                    <button class="btn-action-booking btn-track-booking" onclick="showLiveTracker(${item.id_penyewaan})">Tracking Lokasi</button>
                    <button class="btn-action-booking" style="background:#8C9E84; color:#3A4D2E;" onclick="triggerTolakBooking(${item.id_penyewaan})">Tolak/Refund</button>
                </div>
            `;
        } else {
            actionButtons = `
                <button class="btn-action-booking" onclick="triggerTolakBooking(${item.id_penyewaan})">Tolak/Refund</button>
            `;
        }

        return `
            <div class="booking-card animate-slide-up">
                <div class="booking-car-img-placeholder">
                    <span class="material-icons-outlined">directions_car</span>
                </div>
                <div class="booking-card-info">
                    <div class="booking-card-header">
                        <span class="booking-car-name">${car.nama_kendaraan}</span>
                        <span class="booking-status-tag ${payBadgeClass}">${payStatusText}</span>
                    </div>
                    <span class="booking-duration">${durationString}</span>
                    <span class="booking-phone">${customer.no_hp}</span>
                    
                    <div class="booking-docs-row">
                        <button class="doc-badge" onclick="viewDocument('ktp.jpg')">ktp.jpg</button>
                        <button class="doc-badge" onclick="viewDocument('sim.jpg')">sim.jpg</button>
                    </div>
                    
                    ${actionButtons}
                </div>
            </div>
        `;
    }).join('');
}

// F. Profile Vehicles Grid
function filterProfileVehicles(jenis, btn) {
    if (btn) {
        btn.parentElement.querySelectorAll('.pill-btn-outline').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    currentProfileFilter = jenis;
    renderOwnerVehicleGrid(jenis);
}

function renderOwnerVehicleGrid(filter) {
    const container = document.getElementById('owner-vehicle-grid');
    if (!container) return;

    // Filter vehicles by category
    const filtered = kendaraanData.filter(k => k.jenis.toLowerCase() === filter.toLowerCase());

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: span 3; text-align:center; padding: 30px; color: var(--text-tertiary);">
                <p style="font-size:12px; font-weight:500;">Tidak ada kendaraan kategori ini.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(car => `
        <div class="profile-car-card animate-scale-in">
            <div class="profile-car-img-placeholder">
                <span class="material-icons-outlined">directions_car</span>
            </div>
            <div class="profile-car-name">${car.nama_kendaraan}</div>
            <div class="profile-car-price">${formatCurrency(car.harga_sewa)}/hari</div>
            <div class="profile-car-owner">${currentOwner.nama}</div>
        </div>
    `).join('');
}

// ============================================
// 6. INTERACTIVE ACTIONS (BUSINESS LOGIC)
// ============================================

// A. Manage Vehicles Form Modal
function showAddVehicleModal() {
    document.getElementById('vehicle-form-title').textContent = "Tambah Kendaraan Baru";
    document.getElementById('form-id-kendaraan').value = "";
    document.getElementById('vehicle-add-form').reset();
    document.getElementById('modal-vehicle-form').classList.add('active');
}

function editVehicle(id) {
    const car = kendaraanData.find(k => k.id_kendaraan === id);
    if (!car) return;
    
    document.getElementById('vehicle-form-title').textContent = "Edit Detail Kendaraan";
    document.getElementById('form-id-kendaraan').value = car.id_kendaraan;
    document.getElementById('form-nama_kendaraan').value = car.nama_kendaraan;
    document.getElementById('form-jenis').value = car.jenis;
    document.getElementById('form-plat_nomor').value = car.plat_nomor;
    document.getElementById('form-harga_sewa').value = car.harga_sewa;
    document.getElementById('form-status').value = car.status;
    
    document.getElementById('modal-vehicle-form').classList.add('active');
}

function handleSaveVehicle(e) {
    e.preventDefault();
    const id = document.getElementById('form-id-kendaraan').value;
    const name = document.getElementById('form-nama_kendaraan').value;
    const jenis = document.getElementById('form-jenis').value;
    const plate = document.getElementById('form-plat_nomor').value;
    const price = parseInt(document.getElementById('form-harga_sewa').value);
    const status = document.getElementById('form-status').value;

    if (id) {
        // Edit Mode
        const carIndex = kendaraanData.findIndex(k => k.id_kendaraan == id);
        if (carIndex !== -1) {
            kendaraanData[carIndex] = {
                ...kendaraanData[carIndex],
                nama_kendaraan: name,
                jenis: jenis,
                plat_nomor: plate,
                harga_sewa: price,
                status: status
            };
            showToast('Kendaraan berhasil diperbarui! 🚗');
        }
    } else {
        // Create Mode
        const newCar = {
            id_kendaraan: kendaraanData.length > 0 ? Math.max(...kendaraanData.map(k => k.id_kendaraan)) + 1 : 1,
            id_owner: currentOwner.id_owner,
            nama_kendaraan: name,
            jenis: jenis,
            plat_nomor: plate,
            harga_sewa: price,
            status: status
        };
        kendaraanData.push(newCar);
        showToast('Kendaraan baru berhasil ditambahkan! 🎉');
    }

    closeVehicleFormModal();
    renderDashboard();
    renderKendaraanTable();
    renderOwnerVehicleGrid(currentProfileFilter);
}

function deleteVehicle(id) {
    if (confirm('Apakah Anda yakin ingin menghapus kendaraan ini?')) {
        kendaraanData = kendaraanData.filter(k => k.id_kendaraan !== id);
        showToast('Kendaraan telah dihapus.');
        renderDashboard();
        renderKendaraanTable();
        renderOwnerVehicleGrid(currentProfileFilter);
    }
}

function closeVehicleFormModal() {
    document.getElementById('modal-vehicle-form').classList.remove('active');
}

// B. Profile Info Editor
function editProfileDetails() {
    document.getElementById('form-owner-name').value = currentOwner.nama;
    document.getElementById('form-owner-address').value = document.getElementById('owner-display-address').textContent.trim();
    document.getElementById('form-owner-bio').value = document.getElementById('owner-display-bio').textContent.trim();
    document.getElementById('modal-profile-form').classList.add('active');
}

function handleSaveProfile(e) {
    e.preventDefault();
    const name = document.getElementById('form-owner-name').value;
    const address = document.getElementById('form-owner-address').value;
    const bio = document.getElementById('form-owner-bio').value;

    currentOwner.nama = name;
    updateProfileDisplay();
    
    document.getElementById('owner-display-address').textContent = address;
    document.getElementById('owner-display-bio').textContent = bio;
    
    closeProfileFormModal();
    showToast('Profil toko diperbarui!');
    renderOwnerVehicleGrid(currentProfileFilter);
}

function closeProfileFormModal() {
    document.getElementById('modal-profile-form').classList.remove('active');
}

function updateProfileDisplay() {
    document.getElementById('owner-display-name').textContent = currentOwner.nama;
    document.getElementById('profile-avatar-preview').textContent = currentOwner.nama.charAt(0).toUpperCase();
}

function addNewProfileTag() {
    const tagName = prompt("Masukkan nama kategori tag baru:");
    if (tagName) {
        const cleanedTag = tagName.trim().toLowerCase();
        if (cleanedTag) {
            // Check if tag already exists
            const pillsBar = document.getElementById('profile-tags-container');
            const existPill = Array.from(pillsBar.querySelectorAll('.pill-btn-outline')).find(p => p.textContent.toLowerCase() === cleanedTag);
            if (existPill) {
                showToast('Kategori sudah ada.');
                return;
            }

            // Create tag element before the '+' button
            const addBtn = pillsBar.querySelector('.add-tag');
            const btn = document.createElement('button');
            btn.className = 'pill-btn-outline';
            btn.textContent = cleanedTag;
            btn.onclick = function() {
                filterProfileVehicles(cleanedTag, btn);
            };
            pillsBar.insertBefore(btn, addBtn);
            showToast(`Tag "${cleanedTag}" ditambahkan.`);
        }
    }
}

// C. Tolak / Refund Booking Action
function triggerTolakBooking(id_penyewaan) {
    if (confirm('Apakah Anda yakin ingin MENOLAK & ME-REFUND transaksi sewa ini?')) {
        const index = penyewaanData.findIndex(p => p.id_penyewaan === id_penyewaan);
        if (index !== -1) {
            const booking = penyewaanData[index];
            
            // Set status to riwayat / cancelled
            penyewaanData[index].status = 'riwayat';
            
            // Update associated vehicle status to Tersedia
            const carIndex = kendaraanData.findIndex(k => k.id_kendaraan === booking.id_kendaraan);
            if (carIndex !== -1) {
                kendaraanData[carIndex].status = 'Tersedia';
            }
            
            // Update payment transaction status to Refund
            const payIndex = pembayaranData.findIndex(pb => pb.id_penyewaan === id_penyewaan);
            if (payIndex !== -1) {
                pembayaranData[payIndex].status_pembayaran = 'Refund';
            }

            showToast('Transaksi Berhasil Direfund & Ditolak 💸');
            
            // Re-render
            renderDashboard();
            renderBookingList(currentBookingFilter);
        }
    }
}

// D. Simulated DB Toggle Tweak helpers (for data view sandbox)
function togglePaymentStatus(id) {
    const index = pembayaranData.findIndex(p => p.id_pembayaran === id);
    if (index !== -1) {
        const statuses = ['Lunas', 'DP 30%', 'Refund'];
        const curr = statuses.indexOf(pembayaranData[index].status_pembayaran);
        pembayaranData[index].status_pembayaran = statuses[(curr + 1) % statuses.length];
        renderPembayaranTable();
        showToast('Status Pembayaran di-update.');
    }
}

function toggleRentalStatus(id) {
    const index = penyewaanData.findIndex(p => p.id_penyewaan === id);
    if (index !== -1) {
        const rental = penyewaanData[index];
        const statuses = ['baru', 'sedang di sewa', 'denda', 'riwayat'];
        const curr = statuses.indexOf(rental.status);
        const nextStatus = statuses[(curr + 1) % statuses.length];
        penyewaanData[index].status = nextStatus;
        
        // Auto update vehicle status based on rental status
        const carIndex = kendaraanData.findIndex(k => k.id_kendaraan === rental.id_kendaraan);
        if (carIndex !== -1) {
            if (nextStatus === 'sedang di sewa' || nextStatus === 'denda') {
                kendaraanData[carIndex].status = 'Di Sewa';
            } else if (nextStatus === 'riwayat') {
                kendaraanData[carIndex].status = 'Tersedia';
            }
        }
        
        renderSewaTable();
        showToast('Status Penyewaan di-update.');
    }
}

// E. View Simulated SIM / KTP
function viewDocument(docName) {
    showToast(`Membuka dokumen file: ${docName} 📄 (Terverifikasi)`);
}

// ============================================
// 7. REAL-TIME GPS VEHICLE TRACKING SIMULATION
// ============================================
function showLiveTracker(id_penyewaan) {
    const rental = penyewaanData.find(p => p.id_penyewaan === id_penyewaan);
    if (!rental) return;

    const car = kendaraanData.find(k => k.id_kendaraan === rental.id_kendaraan) || { nama_kendaraan: 'Avanza', plat_nomor: 'BL 1024 AB' };
    const customer = customerData.find(c => c.id_customer === rental.id_customer) || { nama: 'Rizki' };

    document.getElementById('tracker-car-name').textContent = car.nama_kendaraan;
    document.getElementById('tracker-plate').textContent = car.plat_nomor;
    document.getElementById('tracker-customer-name').textContent = customer.nama;

    // Open Tracker Overlay
    document.getElementById('modal-tracker').classList.add('active');

    // Simulate GPS Real-Time Movement Updates
    simulateGPSMovement();
}

function simulateGPSMovement() {
    if (trackerInterval) clearInterval(trackerInterval);

    // Initial Coordinates (Center of Banda Aceh)
    let lat = 5.54829;
    let lng = 95.32183;
    let speed = 40;
    
    const pin = document.getElementById('map-marker-pin');
    const coordEl = document.getElementById('map-live-coordinates');
    const speedEl = document.getElementById('map-live-speed');
    const addressEl = document.getElementById('tracker-last-address');
    
    const addresses = [
        "Jl. Sultan Salahuddin, Bitai, Kec. Jaya Baru",
        "Jl. Teuku Umar, Setui, Kec. Baiturrahman",
        "Jl. Mohd Jam, Kampung Baru, Kec. Baiturrahman",
        "Jl. Daud Beureueh, Kuta Alam, Kec. Kuta Alam",
        "Jl. Syiah Kuala, Lamdingin, Kec. Syiah Kuala"
    ];

    let step = 0;
    
    // Every 1.5 seconds, update coordinates, speed, and pin location slightly
    trackerInterval = setInterval(() => {
        // Wander coordinates slightly
        lat += (Math.random() - 0.5) * 0.0015;
        lng += (Math.random() - 0.5) * 0.0015;
        
        // Speed fluctuations
        speed = Math.floor(35 + Math.random() * 25);
        
        // Update labels
        coordEl.textContent = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
        speedEl.textContent = `Speed: ${speed} km/h`;
        
        if (step % 4 === 0) {
            const addrIndex = Math.floor(Math.random() * addresses.length);
            addressEl.textContent = addresses[addrIndex] + ", Banda Aceh";
        }
        
        // Animate the SVG Pin inside map view
        if (pin) {
            // Animate positioning of marker pin relative to coordinates
            const x = 100 + (Math.sin(step / 2) * 50);
            const y = 80 + (Math.cos(step / 3) * 30);
            pin.setAttribute('transform', `translate(${x - 150}, ${y - 100})`);
        }
        
        step++;
    }, 1500);
}

function closeTrackerModal() {
    if (trackerInterval) {
        clearInterval(trackerInterval);
        trackerInterval = null;
    }
    document.getElementById('modal-tracker').classList.remove('active');
}

// ============================================
// 8. TOAST NOTIFICATION UTILITY
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// Helper to format integers to rupiah
function formatCurrency(number) {
    return 'Rp' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ============================================
// 9. APP INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('lepasLoginRole');

    if (role !== 'owner') {
        window.location.href = 'index.html';
        return;
    }

    updateProfileDisplay();
    renderDashboard();
    renderBookingList(currentBookingFilter);
    renderOwnerVehicleGrid(currentProfileFilter);

    navigateTo('dashboard');
});
