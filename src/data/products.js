// ================================================================
//  بيانات القائمة (المنيو) — src/data/products.js
// ================================================================
//  هذا هو المكان الوحيد الذي تُعدّل فيه محتوى الموقع.
//
//  كيف تعدّل منتجاً؟
//  ------------------
//  1. ابحث عن المنتج داخل الفئة المناسبة في مصفوفة `categories` أدناه.
//  2. غيّر الاسم أو الوصف أو السعر مباشرةً.
//  3. لاستخدام صورة خاصة بك بدلاً من الصورة الجاهزة:
//       أ) ضع ملف الصورة داخل مجلد  /public/images/
//       ب) غيّر حقل image إلى المسار الجديد، مثال:  "/images/oreo.jpg"
//
//  كيف تضيف منتجاً جديداً؟
//  -------------------------
//  انسخ أي كائن منتج والصقه داخل مصفوفة products الخاصة بالفئة المطلوبة،
//  وتأكد أن كل منتج له id فريد داخل الملف بالكامل.
//
//  ملاحظة عن الصور: صور الميلك شيك كلها صور خاصة موجودة في
//  /public/images/MILKSAHKE/. صور زاوية القهوة موجودة في
//  /public/images/coffee/.
// ================================================================

// ── معلومات المتجر (تظهر في الهيدر والفوتر) ─────────────────────
export const STORE_INFO = {
  name:         "على الماشي",
  tagline:      "ألذ المشروبات والمخبوزات... على الماشي",
  address:      "الشارع الرئيسي، مدينتك",        // ← عدّل العنوان الحقيقي هنا
  phone:        "+972 50-123-4567",                // ← رقم هاتف تجريبي
  openingHours: "يومياً من ٩:٠٠ صباحاً حتى ١١:٠٠ مساءً",
}

