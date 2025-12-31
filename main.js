// ================================
// Product Data - Extended Collection
// ================================
const products = [
    // Women's Clothing
    {
        id: 1,
        name: "Oversize Yün Karışımlı Palto",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "giyim",
        price: 2499,
        oldPrice: 3299,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
        colors: ["#8B4513", "#1a1a1a", "#d4c4b0"],
        rating: 4.8,
        reviews: 124,
        badge: "sale",
        tags: ["new", "bestseller"]
    },
    {
        id: 2,
        name: "Saten Mini Etek",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "etek",
        price: 899,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1592301933927-35b597393c0a?w=600&h=800&fit=crop",
        colors: ["#2c3e50", "#c0392b", "#27ae60"],
        rating: 4.6,
        reviews: 89,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 3,
        name: "Balıkçı Yaka Triko Kazak",
        brand: "Essentials",
        category: "kadin",
        subcategory: "giyim",
        price: 699,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#1a1a1a", "#e74c3c"],
        rating: 4.9,
        reviews: 256,
        badge: "bestseller",
        tags: ["bestseller"]
    },
    {
        id: 4,
        name: "Deri Görünümlü Pantolon",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "giyim",
        price: 1299,
        oldPrice: 1699,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.7,
        reviews: 178,
        badge: "sale",
        tags: ["sale"]
    },

    // Women's Accessories
    {
        id: 5,
        name: "Zincir Detaylı Omuz Çantası",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "canta",
        price: 1899,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#c9a962", "#8B4513"],
        rating: 4.9,
        reviews: 312,
        badge: "bestseller",
        tags: ["bestseller"]
    },
    {
        id: 6,
        name: "Minimal Gold Kolye Set",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "taki",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",
        colors: ["#c9a962"],
        rating: 4.8,
        reviews: 198,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 7,
        name: "Yün Karışımlı Bere",
        brand: "Essentials",
        category: "aksesuar",
        subcategory: "sapka",
        price: 299,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#ecf0f1", "#c0392b"],
        rating: 4.5,
        reviews: 87,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 8,
        name: "Oversized Güneş Gözlüğü",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "gozluk",
        price: 899,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.7,
        reviews: 145,
        badge: null,
        tags: []
    },

    // Men's Clothing
    {
        id: 9,
        name: "Slim Fit Blazer Ceket",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "giyim",
        price: 2199,
        oldPrice: 2799,
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
        colors: ["#2c3e50", "#1a1a1a", "#7f8c8d"],
        rating: 4.8,
        reviews: 167,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 10,
        name: "Premium Pamuklu T-Shirt",
        brand: "Essentials",
        category: "erkek",
        subcategory: "giyim",
        price: 349,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#1a1a1a", "#2c3e50", "#27ae60"],
        rating: 4.6,
        reviews: 423,
        badge: null,
        tags: ["bestseller"]
    },
    {
        id: 11,
        name: "Slim Fit Chino Pantolon",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "giyim",
        price: 799,
        oldPrice: 999,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
        colors: ["#d4c4b0", "#1a1a1a", "#2c3e50"],
        rating: 4.7,
        reviews: 234,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 12,
        name: "Kışlık Yün Mont",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "giyim",
        price: 3499,
        oldPrice: 4299,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
        colors: ["#2c3e50", "#1a1a1a"],
        rating: 4.9,
        reviews: 156,
        badge: "bestseller",
        tags: ["new", "bestseller"]
    },

    // Shoes
    {
        id: 13,
        name: "Deri Chelsea Bot",
        brand: "Luxe",
        category: "ayakkabi",
        subcategory: "bot",
        price: 2299,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.8,
        reviews: 198,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 14,
        name: "Klasik Sneaker",
        brand: "Essentials",
        category: "ayakkabi",
        subcategory: "spor",
        price: 1199,
        oldPrice: 1499,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#1a1a1a", "#e74c3c"],
        rating: 4.7,
        reviews: 567,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 15,
        name: "Stiletto Topuklu Ayakkabı",
        brand: "Luxe",
        category: "ayakkabi",
        subcategory: "topuklu",
        price: 1599,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#c0392b", "#d4c4b0"],
        rating: 4.6,
        reviews: 123,
        badge: null,
        tags: []
    },
    {
        id: 16,
        name: "Loafer Ayakkabı",
        brand: "StyleStore",
        category: "ayakkabi",
        subcategory: "klasik",
        price: 1899,
        oldPrice: 2299,
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.8,
        reviews: 89,
        badge: "sale",
        tags: ["sale"]
    },

    // Home & Living
    {
        id: 17,
        name: "Kokulu Mum Seti (3'lü)",
        brand: "Home",
        category: "ev",
        subcategory: "mum",
        price: 449,
        oldPrice: 599,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=800&fit=crop",
        colors: [],
        rating: 4.9,
        reviews: 345,
        badge: "bestseller",
        tags: ["bestseller"]
    },
    {
        id: 18,
        name: "El Yapımı Seramik Vazo",
        brand: "Home",
        category: "ev",
        subcategory: "vazo",
        price: 799,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#d4c4b0", "#2c3e50"],
        rating: 4.7,
        reviews: 78,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 19,
        name: "Kadife Dekoratif Yastık",
        brand: "Home",
        category: "ev",
        subcategory: "yastik",
        price: 299,
        oldPrice: 399,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=800&fit=crop",
        colors: ["#27ae60", "#c0392b", "#2c3e50", "#c9a962"],
        rating: 4.6,
        reviews: 156,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 20,
        name: "Minimalist Duvar Aynası",
        brand: "Home",
        category: "ev",
        subcategory: "ayna",
        price: 1299,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=800&fit=crop",
        colors: ["#c9a962", "#1a1a1a"],
        rating: 4.8,
        reviews: 67,
        badge: null,
        tags: []
    },

    // More Products
    {
        id: 21,
        name: "Kaşmir Atkı",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "atki",
        price: 899,
        oldPrice: 1199,
        image: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=600&h=800&fit=crop",
        colors: ["#d4c4b0", "#1a1a1a", "#c0392b"],
        rating: 4.9,
        reviews: 234,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 22,
        name: "Deri Kemer",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "kemer",
        price: 599,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.7,
        reviews: 189,
        badge: null,
        tags: []
    },
    {
        id: 23,
        name: "Örgü Hırka",
        brand: "Essentials",
        category: "kadin",
        subcategory: "giyim",
        price: 1099,
        oldPrice: 1399,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#d4c4b0", "#8B4513"],
        rating: 4.8,
        reviews: 145,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 24,
        name: "Pamuklu Pijama Takımı",
        brand: "Essentials",
        category: "kadin",
        subcategory: "giyim",
        price: 699,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#ffc0cb", "#87ceeb"],
        rating: 4.9,
        reviews: 312,
        badge: "bestseller",
        tags: ["bestseller"]
    },
    // New Products
    {
        id: 25,
        name: "Kapüşonlu Sweatshirt",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "giyim",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#7f8c8d", "#2c3e50"],
        rating: 4.7,
        reviews: 234,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 26,
        name: "Kadın Denim Ceket",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "giyim",
        price: 1299,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&h=800&fit=crop",
        colors: ["#5dade2", "#1a1a1a"],
        rating: 4.6,
        reviews: 167,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 27,
        name: "Spor Eşofman Takımı",
        brand: "Essentials",
        category: "erkek",
        subcategory: "giyim",
        price: 899,
        oldPrice: 1199,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#2c3e50", "#27ae60"],
        rating: 4.8,
        reviews: 456,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 28,
        name: "Deri Cüzdan",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "cuzdan",
        price: 499,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.9,
        reviews: 289,
        badge: "bestseller",
        tags: ["bestseller"]
    },
    {
        id: 29,
        name: "Kadın Trençkot",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "giyim",
        price: 2799,
        oldPrice: 3499,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
        colors: ["#d4c4b0", "#1a1a1a"],
        rating: 4.8,
        reviews: 178,
        badge: "sale",
        tags: ["sale", "new"]
    },
    {
        id: 30,
        name: "Erkek Polo Yaka Tişört",
        brand: "Essentials",
        category: "erkek",
        subcategory: "giyim",
        price: 449,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#2c3e50", "#c0392b", "#27ae60"],
        rating: 4.5,
        reviews: 567,
        badge: null,
        tags: ["bestseller"]
    },
    {
        id: 31,
        name: "Kadın Spor Ayakkabı",
        brand: "Essentials",
        category: "ayakkabi",
        subcategory: "spor",
        price: 1399,
        oldPrice: 1799,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#ffc0cb", "#1a1a1a"],
        rating: 4.7,
        reviews: 423,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 32,
        name: "Kol Saati",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "saat",
        price: 2499,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop",
        colors: ["#c9a962", "#ecf0f1"],
        rating: 4.9,
        reviews: 234,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 33,
        name: "Yün Şal",
        brand: "Essentials",
        category: "aksesuar",
        subcategory: "sal",
        price: 399,
        oldPrice: 549,
        image: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=600&h=800&fit=crop",
        colors: ["#c0392b", "#2c3e50", "#d4c4b0"],
        rating: 4.6,
        reviews: 145,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 34,
        name: "Bebek Tulumu",
        brand: "Home",
        category: "ev",
        subcategory: "bebek",
        price: 349,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=800&fit=crop",
        colors: ["#ffc0cb", "#87ceeb", "#ecf0f1"],
        rating: 4.9,
        reviews: 189,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 35,
        name: "Erkek Kot Pantolon",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "giyim",
        price: 999,
        oldPrice: 1299,
        image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop",
        colors: ["#5dade2", "#1a1a1a"],
        rating: 4.7,
        reviews: 678,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 36,
        name: "Kadın Maxi Elbise",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "giyim",
        price: 1599,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
        colors: ["#c0392b", "#1a1a1a", "#27ae60"],
        rating: 4.8,
        reviews: 234,
        badge: "new",
        tags: ["new"]
    },
    // 25 More Products
    {
        id: 37,
        name: "Kadın Blazer Ceket",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "giyim",
        price: 1899,
        oldPrice: 2399,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#ecf0f1", "#c0392b"],
        rating: 4.8,
        reviews: 189,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 38,
        name: "Erkek Bomber Ceket",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "giyim",
        price: 1699,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
        colors: ["#2c3e50", "#1a1a1a", "#27ae60"],
        rating: 4.7,
        reviews: 267,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 39,
        name: "Kadın Crop Top",
        brand: "Essentials",
        category: "kadin",
        subcategory: "giyim",
        price: 299,
        oldPrice: 399,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#1a1a1a", "#ffc0cb"],
        rating: 4.5,
        reviews: 456,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 40,
        name: "Erkek Keten Gömlek",
        brand: "Essentials",
        category: "erkek",
        subcategory: "giyim",
        price: 549,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#87ceeb", "#d4c4b0"],
        rating: 4.6,
        reviews: 334,
        badge: null,
        tags: ["bestseller"]
    },
    {
        id: 41,
        name: "Kadın Yüksek Bel Jean",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "giyim",
        price: 899,
        oldPrice: 1199,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
        colors: ["#5dade2", "#1a1a1a"],
        rating: 4.8,
        reviews: 567,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 42,
        name: "Erkek Koşu Ayakkabısı",
        brand: "Essentials",
        category: "ayakkabi",
        subcategory: "spor",
        price: 1299,
        oldPrice: 1599,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop",
        colors: ["#c0392b", "#1a1a1a", "#ecf0f1"],
        rating: 4.9,
        reviews: 789,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 43,
        name: "Kadın Sandalet",
        brand: "Luxe",
        category: "ayakkabi",
        subcategory: "sandalet",
        price: 799,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=800&fit=crop",
        colors: ["#c9a962", "#1a1a1a", "#c0392b"],
        rating: 4.6,
        reviews: 234,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 44,
        name: "Erkek Oxford Ayakkabı",
        brand: "Luxe",
        category: "ayakkabi",
        subcategory: "klasik",
        price: 1899,
        oldPrice: 2299,
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=800&fit=crop",
        colors: ["#8B4513", "#1a1a1a"],
        rating: 4.8,
        reviews: 178,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 45,
        name: "Sırt Çantası",
        brand: "Essentials",
        category: "aksesuar",
        subcategory: "canta",
        price: 699,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#2c3e50", "#8B4513"],
        rating: 4.7,
        reviews: 345,
        badge: "bestseller",
        tags: ["bestseller"]
    },
    {
        id: 46,
        name: "Kadın Clutch Çanta",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "canta",
        price: 1199,
        oldPrice: 1499,
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=800&fit=crop",
        colors: ["#c9a962", "#1a1a1a", "#c0392b"],
        rating: 4.9,
        reviews: 156,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 47,
        name: "Güneş Gözlüğü Aviator",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "gozluk",
        price: 799,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=800&fit=crop",
        colors: ["#c9a962", "#7f8c8d"],
        rating: 4.7,
        reviews: 289,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 48,
        name: "Bileklik Seti",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "taki",
        price: 349,
        oldPrice: 449,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop",
        colors: ["#c9a962", "#ecf0f1"],
        rating: 4.5,
        reviews: 423,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 49,
        name: "Kadın Küpe Seti",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "taki",
        price: 449,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",
        colors: ["#c9a962", "#ecf0f1"],
        rating: 4.8,
        reviews: 312,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 50,
        name: "Pamuklu Çorap Seti",
        brand: "Essentials",
        category: "aksesuar",
        subcategory: "corap",
        price: 149,
        oldPrice: 199,
        image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#ecf0f1", "#2c3e50"],
        rating: 4.6,
        reviews: 678,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 51,
        name: "Yastık Kılıfı Seti",
        brand: "Home",
        category: "ev",
        subcategory: "tekstil",
        price: 399,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#d4c4b0", "#2c3e50"],
        rating: 4.7,
        reviews: 234,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 52,
        name: "Dekoratif Sepet",
        brand: "Home",
        category: "ev",
        subcategory: "dekorasyon",
        price: 299,
        oldPrice: 399,
        image: "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?w=600&h=800&fit=crop",
        colors: ["#d4c4b0", "#8B4513"],
        rating: 4.5,
        reviews: 145,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 53,
        name: "Masa Lambası",
        brand: "Home",
        category: "ev",
        subcategory: "aydinlatma",
        price: 599,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
        colors: ["#c9a962", "#1a1a1a"],
        rating: 4.8,
        reviews: 189,
        badge: "bestseller",
        tags: ["bestseller"]
    },
    {
        id: 54,
        name: "Battaniye",
        brand: "Home",
        category: "ev",
        subcategory: "tekstil",
        price: 699,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#d4c4b0", "#7f8c8d"],
        rating: 4.9,
        reviews: 456,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 55,
        name: "Erkek Kemer",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "kemer",
        price: 449,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.6,
        reviews: 234,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 56,
        name: "Kadın Yelek",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "giyim",
        price: 799,
        oldPrice: 999,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
        colors: ["#d4c4b0", "#1a1a1a", "#c0392b"],
        rating: 4.7,
        reviews: 178,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 57,
        name: "Erkek Şort",
        brand: "Essentials",
        category: "erkek",
        subcategory: "giyim",
        price: 399,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop",
        colors: ["#2c3e50", "#1a1a1a", "#d4c4b0"],
        rating: 4.5,
        reviews: 567,
        badge: null,
        tags: ["bestseller"]
    },
    {
        id: 58,
        name: "Kadın Mayo",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "mayo",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1570976447640-ac859083963f?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#c0392b", "#27ae60"],
        rating: 4.6,
        reviews: 234,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 59,
        name: "Erkek Yüzme Şortu",
        brand: "Essentials",
        category: "erkek",
        subcategory: "mayo",
        price: 349,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=800&fit=crop",
        colors: ["#2c3e50", "#c0392b", "#27ae60"],
        rating: 4.4,
        reviews: 345,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 60,
        name: "Spor Çanta",
        brand: "Essentials",
        category: "aksesuar",
        subcategory: "canta",
        price: 599,
        oldPrice: 749,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#2c3e50"],
        rating: 4.7,
        reviews: 456,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 61,
        name: "Parfüm",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "parfum",
        price: 1499,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=800&fit=crop",
        colors: [],
        rating: 4.9,
        reviews: 567,
        badge: "bestseller",
        tags: ["bestseller"]
    },
    // Products for missing categories
    {
        id: 62,
        name: "Kadın Topuklu Sandalet",
        brand: "Luxe",
        category: "ayakkabi",
        subcategory: "topuklu",
        price: 1299,
        oldPrice: 1599,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#c0392b", "#c9a962"],
        rating: 4.7,
        reviews: 234,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 63,
        name: "Platform Topuklu Ayakkabı",
        brand: "StyleStore",
        category: "ayakkabi",
        subcategory: "topuklu",
        price: 1499,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#ecf0f1"],
        rating: 4.6,
        reviews: 167,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 64,
        name: "Kadın Deri Bot",
        brand: "StyleStore",
        category: "ayakkabi",
        subcategory: "bot",
        price: 1899,
        oldPrice: 2299,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.8,
        reviews: 289,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 65,
        name: "Erkek Deri Bot",
        brand: "Luxe",
        category: "ayakkabi",
        subcategory: "bot",
        price: 2199,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.9,
        reviews: 178,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 66,
        name: "Kadın Sandalet Terlik",
        brand: "Essentials",
        category: "ayakkabi",
        subcategory: "sandalet",
        price: 499,
        oldPrice: 699,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=800&fit=crop",
        colors: ["#d4c4b0", "#1a1a1a", "#c0392b"],
        rating: 4.5,
        reviews: 345,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 67,
        name: "Erkek Sandalet",
        brand: "Essentials",
        category: "ayakkabi",
        subcategory: "sandalet",
        price: 599,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&h=800&fit=crop",
        colors: ["#8B4513", "#1a1a1a"],
        rating: 4.4,
        reviews: 156,
        badge: null,
        tags: ["bestseller"]
    },
    {
        id: 68,
        name: "Kadın Hasır Şapka",
        brand: "Essentials",
        category: "aksesuar",
        subcategory: "sapka",
        price: 299,
        oldPrice: 399,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=800&fit=crop",
        colors: ["#d4c4b0", "#8B4513"],
        rating: 4.6,
        reviews: 234,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 69,
        name: "Erkek Şapka",
        brand: "StyleStore",
        category: "aksesuar",
        subcategory: "sapka",
        price: 349,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#2c3e50", "#8B4513"],
        rating: 4.5,
        reviews: 189,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 70,
        name: "Kadın Eşarp",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "atki",
        price: 499,
        oldPrice: 699,
        image: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=600&h=800&fit=crop",
        colors: ["#c0392b", "#2c3e50", "#d4c4b0"],
        rating: 4.8,
        reviews: 267,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 71,
        name: "İpek Eşarp",
        brand: "Luxe",
        category: "aksesuar",
        subcategory: "atki",
        price: 799,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=800&fit=crop",
        colors: ["#ffc0cb", "#87ceeb", "#c9a962"],
        rating: 4.9,
        reviews: 145,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 72,
        name: "Dekoratif Vazo",
        brand: "Home",
        category: "ev",
        subcategory: "dekorasyon",
        price: 399,
        oldPrice: 549,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#d4c4b0"],
        rating: 4.7,
        reviews: 123,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 73,
        name: "Cam Vazo Seti",
        brand: "Home",
        category: "ev",
        subcategory: "dekorasyon",
        price: 599,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#87ceeb"],
        rating: 4.6,
        reviews: 89,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 74,
        name: "Kadife Battaniye",
        brand: "Home",
        category: "ev",
        subcategory: "tekstil",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop",
        colors: ["#7f8c8d", "#d4c4b0", "#2c3e50"],
        rating: 4.8,
        reviews: 234,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 75,
        name: "Lüks Perde Takımı",
        brand: "Home",
        category: "ev",
        subcategory: "tekstil",
        price: 1299,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#d4c4b0", "#1a1a1a"],
        rating: 4.7,
        reviews: 156,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 76,
        name: "Kokulu Mum",
        brand: "Home",
        category: "ev",
        subcategory: "dekorasyon",
        price: 199,
        oldPrice: 299,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=800&fit=crop",
        colors: [],
        rating: 4.9,
        reviews: 567,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    // ERKEK GİYİM - Gömlekler, T-Shirtler, Pantolonlar, Ceketler
    {
        id: 77,
        name: "Erkek Klasik Gömlek",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "gomlek",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#87ceeb", "#2c3e50"],
        rating: 4.7,
        reviews: 345,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 78,
        name: "Erkek Slim Fit Gömlek",
        brand: "Essentials",
        category: "erkek",
        subcategory: "gomlek",
        price: 449,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#1a1a1a"],
        rating: 4.6,
        reviews: 234,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 79,
        name: "Erkek Basic T-Shirt",
        brand: "Essentials",
        category: "erkek",
        subcategory: "tisort",
        price: 199,
        oldPrice: 299,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#1a1a1a", "#2c3e50", "#c0392b"],
        rating: 4.8,
        reviews: 567,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 80,
        name: "Erkek Oversize T-Shirt",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "tisort",
        price: 349,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#ecf0f1", "#7f8c8d"],
        rating: 4.5,
        reviews: 289,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 81,
        name: "Erkek Chino Pantolon",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "pantolon",
        price: 699,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
        colors: ["#d4c4b0", "#1a1a1a", "#2c3e50"],
        rating: 4.7,
        reviews: 423,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 82,
        name: "Erkek Deri Ceket",
        brand: "Luxe",
        category: "erkek",
        subcategory: "ceket",
        price: 2499,
        oldPrice: 2999,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.9,
        reviews: 178,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 83,
        name: "Erkek Blazer Ceket",
        brand: "StyleStore",
        category: "erkek",
        subcategory: "ceket",
        price: 1899,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
        colors: ["#2c3e50", "#1a1a1a"],
        rating: 4.8,
        reviews: 234,
        badge: "new",
        tags: ["new"]
    },
    // KADIN GİYİM - Bluzlar, Elbiseler, Pantolonlar
    {
        id: 84,
        name: "Kadın Saten Bluz",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "bluz",
        price: 549,
        oldPrice: 699,
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#c0392b", "#1a1a1a"],
        rating: 4.7,
        reviews: 312,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 85,
        name: "Kadın Mini Elbise",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "elbise",
        price: 1299,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
        colors: ["#27ae60", "#c0392b", "#1a1a1a"],
        rating: 4.8,
        reviews: 256,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 86,
        name: "Kadın Palazzo Pantolon",
        brand: "Essentials",
        category: "kadin",
        subcategory: "pantolon",
        price: 799,
        oldPrice: 999,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#d4c4b0", "#2c3e50"],
        rating: 4.6,
        reviews: 189,
        badge: "sale",
        tags: ["sale"]
    },
    // Eksik kategoriler için ürünler
    {
        id: 87,
        name: "Kadın Pileli Etek",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "etek",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0edd6?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#2c3e50", "#c0392b"],
        rating: 4.7,
        reviews: 234,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 88,
        name: "Kadın Mini Etek",
        brand: "Essentials",
        category: "kadin",
        subcategory: "etek",
        price: 499,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
        colors: ["#d4c4b0", "#1a1a1a"],
        rating: 4.6,
        reviews: 178,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 89,
        name: "Kadın Blazer Ceket",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "ceket",
        price: 1699,
        oldPrice: 2099,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#ecf0f1"],
        rating: 4.8,
        reviews: 289,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 90,
        name: "Kadın Deri Ceket",
        brand: "Luxe",
        category: "kadin",
        subcategory: "ceket",
        price: 2299,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#8B4513"],
        rating: 4.9,
        reviews: 156,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 91,
        name: "Kadın Maxi Elbise",
        brand: "StyleStore",
        category: "kadin",
        subcategory: "elbise",
        price: 1499,
        oldPrice: 1899,
        image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&h=800&fit=crop",
        colors: ["#27ae60", "#c0392b", "#1a1a1a"],
        rating: 4.8,
        reviews: 267,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 92,
        name: "Kadın Yüksek Bel Pantolon",
        brand: "Essentials",
        category: "kadin",
        subcategory: "pantolon",
        price: 699,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
        colors: ["#1a1a1a", "#5dade2", "#d4c4b0"],
        rating: 4.7,
        reviews: 345,
        badge: "new",
        tags: ["new", "bestseller"]
    },
    // Ev Tekstil - Yastıklar, Battaniyeler, Perdeler
    {
        id: 93,
        name: "Kadife Kırlent",
        brand: "Home",
        category: "ev",
        subcategory: "yastik",
        price: 249,
        oldPrice: 349,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=800&fit=crop",
        colors: ["#c0392b", "#2c3e50", "#27ae60", "#c9a962"],
        rating: 4.7,
        reviews: 234,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 94,
        name: "Dekoratif Yastık Seti",
        brand: "Home",
        category: "ev",
        subcategory: "yastik",
        price: 399,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#d4c4b0", "#7f8c8d"],
        rating: 4.8,
        reviews: 189,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 95,
        name: "Polar Battaniye",
        brand: "Home",
        category: "ev",
        subcategory: "battaniye",
        price: 449,
        oldPrice: 599,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop",
        colors: ["#7f8c8d", "#d4c4b0", "#2c3e50"],
        rating: 4.9,
        reviews: 456,
        badge: "sale",
        tags: ["sale", "bestseller"]
    },
    {
        id: 96,
        name: "Pamuklu Battaniye",
        brand: "Essentials",
        category: "ev",
        subcategory: "battaniye",
        price: 549,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#c9a962", "#1a1a1a"],
        rating: 4.6,
        reviews: 178,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 97,
        name: "Tül Perde",
        brand: "Home",
        category: "ev",
        subcategory: "perde",
        price: 699,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#d4c4b0"],
        rating: 4.7,
        reviews: 234,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 98,
        name: "Kadife Perde Takımı",
        brand: "Luxe",
        category: "ev",
        subcategory: "perde",
        price: 1299,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop",
        colors: ["#2c3e50", "#8B4513", "#1a1a1a"],
        rating: 4.8,
        reviews: 145,
        badge: "new",
        tags: ["new"]
    },
    // Dekorasyon - Mumlar, Vazolar, Tablolar, Aynalar
    {
        id: 99,
        name: "Aromaterapi Mum",
        brand: "Home",
        category: "ev",
        subcategory: "mum",
        price: 199,
        oldPrice: 299,
        image: "https://images.unsplash.com/photo-1602607550828-8814540fb72c?w=600&h=800&fit=crop",
        colors: [],
        rating: 4.8,
        reviews: 234,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 100,
        name: "Cam Vazo",
        brand: "Home",
        category: "ev",
        subcategory: "vazo",
        price: 349,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=800&fit=crop",
        colors: ["#ecf0f1", "#87ceeb"],
        rating: 4.6,
        reviews: 145,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 101,
        name: "Modern Duvar Tablosu",
        brand: "Home",
        category: "ev",
        subcategory: "tablo",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=800&fit=crop",
        colors: [],
        rating: 4.7,
        reviews: 167,
        badge: "sale",
        tags: ["sale"]
    },
    {
        id: 102,
        name: "Soyut Sanat Tablosu",
        brand: "Luxe",
        category: "ev",
        subcategory: "tablo",
        price: 899,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
        colors: [],
        rating: 4.9,
        reviews: 89,
        badge: "new",
        tags: ["new"]
    },
    {
        id: 103,
        name: "Yuvarlak Duvar Aynası",
        brand: "Home",
        category: "ev",
        subcategory: "ayna",
        price: 799,
        oldPrice: 999,
        image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=800&fit=crop",
        colors: ["#c9a962", "#1a1a1a"],
        rating: 4.8,
        reviews: 178,
        badge: "sale",
        tags: ["sale"]
    }
];

// ================================
// State
// ================================
let cart = [];
let wishlist = [];
let currentSlide = 0;
let currentTab = 'new';

// ================================
// DOM Elements
// ================================
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const subtotalAmount = document.getElementById('subtotalAmount');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastIcon = document.getElementById('toastIcon');
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const newsletterForm = document.getElementById('newsletterForm');
const tabBtns = document.querySelectorAll('.tab-btn');
const quickViewOverlay = document.getElementById('quickViewOverlay');
const quickViewContent = document.getElementById('quickViewContent');
const modalClose = document.getElementById('modalClose');
const continueShopping = document.getElementById('continueShopping');

// Slider elements
const slides = document.querySelectorAll('.slide');
const sliderDots = document.querySelectorAll('.slider-dot');
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');

// ================================
// Initialize
// ================================
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadWishlist();
    renderProducts(getFilteredProducts('new'));
    initEventListeners();
    startSlider();
});

