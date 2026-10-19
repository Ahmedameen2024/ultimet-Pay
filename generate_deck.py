# -*- coding: utf-8 -*-
"""
Ultimate Pay Professional Presentation Generator (v2)
- Enforces native RTL on every paragraph
- Perfectly calculates card padding and text margins to eliminate clipping
- High-contrast colors, professional typography, and exact visual replication of reference slides
- High-res embedded photos and transparent logos
- Full speaker notes on all 16 slides
"""

import os
import sys
sys.path.insert(0, r'.venv\Lib\site-packages')

from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# ---------------------------------------------------------
# PALETTE DEFINITIONS
# ---------------------------------------------------------
DARK_GREEN    = RGBColor(12, 57, 37)       # #0C3925
ACCENT_GREEN  = RGBColor(22, 163, 74)     # #16A34A
BRIGHT_GREEN  = RGBColor(34, 197, 94)     # #22C55E
LIGHT_BG      = RGBColor(246, 248, 246)   # #F6F8F6 Canvas
WHITE         = RGBColor(255, 255, 255)   # #FFFFFF
CARD_BORDER   = RGBColor(226, 232, 240)   # #E2E8F0
DARK_TEXT     = RGBColor(15, 23, 42)      # #0F172A
BODY_TEXT     = RGBColor(51, 65, 85)      # #334155
MUTED_TEXT    = RGBColor(100, 116, 139)   # #64748B
LIGHT_GREEN_BG= RGBColor(240, 253, 244)   # #F0FDF4
LIGHT_RED_BG  = RGBColor(254, 242, 242)   # #FEF2F2
RED_BORDER    = RGBColor(254, 202, 202)   # #FECACA
DANGER_RED    = RGBColor(220, 38, 38)     # #DC2626
AMBER_BG      = RGBColor(255, 251, 235)   # #FFFBEB
AMBER_BORDER  = RGBColor(245, 158, 11)    # #F59E0B
AMBER_TEXT    = RGBColor(180, 83, 9)      # #B45309

FONT_ARABIC = "Cairo"
FONT_ENG = "Outfit"

def set_rtl(paragraph, alignment=PP_ALIGN.RIGHT):
    paragraph._p.get_or_add_pPr().set('rtl', '1')
    paragraph.alignment = alignment

def add_header(slide, tag_text, title_text, is_dark=False, slide_num=""):
    # Logo on Top-Left
    logo_path = 'logo_white_trans.png' if is_dark else 'logo_dark_trans.png'
    if os.path.exists(logo_path):
        slide.shapes.add_picture(logo_path, Inches(0.8), Inches(0.4), width=Inches(1.8))

    # Category Tag on Top-Right
    tag_box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.8), Inches(0.42), Inches(2.7), Inches(0.4))
    tag_box.fill.solid()
    tag_box.fill.fore_color.rgb = RGBColor(18, 80, 52) if is_dark else LIGHT_GREEN_BG
    tag_box.line.color.rgb = ACCENT_GREEN
    tag_box.line.width = Pt(1)
    tf = tag_box.text_frame
    tf.word_wrap = False
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    p.text = tag_text + "  ▬"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = RGBColor(134, 239, 172) if is_dark else DARK_GREEN
    set_rtl(p, PP_ALIGN.CENTER)

    # Main Title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.92), Inches(11.733), Inches(0.75))
    tf = title_box.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    p.text = title_text
    p.font.name = FONT_ARABIC
    p.font.size = Pt(24)
    p.font.bold = True
    p.font.color.rgb = WHITE if is_dark else DARK_TEXT
    set_rtl(p, PP_ALIGN.RIGHT)

    # Footer
    if slide_num:
        footer_box = slide.shapes.add_textbox(Inches(0.8), Inches(7.05), Inches(11.733), Inches(0.35))
        tf = footer_box.text_frame
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        p.text = f"Ultimate Pay  ——  عرض التجار والمؤسسات المالية · {slide_num:02d}"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(9)
        p.font.color.rgb = RGBColor(148, 163, 184)
        set_rtl(p, PP_ALIGN.RIGHT)

def set_slide_background(slide, color):
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg.fill.solid()
    bg.fill.fore_color.rgb = color
    bg.line.fill.background()
    return bg

def set_notes(slide, notes_text):
    notes_slide = slide.notes_slide
    tf = notes_slide.notes_text_frame
    tf.text = notes_text

