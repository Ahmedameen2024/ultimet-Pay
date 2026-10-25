/**
 * Ultimate Pay — Interactive Fintech Portfolio Application Script
 * Features:
 * 1. Track Switcher (Merchants, Banks, PS System)
 * 2. Interactive Multi-Channel Payment Simulator (Soft POS, QR, Payment Link, Android POS)
 * 3. Merchant ROI & Time-Saving Calculator
 * 4. 23-Page Official Company Brochure Lightbox Gallery
 * 5. Fullscreen Meeting / Pitch Mode
 * 6. Arabic / English Instant Bilingual Toggle (RTL / LTR)
 * 7. Mobile Drawer & Contact Lead Generator
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Translations Dictionary (AR / EN)
  // ==========================================
  const translations = {
    ar: {
      toolbar_pitch_mode: "وضع العرض",
      toolbar_brochure: "الكتيب الرسمي",
      header_tagline: "منظومة المدفوعات والتحصيل الذكي",
      track_merchants: "للتجار وأصحاب الأعمال",
      track_banks: "للبنوك والمؤسسات المالية",
      track_ps: "نظام PS ونقاط البيع",
      nav_demo: "محاكي الدفع",
      nav_cta: "ابدأ الآن",
      drawer_select_track: "اختر المسار المستهدف:",
      nav_home: "الرئيسية",
      nav_solutions: "الحلول والمزايا",
      nav_services: "الخدمات والأجهزة",
      nav_simulator: "المحاكي التفاعلي",
      nav_calculator: "حاسبة الوفر للتاجر",
      nav_steps: "خطوات الانضمام",
      nav_brochure: "العرض المعتمد (PDF)",
      nav_contact: "تواصل معنا",
      nav_aggregator: "Payment Aggregator و R2P",
      nav_ps: "نظام PS ونقاط البيع",

      // Merchant Hero
      m_eyebrow: "منظومة التحصيل الأولى للتجار في اليمن — مرخصة من البنك المركزي",
      m_hero_title_1: "لا تدع مشترياً يغادر",
      m_hero_title_2: "استقبل مدفوعات كل البنوك والمحافظ",
      m_hero_title_3: "في نقطة بيع واحدة وحساب موحد",
      m_hero_desc: "ودّع فوضى الشاشات المتعددة، والحسابات المتفرقة، وإدخال القيود اليدوي في نهاية اليوم. مع Ultimate Pay، جوالك يتحول لجهاز دفع فوري، ومبيعاتك تترحل تلقائياً لنظامك المحاسبي في ثوانٍ.",
      m_hero_btn_demo: "جرّب الدفع التفاعلي الآن",
      m_hero_btn_calc: "احسب توفيرك الشهري",
      m_trust_1_title: "ترخيص رسمي",
      m_trust_1_sub: "البنك المركزي اليمني",
      m_trust_2_title: "أعلى معايير الأمان",
      m_trust_2_sub: "شهادة PCI-DSS العالمية",
      m_trust_3_title: "تكامل محاسبي فوري",
      m_trust_3_sub: "ترحيل آلي لنظام Onyx ERP",

      // Bank Hero
      b_eyebrow: "بوابة التمكين المصرفي وحلول الاستحواذ على التجار (Merchant Acquiring)",
      b_hero_title_1: "وسّع شبكة تجارك وعزز ودائعك",
      b_hero_title_2: "بمحول مالي وبنية تحتية موحدة",
      b_hero_title_3: "دون أعباء تشغيلية أو صيانة ميدانية",
      b_hero_desc: "شريككم الاستراتيجي لربط آلاف التجار بمصرفكم. حلول ربط متطورة، تسويات ومطابقة آلية (Automated Clearing)، ومراقبة ذكية للاحتيال توافق أعلى متطلبات البنك المركزي والامتثال المصرفي.",
      b_hero_btn_arch: "بنية الربط والتسويات",
      b_hero_btn_req: "طلب جلسة شراكة مصرفية",
      b_trust_1_title: "امتثال ورقابة كاملة",
      b_trust_1_sub: "مطابقة لقوانين AML ومكافحة الاحتيال",
      b_trust_2_title: "تسويات ومقاصة دقيقة",
      b_trust_2_sub: "مطابقة بالمرجع الموحد وتقارير دقيقة",
      b_trust_3_title: "إدارة ميدانية شاملة",
      b_trust_3_sub: "تأهيل التجار وتزويدهم بالأجهزة والدعم",

      // PS Hero
      ps_eyebrow: "منظومة المحول المالي ونقاط البيع الذكية (PS & Smart POS Ecosystem)",
      ps_hero_title_1: "جيل جديد من أجهزة نقاط البيع",
      ps_hero_title_2: "من تقنية Soft POS بهاتفك",
      ps_hero_title_3: "إلى أجهزة أندرويد الذكية وشبكات البطاقات",
      ps_hero_desc: "حلول دفع ذكية متعددة القنوات: تحويل هواتف أندرويد لأجهزة دفع لا تلامسية (Tap to Phone)، أجهزة أندرويد المتنقلة مع طابعات حرارية مدمجة، ورموز QR الديناميكية وروابط الدفع السريع.",
      ps_hero_btn_devices: "استكشف الأجهزة والتقنيات",
      ps_hero_btn_sim: "جرّب محاكاة Soft POS",
      ps_trust_1_title: "Soft POS (Tap to Phone)",
      ps_trust_1_sub: "دون تكاليف أجهزة إضافية",
      ps_trust_2_title: "Smart Android POS",
      ps_trust_2_sub: "طباعة فواتير، 4G، بطاقات ومحافظ",
      ps_trust_3_title: "QR & Payment Links",
      ps_trust_3_sub: "دفع آمن بالرمز والرابط والواتساب",

      // Switch Banner
      switch_banner_prompt: "أنت الآن تستعرض:",

      // Pain vs Gain Section
      tag_why_us: "لماذا يختارنا كبار التجار؟",
      prob_title_1: "الفرق الحقيقي بين",
      prob_title_2: "فوضى التحصيل التقليدية",
      prob_title_3: "ومنظومة Ultimate Pay الذكية",
      prob_subtitle: "صُممت خدماتنا من واقع التحديات اليومية للأسواق اليمنية: إرهاق الكاشير، ضياع المبيعات، وتأخر ترحيل الأموال لحساباتك.",
      card_pain_badge: "بدون Ultimate Pay (المعاناة اليومية)",
      pain_1_t: "خسارة زبائن مؤكدة",
      pain_1_d: "عميلك يريد الدفع عبر بنك أو محفظة لا يملك الكاشير حساباً فيها، فتضيع عملية البيع فوراً.",
      pain_2_t: "فوضى شاشات وتطبيقات متعددة",
      pain_2_d: "جوالات مختلفة لكل محفظة، بطء في الكاشير، طوابير انتظار، وأخطاء بشرية في تأكيد الدفع.",
      pain_3_t: "كابوس المطابقة وإدخال القيود",
      pain_3_d: "ساعات طويلة تضيع في مطابقة إشعارات الدفع مع فواتير الكاشير، وإدخال مبالغ السداد يدوياً في النظام.",
      pain_4_t: "تشتت السيولة ومخاطر الكاش",
      pain_4_d: "أموالك مبعثرة بين 5 محافظ وبنوك نقدية متفرقة، مع مخاطر السرقات والأموال التالفة والمزورة.",

      card_gain_badge: "مع Ultimate Pay (راحة وربحية)",
      gain_1_t: "نقطة بيع واحدة تقبل الجميع",
      gain_1_d: "استقبل كافة المحافظ (كريمي، جيب، جوال باي، كاش، إم فلوس...) والبطاقات المصرفية عبر جهاز أو جوال واحد.",
      gain_2_t: "تحصيل فوري بضغطة زر",
      gain_2_d: "عبر تمرير البطاقة بالهاتف (Soft POS) أو مسح QR ديناميكي بقيمة الفاتورة المحددة دون أي خطأ في إدخال المبلغ.",
      gain_3_t: "تسجيل مبالغ الفواتير تلقائيًا في النظام المحاسبي",
      gain_3_d: "تصل نتيجة الدفع ويُسجَّل المبلغ تلقائيًا في نظامك المحاسبي (مثل Onyx ERP) عند تفعيل التكامل، بدلًا من الإدخال اليدوي.",
      gain_4_t: "إشعار فوري وتأكيد موثق للعمليات",
      gain_4_d: "يصلك إشعار فوري برقم الفاتورة والمبلغ المسدد ونتيجة العملية، مع انتقال الأموال مباشرة لحسابك لدى جهة الدفع.",

      // Simulator
      tag_simulator: "تجربة حية تفاعلية",
      sim_title_1: "جرّب بنفسك:",
      sim_title_2: "كيف تتم عمليات الدفع",
      sim_title_3: "في ثوانٍ معدودة؟",
      sim_subtitle: "اختر وسيلة الدفع أدناه، واضغط لتنفيذ عملية تحصيل حقيقية ومتابعة الترحيل المالي الفوري.",
      sim_tab_softpos: "Soft POS (Tap to Phone)",
      sim_tab_qr: "الدفع عبر رمز QR",
      sim_tab_link: "رابط الدفع السريع (WhatsApp)",
      sim_tab_pos: "جهاز أندرويد POS الذكي",
      sim_enter_amount: "أدخل مبلغ الفاتورة:",
      sim_inv_no: "رقم الفاتورة:",
      sim_customer: "العميل:",
      sim_walkin: "عميل تجزئة / نقدي",
      sim_processing_title: "جاري التوجيه عبر المحول المالي...",
      sim_processing_sub: "فحص الأمان وتأكيد نتيجة العملية",
      sim_success_title: "تمت العملية بنجاح!",
      sim_new_txn: "عملية تجريبية جديدة",
      sim_exp_title: "ماذا يحدث في خلفية العملية؟",
      sim_exp_desc: "تتحول العملية المعقدة تقنياً إلى تجربة فورية وسلسة تمنح التاجر أماناً مصرفياً كاملاً:",
      b_step_1_t: "التحقق الأمني اللحظي",
      b_step_1_d: "تشفير كامل وفق معيار PCI-DSS، مع فحص سريع لمنع الاحتيال وازدواجية العمليات.",
      b_step_2_t: "التوجيه الذكي بالمحول المالي (Switching)",
      b_step_2_d: "إرسال طلب الخصم مباشرة للبنك أو المحفظة المصدرة بزمن استجابة أقل من ثانيتين.",
      b_step_3_t: "التكامل مع النظام المحاسبي (Onyx ERP)",
      b_step_3_d: "تسجيل مبلغ الفاتورة تلقائيًا في النظام المحاسبي للتاجر عند تأكيد نجاح العملية وتفعيل التكامل المعتمد.",
      b_step_4_t: "إشعار السداد والمطابقة",
      b_step_4_d: "استلام إشعار سداد الفاتورة ومطابقة السجلات بالمرجع الموحد بدقة تامة.",

      // Calculator
      calc_tag: "أداة قياس الجدوى للتاجر",
      calc_title_1: "كم توفر شهرياً",
      calc_title_2: "مع Ultimate Pay؟",
      calc_desc: "حرّك المؤشرات لمعرفة حجم الساعات المهدرة والأموال التي ستوفرها لمنشأتك عند أتمتة التحصيل والمطابقة:",
      calc_lbl_txns: "متوسط العمليات اليومية في فروعك:",
      calc_lbl_branches: "عدد الفروع أو نقاط البيع:",
      calc_lbl_avg: "متوسط قيمة العملية:",
      calc_results_head: "العائد الشهري التقديري لنشاطك",
      calc_time_saved: "ساعات مطابقة محاسبية موفرة:",
      calc_time_note: "بدلاً من مراجعة الإشعارات اليدوية وإدخال بيانات السداد يدويًا نهاية كل وردية.",
      calc_error_drop: "انخفاض الأخطاء وعجز الصناديق:",
      calc_error_note: "لأن المبلغ محدد إلكترونياً ويُسجل تلقائياً في النظام المحاسبي عند تأكيد العملية وتفعيل التكامل.",
      calc_sales_boost: "زيادة مبيعات متوقعة (منع تسرب الزبائن):",
      calc_sales_note: "بفضل قبول جميع المحافظ والبطاقات دون أي اعتذار للعميل.",
      calc_cta_btn: "اطلب تفعيل فروعك الآن",

      // Services
      tag_services: "خدمات متكاملة ومنظومة متطورة",
      serv_title_1: "حلول متخصصة لكل قناة تحصيل:",
      serv_title_2: "من المتاجر التقليدية",
      serv_title_3: "إلى المصارف والتجارة الإلكترونية",
      serv_subtitle: "مستوحاة من أحدث تقنيات الدفع العالمية ومتوافقة بالكامل مع بيئة الأعمال اليمنية المعتمدة.",
      s1_badge: "الأكثر ابتكاراً",
      s1_name: "نقاط البيع عبر الهاتف (Soft POS)",
      s1_desc: "حوّل أي هاتف ذكي يعمل بنظام أندرويد ويدعم NFC إلى جهاز نقطة بيع متكامل. يقبل الدفع بالبطاقات والمحافظ اللاتلامسية دون الحاجة لشراء أجهزة باهظة.",
      s1_f1: "صفر تكلفة أجهزة إضافية",
      s1_f2: "مثالي لخدمات التوصيل والمندوبين والمتاجر الصغيرة",
      s1_f3: "معتمد ومحمي بأعلى معايير تشفير البطاقات",

      s2_badge: "للفروع الكبرى",
      s2_name: "أجهزة نقاط البيع الذكية (Android POS)",
      s2_desc: "أجهزة مخصصة متينة، مزودة بشاشة لمس سريعة، طابعة إيصالات حرارية مدمجة، قارئ بطاقات شريحية ومغناطيسية، وكاميرا مسح أكواد QR.",
      s2_f1: "اتصال دائم عبر 4G و Wi-Fi",
      s2_f2: "طباعة إيصالات ورقية وإرسال نسخة إلكترونية بالـ SMS",
      s2_f3: "بطارية قوية تصمد طوال ساعات العمل الشاقة",

      s3_badge: "سريع وبدون تلامس",
      s3_name: "رموز الدفع والاستجابة السريعة (QR Code)",
      s3_desc: "رموز QR ديناميكية تظهر على شاشة الكاشير متضمنة قيمة الفاتورة ورقمها، أو رموز ثابتة مطبوعة على طاولات المطاعم ونقاط التحصيل.",
      s3_f1: "يلغي خطأ كتابة المبلغ من قبل المشتري نهائياً",
      s3_f2: "يدعم تطبيقات كافة البنوك والمحافظ الإلكترونية",
      s3_f3: "إشعار صوتي ومرئي فوري عند اكتمال الدفع",

      s4_badge: "للبيع عن بعد",
      s4_name: "روابط الدفع السريع (Payment Links)",
      s4_desc: "أنشئ رابط دفع مشفر في ثوانٍ وأرسله للعميل عبر WhatsApp أو SMS أو منصات التواصل الاجتماعي؛ دون حاجة لامتلاك متجر إلكتروني.",
      s4_f1: "تحديد المبلغ ووصف الفاتورة وتاريخ الصلاحية",
      s4_f2: "صفحة دفع احترافية تحمل هوية وشعار متجرك",
      s4_f3: "تحصيل فوري لطلبات التوصيل والمبيعات الهاتفية",

      s5_badge: "للمتاجر الإلكترونية",
      s5_name: "بوابة الدفع الإلكتروني (Online Gateway)",
      s5_desc: "تكامل سهل مع مواقع المتاجر والتطبيقات الذكية مع إضافات جاهزة لمنصات التجارة الإلكترونية المعتمدة.",
      s5_f1: "تجربة Checkout سلسة بدون إعادة توجيه معقدة",
      s5_f2: "حماية تلقائية 3D-Secure لكافة المعاملات",
      s5_f3: "وثائق برمجية ودعم فني مخصص للمطورين",

      s6_badge: "العمود الفقري",
      s6_name: "لوحة التحكم والتكامل المحاسبي (Onyx ERP)",
      s6_desc: "متابعة حية لكل المبيعات عبر الفروع والكاشيرات، مع ربط حركة البيع بنظام أونكس ERP ودفاتر الحسابات وفق التكامل المعتمد.",
      s6_f1: "توثيق التحصيل وتحديث الفواتير وفق التكامل المعتمد",
      s6_f2: "تقارير لحظية لمطابقة الفواتير والعمليات",
      s6_f3: "إدارة الصلاحيات والفروع من لوحة تحكم سحابية موحدة",

      // Bank Section
      bank_section_tag: "حلول الاستحواذ والتمكين المصرفي",
      bank_title_1: "لماذا تُعد Ultimate Pay",
      bank_title_2: "الشريك التقني الأنسب للبنوك؟",
      bank_lead: "تتيح Ultimate Pay ربط نتيجة عمليات الدفع لدى التجار بأنظمتهم المحاسبية، مع إيصال إشعار واضح للتاجر عند تأكيد سداد الفاتورة. ويساعد هذا الربط على تقليل الإدخال اليدوي، وتحسين وضوح بيانات عمليات الدفع لدى التاجر، وتسهيل الربط بين نتيجة العملية والفاتورة المرتبطة بها، وفق نطاق التكامل المعتمد مع الجهات المالية.",
      bf_1_t: "نمو مباشر للحركات المالية المصرفية",
      bf_1_d: "تنتقل أموال المبيعات مباشرة لحسابات التجار المصرفية لدى مصرفكم، مما يعزز حجم النشاط وقاعدة العملاء النشطين.",
      bf_2_t: "ربط موحد وتكامل مصرفي قياسي",
      bf_2_d: "آليات تكامل معتمدة ومتوافقة بسلاسة مع المتطلبات والإجراءات المصرفية المقررة.",
      bf_3_t: "مطابقة واضحة وتدقيق دقيق للفواتير",
      bf_3_d: "تقارير مطابقة بالمرجع الموحد تمنع الفروقات وتسهل المراجعة والتدقيق المالي لدى التجار.",
      bf_4_t: "رقابة صارمة وكشف احتيال متقدم",
      bf_4_d: "مراقبة المعاملات الشاذة في الوقت الفعلي وحظر العمليات المشبوهة لحماية أموال المودعين والمصرف.",
      bank_box_kpi: "مؤشرات الأداء والجاهزية",
      kpi_uptime: "جاهزية تشغيلية مستمرة (High Availability)",
      kpi_latency: "متوسط زمن معالجة وتوجيه الحركة (Latency)",
      kpi_pci: "معتمد من مجلس معايير أمان بطاقات الدفع",
      kpi_cby: "مرخص رسمياً من البنك المركزي اليمني",
      bank_cta_btn: "طلب وثيقة التكامل والشراكة",

      // Onboarding
      tag_onboarding: "الانضمام أسهل مما تتخيل",
      step_title_1: "4 خطوات سريعة فقط",
      step_title_2: "لبدء استقبال المدفوعات",
      step_title_3: "في فروعك",
      step_subtitle: "لا حاجة لإجراءات ورقية معقدة؛ فريقنا التقني والميداني يرافقك خطوة بخطوة حتى تكتمل أول عملية دفع.",
      st1_title: "التسجيل وتقديم البيانات",
      st1_desc: "تزويدنا ببيانات السجل التجاري والنشاط وحسابك المصرفي المعتمد لتلقي التسويات.",
      st2_title: "التفعيل وضبط الحساب",
      st2_desc: "تجهيز حساب المنشأة في المحول المالي، وتحديد الفروع وأسماء الكاشيرات والصلاحيات.",
      st3_title: "الربط والتهيئة الميدانية",
      st3_desc: "تحميل تطبيق Soft POS على هواتف فريقك أو تسليم أجهزة نقاط البيع وربطها بنظام الأونكس.",
      st4_title: "بدء التحصيل والإشعار",
      st4_desc: "استقبل مدفوعات زبائنك على الفور، وشاهد مبيعاتك تتدفق مباشرة لحسابك وتقاريرك المحاسبية.",

      // Brochure Section
      tag_brochure: "المصدر الرسمي والكتيب التعريفي المعتمد",
      bf_title_1: "تصفح العرض التقديمي الأصلي",
      bf_title_2: "لشركة Ultimate Pay",
      bf_desc: "يمكنك استعراض صفحات الكتيب التعريفي الأصلي للشركة والشرائح الرسمية المعتمدة (23 شريحة بدقة عالية)، مع إمكانية التصفح التفاعلي أثناء جلسات العرض مع البنوك والشركاء.",
      bf_btn_open: "فتح كتيب الشرائح التفاعلي",
      bf_hint: "انقر للتكبير والتصفح الكامل",
      modal_b_title: "الكتيب التقديمي المعتمد لشركة Ultimate Pay",

      // CTA Form & Direct WhatsApp
      wa_cta_tag: "تواصل فوري ومباشر",
      wa_cta_t1: "ابدأ الآن وتواصل معنا مباشرة",
      wa_cta_t2: "عبر محادثة واتساب فورية",
      wa_cta_sub: "سواء كنت تاجراً ترغب بتفعيل نقاط البيع والربط مع نظام الأونكس، أو بنكاً يسعى لتوسيع شبكة الاستحواذ؛ اضغط وتحدث مباشرة مع مسؤول المبيعات والتفعيل على الرقم: 782665485",
      wa_hero_btn: "راسلنا الآن عبر واتساب (782665485)",
      wa_chip_1: "رد فوري ومباشر",
      wa_chip_2: "استشارة وتفعيل نقاط البيع",
      wa_chip_3: "دعم فني وتشغيلي 24/7",
      floating_wa_label: "راسلنا واتساب <strong>782665485</strong>",
      cta_tag: "ابدأ رحلة التميز المالي اليوم",
      cta_t1: "جاهز لنقل أعمالك لمستوى احترافي جديد؟",
      cta_t2: "تواصل معنا الآن وانضم لشبكة Ultimate Pay",
      cta_sub: "سواء كنت تاجراً ترغب في زيادة مبيعاتك وتوحيد تحصيلك، أو بنكاً يسعى لتوسيع شبكة الاستحواذ؛ فريقنا جاهز لخدمتك.",
      form_lbl_type: "أنت تمثل:",
      form_opt_merchant: "تاجر / صاحب منشأة تجارية",
      form_opt_bank: "بنك / مصرف / مؤسسة مالية",
      form_opt_pos: "شريك نقاط بيع وتقنية",
      form_lbl_name: "الاسم / اسم المنشأة:",
      form_lbl_phone: "رقم الهاتف / الواتساب:",
      form_lbl_city: "المدينة / المنطقة:",
      form_lbl_need: "الخدمات أو الاحتياج المطلوب:",
      form_btn_submit: "إرسال الطلب وحجز جلسة تجريبية",
      form_succ_t: "شكراً لتواصلك مع Ultimate Pay!",
      form_succ_d: "تم استلام طلبك بنجاح وسيتواصل معك مستشارنا المالي خلال ساعات العمل لترتيب التفعيل.",
      c_licensed: "شركة يمنية مرخصة من البنك المركزي",
      footer_desc: "المنظومة الوطنية الرائدة لخدمات الدفع والتحصيل الذكي ونقاط البيع في الجمهورية اليمنية.",

      // Accounting Cycle & Workflow
      tag_aggregator: "Payment Aggregator Service",
      agg_title_1: "Ultimate Pay Links Payment Transactions",
      agg_title_2: "To Merchant Invoices & Accounting System",
      agg_title_3: "Payment Confirmation, ERP Integration & Merchant Alert",
      agg_subtitle: "Ultimate Pay links payment transactions to merchant invoices and accounting systems. Through Request to Pay (R2P), customers review and approve payment requests via supported payment methods. Upon confirmation, the result links to the invoice, the amount is automatically logged in the accounting system upon integration, and a clear notification is delivered to the merchant stating invoice number and paid amount. Funds transfer directly from customer to merchant account according to the approved payment mechanism.", (الدورة المحاسبية)
      tag_aggregator: "خدمة تجميع المدفوعات (Payment Aggregator)",
      agg_title_1: "تربط Ultimate Pay عملية الدفع",
      agg_title_2: "بفاتورة التاجر ونظامه المحاسبي",
      agg_title_3: "تأكيد الدفع، والتكامل المحاسبي، وإشعار التاجر",
      agg_subtitle: "تربط Ultimate Pay عملية الدفع بفاتورة التاجر ونظامه المحاسبي. من خلال طلب الدفع R2P، يمكن للعميل مراجعة طلب السداد والموافقة عليه عبر وسيلة الدفع المدعومة. وعند تأكيد نجاح العملية، تُربط النتيجة بالفاتورة، ويُسجَّل المبلغ تلقائيًا في النظام المحاسبي عند تفعيل التكامل، ويصل إشعار للتاجر يوضح رقم الفاتورة والمبلغ المسدد. وتنتقل الأموال مباشرةً من حساب العميل إلى حساب التاجر وفق آلية الدفع المعتمدة.",
      nav_cycle: "الدورة المحاسبية",
      tag_cycle: "سير العمل الفعلي لخدمة Payment Aggregator",
      cycle_title_1: "من إصدار الفاتورة",
      cycle_title_2: "إلى التسجيل المحاسبي",
      cycle_title_3: "وإشعار التاجر بوضوح تام",
      cycle_subtitle: "مع Ultimate Pay، ترتبط عملية الدفع بفاتورتك ونظامك المحاسبي. عندما يسدد العميل قيمة الفاتورة، تصل نتيجة الدفع إلى المنصة، ويُسجَّل المبلغ تلقائيًا في نظامك المحاسبي عند تأكيد العملية وتفعيل التكامل، كما يصلك إشعار يوضح رقم الفاتورة والمبلغ المسدد. بذلك تقل الحاجة إلى إدخال بيانات السداد يدويًا، وتصبح متابعة الفواتير المسددة أوضح وأسهل.",
      cycle_ex_title: "مثال توضيحي افتراضي لدورة سداد الفاتورة:",
      cycle_ex_sub: "فاتورة مبيعات رقم INV-1025 بقيمة 5,000 ريال (حالة الدفع: مؤكدة وناجحة)",
      cycle_ex_badge: "INV-1025 • مثال توضيحي افتراضي",
      c_step_1_role: "الخطوة 1",
      c_step_1_t: "البيع وإصدار الفاتورة",
      c_step_1_d: "ينفذ التاجر عملية البيع ويسجل بياناتها في نظامه المعتمد، ثم يطلب تحصيل قيمة المشتريات من العميل عبر وسيلة الدفع المتاحة له.",
      c_step_1_actor: "نظام التاجر أو واجهة البيع",
      c_step_1_st: "بانتظار السداد",
      c_step_1_view: "فاتورة برقم مرجعي محدد",
      c_step_2_role: "الخطوة 2",
      c_step_2_t: "سداد العميل وانتقال الأموال",
      c_step_2_d: "يسدد العميل قيمة الفاتورة عبر وسيلته المعتمدة، وتنتقل الأموال مباشرة من حساب العميل إلى حساب التاجر وفق نموذج الدفع المعتمد دون وساطة المنصة.",
      c_step_2_actor: "تحويل مباشر بين الحسابين",
      c_step_2_st: "لا تستلم ولا تحتفظ بالنقد",
      c_step_2_view: "المؤسسة المالية المعتمدة",
      c_step_3_role: "الخطوة 3",
      c_step_3_t: "وصول نتيجة الدفع للمنصة",
      c_step_3_d: "تصل نتيجة عملية الدفع المؤكدة إلى منصة Ultimate Pay من خلال الربط المعتمد مع جهة الدفع، محملة ببيانات المرجع الموحد.",
      c_step_3_actor: "مسار المعلومات والتأكيد",
      c_step_3_st: "مؤكدة لدى جهة الدفع",
      c_step_3_view: "مرجع العملية المعتمد (RRN)",
      c_step_4_role: "الخطوة 4",
      c_step_4_t: "مطابقة النتيجة مع الفاتورة",
      c_step_4_d: "يتم التحقق من نجاح العملية وربطها بالفاتورة الصحيحة باستخدام البيانات المرجعية المتاحة، والتأكد من مطابقة المبلغ المطلوب بدقة.",
      c_step_4_actor: "مطابقة بيانات العملية بالفاتورة",
      c_step_4_st: "متطابقة وصحيحة",
      c_step_4_view: "ربط مؤكد بحركة البيع",
      c_step_5_role: "الخطوة 5",
      c_step_5_t: "التسجيل المحاسبي التلقائي",
      c_step_5_d: "عند تأكيد العملية وتطابقها، يتكامل النظام مع النظام المحاسبي للتاجر (مثل Onyx ERP) بحيث يُسجّل المبلغ تلقائيًا بدلًا من الإدخال اليدوي.",
      c_step_5_actor: "تسجيل المبلغ تلقائيًا بالسجلات",
      c_step_5_st: "وفق التكامل المعتمد المفعّل",
      c_step_5_view: "تقليل الإدخال اليدوي والسهو",
      c_step_6_role: "الخطوة 6",
      c_step_6_t: "إرسال إشعار السداد للتاجر",
      c_step_6_d: "يصل إشعار واضح للتاجر يوضح أن العميل سدد الفاتورة، مع بيان رقم الفاتورة والمبلغ المسدد ونتيجة العملية، مما يجعل المتابعة أسرع وأوضح.",
      c_step_6_actor: "التاجر / الكاشير / المحاسب",
      c_step_6_st: "رقم الفاتورة والمبلغ المسدد والحالة",
      c_step_6_view: "تسليم السلعة بثقة دون انتظار",
      flow_financial_title: "المسار المالي (انتقال الأموال المباشر)",
      flow_financial_desc: "الأموال تنتقل مباشرة من حساب العميل إلى حساب التاجر لدى جهة الدفع المعتمدة دون وساطة في النقد",
      f_step_1_t: "بيع لدى التاجر وإصدار فاتورة",
      f_step_1_d: "تسجيل الفاتورة في نظام التاجر",
      f_step_2_t: "العميل يسدد قيمة الفاتورة",
      f_step_2_d: "سداد عبر وسيلة الدفع المتاحة",
      f_step_3_t: "انتقال الأموال مباشرة",
      f_step_3_d: "من حساب العميل إلى حساب التاجر مباشرة",
      flow_divider_note: "تأكيد نجاح السداد ينقل المعاملة فورًا إلى مسار المعلومات والتكامل",
      flow_info_title: "مسار المعلومات والإشعار والتكامل المحاسبي",
      flow_info_desc: "وصول نتيجة الدفع إلى المنصة ثم ربطها بالفاتورة وتسجيلها محاسبيًا وإشعار التاجر",
      i_step_1_t: "وصول نتيجة الدفع للمنصة",
      i_step_1_d: "استلام تأكيد السداد من جهة الدفع",
      i_step_2_t: "مطابقة النتيجة مع الفاتورة",
      i_step_2_d: "مطابقة رقم الفاتورة والمرجع والمبلغ",
      i_step_3_t: "تسجيل المبلغ تلقائيًا بالمحاسبة",
      i_step_3_d: "في نظام التاجر وفق التكامل المفعّل",
      i_step_4_t: "إرسال إشعار السداد للتاجر",
      i_step_4_d: "رقم الفاتورة، المبلغ المسدد، والحالة",

      c_lbl_actor: "المسؤول:",
      c_lbl_status: "الحالة / الأثر:",
      c_lbl_view: "المخرجات:",
      c_warn_title: "تنبيه جوهري حول فصل المسارات وحوكمة العمليات:",
      c_warn_desc: "الأموال تنتقل مباشرة من حساب العميل إلى حساب التاجر عبر جهة الدفع المعتمدة وفق نموذج الدفع المقرر. منصة Ultimate Pay لا تستلم أموال العميل ولا تحتفظ بها ولا تحولها إلى التاجر؛ وتسجيل المبلغ تلقائيًا في النظام المحاسبي للتاجر هو انعكاس لمعلومات الدفع المؤكدة لتسهيل العمل وتفادي الإدخال اليدوي، وليس دليلاً على قيام المنصة بأي تحويل نقدي.",
      dis_title: "دليل المصطلحات: وضوح تام لكل مفهوم وإجراء",
      dis_subtitle: "توضيح المفاهيم التشغيلية لخدمة Payment Aggregator لضمان الفهم المشترك:",
      term_1_t: "فاتورة البيع",
      term_1_d: "مستند بيع البضاعة الصادر من كاشير التاجر يحدد الأصناف والمبلغ الإجمالي المستحق.",
      term_2_t: "طلب الدفع (R2P)",
      term_2_d: "رمز QR أو رابط رقمي يُرسل للعميل لطلب سداد المبلغ المطابق لقيمة الفاتورة بدقة.",
      term_3_t: "نتيجة الدفع المؤكدة",
      term_3_d: "معلومات معتمدة من جهة الدفع تثبت نجاح العملية وخصم المبلغ من حساب العميل.",
      term_4_t: "المرجع الموحد (RRN)",
      term_4_d: "الرقم المرجعي المشترك الذي يربط نتيجة الدفع بالفاتورة المحددة لدى التاجر.",
      term_5_t: "التسجيل المحاسبي التلقائي",
      term_5_d: "تسجيل مبلغ الفاتورة المسددة في نظام التاجر المحاسبي تلقائيًا عند تفعيل التكامل بدلًا من الإدخال اليدوي.",
      term_6_t: "إشعار السداد",
      term_6_d: "إشعار واضح يصل للتاجر يوضح رقم الفاتورة والمبلغ المسدد ونتيجة العملية فور اكتمالها.",
      term_7_t: "المسار المالي vs مسار المعلومات",
      term_7_d: "الأموال تتحرك مباشرة بين الحسابات البنكية؛ والمنصة مسؤولة فقط عن نقل المعلومات والمطابقة والإشعار.",
      arch_tag: "معمارية الربط والحوكمة المالية",
      arch_title: "أطراف العملية الأربعة — تدفق محكوم دون التباس",
      node_1_t: "العميل",
      node_1_d: "يدفع عبر تطبيق محفظته أو حسابه البنكي المعتمد.",
      node_2_t: "Ultimate Pay (منصة الربط)",
      node_2_d: "التحقق اللحظي، حماية المعاملات، تأكيد النتيجة، وتنسيق المطابقة.",
      node_3_t: "البنك / المحفظة",
      node_3_d: "خصم المبلغ، والتحويل المباشر لحساب التاجر (المسار المالي المستقل).",
      node_4_t: "التاجر ونظام Onyx ERP",
      node_4_d: "إصدار الفاتورة، استلام التأكيد، وتوثيق التحصيل في السجلات وفق التكامل المعتمد.",
      arch_gov_rule: "مبدأ أساسي في الحوكمة: المنصة لا تحتفظ بأموال العملاء ولا تنفّذ التحويل — الحركة المالية من مسؤولية المؤسسة المالية حصرًا، ولا تُفعّل أي قناة دفع دون اعتماد المؤسسة المالية صاحبة الحساب."
    },
    en: {
      toolbar_pitch_mode: "Pitch Mode",
      toolbar_brochure: "Official Booklet",
      header_tagline: "Smart Payments & Financial Switch Ecosystem",
      track_merchants: "For Merchants & Retailers",
      track_banks: "For Banks & Financial Institutions",
      track_ps: "Payment Switch & POS",
      nav_demo: "Live Simulator",
      nav_cta: "Get Started",
      drawer_select_track: "Select Target Track:",
      nav_home: "Home",
      nav_solutions: "Solutions & Value",
      nav_services: "Services & Hardware",
      nav_simulator: "POS Simulator",
      nav_calculator: "ROI Calculator",
      nav_steps: "4-Step Onboarding",
      nav_brochure: "Official PDF Slides",
      nav_contact: "Contact Us",
      nav_aggregator: "Payment Aggregator & R2P",
      nav_ps: "PS System & POS",

      // Merchant Hero
      m_eyebrow: "Yemen's Leading Merchant Acquiring Platform — Licensed by the Central Bank",
      m_hero_title_1: "Never Turn Away a Customer",
      m_hero_title_2: "Accept All Banks & Digital Wallets",
      m_hero_title_3: "Via a Single Terminal & Unified Account",
      m_hero_desc: "Say goodbye to terminal clutter, scattered collection channels, and tedious manual payment entry. With Ultimate Pay, your phone becomes a contactless POS terminal, and paid invoice amounts sync directly into your Onyx ERP system.",
      m_hero_btn_demo: "Test Interactive Demo",
      m_hero_btn_calc: "Calculate Monthly Savings",
      m_trust_1_title: "Officially Licensed",
      m_trust_1_sub: "Central Bank of Yemen",
      m_trust_2_title: "Top-Tier Security",
      m_trust_2_sub: "PCI-DSS Certified",
      m_trust_3_title: "Instant ERP Sync",
      m_trust_3_sub: "Automated Onyx ERP Invoice Sync",

      // Bank Hero
      b_eyebrow: "Bank Acquiring Platform & Merchant Growth Ecosystem",
      b_hero_title_1: "Expand Merchant Reach & Grow Deposits",
      b_hero_title_2: "With a Unified Payment Switch",
      b_hero_title_3: "Zero Hardware Burden or Field Maintenance",
      b_hero_desc: "Your strategic acquiring partner connecting merchants to your bank. Standardized banking integration, automated clearing and settlement, and real-time monitoring compliant with Central Bank directives.",
      b_hero_btn_arch: "Architecture & Clearing",
      b_hero_btn_req: "Request Bank Partnership",
      b_trust_1_title: "Full Compliance",
      b_trust_1_sub: "AML & Smart Fraud Monitoring",
      b_trust_2_title: "Automated Clearing",
      b_trust_2_sub: "Standard Reference Matching & Reports",
      b_trust_3_title: "Full Field Operations",
      b_trust_3_sub: "Merchant Training, Devices & 24/7 SLA",

      // PS Hero
      ps_eyebrow: "Payment Switch (PS) & Smart POS Hardware Ecosystem",
      ps_hero_title_1: "Next-Gen Point-of-Sale Terminals",
      ps_hero_title_2: "From Tap-to-Phone Soft POS",
      ps_hero_title_3: "To High-Speed Android POS & Card Schemes",
      ps_hero_desc: "Omni-channel payment infrastructure: Turn Android phones into secure contactless POS terminals, deploy rugged thermal printer handhelds, or collect remotely via Dynamic QR and WhatsApp Payment Links.",
      ps_hero_btn_devices: "Explore Hardware & Tech",
      ps_hero_btn_sim: "Simulate Soft POS Tap",
      ps_trust_1_title: "Soft POS (Tap to Phone)",
      ps_trust_1_sub: "Zero Additional Hardware Cost",
      ps_trust_2_title: "Smart Android POS",
      ps_trust_2_sub: "Built-in Thermal Printer, 4G & Dual Sim",
      ps_trust_3_title: "QR & Payment Links",
      ps_trust_3_sub: "Secure QR & WhatsApp Invoicing",

      switch_banner_prompt: "Viewing Mode:",

      tag_why_us: "Why Top Retailers Choose Us",
      prob_title_1: "The Clear Contrast Between",
      prob_title_2: "Chaotic Legacy Cash Collection",
      prob_title_3: "And the Intelligent Ultimate Pay Platform",
      prob_subtitle: "Engineered specifically to solve everyday friction in the Yemeni market: cashier exhaustion, lost sales, and late liquidity transfers.",
      card_pain_badge: "Without Ultimate Pay (Daily Headache)",
      pain_1_t: "Lost Customer Sales",
      pain_1_d: "Customers walk away when you cannot accept their specific wallet or bank card at checkout.",
      pain_2_t: "Multiple Cluttered Screens",
      pain_2_d: "Different phones and apps for every wallet, slow checkout queues, and frequent cashier manual errors.",
      pain_3_t: "Nightmarish Reconciliation",
      pain_3_d: "Hours wasted after closing matching SMS notifications with paper register receipts and manual entries.",
      pain_4_t: "Fragmented Cash & Security Risks",
      pain_4_d: "Funds scattered across 5 different wallets and physical cash drawers, risking counterfeit and theft.",

      card_gain_badge: "With Ultimate Pay (Peace of Mind & Profit)",
      gain_1_t: "Single All-in-One POS",
      gain_1_d: "Accept Kuraimi, Jaib, Jawwal Pay, Cash, M-Flous, and all bank cards through one single phone or terminal.",
      gain_2_t: "One-Tap Instant Collection",
      gain_2_d: "Collect via NFC Tap-to-Phone or dynamic QR coded to the exact invoice total, eliminating cashier typing errors.",
      gain_3_t: "Automated Accounting Sync in Onyx ERP",
      gain_3_d: "Payment confirmation automatically records invoice amounts in your accounting ERP upon integration, replacing manual entry.",
      gain_4_t: "Instant Payment Alert & Direct Funds Flow",
      gain_4_d: "Receive clear notifications with invoice ID and settled amount, while funds transfer directly to your merchant account.",

      tag_simulator: "Interactive Live Demo",
      sim_title_1: "Experience First-Hand:",
      sim_title_2: "How Effortless Payments Are",
      sim_title_3: "In Under 3 Seconds",
      sim_subtitle: "Choose a payment method below and trigger an interactive collection transaction right in your browser.",
      sim_tab_softpos: "Soft POS (Tap to Phone)",
      sim_tab_qr: "Dynamic QR Code",
      sim_tab_link: "Payment Link (WhatsApp)",
      sim_tab_pos: "Smart Android POS",
      sim_enter_amount: "Enter Invoice Amount:",
      sim_inv_no: "Invoice #:",
      sim_customer: "Customer:",
      sim_walkin: "Walk-in Retail Customer",
      sim_processing_title: "Routing via Ultimate Payment Switch...",
      sim_processing_sub: "PCI-DSS security encryption & instant bank clearing",
      sim_success_title: "Payment Approved!",
      sim_new_txn: "Run Another Test",
      sim_exp_title: "What Happens Behind the Scenes?",
      sim_exp_desc: "A complex multi-party financial transaction simplified into an instant, secure delight for merchants:",
      b_step_1_t: "Real-time Security Verification",
      b_step_1_d: "Full end-to-end PCI-DSS encryption with automated fraud scoring and duplicate transaction protection.",
      b_step_2_t: "Intelligent Switch Routing",
      b_step_2_d: "Sub-2-second latency routing to the issuer bank or digital wallet network.",
      b_step_3_t: "Instant Onyx ERP Sync",
      b_step_3_d: "Automatic invoice amount recorded in merchant accounting system upon verified payment and active integration.",
      b_step_4_t: "Payment Alert & Notification",
      b_step_4_d: "Clear notification delivered to the merchant detailing invoice ID, amount, and payment status, while funds flow directly to merchant account.",

      calc_tag: "Merchant Value & ROI Calculator",
      calc_title_1: "How Much Do You Save",
      calc_title_2: "With Ultimate Pay?",
      calc_desc: "Adjust the sliders below to reveal the actual hours and operational costs your business will save every month:",
      calc_lbl_txns: "Average Daily Transactions Across Branches:",
      calc_lbl_branches: "Number of Branches / POS Lanes:",
      calc_lbl_avg: "Average Ticket Value:",
      calc_results_head: "Estimated Monthly Business Impact",
      calc_time_saved: "Accounting Hours Saved / Month:",
      calc_time_note: "No more manual reconciliations or late-night ledger checks.",
      calc_error_drop: "Reduction in Discrepancies & Cash Shortage:",
      calc_error_note: "Exact invoice amounts transferred directly to your ERP general ledger.",
      calc_sales_boost: "Estimated Sales Uplift (No Lost Customers):",
      calc_sales_note: "Every customer can pay with their preferred bank or mobile wallet.",
      calc_cta_btn: "Activate Your Branches Now",

      tag_services: "Comprehensive Fintech Suite",
      serv_title_1: "Tailored Solutions for Every Channel:",
      serv_title_2: "From Brick-and-Mortar Retail",
      serv_title_3: "To Banking & E-Commerce",
      serv_subtitle: "Inspired by global best practices and adapted perfectly for the Yemeni financial infrastructure.",
      s1_badge: "Most Innovative",
      s1_name: "Soft POS (Tap-to-Phone)",
      s1_desc: "Transform any NFC-enabled Android phone into an EMV contactless payment terminal. Accept cards and mobile wallets with zero extra hardware cost.",
      s1_f1: "Zero hardware investment",
      s1_f2: "Ideal for couriers, delivery agents, and boutique retailers",
      s1_f3: "Full PCI-CPoC and EMV compliant encryption",

      s2_badge: "High Volume Lanes",
      s2_name: "Smart Android POS Terminals",
      s2_desc: "Dedicated rugged hardware featuring high-speed touchscreens, integrated thermal receipt printing, chip & magnetic readers, and QR scanners.",
      s2_f1: "Always connected via 4G LTE & Wi-Fi",
      s2_f2: "Instant paper receipt printing + optional SMS e-receipts",
      s2_f3: "Heavy-duty battery built for long shifts",

      s3_badge: "Fast & Touchless",
      s3_name: "Dynamic & Static QR Codes",
      s3_desc: "Dynamic QR generated directly on cashier screens containing the exact invoice amount, or static counter displays for quick self-scanning.",
      s3_f1: "Eliminates buyer typing errors completely",
      s3_f2: "Compatible with all mobile banking & wallet apps",
      s3_f3: "Instant visual and audio payment confirmation",

      s4_badge: "Remote Commerce",
      s4_name: "Instant Payment Links",
      s4_desc: "Generate secure branded payment links in seconds and share them via WhatsApp, SMS, or social media—no e-commerce website required.",
      s4_f1: "Custom amounts, invoice memos, and expiry timers",
      s4_f2: "Professional mobile checkout page with your business logo",
      s4_f3: "Ideal for phone orders, wholesale, and social sellers",

      s5_badge: "E-Commerce",
      s5_name: "Online Payment Gateway",
      s5_desc: "Frictionless checkout integrations for websites and mobile applications with pre-built plugins for approved e-commerce platforms.",
      s5_f1: "Frictionless in-app checkout experience",
      s5_f2: "Built-in 3D-Secure authentication",
      s5_f3: "Comprehensive developer docs and sandbox environment",

      s6_badge: "Core Backbone",
      s6_name: "Merchant Portal & Onyx ERP Sync",
      s6_desc: "Unified cloud dashboard monitoring sales and invoice statuses, automatically recording settled invoice amounts in Onyx ERP per approved integration.",
      s6_f1: "Automated invoice amount recording in accounting system per approved integration",
      s6_f2: "Real-time invoice matching and transaction reports",
      s6_f3: "Multi-branch permissions and role management",

      bank_section_tag: "Acquiring & Banking Solutions",
      bank_title_1: "Why Ultimate Pay is the",
      bank_title_2: "Optimal Acquiring Partner for Banks",
      bank_lead: "Ultimate Pay connects payment transaction results with merchant accounting systems, delivering clear notifications upon invoice settlement. This reduces manual entry, improves transaction transparency for merchants, and facilitates matching results with invoices under approved financial integration scope.",
      bf_1_t: "Direct Growth in Bank Transaction Volume",
      bf_1_d: "Merchant sales transfer directly to merchant accounts held at your bank, enhancing financial velocity and commercial client loyalty.",
      bf_2_t: "Standardized Financial Switching",
      bf_2_d: "Standardized integration mechanisms fully compliant with approved banking procedures and core requirements.",
      bf_3_t: "Structured Invoice Matching & Audit",
      bf_3_d: "Reference-based matching reports preventing discrepancies and facilitating transparent financial auditing for merchants.",
      bf_4_t: "Real-time AML & Fraud Prevention",
      bf_4_d: "Continuous anomaly detection and automated blocking to safeguard bank assets and depositor confidence.",
      bank_box_kpi: "System Reliability & Performance",
      kpi_uptime: "High Availability Operating Uptime",
      kpi_latency: "Average Switch Processing Latency",
      kpi_pci: "PCI-DSS Global Security Certified",
      kpi_cby: "Officially Licensed by Central Bank of Yemen",
      bank_cta_btn: "Request Bank Integration Dossier",

      tag_onboarding: "Simple & Fast Onboarding",
      step_title_1: "Only 4 Quick Steps",
      step_title_2: "To Start Accepting Payments",
      step_title_3: "Across Your Stores",
      step_subtitle: "Zero bureaucratic delays. Our technical and field deployment team guides you from registration to your first transaction.",
      st1_title: "Registration & Profile Submission",
      st1_desc: "Provide commercial registration and designated merchant bank account details.",
      st2_title: "Account Provisioning & Configuration",
      st2_desc: "We configure your merchant portal, branches, cashier IDs, and user roles.",
      st3_title: "Device Setup & ERP Linking",
      st3_desc: "Deploy the Soft POS app to staff phones or deliver Android POS terminals connected to Onyx ERP.",
      st4_title: "Live Collection & Alerts",
      st4_desc: "Collect payments seamlessly, receive instant notifications, and view direct funds flow into your merchant account.",

      tag_brochure: "Official Corporate Presentation Booklet",
      bf_title_1: "Browse the Official Presentation",
      bf_title_2: "Of Ultimate Pay Company",
      bf_desc: "Inspect the 23 verified, high-resolution presentation slides from the company's printed corporate presentation dossier during your partner and executive meetings.",
      bf_btn_open: "Open Interactive Slide Viewer",
      bf_hint: "Click to enlarge and explore all 23 slides",
      modal_b_title: "Ultimate Pay Official Corporate Dossier",

      // CTA Form & Direct WhatsApp
      wa_cta_tag: "Instant & Direct Contact",
      wa_cta_t1: "Start Now & Reach Us Directly",
      wa_cta_t2: "Via Instant WhatsApp Chat",
      wa_cta_sub: "Whether you are a merchant looking to activate POS and integrate with Onyx ERP, or a bank seeking acquiring scale; chat directly with our sales and activation specialist at: 782665485",
      wa_hero_btn: "Chat with Us on WhatsApp (782665485)",
      wa_chip_1: "Instant Response",
      wa_chip_2: "POS Setup & Consultation",
      wa_chip_3: "24/7 Dedicated Support",
      floating_wa_label: "Chat via WhatsApp <strong>782665485</strong>",
      cta_tag: "Accelerate Your Business Today",
      cta_t1: "Ready to Transform Your Payment Collection?",
      cta_t2: "Get in Touch with Ultimate Pay Today",
      cta_sub: "Whether you are a retailer wanting to multiply sales and unify collection, or a bank seeking merchant acquiring scale, we are ready to assist you.",
      form_lbl_type: "You represent:",
      form_opt_merchant: "Merchant / Retail Business",
      form_opt_bank: "Bank / Financial Institution",
      form_opt_pos: "POS & Technology Partner",
      form_lbl_name: "Name / Company Name:",
      form_lbl_phone: "Phone / WhatsApp Number:",
      form_lbl_city: "City / Region:",
      form_lbl_need: "Required Service or Needs:",
      form_btn_submit: "Submit Request & Book a Demo",
      form_succ_t: "Thank you for reaching out to Ultimate Pay!",
      form_succ_d: "Your inquiry has been received. Our financial consultant will contact you shortly to arrange onboarding.",
      c_licensed: "Licensed by Central Bank of Yemen",
      footer_desc: "Yemen's premier smart payment and merchant acquiring financial switch network.",

      // Accounting Cycle & Workflow
      nav_cycle: "Accounting Cycle",
      tag_cycle: "Real Workflow & Accounting Cycle",
      cycle_title_1: "From Invoice Creation",
      cycle_title_2: "To Ledger Sync",
      cycle_title_3: "End-to-End Transparency",
      cycle_subtitle: "With Ultimate Pay, payments link directly to your invoices and accounting system. When a customer settles an invoice, payment confirmation reaches the platform, the amount is automatically logged in your accounting system upon integration, and a clear notification is delivered to the merchant stating invoice number and paid amount.",
      cycle_ex_title: "Practical Retail Walkthrough:",
      cycle_ex_sub: "Cash sales invoice of 5,000 YER (#INV-5001)",
      cycle_ex_badge: "5,000 YER • Practical Case Study",
      c_step_1_role: "Step 1",
      c_step_1_t: "Sale & Invoice Creation",
      c_step_1_d: "The merchant completes the sale and issues the invoice in their system, requesting payment from the customer via the available payment channel.",
      c_step_1_actor: "Merchant System / POS",
      c_step_1_st: "Pending Payment",
      c_step_1_view: "Invoice with Unique ID",
      c_step_2_role: "Step 2",
      c_step_2_t: "Customer Payment & Direct Transfer",
      c_step_2_d: "The customer pays the invoice balance; funds transfer directly from customer account to merchant account without intermediate fund holding by the platform.",
      c_step_2_actor: "Direct Account-to-Account Transfer",
      c_step_2_st: "Platform Holds Zero Funds",
      c_step_2_view: "Authorized Banking Entity",
      c_step_3_role: "Step 3",
      c_step_3_t: "Result Reaches Platform",
      c_step_3_d: "Verified payment confirmation arrives at Ultimate Pay platform from the payment entity with the authorized reference number (RRN).",
      c_step_3_actor: "Information & Confirmation Track",
      c_step_3_st: "Confirmed by Payment Entity",
      c_step_3_view: "Standard Reference Number (RRN)",
      c_step_4_role: "Step 4",
      c_step_4_t: "Invoice Matching",
      c_step_4_d: "Transaction result is verified and matched against the specific merchant invoice using reference data, validating exact amount agreement.",
      c_step_4_actor: "Matching Result to Invoice",
      c_step_4_st: "Matched & Validated",
      c_step_4_view: "Confirmed Sales Linking",
      c_step_5_role: "Step 5",
      c_step_5_t: "Automated Accounting Entry",
      c_step_5_d: "Upon payment confirmation, the system integrates with the merchant's ERP (e.g., Onyx) to record the amount automatically, replacing manual entry.",
      c_step_5_actor: "Auto-Recorded in Accounting",
      c_step_5_st: "Subject to Active Integration",
      c_step_5_view: "Eliminating Manual Ledger Entry",
      c_step_6_role: "Step 6",
      c_step_6_t: "Merchant Notification",
      c_step_6_d: "A clear notification is delivered to the merchant stating invoice number, amount paid, and transaction status for effortless invoice tracking.",
      c_step_6_actor: "Merchant / Cashier / Accountant",
      c_step_6_st: "Invoice ID, Amount & Status",
      c_step_6_view: "Instant Confident Handover",
      flow_financial_title: "Financial Track (Direct Funds Flow)",
      flow_financial_desc: "Funds transfer directly from customer account to merchant account at authorized financial institution with zero platform custody",
      f_step_1_t: "Merchant Sale & Invoice",
      f_step_1_d: "Record invoice in merchant system",
      f_step_2_t: "Customer Pays Invoice",
      f_step_2_d: "Payment via customer channel",
      f_step_3_t: "Direct Funds Transfer",
      f_step_3_d: "Direct from customer to merchant",
      flow_divider_note: "Payment confirmation immediately routes into the Information and Integration track",
      flow_info_title: "Information & Notification Track",
      flow_info_desc: "Payment result reaches platform, matches invoice, records amount in accounting, and notifies merchant",
      i_step_1_t: "Result Reaches Platform",
      i_step_1_d: "Confirmation from payment entity",
      i_step_2_t: "Matching Result to Invoice",
      i_step_2_d: "Matching ID, reference & amount",
      i_step_3_t: "Automated Accounting Sync",
      i_step_3_d: "In merchant ERP per active integration",
      i_step_4_t: "Merchant Notification",
      i_step_4_d: "Invoice ID, amount & result status",

      c_lbl_actor: "Responsible:",
      c_lbl_status: "Status / Impact:",
      c_lbl_view: "Output / View:",
      c_warn_title: "Core Architecture Principle: Separation of Tracks:",
      c_warn_desc: "Funds transfer directly from customer account to merchant account via the approved payment entity. Ultimate Pay never holds, receives, or transfers customer funds. Automatic recording of invoice amounts in the merchant accounting system reflects verified payment data to eliminate manual entry, not an indication that the platform moved funds.",
      dis_title: "Terminology Guide: Absolute Document Clarity",
      dis_subtitle: "Eliminating confusion between technical and accounting documents in daily operations:",
      term_1_t: "Sales Invoice",
      term_1_d: "Commercial sale document from cashier listing items and total amount due.",
      term_2_t: "Request to Pay (R2P)",
      term_2_d: "Dynamic QR or link sent to customer requesting the exact invoice balance.",
      term_3_t: "Confirmed Payment Result",
      term_3_d: "Official confirmation from payment provider proving successful transaction and debit from customer account.",
      term_4_t: "Unified Reference (RRN)",
      term_4_d: "Shared reference number linking payment confirmation directly to the specific merchant invoice.",
      term_5_t: "Automated Accounting Sync",
      term_5_d: "Automatic recording of paid invoice amount into merchant ERP upon active integration, replacing manual entry.",
      term_6_t: "Payment Notification",
      term_6_d: "Clear alert delivered to merchant detailing invoice ID, settled amount, and payment outcome immediately.",
      term_7_t: "Financial Flow vs. Information Flow",
      term_7_d: "Funds move directly between banking accounts; the platform is solely responsible for data transmission, matching, and alerting.",
      arch_tag: "Switch Architecture & Governance",
      arch_title: "The Four Ecosystem Parties — Controlled Flow",
      node_1_t: "Customer",
      node_1_d: "Pays via approved mobile wallet or bank app.",
      node_2_t: "Ultimate Pay (Switch Hub)",
      node_2_d: "Real-time verification, security controls, result confirmation, and reconciliation coordination.",
      node_3_t: "Bank / Wallet",
      node_3_d: "Debits customer account and executes direct transfer to merchant account (Independent Financial Track).",
      node_4_t: "Merchant & Onyx ERP",
      node_4_d: "Issues invoice, receives confirmation, and documents collection in records per approved integration.",
      arch_gov_rule: "Strict Governance Rule: The platform never holds customer funds and never wires money directly — financial movement is strictly managed by designated banking institutions."
    }
  };

  let currentLang = 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    const body = document.body;
    body.setAttribute('data-lang', lang);
    body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (dict[key].includes('<')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    const langBtnLabel = document.getElementById('currentLangLabel');
    if (langBtnLabel) {
      langBtnLabel.textContent = lang === 'ar' ? 'EN' : 'العربية';
    }

    const drawerLangLabel = document.getElementById('drawerLangLabel');
    if (drawerLangLabel) {
      drawerLangLabel.textContent = lang === 'ar' ? 'English (Switch to English)' : 'العربية (التحويل للعربية)';
    }

    // Refresh simulator preview text
    updateSimModePreview(currentSimMode);
    // Refresh calculator outputs
    updateCalculator();
  }

  const btnToggleLang = document.getElementById('btnToggleLang');
  if (btnToggleLang) {
    btnToggleLang.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  const btnDrawerLang = document.getElementById('btnDrawerLang');
  if (btnDrawerLang) {
    btnDrawerLang.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // ==========================================
  // 2. Track Switcher Logic (Merchants / Banks / PS)
  // ==========================================
  const trackButtons = document.querySelectorAll('.track-btn, .track-pill, .drawer-track-btn');
  const heroMerchants = document.getElementById('heroMerchants');
  const heroBanks = document.getElementById('heroBanks');
  const heroPS = document.getElementById('heroPS');
  const bankSection = document.getElementById('bankPartnership');

  function setActiveTrack(trackId) {
    document.body.setAttribute('data-track', trackId);

    // Update button states
    trackButtons.forEach(btn => {
      if (btn.getAttribute('data-target') === trackId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Switch Hero Section
    if (heroMerchants) heroMerchants.style.display = (trackId === 'merchants') ? 'block' : 'none';
    if (heroBanks) heroBanks.style.display = (trackId === 'banks') ? 'block' : 'none';
    if (heroPS) heroPS.style.display = (trackId === 'ps') ? 'block' : 'none';

    // Highlight bank section if bank track selected
    if (trackId === 'banks' && bankSection) {
      bankSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (trackId === 'ps') {
      const psSection = document.getElementById('psSection');
      if (psSection) {
        psSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  trackButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget.getAttribute('data-target');
      if (target) {
        setActiveTrack(target);
      }
    });
  });

  // ==========================================
  // 3. Interactive Payment Simulator
  // ==========================================
  let currentSimMode = 'softpos';
  const simTabs = document.querySelectorAll('.sim-tab');
  const simModeDisplay = document.getElementById('simModeDisplay');
  const simInputAmount = document.getElementById('simInputAmount');
  const btnExecuteSim = document.getElementById('btnExecuteSim');
  const btnSimReset = document.getElementById('btnSimReset');
  const simStepInput = document.getElementById('simStepInput');
  const simStepProcessing = document.getElementById('simStepProcessing');
  const simStepSuccess = document.getElementById('simStepSuccess');
  const receiptAmountDisplay = document.getElementById('receiptAmountDisplay');
  const receiptMethod = document.getElementById('receiptMethod');
  const receiptRrn = document.getElementById('receiptRrn');
  const receiptTime = document.getElementById('receiptTime');
  const heroLiveAmount = document.getElementById('heroLiveAmount');

  function updateSimModePreview(mode) {
    currentSimMode = mode;
    simTabs.forEach(t => {
      if (t.getAttribute('data-mode') === mode) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    const isAr = currentLang === 'ar';

    if (mode === 'softpos') {
      simModeDisplay.innerHTML = `
        <i class="fa-solid fa-mobile-screen-button"></i>
        <p>${isAr ? 'تقنية Soft POS اللاتلامسية' : 'Contactless Soft POS (Tap to Phone)'}</p>
        <small>${isAr ? 'قرّب بطاقة العميل أو هاتفه من ظهر جوالك' : 'Hold customer card or phone near device back'}</small>
      `;
    } else if (mode === 'qr') {
      simModeDisplay.innerHTML = `
        <i class="fa-solid fa-qrcode"></i>
        <p>${isAr ? 'رمز QR ديناميكي بقيمة الفاتورة' : 'Dynamic QR with Exact Total'}</p>
        <small>${isAr ? 'يمسحه العميل بتطبيق بنكه أو محفظته (كريمي، جيب، جوال باي...)' : 'Scanned by customer using Kuraimi, Jaib, etc.'}</small>
      `;
    } else if (mode === 'link') {
      simModeDisplay.innerHTML = `
        <i class="fa-solid fa-link"></i>
        <p>${isAr ? 'رابط دفع واتساب / SMS مشفر' : 'Instant WhatsApp / SMS Payment Link'}</p>
        <small>${isAr ? 'يتم إرساله للعميل للشراء والدفع عن بُعد' : 'Sent to remote buyer to complete payment securely'}</small>
      `;
    } else if (mode === 'pos') {
      simModeDisplay.innerHTML = `
        <i class="fa-solid fa-print"></i>
        <p>${isAr ? 'جهاز أندرويد POS الذكي' : 'Smart Android POS Terminal'}</p>
        <small>${isAr ? 'دفع سريع وطباعة إيصال ورقي فوري' : 'Instant thermal receipt print & 4G sync'}</small>
      `;
    }
  }

  simTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const mode = tab.getAttribute('data-mode');
      updateSimModePreview(mode);
    });
  });

  // Initial preview
  updateSimModePreview('softpos');

  if (simInputAmount) {
    simInputAmount.addEventListener('input', () => {
      const val = parseInt(simInputAmount.value) || 0;
      if (heroLiveAmount) {
        heroLiveAmount.textContent = val.toLocaleString();
      }
    });
  }

  if (btnExecuteSim) {
    btnExecuteSim.addEventListener('click', () => {
      const amt = parseInt(simInputAmount.value) || 18500;
      
      // Step 1 -> 2
      simStepInput.style.display = 'none';
      simStepProcessing.style.display = 'flex';

      setTimeout(() => {
        // Step 2 -> 3
        simStepProcessing.style.display = 'none';
        simStepSuccess.style.display = 'flex';

        if (receiptAmountDisplay) {
          receiptAmountDisplay.textContent = `${amt.toLocaleString()} YER`;
        }
        if (receiptRrn) {
          receiptRrn.textContent = Math.floor(1000000000 + Math.random() * 9000000000);
        }
        if (receiptTime) {
          const now = new Date();
          receiptTime.textContent = now.toLocaleTimeString();
        }
        if (receiptMethod) {
          const names = {
            softpos: currentLang === 'ar' ? 'Soft POS (NFC Tap-to-Phone)' : 'Soft POS (NFC Tap)',
            qr: currentLang === 'ar' ? 'رمز QR ديناميكي للمحافظ' : 'Dynamic QR Code',
            link: currentLang === 'ar' ? 'رابط دفع واتساب مشفر' : 'WhatsApp Payment Link',
            pos: currentLang === 'ar' ? 'جهاز Android POS الذكي' : 'Smart Android POS'
          };
          receiptMethod.textContent = names[currentSimMode] || 'Contactless';
        }
      }, 1600);
    });
  }

  if (btnSimReset) {
    btnSimReset.addEventListener('click', () => {
      simStepSuccess.style.display = 'none';
      simStepProcessing.style.display = 'none';
      simStepInput.style.display = 'block';

      // Increment invoice number
      const simInvNo = document.getElementById('simInvNo');
      if (simInvNo) {
        simInvNo.textContent = `#UP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      }
    });
  }

  // ==========================================
  // 4. Merchant ROI & Time-Saving Calculator
  // ==========================================
  const rangeTxn = document.getElementById('rangeTxn');
  const rangeBranch = document.getElementById('rangeBranch');
  const rangeAvgTicket = document.getElementById('rangeAvgTicket');

  const valTxnCount = document.getElementById('valTxnCount');
  const valBranchCount = document.getElementById('valBranchCount');
  const valAvgTicket = document.getElementById('valAvgTicket');

  const resHoursSaved = document.getElementById('resHoursSaved');
  const resErrorDrop = document.getElementById('resErrorDrop');
  const resSalesBoost = document.getElementById('resSalesBoost');

  function updateCalculator() {
    if (!rangeTxn || !rangeBranch || !rangeAvgTicket) return;

    const txns = parseInt(rangeTxn.value);
    const branches = parseInt(rangeBranch.value);
    const avg = parseInt(rangeAvgTicket.value);
    const isAr = currentLang === 'ar';

    valTxnCount.textContent = isAr ? `${txns} عملية / يوم` : `${txns} txns / day`;
    valBranchCount.textContent = isAr ? `${branches} فروع / نقاط` : `${branches} branches`;
    valAvgTicket.textContent = isAr ? `${avg.toLocaleString()} ريال` : `${avg.toLocaleString()} YER`;

    // Estimation formulas:
    // Manual reconciliation time: ~1.5 min saved per 10 transactions across branches
    const totalDailyTxns = txns * branches;
    const hoursSavedPerMonth = Math.round((totalDailyTxns * 1.2 * 30) / 60);

    resHoursSaved.textContent = isAr ? `${hoursSavedPerMonth} ساعة / شهر` : `${hoursSavedPerMonth} hours / month`;
    resErrorDrop.textContent = '98.5%';
    resSalesBoost.textContent = isAr ? '+ 18% إلى 25%' : '+ 18% to 25%';
  }

  [rangeTxn, rangeBranch, rangeAvgTicket].forEach(input => {
    if (input) {
      input.addEventListener('input', updateCalculator);
    }
  });

  updateCalculator();

  // ==========================================
  // 5. Official Presentation Brochure Lightbox
  // (Deactivated from public website - reserved for the official opening ceremony)
  // ==========================================

  // ==========================================
  // 6. Presentation / Meeting Fullscreen Mode
  // ==========================================
  const btnToggleFullscreen = document.getElementById('btnToggleFullscreen');
  if (btnToggleFullscreen) {
    btnToggleFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.warn(`Fullscreen error: ${err.message}`);
        });
        btnToggleFullscreen.innerHTML = '<i class="fa-solid fa-compress"></i>';
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        btnToggleFullscreen.innerHTML = '<i class="fa-solid fa-expand"></i>';
      }
    });
  }

  // ==========================================
  // 7. Mobile Navigation Drawer
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  function openMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileDrawer);

  document.querySelectorAll('.drawer-link').forEach(l => {
    if (!l.classList.contains('open-brochure-link')) {
      l.addEventListener('click', closeMobileDrawer);
    }
  });

  // ==========================================
  // 8. Contact Pitch Lead Form
  // ==========================================
  const contactPitchForm = document.getElementById('contactPitchForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (contactPitchForm) {
    contactPitchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const type = document.getElementById('clientType').value;
      const name = document.getElementById('clientName').value;
      const phone = document.getElementById('clientPhone').value;
      const city = document.getElementById('clientCity').value;
      const need = document.getElementById('clientNeed').value;

      console.log('Lead Captured:', { type, name, phone, city, need });

      contactPitchForm.style.display = 'none';
      if (formSuccessAlert) {
        formSuccessAlert.style.display = 'flex';
      }
    });
  }

  // ==========================================
  // 9. Theme Toggle Logic (Dark / Light)
  // ==========================================
  const btnToggleTheme = document.getElementById('btnToggleTheme');
  const btnHeaderTheme = document.getElementById('btnHeaderTheme');
  const btnDrawerTheme = document.getElementById('btnDrawerTheme');
  const themeIcon = document.getElementById('themeIcon');
  const headerThemeIcon = document.getElementById('headerThemeIcon');
  const drawerThemeIcon = document.getElementById('drawerThemeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const drawerThemeLabel = document.getElementById('drawerThemeLabel');

  function toggleTheme() {
    const isDark = document.body.classList.contains('theme-dark');
    if (isDark) {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
      if (headerThemeIcon) headerThemeIcon.className = 'fa-solid fa-moon';
      if (drawerThemeIcon) drawerThemeIcon.className = 'fa-solid fa-moon';
      if (themeLabel) themeLabel.textContent = currentLang === 'ar' ? 'ليلي' : 'Dark';
      if (drawerThemeLabel) drawerThemeLabel.textContent = currentLang === 'ar' ? 'المظهر الليلي (الفخم)' : 'Dark Luxury Theme';
      localStorage.setItem('ultimate_pay_theme', 'light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
      if (headerThemeIcon) headerThemeIcon.className = 'fa-solid fa-sun';
      if (drawerThemeIcon) drawerThemeIcon.className = 'fa-solid fa-sun';
      if (themeLabel) themeLabel.textContent = currentLang === 'ar' ? 'نهاري' : 'Light';
      if (drawerThemeLabel) drawerThemeLabel.textContent = currentLang === 'ar' ? 'المظهر النهاري (أخضر وأبيض)' : 'Light Clean Theme';
      localStorage.setItem('ultimate_pay_theme', 'dark');
    }
  }

  if (btnToggleTheme) btnToggleTheme.addEventListener('click', toggleTheme);
  if (btnHeaderTheme) btnHeaderTheme.addEventListener('click', toggleTheme);
  if (btnDrawerTheme) btnDrawerTheme.addEventListener('click', toggleTheme);

  // Restore saved theme
  const savedTheme = localStorage.getItem('ultimate_pay_theme');
  if (savedTheme === 'light') {
    toggleTheme();
  }

});

// ==========================================
// Merchant Portal Tabs & Lightbox Modal
// ==========================================
window.switchMerchantTab = function(tabId, btn) {
  document.querySelectorAll('.merchant-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  } else {
    const targetBtn = document.querySelector(.merchant-tab-btn[data-tab=" + tabId + "]);
    if (targetBtn) targetBtn.classList.add('active');
  }

  document.querySelectorAll('.merchant-service-panel').forEach(p => p.classList.remove('active'));
  const targetPanel = document.getElementById(tabId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
};

window.openImageModal = function(src, caption) {
  const modal = document.getElementById('imageLightboxModal');
  const modalImg = document.getElementById('lightboxModalImg');
  const modalCaption = document.getElementById('lightboxModalCaption');
  if (modal && modalImg) {
    modalImg.src = src;
    if (modalCaption) modalCaption.textContent = caption || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeImageModal = function() {
  const modal = document.getElementById('imageLightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeImageModal();
  }
});