// ================================
// Get Filtered Products
// ================================
function getFilteredProducts(tab) {
    switch (tab) {
        case 'new':
            return products.filter(p => p.tags.includes('new') || p.badge === 'new').slice(0, 8);
        case 'bestseller':
            return products.filter(p => p.tags.includes('bestseller') || p.badge === 'bestseller').slice(0, 8);
        case 'sale':
            return products.filter(p => p.oldPrice !== null).slice(0, 8);
        default:
            return products.slice(0, 8);
    }
}

// ================================
// Render Products
// ================================
function renderProducts(productsToRender) {
    productsGrid.innerHTML = productsToRender.map(product => {
        const isInWishlist = wishlist.some(item => item.id === product.id);
        const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

        return `
    <div class="product-card" data-id="${product.id}" onclick="handleProductClick(event, ${product.id})" style="cursor: pointer;">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        
        <div class="product-badges">
          ${product.badge === 'sale' ? `<span class="product-badge sale">-%${discount}</span>` : ''}
          ${product.badge === 'new' ? '<span class="product-badge new">Yeni</span>' : ''}
          ${product.badge === 'bestseller' ? '<span class="product-badge bestseller">Çok Satan</span>' : ''}
        </div>
        
        <div class="product-actions">
          <button class="action-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Favorilere Ekle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isInWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button class="action-btn" onclick="openQuickView(${product.id})" title="Hızlı Bakış">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
        
        <div class="quick-add">
          <button class="quick-add-btn" onclick="addToCart(${product.id})">Sepete Ekle</button>
        </div>
      </div>
      
      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-name"><a href="#">${product.name}</a></h3>
        ${product.colors.length > 0 ? `
        <div class="product-colors">
          ${product.colors.slice(0, 4).map(color => `<span class="color-swatch" style="background: ${color}"></span>`).join('')}
        </div>
        ` : ''}
        <div class="product-price">
          <span class="current-price ${product.oldPrice ? 'sale-price' : ''}">₺${product.price.toLocaleString('tr-TR')}</span>
          ${product.oldPrice ? `<span class="old-price">₺${product.oldPrice.toLocaleString('tr-TR')}</span>` : ''}
        </div>
      </div>
    </div>
  `}).join('');
}