// ── فئات القائمة ─────────────────────────────────────────────────
export const categories = [

  // ─────────────────────────────────────────────────────────────
  //  الفئة الأولى — الميلك شيك
  // ─────────────────────────────────────────────────────────────
  {
    id:       "milkshakes",
    label:    "الميلك شيك",
    icon:     "🥤",
    subtitle: "كل الأصناف بسعر موحّد 25 ₪",
    products: [
      {
        id:          1,
        name:        "أوريو",
        description: "ميلك شيك غني بطعم الأوريو الكلاسيكي مع قطع بسكويت مطحونة وكريمة فوق سائلة.",
        price:       "25 ₪",
        image: "/images/MILKSAHKE/oreo.jpg",
        alt:   "ميلك شيك أوريو",
      },
      {
        id:          2,
        name:        "لوتس",
        description: "ميلك شيك بطعم بسكويت لوتس الكراميلي، مع صوص لوتس وقطع بسكويت مقرمشة.",
        price:       "25 ₪",
        image: "/images/MILKSAHKE/latos.jpg",
        alt:   "ميلك شيك لوتس",
      },
      {
        id:          3,
        name:        "فانيلا",
        description: "ميلك شيك كلاسيكي بنكهة الفانيلا الطبيعية الناعمة، بسيط وأصيل.",
        price:       "25 ₪",
        image: "/images/MILKSAHKE/vanel.jpg",
        alt:   "ميلك شيك فانيلا",
      },
      {
        id:          4,
        name:        "نوتيلا",
        description: "ميلك شيك بطعم نوتيلا الشوكولاتة والبندق الغني، مع صوص نوتيلا فوقه.",
        price:       "25 ₪",
        image: "/images/MILKSAHKE/nutella.jpg",
        alt:   "ميلك شيك نوتيلا",
      },
      {
        id:          5,
        name:        "كندر",
        description: "ميلك شيك بطعم شوكولاتة كندر الكريمية مع قطع شوكولاتة كندر الحقيقية.",
        price:       "25 ₪",
        image: "/images/MILKSAHKE/kinder1.jpg",
        alt:   "ميلك شيك كندر",
      },
      {
        id:          6,
        name:        "فستق حلبي",
        description: "ميلك شيك بطعم الفستق الحلبي الأصيل، مع رشة فستق مجروش على الوجه.",
        price:       "25 ₪",
        image: "/images/MILKSAHKE/pistachio.jpg",
        alt:   "ميلك شيك فستق حلبي",
      },
      {
        id:          7,
        name:        "توت",
        description: "ميلك شيك منعش بطعم التوت الطازج، مع لمسة حلاوة طبيعية مميزة.",
        price:       "25 ₪",
        image: "/images/MILKSAHKE/berry.jpg",
        alt:   "ميلك شيك توت",
      },
      {
        id:          8,
        name:        "توت موز",
        description: "مزيج منعش من التوت والموز الطازج في كوب ميلك شيك كريمي القوام.",
        price:       "25 ₪",
        image: "/images/MILKSAHKE/berry-banana.jpg",
        alt:   "ميلك شيك توت موز",
      },
      {
        id:          9,
        name:        "كراميل",
        description: "ميلك شيك غني بصوص الكراميل الذهبي الكريمي، حلاوة متوازنة في كل رشفة.",
        price:       "25 ₪",
        image: "/images/MILKSAHKE/caramel-milkshake.jpg",
        alt:   "ميلك شيك كراميل",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  الفئة الثانية — زاوية القهوة
  // ─────────────────────────────────────────────────────────────
  {
    id:       "coffee",
    label:    "زاوية القهوة | פינת הקפה",
    icon:     "☕",
    subtitle: "مشروبات ساخنة وباردة بتحضير فاخر | משקאות חמים וקרים בהכנה איכותית",
    // زاوية القهوة مقسّمة إلى مجموعتين فرعيتين (تبويب ساخن/بارد) بدل مصفوفة products مسطّحة.
    // ProductsSection.jsx يتحقق من وجود groups ويعرض تبويبات التبديل تلقائياً.
    groups: [
      {
        id:    "hot",
        label: "المشروبات الساخنة | משקאות חמים",
        icon:  "☕",
        products: [
          {
            id:          "espresso-short",
            name:        "إسبريسو قصير | אספרסו קצר",
            description: "",
            price:       "6 ₪",
            image: "/images/coffee/espresso-short.png",
            alt:   "كوب إسبريسو قصير من عَ الماشي",
          },
          {
            id:          "espresso-short-double",
            name:        "إسبريسو قصير دبل | אספרסו כפול קצר",
            description: "",
            price:       "10 ₪",
            image: "/images/coffee/espresso-short-double.png",
            alt:   "كوب إسبريسو قصير دبل من عَ الماشي",
          },
          {
            id:          "espresso-long",
            name:        "إسبريسو طويل | אספרסו ארוך",
            description: "",
            price:       "6 ₪",
            image: "/images/coffee/espresso-long.png",
            alt:   "كوب إسبريسو طويل من عَ الماشي",
          },
          {
            id:          "espresso-long-double",
            name:        "إسبريسو طويل دبل | אספרסו כפול ארוך",
            description: "",
            price:       "10 ₪",
            image: "/images/coffee/espresso-long-double.png",
            alt:   "كوب إسبريسو طويل دبل من عَ الماشي",
          },
          {
            id:          "hafuch-small",
            name:        "هافوخ صغير | הפוך קטן",
            description: "قهوة بالحليب مع رسمة قلب",
            price:       "12 ₪",
            image: "/images/coffee/hafuch-small.png",
            alt:   "كوب هافوخ صغير مع رسمة قلب من عَ الماشي",
          },
          {
            id:          "hafuch-large",
            name:        "هافوخ كبير | הפוך גדול",
            description: "قهوة بالحليب مع رسمة قلب",
            price:       "14 ₪",
            image: "/images/coffee/hafuch-large.png",
            alt:   "كوب هافوخ كبير مع رسمة قلب من عَ الماشي",
          },
          {
            id:          "cortado",
            name:        "كورتادو | קורטדו",
            description: "",
            price:       "10 ₪",
            image: "/images/coffee/cortado.png",
            alt:   "كوب كورتادو من عَ الماشي",
          },
          {
            id:          "americano-hot-small",
            name:        "أمريكانو ساخن صغير | אמריקנו חם קטן",
            description: "",
            price:       "10 ₪",
            image: "/images/coffee/americano-hot-small.png",
            alt:   "كوب أمريكانو ساخن صغير من عَ الماشي",
          },
          {
            id:          "americano-hot-large",
            name:        "أمريكانو ساخن كبير | אמריקנו חם גדול",
            description: "",
            price:       "12 ₪",
            image: "/images/coffee/americano-hot-large.png",
            alt:   "كوب أمريكانو ساخن كبير من عَ الماشي",
          },
          {
            id:          "mocha-hot-small",
            name:        "موكا ساخنة صغيرة | מוקה חם קטן",
            description: "قهوة موكا غنية بالشوكولاتة",
            price:       "12 ₪",
            image: "/images/coffee/mocha-hot-small.png",
            alt:   "كوب موكا ساخنة صغيرة من عَ الماشي",
          },
          {
            id:          "mocha-hot-large",
            name:        "موكا ساخنة كبيرة | מוקה חם גדול",
            description: "قهوة موكا غنية بالشوكولاتة",
            price:       "14 ₪",
            image: "/images/coffee/mocha-hot-large.png",
            alt:   "كوب موكا ساخنة كبيرة من عَ الماشي",
          },
          {
            id:          "macchiato",
            name:        "ماكياتو | מקיאטו",
            description: "",
            price:       "8 ₪",
            image: "/images/coffee/macchiato-small.png",
            alt:   "كوب ماكياتو من عَ الماشي",
          },
          {
            id:          "macchiato-double",
            name:        "ماكياتو دبل | מקיאטו כפול",
            description: "",
            price:       "10 ₪",
            image: "/images/coffee/macchiato-double.png",
            alt:   "كوب ماكياتو دبل من عَ الماشي",
          },
          {
            id:          "affogato",
            name:        "أفوغاتو | אפוגטו",
            description: "كرة بوظة فانيلا مع شوت إسبريسو | כדור גלידת וניל עם שוט אספרסו",
            price:       "12 ₪",
            image: "/images/coffee/affogato-1.png",
            alt:   "أفوغاتو مع بوظة فانيلا وإسبريسو من عَ الماشي",
          },
        ],
      },
      {
        id:    "cold",
        label: "المشروبات الباردة | משקאות קרים",
        icon:  "🧊",
        products: [
          {
            id:          "iced-coffee-classic",
            name:        "قهوة باردة كلاسيك | קפה קר קלאסי",
            description: "350 مل",
            price:       "15 ₪",
            image: "/images/coffee/iced-coffee-classic.png",
            alt:   "قهوة باردة كلاسيك من عَ الماشي",
          },
          {
            id:          "iced-coffee-vanilla",
            name:        "قهوة باردة فانيلا | קפה קר וניל",
            description: "350 مل",
            price:       "15 ₪",
            image: "/images/coffee/iced-coffee-vanilla.png",
            alt:   "قهوة باردة فانيلا من عَ الماشي",
          },
          {
            id:          "iced-coffee-caramel",
            name:        "قهوة باردة كراميل | קפה קר קרמל",
            description: "350 مل",
            price:       "15 ₪",
            image: "/images/coffee/iced-coffee-caramel.png",
            alt:   "قهوة باردة كراميل من عَ الماشي",
          },
          {
            id:          "iced-coffee-cookies",
            name:        "قهوة باردة كوكيز | קפה קר קוקיז",
            description: "350 مل",
            price:       "15 ₪",
            image: "/images/coffee/iced-coffee-cookies.png",
            alt:   "قهوة باردة كوكيز من عَ الماشي",
          },
          {
            id:          "iced-coffee-hazelnut",
            name:        "قهوة باردة بندق | קפה קר אגוזי לוז",
            description: "350 مل",
            price:       "15 ₪",
            image: "/images/coffee/iced-coffee-hazelnut.png",
            alt:   "قهوة باردة بندق من عَ الماشي",
          },
          {
            id:          "iced-americano",
            name:        "آيس أمريكانو | אייס אמריקנו",
            description: "350 مل",
            price:       "15 ₪",
            image: "/images/coffee/iced-americano.png",
            alt:   "آيس أمريكانو من عَ الماشي",
          },
          {
            id:          "iced-mocha",
            name:        "آيس موكا | אייס מוקה",
            description: "350 مل",
            price:       "15 ₪",
            image: "/images/coffee/iced-mocha.png",
            alt:   "آيس موكا من عَ الماشي",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  الفئة الثالثة — المخبوزات
  // ─────────────────────────────────────────────────────────────
  {
    id:       "bakery",
    label:    "المخبوزات",
    icon:     "🥐",
    subtitle: "طازجة يومياً من فرننا الخاص",
    products: [
      {
        id:          16,
        name:        "كرواسون زبدة",
        description: "كرواسون فرنسي أصلي بالزبدة الطازجة، طبقات هشة وذهبية اللون.",
        price:       "12 ₪",
        image: "https://placehold.co/500x500/D4AF37/2B211A?text=Butter+Croissant",
        alt:   "كرواسون زبدة",
      },
      {
        id:          17,
        name:        "كرواسون شوكولاتة",
        description: "كرواسون هش محشو بقطع شوكولاتة داكنة غنية بالطعم.",
        price:       "14 ₪",
        image: "https://placehold.co/500x500/3B241A/D4AF37?text=Chocolate+Croissant",
        alt:   "كرواسون شوكولاتة",
      },
      {
        id:          18,
        name:        "كرواسون لوتس",
        description: "كرواسون مقرمش من الخارج، محشو بكريمة لوتس اللذيذة من الداخل.",
        price:       "16 ₪",
        image: "https://placehold.co/500x500/8B5E34/FBF3E1?text=Lotus+Croissant",
        alt:   "كرواسون لوتس",
      },
      {
        id:          19,
        name:        "كرواسون زعتر",
        description: "كرواسون مالح محشو بالزعتر الأخضر وزيت الزيتون، مثالي للفطور.",
        price:       "13 ₪",
        image: "https://placehold.co/500x500/7A8B5C/FBF3E1?text=Zaatar+Croissant",
        alt:   "كرواسون زعتر",
      },
      {
        id:          20,
        name:        "دونات شوكولاتة",
        description: "دونات طرية مغطاة بطبقة سميكة من الشوكولاتة الغنية.",
        price:       "10 ₪",
        image: "https://placehold.co/500x500/2B211A/D4AF37?text=Chocolate+Donut",
        alt:   "دونات شوكولاتة",
      },
      {
        id:          21,
        name:        "مافن فانيلا",
        description: "مافن طري ورطب بنكهة الفانيلا الكلاسيكية، مناسب مع القهوة.",
        price:       "11 ₪",
        image: "https://placehold.co/500x500/EFE1C6/2B211A?text=Vanilla+Muffin",
        alt:   "مافن فانيلا",
      },
      {
        id:          22,
        name:        "كوكيز",
        description: "كوكيز مقرمش من الخارج وطري من الداخل، مع قطع شوكولاتة سخية.",
        price:       "9 ₪",
        image: "https://placehold.co/500x500/6B4A2F/FBF3E1?text=Cookies",
        alt:   "كوكيز شوكولاتة",
      },
      {
        id:          23,
        name:        "سينابون",
        description: "لفافة قرفة دافئة ومغطاة بكريمة الجبن الحلوة، حلاوة لا تُقاوم.",
        price:       "15 ₪",
        image: "https://placehold.co/500x500/A9702B/FBF3E1?text=Cinnabon",
        alt:   "سينابون",
      },
    ],
  },
]
