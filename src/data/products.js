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
//  ملاحظة عن "featured": المنتجات التي featured: true تظهر تلقائياً
//  في قسم "الأكثر طلباً" في أسفل الصفحة.
//
//  ملاحظة عن الصور: معظم صور الميلك شيك ونكهات مميزة هي صور حقيقية
//  مجانية من Pexels (لا تتطلب نسب/attribution). العناصر التي لم يتوفر
//  لها صورة حقيقية مطابقة تماماً للنكهة (فانيلا، فستق حلبي، جوز الهند
//  رافايلو) تحمل تعليق TODO فوقها — استبدلها بصورة حقيقية عندما تتوفر.
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
        featured:    true,
        image: "https://images.pexels.com/photos/25913231/pexels-photo-25913231.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك أوريو",
      },
      {
        id:          2,
        name:        "لوتس",
        description: "ميلك شيك بطعم بسكويت لوتس الكراميلي، مع صوص لوتس وقطع بسكويت مقرمشة.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/28841107/pexels-photo-28841107.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك لوتس",
      },
      {
        id:          3,
        name:        "فانيلا",
        description: "ميلك شيك كلاسيكي بنكهة الفانيلا الطبيعية الناعمة، بسيط وأصيل.",
        price:       "25 ₪",
        // TODO: صورة مؤقتة (placeholder) — لم يتوفر لها بديل حقيقي مناسب، استبدلها بصورة حقيقية لاحقاً
        image: "https://placehold.co/500x500/EFE1C6/2B211A?text=Vanilla+Milkshake",
        alt:   "ميلك شيك فانيلا",
      },
      {
        id:          4,
        name:        "نوتيلا",
        description: "ميلك شيك بطعم نوتيلا الشوكولاتة والبندق الغني، مع صوص نوتيلا فوقه.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/18133821/pexels-photo-18133821.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك نوتيلا",
      },
      {
        id:          5,
        name:        "كندر",
        description: "ميلك شيك بطعم شوكولاتة كندر الكريمية مع قطع شوكولاتة كندر الحقيقية.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/11381485/pexels-photo-11381485.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك كندر",
      },
      {
        id:          6,
        name:        "فستق حلبي",
        description: "ميلك شيك بطعم الفستق الحلبي الأصيل، مع رشة فستق مجروش على الوجه.",
        price:       "25 ₪",
        // TODO: صورة مؤقتة (placeholder) — لم يتوفر لها بديل حقيقي مناسب، استبدلها بصورة حقيقية لاحقاً
        image: "https://placehold.co/500x500/7A8B5C/FBF3E1?text=Pistachio+Milkshake",
        alt:   "ميلك شيك فستق حلبي",
      },
      {
        id:          7,
        name:        "توت",
        description: "ميلك شيك منعش بطعم التوت الطازج، مع لمسة حلاوة طبيعية مميزة.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك توت",
      },
      {
        id:          8,
        name:        "توت موز",
        description: "مزيج منعش من التوت والموز الطازج في كوب ميلك شيك كريمي القوام.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/10066814/pexels-photo-10066814.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك توت موز",
      },
      {
        id:          9,
        name:        "كراميل",
        description: "ميلك شيك غني بصوص الكراميل الذهبي الكريمي، حلاوة متوازنة في كل رشفة.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/214333/pexels-photo-214333.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك كراميل",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  //  الفئة الثانية — نكهات مميزة
  // ─────────────────────────────────────────────────────────────
  {
    id:       "special",
    label:    "نكهات مميزة",
    icon:     "✨",
    subtitle: "تشكيلة مميزة بسعر موحّد 25 ₪",
    products: [
      {
        id:          10,
        name:        "بلو بيري",
        description: "ميلك شيك مميز بطعم التوت الأزرق المنعش، مع لمسة كريمية فاخرة.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/11135665/pexels-photo-11135665.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك بلو بيري",
      },
      {
        id:          11,
        name:        "جوز الهند رافايلو",
        description: "نكهة فاخرة تجمع جوز الهند الناعم مع لمسة اللوز على طريقة رافايلو.",
        price:       "25 ₪",
        // TODO: صورة مؤقتة (placeholder) — لم يتوفر لها بديل حقيقي مناسب، استبدلها بصورة حقيقية لاحقاً
        image: "https://placehold.co/500x500/EFE1C6/8B5E34?text=Coconut+Raffaello",
        alt:   "ميلك شيك جوز الهند رافايلو",
      },
      {
        id:          12,
        name:        "مارشميلو كاندي",
        description: "ميلك شيك حلو ومرح بطعم المارشميلو الطري، مع قطع كاندي ملونة فوقه.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/1028735/pexels-photo-1028735.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك مارشميلو كاندي",
      },
      {
        id:          13,
        name:        "كورن فلكس",
        description: "نكهة مبتكرة بطعم رقائق الذرة المقرمشة، مع لمسة كراميل خفيفة.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/20460/pexels-photo.png?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك كورن فلكس",
      },
      {
        id:          14,
        name:        "بريتزل مالح",
        description: "مزيج فريد بين الحلو والمالح، مع قطع البريتزل المقرمشة الحقيقية.",
        price:       "25 ₪",
        image: "https://images.pexels.com/photos/6025810/pexels-photo-6025810.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك بريتزل مالح",
      },
      {
        id:          15,
        name:        "كراميل مالح",
        description: "توازن مثالي بين حلاوة الكراميل ولمسة الملح المميزة في كل رشفة.",
        price:       "25 ₪",
        featured:    true,
        image: "https://images.pexels.com/photos/128399/pexels-photo-128399.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt:   "ميلك شيك كراميل مالح",
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
        featured:    true,
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
        featured:    true,
        image: "https://placehold.co/500x500/A9702B/FBF3E1?text=Cinnabon",
        alt:   "سينابون",
      },
    ],
  },
]