// ================================
// Cart Functions
// ================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} sepete eklendi`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = `
      <div class="cart-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p>Sepetiniz boş</p>
      </div>
    `;
    } else {
        cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
          <span class="cart-item-brand">${item.brand}</span>
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-variant">Beden: M</span>
          <p class="cart-item-price">₺${item.price.toLocaleString('tr-TR')}</p>
          <div class="cart-item-quantity">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `).join('');
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    subtotalAmount.textContent = `₺${subtotal.toLocaleString('tr-TR')}`;
}

function saveCart() {
    localStorage.setItem('stylestore-cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('stylestore-cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

// ================================
// Wishlist Functions
// ================================
const wishlistSidebar = document.getElementById('wishlistSidebar');
const wishlistOverlay = document.getElementById('wishlistOverlay');
const wishlistItemsEl = document.getElementById('wishlistItems');
const wishlistCloseBtn = document.getElementById('wishlistClose');
const wishlistBtnHeader = document.getElementById('wishlistBtn');

function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const index = wishlist.findIndex(item => item.id === productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`${product.name} favorilerden kaldırıldı`, 'info');
    } else {
        wishlist.push(product);
        showToast(`${product.name} favorilere eklendi`, 'success');
    }

    saveWishlist();
    updateWishlistUI();
    renderProducts(getFilteredProducts(currentTab));
}

