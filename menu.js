const daftarMenu = [
    {
        nama: "Mango Smoothie",
        kategori: "Minuman",
        harga: 25000,
        gambar: "m1.png",
        deskripsi: "Minuman mangga segar dan creamy."
    },
    {
        nama: "Iced Coffee",
        kategori: "Minuman",
        harga: 22000,
        gambar: "m2.png",
        deskripsi: "Kopi dingin dengan susu yang lembut."
    },
    {
        nama: "Lemon Tea",
        kategori: "Minuman",
        harga: 18000,
        gambar: "m3.png",
        deskripsi: "Teh lemon segar dengan rasa sedikit asam."
    },
    {
        nama: "Matcha Mango Smoothie",
        kategori: "Minuman",
        harga: 27000,
        gambar: "m4.png",
        deskripsi: "Perpaduan mangga dan matcha yang menyegarkan."
    },
    {
        nama: "Chocolate",
        kategori: "Minuman",
        harga: 25000,
        gambar: "m6.jpg",
        deskripsi: "Cokelat creamy dengan rasa manis yang pas."
    },
    {
        nama: "Strawberry Smoothie",
        kategori: "Minuman",
        harga: 25000,
        gambar: "m5.png",
        deskripsi: "Minuman strawberry segar dan creamy."
    },

    {
        nama: "Chocolate Cake",
        kategori: "Dessert",
        harga: 27000,
        gambar: "d1.png",
        deskripsi: "Kue cokelat lembut dengan rasa manis."
    },
    {
        nama: "Cheese Cake Berry",
        kategori: "Dessert",
        harga: 28000,
        gambar: "d5.png",
        deskripsi: "Cheesecake lembut dengan creamy dan buah berry."
    },
    {
        nama: "Tiramisu",
        kategori: "Dessert",
        harga: 28000,
        gambar: "d6.png",
        deskripsi: "Dessert lembut dengan rasa kopi dan krim manis."
    },
    {
        nama: "Strawberry Pancake",
        kategori: "Dessert",
        harga: 27000,
        gambar: "d12.png",
        deskripsi: "Pancake lembut dengan topping strawberry segar."
    },
    {
        nama: "Ice Cream Sundae",
        kategori: "Dessert",
        harga: 27000,
        gambar: "d15.png",
        deskripsi: "Es krim lembut dengan topping warna-warni."
    },
    {
        nama: "Red Velvet Cake",
        kategori: "Dessert",
        harga: 27000,
        gambar: "d7.png",
        deskripsi: "Kue red velvet lembut dengan cream."
    },

    {
        nama: "Crispy Chicken",
        kategori: "Hidangan Utama",
        harga: 30000,
        gambar: "mkn1.png",
        deskripsi: "Ayam crispy dengan saus gurih dan renyah."
    },
    {
        nama: "Beef Noodles",
        kategori: "Hidangan Utama",
        harga: 34000,
        gambar: "mkn2.png",
        deskripsi: "Mie dengan irisan daging sapi dan sayuran."
    },
    {
        nama: "Creamy Pasta",
        kategori: "Hidangan Utama",
        harga: 35000,
        gambar: "mkn3.png",
        deskripsi: "Pasta creamy dengan saus gurih."
    },
    {
        nama: "Daging Lada Hitam",
        kategori: "Hidangan Utama",
        harga: 38000,
        gambar: "mkn11.png",
        deskripsi: "Daging sapi empuk dengan lada hitam yang gurih."
    },
    {
        nama: "Nasi Goreng Katsu",
        kategori: "Hidangan Utama",
        harga: 35000,
        gambar: "mkn13.png",
        deskripsi: "Nasi goreng gurih dengan chicken katsu renyah."
    },
    {
        nama: "Ramen",
        kategori: "Hidangan Utama",
        harga: 30000,
        gambar: "mkn16.png",
        deskripsi: "Mie kenyal dengan kuah gurih dan topping lezat."
    },

    {
        nama: "Margherita Pizza",
        kategori: "Pizza",
        harga: 45000,
        gambar: "p1.png",
        deskripsi: "Pizza klasik dengan keju dan tomat."
    },
    {
        nama: "Hawaiian Pizza",
        kategori: "Pizza",
        harga: 48000,
        gambar: "p13.png",
        deskripsi: "Pizza dengan nanas dan topping pilihan."
    },
    {
        nama: "Cheese Pizza",
        kategori: "Pizza",
        harga: 47000,
        gambar: "p7.png",
        deskripsi: "Pizza gurih dengan keju melimpah."
    },
    {
        nama: "Spinach Pizza",
        kategori: "Pizza",
        harga: 45000,
        gambar: "p17.png",
        deskripsi: "Pizza dengan bayam segar dan keju creamy."
    },
    {
        nama: "Meat Lovers Pizza",
        kategori: "Pizza",
        harga: 55000,
        gambar: "p2.png",
        deskripsi: "Pizza dengan berbagai topping daging yang gurih."
    },
    {
        nama: "Meatball Pizza",
        kategori: "Pizza",
        harga: 52000,
        gambar: "p3.png",
        deskripsi: "Pizza dengan topping bola-bola daging yang juicy."
    },

    {
        nama: "Butter Croissant",
        kategori: "Roti & Pastry",
        harga: 22000,
        gambar: "r1.png",
        deskripsi: "Croissant renyah dengan aroma butter."
    },
    {
        nama: "Fruit Pastry",
        kategori: "Roti & Pastry",
        harga: 25000,
        gambar: "r9.png",
        deskripsi: "Pastry lembut dengan topping buah."
    },
    {
        nama: "Almond Croissant",
        kategori: "Roti & Pastry",
        harga: 28000,
        gambar: "r4.png",
        deskripsi: "Croissant renyah dengan topping almond."
    },
    {
        nama: "Garlic Bread",
        kategori: "Roti & Pastry",
        harga: 25000,
        gambar: "r12.png",
        deskripsi: "Roti lembut dengan aroma bawang putih yang gurih."
    },
    {
        nama: "Banana Cake",
        kategori: "Roti & Pastry",
        harga: 25000,
        gambar: "r14.png",
        deskripsi: "Kue lembut dengan rasa pisang manis."
    },
    {
        nama: "Roti Sobek",
        kategori: "Roti & Pastry",
        harga: 20000,
        gambar: "r18.png",
        deskripsi: "Roti lembut dan empuk dengan rasa manis."
    },

    {
        nama: "Chicken Sandwich",
        kategori: "Snack",
        harga: 35000,
        gambar: "snc1.png",
        deskripsi: "Sandwich ayam dengan sayuran segar."
    },
    {
        nama: "Crispy Corn",
        kategori: "Snack",
        harga: 20000,
        gambar: "snc14.png",
        deskripsi: "Jagung crispy dengan bumbu gurih."
    },
    {
        nama: "Cheesy Loaded Fries",
        kategori: "Snack",
        harga: 23000,
        gambar: "snc3.png",
        deskripsi: "Kentang renyah dengan saus keju."
    },
    {
        nama: "Nachos",
        kategori: "Snack",
        harga: 28000,
        gambar: "snc11.png",
        deskripsi: "Keripik tortilla dengan saus keju yang gurih."
    },
    {
        nama: "Sweet Potato Fries",
        kategori: "Snack",
        harga: 22000,
        gambar: "snc17.png",
        deskripsi: "Ubi manis renyah di luar dan lembut di dalam."
    },
    {
        nama: "Risol Mayo",
        kategori: "Snack",
        harga: 18000,
        gambar: "snc18.png",
        deskripsi: "Risol renyah dengan mayo, smoked beef, dan telur."
    }
];

