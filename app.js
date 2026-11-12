/**
 * Ultimate Pay — Official Payment Aggregator Platform
 * Presentation-Aligned JavaScript Controller
 * Conforming 100% to Ultimate_Pay_Payment_Aggregator (1).pptx
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Full Bilingual Localization (AR & EN)
  // ==========================================
  let currentLang = document.documentElement.getAttribute('lang') || 'ar';

  const translations = {
    ar: {
      "toolbar_pitch_mode": "وضع العرض",
      "header_tagline": "منظومة تجميع المدفوعات والتكامل المحاسبي",
      "track_merchants": "للتجار وأصحاب الأعمال",
      "track_banks": "للبنوك والمؤسسات المالية",
      "nav_workflow": "آلية العمل",
      "nav_cta": "تواصل معنا",
      "drawer_select_track": "اختر المسار المستهدف:",
      "nav_home": "الرئيسية",
      "nav_about": "من نحن",
      "nav_aggregator": "خدمة Payment Aggregator",
      "nav_services": "خدمات التجار",
      "nav_banks": "خدمات البنوك",
      "nav_portal": "بوابة التاجر",
      "nav_contact": "تواصل معنا",
      "m_eyebrow": "عرض موجه للتجار والمؤسسات المالية • أكتوبر 2026",
      "m_hero_title_1": "منظومة واحدة تربط المدفوعات",
      "m_hero_title_2": "بتجارتكم ودفاتركم المحاسبية",
      "m_hero_desc": "منصة <strong>Ultimate Pay</strong> لتجميع المدفوعات (Payment Aggregator) — تصل طلب الدفع إلى العميل عبر المحافظ والتطبيقات البنكية، وتُعلم نظامكم المحاسبي بنتيجة العملية لحظيًا، وتوثّق كل دفعة بمرجع موحد.",
      "m_hero_quote": "«من تأكيد الدفع إلى تحديث الفاتورة وإشعار التاجر»",
      "m_hero_btn_cycle": "دورة السداد والتكامل",
      "m_hero_btn_workflow": "مخطط مسار المعلومات",
      "m_hero_btn_portal": "بوابة التاجر",
      "m_trust_1_title": "ربط موحد مع المحافظ والبنوك",
      "m_trust_1_sub": "شركة مالية مرخصة من البنك المركزي",
      "m_trust_2_title": "تحديث محاسبي تلقائي",
      "m_trust_2_sub": "تسجيل الفواتير فوراً عند تفعيل التكامل",
      "m_trust_3_title": "إشعار واضح للتاجر",
      "m_trust_3_sub": "برقم الفاتورة والمبلغ وحالة السداد",
      "b_eyebrow": "طبقة ربط تقني للمؤسسات المالية والبنوك والمحافظ",
      "b_hero_title_1": "إيصال نتائج الدفع للتجار",
      "b_hero_title_2": "وربطها بالفواتير والأنظمة المحاسبية",
      "b_hero_desc": "توفر Ultimate Pay طبقة ربط تقني موحدة بين نتائج الدفع لدى مصرفكم أو محفظتكم وفواتير التجار وأنظمتهم المحاسبية. نسهل على تجاركم مطابقة العمليات وتحديث سجلاتهم فوراً، بينما تنتقل الأموال مباشرة بين حسابات عملائكم وتجاركم لديكم.",
      "b_hero_quote": "«شراكة تقنية توسّع قبول خدماتكم المالية لدى التجار وتخفف الأعباء التشغيلية»",
      "b_hero_btn_arch": "خدمات المؤسسات المالية",
      "b_hero_btn_req": "تواصل لمناقشة التعاون",
      "b_trust_1_title": "توسيع نطاق القبول",
      "b_trust_1_sub": "شبكة تجار واسعة عبر قناة ربط واحدة",
      "b_trust_2_title": "تعزيز التدفقات والودائع",
      "b_trust_2_sub": "السيولة تنتقل وتستقر مباشرة في حسابات مصرفكم",
      "b_trust_3_title": "تخفيف الأعباء التشغيلية",
      "b_trust_3_sub": "تولي المنصة ربط نتائج العمليات بالفواتير",
      "arch_title": "نموذج عمل Payment Aggregator",
      "arch_sub": "فصل مسار الأموال عن مسار المعلومات",
      "arch_m_tag": "مسار الأموال المباشر",
      "arch_m_sub": "الأموال تنتقل مباشرة بين الحسابين",
      "arch_n1": "حساب العميل",
      "arch_n2": "جهة الدفع (البنك / المحفظة)",
      "arch_n3": "حساب التاجر المصرفي",
      "arch_i_tag": "مسار المعلومات والتكامل",
      "arch_i_sub": "منصة Ultimate Pay",
      "arch_n4": "استلام نتيجة السداد",
      "arch_n5": "Ultimate Pay: مطابقة الفاتورة",
      "arch_n6": "تحديث Onyx ERP + إشعار التاجر",
      "arch_live": "من تأكيد الدفع ➔ إلى تحديث الفاتورة في النظام المحاسبي ➔ وإشعار التاجر فوراً",
      "switch_banner_prompt": "أنت الآن تستعرض:",
      "abt_lic": "مرخص رسمياً من البنك المركزي اليمني",
      "abt_tag": "▬ من نحن • عرض التجار والمؤسسات المالية · 02",
      "abt_title_1": "شركة مالية مرخصة",
      "abt_title_2": "تعمل في قلب منظومة الدفع الرقمي",
      "abt_ambition": "طموحنا: منظومة مالية موحدة وآمنة وسهلة الوصول",
      "abt_lead": "<strong>Ultimate Pay :</strong> شركة مالية مرخصة من البنك المركزي تقدم منصات متخصصة في حلول الدفع المتكاملة، وتهدف إلى تحسين التجربة المالية للأفراد والشركات. وفي هذا العرض نركز على منصة تجميع المدفوعات (Payment Aggregator) : قناة ربط وتكامل مركزية تجمع بين التاجر والمحافظ الرقمية والبنوك عبر واجهة موحدة، مع تكامل مباشر مع أنظمة ERP المعتمدة مثل Onyx.",
      "abt_role_t": "الدور الأساسي",
      "abt_role_d": "ربط المؤسسات المالية بالأنظمة المحاسبية من أجل إشعار الأنظمة المحاسبية بعملية الدفع الناجحة، مع بقاء انتقال الأموال مباشراً بين حساب العميل وحساب التاجر لدى جهة الدفع.",
      "abt_sol_t": "ما تعالجه المنصة",
      "abt_sol_d": "تأخر تسجيل السداد في الدفاتر وكثرة المطابقة اليدوية. تتولى المنصة ربط نتيجة الدفع بالفاتورة وتحديث بيانات السداد تلقائياً لتسهيل المتابعة وتوفير الوقت.",
      "abt_val_t": "قيم الشركة",
      "abt_val_sub": "مبادئنا المؤسسية المعتمدة في خدمة شركائنا:",
      "val_1": "الأمانة ✔",
      "val_2": "الشفافية ✔",
      "val_3": "المصداقية ✔",
      "val_4": "النزاهة ✔",
      "abt_beneficiaries": "<strong>المستفيدون:</strong> التجار وعملاؤهم، والمؤسسات المالية والبنوك",
      "tag_why_us": "▬ التكامل المحاسبي • Slide 09",
      "prob_title_1": "تسجيل محاسبي تلقائي",
      "prob_title_2": "— بدل الإدخال اليدوي",
      "prob_subtitle": "مقارنة واقعية بين العمل التقليدي بدون تكامل، وبين منظومة التكامل المحاسبي مع Ultimate Pay:",
      "card_pain_badge": "العمل التقليدي (بدون تكامل) ✖",
      "pain_1_t": "إدخال يدوي لكل دفعة بعد السداد",
      "pain_1_d": "استهلاك وقت المحاسب في تسجيل كل دفعة يدوياً بعد إتمام البيع.",
      "pain_2_t": "تأخر تسجيل الدفعات في الدفاتر",
      "pain_2_d": "تراكم الفواتير وصعوبة الإقفال اليومي السريع والمطابقة.",
      "pain_3_t": "صعوبة معرفة الفواتير المسددة بسرعة",
      "pain_3_d": "ضياع الوقت في المراجعة والمطابقة اليدوية بين عدة إشعارات.",
      "pain_4_t": "احتمال الخطأ عند مطابقة الدفعة بالفاتورة",
      "pain_4_d": "أخطاء بشرية في تسجيل أرقام العمليات أو تكرار القيود وتداخلها.",
      "card_gain_badge": "Ultimate Pay مع التكامل المحاسبي ✔",
      "gain_1_t": "ربط نتيجة الدفع بالفاتورة الصحيحة",
      "gain_1_d": "كل نتيجة دفع مؤكدة تُربط بالفاتورة الصحيحة بمرجع موحد.",
      "gain_2_t": "تسجيل المبلغ تلقائيًا عند تأكيد النجاح",
      "gain_2_d": "يُسجَّل المبلغ آلياً في النظام المحاسبي للتاجر عند وصول إشعار السداد.",
      "gain_3_t": "إشعار التاجر برقم الفاتورة والمبلغ",
      "gain_3_d": "يصل التاجر إشعار فوري يوضح رقم الفاتورة والمبلغ وحالة السداد.",
      "gain_4_t": "تقليل الإدخال اليدوي وتسهيل المتابعة",
      "gain_4_d": "يوفر وقت المحاسب ويسهّل معرفة الفواتير المسددة دون مراجعة يدوية طويلة.",
      "prob_note": "يُفعَّل التسجيل التلقائي عند إعداد التكامل مع النظام المحاسبي للتاجر.",
      "why_tag": "▬ لماذا Ultimate Pay • Slide 04",
      "why_t1": "خمس نقاط تشرح قيمة الخدمة",
      "why_t2": "— دون وعود غير مثبتة",
      "why_sub": "عرض التجار والمؤسسات المالية · صُممت هذه الركائز لتجعل منظومة الدفع أوضح وأسرع وأسهل متابعة:",
      "why_b1": "ربط دقيق",
      "why_c1_t": "ربط الدفع بالفاتورة",
      "why_c1_d": "كل نتيجة دفع مؤكدة تُربط بالفاتورة الصحيحة.",
      "why_c1_f": "مطابقة موثقة",
      "why_b2": "ترخيص رسمي",
      "why_c2_t": "شركة مالية مرخصة",
      "why_c2_d": "شركة مالية مرخصة من البنك المركزي اليمني.",
      "why_c2_f": "موثوقية مصرفية كاملة",
      "why_b3": "أتمتة محاسبية",
      "why_c3_t": "تسجيل محاسبي تلقائي",
      "why_c3_d": "عند نجاح الدفع وتفعيل التكامل مع النظام المحاسبي.",
      "why_c3_f": "تحديث مباشر للدفاتر",
      "why_b4": "إشعار فوري",
      "why_c4_t": "إشعار واضح للتاجر",
      "why_c4_d": "برقم الفاتورة والمبلغ وحالة السداد.",
      "why_c4_f": "اعتماد فوري على الشاشة",
      "why_b5": "متابعة أسهل",
      "why_c5_t": "ربط آلي لجميع العمليات المالية",
      "why_c5_d": "يوفر وقت المحاسب ويسهّل متابعة الفواتير المسددة.",
      "why_c5_f": "كفاءة تشغيلية أعلى",
      "why_quote": "«قيمتنا ليست في إرسال إشعار — بل في جعل منظومة الدفع كلها أوضح، وأسرع، وأسهل متابعة لدى التاجر والبنك معًا.»",
      "tag_aggregator": "<i class=\"fa-solid fa-receipt\"></i> الفكرة الأساسية • Slide 03",
      "agg_title_1": "الدفع والفاتورة والنظام المحاسبي",
      "agg_title_2": "— في مسار واحد واضح",
      "agg_subtitle": "💡 <strong>دور Ultimate Pay:</strong> ربط نتيجة الدفع بالفاتورة الصحيحة والنظام المحاسبي، ثم إشعار التاجر.",
      "p1_t": "👤 العميل",
      "p1_d": "يسدد قيمة الفاتورة عن طريق المحفظة أو التطبيق البنكي.",
      "p2_t": "💳 المحفظة / التطبيق البنكي",
      "p2_d": "تنقل المبلغ مباشرة من حساب العميل إلى حساب التاجر.",
      "p3_t": "🏬 التاجر",
      "p3_d": "يصدر الفاتورة ويصله إشعار بنتيجة السداد.",
      "p4_t": "📊 النظام المحاسبي",
      "p4_d": "تُحدَّث الفواتير وسندات القبض آليًا عند تفعيل التكامل.",
      "cyc_tag": "▬ دورة السداد والمطابقة • Slide 05",
      "cyc_title": "من إصدار الفاتورة إلى إقفالها — في أربع خطوات واضحة",
      "cyc_sub": "شرح مبسط يوضح تسلسل دورة الدفع بدقة:",
      "cyc_s1_t": "إصدار الفاتورة لدى التاجر",
      "cyc_s1_d": "يُنشئ التاجر الفاتورة في نظامه المحاسبي برقم ومبلغ محدد.",
      "cyc_s1_b": "تم إصدار الفاتورة • بانتظار السداد",
      "cyc_s2_t": "سداد العميل المباشر",
      "cyc_s2_d": "يسدد العميل عبر محفظته أو تطبيقه البنكي بحسب الآلية المعتمدة لدى المحفظة؛ وتنتقل الأموال مباشرة من حساب العميل إلى حساب التاجر.",
      "cyc_s2_b": "انتقال الأموال مباشرة لحساب التاجر",
      "cyc_s3_t": "استقبال تأكيد السداد",
      "cyc_s3_d": "تستقبل منصة Ultimate Pay إشعار التحصيل المؤكد ونتيجة العملية مباشرة من جهة الدفع (البنك أو المحفظة).",
      "cyc_s3_b": "تأكيد النتيجة • ربط بالفاتورة",
      "cyc_s4_t": "ربط الفاتورة والتحديث المحاسبي",
      "cyc_s4_d": "تُربط النتيجة بالفاتورة الصحيحة، وتنعكس آلياً على النظام المحاسبي (مثل Onyx ERP) مع إشعار التاجر فوراً.",
      "cyc_s4_b": "مدفوعة • تم التحديث المحاسبي",
      "cyc_warn": "🔴 <strong>تنبيه توضيحي:</strong> لم تكتمل العملية — وتظهر حالتها بوضوح للتاجر دون اعتبارها مدفوعة.",
      "mb_tag": "▬ القيمة للتاجر • Slide 06",
      "mb_title": "ماذا تكسب منشأتك يوميًا مع Ultimate Pay؟",
      "mb_quote": "«الخدمة ليست أداة تقنية إضافية — إنها جزء من دورة البيع: فاتورة، رمز، إشعار، وقيد محاسبي صحيح.»",
      "mb_1_t": "ربط واضح بالفاتورة",
      "mb_1_d": "كل عملية دفع تُربط برقم الفاتورة ومبلغها.",
      "mb_2_t": "إشعار بالنتيجة",
      "mb_2_d": "يصل التاجر رقم الفاتورة والمبلغ وحالة السداد.",
      "mb_3_t": "تسجيل محاسبي تلقائي",
      "mb_3_d": "يُسجَّل المبلغ في النظام المحاسبي آلياً عند وصول الإشعار.",
      "mb_4_t": "متابعة أسهل للفواتير",
      "mb_4_d": "معرفة المسدد منها دون مراجعة يدوية طويلة.",
      "mb_5_t": "تقليل الإدخال اليدوي",
      "mb_5_d": "يخفف عمل المحاسب في تسجيل الدفعات.",
      "roles_tag": "▬ نموذج التعاون والتكامل • Slide 10",
      "roles_title": "أدوار واضحة بين الأطراف",
      "roles_sub": "حدود مسؤوليات واضحة تضمن انضباط وسلاسة العمليات المالية والتقنية",
      "role_bank_t": "المؤسسة المالية (البنك / المحفظة)",
      "role_bank_1": "توفير وسائل الدفع للعميل",
      "role_bank_2": "تنفيذ الدفع وفق آليته المعتمدة",
      "role_bank_3": "اعتماد طلبات التفعيل لدى التاجر",
      "role_bank_4": "إتاحة نتيجة الدفع للمنصة",
      "role_up_t": "Ultimate Pay — منصة الربط",
      "role_up_1": "تأكيد نتيجة الدفع",
      "role_up_2": "ربط النتيجة بالفاتورة الصحيحة",
      "role_up_3": "التكامل مع النظام المحاسبي للتاجر",
      "role_up_4": "إشعار التاجر بنتيجة السداد",
      "role_mer_t": "التاجر",
      "role_mer_1": "إصدار الفواتير في نظامه المحاسبي",
      "role_mer_2": "استلام إشعار نتيجة السداد",
      "role_mer_3": "متابعة الفواتير المسددة",
      "role_act_lbl": "تدفق التفعيل:",
      "role_act_1": "طلب التاجر",
      "role_act_2": "اعتماد المؤسسة المالية",
      "role_act_3": "تفعيل وسيلة الدفع",
      "role_principle": "<strong>🛡 مبدأ أساسي:</strong> Ultimate Pay لا تحتفظ بأموال العملاء ولا تحوّلها — الأموال تنتقل مباشرة من حساب العميل إلى حساب التاجر.",
      "wf_tag": "آلية العمل • Slide 11",
      "wf_title_1": "رحلة سداد فاتورة",
      "wf_title_2": "— من إصدارها حتى تأكيد السداد",
      "wf_subtitle": "أربع خطوات رئيسية تختصر مسار العملية بدقة بين أطراف المنظومة:",
      "wf_p1_t": "1. إنشاء الفاتورة لدى التاجر",
      "wf_p1_d": "يصدر التاجر فاتورة عبر نظامه المحاسبي برقم ومبلغ محدد، ليتم ربطها آلياً بنتيجة السداد.",
      "wf_p2_t": "2. سداد العميل لدى جهة الدفع",
      "wf_p2_d": "يقوم العميل بإتمام عملية الدفع عبر المحفظة أو التطبيق البنكي وفق آليته المعتمدة، وتنتقل الأموال مباشرة لحساب التاجر لدى جهة الدفع.",
      "wf_p3_t": "3. تأكيد نتيجة العملية في Ultimate Pay",
      "wf_p3_d": "ترسل جهة الدفع تأكيد العملية إلى منصة Ultimate Pay، فتستقبل المنصة النتيجة بالمرجع المعتمد.",
      "wf_p4_t": "4. ربط النتيجة وتحديث النظام والإشعار",
      "wf_p4_d": "تُربط النتيجة بالفاتورة، ويُرسل إشعار فوري لتحديث النظام المحاسبي وتنبيه التاجر بنتيجة السداد.",
      "tag_services": "خدمات منصة Payment Aggregator",
      "serv_title_1": "خدمات الربط والمطابقة والتكامل:",
      "serv_title_2": "من تأكيد نتيجة الدفع",
      "serv_title_3": "إلى التحديث المحاسبي وإشعار التاجر",
      "serv_subtitle": "حلول تقنية متخصصة لربط فواتير التجار بنتائج الدفع لدى البنوك والمحافظ وأتمتة المطابقة المحاسبية:",
      "s1_badge": "مطابقة العمليات",
      "s1_name": "ربط نتائج الدفع بالفواتير",
      "s1_desc": "استقبال نتائج السداد المعتمدة من البنوك والمحافظ وربطها آلياً برقم الفاتورة الصحيح ومرجع العملية المعتمد دون خلط أو تكرار.",
      "s1_f1": "ربط فوري برقم الفاتورة الصحيحة",
      "s1_f2": "مطابقة آلية تمنع الأخطاء اليدوية",
      "s1_f3": "توثيق كل دفعة بمرجع موحد",
      "s2_badge": "تكامل محاسبي",
      "s2_name": "التسجيل والتكامل المحاسبي",
      "s2_desc": "تحديث بيانات السداد تلقائياً في النظام المحاسبي للتاجر (مثل Onyx ERP) فور تأكيد نجاح العملية عند تفعيل التكامل.",
      "s2_f1": "تسجيل محاسبي تلقائي بدل الإدخال اليدوي",
      "s2_f2": "مطابقة تمنع الفروقات وعجز الصناديق",
      "s2_f3": "دعم التكامل المباشر مع أنظمة ERP",
      "s3_badge": "تسهيل السداد",
      "s3_name": "توليد وربط رموز الدفع QR",
      "s3_desc": "توليد رموز دفع QR مرتبطة برقم الفاتورة ومبلغها لتسهيل سداد العميل عبر المحافظ والتطبيقات البنكية المتوافقة.",
      "s3_f1": "رمز دفع مرتبط برقم الفاتورة ومبلغها",
      "s3_f2": "دعم المحافظ والتطبيقات البنكية المتوافقة",
      "s3_f3": "سداد مباشر دون خطأ في كتابة المبلغ",
      "s4_badge": "إدارة ومتابعة",
      "s4_name": "بوابة التاجر",
      "s4_desc": "منصة مخصصة للتاجر تتيح متابعة العمليات وحالات الفواتير، وطلب إضافة المحافظ، وإعدادات قنوات الإشعار والتكامل.",
      "s4_f1": "متابعة الفواتير (مدفوعة، معلقة، لم تكتمل)",
      "s4_f2": "طلب إضافة المحافظ وإرسالها للاعتماد",
      "s4_f3": "ضبط قنوات الإشعار والربط المحاسبي",
      "s5_badge": "إشعار فوري",
      "s5_name": "متابعة العمليات وإشعارات السداد",
      "s5_desc": "إيصال إشعارات فورية وموثقة بنتيجة العملية للتاجر توضح رقم الفاتورة والمبلغ وحالة السداد لحظة تأكيد الدفع.",
      "s5_f1": "إشعار التاجر برقم الفاتورة والمبلغ",
      "s5_f2": "إشعار فوري لحظة تأكيد السداد",
      "s5_f3": "تحديث شاشة كاشير المتجر دون تأخير",
      "bank_section_tag": "▬ القيمة للبنك والمؤسسات المالية • Slide 08",
      "bank_title_1": "شراكة تقنية توسّع",
      "bank_title_2": "قبول خدماتكم المالية لدى التجار",
      "bank_quote": "«قيمة واحدة لجميع الأطراف: البنك، المحفظة، التاجر، والعميل — وإدارة مالية منضبطة للجميع.»",
      "bank_lead": "توفر Ultimate Pay نموذج تعاون مؤسسي بحدود مسؤوليات واضحة يعزز وصول خدماتكم المالية:",
      "bc_1_b": "1. نطاق القبول",
      "bc_1_t": "توسيع نطاق القبول",
      "bc_1_d": "وصول خدمات البنك والمحفظة إلى شبكة تجار واسعة عبر قناة ربط واحدة.",
      "bc_2_b": "2. تخفيف الأعباء",
      "bc_2_t": "تخفيف الأعباء التشغيلية",
      "bc_2_d": "المنصة تتولى ربط نتيجة الدفع بفاتورة التاجر.",
      "bc_3_b": "3. استقرار الودائع",
      "bc_3_t": "تعزيز التدفقات والودائع",
      "bc_3_d": "أموال المبيعات تنتقل مباشرة بين حسابات عملائكم وتجاركم لديكم — فتبقى السيولة داخل المؤسسة المالية.",
      "bc_4_b": "4. شمول مالي",
      "bc_4_t": "دعم الشمول المالي",
      "bc_4_d": "إتمام السداد يتم وفق الآلية المعتمدة لكل محفظة وتطبيق بنكي وبشكل مباشر بين حساب العميل وحساب التاجر.",
      "bank_note": "<strong>نموذج تعاون مؤسسي بحدود مسؤوليات واضحة:</strong> البنك/المحفظة يتولى تنفيذ الدفع ونقل الأموال مباشرة بين الحسابات، والمنصة تتولى الربط التقني ومطابقة الفواتير وإشعار التاجر.",
      "bank_box_kpi": "ركائز الشراكة المؤسسية",
      "kpi_uptime": "انتقال مباشر للأموال دون وساطة المنصة",
      "kpi_latency": "إشعار فوري للتاجر وتحديث محاسبي",
      "kpi_cby": "شركة مالية مرخصة من البنك المركزي",
      "bank_cta_btn": "مناقشة ورشة عمل التكامل والشراكة",
      "tag_onboarding": "▬ الخطوات التالية • Slide 12",
      "step_title_1": "لنبدأ بخطوة واحدة",
      "step_title_2": "— ورشة عمل مشتركة",
      "step_title_3": "لمستقبل مالي أفضل",
      "step_subtitle": "شكرًا لكم — ويسعدنا الآن الإجابة عن أسئلتكم ومناقشة خطوة البداية:",
      "onb_m_t": "للتجار وأصحاب الأنشطة التجارية 🏬",
      "onb_m_1": "تجهيز بيانات النشاط التجاري والحساب المعتمد.",
      "onb_m_2": "تحديد النظام المحاسبي المراد ربطه.",
      "onb_m_3": "إضافة المحفظة وبدء استقبال الإشعارات بعد الاعتماد.",
      "onb_b_t": "للمؤسسات المالية (المحافظ) 🏛",
      "onb_b_1": "مراجعة آلية التكامل المتاحة وتبادل الوثائق اللازمة.",
      "onb_b_2": "الاتفاق على نطاق الخدمة ونموذج التعاون.",
      "onb_b_3": "تجهيز بيئة تجريبية لبدء التجربة عمليًا.",
      "mp_tag": "بوابة التاجر الرسمية (Merchant Portal)",
      "mp_t1": "ما هي الخدمات والشاشات التي يجدها التاجر",
      "mp_t2": "عندما ينضم للمنصة ويفتح حسابه؟",
      "mp_desc": "عند تسجيل التاجر، يحصل على حساب رسمي في بوابة التاجر (Merchant Portal) — نظام متكامل يمنحه متابعة دقيقة لنقاط الدفع، سجل العمليات، الاستفسار عن الدفع، ومطابقة الفواتير.",
      "mp_note": "الوظائف التالية قد تختلف بحسب إعدادات التاجر والتكامل المعتمد.",
      "mp_tab_1": "1. لوحة المعلومات (Dashboard)",
      "mp_tab_2": "2. نقاط الدفع الخاصة بي",
      "mp_tab_3": "3. إضافة نقطة دفع / محفظة",
      "mp_tab_4": "4. سجل المدفوعات التاريخي",
      "mp_tab_5": "5. الاستفسار ومطابقة الفاتورة",
      "mp_d_tag": "واجهة الإدارة والرقابة اللحظية",
      "mp_d_t": "لوحة المعلومات (Dashboard)",
      "mp_d_p": "تمنح التاجر رؤية شاملة لفروع ومنافذ البيع التابعة له، مع فلترة زمنية دقيقة وإحصائيات فورية عن حالة نقاط البيع ومطابقة الفواتير.",
      "mp_d_f1": "<strong>إجمالي نقاط الدفع:</strong> إحصاء فوري لنقاط البيع (المجموع، بانتظار قرار المؤسسة المالية، المعتمدة، والمرفوضة).",
      "mp_d_f2": "<strong>حالة المدفوعات الدقيقة:</strong> عدد الفواتير المسددة، المبالغ المطابقة برقم المعاملة، والمبالغ المتنازع عليها (Conflict).",
      "mp_d_f3": "<strong>تحديد النطاق الزمني:</strong> فلترة واستعراض المبيعات لأي تاريخ أو فترة زمنية بمرونة كاملة.",
      "mp_p_tag": "إدارة الحسابات والمحافظ المربوطة",
      "mp_p_t": "نقاط الدفع الخاصة بي",
      "mp_p_p": "تتيح للتاجر متابعة نقاط الدفع وأرقام المحافظ وحسابات البنوك المربوطة بفروعه، والاطلاع على حالة اعتماد كل نقطة من البنك أو المحفظة.",
      "mp_p_f1": "<strong>عرض المؤسسات المالية:</strong> عرض المحافظ الرقمية والبنوك المربوطة ضمن نطاق التكامل.",
      "mp_p_f2": "<strong>رمز النقطة (Point Code):</strong> كود تعريفي مخصص لكل نقطة بيع لتمييز عملياتها.",
      "mp_p_f3": "<strong>حالة النقطة وتاريخها:</strong> متابعة حالة الاعتماد (تمت الموافقة / قيد الانتظار) مع تاريخ الإجراء.",
      "mp_p_f4": "<strong>زر مباشر لإضافة نقطة:</strong> إمكانية طلب تفعيل نقطة دفع أو محفظة جديدة بضغطة زر.",
      "mp_a_tag": "توسيع منافذ التحصيل",
      "mp_a_t": "إضافة نقطة دفع / محفظة جديدة",
      "mp_a_p": "شاشة واضحة تمكّن التاجر من تقديم طلب ربط محفظة رقمية أو حساب بنكي جديد لنقاط البيع الخاصة به لمراجعته واعتماده من المؤسسة المالية.",
      "mp_a_f1": "<strong>اختيار المؤسسة المالية:</strong> قائمة منسدلة تضم المحافظ الرقمية والبنوك المتاحة ضمن نطاق التكامل.",
      "mp_a_f2": "<strong>إدخال رمز المحفظة / الكود:</strong> كتابة رقم الحساب أو المحفظة المراد استقبال الأموال عليه.",
      "mp_a_f3": "<strong>المراجعة والاعتماد المصرفي:</strong> تُراجع المؤسسة المالية الطلب وتفعّله وفق إجراءاتها المعتمدة.",
      "mp_h_tag": "توثيق مالي شامل ودقيق",
      "mp_h_t": "سجل المدفوعات التاريخي",
      "mp_h_p": "سجل مفصل لكل دفعة مؤكدة ومرتبطة بحساب التاجر عبر المحافظ والبنوك المتاحة في نطاق التكامل، بالوقت والتاريخ والمبلغ الدقيق.",
      "mp_h_f1": "<strong>رقم المرجع الموحد (Transaction ID):</strong> معرف مرجعي فريد لكل عملية لربطها بالفاتورة بدقة.",
      "mp_h_f2": "<strong>المؤسسة ورمز النقطة:</strong> تحديد جهة الدفع المستخدمة ونقطة البيع المنفذة.",
      "mp_h_f3": "<strong>المبلغ والعملة:</strong> عرض مبلغ العملية وعملتها كما وردت من جهة الدفع.",
      "mp_h_f4": "<strong>حالة المطابقة المحاسبية:</strong> وسم يوضح (مطابقة حسب معرف المعاملة) أو (Conflict) للتأكد من ربطها بنظام Onyx.",
      "mp_h_f5": "<strong>تاريخ ووقت العملية:</strong> توثيق زمني واضح لتاريخ ووقت استلام تأكيد السداد.",
      "mp_i_tag": "تحقق ومطابقة في حالات الاستثناء",
      "mp_i_t": "الاستفسار عن الدفع ومطابقة الفاتورة",
      "mp_i_p": "أداة قوية تتيح للتاجر والكاشير البحث الفوري عن أي معاملة للتأكد من وصولها، أو مطابقة دفعة يدوياً برقم الفاتورة في نظام ERP حال حدوث أي انقطاع للإنترنت.",
      "mp_i_f1": "<strong>ابحث عن معاملة:</strong> استعلام فوري باختيار المؤسسة المالية وإدخال معرف المعاملة.",
      "mp_i_f2": "<strong>مطابقة دفعة (Match a Payment):</strong> ربط العملية بمرجع الفاتورة الصحيح والمبلغ المتوقع يدوياً لحسم أي تضارب.",
      "mp_i_f3": "<strong>معالجة الاستثناءات بأمان:</strong> ضمان عدم تسليم بضاعة إلا بعد التحقق، ومنع تسجيل قيود محاسبية وهمية.",
      "mp_i_btn1": "شاشة البحث",
      "mp_i_btn2": "شاشة مطابقة الدفعة",
      "mp_btn_zoom_ar": "تكبير لقطة الشاشة",
      "mp_zoom": "تكبير بدقة 100%",
      "wa_cta_tag": "▬ تواصل معنا • Slide 12",
      "wa_cta_t1": "لنبدأ بخطوة واحدة",
      "wa_cta_t2": "— ورشة عمل مشتركة",
      "wa_cta_sub": "يسعدنا الإجابة عن استفساراتكم ومناقشة خطوة البداية سواء للتجار أو المؤسسات المالية والبنوك.",
      "wa_hero_btn": "واتساب خدمة العملاء: 782665485",
      "c_licensed": "شركة مالية مرخصة من البنك المركزي اليمني",
      "footer_desc": "منصة تجميع المدفوعات (Payment Aggregator) — ربط وتكامل بين التجار والمحافظ الرقمية والبنوك مع التكامل المحاسبي.",
      "f_b1": "شركة مالية مرخصة من البنك المركزي",
      "f_b2": "ربط الدفع بالفاتورة الصحيحة",
      "f_b3": "تكامل محاسبي تلقائي",
      "footer_copy": "&copy; 2026 Ultimate Pay. جميع الحقوق محفوظة."
    },
    en: {
      "toolbar_pitch_mode": "Presentation Mode",
      "header_tagline": "Payment Aggregator & Accounting Integration",
      "track_merchants": "For Merchants & Businesses",
      "track_banks": "For Banks & Financial Institutions",
      "nav_workflow": "How It Works",
      "nav_cta": "Contact Us",
      "drawer_select_track": "Select Target Audience:",
      "nav_home": "Home",
      "nav_about": "About Us",
      "nav_aggregator": "Payment Aggregator",
      "nav_services": "Merchant Services",
      "nav_banks": "Bank Services",
      "nav_portal": "Merchant Portal",
      "nav_contact": "Contact Us",
      "m_eyebrow": "Presentation for Merchants & Financial Institutions • October 2026",
      "m_hero_title_1": "One Unified Platform Connecting Payments",
      "m_hero_title_2": "To Your Business & Accounting Books",
      "m_hero_desc": "<strong>Ultimate Pay</strong> Payment Aggregator delivers payment visibility across e-wallets and banking apps, notifies your accounting system with the confirmed transaction result in real time, and documents each payment with a unified reference.",
      "m_hero_quote": "«From payment confirmation to invoice update and merchant notification»",
      "m_hero_btn_cycle": "Payment & Integration Cycle",
      "m_hero_btn_workflow": "Information Flow Diagram",
      "m_hero_btn_portal": "Merchant Portal",
      "m_trust_1_title": "Unified Connection with Wallets & Banks",
      "m_trust_1_sub": "Licensed Financial Institution by Central Bank of Yemen",
      "m_trust_2_title": "Automated Accounting Update",
      "m_trust_2_sub": "Instant invoice settlement upon integration setup",
      "m_trust_3_title": "Clear Merchant Notification",
      "m_trust_3_sub": "With invoice number, amount, and payment status",
      "b_eyebrow": "Technical Integration Layer for Financial Institutions, Banks & Wallets",
      "b_hero_title_1": "Delivering Payment Results to Merchants",
      "b_hero_title_2": "And Linking Them to Invoices and Accounting Systems",
      "b_hero_desc": "Ultimate Pay provides a unified technical integration layer between payment results at your bank or wallet and merchant invoices and ERP systems. We make it easy for your merchants to reconcile transactions and update their books instantly, while funds transfer directly between customer and merchant accounts held with you.",
      "b_hero_quote": "«A technical partnership expanding acceptance of your financial services among merchants while reducing operational overhead»",
      "b_hero_btn_arch": "Financial Institution Services",
      "b_hero_btn_req": "Discuss Partnership",
      "b_trust_1_title": "Expanding Acceptance Reach",
      "b_trust_1_sub": "Extensive merchant network via a single integration channel",
      "b_trust_2_title": "Boosting Inflows & Deposits",
      "b_trust_2_sub": "Liquidity moves and remains directly within your bank accounts",
      "b_trust_3_title": "Reducing Operational Overhead",
      "b_trust_3_sub": "Platform links payment results to merchant invoices",
      "arch_title": "Payment Aggregator Operating Model",
      "arch_sub": "Separation of Money Flow from Information Flow",
      "arch_m_tag": "Direct Money Flow",
      "arch_m_sub": "Funds transfer directly between the two accounts",
      "arch_n1": "Customer Account",
      "arch_n2": "Payment Provider (Bank / Wallet)",
      "arch_n3": "Merchant Bank Account",
      "arch_i_tag": "Information & Integration Flow",
      "arch_i_sub": "Ultimate Pay Platform",
      "arch_n4": "Receiving Payment Confirmation",
      "arch_n5": "Ultimate Pay: Invoice Matching",
      "arch_n6": "Updating Onyx ERP + Merchant Notification",
      "arch_live": "From payment confirmation ➔ to updating the invoice in the accounting system ➔ to notifying the merchant immediately",
      "switch_banner_prompt": "You are currently viewing:",
      "abt_lic": "Officially Licensed by the Central Bank of Yemen",
      "abt_tag": "▬ About Us • Presentation for Merchants & Financial Institutions · 02",
      "abt_title_1": "Licensed Financial Institution",
      "abt_title_2": "Operating at the Heart of the Digital Payment Ecosystem",
      "abt_ambition": "Our Ambition: A unified, secure, and accessible financial ecosystem",
      "abt_lead": "<strong>Ultimate Pay:</strong> A financial company licensed by the Central Bank of Yemen, providing specialized integrated payment platforms aimed at enhancing the financial experience for individuals and businesses. In this presentation, we focus on the Payment Aggregator platform: a central connection and integration channel bringing together merchants, digital wallets, and banks through a unified interface, with direct integration into approved ERP systems such as Onyx.",
      "abt_role_t": "Core Role",
      "abt_role_d": "Connecting financial institutions to accounting systems to notify accounting systems of successful payments, while funds transfer directly between customer and merchant accounts via the payment provider.",
      "abt_sol_t": "What the Platform Solves",
      "abt_sol_d": "Delays in recording payments in financial ledgers and heavy manual reconciliation. The platform links payment results to invoices and updates records automatically to streamline tracking and save time.",
      "abt_val_t": "Company Values",
      "abt_val_sub": "Our approved institutional principles in serving our partners:",
      "val_1": "Trustworthiness ✔",
      "val_2": "Transparency ✔",
      "val_3": "Credibility ✔",
      "val_4": "Integrity ✔",
      "abt_beneficiaries": "<strong>Beneficiaries:</strong> Merchants and their customers, financial institutions, and banks",
      "tag_why_us": "▬ Accounting Integration • Slide 09",
      "prob_title_1": "Automated Accounting Entry",
      "prob_title_2": "— Instead of Manual Recording",
      "prob_subtitle": "A realistic comparison between traditional operations without integration and the integrated accounting model with Ultimate Pay:",
      "card_pain_badge": "Traditional Workflow (Without Integration) ✖",
      "pain_1_t": "Manual data entry for each payment after completion",
      "pain_1_d": "Consumes accountant time entering each transaction manually after checkout.",
      "pain_2_t": "Delays in recording payments in accounting books",
      "pain_2_d": "Accumulation of unrecorded invoices and difficult daily closures.",
      "pain_3_t": "Difficulty identifying settled invoices quickly",
      "pain_3_d": "Time lost cross-checking and reconciling multiple payment notifications.",
      "pain_4_t": "Risk of error when matching payment to invoice",
      "pain_4_d": "Human errors in recording reference numbers or duplicate entries.",
      "card_gain_badge": "Ultimate Pay with Accounting Integration ✔",
      "gain_1_t": "Linking payment result to the correct invoice",
      "gain_1_d": "Each confirmed payment result is tied to the correct invoice with a unified reference.",
      "gain_2_t": "Automated amount entry upon confirmed success",
      "gain_2_d": "Invoice amounts are recorded automatically in the merchant ERP upon receiving payment confirmation.",
      "gain_3_t": "Notifying merchant with invoice number and amount",
      "gain_3_d": "Merchant receives immediate notification detailing invoice number, amount, and payment status.",
      "gain_4_t": "Reduced manual entry and effortless tracking",
      "gain_4_d": "Saves accountant time and streamlines tracking settled invoices without lengthy manual audit.",
      "prob_note": "Automated accounting entry is activated upon configuring integration with the merchant accounting system.",
      "why_tag": "▬ Why Ultimate Pay • Slide 04",
      "why_t1": "Five Points Explaining Service Value",
      "why_t2": "— Without Unsubstantiated Claims",
      "why_sub": "Presentation for Merchants & Financial Institutions · Designed to make the entire payment ecosystem clearer, faster, and easier to track:",
      "why_b1": "Accurate Matching",
      "why_c1_t": "Linking Payment to Invoice",
      "why_c1_d": "Every confirmed payment result is linked to the correct invoice.",
      "why_c1_f": "Documented Matching",
      "why_b2": "Official License",
      "why_c2_t": "Licensed Financial Institution",
      "why_c2_d": "A financial company licensed by the Central Bank of Yemen.",
      "why_c2_f": "Full Banking Trustworthiness",
      "why_b3": "Automated Accounting",
      "why_c3_t": "Automated Accounting Entry",
      "why_c3_d": "Upon successful payment and active integration with the accounting system.",
      "why_c3_f": "Direct Ledger Update",
      "why_b4": "Instant Notification",
      "why_c4_t": "Clear Merchant Notification",
      "why_c4_d": "With invoice number, amount, and payment status.",
      "why_c4_f": "Instant On-Screen Clarity",
      "why_b5": "Effortless Tracking",
      "why_c5_t": "Automated Linking for Financial Results",
      "why_c5_d": "Saves accountant time and streamlines tracking settled invoices.",
      "why_c5_f": "Higher Operational Efficiency",
      "why_quote": "«Our value is not in sending a notification — it is in making the entire payment ecosystem clearer, faster, and easier to monitor for both merchant and bank alike.»",
      "tag_aggregator": "Core Concept • Slide 03",
      "agg_title_1": "Payment, Invoice, and Accounting System",
      "agg_title_2": "— In One Clear Path",
      "agg_subtitle": "💡 <strong>Ultimate Pay Role:</strong> Linking the payment result to the correct invoice and accounting system, then notifying the merchant.",
      "p1_t": "👤 Customer",
      "p1_d": "Pays the invoice amount through their e-wallet or banking app.",
      "p2_t": "💳 Wallet / Banking App",
      "p2_d": "Transfers the funds directly from the customer account to the merchant account.",
      "p3_t": "🏬 Merchant",
      "p3_d": "Issues the invoice and receives notification of the payment result.",
      "p4_t": "📊 Accounting System",
      "p4_d": "Invoices and receipt vouchers update automatically once integration is enabled.",
      "cyc_tag": "▬ Payment & Matching Cycle • Slide 05",
      "cyc_title": "From Invoice Issuance to Closure — In Four Clear Steps",
      "cyc_sub": "A concise breakdown illustrating the exact transaction sequence:",
      "cyc_s1_t": "Merchant Invoice Issuance",
      "cyc_s1_d": "The merchant issues an invoice in their accounting system with a specific number and amount.",
      "cyc_s1_b": "Invoice Created • Awaiting Payment",
      "cyc_s2_t": "Direct Customer Payment",
      "cyc_s2_d": "The customer completes payment via their wallet or banking app using that wallet's own method; funds move directly from customer account to merchant account.",
      "cyc_s2_b": "Direct Funds Transfer to Merchant",
      "cyc_s3_t": "Receiving Payment Confirmation",
      "cyc_s3_d": "Ultimate Pay receives the confirmed payment result directly from the payment provider (bank or wallet).",
      "cyc_s3_b": "Result Confirmed • Matched to Invoice",
      "cyc_s4_t": "Invoice Linking & Accounting Update",
      "cyc_s4_d": "The result is linked to the correct invoice and reflected automatically in the accounting system (such as Onyx ERP) with instant merchant notification.",
      "cyc_s4_b": "Paid • Accounting Updated",
      "cyc_warn": "🔴 <strong>Important Note:</strong> An incomplete or pending transaction is clearly displayed to the merchant and is never treated as paid.",
      "mb_tag": "▬ Value for the Merchant • Slide 06",
      "mb_title": "What Does Your Business Gain Daily with Ultimate Pay?",
      "mb_quote": "«The service is not just an extra technical tool — it is part of the sales cycle: invoice, code, notification, and accurate accounting entry.»",
      "mb_1_t": "Clear Invoice Linking",
      "mb_1_d": "Every payment transaction is tied to its exact invoice number and amount.",
      "mb_2_t": "Result Notification",
      "mb_2_d": "The merchant receives the invoice number, amount, and payment status.",
      "mb_3_t": "Automated Bookkeeping",
      "mb_3_d": "The amount is posted automatically to the accounting system upon confirmation.",
      "mb_4_t": "Easier Invoice Tracking",
      "mb_4_d": "Know immediately which invoices are settled without lengthy manual audits.",
      "mb_5_t": "Less Manual Data Entry",
      "mb_5_d": "Reduces the accountant's workload when recording incoming payments.",
      "roles_tag": "▬ Collaboration & Integration Model • Slide 10",
      "roles_title": "Clear Roles Across Parties",
      "roles_sub": "Well-defined responsibility boundaries ensure financial and technical discipline",
      "role_bank_t": "Financial Institution (Bank / Wallet)",
      "role_bank_1": "Providing payment channels to customers",
      "role_bank_2": "Executing payment via its approved mechanism",
      "role_bank_3": "Approving merchant activation requests",
      "role_bank_4": "Sharing confirmed payment result with platform",
      "role_up_t": "Ultimate Pay — Integration Layer",
      "role_up_1": "Confirming the received payment result",
      "role_up_2": "Matching result with the correct invoice",
      "role_up_3": "Integrating with the merchant accounting system",
      "role_up_4": "Notifying the merchant of the payment result",
      "role_mer_t": "Merchant",
      "role_mer_1": "Issuing invoices in their accounting system",
      "role_mer_2": "Receiving payment status notifications",
      "role_mer_3": "Tracking settled invoices",
      "role_act_lbl": "Activation Flow:",
      "role_act_1": "Merchant Request",
      "role_act_2": "Financial Institution Approval",
      "role_act_3": "Payment Channel Activated",
      "role_principle": "<strong>🛡 Core Principle:</strong> Ultimate Pay never holds or transfers customer funds — money moves directly from customer account to merchant account.",
      "wf_tag": "How It Works • Slide 11",
      "wf_title_1": "Invoice Payment Journey",
      "wf_title_2": "— From Issuance to Payment Confirmation",
      "wf_subtitle": "Four primary steps outlining the exact process across the ecosystem parties:",
      "wf_p1_t": "1. Invoice Issuance at Merchant",
      "wf_p1_d": "The merchant issues an invoice through their accounting system with a defined number and amount for subsequent payment matching.",
      "wf_p2_t": "2. Customer Payment at Provider",
      "wf_p2_d": "The customer completes payment via their wallet or banking app using its approved mechanism, and funds transfer directly to the merchant account.",
      "wf_p3_t": "3. Result Confirmation in Ultimate Pay",
      "wf_p3_d": "The payment provider transmits payment confirmation to Ultimate Pay, which receives the result under the verified reference.",
      "wf_p4_t": "4. Matching, ERP Update & Notification",
      "wf_p4_d": "The result is matched to the invoice, triggering an instant notification to update the accounting system and alert the merchant.",
      "tag_services": "Payment Aggregator Platform Services",
      "serv_title_1": "Connection, Matching & Integration Services:",
      "serv_title_2": "From Payment Result Confirmation",
      "serv_title_3": "To Accounting Update & Merchant Notification",
      "serv_subtitle": "Specialized technical solutions connecting merchant invoices to payment results at banks and wallets, and automating accounting reconciliation:",
      "s1_badge": "Transaction Matching",
      "s1_name": "Linking Payment Results to Invoices",
      "s1_desc": "Receiving verified payment results from banks and wallets and automatically matching them to the correct invoice number and reference without confusion or duplication.",
      "s1_f1": "Instant link to correct invoice number",
      "s1_f2": "Automated matching preventing manual errors",
      "s1_f3": "Documenting each payment with a unified reference",
      "s2_badge": "Accounting Integration",
      "s2_name": "Automated Accounting Integration",
      "s2_desc": "Updating payment records automatically in merchant ERP (such as Onyx ERP) upon confirmed payment success when integration is active.",
      "s2_f1": "Automated entry replacing manual bookkeeping",
      "s2_f2": "Continuous matching preventing cash discrepancy",
      "s2_f3": "Direct integration with approved ERP systems",
      "s3_badge": "Easy Payment",
      "s3_name": "Invoice QR Code Linking",
      "s3_desc": "Generating payment QR codes linked directly to the invoice number and exact amount for compatible wallets and banking apps.",
      "s3_f1": "QR code linked to invoice number and amount",
      "s3_f2": "Supports compatible wallets and banking apps",
      "s3_f3": "Direct payment without amount entry errors",
      "s4_badge": "Management & Monitoring",
      "s4_name": "Merchant Portal",
      "s4_desc": "A dedicated merchant portal allowing tracking of transactions and invoice statuses, requesting wallet additions, and configuring notification and integration settings.",
      "s4_f1": "Track invoice statuses (Paid, Pending, Incomplete)",
      "s4_f2": "Request wallet additions and send for approval",
      "s4_f3": "Configure notification channels and ERP integration",
      "s5_badge": "Instant Notification",
      "s5_name": "Transaction Tracking & Payment Notifications",
      "s5_desc": "Delivering verified, documented transaction notifications to the merchant detailing invoice number, amount, and payment status immediately upon confirmation.",
      "s5_f1": "Notify merchant with invoice number and amount",
      "s5_f2": "Real-time alert upon payment confirmation",
      "s5_f3": "Immediate cashier POS screen update",
      "bank_section_tag": "▬ Value for Banks & Financial Institutions • Slide 08",
      "bank_title_1": "A Technical Partnership Expanding",
      "bank_title_2": "Acceptance of Your Financial Services Among Merchants",
      "bank_quote": "«Unified value for all parties: Bank, Wallet, Merchant, and Customer — with disciplined financial management for everyone.»",
      "bank_lead": "Ultimate Pay provides an institutional collaboration model with well-defined boundaries that enhances the reach of your financial services:",
      "bc_1_b": "1. Acceptance Reach",
      "bc_1_t": "Expanding Acceptance Reach",
      "bc_1_d": "Bringing your bank and wallet services to a broad merchant network through one integration channel.",
      "bc_2_b": "2. Reduced Overhead",
      "bc_2_t": "Reducing Operational Overhead",
      "bc_2_d": "The platform handles linking the payment result directly to the merchant's invoice.",
      "bc_3_b": "3. Deposit Retention",
      "bc_3_t": "Strengthening Flows & Deposits",
      "bc_3_d": "Sales funds move directly between your customers' and merchants' accounts — keeping liquidity within your institution.",
      "bc_4_b": "4. Financial Inclusion",
      "bc_4_t": "Supporting Financial Inclusion",
      "bc_4_d": "Payments follow each wallet and banking app's approved mechanism directly between customer and merchant accounts.",
      "bank_note": "<strong>Institutional collaboration model with clear boundaries:</strong> The bank/wallet executes payment and transfers funds directly between accounts, while the platform manages technical integration, invoice matching, and merchant notifications.",
      "bank_box_kpi": "Institutional Partnership Pillars",
      "kpi_uptime": "Direct transfer of funds without platform custody",
      "kpi_latency": "Instant merchant notification and ledger update",
      "kpi_cby": "Financial Institution Licensed by Central Bank",
      "bank_cta_btn": "Discuss Integration Workshop & Partnership",
      "tag_onboarding": "▬ Next Steps • Slide 12",
      "step_title_1": "Let Us Begin with One Step",
      "step_title_2": "— A Joint Workshop",
      "step_title_3": "For a Better Financial Future",
      "step_subtitle": "Thank you — and we are glad to answer your questions and discuss the starting step:",
      "onb_m_t": "For Merchants & Businesses 🏬",
      "onb_m_1": "Prepare business profile details and approved bank/wallet account.",
      "onb_m_2": "Specify the accounting system to be integrated.",
      "onb_m_3": "Add payment wallets and start receiving alerts once approved.",
      "onb_b_t": "For Financial Institutions (Wallets & Banks) 🏛",
      "onb_b_1": "Review available integration mechanisms and exchange required documentation.",
      "onb_b_2": "Agree on service scope and collaboration model.",
      "onb_b_3": "Prepare a sandbox environment to initiate practical testing.",
      "mp_tag": "Official Merchant Portal",
      "mp_t1": "What Services & Screens Does a Merchant Get",
      "mp_t2": "Upon Joining the Platform and Opening an Account?",
      "mp_desc": "Upon registration, the merchant receives an official account in the Merchant Portal — an integrated workspace offering organized tracking of payment points, payment history, transaction inquiries, and invoice matching.",
      "mp_note": "Available features may vary depending on merchant configuration and approved integration.",
      "mp_tab_1": "1. Dashboard",
      "mp_tab_2": "2. My Payment Points",
      "mp_tab_3": "3. Add Payment Point",
      "mp_tab_4": "4. Payment History",
      "mp_tab_5": "5. Payment Inquiry & Match",
      "mp_d_tag": "Real-Time Management & Oversight",
      "mp_d_t": "Dashboard",
      "mp_d_p": "Gives the merchant comprehensive visibility across all branches and POS locations, with flexible date filtering and live payment reconciliation summaries.",
      "mp_d_f1": "<strong>Payment Points Summary:</strong> Live breakdown of POS channels (Total, Pending Institution Decision, Approved, Rejected).",
      "mp_d_f2": "<strong>Accurate Payment Status:</strong> Counts of settled invoices, ID-matched amounts, and conflict items.",
      "mp_d_f3": "<strong>Custom Date Filtering:</strong> Review sales and transaction totals across any selected date range.",
      "mp_p_tag": "Manage Linked Accounts & Wallets",
      "mp_p_t": "My Payment Points",
      "mp_p_p": "Allows merchants to monitor all connected payment points, digital wallets, and bank accounts across branches, along with approval status per provider.",
      "mp_p_f1": "<strong>Connected Providers:</strong> View digital wallets and banks linked within the approved integration scope.",
      "mp_p_f2": "<strong>Point Code:</strong> Dedicated identifier assigned to each POS terminal to distinguish its transactions.",
      "mp_p_f3": "<strong>Status & Date Tracking:</strong> Monitor approval progress (Approved / Pending) with action timestamps.",
      "mp_p_f4": "<strong>Quick Point Request:</strong> Submit a request to activate a new payment point or wallet directly.",
      "mp_a_tag": "Expand Collection Channels",
      "mp_a_t": "Add New Payment Point / Wallet",
      "mp_a_p": "A clean interface enabling merchants to submit requests linking new digital wallets or bank accounts to their POS locations for financial institution review and approval.",
      "mp_a_f1": "<strong>Select Financial Institution:</strong> Dropdown list displaying digital wallets and banks available in the integration scope.",
      "mp_a_f2": "<strong>Enter Wallet Code / Account ID:</strong> Specify the destination account or wallet code for receiving funds.",
      "mp_a_f3": "<strong>Financial Institution Review & Approval:</strong> The bank or wallet provider reviews and activates the request per its approved procedures.",
      "mp_h_tag": "Detailed Financial Audit Log",
      "mp_h_t": "Historical Payment Log",
      "mp_h_p": "A detailed record of every confirmed payment linked to the merchant's account across integrated wallets and banks, including timestamp and exact amount.",
      "mp_h_f1": "<strong>Unified Reference (Transaction ID):</strong> Unique reference identifier per transaction for exact invoice linking.",
      "mp_h_f2": "<strong>Provider & Point Code:</strong> Clearly identifies the payment provider and originating POS terminal.",
      "mp_h_f3": "<strong>Amount & Currency:</strong> Displays the transaction amount and currency as confirmed by the payment provider.",
      "mp_h_f4": "<strong>Accounting Reconciliation Status:</strong> Clear badge indicating (Matched by Transaction ID) or (Conflict) for Onyx ERP sync verification.",
      "mp_h_f5": "<strong>Date & Time Stamp:</strong> Accurate timestamp recording when payment confirmation was received.",
      "mp_i_tag": "Verification & Exception Matching",
      "mp_i_t": "Payment Inquiry & Invoice Matching",
      "mp_i_p": "A reliable tool allowing merchants and cashiers to search for any transaction confirmation or manually match a payment to an ERP invoice during connectivity exceptions.",
      "mp_i_f1": "<strong>Search Transaction:</strong> Instant inquiry by selecting the financial institution and entering the transaction ID.",
      "mp_i_f2": "<strong>Match a Payment:</strong> Manually link a verified payment to its exact invoice reference and expected amount to resolve conflicts.",
      "mp_i_f3": "<strong>Safe Exception Handling:</strong> Ensures goods are released only after verification while preventing erroneous accounting entries.",
      "mp_i_btn1": "Search Screen",
      "mp_i_btn2": "Match Payment Screen",
      "mp_btn_zoom_ar": "Zoom Screenshot",
      "mp_zoom": "Zoom 100%",
      "wa_cta_tag": "▬ Contact Us • Slide 12",
      "wa_cta_t1": "Let Us Begin with One Step",
      "wa_cta_t2": "— A Joint Workshop",
      "wa_cta_sub": "We are pleased to answer your questions and discuss next steps for both merchants and financial institutions.",
      "wa_hero_btn": "Customer Care WhatsApp: 782665485",
      "c_licensed": "Financial Company Licensed by Central Bank of Yemen",
      "footer_desc": "Payment Aggregator Platform — Connection and integration between merchants, digital wallets, and banks with accounting synchronization.",
      "f_b1": "Licensed by Central Bank of Yemen",
      "f_b2": "Accurate Payment-to-Invoice Linking",
      "f_b3": "Automated Accounting Integration",
      "footer_copy": "&copy; 2026 Ultimate Pay. All Rights Reserved."
    }
  };

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('data-lang', lang);

    const langElements = document.querySelectorAll('[data-i18n]');
    langElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update Language Button Labels
    const currentLangLabel = document.getElementById('currentLangLabel');
    if (currentLangLabel) {
      currentLangLabel.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }
    const headerLangLabel = document.getElementById('headerLangLabel');
    if (headerLangLabel) {
      headerLangLabel.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }

    const drawerLangLabel = document.getElementById('drawerLangLabel');
    if (drawerLangLabel) {
      drawerLangLabel.textContent = lang === 'ar' ? 'English (Switch to English)' : 'العربية (التبديل إلى العربية)';
    }

    // Sync Theme Button Labels with Current Language
    const isLight = document.body.classList.contains('theme-light');
    const themeLbl = document.getElementById('themeLabel');
    const drawerThemeLbl = document.getElementById('drawerThemeLabel');
    if (themeLbl) {
      themeLbl.textContent = isLight ? (lang === 'ar' ? 'ليلي' : 'Dark') : (lang === 'ar' ? 'نهاري' : 'Light');
    }
    if (drawerThemeLbl) {
      drawerThemeLbl.textContent = isLight ? (lang === 'ar' ? 'المظهر الليلي' : 'Dark Mode') : (lang === 'ar' ? 'المظهر النهاري' : 'Light Mode');
    }

    document.title = lang === 'ar'
      ? 'Ultimate Pay | ألتميت باي — منصة تجميع المدفوعات والتكامل المحاسبي'
      : 'Ultimate Pay — Payment Aggregator & Accounting Integration';

    localStorage.setItem('ultimatepay_lang', lang);
  }

  // Language Toggle Button (Toolbar & Header)
  const btnToggleLang = document.getElementById('btnToggleLang');
  if (btnToggleLang) {
    btnToggleLang.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  const btnHeaderLang = document.getElementById('btnHeaderLang');
  if (btnHeaderLang) {
    btnHeaderLang.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // Language Toggle Button (Mobile Drawer)
  const btnDrawerLang = document.getElementById('btnDrawerLang');
  if (btnDrawerLang) {
    btnDrawerLang.addEventListener('click', () => {
      applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
      closeMobileDrawer();
    });
  }

  // Load Saved Language
  const savedLang = localStorage.getItem('ultimatepay_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
    applyLanguage(savedLang);
  }

  // ==========================================
  // 2. Audience Track Switcher (Merchants vs Banks) & Smooth Scroll
  // ==========================================
  let currentTrack = 'merchants';

  function setActiveTrack(trackId, shouldScroll = false) {
    if (trackId !== 'merchants' && trackId !== 'banks') return;
    currentTrack = trackId;

    document.body.classList.remove('track-merchants', 'track-banks');
    document.body.classList.add(`track-${trackId}`);
    document.body.setAttribute('data-track', trackId);

    // Update buttons in main header
    document.querySelectorAll('.track-selector .track-btn').forEach(btn => {
      const isTarget = btn.getAttribute('data-target') === trackId;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
    });

    // Update buttons in sticky banner
    document.querySelectorAll('.track-pills .track-pill').forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-target') === trackId);
    });

    // Update buttons in mobile drawer
    document.querySelectorAll('.drawer-track-nav .drawer-track-btn').forEach(dBtn => {
      dBtn.classList.toggle('active', dBtn.getAttribute('data-target') === trackId);
    });

    // Switch Hero Content
    const heroMerchants = document.getElementById('heroMerchants');
    const heroBanks = document.getElementById('heroBanks');
    if (heroMerchants && heroBanks) {
      if (trackId === 'merchants') {
        heroMerchants.style.display = 'block';
        heroBanks.style.display = 'none';
      } else {
        heroMerchants.style.display = 'none';
        heroBanks.style.display = 'block';
      }
    }

    // Scroll smoothly to the target section when user explicitly clicks
    if (shouldScroll) {
      const targetId = (trackId === 'merchants') ? 'servicesGrid' : 'bankPartnership';
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        const header = document.getElementById('mainHeader');
        const headerOffset = header ? header.offsetHeight : 70;
        const elemPos = targetElem.getBoundingClientRect().top + window.pageYOffset - headerOffset - 14;
        window.scrollTo({
          top: Math.max(0, elemPos),
          behavior: 'smooth'
        });
      }
    }
  }

  document.querySelectorAll('[data-target="merchants"], [data-target="banks"]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const target = elem.getAttribute('data-target');
      if (target) {
        setActiveTrack(target, true);
        if (typeof closeMobileDrawer === 'function') {
          closeMobileDrawer();
        }
      }
    });
  });

  // ==========================================
  // 3. Presentation / Meeting Fullscreen Mode
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
  // 4. Mobile Navigation Drawer
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  function openMobileDrawer() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.add('open');
      drawerBackdrop.classList.add('active', 'open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileDrawer() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('active', 'open');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileDrawer);

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  // ==========================================
  // 5. Theme Toggle (Dark / Light)
  // ==========================================
  const btnToggleTheme = document.getElementById('btnToggleTheme');
  const btnHeaderTheme = document.getElementById('btnHeaderTheme');
  const btnDrawerTheme = document.getElementById('btnDrawerTheme');
  const themeIcon = document.getElementById('themeIcon');
  const headerThemeIcon = document.getElementById('headerThemeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const drawerThemeIcon = document.getElementById('drawerThemeIcon');
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
      if (drawerThemeLabel) drawerThemeLabel.textContent = currentLang === 'ar' ? 'المظهر الليلي' : 'Dark Mode';
      localStorage.setItem('ultimatepay_theme', 'light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
      if (headerThemeIcon) headerThemeIcon.className = 'fa-solid fa-sun';
      if (drawerThemeIcon) drawerThemeIcon.className = 'fa-solid fa-sun';
      if (themeLabel) themeLabel.textContent = currentLang === 'ar' ? 'نهاري' : 'Light';
      if (drawerThemeLabel) drawerThemeLabel.textContent = currentLang === 'ar' ? 'المظهر النهاري' : 'Light Mode';
      localStorage.setItem('ultimatepay_theme', 'dark');
    }
  }

  if (btnToggleTheme) btnToggleTheme.addEventListener('click', toggleTheme);
  if (btnHeaderTheme) btnHeaderTheme.addEventListener('click', toggleTheme);
  if (btnDrawerTheme) btnDrawerTheme.addEventListener('click', toggleTheme);

  const savedTheme = localStorage.getItem('ultimatepay_theme');
  if (savedTheme === 'light') {
    toggleTheme();
  }

});

// ==========================================
// 6. Merchant Portal Tabs Controller
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

// ==========================================
// 7. Image Lightbox Modal Controller
// ==========================================
window.openImageModal = function(src, arCaption, enCaption) {
  const modal = document.getElementById('imageLightboxModal');
  const modalImg = document.getElementById('lightboxModalImg');
  const modalCaption = document.getElementById('lightboxModalCaption');
  const lang = document.documentElement.getAttribute('lang') || 'ar';
  const captionText = (lang === 'en' && enCaption) ? enCaption : (arCaption || '');
  if (modal && modalImg) {
    modalImg.src = src;
    if (modalCaption) modalCaption.textContent = captionText;
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



// ==========================================
// Universal Header-Offset-Aware Anchor Scrolling
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href === '#!') return;
      const targetElem = document.querySelector(href);
      if (targetElem) {
        e.preventDefault();
        const header = document.getElementById('mainHeader');
        const headerOffset = header ? header.offsetHeight : 70;
        const elemPos = targetElem.getBoundingClientRect().top + window.pageYOffset - headerOffset - 14;
        window.scrollTo({
          top: Math.max(0, elemPos),
          behavior: 'smooth'
        });
        if (typeof closeMobileDrawer === 'function') {
          closeMobileDrawer();
        }
        try {
          history.pushState(null, '', href);
        } catch (_) {}
      }
    });
  });
});