function updateWishlistUI() {
    wishlistCount.textContent = wishlist.length;
    renderWishlistItems();
}

function renderWishlistItems() {
    if (wishlist.length === 0) {
        wishlistItemsEl.innerHTML = `
            <div class="wishlist-empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <p>Favorileriniz boş</p>
            </div>
        `;
    } else {
        wishlistItemsEl.innerHTML = wishlist.map(item => `
            <div class="wishlist-item">
                <img src="${item.image}" alt="${item.name}" class="wishlist-item-image">
                <div class="wishlist-item-info">
                    <span class="wishlist-item-brand">${item.brand}</span>
                    <h4 class="wishlist-item-name">${item.name}</h4>
                    <p class="wishlist-item-price">₺${item.price.toLocaleString('tr-TR')}</p>
                </div>
                <div class="wishlist-item-actions">
                    <button class="btn btn-primary" onclick="addToCart(${item.id}); removeFromWishlist(${item.id});">Sepete Ekle</button>
                    <button class="wishlist-item-remove" onclick="removeFromWishlist(${item.id})">✕</button>
                </div>
            </div>
        `).join('');
    }
}

function removeFromWishlist(productId) {
    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        saveWishlist();
        updateWishlistUI();
        renderProducts(getFilteredProducts(currentTab));
    }
}

