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
      "m_hero_desc": "منصة <strong>Ultimate Pay",
      "m_hero_quote": "«من تأكيد الدفع إلى تحديث الفاتورة وإشعار التاجر»",
      "m_hero_btn_cycle": "كيف تعمل الخدمة و R2P",
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
      "abt_lead": "<strong>Ultimate Pay :",
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
      "abt_beneficiaries": "<strong>المستفيدون:",
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
      "agg_subtitle": "💡 <strong>دور Ultimate Pay:",
      "wf_tag": "آلية العمل • Slide 11",
      "wf_title_1": "رحلة سداد فاتورة",
      "wf_title_2": "— من إصدارها حتى تأكيد السداد",
      "wf_subtitle": "أربع خطوات رئيسية تختصر مسار العملية بدقة بين أطراف المنظومة:",
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
      "s3_badge": "طلب الدفع",
      "s3_name": "خدمة طلب الدفع R2P ورموز QR",
      "s3_desc": "إنشاء طلبات دفع ورموز QR مرتبطة برقم الفاتورة والمبلغ الدقيق لسداد العميل عبر المحفظة أو التطبيق البنكي بسهولة.",
      "s3_f1": "إنشاء طلب دفع مرتبط بالفاتورة",
      "s3_f2": "دعم المحافظ والتطبيقات البنكية",
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
      "bank_lead": "توفر Ultimate Pay نموذج تعاون مؤسسي بحدود مسؤوليات واضحة يعزز وصول خدماتكم المالية:",
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
      "wa_cta_tag": "▬ تواصل معنا • Slide 12",
      "wa_cta_t1": "لنبدأ بخطوة واحدة",
      "wa_cta_t2": "— ورشة عمل مشتركة",
      "wa_cta_sub": "يسعدنا الإجابة عن استفساراتكم ومناقشة خطوة البداية سواء للتجار أو المؤسسات المالية والبنوك.",
      "wa_hero_btn": "واتساب خدمة العملاء: 782665485",
      "c_licensed": "شركة مالية مرخصة من البنك المركزي اليمني",
      "footer_desc": "منصة تجميع المدفوعات (Payment Aggregator) — ربط وتكامل بين التجار والمحافظ الرقمية والبنوك مع التكامل المحاسبي."
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
      "m_hero_desc": "<strong>Ultimate Pay</strong> Payment Aggregator delivers payment requests to customers via e-wallets and banking apps, notifies your accounting system with the transaction result in real time, and documents each payment with a unified reference.",
      "m_hero_quote": "«From payment confirmation to invoice update and merchant notification»",
      "m_hero_btn_cycle": "How It Works & R2P",
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
      "pain_3_d": "Time lost cross-checking and reconciling multiple payment SMS notifications.",
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
      "why_c4_f": "Instant On-Screen Confidence",
      "why_b5": "Effortless Tracking",
      "why_c5_t": "Automated Linking for All Financial Transactions",
      "why_c5_d": "Saves accountant time and streamlines tracking settled invoices.",
      "why_c5_f": "Higher Operational Efficiency",
      "why_quote": "«Our value is not in sending a notification — it is in making the entire payment ecosystem clearer, faster, and easier to monitor for both merchant and bank alike.»",
      "tag_aggregator": "Core Concept • Slide 03",
      "agg_title_1": "Payment, Invoice, and Accounting System",
      "agg_title_2": "— In One Clear Path",
      "agg_subtitle": "💡 <strong>Ultimate Pay Role:</strong> Linking the payment result to the correct invoice and accounting system, then notifying the merchant.",
      "wf_tag": "How It Works • Slide 11",
      "wf_title_1": "Invoice Payment Journey",
      "wf_title_2": "— From Issuance to Payment Confirmation",
      "wf_subtitle": "Four primary steps outlining the exact process across the ecosystem parties:",
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
      "s3_badge": "Payment Request",
      "s3_name": "R2P Service & QR Codes",
      "s3_desc": "Generating payment requests and dynamic QR codes linked to the invoice number and exact amount for frictionless customer payment via wallet or banking app.",
      "s3_f1": "Generate payment request tied to invoice",
      "s3_f2": "Supports wallets and mobile banking apps",
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
      "bank_lead": "Ultimate Pay provides an institutional collaboration model with well-defined boundaries that enhances the reach of your financial services:",
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
      "wa_cta_tag": "▬ Contact Us • Slide 12",
      "wa_cta_t1": "Let Us Begin with One Step",
      "wa_cta_t2": "— A Joint Workshop",
      "wa_cta_sub": "We are pleased to answer your questions and discuss next steps for both merchants and financial institutions.",
      "wa_hero_btn": "Customer Care WhatsApp: 782665485",
      "c_licensed": "Financial Company Licensed by Central Bank of Yemen",
      "footer_desc": "Payment Aggregator Platform — Connection and integration between merchants, digital wallets, and banks with accounting synchronization."
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

    const drawerLangLabel = document.getElementById('drawerLangLabel');
    if (drawerLangLabel) {
      drawerLangLabel.textContent = lang === 'ar' ? 'English (Switch to English)' : 'العربية (التبديل إلى العربية)';
    }

    localStorage.setItem('ultimatepay_lang', lang);
  }

  // Language Toggle Button (Toolbar)
  const btnToggleLang = document.getElementById('btnToggleLang');
  if (btnToggleLang) {
    btnToggleLang.addEventListener('click', () => {
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
  // 2. Audience Track Switcher (Merchants vs Banks)
  // ==========================================
  let currentTrack = 'merchants';

  function setActiveTrack(trackId) {
    if (trackId !== 'merchants' && trackId !== 'banks') return;
    currentTrack = trackId;

    document.body.classList.remove('track-merchants', 'track-banks');
    document.body.classList.add(`track-${trackId}`);
    document.body.setAttribute('data-track', trackId);

    // Update buttons in main header
    document.querySelectorAll('.track-selector .track-btn').forEach(btn => {
      if (btn.getAttribute('data-target') === trackId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update buttons in sticky banner
    document.querySelectorAll('.track-pills .track-pill').forEach(pill => {
      if (pill.getAttribute('data-target') === trackId) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Update buttons in mobile drawer
    document.querySelectorAll('.drawer-track-nav .drawer-track-btn').forEach(dBtn => {
      if (dBtn.getAttribute('data-target') === trackId) {
        dBtn.classList.add('active');
      } else {
        dBtn.classList.remove('active');
      }
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
  }

  document.querySelectorAll('[data-target="merchants"], [data-target="banks"]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      const target = elem.getAttribute('data-target');
      if (target) {
        setActiveTrack(target);
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
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileDrawer() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('active');
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