const daftarMenuHTML = document.getElementById("daftarMenu");

function tampilkanMenu() {

    daftarMenuHTML.innerHTML = "";

    const kategori = [
        "Minuman",
        "Dessert",
        "Hidangan Utama",
        "Pizza",
        "Roti & Pastry",
        "Snack"
    ];

    kategori.forEach(function(namaKategori) {

        const menuKategori = daftarMenu.filter(function(menu) {
            return menu.kategori === namaKategori;
        });

        const section = document.createElement("section");
        section.className = "menu-section";

        section.innerHTML = `
            <div class="kategori-title">
                <h2>${namaKategori}</h2>
                <div class="kategori-line"></div>
            </div>

            <div class="menu-grid"></div>
        `;

        const menuGrid = section.querySelector(".menu-grid");

        menuKategori.forEach(function(menu) {

            const card = document.createElement("article");
            card.className = "menu-card";

            card.innerHTML = `
                <img src="${menu.gambar}" alt="${menu.nama}">
                <h3>${menu.nama}</h3>
                <p>${menu.deskripsi}</p>

                <div class="card-bottom">
                    <span class="harga">
                        Rp${menu.harga.toLocaleString("id-ID")}
                    </span>

                    <button class="btn-cart">
                        + Keranjang
                    </button>
                </div>
            `;

            const tombolKeranjang = card.querySelector(".btn-cart");

            tombolKeranjang.addEventListener("click", function() {
                tambahKeranjang(menu.nama);
            });

            menuGrid.appendChild(card);
        });

        daftarMenuHTML.appendChild(section);
    });
}

let jumlahKeranjang = 0;

function tambahKeranjang(namaMenu) {

    jumlahKeranjang++;

    document.getElementById("jumlahKeranjang").textContent =
        jumlahKeranjang;

    if (jumlahKeranjang >= 5) {

        alert(
            namaMenu +
            " berhasil ditambahkan! Keranjang sudah berisi banyak menu."
        );

    } else {

        alert(
            namaMenu +
            " berhasil ditambahkan ke keranjang!"
        );
    }
}

tampilkanMenu();