function openWishlistSidebar() {
    wishlistSidebar.classList.add('active');
    wishlistOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderWishlistItems();
}

function closeWishlistSidebar() {
    wishlistSidebar.classList.remove('active');
    wishlistOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Wishlist event listeners
if (wishlistBtnHeader) {
    wishlistBtnHeader.addEventListener('click', openWishlistSidebar);
}
if (wishlistCloseBtn) {
    wishlistCloseBtn.addEventListener('click', closeWishlistSidebar);
}
if (wishlistOverlay) {
    wishlistOverlay.addEventListener('click', closeWishlistSidebar);
}

// Make removeFromWishlist global
window.removeFromWishlist = removeFromWishlist;

function saveWishlist() {
    localStorage.setItem('stylestore-wishlist', JSON.stringify(wishlist));
}

function loadWishlist() {
    const saved = localStorage.getItem('stylestore-wishlist');
    if (saved) {
        wishlist = JSON.parse(saved);
        updateWishlistUI();
    }
}

// ================================
// Quick View
// ================================
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    quickViewContent.innerHTML = `
    <div class="quick-view-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="quick-view-info">
      <span class="quick-view-brand">${product.brand}</span>
      <h2 class="quick-view-title">${product.name}</h2>
      <div class="quick-view-price">
        <span class="${product.oldPrice ? 'sale-price' : ''}">₺${product.price.toLocaleString('tr-TR')}</span>
        ${product.oldPrice ? `<span class="old-price" style="margin-left: 12px; font-size: 18px;">₺${product.oldPrice.toLocaleString('tr-TR')}</span>` : ''}
      </div>
      <p class="quick-view-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      ${product.colors.length > 0 ? `
      <div style="margin-bottom: 24px;">
        <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px;">Renk</label>
        <div class="product-colors" style="margin: 0;">
          ${product.colors.map(color => `<span class="color-swatch" style="background: ${color}; width: 24px; height: 24px;"></span>`).join('')}
        </div>
      </div>
      ` : ''}
      <div style="margin-bottom: 24px;">
        <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px;">Beden</label>
        <div style="display: flex; gap: 8px;">
          ${['XS', 'S', 'M', 'L', 'XL'].map((size, i) => `
            <button style="width: 44px; height: 44px; border: 1px solid ${i === 2 ? '#1a1a1a' : '#e5e5e5'}; background: ${i === 2 ? '#1a1a1a' : '#fff'}; color: ${i === 2 ? '#fff' : '#1a1a1a'}; cursor: pointer;">${size}</button>
          `).join('')}
        </div>
      </div>
      <button class="btn btn-primary btn-full" onclick="addToCart(${product.id}); closeQuickView();">Sepete Ekle</button>
    </div>
  `;

    quickViewOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    quickViewOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// Cart Sidebar Toggle
// ================================
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// Search Toggle
// ================================
function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.focus();
}

function closeSearch() {
    searchOverlay.classList.remove('active');
}

// ================================
// Toast Notification
// ================================
function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toastIcon.textContent = type === 'success' ? '✓' : 'ℹ';
    toastIcon.style.background = type === 'success' ? '#2e7d32' : '#5c5c5c';
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function hideToast() {
    toast.classList.remove('show');
}

// ================================
// Slider Functions
// ================================
function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    sliderDots[currentSlide].classList.remove('active');

    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add('active');
    sliderDots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startSlider() {
    setInterval(nextSlide, 6000);
}

// ================================
// Event Listeners
// ================================
function initEventListeners() {
    // Cart toggle
    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    continueShopping.addEventListener('click', (e) => {
        e.preventDefault();
        closeCart();
    });

    // Search toggle
    searchToggle.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);

    // Quick View
    modalClose.addEventListener('click', closeQuickView);
    quickViewOverlay.addEventListener('click', (e) => {
        if (e.target === quickViewOverlay) closeQuickView();
    });

    // Tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab;
            renderProducts(getFilteredProducts(currentTab));
        });
    });

    // Slider
    sliderPrev.addEventListener('click', prevSlide);
    sliderNext.addEventListener('click', nextSlide);
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Search
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length > 2) {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.brand.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
            renderProducts(filtered.slice(0, 8));
        } else if (query.length === 0) {
            renderProducts(getFilteredProducts(currentTab));
        }
    });

    // Trending tags
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            searchInput.value = tag.textContent;
            searchInput.dispatchEvent(new Event('input'));
        });
    });

    // Newsletter form
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Bültene başarıyla kaydoldunuz! İlk siparişinize %15 indirim kodunuz e-posta ile gönderildi.', 'success');
        newsletterForm.reset();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeSearch();
            closeQuickView();
        }
    });

    // Category cards click
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            const filtered = products.filter(p => p.category === category);
            renderProducts(filtered.slice(0, 8));
            tabBtns.forEach(b => b.classList.remove('active'));
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Make functions global for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleWishlist = toggleWishlist;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.hideToast = hideToast;

// ================================
// AI Chatbot Functions
// ================================
const chatWidget = document.getElementById('chatWidget');
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInputField = document.getElementById('chatInput');
const chatMinimize = document.getElementById('chatMinimize');

// Chat toggle
chatToggle.addEventListener('click', () => {
    chatWidget.classList.toggle('active');
    if (chatWidget.classList.contains('active')) {
        chatInputField.focus();
    }
});

chatMinimize.addEventListener('click', () => {
    chatWidget.classList.remove('active');
});

// Quick replies
document.querySelectorAll('.quick-reply').forEach(btn => {
    btn.addEventListener('click', () => {
        const message = btn.dataset.message;
        handleUserMessage(message);
    });
});

// Chat form submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInputField.value.trim();
    if (message) {
        handleUserMessage(message);
        chatInputField.value = '';
    }
});

// Handle user message
function handleUserMessage(message) {
    // Add user message
    addChatMessage(message, 'user');

    // Show typing indicator
    showTypingIndicator();

    // Process message and respond
    setTimeout(() => {
        removeTypingIndicator();
        const response = getAIResponse(message);
        addChatMessage(response.text, 'bot', response.products);
    }, 1000 + Math.random() * 1000);
}

// Add message to chat
function addChatMessage(text, type, productsToShow = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;

    const avatar = type === 'bot' ? '🤖' : '👤';

    let productHTML = '';
    if (productsToShow && productsToShow.length > 0) {
        productHTML = productsToShow.map(p => `
            <div class="chat-product" onclick="goToProduct(${p.id})">
                <img src="${p.image}" alt="${p.name}" class="chat-product-image">
                <div class="chat-product-info">
                    <div class="chat-product-name">${p.name}</div>
                    <div class="chat-product-price">₺${p.price.toLocaleString('tr-TR')}</div>
                    <button class="chat-product-btn" onclick="event.stopPropagation(); addToCart(${p.id});">Sepete Ekle</button>
                </div>
            </div>
        `).join('');
    }

    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${text}</p>
            ${productHTML}
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing-message';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingMsg = chatMessages.querySelector('.typing-message');
    if (typingMsg) typingMsg.remove();
}

