/**
 * Ultimate Pay — Interactive Fintech Portfolio Application Script
 * Features:
 * 1. Track Switcher (Merchants, Banks, PS System)
 * 2. Interactive Payment Information Flow & ERP Sync Simulator
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
      nav_about: 'من نحن',
      nav_why: 'لماذا نحن',
      abt_tag: 'الملف التعريفي المعتمد للشركة',
      abt_lic: 'مرخص رسمياً من البنك المركزي اليمني',
      abt_title_1: 'من نحن: شركة مالية مرخصة',
      abt_title_2: 'تعمل في قلب منظومة الدفع الرقمي',
      abt_lead: 'Ultimate Pay منصة لربط وتجميع المدفوعات (Payment Aggregator) وتوفير التكامل بين قنوات الدفع والتجار، مع إمكانية التكامل مع الأنظمة المحاسبية مثل Onyx ERP بحسب ما يدعمه التكامل. نسد الفجوة بين وسائل الدفع المتعددة والأنشطة التجارية لتسهيل تتبع العمليات وربطها بالفواتير، دون احتجاز أموال أو التدخل في الأرصدة المصرفية.',
      abt_role_t: 'الدور المحوري (Our Role)',
      abt_role_d: 'تربط Ultimate Pay نتائج الدفع بالفواتير والأنظمة المحاسبية للتجار. وعند تأكيد نجاح السداد، تُحدَّث بيانات الفاتورة محاسبيًا تلقائيًا، ويصل إشعار واضح للتاجر بعملية الدفع، بينما تنتقل الأموال مباشرة من حساب العميل إلى حساب التاجر لدى جهة الدفع.',
      abt_sol_t: 'ما تعالجه المنصة',
      abt_sol_d: 'القضاء على تشتت متابعة إشعارات السداد، وتجنب الإدخال اليدوي لبيانات الدفعات، والحد من أخطاء مطابقة الفواتير في النظام المحاسبي.',
      abt_val_t: 'قيمنا المؤسسية المعتمدة',
      abt_val_sub: 'مبادئنا الثابتة كما وردت في الدليل الرسمي للشركة:',
      val_1: 'الأمانة',
      val_2: 'الشفافية',
      val_3: 'المصداقية',
      val_4: 'النزاهة والامتثال',
      why_tag: 'لماذا Ultimate Pay؟ • ركائز القوة والتميز',
      why_t1: '6 أسباب استراتيجية تجعلنا الخيار الحتمي',
      why_t2: 'لكل تاجر يبحث عن الأمان ونمو المبيعات',
      why_sub: 'صُممت هذه الركائز من واقع متطلبات السوق اليمني لتمنحك تفوقاً عملياً وتغلق كل أبواب التشتت والاحتيال:',
      why_b1: 'ربط موحد',
      why_c1_t: 'منظومة ربط موحدة',
      why_c1_d: 'واجهة تقنية واحدة لربط نتائج الدفع بالفواتير وأنظمة ERP للتاجر، بدل المتابعة اليدوية المتفرقة والإدخال اليدوي المرهق.',
      why_c1_f: 'توفير إداري وتشغيلي فوري',
      why_b2: 'ترخيص CBY رسمي',
      why_c2_t: 'شركة مالية مرخصة رسمياً',
      why_c2_d: 'تعمل تحت إشراف وتنظيم البنك المركزي اليمني، ملتزمة بضوابط حماية البيانات وسرية المعاملات المالية المعتمدة.',
      why_c2_f: 'أمان وموثوقية مصرفية كاملة',
      why_b3: 'حوكمة منضبطة',
      why_c3_t: 'إدارة بيانات وسائل الدفع واعتمادها',
      why_c3_d: 'يقدّم التاجر بيانات نقاط الدفع والمحافظ عبر بوابته، وتخضع للمراجعة والاعتماد وفق الصلاحيات والإجراءات المعتمدة لدى الجهة المالية.',
      why_c3_f: 'تدفق اعتماد رسمي ومنضبط',
      why_b4: 'أتمتة محاسبية حقيقية',
      why_c4_t: 'تكامل محاسبي مع أنظمة التاجر (مثل Onyx ERP)',
      why_c4_d: 'عند تأكيد نجاح السداد، تُحدَّث بيانات الفاتورة محاسبيًا تلقائيًا، لتقليل الإدخال اليدوي وضمان وضوح حالة الفواتير.',
      why_c4_f: 'مطابقة تامة ومنع عجز الصناديق',
      why_b5: 'تأكيد موثوق',
      why_c5_t: 'تأكيد فوري للعمليات وحماية المبيعات',
      why_c5_d: 'تأكيد موثوق لنتيجة الدفع يظهر مباشرة على شاشة الكاشير برقم مرجع معتمد؛ يقضي على الاعتماد على لقطات الشاشة ورسائل SMS غير الموثقة.',
      why_c5_f: 'الكاشير يعتمد على شاشته فقط',
      why_b6: 'أموالك في أمان',
      why_c6_t: 'فصل صارم للأدوار المالية',
      why_c6_d: 'Ultimate Pay منصة ربط وتشغيل ومطابقة، ولا تحتفظ بأموال العملاء؛ الحركة المالية والتسويات من اختصاص ومسؤولية البنوك المعتمدة حصرًا.',
      why_c6_f: 'حماية كاملة للسيولة والودائع',
      wf_tag: 'رحلة معلومات الدفع والتكامل المحاسبي',
      wf_title_1: 'مخطط رحلة معلومات الدفع',
      wf_title_2: 'من تأكيد السداد إلى التحديث المحاسبي وإشعار التاجر',
      wf_subtitle: 'المسار التشغيلي المعتمد الذي يبيّن تدفق معلومات العملية بين نظام التاجر المحاسبي (مثل Onyx ERP)، جهة الدفع المعتمدة، ومنصة Ultimate Pay، مع بيان فصل مسار الأموال المباشر عن مسار المعلومات.',
      wf_flow_title: 'مخطط تدفق معلومات الدفع والتكامل المحاسبي (Onyx ERP ↔ Ultimate Pay)',
      wf_flow_sub: 'تنبيه توضيحي: Ultimate Pay منصة تقنية لمعالجة بيانات الدفع والتكامل المحاسبي؛ انتقال الأموال يتم مباشرة بين حساب العميل وحساب التاجر لدى المؤسسة المالية المعنية.',
      p1_title: '1. طلب الدفع R2P (نظام Onyx ERP)',
      p1_desc: 'إنشاء الفاتورة في نظام التاجر بمبلغ محدد، وبدء طلب الدفع R2P مع توليد بيانات ورمز QR موحد ومحدد بمبلغ الفاتورة.',
      p2_title: '2. سداد العميل عبر جهة الدفع',
      p2_desc: 'يسدد العميل عبر محفظته أو تطبيقه البنكي المعتمد، وتنتقل الأموال مباشرة من حساب العميل إلى حساب التاجر لدى جهة الدفع مع توليد رقم المرجع.',
      p3_title: '3. استلام النتيجة ومطابقة الفاتورة (Ultimate Pay)',
      p3_desc: 'تستقبل منصة Ultimate Pay نتيجة العملية المؤكدة من جهة الدفع، وتطابقها بالفاتورة الصحيحة باستخدام بيانات المرجع والمبلغ المتاحة.',
      p4_title: '4. التحديث المحاسبي التلقائي وإشعار التاجر',
      p4_desc: 'تُحدَّث بيانات السداد تلقائياً في النظام المحاسبي المرتبط (مثل Onyx ERP)، ويصل إشعار فوري للتاجر يوضح رقم الفاتورة والمبلغ وحالة العملية.',
      sim_route_src: 'جهة الدفع (البنك / المحفظة)',
      sim_route_dst: 'نظام Onyx ERP',
      j_map_title: 'تسلسل تدفق خدمة Payment Aggregator',
      j_map_lead: '«عملية الدفع تكون واضحة ومترابطة من لحظة طلبها، مرورًا بتأكيد نتيجتها، وصولًا إلى ربطها بسجلات التاجر المحاسبية وإشعاره بالنتيجة:»',
      jn_1_t: 'فاتورة التاجر',
      jn_1_d: 'إصدار فاتورة محددة الرقم والمبلغ في نظام التاجر.',
      jn_2_t: 'سداد العميل',
      jn_2_d: 'سداد مباشر عبر وسيلة الدفع لدى البنك أو المحفظة.',
      jn_3_t: 'تأكيد النتيجة',
      jn_3_d: 'وصول نتيجة العملية المؤكدة إلى Ultimate Pay.',
      jn_4_t: 'مطابقة الفاتورة',
      jn_4_d: 'ربط نتيجة الدفع بالفاتورة الصحيحة بالمرجع والمبلغ.',
      jn_5_t: 'التحديث المحاسبي',
      jn_5_d: 'تحديث بيانات السداد تلقائياً في Onyx ERP.',
      jn_6_t: 'إشعار التاجر',
      jn_6_d: 'إشعار فوري يوضح رقم الفاتورة والمبلغ وحالة العملية.',
      toolbar_pitch_mode: "وضع العرض",
      toolbar_brochure: "الكتيب الرسمي",
      header_tagline: "منظومة المدفوعات والتحصيل الذكي",
      track_merchants: "للتجار وأصحاب الأعمال",
      track_banks: "للبنوك والمؤسسات المالية",
      track_ps: "نظام PS ونقاط البيع",
      track_ps_standalone: "نظام PS المستقل ←",
      nav_demo: "محاكي الدفع",
      nav_cta: "ابدأ الآن",
      drawer_select_track: "اختر المسار المستهدف:",
      nav_home: "الرئيسية",
      nav_solutions: "الحلول والمزايا",
      nav_services: "خدمات المنصة والتكامل",
      nav_simulator: "المحاكي التفاعلي",
      nav_calculator: "حاسبة الوفر للتاجر",
      nav_steps: "خطوات الانضمام",
      nav_brochure: "العرض المعتمد (PDF)",
      nav_contact: "تواصل معنا",
      nav_aggregator: "Payment Aggregator و R2P",
      nav_ps: "نظام PS ونقاط البيع",

      // Merchant Hero
      m_eyebrow: "منصة ربط وتأكيد نتائج الدفع للتجار — مرخصة رسمياً من البنك المركزي",
      m_hero_title_1: "Ultimate Pay — من تأكيد الدفع",
      m_hero_title_2: "إلى تحديث الفاتورة وإشعار التاجر",
      m_hero_title_3: "",
      m_hero_desc: "تربط Ultimate Pay نتائج الدفع بالفواتير والأنظمة المحاسبية للتجار. وعند تأكيد نجاح السداد، تُحدَّث بيانات الفاتورة محاسبيًا تلقائيًا، ويصل إشعار واضح للتاجر بعملية الدفع، بينما تنتقل الأموال مباشرة من حساب العميل إلى حساب التاجر لدى جهة الدفع.",
      m_hero_btn_demo: "محاكاة مسار المعلومات",
      m_hero_btn_cycle: "كيف تعمل الخدمة و R2P",
      m_hero_btn_portal: "بوابة التاجر",
      m_hero_quote: "«عند تأكيد نجاح سداد الفاتورة، تستقبل Ultimate Pay نتيجة الدفع وتربطها بالفاتورة الصحيحة، ثم تُحدَّث بيانات السداد تلقائيًا في النظام المحاسبي المرتبط، ويصل إشعار للتاجر يوضح رقم الفاتورة والمبلغ وحالة العملية.»",
      m_hero_btn_calc: "احسب توفيرك الشهري",
      m_trust_1_title: "إشراف وتنظيم",
      m_trust_1_sub: "حوكمة البنك المركزي المعتمدة",
      m_trust_2_title: "أموالك في حسابك مباشرة",
      m_trust_2_sub: "المنصة لا تستلم ولا تحتفظ بأموال",
      m_trust_3_title: "تكامل محاسبي معتمد",
      m_trust_3_sub: "تحديث الفواتير في Onyx ERP تلقائياً",

      // Bank Hero
      b_eyebrow: "طبقة ربط تقني للمؤسسات المالية والبنوك والمحافظ",
      b_hero_title_1: "إيصال نتائج الدفع للتجار",
      b_hero_title_2: "وربطها بالفواتير والأنظمة المحاسبية",
      b_hero_title_3: "",
      b_hero_desc: "توفر Ultimate Pay طبقة ربط تقني موحدة بين نتائج الدفع لدى مصرفكم أو محفظتكم وفواتير التجار وأنظمتهم المحاسبية. نسهل على تجاركم مطابقة العمليات وتحديث سجلاتهم فوراً، بينما تبقى حركات الأموال والخصم والإيداع والتسويات تحت السيطرة المصرفية الكاملة لمصرفكم.",
      b_hero_btn_arch: "نموذج الربط التقني",
      b_hero_quote: "«طبقة ربط تقني تسد الفجوة بين نتيجة عملية الدفع لدى البنك ونظام التاجر المحاسبي، لتقليل الإدخال اليدوي وتسهيل تتبع الفواتير المسددة.»",
      b_hero_btn_req: "طلب جلسة شراكة تقنية",
      b_trust_1_title: "إيصال فوري لنتائج الدفع",
      b_trust_1_sub: "إشعار التاجر بنتيجة السداد برقم مرجع موحد",
      b_trust_2_title: "مطابقة الفواتير بدقة",
      b_trust_2_sub: "ربط نتيجة العملية بالفاتورة الصحيحة",
      b_trust_3_title: "دعم التكامل المحاسبي",
      b_trust_3_sub: "تحديث سجلات التاجر وتسهيل تتبع السداد",

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
      arch_title: "نموذج عمل Payment Aggregator",
      arch_sub: "فصل مسار الأموال عن مسار المعلومات",
      arch_m_tag: "مسار الأموال المباشر",
      arch_m_sub: "الأموال تنتقل مباشرة بين الحسابين",
      arch_n1: "حساب العميل",
      arch_n2: "جهة الدفع (البنك / المحفظة)",
      arch_n3: "حساب التاجر المصرفي",
      arch_i_tag: "مسار المعلومات والتكامل",
      arch_i_sub: "منصة Ultimate Pay",
      arch_n4: "استلام نتيجة السداد",
      arch_n5: "Ultimate Pay: مطابقة الفاتورة",
      arch_n6: "تحديث Onyx ERP + إشعار التاجر",
      arch_live: "فاتورة #INV-1025 • تم تأكيد السداد بمبلغ 5,000 ريال • تحديث السجل المحاسبي تلقائياً",
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
      gain_1_t: "إدارة بيانات وسائل الدفع واعتمادها",
      gain_1_d: "يستطيع التاجر عبر بوابته إدارة بيانات نقاط الدفع والمحافظ وحسابات البنوك التي يمتلكها وتقديم طلبات تفعيلها ومتابعة نتائجها في واجهة منظمة.",
      gain_2_t: "مطابقة فورية برقم الفاتورة",
      gain_2_d: "عبر مسح رمز QR الفاتورة أو طلب الدفع المعتمد، لربط نتيجة العملية بالفاتورة الصحيحة دون أخطاء كتابة المبالغ يدوياً.",
      gain_3_t: "تحديث محاسبي تلقائي في Onyx ERP",
      gain_3_d: "عند تأكيد نجاح سداد الفاتورة، تستقبل Ultimate Pay نتيجة الدفع وتربطها بالفاتورة الصحيحة، ثم تُحدَّث بيانات السداد تلقائيًا في النظام المحاسبي المرتبط.",
      gain_4_t: "إشعار فوري وتأكيد موثق للعمليات",
      gain_4_d: "يصلك إشعار فوري برقم الفاتورة والمبلغ المسدد ونتيجة العملية، مع انتقال الأموال مباشرة لحسابك لدى جهة الدفع.",

      // Simulator
      tag_simulator: "محاكاة تعليمية لمسار المعلومات",
      sim_title_1: "محاكاة تفاعلية:",
      sim_title_2: "كيف تصل نتيجة السداد",
      sim_title_3: "وتُحدَّث الفاتورة تلقائياً؟",
      sim_subtitle: "اختر قناة الدفع أدناه، وشاهد كيف تستقبل Ultimate Pay نتيجة العملية وتطابقها بالفاتورة وتُحدّث النظام المحاسبي.",
      sim_disclaimer: "محاكاة توضيحية تعليمية لمسار معلومات الدفع والتكامل المحاسبي، وليست معاملة مالية حقيقية",
      sim_tab_wallet: "سداد عبر المحفظة الإلكترونية",
      sim_tab_bank: "سداد عبر التطبيق البنكي",
      sim_tab_qr: "مسح رمز QR الفاتورة",
      sim_tab_wallet: "سداد عبر المحفظة الإلكترونية",
      sim_tab_bank: "سداد عبر التطبيق البنكي",
      sim_tab_qr: "مسح رمز QR الفاتورة",
      sim_enter_amount: "مبلغ الفاتورة الصادرة:",
      sim_inv_no: "رقم الفاتورة:",
      sim_customer: "العميل:",
      sim_erp_target: "Onyx ERP Pro",
      sim_badge_info: "مسار معلومات الدفع",
      sim_btn_trigger: "محاكاة وصول تأكيد السداد من جهة الدفع",
      sim_processing_title: "جاري استلام نتيجة السداد ومطابقة الفاتورة...",
      sim_processing_sub: "التحقق من رقم المرجع والمبلغ وتحديث النظام المحاسبي",
      sim_success_title: "تم تأكيد السداد وتحديث الفاتورة بنجاح!",
      sim_r_status: "حالة العملية:",
      sim_r_status_val: "ناجحة ومؤكدة",
      sim_r_inv: "رقم الفاتورة:",
      sim_r_rrn: "رقم المرجع (RRN):",
      sim_r_channel: "قناة السداد:",
      sim_r_money: "مسار الأموال:",
      sim_r_erp: "التكامل المحاسبي:",
      sim_r_notif: "إشعار التاجر:",
      sim_new_txn: "محاكاة عملية جديدة",
      sim_exp_title: "تسلسل تدفق المعلومات في Ultimate Pay",
      sim_exp_desc: "توضيح الخطوات التي تحدث عند تأكيد الدفع لربط النتيجة بالفاتورة وإشعار التاجر:",
      b_step_1_t: "1. سداد العميل لدى جهة الدفع",
      b_step_1_d: "يدفع العميل عبر محفظته أو بنكه، وتنتقل الأموال مباشرة من حساب العميل إلى حساب التاجر لدى جهة الدفع.",
      b_step_2_t: "2. وصول نتيجة الدفع للمنصة",
      b_step_2_d: "تستقبل Ultimate Pay نتيجة العملية المؤكدة مع رقم المرجع المعتمد عبر آلية الربط التقني المعتمدة.",
      b_step_3_t: "3. مطابقة الفاتورة والتحديث المحاسبي",
      b_step_3_d: "تُطابق المنصة النتيجة بالفاتورة الصحيحة، ثم تُحدَّث بيانات السداد تلقائيًا في النظام المحاسبي المرتبط (مثل Onyx ERP).",
      b_step_4_t: "4. إشعار التاجر الفوري",
      b_step_4_d: "يصل إشعار واضح وموثق للتاجر يوضح رقم الفاتورة والمبلغ وحالة العملية فور اكتمال السداد.",
      sim_foot_badge: "Ultimate Pay تتعامل مع بيانات العملية والنتيجة والتكامل المحاسبي، ولا تستلم أموال العملاء ولا تحتفظ بأرصدتهم.",

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
      s1_name: "ربط ومطابقة نتائج الدفع بالفواتير",
      s1_desc: "استقبال نتائج السداد المعتمدة من البنوك والمحافظ ومطابقتها آلياً برقم الفاتورة الصحيح ومرجع العملية المعتمد دون خلط أو ازدواجية.",
      s1_f1: "ربط فوري برقم الفاتورة والمرجع المعتمد",
      s1_f2: "مطابقة آلية تقضي على التضارب والنزاعات",
      s1_f3: "متابعة مركزية لكافة نتائج السداد",

      s2_badge: "للفروع الكبرى",
      s2_name: "التكامل المحاسبي مع Onyx ERP",
      s2_desc: "تحديث بيانات السداد تلقائياً في النظام المحاسبي للتاجر فور وصول تأكيد نجاح العملية، لتقليل الإدخال اليدوي وتسهيل تتبع الفواتير.",
      s2_f1: "تسجيل بيانات السداد تلقائياً بدل الإدخال اليدوي",
      s2_f2: "مطابقة مستمرة تمنع الفروقات وعجز الصناديق",
      s2_f3: "دعم التكامل مع Onyx Pro والمتميز",

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
      st2_desc: "تجهيز حساب المنشأة في بوابة التاجر، وتحديد الفروع ومستخدمي النظام والصلاحيات.",
      st3_title: "الربط والتهيئة الميدانية",
      st3_desc: "الربط التقني وضبط مسار الإشعارات (Webhook) والتكامل مع نظام التاجر المحاسبي (مثل Onyx ERP).",
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
      nav_about: 'About Us',
      nav_why: 'Why Us',
      abt_tag: 'Official Company Profile',
      abt_lic: 'Officially Licensed by the Central Bank of Yemen',
      abt_title_1: 'About Us: A Licensed Financial Fintech',
      abt_title_2: 'At the Heart of Digital Payment Connectivity',
      abt_lead: 'Ultimate Pay is a Payment Aggregator platform providing technical connectivity between payment channels and merchants, with seamless integration into accounting systems such as Onyx ERP. We bridge the gap between fragmented payment methods and businesses to facilitate transaction tracking and invoice matching, without holding funds or interfering in bank balances.',
      abt_role_t: 'Core Role (Our Role)',
      abt_role_d: 'Ultimate Pay connects payment results with merchant invoices and accounting systems. Upon verified payment confirmation, invoice records automatically update in the accounting system, and a clear notification is delivered to the merchant, while funds transfer directly from customer to merchant account via the payment provider.',
      abt_sol_t: 'What the Platform Solves',
      abt_sol_d: 'Eliminating fragmented payment notifications, preventing tedious manual ledger entry, and resolving invoice reconciliation discrepancies.',
      abt_val_t: 'Our Core Corporate Values',
      abt_val_sub: 'Our steadfast principles as documented in company charter:',
      val_1: 'Trustworthiness',
      val_2: 'Transparency',
      val_3: 'Credibility',
      val_4: 'Integrity & Compliance',
      why_tag: 'Why Ultimate Pay? • Pillars of Distinction',
      why_t1: '6 Strategic Reasons Making Us the Clear Choice',
      why_t2: 'For Every Business Seeking Security & Growth',
      why_sub: 'Engineered from Yemeni market realities to deliver operational excellence and close every door to fraud and discrepancy:',
      why_b1: 'Unified Connectivity',
      why_c1_t: 'Unified Technical Platform',
      why_c1_d: 'A single technical interface connecting payment results to merchant invoices and ERP systems, ending fragmented manual reconciliations.',
      why_c1_f: 'Immediate Operational Efficiency',
      why_b2: 'CBY Licensed',
      why_c2_t: 'Officially Licensed Financial Company',
      why_c2_d: 'Operating under Central Bank of Yemen regulations, strictly committed to data protection and confidential financial governance.',
      why_c2_f: 'Banking-Grade Reliability',
      why_b3: 'Governed Approvals',
      why_c3_t: 'Payment Methods Data Management & Approvals',
      why_c3_d: 'Merchants submit payment terminal codes and wallet details via portal, subjected to authorized review and verification.',
      why_c3_f: 'Governed Verification Flow',
      why_b4: 'True Accounting Sync',
      why_c4_t: 'Accounting Integration with Merchant ERP (Onyx ERP)',
      why_c4_d: 'Upon verified payment confirmation, invoice records update automatically in accounting ERP, minimizing manual errors.',
      why_c4_f: 'Accurate Ledgers, Zero Shortage',
      why_b5: 'Reliable Confirmation',
      why_c5_t: 'Instant Transaction Confirmation & Sales Protection',
      why_c5_d: 'Reliable payment confirmation appears directly with standard transaction reference, eliminating fake SMS/screenshots.',
      why_c5_f: 'Cashiers Rely on Verified Screen',
      why_b6: 'Funds are Safe',
      why_c6_t: 'Strict Separation of Roles',
      why_c6_d: 'Ultimate Pay is a technical connectivity platform and never holds customer funds; all funds move directly via banks/wallets.',
      why_c6_f: 'Full Liquidity & Deposit Protection',
      wf_tag: 'Payment Information Flow & Accounting Integration',
      wf_title_1: 'Payment Information Journey',
      wf_title_2: 'From Payment Confirmation to ERP Update & Merchant Alert',
      wf_subtitle: 'Approved operational flow illustrating data movement between merchant ERP (e.g. Onyx ERP), payment provider, and Ultimate Pay, highlighting direct funds separation from information flow.',
      wf_flow_title: 'Payment Information & ERP Integration Flowchart (Onyx ERP ↔ Ultimate Pay)',
      wf_flow_sub: 'Operational Note: Ultimate Pay is a technical platform processing payment data and accounting sync; funds transfer directly between customer and merchant bank accounts.',
      p1_title: '1. R2P Payment Request (Onyx ERP)',
      p1_desc: 'Creating the invoice in the merchant system with specific total, and generating a payment request or Dynamic QR coded to the exact invoice amount.',
      p2_title: '2. Customer Payment via Provider',
      p2_desc: 'Customer pays via their wallet or mobile banking app; funds transfer directly from customer account to merchant account at the provider with transaction reference generated.',
      p3_title: '3. Result Received & Matched (Ultimate Pay)',
      p3_desc: 'Ultimate Pay receives the verified transaction result from the payment provider and matches it to the correct invoice using reference and amount.',
      p4_title: '4. Automated Accounting Sync & Merchant Alert',
      p4_desc: 'Invoice payment details update automatically in linked ERP (e.g. Onyx ERP), and an instant clear notification is delivered to the merchant detailing invoice ID and amount.',
      sim_route_src: 'Payment Provider (Bank / Wallet)',
      sim_route_dst: 'Onyx ERP System',
      j_map_title: 'Payment Aggregator Journey Sequence',
      j_map_lead: '“Payment flow is transparent and connected from generation to confirmation, accounting sync, and merchant notification:”',
      jn_1_t: 'Merchant Invoice',
      jn_1_d: 'Generating an invoice with a specific number and total in the merchant system.',
      jn_2_t: 'Customer Payment',
      jn_2_d: 'Direct payment via customer wallet or banking application.',
      jn_3_t: 'Result Confirmation',
      jn_3_d: 'Receipt of verified transaction confirmation at Ultimate Pay.',
      jn_4_t: 'Invoice Matching',
      jn_4_d: 'Matching payment result to the correct invoice by reference and amount.',
      jn_5_t: 'Accounting Sync',
      jn_5_d: 'Automatic invoice payment update in Onyx ERP.',
      jn_6_t: 'Merchant Notification',
      jn_6_d: 'Clear instant notification stating invoice ID, settled amount, and status.',
      tag_aggregator: 'Payment Aggregator Service',
      agg_title_1: 'Ultimate Pay Links Payment Transactions',
      agg_title_2: 'To Merchant Invoices & Accounting System',
      agg_title_3: 'Payment Confirmation, ERP Integration & Merchant Alert',
      agg_subtitle: 'Ultimate Pay links payment results to merchant invoices and accounting systems. وعند تأكيد نجاح السداد، تستقبل المنصة نتيجة العملية وتربطها بالفاتورة الصحيحة، ثم تُحدَّث بيانات السداد تلقائيًا في النظام المحاسبي المرتبط، ويصل إشعار واضح للتاجر يوضح رقم الفاتورة والمبلغ وحالة العملية، بينما تنتقل الأموال مباشرة من حساب العميل إلى حساب التاجر لدى جهة الدفع.',
      toolbar_pitch_mode: "Pitch Mode",
      toolbar_brochure: "Official Booklet",
      header_tagline: "Smart Payments & Financial Switch Ecosystem",
      track_merchants: "For Merchants & Retailers",
      track_banks: "For Banks & Financial Institutions",
      track_ps: "Payment Switch & POS",
      track_ps_standalone: "Independent PS System ←",
      nav_demo: "Live Simulator",
      nav_cta: "Get Started",
      drawer_select_track: "Select Target Track:",
      nav_home: "Home",
      nav_solutions: "Solutions & Value",
      nav_services: "Platform Services & Sync",
      nav_simulator: "POS Simulator",
      nav_calculator: "ROI Calculator",
      nav_steps: "4-Step Onboarding",
      nav_brochure: "Official PDF Slides",
      nav_contact: "Contact Us",
      nav_aggregator: "Payment Aggregator & R2P",
      nav_ps: "PS System & POS",

      // Merchant Hero
      m_eyebrow: "Payment Result Matching & ERP Integration Platform — Licensed by the Central Bank",
      m_hero_title_1: "Ultimate Pay — From Payment Confirmation",
      m_hero_title_2: "To Invoice Update & Merchant Notification",
      m_hero_title_3: "",
      m_hero_desc: "Ultimate Pay connects payment results with merchant invoices and accounting systems. Upon verified payment confirmation, invoice records automatically update in the accounting system, and a clear notification is delivered to the merchant with invoice ID and amount, while funds transfer directly from customer account to merchant account via the payment provider.",
      m_hero_btn_demo: "Information Flow Demo",
      m_hero_btn_cycle: "How It Works & R2P",
      m_hero_btn_portal: "Merchant Portal",
      m_hero_quote: "“Upon verified payment confirmation, Ultimate Pay receives the transaction result, matches it with the correct invoice, automatically updates the linked accounting system, and sends a clear notification to the merchant with invoice ID, amount, and status.”",
      m_hero_btn_calc: "Calculate Monthly Savings",
      m_trust_1_title: "Supervision & Governance",
      m_trust_1_sub: "Central Bank of Yemen Governed",
      m_trust_2_title: "Direct Funds Flow",
      m_trust_2_sub: "Platform Never Holds or Collects Funds",
      m_trust_3_title: "Approved Accounting Sync",
      m_trust_3_sub: "Automated Onyx ERP Invoice Update",

      // Bank Hero
      b_eyebrow: "Technical Connectivity Layer for Banks & Wallets",
      b_hero_title_1: "Delivering Payment Results to Merchants",
      b_hero_title_2: "And Linking to Invoices & Accounting Systems",
      b_hero_title_3: "",
      b_hero_desc: "Ultimate Pay provides a standardized technical connectivity layer between payment transaction results at your bank/wallet and merchant invoices and ERP systems. We simplify reconciliation and auto-record invoice payments for your merchants, while monetary movements, debits, credits, and settlements remain entirely under your bank's governance.",
      b_hero_btn_arch: "Technical Connectivity Model",
      b_hero_quote: "“A technical connectivity layer bridging payment results at the financial institution with the merchant accounting system, eliminating manual entry and simplifying invoice tracking.”",
      b_hero_btn_req: "Request Technical Partnership",
      b_trust_1_title: "Instant Result Delivery",
      b_trust_1_sub: "Merchant Alert with Standard Reference (RRN)",
      b_trust_2_title: "Accurate Invoice Matching",
      b_trust_2_sub: "Matching Payment Result to the Correct Invoice",
      b_trust_3_title: "ERP Integration Support",
      b_trust_3_sub: "Automated Ledger Sync & Seamless Tracking",

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

      arch_title: "Payment Aggregator Architecture",
      arch_sub: "Separation of Funds Flow & Information Flow",
      arch_m_tag: "Direct Funds Flow",
      arch_m_sub: "Funds move directly between accounts",
      arch_n1: "Customer Account",
      arch_n2: "Payment Entity (Bank / Wallet)",
      arch_n3: "Merchant Bank Account",
      arch_i_tag: "Information & Sync Flow",
      arch_i_sub: "Ultimate Pay Platform",
      arch_n4: "Receive Payment Result",
      arch_n5: "Ultimate Pay: Invoice Match",
      arch_n6: "Update Onyx ERP + Alert Merchant",
      arch_live: "Invoice #INV-1025 • Payment Verified: 5,000 YER • Auto-Updated in Accounting Ledger",
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
      gain_1_t: "Payment Methods Data Management & Approvals",
      gain_1_d: "Merchants manage their existing payment points, wallet IDs, and bank account details via their portal, submitting activation requests for verified review.",
      gain_2_t: "Instant Invoice Matching",
      gain_2_d: "Scan the invoice dynamic QR or send payment requests, linking transaction results directly to the invoice without manual entry.",
      gain_3_t: "Automated Accounting Update in Onyx ERP",
      gain_3_d: "Upon verified payment confirmation, payment details update automatically in the linked accounting ERP, replacing manual typing.",
      gain_4_t: "Instant & Verified Merchant Alert",
      gain_4_d: "Instant notification with invoice ID, settled amount, and status, while funds flow directly to your merchant account at the provider.",

      tag_simulator: "Educational Information Flow Demo",
      sim_title_1: "Interactive Simulation:",
      sim_title_2: "How Payment Confirmation Arrives",
      sim_title_3: "And Updates Invoices Automatically",
      sim_subtitle: "Select a channel below to witness how Ultimate Pay receives results, matches invoices, and syncs accounting records.",
      sim_disclaimer: "Educational demonstration of payment information flow and accounting integration, not an actual financial transaction.",
      sim_tab_wallet: "E-Wallet Payment",
      sim_tab_bank: "Mobile Banking App",
      sim_tab_qr: "Scan Invoice Dynamic QR",
      sim_tab_wallet: "E-Wallet Payment",
      sim_tab_bank: "Mobile Banking App",
      sim_tab_qr: "Scan Invoice Dynamic QR",
      sim_enter_amount: "Issued Invoice Total:",
      sim_inv_no: "Invoice #:",
      sim_customer: "Customer:",
      sim_erp_target: "Onyx ERP Pro",
      sim_badge_info: "Payment Information Flow",
      sim_btn_trigger: "Simulate Payment Confirmation from Provider",
      sim_processing_title: "Receiving payment result and matching invoice...",
      sim_processing_sub: "Validating transaction reference, amount, and updating ERP",
      sim_success_title: "Payment Confirmed & Invoice Updated Successfully!",
      sim_r_status: "Transaction Status:",
      sim_r_status_val: "Confirmed & Successful",
      sim_r_inv: "Invoice #:",
      sim_r_rrn: "Reference # (RRN):",
      sim_r_channel: "Payment Channel:",
      sim_r_money: "Funds Flow:",
      sim_r_erp: "Accounting Sync:",
      sim_r_notif: "Merchant Alert:",
      sim_new_txn: "Run Another Simulation",
      sim_exp_title: "Information Flow Sequence in Ultimate Pay",
      sim_exp_desc: "How payment results are received, matched to invoices, and synced with accounting systems:",
      b_step_1_t: "1. Customer Payment via Provider",
      b_step_1_d: "Customer pays via their wallet or bank app; funds transfer directly between customer and merchant accounts at the financial provider.",
      b_step_2_t: "2. Result Received by Platform",
      b_step_2_d: "Ultimate Pay receives the verified transaction result with standard reference (RRN) through approved technical connectivity.",
      b_step_3_t: "3. Invoice Matching & ERP Sync",
      b_step_3_d: "The platform matches the result to the correct invoice, then automatically updates payment records in Onyx ERP.",
      b_step_4_t: "4. Instant Merchant Notification",
      b_step_4_d: "A clear, verified notification is delivered to the merchant detailing invoice ID, settled amount, and status upon completion.",
      sim_foot_badge: "Ultimate Pay processes transaction results and accounting synchronization; it never receives, holds, or transfers customer funds.",

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
      s1_name: "Payment Result Matching & Verification",
      s1_desc: "Receive verified payment results from banks and digital wallets and match them automatically to correct invoice IDs and transaction references without confusion.",
      s1_f1: "Instant linkage by invoice number and RRN",
      s1_f2: "Automated matching prevents discrepancies and disputes",
      s1_f3: "Centralized monitoring for all payment results",

      s2_badge: "High Volume Lanes",
      s2_name: "Automated Accounting Integration (Onyx ERP)",
      s2_desc: "Automatically update invoice payment records in merchant accounting systems upon verified payment confirmation, eliminating manual typing and discrepancy.",
      s2_f1: "Automatic ledger updates replacing manual entry",
      s2_f2: "Continuous sync preventing cashier shortage",
      s2_f3: "Supported integration with Onyx Pro and Al-Motamayez",

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
      st3_desc: "Configure technical connectivity, Webhook endpoints, and integration with merchant accounting system (e.g. Onyx ERP).",
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
  // 3. Interactive Payment Simulator (Information Flow Demo)
  // ==========================================
  let currentSimMode = 'wallet';
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

    if (mode === 'wallet') {
      simModeDisplay.innerHTML = `
        <i class="fa-solid fa-wallet"></i>
        <p>${isAr ? 'سداد عبر المحفظة الإلكترونية' : 'E-Wallet Payment'}</p>
        <small>${isAr ? 'يسدد العميل عبر محفظته (ون كاش، جيب، كاش، إم فلوس...) وتصل النتيجة للمنصة' : 'Customer pays via e-wallet; result is received by Ultimate Pay'}</small>
      `;
    } else if (mode === 'bank_app') {
      simModeDisplay.innerHTML = `
        <i class="fa-solid fa-building-columns"></i>
        <p>${isAr ? 'سداد عبر التطبيق البنكي المعتمد' : 'Mobile Banking App Payment'}</p>
        <small>${isAr ? 'يسدد العميل من حسابه المصرفي المباشر وتصل نتيجة العملية بالمرجع المعتمد' : 'Customer pays directly from bank account; result is matched via RRN'}</small>
      `;
    } else if (mode === 'qr') {
      simModeDisplay.innerHTML = `
        <i class="fa-solid fa-qrcode"></i>
        <p>${isAr ? 'مسح رمز QR الفاتورة الديناميكي' : 'Dynamic Invoice QR Code Scan'}</p>
        <small>${isAr ? 'يمسح العميل الرمز المحدد بمبلغ الفاتورة عبر تطبيقه لسداد المبلغ بدقة' : 'Customer scans invoice-specific QR code to pay exact invoice total'}</small>
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
  updateSimModePreview('wallet');

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
            wallet: currentLang === 'ar' ? 'المحفظة الإلكترونية المعتمدة' : 'Verified Digital Wallet',
            bank_app: currentLang === 'ar' ? 'التطبيق البنكي المعتمد' : 'Mobile Banking App',
            qr: currentLang === 'ar' ? 'رمز QR الفاتورة الديناميكي' : 'Dynamic Invoice QR Code'
          };
          receiptMethod.textContent = names[currentSimMode] || 'Digital Payment';
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
    const targetBtn = document.querySelector('.merchant-tab-btn[data-tab="' + tabId + '"]');
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