def build_deck():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # =========================================================================
    # SLIDE 1: الغلاف الرئيسي (Main Cover)
    # =========================================================================
    s1 = prs.slides.add_slide(blank_layout)
    set_slide_background(s1, DARK_GREEN)

    # Logo Top-Right
    if os.path.exists('logo_white_trans.png'):
        s1.shapes.add_picture('logo_white_trans.png', Inches(10.2), Inches(0.55), width=Inches(2.3))

    # Category Pill
    tag1 = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.5), Inches(1.45), Inches(6.0), Inches(0.45))
    tag1.fill.solid()
    tag1.fill.fore_color.rgb = RGBColor(18, 80, 52)
    tag1.line.color.rgb = ACCENT_GREEN
    tf = tag1.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "عرض موجه للتجار والمؤسسات المالية • أكتوبر 2026"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = RGBColor(187, 247, 208)
    set_rtl(p, PP_ALIGN.CENTER)

    # Main Headline (Two-tone)
    t_box = s1.shapes.add_textbox(Inches(1.0), Inches(2.05), Inches(11.5), Inches(1.4))
    tf = t_box.text_frame
    tf.word_wrap = True
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    set_rtl(p, PP_ALIGN.RIGHT)
    
    # Adding text runs for multi-color emphasis
    r1 = p.add_run()
    r1.text = "منظومة "
    r1.font.name = FONT_ARABIC
    r1.font.size = Pt(36)
    r1.font.bold = True
    r1.font.color.rgb = WHITE

    r2 = p.add_run()
    r2.text = "واحدة "
    r2.font.name = FONT_ARABIC
    r2.font.size = Pt(36)
    r2.font.bold = True
    r2.font.color.rgb = BRIGHT_GREEN

    r3 = p.add_run()
    r3.text = "تربط المدفوعات بتجارتكم ودفاتركم"
    r3.font.name = FONT_ARABIC
    r3.font.size = Pt(36)
    r3.font.bold = True
    r3.font.color.rgb = WHITE

    # Subtitle Paragraph
    sub_box = s1.shapes.add_textbox(Inches(1.0), Inches(3.55), Inches(11.5), Inches(1.1))
    tf = sub_box.text_frame
    tf.word_wrap = True
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "منصة Ultimate Pay لتجميع المدفوعات (Payment Aggregator): تصل طلب الدفع إلى العميل عبر المحافظ والتطبيقات البنكية، وتُعلم نظامكم المحاسبي بنتيجة العملية لحظيًا، وتوثّق كل دفعة بمرجع موحد."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(14)
    p.font.color.rgb = RGBColor(226, 232, 240)
    set_rtl(p, PP_ALIGN.RIGHT)

    # Left Image Card
    if os.path.exists('photo_terminal.png'):
        img_card = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(4.75), Inches(4.6), Inches(2.0))
        img_card.fill.solid()
        img_card.fill.fore_color.rgb = RGBColor(18, 80, 52)
        img_card.line.color.rgb = BRIGHT_GREEN
        s1.shapes.add_picture('photo_terminal.png', Inches(0.92), Inches(4.85), width=Inches(4.36), height=Inches(1.4))
        cap_box = s1.shapes.add_textbox(Inches(0.92), Inches(6.32), Inches(4.36), Inches(0.35))
        tf = cap_box.text_frame
        tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
        p = tf.paragraphs[0]
        p.text = "الدفع عبر مسح الرمز — من واقع خدمات المنصة الموثقة"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(10)
        p.font.color.rgb = RGBColor(220, 252, 231)
        set_rtl(p, PP_ALIGN.CENTER)

    # Right Feature Pills (2x2 Grid)
    pills = [
        ("ربط موحد مع المحافظ والبنوك", "🔗", Inches(9.1), Inches(4.85)),
        ("تكامل مباشر مع Onyx ERP", "⇄", Inches(5.8), Inches(4.85)),
        ("إشعارات لحظية Webhooks", "⚡", Inches(9.1), Inches(5.8)),
        ("رقابة وتسوية موثقة", "🛡", Inches(5.8), Inches(5.8)),
    ]
    for text, icon, left, top in pills:
        pill = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(3.1), Inches(0.72))
        pill.fill.solid()
        pill.fill.fore_color.rgb = RGBColor(18, 80, 52)
        pill.line.color.rgb = ACCENT_GREEN
        tf = pill.text_frame
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
        p = tf.paragraphs[0]
        p.text = f"{text}   {icon}"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = WHITE
        set_rtl(p, PP_ALIGN.CENTER)

    # Footer
    f_box = s1.shapes.add_textbox(Inches(4.0), Inches(6.9), Inches(5.333), Inches(0.35))
    tf = f_box.text_frame
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "www.ultimate-pay.com"
    p.font.name = FONT_ENG
    p.font.size = Pt(11)
    p.font.color.rgb = RGBColor(134, 239, 172)
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s1, "ملاحظات المتحدث: الترحيب بالحضور من ممثلي الشركات والبنوك. التأكيد على أن Ultimate Pay هي منظومة يمنية متكاملة للربط المالي تسد الفجوة بين مصادر الدفع المشتتة والأنشطة التجارية دون تعقيد.")

    # =========================================================================
    # SLIDE 2: من نحن (About Us)
    # =========================================================================
    s2 = prs.slides.add_slide(blank_layout)
    set_slide_background(s2, LIGHT_BG)
    add_header(s2, "من نحن", "شركة مالية مرخصة تعمل في قلب منظومة الدفع الرقمي", is_dark=False, slide_num=2)

    # Left Column: Photo of Aden Port
    card_img2 = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(4.6), Inches(4.9))
    card_img2.fill.solid()
    card_img2.fill.fore_color.rgb = WHITE
    card_img2.line.color.rgb = CARD_BORDER
    if os.path.exists('photo_port.png'):
        s2.shapes.add_picture('photo_port.png', Inches(0.95), Inches(1.95), width=Inches(4.3), height=Inches(3.95))
    pill_amb = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.0), Inches(6.05), Inches(4.2), Inches(0.5))
    pill_amb.fill.solid()
    pill_amb.fill.fore_color.rgb = LIGHT_GREEN_BG
    pill_amb.line.color.rgb = ACCENT_GREEN
    tf = pill_amb.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "طموحنا: منظومة مالية موحدة وآمنة وسهلة الوصول"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = DARK_GREEN
    set_rtl(p, PP_ALIGN.CENTER)

    # Right Column: Overview Text
    desc2 = s2.shapes.add_textbox(Inches(5.7), Inches(1.75), Inches(6.8), Inches(1.9))
    tf = desc2.text_frame
    tf.word_wrap = True
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p1 = tf.paragraphs[0]
    p1.text = "وفق الملف التعريفي الرسمي، Ultimate Pay شركة مالية مرخصة من البنك المركزي اليمني تقدم منصات متخصصة في حلول الدفع المتكاملة، وتهدف إلى تحسين التجربة المالية للأفراد والشركات."
    p1.font.name = FONT_ARABIC
    p1.font.size = Pt(13)
    p1.font.color.rgb = DARK_TEXT
    p1.space_after = Pt(6)
    set_rtl(p1, PP_ALIGN.RIGHT)

    p2 = tf.add_paragraph()
    p2.text = "وفي هذا العرض نركز على منصة تجميع المدفوعات (Payment Aggregator): قناة ربط وتكامل مركزية تجمع بين التاجر والمحافظ الرقمية والبنوك عبر واجهة موحدة، مع تكامل مباشر مع أنظمة ERP المعتمدة مثل Onyx."
    p2.font.name = FONT_ARABIC
    p2.font.size = Pt(12)
    p2.font.color.rgb = BODY_TEXT
    set_rtl(p2, PP_ALIGN.RIGHT)

    # 3 Summary Cards
    metrics = [
        ("ما تعالجه", "تشتت قنوات السداد وتعدد العقود والتكاملات المنفصلة", Inches(5.7)),
        ("المستفيدون", "التجار وعملاؤهم، والمؤسسات المالية والبنوك", Inches(8.0)),
        ("الدور", "قناة ربط وتكامل مركزية للمدفوعات", Inches(10.3)),
    ]
    for title, val, left in metrics:
        m_card = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(3.85), Inches(2.2), Inches(1.7))
        m_card.fill.solid()
        m_card.fill.fore_color.rgb = WHITE
        m_card.line.color.rgb = CARD_BORDER
        tf = m_card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.15)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.1)
        p = tf.paragraphs[0]
        p.text = title
        p.font.name = FONT_ARABIC
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = DARK_GREEN
        p.space_after = Pt(4)
        set_rtl(p, PP_ALIGN.CENTER)

        p_val = tf.add_paragraph()
        p_val.text = val
        p_val.font.name = FONT_ARABIC
        p_val.font.size = Pt(11)
        p_val.font.color.rgb = BODY_TEXT
        set_rtl(p_val, PP_ALIGN.CENTER)

    # Company Values Pill
    v_box = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(5.7), Inches(5.8), Inches(6.8), Inches(0.85))
    v_box.fill.solid()
    v_box.fill.fore_color.rgb = WHITE
    v_box.line.color.rgb = CARD_BORDER
    tf = v_box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "قيم الشركة من الملف الرسمي:   الأمانة  ✔   |   الشفافية  ✔   |   المصداقية  ✔   |   النزاهة  ✔"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = DARK_GREEN
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s2, "ملاحظات المتحدث: إبراز الترخيص الصادر من البنك المركزي اليمني كعنصر أمان وموثوقية، والتأكيد على الدور المحوري لـ Ultimate Pay كقناة ربط موحدة وليس مجرد وسيلة دفع فردية.")

    # =========================================================================
    # SLIDE 3: الفكرة الأساسية (Core Architecture)
    # =========================================================================
    s3 = prs.slides.add_slide(blank_layout)
    set_slide_background(s3, LIGHT_BG)
    add_header(s3, "الفكرة الأساسية", "منصة واحدة تربط أطراف عملية الدفع — بواجهة موحدة", is_dark=False, slide_num=3)

    # Center Hub Card
    center_hub = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(5.1), Inches(1.8), Inches(3.1), Inches(3.4))
    center_hub.fill.solid()
    center_hub.fill.fore_color.rgb = DARK_GREEN
    center_hub.line.color.rgb = ACCENT_GREEN
    center_hub.line.width = Pt(2)
    tf = center_hub.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "❖\n\nUltimate Pay\n\nمنصة التجميع والربط"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = WHITE
    set_rtl(p, PP_ALIGN.CENTER)

    # 4 Outer Cards
    nodes = [
        ("العميل", "يدفع عبر تطبيق محفظته أو بنكه المعتمد", "👤", Inches(8.6), Inches(1.8)),
        ("المحفظة / التطبيق البنكي", "خصم المبلغ وتأكيد العملية وتوليد المرجع", "💳", Inches(8.6), Inches(3.6)),
        ("التاجر ونقاط بيعه", "يستقبل المدفوعات ويرى النتيجة فورًا", "🏬", Inches(1.6), Inches(1.8)),
        ("نظام التاجر المحاسبي ERP", "تُحدّث الفواتير وسندات القبض آليًا", "📊", Inches(1.6), Inches(3.6)),
    ]
    for title, desc, icon, left, top in nodes:
        card = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(3.1), Inches(1.5))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.18)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.12)
        p = tf.paragraphs[0]
        p.text = f"{icon}  {title}"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = DARK_GREEN
        p.space_after = Pt(4)
        set_rtl(p, PP_ALIGN.CENTER)

        p_desc = tf.add_paragraph()
        p_desc.text = desc
        p_desc.font.name = FONT_ARABIC
        p_desc.font.size = Pt(11)
        p_desc.font.color.rgb = BODY_TEXT
        set_rtl(p_desc, PP_ALIGN.CENTER)

    # Bottom Banner 1
    b1 = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(5.45), Inches(11.733), Inches(0.65))
    b1.fill.solid()
    b1.fill.fore_color.rgb = WHITE
    b1.line.color.rgb = CARD_BORDER
    tf = b1.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "💡  قناة ربط وواجهة موحدة — بدلاً من قنوات متفرقة، وعقود متباينة، ومطابقة يدوية يومية."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = DARK_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    # Bottom Banner 2 (Dark green pill)
    b2 = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(6.25), Inches(11.733), Inches(0.55))
    b2.fill.solid()
    b2.fill.fore_color.rgb = DARK_GREEN
    b2.line.color.rgb = ACCENT_GREEN
    tf = b2.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "🛡  الربط محكوم: لا تُفعّل قناة دفع لدى التاجر إلا باعتماد المؤسسة المالية صاحبة الحساب"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = WHITE
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s3, "ملاحظات المتحدث: توضيح المعمارية الرباعية؛ المنصة تتوسط العمليات كبنية تحتية دون أن تحتجز الأموال أو تتدخل في العلاقات التعاقدية المباشرة بين التاجر والبنك.")

    # =========================================================================
    # SLIDE 4: كيف تعمل الخدمة؟ (Process Flow)
    # =========================================================================
    s4 = prs.slides.add_slide(blank_layout)
    set_slide_background(s4, LIGHT_BG)
    add_header(s4, "كيف تعمل الخدمة؟", "مسار العملية الفعلي — من لحظة الدفع حتى تحديث دفاتركم", is_dark=False, slide_num=4)

    steps4 = [
        ("العميل يبدأ الدفع", "يمسح رمز QR الخاص بالفاتورة من شاشة الكاشير ويؤكد السداد في تطبيقه.", "📱", Inches(10.45)),
        ("المحفظة / البنك", "يُخصم المبلغ ويُؤكَّد السداد بمرجع مصرفي موحد (Transaction Reference).", "🏛", Inches(8.05)),
        ("Ultimate Pay", "فحص لحظي: منع التكرار Idempotency ومطابقة المبلغ وتوثيق الحركة.", "⚡", Inches(5.65)),
        ("إشعار Webhook لحظي", "يصل سيرفر التاجر ونظامه فور تأكيد السداد المالي بنجاح.", "🔔", Inches(3.25)),
        ("نظام التاجر ERP", "الفاتورة تُغلق بحالة «مدفوعة» وسند القبض يُنشأ آليًا دون تدخل بشري.", "📑", Inches(0.85)),
    ]
    for title, desc, icon, left in steps4:
        card = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(1.85), Inches(2.1), Inches(3.5))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.2)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.12)
        
        p_ic = tf.paragraphs[0]
        p_ic.text = f"{icon}"
        p_ic.font.size = Pt(22)
        p_ic.space_after = Pt(6)
        set_rtl(p_ic, PP_ALIGN.CENTER)

        p_t = tf.add_paragraph()
        p_t.text = title
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(13)
        p_t.font.bold = True
        p_t.font.color.rgb = DARK_GREEN
        p_t.space_after = Pt(6)
        set_rtl(p_t, PP_ALIGN.CENTER)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_ARABIC
        p_d.font.size = Pt(11)
        p_d.font.color.rgb = BODY_TEXT
        set_rtl(p_d, PP_ALIGN.CENTER)

    # Direction arrows
    for i in range(4):
        arr = s4.shapes.add_textbox(Inches(3.0 + i * 2.4), Inches(3.2), Inches(0.4), Inches(0.5))
        tf = arr.text_frame
        tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
        p = tf.paragraphs[0]
        p.text = "➔"
        p.font.size = Pt(18)
        p.font.bold = True
        p.font.color.rgb = ACCENT_GREEN
        set_rtl(p, PP_ALIGN.CENTER)

    # Bottom Alert Callout
    alert_box = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.85), Inches(5.65), Inches(11.7), Inches(1.1))
    alert_box.fill.solid()
    alert_box.fill.fore_color.rgb = AMBER_BG
    alert_box.line.color.rgb = AMBER_BORDER
    alert_box.line.width = Pt(1.5)
    tf = alert_box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.15)
    p = tf.paragraphs[0]
    p.text = "ℹ  تنبيه مهم: إشعار الـ Webhook حدث معلوماتي فوري يُحدّث حالة الفاتورة، ولا ينقل الأموال — صرف المستحقات يتم لاحقًا عبر دورة التسوية المصرفية الموثقة."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = AMBER_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s4, "ملاحظات المتحدث: التمييز بوضوح بين شقين: إشعار Webhook هو رسالة برمجية مشفرة تؤكد السداد الفعلي وتسمح بتسليم البضاعة، بينما تحويل الرصيد الفعلي يتبع دورة التسوية البنكية الرسمية.")

    # =========================================================================
    # SLIDE 5: رحلة الدفع (Payment Journey)
    # =========================================================================
    s5 = prs.slides.add_slide(blank_layout)
    set_slide_background(s5, LIGHT_BG)
    add_header(s5, "رحلة الدفع", "من إصدار الفاتورة إلى إقفالها — في أربع خطوات واضحة", is_dark=False, slide_num=5)

    # Left: Photo of Phone QR Payment
    card_img5 = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(3.8), Inches(3.4))
    card_img5.fill.solid()
    card_img5.fill.fore_color.rgb = WHITE
    card_img5.line.color.rgb = CARD_BORDER
    if os.path.exists('photo_qr_phone.png'):
        s5.shapes.add_picture('photo_qr_phone.png', Inches(0.95), Inches(1.95), width=Inches(3.5), height=Inches(2.5))
    cap5 = s5.shapes.add_textbox(Inches(0.95), Inches(4.6), Inches(3.5), Inches(0.5))
    tf = cap5.text_frame
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "رمز دفع ديناميكي — من وسائل السداد الموثقة"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = MUTED_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    # Right: 4 Steps with Separate Number Badges
    steps5 = [
        ("إصدار طلب الدفع (R2P)", "الفاتورة تُنشأ في نظام التاجر بمرجع موحد ويُولَّد رمز QR ديناميكي.", "1", Inches(1.8)),
        ("السداد", "العميل يمسح الرمز عبر تطبيق محفظته أو بنكه ويؤكد المبلغ.", "2", Inches(2.65)),
        ("تأكيد لحظي", "محرك الفحص يتحقق من العملية — منع التكرار، ومطابقة المبلغ والمرجع.", "3", Inches(3.5)),
        ("تحديث فوري", "إشعار Webhook يغلق الفاتورة بحالة «مدفوعة» ويُنشئ سند القبض آليًا.", "4", Inches(4.35)),
    ]
    for title, desc, num, top in steps5:
        # Step Container Card (leaves space on right for circle badge)
        sc = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(4.8), top, Inches(6.8), Inches(0.72))
        sc.fill.solid()
        sc.fill.fore_color.rgb = WHITE
        sc.line.color.rgb = CARD_BORDER
        tf = sc.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        tf.margin_top = tf.margin_bottom = 0
        tf.margin_left = tf.margin_right = Inches(0.15)
        p = tf.paragraphs[0]
        p.text = f"{title}:  {desc}"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(11)
        p.font.color.rgb = DARK_TEXT
        set_rtl(p, PP_ALIGN.RIGHT)

        # Number Badge on the right
        nb = s5.shapes.add_shape(MSO_SHAPE.OVAL, Inches(11.85), top + Inches(0.08), Inches(0.56), Inches(0.56))
        nb.fill.solid()
        nb.fill.fore_color.rgb = DARK_GREEN
        nb.line.color.rgb = ACCENT_GREEN
        tf = nb.text_frame
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
        p = tf.paragraphs[0]
        p.text = num
        p.font.name = FONT_ENG
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = WHITE
        set_rtl(p, PP_ALIGN.CENTER)

    # Bottom Pipeline States (RTL Order)
    states = [
        ("CREATED تم الإنشاء", Inches(10.6)),
        ("PENDING بانتظار السداد", Inches(8.15)),
        ("PROCESSING قيد الفحص", Inches(5.7)),
        ("PAID مدفوعة (بمرجع RRN)", Inches(3.25)),
        ("MATCHED مطابقة مع الفاتورة", Inches(0.8)),
    ]
    for st, left in states:
        pill = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(5.4), Inches(2.35), Inches(0.45))
        pill.fill.solid()
        pill.fill.fore_color.rgb = LIGHT_GREEN_BG
        pill.line.color.rgb = ACCENT_GREEN
        tf = pill.text_frame
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
        p = tf.paragraphs[0]
        p.text = st
        p.font.name = FONT_ARABIC
        p.font.size = Pt(10)
        p.font.bold = True
        p.font.color.rgb = DARK_GREEN
        set_rtl(p, PP_ALIGN.CENTER)

    # Failed State Box
    fail_box = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(6.05), Inches(11.733), Inches(0.6))
    fail_box.fill.solid()
    fail_box.fill.fore_color.rgb = LIGHT_RED_BG
    fail_box.line.color.rgb = RED_BORDER
    tf = fail_box.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.1)
    p = tf.paragraphs[0]
    p.text = "🔴  FAILED مرفوضة / فاشلة — يوثّق سبب الرفض فورًا. لكل معاملة حالة محددة تمنع تعليق العمليات."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = DANGER_RED
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s5, "ملاحظات المتحدث: استعراض الحالات البرمجية الدقيقة للمعاملة (State Machine). وضوح الحالات يريح المحاسب ومدير المبيعات ويمنع النزاعات والازدواجية.")

    # =========================================================================
    # SLIDE 6: القيمة للتاجر (Merchant Value)
    # =========================================================================
    s6 = prs.slides.add_slide(blank_layout)
    set_slide_background(s6, LIGHT_BG)
    add_header(s6, "القيمة للتاجر", "ماذا تكسب منشأتك يوميًا مع Ultimate Pay؟", is_dark=False, slide_num=6)

    sub6 = s6.shapes.add_textbox(Inches(0.8), Inches(1.5), Inches(11.733), Inches(0.4))
    tf = sub6.text_frame
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "الخدمة ليست أداة تقنية إضافية — إنها جزء من دورة البيع: فاتورة، رمز، إشعار، وقيد محاسبي صحيح."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(13)
    p.font.color.rgb = MUTED_TEXT
    set_rtl(p, PP_ALIGN.RIGHT)

    cards6 = [
        ("قناة موحدة بدل قنوات متفرقة", "محافظ وتطبيقات بنكية عبر واجهة واحدة بدل عقود وتقارير متباينة", "❖", Inches(8.8), Inches(2.05)),
        ("رؤية لحظية للمبيعات", "بوابة التاجر تعرض كل عملية بحالتها الدقيقة لحظة بلحظة", "👁", Inches(4.8), Inches(2.05)),
        ("أتمتة محاسبية", "إقفال الفواتير وتوليد سندات القبض آليًا في نظام Onyx ERP", "🔄", Inches(0.8), Inches(2.05)),
        ("تسليم أسرع للعميل", "إشعار السداد اللحظي يغني الكاشير عن انتظار التأكيد اليدوي", "🛍", Inches(8.8), Inches(4.35)),
        ("مطابقة موثقة", "كل دفعة مرتبطة برقم الفاتورة ومرجع مصرفي فريد", "📋", Inches(4.8), Inches(4.35)),
        ("تحصيل منضبط", "مستحقات وفق دورات تسوية موثقة بكشوف مطابقة معتمدة", "🏛", Inches(0.8), Inches(4.35)),
    ]
    for title, desc, icon, left, top in cards6:
        card = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(3.7), Inches(2.1))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.18)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.15)

        p_ic = tf.paragraphs[0]
        p_ic.text = f"{icon}"
        p_ic.font.size = Pt(18)
        p_ic.font.color.rgb = ACCENT_GREEN
        p_ic.space_after = Pt(4)
        set_rtl(p_ic, PP_ALIGN.CENTER)

        p_t = tf.add_paragraph()
        p_t.text = title
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(13)
        p_t.font.bold = True
        p_t.font.color.rgb = DARK_GREEN
        p_t.space_after = Pt(4)
        set_rtl(p_t, PP_ALIGN.CENTER)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_ARABIC
        p_d.font.size = Pt(11)
        p_d.font.color.rgb = BODY_TEXT
        set_rtl(p_d, PP_ALIGN.CENTER)

    set_notes(s6, "ملاحظات المتحدث: مخاطبة صاحب العمل التجاري؛ المنظومة توفر سرعة خدمة العملاء عند الكاشير، وتمنع فوضى الرسائل النصية واللقطات المزيفة.")

    # =========================================================================
    # SLIDE 7: تجربة التاجر (Merchant Portal)
    # =========================================================================
    s7 = prs.slides.add_slide(blank_layout)
    set_slide_background(s7, LIGHT_BG)
    add_header(s7, "تجربة التاجر", "بوابة التاجر (Merchant Portal) — إدارة مبيعاتك ونقاط دفعك من مكان واحد", is_dark=False, slide_num=7)

    sub7 = s7.shapes.add_textbox(Inches(0.8), Inches(1.5), Inches(11.733), Inches(0.4))
    tf = sub7.text_frame
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "الإمكانات التالية موثقة في شاشات البوابة (SCR-MER-01 إلى SCR-MER-06) — النماذج هنا توضيحية للوظائف."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.color.rgb = MUTED_TEXT
    set_rtl(p, PP_ALIGN.RIGHT)

    portal_cards = [
        ("متابعة العمليات لحظيًا", "سجل الفواتير والمبيعات بحالاتها الدقيقة: مدفوعة، معلقة، مرفوضة ومطابقتها فورًا.", "SCR-MER-04", Inches(6.8), Inches(2.05)),
        ("إدارة نقاط الدفع", "تفعيل قنوات التحصيل، وطلب ربط المحافظ والحسابات البنكية، ويُرسل الطلب للاعتماد المالي.", "SCR-MER-02/03", Inches(0.8), Inches(2.05)),
        ("مطابقة الفواتير", "ربط كل دفعة برقم الفاتورة والمرجع المصرفي لمنع أي تداخل حسابي أو عجز في الصناديق.", "SCR-MER-05", Inches(6.8), Inches(4.15)),
        ("إعدادات التكامل", "إدارة روابط الـ Webhook واستقبال إشعارات السداد المشفرة على أنظمة متجرك مباشرة.", "SCR-MER-06", Inches(0.8), Inches(4.15)),
    ]
    for title, desc, scr, left, top in portal_cards:
        card = s7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(5.7), Inches(1.9))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.2)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.2)

        p_t = tf.paragraphs[0]
        p_t.text = f"{title}   [{scr}]"
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(14)
        p_t.font.bold = True
        p_t.font.color.rgb = DARK_GREEN
        p_t.space_after = Pt(6)
        set_rtl(p_t, PP_ALIGN.RIGHT)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_ARABIC
        p_d.font.size = Pt(11)
        p_d.font.color.rgb = BODY_TEXT
        set_rtl(p_d, PP_ALIGN.RIGHT)

    # Bottom Status Bar
    bar7 = s7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(6.25), Inches(11.733), Inches(0.55))
    bar7.fill.solid()
    bar7.fill.fore_color.rgb = WHITE
    bar7.line.color.rgb = CARD_BORDER
    tf = bar7.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "معيار الحالات الموحد عبر البوابة:   ● مدفوعة (أخضر)   |   ● معلقة (برتقالي)   |   ● مرفوضة (أحمر)"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = DARK_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s7, "ملاحظات المتحدث: استعراض شاشات البوابة الرسمية، ومرونة تفعيل القنوات من خلال لوحة تحكم سهلة الاستخدام تناسب المدراء الماليين ومسؤولي الفروع.")

    # =========================================================================
    # SLIDE 8: التكامل المحاسبي (ERP Integration Comparison)
    # =========================================================================
    s8 = prs.slides.add_slide(blank_layout)
    set_slide_background(s8, LIGHT_BG)
    add_header(s8, "التكامل المحاسبي", "ربط مباشر مع نظامك المحاسبي — نهاية الإدخال اليدوي", is_dark=False, slide_num=8)

    # Right Card: Traditional Work (Red)
    c_red = s8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.8), Inches(5.7), Inches(4.3))
    c_red.fill.solid()
    c_red.fill.fore_color.rgb = LIGHT_RED_BG
    c_red.line.color.rgb = RED_BORDER
    c_red.line.width = Pt(1.5)
    tf = c_red.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    tf.margin_top = Inches(0.2)
    tf.margin_bottom = Inches(0.1)
    tf.margin_left = tf.margin_right = Inches(0.2)

    p_t = tf.paragraphs[0]
    p_t.text = "العمل التقليدي (بدون تكامل)  ✖"
    p_t.font.name = FONT_ARABIC
    p_t.font.size = Pt(16)
    p_t.font.bold = True
    p_t.font.color.rgb = DANGER_RED
    p_t.space_after = Pt(8)
    set_rtl(p_t, PP_ALIGN.CENTER)

    red_points = [
        "إدخال يدوي مكرر لسندات القبض والفواتير نهاية اليوم.",
        "تأخر إقفال الحسابات والمطابقات حتى نهاية الشهر.",
        "فجوات وتعارضات يومية بين إشعارات الدفع ودفاتر الحسابات.",
        "مخاطر قبول لقطات شاشة مفبركة أو رسائل SMS وهمية."
    ]
    for pt in red_points:
        p = tf.add_paragraph()
        p.text = f"✖  {pt}"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(12)
        p.font.color.rgb = DARK_TEXT
        p.space_after = Pt(8)
        set_rtl(p, PP_ALIGN.RIGHT)

    # Left Card: Ultimate Pay + Onyx ERP (Green)
    c_green = s8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.7), Inches(4.3))
    c_green.fill.solid()
    c_green.fill.fore_color.rgb = LIGHT_GREEN_BG
    c_green.line.color.rgb = RGBColor(134, 239, 172)
    c_green.line.width = Pt(1.5)
    tf = c_green.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    tf.margin_top = Inches(0.2)
    tf.margin_bottom = Inches(0.1)
    tf.margin_left = tf.margin_right = Inches(0.2)

    p_t = tf.paragraphs[0]
    p_t.text = "مع Ultimate Pay + Onyx ERP  ✔"
    p_t.font.name = FONT_ARABIC
    p_t.font.size = Pt(16)
    p_t.font.bold = True
    p_t.font.color.rgb = DARK_GREEN
    p_t.space_after = Pt(8)
    set_rtl(p_t, PP_ALIGN.CENTER)

    green_points = [
        "مزامنة بيانات التاجر وفواتيره آليًا من لحظة التسجيل.",
        "الإقفال الآلي للفاتورة بمجرد تأكيد السداد عبر الـ Webhook.",
        "توليد سند القبض وقيد اليومية آليًا في شجرتك المحاسبية.",
        "مطابقة تامة برقم المرجع المصرفي RRN دون أي تدخل بشري."
    ]
    for pt in green_points:
        p = tf.add_paragraph()
        p.text = f"✔  {pt}"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(12)
        p.font.color.rgb = DARK_TEXT
        p.space_after = Pt(8)
        set_rtl(p, PP_ALIGN.RIGHT)

    # Bottom ERP Bar
    bar8 = s8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(6.25), Inches(11.733), Inches(0.55))
    bar8.fill.solid()
    bar8.fill.fore_color.rgb = WHITE
    bar8.line.color.rgb = CARD_BORDER
    tf = bar8.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "الأنظمة المدعومة: Onyx ERP معتمد بالكامل في المنصة — ويُفعّل الربط المباشر عند إعداد حساب التاجر."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = DARK_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s8, "ملاحظات المتحدث: هذه الشريحة هي الأهم للمدراء الماليين؛ القضاء الكامل على كابوس المطابقة اليدوية وإغلاق الحسابات بنقرة زر وبشكل مطابق 100%.")

    # =========================================================================
    # SLIDE 9: أدوات الربط ونطاق الخدمة (Scope)
    # =========================================================================
    s9 = prs.slides.add_slide(blank_layout)
    set_slide_background(s9, LIGHT_BG)
    add_header(s9, "أدوات الربط ونطاق الخدمة", "ما يشمله هذا العرض — وما خارجه، بوضوح تام", is_dark=False, slide_num=9)

    # Right: In Scope (Platform Aggregator)
    c_in = s9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(5.8), Inches(1.8), Inches(6.733), Inches(4.9))
    c_in.fill.solid()
    c_in.fill.fore_color.rgb = WHITE
    c_in.line.color.rgb = ACCENT_GREEN
    c_in.line.width = Pt(2)
    tf = c_in.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    tf.margin_top = Inches(0.18)
    tf.margin_bottom = Inches(0.1)
    tf.margin_left = tf.margin_right = Inches(0.2)

    p_t = tf.paragraphs[0]
    p_t.text = "أدوات منصة التجميع (نطاق هذا العرض)  ✔"
    p_t.font.name = FONT_ARABIC
    p_t.font.size = Pt(15)
    p_t.font.bold = True
    p_t.font.color.rgb = DARK_GREEN
    p_t.space_after = Pt(8)
    set_rtl(p_t, PP_ALIGN.RIGHT)

    in_items = [
        ("طلبات الدفع المباشر (R2P)", "إنشاء طلب الدفع مع رمز QR ديناميكي يحمل مرجع الفاتورة والمبلغ بدقة."),
        ("إشعارات Webhooks مشفرة", "إشعارات موثقة مع آليات إعادة المحاولة (Retry) وشاشة استرداد التسليم (Delivery Recovery)."),
        ("واجهات RESTful APIs موثقة", "استعلام الفواتير /invoice_amount • تأكيد بيانات العميل • تنفيذ الدفع • الاسترداد."),
        ("تكامل محاسبي مباشر", "ترحيل آلي للقيود وإغلاق الفواتير مع أنظمة ERP المعتمدة مثل Onyx ERP.")
    ]
    for h, b in in_items:
        p1 = tf.add_paragraph()
        p1.text = f"•  {h}:  {b}"
        p1.font.name = FONT_ARABIC
        p1.font.size = Pt(11)
        p1.font.color.rgb = DARK_TEXT
        p1.space_after = Pt(8)
        set_rtl(p1, PP_ALIGN.RIGHT)

    # Left: Out of Scope (PS Suite)
    c_out = s9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(4.7), Inches(4.9))
    c_out.fill.solid()
    c_out.fill.fore_color.rgb = WHITE
    c_out.line.color.rgb = RGBColor(156, 163, 175)
    c_out.line.width = Pt(1.5)
    tf = c_out.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    tf.margin_top = Inches(0.18)
    tf.margin_bottom = Inches(0.1)
    tf.margin_left = tf.margin_right = Inches(0.18)

    p_t = tf.paragraphs[0]
    p_t.text = "منظومة PS — نقاط الدفع والبطاقات  💳"
    p_t.font.name = FONT_ARABIC
    p_t.font.size = Pt(14)
    p_t.font.bold = True
    p_t.font.color.rgb = MUTED_TEXT
    p_t.space_after = Pt(8)
    set_rtl(p_t, PP_ALIGN.RIGHT)

    p_d = tf.add_paragraph()
    p_d.text = "يتضمن الملف التعريفي الشامل للشركة أدوات دفع أوسع مثل:\n• روابط الدفع (Payment Links)\n• نقاط البيع الذكية (Android POS)\n• نقاط البيع عبر الهاتف (Soft POS)\n• بطاقات الدفع والرموز العامة."
    p_d.font.name = FONT_ARABIC
    p_d.font.size = Pt(11)
    p_d.font.color.rgb = BODY_TEXT
    p_d.space_after = Pt(12)
    set_rtl(p_d, PP_ALIGN.RIGHT)

    # Out of Scope Amber Box inside
    p_w = tf.add_paragraph()
    p_w.text = "ℹ وفق وثائق التشغيل: منظومة PS نظام مستقل عن منصة التجميع ومستبعدة من نطاق هذا العرض التقني المخصص للربط المباشر مع التجار والمؤسسات المالية."
    p_w.font.name = FONT_ARABIC
    p_w.font.size = Pt(10)
    p_w.font.bold = True
    p_w.font.color.rgb = AMBER_TEXT
    set_rtl(p_w, PP_ALIGN.RIGHT)

    set_notes(s9, "ملاحظات المتحدث: الشفافية في تحديد النطاق تعزز الثقة التقنية؛ العرض مخصص لمنصة تجميع المدفوعات والربط مع ERP، مع الإشارة لجاهزية نقاط البيع الأخرى للمشاريع المستقلة.")

    # =========================================================================
    # SLIDE 10: القيمة للبنوك والمؤسسات المالية
    # =========================================================================
    s10 = prs.slides.add_slide(blank_layout)
    set_slide_background(s10, LIGHT_BG)
    add_header(s10, "القيمة للبنك والمؤسسات المالية", "شراكة تقنية توسّع قبول خدماتكم المالية لدى التجار", is_dark=False, slide_num=10)

    # Left: Handshake Photo
    c_img10 = s10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(4.5), Inches(4.9))
    c_img10.fill.solid()
    c_img10.fill.fore_color.rgb = WHITE
    c_img10.line.color.rgb = CARD_BORDER
    if os.path.exists('photo_handshake.png'):
        s10.shapes.add_picture('photo_handshake.png', Inches(0.95), Inches(1.95), width=Inches(4.2), height=Inches(3.4))
    p_bar10 = s10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.95), Inches(5.5), Inches(4.2), Inches(1.05))
    p_bar10.fill.solid()
    p_bar10.fill.fore_color.rgb = DARK_GREEN
    p_bar10.line.fill.background()
    tf = p_bar10.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.1)
    p = tf.paragraphs[0]
    p.text = "قيمة واحدة لخمسة أطراف: البنك، المحفظة، التاجر، والعميل — وإدارة مالية منضبطة للجميع."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = WHITE
    set_rtl(p, PP_ALIGN.CENTER)

    # Right: 4 Value Cards
    b_values = [
        ("توسيع نطاق القبول", "وصول خدمات البنك والمحفظة إلى شبكة تجار واسعة عبر قناة ربط واحدة.", "🌐", Inches(8.8), Inches(1.8)),
        ("تخفيف الأعباء التشغيلية", "المنصة تتولى تهيئة التجار والدعم الفني وربط نقاط الدفع بالكامل.", "⚙", Inches(5.6), Inches(1.8)),
        ("تعزيز التدفقات والودائع", "استقرار أموال المبيعات والتسويات في الحسابات المصرفية المعتمدة لديكم.", "💰", Inches(8.8), Inches(4.35)),
        ("دعم الشمول المالي", "حلول طلب الدفع المباشر (R2P) ورموز QR ضمن منظومة رقمية آمنة.", "👥", Inches(5.6), Inches(4.35)),
    ]
    for title, desc, icon, left, top in b_values:
        card = s10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(3.0), Inches(2.35))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.18)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.15)

        p_ic = tf.paragraphs[0]
        p_ic.text = f"{icon}"
        p_ic.font.size = Pt(20)
        p_ic.font.color.rgb = ACCENT_GREEN
        p_ic.space_after = Pt(4)
        set_rtl(p_ic, PP_ALIGN.CENTER)

        p_t = tf.add_paragraph()
        p_t.text = title
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(13)
        p_t.font.bold = True
        p_t.font.color.rgb = DARK_GREEN
        p_t.space_after = Pt(4)
        set_rtl(p_t, PP_ALIGN.CENTER)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_ARABIC
        p_d.font.size = Pt(11)
        p_d.font.color.rgb = BODY_TEXT
        set_rtl(p_d, PP_ALIGN.CENTER)

    set_notes(s10, "ملاحظات المتحدث: توجيه الحديث لمسؤولي البنوك؛ نحن شريك توسعي وليس منافس على الودائع. نتيح لمحفظتكم وبنككم الوصول لآلاف نقاط البيع فورًا.")

    # =========================================================================
    # SLIDE 11: نموذج التعاون والتكامل (Roles & Governance)
    # =========================================================================
    s11 = prs.slides.add_slide(blank_layout)
    set_slide_background(s11, LIGHT_BG)
    add_header(s11, "نموذج التعاون والتكامل", "أدوار واضحة، وتدفق محكوم — لا فضول ولا التباس", is_dark=False, slide_num=11)

    roles = [
        ("المؤسسة المالية (البنك / المحفظة)", DARK_GREEN, WHITE, [
            "توفير قنوات السداد والخصم من حسابات العملاء",
            "الاحتفاظ بالأموال في الحسابات المصرفية المعتمدة",
            "تدقيق طلبات ربط التجار واعتمادها ماليًا",
            "تنفيذ أوامر التسوية وصرف المستحقات"
        ], Inches(8.8)),
        ("Ultimate Pay — المنصة المجمعة", LIGHT_GREEN_BG, DARK_GREEN, [
            "بوابة التاجر وواجهات التكامل (APIs & Webhooks)",
            "التحقق اللحظي من المعاملات ومحرك AML/FRM",
            "مطابقة السجلات وتنسيق ملفات التسوية",
            "الدعم الفني والتشغيلي للربط المحاسبي"
        ], Inches(4.8)),
        ("التاجر", WHITE, DARK_TEXT, [
            "إصدار الفواتير وطلبات السداد عبر الكاونتر",
            "طلب ربط حساباته المصرفية الرسمية بالمنصة",
            "استقبال المدفوعات ومتابعة الحالات لحظيًا",
            "تسليم البضائع فور تأكيد الإشعار الآلي"
        ], Inches(0.8)),
    ]
    for title, bg_col, text_col, points, left in roles:
        col = s11.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(1.8), Inches(3.7), Inches(3.2))
        col.fill.solid()
        col.fill.fore_color.rgb = bg_col
        col.line.color.rgb = ACCENT_GREEN if bg_col != WHITE else CARD_BORDER
        tf = col.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.18)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.15)

        p_t = tf.paragraphs[0]
        p_t.text = title
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(13)
        p_t.font.bold = True
        p_t.font.color.rgb = text_col
        p_t.space_after = Pt(6)
        set_rtl(p_t, PP_ALIGN.CENTER)

        for pt in points:
            p = tf.add_paragraph()
            p.text = f"•  {pt}"
            p.font.name = FONT_ARABIC
            p.font.size = Pt(10)
            p.font.color.rgb = text_col if bg_col == DARK_GREEN else BODY_TEXT
            p.space_after = Pt(4)
            set_rtl(p, PP_ALIGN.RIGHT)

    # Workflow bar
    wf = s11.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(5.2), Inches(11.733), Inches(0.75))
    wf.fill.solid()
    wf.fill.fore_color.rgb = WHITE
    wf.line.color.rgb = CARD_BORDER
    tf = wf.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "تدفق اعتماد الربط:  طلب التاجر عبر البوابة  ➔  بانتظار المؤسسة المالية  ➔  تدقيق السجل والحساب  ➔  اعتماد مصرفي  ➔  تفعيل نقطة الدفع"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = DARK_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    # Principle Bar
    pb = s11.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(6.1), Inches(11.733), Inches(0.6))
    pb.fill.solid()
    pb.fill.fore_color.rgb = DARK_GREEN
    pb.line.fill.background()
    tf = pb.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "🛡  مبدأ أساسي: المنصة لا تحتفظ بأموال العملاء ولا تنفّذ التحويل — الحركة المالية من مسؤولية المؤسسة المالية حصرًا."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = WHITE
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s11, "ملاحظات المتحدث: هذا المبدأ القانوني يطمئن البنوك والجهات الرقابية تمامًا؛ أموال المبيعات تنتقل من حساب العميل إلى حساب التاجر داخل النظام المصرفي.")

    # =========================================================================
    # SLIDE 12: الأمان والرقابة (Security & Compliance)
    # =========================================================================
    s12 = prs.slides.add_slide(blank_layout)
    set_slide_background(s12, LIGHT_BG)
    add_header(s12, "الأمان والرقابة", "طبقات حماية متعددة — لبياناتكم وأموالكم وعملياتكم", is_dark=False, slide_num=12)

    sec_cards = [
        ("الرقابة الثنائية (Maker / Checker)", "فصل دقيق بين منشئ الطلب والمدقق المعتمد في كل إجراء إداري ومالي.", "👥", Inches(8.8), Inches(1.8)),
        ("بيانات دخول مؤقتة", "رابط البوابة الأولى بكلمة مرور مؤقتة صلاحيتها 24 ساعة لمنع الوصول غير المصرح.", "🔑", Inches(4.8), Inches(1.8)),
        ("منع تكرار العمليات (Idempotency)", "معرّفات فريدة تضمن عدم قيد أو خصم أي عملية مرتين تحت أي ظرف تقني.", "🚫", Inches(0.8), Inches(1.8)),
        ("تشفير الاتصال وتدوير المفاتيح", "حماية الروابط البرمجية والتواقيع الرقمية بين المنصة والأنظمة الخارجية.", "🔒", Inches(8.8), Inches(4.1)),
        ("محرك الرقابة AML / FRM", "فحص لحظي لكل معاملة وقرار فوري: سماح (ALLOW) أو مراجعة أو حظر.", "🛡", Inches(4.8), Inches(4.1)),
        ("سجلات التدقيق (Audit Logs)", "توثيق شامل لهوية المشغل وتوقيت كل إجراء لضمان الرقابة الصارمة.", "📜", Inches(0.8), Inches(4.1)),
    ]
    for title, desc, icon, left, top in sec_cards:
        card = s12.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(3.7), Inches(2.05))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.18)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.15)

        p_ic = tf.paragraphs[0]
        p_ic.text = f"{icon}"
        p_ic.font.size = Pt(18)
        p_ic.font.color.rgb = ACCENT_GREEN
        p_ic.space_after = Pt(4)
        set_rtl(p_ic, PP_ALIGN.CENTER)

        p_t = tf.add_paragraph()
        p_t.text = title
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(13)
        p_t.font.bold = True
        p_t.font.color.rgb = DARK_GREEN
        p_t.space_after = Pt(4)
        set_rtl(p_t, PP_ALIGN.CENTER)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_ARABIC
        p_d.font.size = Pt(11)
        p_d.font.color.rgb = BODY_TEXT
        set_rtl(p_d, PP_ALIGN.CENTER)

    bar12 = s12.shapes.add_textbox(Inches(0.8), Inches(6.25), Inches(11.733), Inches(0.4))
    tf = bar12.text_frame
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "آليات الرقابة موثقة في شاشات بوابة المشغل ومخططات مراقبة العمليات لدى الشركة وفق معايير PCI-DSS العالمية."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.color.rgb = MUTED_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s12, "ملاحظات المتحدث: استعراض معايير الأمان وشهادات الامتثال (PCI-DSS) ومحرك مكافحة الاحتيال اللحظي الذي يضمن صفر احتيال في العمليات.")

    # =========================================================================
    # SLIDE 13: التسويات والمطابقة (Settlement & Reconciliation)
    # =========================================================================
    s13 = prs.slides.add_slide(blank_layout)
    set_slide_background(s13, LIGHT_BG)
    add_header(s13, "التسويات والمطابقة", "إشعار السداد شيء — وصرف المستحقات شيء آخر", is_dark=False, slide_num=13)

    # Right: Webhook Guarantees
    c_rt = s13.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.5), Inches(1.8), Inches(5.033), Inches(3.2))
    c_rt.fill.solid()
    c_rt.fill.fore_color.rgb = LIGHT_GREEN_BG
    c_rt.line.color.rgb = ACCENT_GREEN
    tf = c_rt.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    tf.margin_top = Inches(0.2)
    tf.margin_bottom = Inches(0.1)
    tf.margin_left = tf.margin_right = Inches(0.2)

    p = tf.paragraphs[0]
    p.text = "ما يضمنه إشعار السداد اللحظي (Webhook)  ⚡"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(15)
    p.font.bold = True
    p.font.color.rgb = DARK_GREEN
    p.space_after = Pt(8)
    set_rtl(p, PP_ALIGN.RIGHT)

    wh_pts = [
        "تأكيد وصول دفعة العميل وخصمها بنجاح.",
        "تسليم الطلب أو البضاعة فورًا بأمان تام.",
        "تحديث الفاتورة وسند القبض آليًا في Onyx ERP."
    ]
    for pt in wh_pts:
        p = tf.add_paragraph()
        p.text = f"✔  {pt}"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(12)
        p.font.color.rgb = DARK_TEXT
        p.space_after = Pt(6)
        set_rtl(p, PP_ALIGN.RIGHT)

    # Left: Payout Cycle
    c_lt = s13.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(6.4), Inches(3.2))
    c_lt.fill.solid()
    c_lt.fill.fore_color.rgb = WHITE
    c_lt.line.color.rgb = CARD_BORDER
    tf = c_lt.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    tf.margin_top = Inches(0.2)
    tf.margin_bottom = Inches(0.1)
    tf.margin_left = tf.margin_right = Inches(0.2)

    p = tf.paragraphs[0]
    p.text = "دورة صرف المستحقات (Payout) — دورة مصرفية موثقة  🏛"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(15)
    p.font.bold = True
    p.font.color.rgb = DARK_TEXT
    p.space_after = Pt(6)
    set_rtl(p, PP_ALIGN.RIGHT)

    p_flow = tf.add_paragraph()
    p_flow.text = "1. مطابقة السجلات وتجميع العمليات\n2. فحص سيولة الخزينة والتأكد من الأرصدة\n3. إصدار ملف التسوية المصرفي المعتمد\n4. إرسال تعليمات التحويل لحساب التاجر البنكي\n5. مطابقة كشف الحساب البنكي النهائي"
    p_flow.font.name = FONT_ARABIC
    p_flow.font.size = Pt(11)
    p_flow.font.color.rgb = BODY_TEXT
    set_rtl(p_flow, PP_ALIGN.RIGHT)

    # Formula Box
    f_box = s13.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(5.15), Inches(11.733), Inches(0.65))
    f_box.fill.solid()
    f_box.fill.fore_color.rgb = WHITE
    f_box.line.color.rgb = CARD_BORDER
    tf = f_box.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "معادلة المطابقة الثلاثية:  [سجلات المنصة]  ×  [كشف حساب البنك]  ×  [فواتير التاجر في Onyx ERP]  =  مطابقة تامة 100%"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = DARK_GREEN
    set_rtl(p, PP_ALIGN.CENTER)

    # Warning Box
    w_box = s13.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(5.95), Inches(11.733), Inches(0.75))
    w_box.fill.solid()
    w_box.fill.fore_color.rgb = AMBER_BG
    w_box.line.color.rgb = AMBER_BORDER
    tf = w_box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.1)
    p = tf.paragraphs[0]
    p.text = "ℹ  وفق وثائق التشغيل: دورة التسوية دورية (وليست تحويلاً تلقائيًا لحظيًا)، وتُتفق دورتها ضمن الاتفاقية التجارية، مع كشف يوضح إجمالي المبيعات والعمولات وصافي المستحقات."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = AMBER_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s13, "ملاحظات المتحدث: توضيح المطابقة الثلاثية التي تحمي التاجر والبنك وتمنع أي سحب على المكشوف أو عجز في الأرصدة.")

    # =========================================================================
    # SLIDE 14: سيناريو تطبيقي (End-to-End Walkthrough)
    # =========================================================================
    s14 = prs.slides.add_slide(blank_layout)
    set_slide_background(s14, LIGHT_BG)
    add_header(s14, "سيناريو تطبيقي (مثال توضيحي)", "رحلة عملية دفع واحدة — من الكاونتر حتى الدفاتر والمصرف", is_dark=False, slide_num=14)

    steps14 = [
        ("متجر تجزئة يصدر فاتورة بمبلغ 5,000 ريال في نظام Onyx", "1", Inches(10.75)),
        ("المنصة تولّد رمز QR ديناميكيًا بمرجع موحد للفاتورة", "2", Inches(8.75)),
        ("العميل يمسح الرمز ويسدد من محفظته وتؤكد بمرجع مصرفي", "3", Inches(6.75)),
        ("محرك الفحص يتحقق لحظيًا: لا تكرار والمبلغ مطابق", "4", Inches(4.75)),
        ("إشعار Webhook يصل النظام: الفاتورة مدفوعة وسند القبض يُنشأ", "5", Inches(2.75)),
        ("الكاشير يسلّم البضاعة فورًا دون مكالمة أو انتظار", "6", Inches(0.75)),
    ]
    for desc, num, left in steps14:
        card = s14.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(1.8), Inches(1.8), Inches(3.1))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.18)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.1)

        p_n = tf.paragraphs[0]
        p_n.text = num
        p_n.font.name = FONT_ENG
        p_n.font.size = Pt(20)
        p_n.font.bold = True
        p_n.font.color.rgb = ACCENT_GREEN
        p_n.space_after = Pt(6)
        set_rtl(p_n, PP_ALIGN.CENTER)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_ARABIC
        p_d.font.size = Pt(11)
        p_d.font.color.rgb = DARK_TEXT
        set_rtl(p_d, PP_ALIGN.CENTER)

    # Bottom Split Cards
    if os.path.exists('photo_terminal.png'):
        s14.shapes.add_picture('photo_terminal.png', Inches(0.8), Inches(5.1), width=Inches(4.5), height=Inches(1.55))

    c_later = s14.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(5.6), Inches(5.1), Inches(6.933), Inches(1.55))
    c_later.fill.solid()
    c_later.fill.fore_color.rgb = WHITE
    c_later.line.color.rgb = CARD_BORDER
    tf = c_later.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.15)
    p = tf.paragraphs[0]
    p.text = "⏰  لاحقًا — وفق دورة التسوية المصرفية:\nمستحقات دورة المبيعات تُحوّل إلى حساب التاجر البنكي بملف تسوية وكشف مطابقة موثق يربط كل فاتورة بمرجعها البنكي دون أي التباس."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = DARK_GREEN
    set_rtl(p, PP_ALIGN.RIGHT)

    set_notes(s14, "ملاحظات المتحدث: سرد الخطوات العملية الست بأسلوب قصصي يوضح كيف تتم عملية البيع اليومية في متجر يمني خلال ثوانٍ معدودة.")

    # =========================================================================
    # SLIDE 15: لماذا Ultimate Pay؟ (The 6 Pillars)
    # =========================================================================
    s15 = prs.slides.add_slide(blank_layout)
    set_slide_background(s15, LIGHT_BG)
    add_header(s15, "لماذا Ultimate Pay؟", "ستة أسباب موثقة — لا وعود عامة", is_dark=False, slide_num=15)

    pillars = [
        ("منظومة موحدة", "واجهة واحدة لربط كافة المحافظ والبنوك وERP بدل قنوات متفرقة وعقود متعددة.", "❖", Inches(8.8), Inches(1.8)),
        ("شركة مالية مرخصة", "تعمل ضمن ترخيص البنك المركزي اليمني وفق أعلى معايير الحوكمة والامتثال.", "🏛", Inches(4.8), Inches(1.8)),
        ("ربط محكوم مصرفيًا", "لا تفعيل لأي قناة دفع دون اعتماد المؤسسة المالية صاحبة الحساب لضمان الانضباط.", "🛡", Inches(0.8), Inches(1.8)),
        ("تكامل محاسبي مباشر", "أتمتة كاملة للفواتير وسندات القبض في أنظمة ERP المعتمدة مثل Onyx.", "🔄", Inches(8.8), Inches(3.95)),
        ("إشعارات لحظية موثقة", "كل عملية بمرجع مصرفي فريد قابل للمتابعة والمطابقة والقضاء على الاحتيال.", "⚡", Inches(4.8), Inches(3.95)),
        ("فصل صارم للأدوار", "المنصة ربط وتشغيل ومطابقة، والحركة المالية بيد المؤسسة المالية حصرًا.", "⚖", Inches(0.8), Inches(3.95)),
    ]
    for title, desc, icon, left, top in pillars:
        card = s15.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(3.7), Inches(1.95))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.18)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.15)

        p_ic = tf.paragraphs[0]
        p_ic.text = f"{icon}"
        p_ic.font.size = Pt(16)
        p_ic.font.color.rgb = ACCENT_GREEN
        p_ic.space_after = Pt(4)
        set_rtl(p_ic, PP_ALIGN.CENTER)

        p_t = tf.add_paragraph()
        p_t.text = title
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(14)
        p_t.font.bold = True
        p_t.font.color.rgb = DARK_GREEN
        p_t.space_after = Pt(4)
        set_rtl(p_t, PP_ALIGN.CENTER)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_ARABIC
        p_d.font.size = Pt(11)
        p_d.font.color.rgb = BODY_TEXT
        set_rtl(p_d, PP_ALIGN.CENTER)

    # Value Banner
    v_banner = s15.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(6.1), Inches(11.733), Inches(0.65))
    v_banner.fill.solid()
    v_banner.fill.fore_color.rgb = DARK_GREEN
    v_banner.line.fill.background()
    tf = v_banner.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "قيمتنا ليست في إرسال إشعار — بل في جعل منظومة الدفع كلها أوضح، وأسرع، وأسهل متابعة لدى التاجر والبنك معًا."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = WHITE
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s15, "ملاحظات المتحدث: تلخيص ركائز التميز الست؛ إبراز الترخيص والتكامل المحاسبي كأكبر ميزتين تنافسيتين تميزان Ultimate Pay في السوق اليمني.")

    # =========================================================================
    # SLIDE 16: الخطوات التالية (Closing & Next Steps)
    # =========================================================================
    s16 = prs.slides.add_slide(blank_layout)
    set_slide_background(s16, DARK_GREEN)
    add_header(s16, "الخطوات التالية", "لنبدأ بخطوة واحدة — ورشة عمل فنية مشتركة", is_dark=True, slide_num=16)

    tracks = [
        ("للمؤسسات المالية (البنوك / المحافظ)  🏛", [
            "ورشة فنية لمراجعة مواصفات واجهات الـ APIs وتبادل وثائق التكامل.",
            "مراجعة مسودة اتفاقية مستوى الخدمة (SLA) والعمولات ودورات التسوية.",
            "تجهيز حسابات بيئة الاختبار التجريبية (Sandbox) لبدء التجربة عمليًا."
        ], Inches(6.8)),
        ("للتجار وأصحاب الأنشطة التجارية  🏬", [
            "تجهيز السجل التجاري وبيانات ضابط التواصل والحساب المصرفي المعتمد.",
            "استلام رابط بوابة التاجر الآمن وضبط الفروع والمستخدمين.",
            "طلب ربط المحافظ والبنوك وبدء استقبال المدفوعات فور الاعتماد المالي."
        ], Inches(0.8)),
    ]
    for title, pts, left in tracks:
        card = s16.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(1.8), Inches(5.7), Inches(3.2))
        card.fill.solid()
        card.fill.fore_color.rgb = RGBColor(18, 80, 52)
        card.line.color.rgb = ACCENT_GREEN
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.2)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.2)

        p_t = tf.paragraphs[0]
        p_t.text = title
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(15)
        p_t.font.bold = True
        p_t.font.color.rgb = WHITE
        p_t.space_after = Pt(8)
        set_rtl(p_t, PP_ALIGN.CENTER)

        for pt in pts:
            p = tf.add_paragraph()
            p.text = f"✔  {pt}"
            p.font.name = FONT_ARABIC
            p.font.size = Pt(12)
            p.font.color.rgb = RGBColor(220, 252, 231)
            p.space_after = Pt(6)
            set_rtl(p, PP_ALIGN.RIGHT)

    # Center Closing Box
    c_box = s16.shapes.add_textbox(Inches(2.0), Inches(5.2), Inches(9.333), Inches(0.9))
    tf = c_box.text_frame
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p1 = tf.paragraphs[0]
    p1.text = "لمستقبل مالي أفضل"
    p1.font.name = FONT_ARABIC
    p1.font.size = Pt(22)
    p1.font.bold = True
    p1.font.color.rgb = RGBColor(134, 239, 172)
    p1.space_after = Pt(4)
    set_rtl(p1, PP_ALIGN.CENTER)

    p2 = tf.add_paragraph()
    p2.text = "شكرًا لكم — ويسعدنا الآن الإجابة عن أسئلتكم ومناقشة خطوة البداية."
    p2.font.name = FONT_ARABIC
    p2.font.size = Pt(14)
    p2.font.color.rgb = WHITE
    set_rtl(p2, PP_ALIGN.CENTER)

    # Footer Contacts
    f16 = s16.shapes.add_textbox(Inches(2.0), Inches(6.35), Inches(9.333), Inches(0.5))
    tf = f16.text_frame
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "واتساب المبيعات: 782665485  •  البريد الإلكتروني: info@ultimate-pay.com  •  الموقع: www.ultimate-pay.com"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = RGBColor(187, 247, 208)
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s16, "ملاحظات المتحدث: ختام العرض، توجيه الدعوة المباشرة للبدء وتنسيق ورشة العمل الفنية أو فتح حسابات التجار التجريبية، وفتح باب الأسئلة.")

    # Save presentation
    output_path = "Ultimate_Pay_Presentation.pptx"
    prs.save(output_path)
    print(f"Presentation successfully saved to: {output_path}")

if __name__ == "__main__":
    build_deck()