// AI Response Logic
function getAIResponse(message) {
    // Türkçe karakter desteği için toLocaleLowerCase kullan
    const lowerMessage = message.toLocaleLowerCase('tr-TR');

    // Keyword mappings
    const keywords = {
        kazak: ['kazak', 'triko', 'örgü', 'hırka'],
        çanta: ['çanta', 'bag', 'omuz çantası'],
        ayakkabı: ['ayakkabı', 'bot', 'sneaker', 'topuklu', 'loafer'],
        elbise: ['elbise', 'dress'],
        pantolon: ['pantolon', 'jean', 'chino'],
        indirim: ['indirim', 'indirimli', 'ucuz', 'fırsat', 'kampanya', 'sale', 'indirimli ürün', 'indirimdeki'],
        erkek: ['erkek', 'bay', 'man', 'men'],
        kadın: ['kadın', 'bayan', 'woman', 'women'],
        ev: ['ev', 'dekorasyon', 'mum', 'vazo', 'yastık'],
        aksesuar: ['aksesuar', 'takı', 'kolye', 'atkı', 'kemer', 'gözlük', 'bere'],
        yeni: ['yeni', 'yeni gelen', 'new'],
        populer: ['popüler', 'çok satan', 'best seller', 'en çok']
    };

    let matchedProducts = [];
    let responseText = '';

    // Check for greetings
    if (/merhaba|selam|hey|hi|hello/i.test(lowerMessage)) {
        return {
            text: 'Merhaba! 👋 Size nasıl yardımcı olabilirim? Aradığınız ürünü yazabilir veya kategorilere göz atabilirsiniz.',
            products: null
        };
    }

    // Check for thanks
    if (/teşekkür|sağol|eyvallah|thanks/i.test(lowerMessage)) {
        return {
            text: 'Rica ederim! 😊 Başka bir konuda yardımcı olabilir miyim?',
            products: null
        };
    }

    // Check for help
    if (/yardım|help|nasıl/i.test(lowerMessage)) {
        return {
            text: 'Size şu konularda yardımcı olabilirim:\n• Ürün araması yapabilirsiniz\n• Kategorilere göz atabilirsiniz\n• İndirimli ürünleri gösterebilirim\n• Sipariş ve kargo hakkında bilgi verebilirim',
            products: null
        };
    }

    // Check for sale/discount
    if (keywords.indirim.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p => p.oldPrice !== null).slice(0, 3);
        responseText = 'İşte en çok indirim yapılan ürünlerimiz! 🏷️';
    }
    // Check for categories
    else if (keywords.kazak.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p =>
            p.name.toLowerCase().includes('kazak') ||
            p.name.toLowerCase().includes('triko') ||
            p.name.toLowerCase().includes('hırka')
        ).slice(0, 3);
        responseText = 'Kazak ve triko modellerimiz burada! 🧥';
    }
    else if (keywords.çanta.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p =>
            p.subcategory === 'canta' || p.name.toLowerCase().includes('çanta')
        ).slice(0, 3);
        responseText = 'İşte çanta modellerimiz! 👜';
    }
    else if (keywords.ayakkabı.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p => p.category === 'ayakkabi').slice(0, 3);
        responseText = 'Ayakkabı koleksiyonumuzdan seçenekler! 👟';
    }
    else if (keywords.erkek.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p => p.category === 'erkek').slice(0, 3);
        responseText = 'Erkek koleksiyonundan önerilerim! 👔';
    }
    else if (keywords.kadın.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p => p.category === 'kadin').slice(0, 3);
        responseText = 'Kadın koleksiyonundan önerilerim! 👗';
    }
    else if (keywords.ev.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p => p.category === 'ev').slice(0, 3);
        responseText = 'Ev & Yaşam ürünlerimiz! 🏠';
    }
    else if (keywords.aksesuar.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p => p.category === 'aksesuar').slice(0, 3);
        responseText = 'Aksesuar çeşitlerimiz! ✨';
    }
    else if (keywords.yeni.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p => p.badge === 'new' || p.tags.includes('new')).slice(0, 3);
        responseText = 'Yeni gelen ürünlerimiz! 🆕';
    }
    else if (keywords.populer.some(k => lowerMessage.includes(k))) {
        matchedProducts = products.filter(p => p.badge === 'bestseller' || p.tags.includes('bestseller')).slice(0, 3);
        responseText = 'En çok satan ürünlerimiz! ⭐';
    }
    else {
        // General search
        matchedProducts = products.filter(p =>
            p.name.toLowerCase().includes(lowerMessage) ||
            p.brand.toLowerCase().includes(lowerMessage)
        ).slice(0, 3);

        if (matchedProducts.length > 0) {
            responseText = `"${message}" için bulduğum ürünler:`;
        } else {
            // Try to find any partial matches
            const words = lowerMessage.split(' ');
            for (const word of words) {
                if (word.length > 2) {
                    const partialMatch = products.filter(p =>
                        p.name.toLowerCase().includes(word) ||
                        p.category.includes(word)
                    ).slice(0, 3);
                    if (partialMatch.length > 0) {
                        matchedProducts = partialMatch;
                        responseText = `"${word}" ile ilgili ürünler buldum:`;
                        break;
                    }
                }
            }

            if (matchedProducts.length === 0) {
                return {
                    text: 'Maalesef aradığınız ürünü bulamadım. 🤔 Farklı bir anahtar kelime deneyebilir misiniz? Örneğin: kazak, çanta, ayakkabı, indirimli ürünler...',
                    products: null
                };
            }
        }
    }

    return {
        text: responseText,
        products: matchedProducts
    };
}

// Go to product - scroll to products and filter
function goToProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Filter to show only this product
    renderProducts([product]);

    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });

    // Close chat
    chatWidget.classList.remove('active');

    // Show toast
    showToast(`"${product.name}" ürününe yönlendiriliyorsunuz`, 'info');
}

// Make goToProduct global
window.goToProduct = goToProduct;

// ================================
// Product Detail Page Functions
// ================================
let currentProductId = null;
const productDetailPage = document.getElementById('productDetailPage');

// Category names
const categoryNames = {
    'kadin': 'Kadın',
    'erkek': 'Erkek',
    'aksesuar': 'Aksesuar',
    'ayakkabi': 'Ayakkabı',
    'ev': 'Ev & Yaşam'
};

// Product descriptions
const productDescriptions = {
    'giyim': 'Premium kalite kumaşlardan üretilmiş, şık ve rahat bir ürün. Günlük kullanım için ideal, her kombinle uyumlu. Yüksek kalite dikimi ile uzun ömürlü kullanım sağlar.',
    'canta': 'El yapımı, gerçek deri çanta. Zarif tasarımı ile her ortamda şıklığınızı tamamlar. Geniş iç hacmi ve pratik cepleri ile kullanışlı.',
    'taki': 'Özenle işlenmiş, kaliteli malzemelerden üretilmiş takı seti. Zarif tasarımı ile her gün ve özel günlerde kullanılabilir.',
    'bot': 'Dayanıklı ve konforlu tasarım. Kaliteli deri ve sağlam taban ile uzun yürüyüşlerde bile rahatlık sağlar.',
    'spor': 'Hafif ve esnek yapısı ile spor aktivitelerinde maksimum performans. Nefes alan malzemesi ile ayaklarınız terleme yapmaz.',
    'dekorasyon': 'Evinize şıklık katacak özel tasarım ürün. Modern ve minimalist tasarımı ile her dekorasyona uyum sağlar.',
    'default': 'Özenle seçilmiş premium kalite ürün. StyleStore güvencesiyle, yüksek kalite standartlarında üretilmiştir. Müşteri memnuniyeti garantilidir.'
};

// Open product detail page
function openProductPage(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProductId = productId;

    // Update URL
    window.location.hash = `product-${productId}`;

    // Update page content
    document.getElementById('productDetailImage').src = product.image;
    document.getElementById('productDetailImage').alt = product.name;
    document.getElementById('productDetailBrand').textContent = product.brand;
    document.getElementById('productDetailTitle').textContent = product.name;
    document.getElementById('productBreadcrumbName').textContent = product.name;
    document.getElementById('productCategoryLink').textContent = categoryNames[product.category] || product.category;

    // Rating
    const ratingStars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    document.querySelector('.product-detail-rating .stars').textContent = ratingStars;
    document.querySelector('.product-detail-rating .rating-count').textContent = `(${product.reviews} değerlendirme)`;

    // Price
    const priceElement = document.getElementById('productDetailPrice');
    priceElement.textContent = `₺${product.price.toLocaleString('tr-TR')}`;

    const oldPriceElement = document.getElementById('productDetailOldPrice');
    const discountElement = document.getElementById('productDetailDiscount');

    if (product.oldPrice) {
        priceElement.classList.add('sale');
        oldPriceElement.textContent = `₺${product.oldPrice.toLocaleString('tr-TR')}`;
        const discount = Math.round((1 - product.price / product.oldPrice) * 100);
        discountElement.textContent = `-%${discount}`;
    } else {
        priceElement.classList.remove('sale');
        oldPriceElement.textContent = '';
        discountElement.textContent = '';
    }

    // Badge
    const badgeElement = document.getElementById('productDetailBadge');
    badgeElement.className = 'product-detail-badge';
    if (product.badge) {
        badgeElement.classList.add(product.badge);
        if (product.badge === 'sale') {
            const discount = Math.round((1 - product.price / product.oldPrice) * 100);
            badgeElement.textContent = `-%${discount}`;
        } else if (product.badge === 'new') {
            badgeElement.textContent = 'Yeni';
        } else if (product.badge === 'bestseller') {
            badgeElement.textContent = 'Çok Satan';
        }
    }

    // Description
    const description = productDescriptions[product.subcategory] || productDescriptions['default'];
    document.getElementById('productDetailDescription').textContent = description;

    // Colors
    const colorContainer = document.getElementById('productDetailColors');
    const colorOptions = document.getElementById('colorOptions');
    if (product.colors && product.colors.length > 0) {
        colorContainer.style.display = 'block';
        colorOptions.innerHTML = product.colors.map((color, index) =>
            `<span class="color-swatch ${index === 0 ? 'active' : ''}" style="background: ${color}" onclick="selectColor(this)"></span>`
        ).join('');
    } else {
        colorContainer.style.display = 'none';
    }

    // Reset quantity
    document.getElementById('detailQuantity').value = 1;

    // Render reviews
    renderReviews(productId);

    // Show page
    productDetailPage.classList.add('active');
    document.body.classList.add('product-page-active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close product page and go home
function goHome() {
    window.location.hash = '';
    productDetailPage.classList.remove('active');
    document.body.classList.remove('product-page-active');
    currentProductId = null;
}

// Handle URL hash changes
function handleHashChange() {
    const hash = window.location.hash;

    if (hash.startsWith('#product-')) {
        const productId = parseInt(hash.replace('#product-', ''));
        if (productId) {
            openProductPage(productId);
        }
    } else {
        productDetailPage.classList.remove('active');
        document.body.classList.remove('product-page-active');
        currentProductId = null;
    }
}

// Listen for hash changes
window.addEventListener('hashchange', handleHashChange);

// Check hash on page load
window.addEventListener('load', handleHashChange);

// Change detail quantity
function changeDetailQty(change) {
    const input = document.getElementById('detailQuantity');
    let value = parseInt(input.value) || 1;
    value += change;
    if (value < 1) value = 1;
    input.value = value;
}

// Select color
function selectColor(element) {
    document.querySelectorAll('#colorOptions .color-swatch').forEach(s => s.classList.remove('active'));
    element.classList.add('active');
}

// Select size
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Add to cart from detail page
document.getElementById('addToCartDetailBtn').addEventListener('click', () => {
    if (!currentProductId) return;

    const quantity = parseInt(document.getElementById('detailQuantity').value) || 1;

    for (let i = 0; i < quantity; i++) {
        addToCart(currentProductId);
    }

    if (quantity > 1) {
        const product = products.find(p => p.id === currentProductId);
        showToast(`${quantity} adet "${product.name}" sepete eklendi`, 'success');
    }
});

// Add to wishlist from detail page
document.getElementById('addToWishlistDetailBtn').addEventListener('click', () => {
    if (!currentProductId) return;
    toggleWishlist(currentProductId);
});

// Product click handler
function handleProductClick(e, id) {
    // Don't trigger if clicked on buttons
    if (e.target.closest('.action-btn') || e.target.closest('.quick-add-btn') || e.target.closest('.product-actions')) {
        return;
    }
    openProductPage(id);
}

// ================================
// Reviews Functions
// ================================
const initialReviews = [
    { productId: 1, name: "Ayşe Y.", rating: 5, text: "Harika bir ürün, bayıldım! Kumaşı çok kaliteli.", date: "2 gün önce" },
    { productId: 1, name: "Mehmet K.", rating: 4, text: "Beden tam oldu, hızlı kargo.", date: "1 hafta önce" },
    { productId: 2, name: "Zeynep T.", rating: 5, text: "Rengi göründüğü gibi, çok şık.", date: "3 gün önce" },
    { productId: 1, name: "Ali V.", rating: 3, text: "Fiyatına göre normal, biraz ince.", date: "2 hafta önce" }
];

let reviews = JSON.parse(localStorage.getItem('stylestore-reviews')) || initialReviews;

function renderReviews(productId) {
    const productReviews = reviews.filter(r => r.productId === productId);
    const reviewsList = document.getElementById('reviewsList');

    if (productReviews.length === 0) {
        reviewsList.innerHTML = '<p class="no-reviews">Henüz yorum yapılmamış. İlk yorumu sen yap!</p>';
        return;
    }

    reviewsList.innerHTML = productReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="review-author">${review.name}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// Review Form Submit
document.getElementById('reviewForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentProductId) return;

    const name = document.getElementById('reviewName').value;
    const rating = parseInt(document.getElementById('reviewRating').value);
    const text = document.getElementById('reviewText').value;

    const newReview = {
        productId: currentProductId,
        name,
        rating,
        text,
        date: "Şimdi"
    };

    reviews.unshift(newReview);
    localStorage.setItem('stylestore-reviews', JSON.stringify(reviews));

    renderReviews(currentProductId);
    e.target.reset();
    showToast('Yorumunuz eklendi!', 'success');
});

// Make functions global
window.goHome = goHome;
window.changeDetailQty = changeDetailQty;
window.selectColor = selectColor;
window.openProductPage = openProductPage;
window.handleProductClick = handleProductClick;

// ================================
// Checkout Functions
// ================================
const checkoutOverlay = document.getElementById('checkoutOverlay');
const checkoutClose = document.getElementById('checkoutClose');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutItems = document.getElementById('checkoutItems');
const checkoutTotal = document.getElementById('checkoutTotal');

// Open checkout modal
function openCheckout() {
    if (cart.length === 0) {
        showToast('Sepetiniz boş!', 'error');
        return;
    }

    // Render cart items in checkout
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span class="checkout-item-name">${item.name} x${item.quantity}</span>
            <span class="checkout-item-price">₺${(item.price * item.quantity).toLocaleString('tr-TR')}</span>
        </div>
    `).join('');

    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = `₺${total.toLocaleString('tr-TR')}`;

    // Close cart sidebar and open checkout
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    checkoutOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close checkout modal
function closeCheckout() {
    checkoutOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
checkoutBtn.addEventListener('click', openCheckout);
checkoutClose.addEventListener('click', closeCheckout);
checkoutOverlay.addEventListener('click', (e) => {
    if (e.target === checkoutOverlay) closeCheckout();
});

// Format card number
document.getElementById('cardNumber').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formatted;
});

// Format expiry date
document.getElementById('cardExpiry').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    e.target.value = value;
});

// Checkout form submit
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate order processing
    const submitBtn = checkoutForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>İşleniyor...</span>';

    setTimeout(() => {
        // Clear cart
        cart = [];
        saveCart();
        updateCartUI();

        // Close modal and show success
        closeCheckout();
        showToast('Siparişiniz başarıyla alındı! 🎉', 'success');

        // Reset form
        checkoutForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Siparişi Tamamla
        `;
    }, 2000);
});

// ================================
// Auth & User Functions
// ================================
const authOverlay = document.getElementById('authOverlay');
const authClose = document.getElementById('authClose');
const loginFormEl = document.getElementById('loginForm');
const registerFormEl = document.getElementById('registerForm');
const userMenu = document.getElementById('userMenu');
const adminPanel = document.getElementById('adminPanel');

// Default admin user
const adminUser = {
    email: 'admin@stylestore.com',
    password: 'admin123',
    name: 'Admin',
    role: 'admin'
};

// Get users from localStorage
let users = JSON.parse(localStorage.getItem('stylestore-users')) || [];
let currentUser = JSON.parse(localStorage.getItem('stylestore-currentUser')) || null;
let orders = JSON.parse(localStorage.getItem('stylestore-orders')) || [];

// Initialize auth state
function initAuth() {
    updateAuthUI();
}

// Update UI based on auth state
function updateAuthUI() {
    const userBtn = document.querySelector('.icon-btn[id="userBtn"], button[onclick*="user"]') || document.querySelectorAll('.icon-btn')[0];

    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        if (currentUser.role === 'admin') {
            document.getElementById('adminPanelBtn').style.display = 'block';
        }
    }
}

// Open auth modal
function openAuthModal() {
    if (currentUser) {
        toggleUserMenu();
    } else {
        authOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close auth modal
function closeAuthModal() {
    authOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle user menu
function toggleUserMenu() {
    if (currentUser) {
        userMenu.classList.toggle('active');
    }
}

// Show login form
function showLogin() {
    loginFormEl.style.display = 'block';
    registerFormEl.style.display = 'none';
}

// Show register form
function showRegister() {
    loginFormEl.style.display = 'none';
    registerFormEl.style.display = 'block';
}

// Login
document.getElementById('loginFormSubmit').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.toLowerCase();
    const password = document.getElementById('loginPassword').value;

    // Check admin
    if (email === adminUser.email && password === adminUser.password) {
        currentUser = { ...adminUser };
        localStorage.setItem('stylestore-currentUser', JSON.stringify(currentUser));
        closeAuthModal();
        updateAuthUI();
        showToast('Hoş geldiniz, Admin!', 'success');
        e.target.reset();
        return;
    }

    // Check users
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('stylestore-currentUser', JSON.stringify(currentUser));
        closeAuthModal();
        updateAuthUI();
        showToast(`Hoş geldiniz, ${user.name}!`, 'success');
        e.target.reset();
    } else {
        showToast('E-posta veya şifre hatalı!', 'error');
    }
});

// Register
document.getElementById('registerFormSubmit').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value.toLowerCase();
    const password = document.getElementById('registerPassword').value;

    // Check if email exists
    if (users.find(u => u.email === email) || email === adminUser.email) {
        showToast('Bu e-posta zaten kayıtlı!', 'error');
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        role: 'user',
        createdAt: new Date().toLocaleDateString('tr-TR')
    };

    users.push(newUser);
    localStorage.setItem('stylestore-users', JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem('stylestore-currentUser', JSON.stringify(currentUser));

    closeAuthModal();
    updateAuthUI();
    showToast('Hesabınız oluşturuldu!', 'success');
    e.target.reset();
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    currentUser = null;
    localStorage.removeItem('stylestore-currentUser');
    userMenu.classList.remove('active');
    updateAuthUI();
    showToast('Çıkış yapıldı', 'info');
});

// Admin panel
document.getElementById('adminPanelBtn').addEventListener('click', (e) => {
    e.preventDefault();
    if (currentUser && currentUser.role === 'admin') {
        openAdminPanel();
    }
});

function openAdminPanel() {
    userMenu.classList.remove('active');
    adminPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderAdminData();
}

function closeAdminPanel() {
    adminPanel.classList.remove('active');
    document.body.style.overflow = '';
}

function renderAdminData() {
    // Stats
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('totalOrders').textContent = orders.length;

    const revenue = orders.reduce((sum, o) => sum + o.total, 0);
    document.getElementById('totalRevenue').textContent = `₺${revenue.toLocaleString('tr-TR')}`;

    // Users table
    const usersTable = document.getElementById('usersTableBody');
    if (users.length === 0) {
        usersTable.innerHTML = '<tr><td colspan="4" class="empty-row">Henüz kayıtlı kullanıcı yok</td></tr>';
    } else {
        usersTable.innerHTML = users.map(u => `
            <tr>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.createdAt || '-'}</td>
                <td>${u.role === 'admin' ? '🔧 Admin' : '👤 Kullanıcı'}</td>
            </tr>
        `).join('');
    }
}

// Event listeners
authClose.addEventListener('click', closeAuthModal);
authOverlay.addEventListener('click', (e) => {
    if (e.target === authOverlay) closeAuthModal();
});

// User button click
const userBtn = document.getElementById('userBtn');
if (userBtn) {
    userBtn.addEventListener('click', openAuthModal);
}

// Close user menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-menu') && !e.target.closest('.icon-btn')) {
        userMenu.classList.remove('active');
    }
});

// Initialize
initAuth();

// Make functions global
window.showLogin = showLogin;
window.showRegister = showRegister;
window.closeAdminPanel = closeAdminPanel;
window.openAuthModal = openAuthModal;

// ================================
// Category Filter Functions
// ================================
function filterByCategory(category, subcategory = null) {
    let filtered;

    if (subcategory) {
        filtered = products.filter(p => p.category === category && p.subcategory === subcategory);
    } else {
        filtered = products.filter(p => p.category === category);
    }

    // If no products found with subcategory, try just category
    if (filtered.length === 0 && subcategory) {
        filtered = products.filter(p => p.category === category);
    }

    // If still no products, show all
    if (filtered.length === 0) {
        filtered = products;
        showToast('Bu kategoride ürün bulunamadı, tüm ürünler gösteriliyor', 'info');
    }

    renderProducts(filtered);

    // Update section title
    const categoryNames = {
        'kadin': 'Kadın',
        'erkek': 'Erkek',
        'aksesuar': 'Aksesuar',
        'ayakkabi': 'Ayakkabı',
        'ev': 'Ev & Yaşam'
    };

    const sectionTitle = document.querySelector('.products-header .section-title');
    if (sectionTitle) {
        sectionTitle.textContent = categoryNames[category] || 'Ürünler';
    }

    // Scroll to products section
    setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);

    // Show toast
    showToast(`${categoryNames[category] || category} kategorisi gösteriliyor`, 'success');
}

function filterByTag(tag) {
    const filtered = products.filter(p => p.tags && p.tags.includes(tag));

    if (filtered.length === 0) {
        renderProducts(products);
        showToast('Bu etikette ürün bulunamadı', 'info');
        return;
    }

    renderProducts(filtered);

    const tagNames = {
        'new': 'Yeni Koleksiyon',
        'sale': 'İndirimli Ürünler',
        'bestseller': 'Çok Satanlar'
    };

    const sectionTitle = document.querySelector('.products-header .section-title');
    if (sectionTitle) {
        sectionTitle.textContent = tagNames[tag] || 'Ürünler';
    }

    // Scroll to products section
    setTimeout(() => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);

    // Show toast
    showToast(`${tagNames[tag] || tag} gösteriliyor`, 'success');
}

function showAllProducts() {
    renderProducts(products);
    const sectionTitle = document.querySelector('.products-header .section-title');
    if (sectionTitle) {
        sectionTitle.textContent = 'Tüm Ürünler';
    }
}

// Make filter functions global
window.filterByCategory = filterByCategory;
window.filterByTag = filterByTag;
window.showAllProducts = showAllProducts;
