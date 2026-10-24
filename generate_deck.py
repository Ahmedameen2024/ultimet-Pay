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
        ("تأكيد فوري للعمليات", "⚡", Inches(9.1), Inches(5.8)),
        ("ربط رقمي وإشعار فوري", "🛡", Inches(5.8), Inches(5.8)),
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
        ("نظام التاجر المحاسبي", "ربط بيانات الدفع بعملية البيع وتوثيق التحصيل وفق التكامل المعتمد", "📊", Inches(1.6), Inches(3.6)),
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
    p.text = "🛡  المسار المالي مستقل: الأموال تنتقل مباشرة من حساب العميل لحساب التاجر لدى جهة الدفع؛ ودور المنصة هو نقل معلومات النتيجة والتسجيل المحاسبي والإشعار."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = WHITE
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s3, """ملاحظات المتحدث:
- توضيح المعمارية الرباعية: المنصة تتوسط كبنية تحتية للربط وتأكيد العمليات وتوحيد المرجع، دون أن تحتجز أموال التاجر أو تتدخل في العلاقات المصرفية المباشرة.
- توضيح أن انعكاس العمليات في السجلات المحاسبية يعتمد على نطاق التكامل والإعدادات المعتمدة لدى المنشأة.
- الرسالة الأساسية: ربط بيانات الدفع بعملية البيع بما يدعم وضوح التحصيل ومتابعة السجلات المحاسبية ومطابقة العمليات.""")

    # =========================================================================
    # =========================================================================
    # SLIDE 4: مسار العمليات (Process Flow)
    # =========================================================================
    s4 = prs.slides.add_slide(blank_layout)
    set_slide_background(s4, LIGHT_BG)
    add_header(s4, "مسار العمليات", "التدفق المعتمد — المسار المالي المباشر ومسار المعلومات والتسجيل التلقائي", is_dark=False, slide_num=4)

    steps4 = [
        ("1. إصدار الفاتورة", "التاجر ينفذ البيع ويصدر الفاتورة بنظامه ويطلب سداد القيمة عبر وسيلة الدفع.", "📄", Inches(10.75)),
        ("2. سداد العميل", "العميل يدفع وتنتقل الأموال مباشرة من حساب العميل لحساب التاجر لدى جهة الدفع.", "💳", Inches(8.25)),
        ("3. استلام النتيجة", "تصل نتيجة الدفع المؤكدة إلى منصة Ultimate Pay عبر الربط مع جهة الدفع.", "⚡", Inches(5.75)),
        ("4. مطابقة وتسجيل", "مطابقة النتيجة بالفاتورة وتسجيل المبلغ تلقائيًا بالنظام المحاسبي عند تفعيل التكامل.", "📑", Inches(3.25)),
        ("5. إشعار التاجر", "إرسال إشعار فوري للتاجر يتضمن رقم الفاتورة والمبلغ المسدد ونتيجة العملية.", "🔔", Inches(0.75)),
    ]
    for title, desc, icon, left in steps4:
        card = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(2.3), Inches(1.8), Inches(3.4))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.25)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.1)

        p_i = tf.paragraphs[0]
        p_i.text = icon
        p_i.font.size = Pt(28)
        p_i.space_after = Pt(10)
        set_rtl(p_i, PP_ALIGN.CENTER)

        p_t = tf.add_paragraph()
        p_t.text = title
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(12)
        p_t.font.bold = True
        p_t.font.color.rgb = DARK_GREEN
        p_t.space_after = Pt(8)
        set_rtl(p_t, PP_ALIGN.CENTER)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_ARABIC
        p_d.font.size = Pt(10)
        p_d.font.color.rgb = DARK_TEXT
        set_rtl(p_d, PP_ALIGN.CENTER)

    # Arrows between cards
    for left in [Inches(10.2), Inches(7.7), Inches(5.2), Inches(2.7)]:
        arr = s4.shapes.add_textbox(left, Inches(3.6), Inches(0.55), Inches(0.6))
        tf = arr.text_frame
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        p = tf.paragraphs[0]
        p.text = "➔"
        p.font.size = Pt(18)
        p.font.color.rgb = ACCENT_GREEN
        set_rtl(p, PP_ALIGN.CENTER)

    # Info Notice
    bot_box = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(6.0), Inches(11.733), Inches(0.75))
    bot_box.fill.solid()
    bot_box.fill.fore_color.rgb = WHITE
    bot_box.line.color.rgb = ACCENT_GREEN
    tf = bot_box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.1)
    p = tf.paragraphs[0]
    p.text = "💡  مساران مترابطان: المسار المالي (انتقال الأموال مباشرة بين حساب العميل وحساب التاجر دون وساطة المنصة) — ومسار المعلومات (استلام النتيجة، مطابقة الفاتورة، تسجيل المبلغ محاسبيًا، وإشعار التاجر)."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = DARK_GREEN
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s4, """ملاحظات المتحدث:
- التأكيد على وظيفة Payment Aggregator: الربط بين نتيجة الدفع والمنصة والنظام المحاسبي وإشعار التاجر.
- المنصة لا تستلم ولا تحتفظ بأموال العميل؛ بل تنتقل الأموال مباشرة من حساب العميل إلى حساب التاجر.
- القيمة الأساسية هي تقليل الإدخال اليدوي للمبالغ المسددة، مع بقاء الحركة المالية من اختصاص المؤسسة المالية.
- في حال السؤال عن تفاصيل الربط: "تعتمد التفاصيل التنفيذية على التكامل والاتفاق المعتمد، ويمكن للفريق المختص توضيح الإجراءات الخاصة بالشراكة".""")
    # =========================================================================
    # SLIDE 5: رحلة المعاملة ومساراها
    # =========================================================================
    s5 = prs.slides.add_slide(blank_layout)
    set_slide_background(s5, LIGHT_BG)
    add_header(s5, "رحلة المعاملة ومساراها", "تكامل دقيق بين المسار المالي المباشر ومسار المعلومات والتسجيل التلقائي", is_dark=False, slide_num=5)

    # Top Bar
    ch_box = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.7), Inches(11.733), Inches(0.42))
    ch_box.fill.solid()
    ch_box.fill.fore_color.rgb = DARK_GREEN
    ch_box.line.color.rgb = DARK_GREEN
    tf = ch_box.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "المسار المالي (تحويل مباشر) ⟷ مسار المعلومات (تأكيد، مطابقة، تسجيل محاسبي، وإشعار)"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = WHITE
    set_rtl(p, PP_ALIGN.CENTER)

    steps5 = [
        ("طلب الدفع", "التاجر ينفذ البيع ويسجل الفاتورة في نظامه، ويطلب تحصيل القيمة عبر وسيلة الدفع المتاحة.", "1", Inches(2.25)),
        ("سداد العميل", "يدفع العميل قيمة الفاتورة وتنتقل الأموال مباشرة من حسابه لحساب التاجر لدى جهة الدفع.", "2", Inches(2.85)),
        ("وصول النتيجة", "تصل نتيجة عملية الدفع المؤكدة إلى منصة Ultimate Pay عبر الربط المعتمد مع جهة الدفع.", "3", Inches(3.45)),
        ("مطابقة الفاتورة", "التحقق من نجاح العملية وربطها بالفاتورة الصحيحة باستخدام البيانات المرجعية المتاحة.", "4", Inches(4.05)),
        ("التسجيل المحاسبي", "عند تأكيد العملية وتطابقها، يُسجّل المبلغ تلقائيًا بنظام التاجر وفق التكامل المعتمد.", "5", Inches(4.65)),
        ("إشعار التاجر", "يصل إشعار للتاجر يوضح أن العميل سدد الفاتورة، مع بيان رقم الفاتورة والمبلغ والنتيجة.", "6", Inches(5.25)),
    ]
    for title, desc, num, top in steps5:
        row = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(3.2), top, Inches(9.333), Inches(0.52))
        row.fill.solid()
        row.fill.fore_color.rgb = WHITE
        row.line.color.rgb = CARD_BORDER
        tf = row.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        tf.margin_top = tf.margin_bottom = 0
        tf.margin_left = tf.margin_right = Inches(0.12)
        p = tf.paragraphs[0]
        p.text = f"{title}:  {desc}"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(10)
        p.font.bold = True
        p.font.color.rgb = DARK_TEXT
        set_rtl(p, PP_ALIGN.RIGHT)

        num_b = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(12.1), top, Inches(0.42), Inches(0.52))
        num_b.fill.solid()
        num_b.fill.fore_color.rgb = DARK_GREEN
        num_b.line.color.rgb = DARK_GREEN
        tf_n = num_b.text_frame
        tf_n.vertical_anchor = MSO_ANCHOR.MIDDLE
        tf_n.margin_top = tf_n.margin_bottom = tf_n.margin_left = tf_n.margin_right = 0
        p_n = tf_n.paragraphs[0]
        p_n.text = num
        p_n.font.name = FONT_ENG
        p_n.font.size = Pt(12)
        p_n.font.bold = True
        p_n.font.color.rgb = WHITE
        set_rtl(p_n, PP_ALIGN.CENTER)

    # Status Column
    statuses = [
        ("إصدار الفاتورة", Inches(2.25)),
        ("تحويل مالي مباشر", Inches(2.85)),
        ("تأكيد النتيجة", Inches(3.45)),
        ("مطابقة المرجع", Inches(4.05)),
        ("تسجيل محاسبي تلقائي", Inches(4.65)),
        ("إشعار فوري للتاجر", Inches(5.25)),
    ]
    for st, top in statuses:
        s_box = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), top, Inches(2.2), Inches(0.52))
        s_box.fill.solid()
        s_box.fill.fore_color.rgb = LIGHT_GREEN_BG
        s_box.line.color.rgb = ACCENT_GREEN
        tf = s_box.text_frame
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
        p = tf.paragraphs[0]
        p.text = st
        p.font.name = FONT_ARABIC
        p.font.size = Pt(9)
        p.font.bold = True
        p.font.color.rgb = DARK_GREEN
        set_rtl(p, PP_ALIGN.CENTER)

    # Failed Payment Handling Box
    f_box = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(5.95), Inches(11.733), Inches(0.75))
    f_box.fill.solid()
    f_box.fill.fore_color.rgb = AMBER_BG
    f_box.line.color.rgb = AMBER_BORDER
    tf = f_box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.1)
    p = tf.paragraphs[0]
    p.text = "🔴  حالة العمليات غير المؤكدة: إذا كانت النتيجة معلقة أو فاشلة أو لم تتطابق مع الفاتورة، لا تُعرض الفاتورة كمسددة ولا يُسجّل المبلغ، وتُوثّق الحالة لمنع أي التباس."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = AMBER_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s5, """ملاحظات المتحدث:
- إيضاح الخطوات الست التي تمثل صلب خدمة Payment Aggregator: من سداد العميل حتى إشعار التاجر.
- التركيز على أن تسجيل المبلغ يتم تلقائيًا في النظام المحاسبي للتاجر عند تفعيل التكامل بدلًا من الإدخال اليدوي.
- التأكيد على أن المنصة لا تتولى استلام أموال أو دورات تسوية؛ فالأموال تنتقل مباشرة بين حسابات الأطراف لدى جهة الدفع.""")
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
        ("تسجيل محاسبي تلقائي", "تسجيل مبالغ الفواتير تلقائيًا في نظام Onyx ERP عند تأكيد السداد", "🔄", Inches(0.8), Inches(2.05)),
        ("تسليم أسرع للعميل", "إشعار السداد اللحظي يغني الكاشير عن انتظار التأكيد اليدوي", "🛍", Inches(8.8), Inches(4.35)),
        ("مطابقة موثقة", "كل دفعة مرتبطة برقم الفاتورة ومرجع مصرفي فريد", "📋", Inches(4.8), Inches(4.35)),
        ("انتقال مباشر للأموال", "انتقال المبالغ مباشرة من حساب العميل لحساب التاجر دون أي وساطة نقدية", "🏛", Inches(0.8), Inches(4.35)),
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
        ("إعدادات التكامل", "إدارة قنوات الربط المعتمدة وتأكيد استلام بيانات العمليات على أنظمتكم مباشرة.", "SCR-MER-06", Inches(0.8), Inches(4.15)),
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
    add_header(s8, "التكامل المحاسبي", "ربط بيانات الدفع بالسجلات المحاسبية — وضوح ومطابقة أسهل", is_dark=False, slide_num=8)

    # Right: Red Card (Without Integration)
    c_red = s8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.8), Inches(5.733), Inches(4.3))
    c_red.fill.solid()
    c_red.fill.fore_color.rgb = LIGHT_RED_BG
    c_red.line.color.rgb = RED_BORDER
    tf = c_red.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    tf.margin_top = Inches(0.2)
    tf.margin_bottom = Inches(0.1)
    tf.margin_left = tf.margin_right = Inches(0.2)

    p_t = tf.paragraphs[0]
    p_t.text = "بدون ربط معتمد — فوضى وتشتت  ✖"
    p_t.font.name = FONT_ARABIC
    p_t.font.size = Pt(16)
    p_t.font.bold = True
    p_t.font.color.rgb = DANGER_RED
    p_t.space_after = Pt(8)
    set_rtl(p_t, PP_ALIGN.CENTER)

    red_points = [
        "تعدد شاشات التحصيل وأجهزة الدفع المنفصلة على الكاونتر.",
        "مطابقة يدوية مستمرة ومراجعة فواتير وإشعارات مبعثرة.",
        "تأخر معرفة حالة الفواتير وتشتت مراجع العمليات المصرفية.",
        "أعباء تشغيلية في مراجعة القيود وملاحقة الفروقات اليومية."
    ]
    for pt in red_points:
        p = tf.add_paragraph()
        p.text = f"✖  {pt}"
        p.font.name = FONT_ARABIC
        p.font.size = Pt(12)
        p.font.color.rgb = DARK_TEXT
        p.space_after = Pt(8)
        set_rtl(p, PP_ALIGN.RIGHT)

    # Left: Green Card (With Ultimate Pay Integration)
    c_grn = s8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.733), Inches(4.3))
    c_grn.fill.solid()
    c_grn.fill.fore_color.rgb = LIGHT_GREEN_BG
    c_grn.line.color.rgb = ACCENT_GREEN
    tf = c_grn.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.TOP
    tf.margin_top = Inches(0.2)
    tf.margin_bottom = Inches(0.1)
    tf.margin_left = tf.margin_right = Inches(0.2)

    p_t = tf.paragraphs[0]
    p_t.text = "مع حلول الربط المعتمدة لـ Ultimate Pay  ✔"
    p_t.font.name = FONT_ARABIC
    p_t.font.size = Pt(16)
    p_t.font.bold = True
    p_t.font.color.rgb = DARK_GREEN
    p_t.space_after = Pt(8)
    set_rtl(p_t, PP_ALIGN.CENTER)

    green_points = [
        "ربط بيانات الدفع بعملية البيع بمرجع موحد يسهل التتبع.",
        "مساعدة النظام على تحديث حالة الفاتورة وتوثيق التحصيل وفق التكامل المعتمد.",
        "تيسير مطابقة العمليات اليومية وتقليل الحاجة للإدخال اليدوي المكرر.",
        "وضوح كامل في السجلات المحاسبية ومتابعة الفواتير المسددة وتقليل الإدخال اليدوي."
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
    p.text = "الرسالة الأساسية: ربط بيانات الدفع بعملية البيع، بما يدعم وضوح التحصيل ومتابعة السجلات المحاسبية ومطابقة العمليات."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = DARK_GREEN
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s8, """ملاحظات المتحدث:
- هذه الشريحة تشرح كيف تدعم المنصة النظام المحاسبي للتاجر بالبيانات الدقيقة والمرجع الموحد.
- عدم الادعاء بأن التسجيل المحاسبي يتم في 100% من الحالات؛ بل يعتمد ذلك على تفعيل التكامل المعتمد وتأكيد نجاح العملية.
- التركيز على الرسالة الرئيسية: «ربط بيانات الدفع بعملية البيع، بما يدعم وضوح التحصيل ومتابعة السجلات المحاسبية ومطابقة العمليات».
- الرد على أسئلة الربط: "تعتمد التفاصيل التنفيذية على التكامل والاتفاق المعتمد، ويمكن للفريق المختص توضيح الإجراءات الخاصة بالشراكة".""")

    # =========================================================================
    # SLIDE 9: أدوات الربط ونطاق الخدمة (Scope)
    # =========================================================================
    s9 = prs.slides.add_slide(blank_layout)
    set_slide_background(s9, LIGHT_BG)
    add_header(s9, "نطاق خدمة Payment Aggregator", "ما تقدمه الخدمة بوضوح — وما يقع خارج نطاقها", is_dark=False, slide_num=9)

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
    p_t.text = "خدمات وحلول المنصة (نطاق هذا العرض)  ✔"
    p_t.font.name = FONT_ARABIC
    p_t.font.size = Pt(15)
    p_t.font.bold = True
    p_t.font.color.rgb = DARK_GREEN
    p_t.space_after = Pt(8)
    set_rtl(p_t, PP_ALIGN.RIGHT)

    in_items = [
        ("طلبات الدفع المباشر", "إنشاء طلب الدفع مع رمز QR تفاعلي يحمل مرجع الفاتورة والمبلغ بدقة عبر نقاط البيع والواجهات."),
        ("تأكيد العمليات وتوحيد المرجع", "تأكيد فوري لنتيجة العملية وتزويد التاجر برقم مرجع موحد يربط حركة السداد ببيانات الفاتورة."),
        ("قنوات ربط معتمدة وآمنة", "ربط منظم لتمرير طلبات التحصيل وتأكيد النتائج بين واجهات البيع وجهات الدفع المعتمدة."),
        ("دعم التكامل المحاسبي", "ربط مرن مع الأنظمة المحاسبية المعتمدة (مثل Onyx ERP) لتوثيق التحصيل ومتابعة الفواتير.")
    ]
    for h, b in in_items:
        p1 = tf.add_paragraph()
        p1.text = f"•  {h}:  {b}"
        p1.font.name = FONT_ARABIC
        p1.font.size = Pt(11)
        p1.font.color.rgb = DARK_TEXT
        p1.space_after = Pt(8)
        set_rtl(p1, PP_ALIGN.RIGHT)

    # Left: Out of Scope
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
    p_t.text = "محددات وضوابط خارج النطاق  🛡"
    p_t.font.name = FONT_ARABIC
    p_t.font.size = Pt(14)
    p_t.font.bold = True
    p_t.font.color.rgb = MUTED_TEXT
    p_t.space_after = Pt(8)
    set_rtl(p_t, PP_ALIGN.RIGHT)

    out_items = [
        ("حيازة أموال التجار", "المنصة لا تحتجز أموال المبيعات أو تشغل حسابات وسيطة؛ حركة الأموال اختصاص المؤسسات المالية."),
        ("إجراءات التسوية المصرفية", "التسوية المصرفية وتحويل المستحقات مسؤولية البنك المعتمد وفق اتفاقية الحساب وشروط التسوية."),
        ("القرارات الائتمانية والمصرفية", "المنصة لا تتدخل في العلاقات التعاقدية المصرفية أو الرسوم الداخلية للبنوك."),
        ("احتساب العمولات وإدارة الأرصدة", "المنصة منصة ربط وإشعارات وتكامل ولا تدير حسابات مالية للتاجر أو أرصدة تسوية داخلية.")
    ]
    for h, b in out_items:
        p1 = tf.add_paragraph()
        p1.text = f"•  {h}:  {b}"
        p1.font.name = FONT_ARABIC
        p1.font.size = Pt(10)
        p1.font.color.rgb = MUTED_TEXT
        p1.space_after = Pt(8)
        set_rtl(p1, PP_ALIGN.RIGHT)

    set_notes(s9, """ملاحظات المتحدث:
- الشفافية في توضيح نطاق الخدمة التجاري والتشغيلي: نحن منصة ربط ومطابقة تيسر التحصيل وتوحيد المرجع.
- استبعاد المصطلحات التقنية والتركيز على مفاهيم الربط المالي المعتمد وتأكيد العمليات وتوحيد المرجع.
- التأكيد على أن التسويات المالية وتغذية الحسابات تتم عبر الترتيبات المصرفية المعتمدة مع البنوك.""")

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
            "تنفيذ الدفع وتحويل الأموال مباشرة لحساب التاجر"
        ], Inches(8.8)),
        ("Ultimate Pay — المنصة المجمعة", LIGHT_GREEN_BG, DARK_GREEN, [
            "بوابة التاجر وقنوات الربط المعتمدة",
            "التحقق اللحظي من المعاملات ومحرك AML/FRM",
            "مطابقة الفواتير وتأكيد نتائج العمليات والإشعار",
            "الدعم الفني والتشغيلي للربط المحاسبي"
        ], Inches(4.8)),
        ("التاجر", WHITE, DARK_TEXT, [
            "إصدار الفواتير وطلبات السداد عبر الكاونتر",
            "طلب ربط حساباته المصرفية الرسمية بالمنصة",
            "استقبال المدفوعات ومتابعة الحالات لحظيًا",
            "تسليم البضائع فور تأكيد نتيجة السداد"
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
        ("منع تكرار العمليات وتوحيد المرجع", "معرّفات فريدة تضمن عدم تكرار قيد أو معالجة أي عملية تحت أي ظرف تشغيلي.", "🚫", Inches(0.8), Inches(1.8)),
        ("حماية وتشفير قنوات الربط", "تشفير شامل وحماية متقدمة لبيانات العمليات المتبادلة بين المنصة والأنظمة المعتمدة.", "🔒", Inches(8.8), Inches(4.1)),
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
    # =========================================================================
    # SLIDE 13: حوكمة التدفق المالي والمعلوماتي (Two-Track Architecture)
    # =========================================================================
    s13 = prs.slides.add_slide(blank_layout)
    set_slide_background(s13, LIGHT_BG)
    add_header(s13, "حوكمة التدفق المالي والمعلوماتي", "فصل المسار المالي المباشر عن مسار المعلومات والإشعار والتكامل", is_dark=False, slide_num=13)

    tracks13 = [
        ("1. المسار المالي المباشر (Financial Flow)", WHITE, DARK_GREEN, [
            "انتقال الأموال مباشرة من حساب العميل إلى حساب التاجر لدى جهة الدفع.",
            "Ultimate Pay لا تستلم أموال العميل ولا تحتفظ بها ولا تحولها للتاجر.",
            "يتم تحويل وحفظ الأموال بالكامل ضمن القنوات المصرفية والمالية المرخصة.",
            "استقلالية مالية كاملة وحماية لأموال التاجر دون أي وساطة في النقد."
        ], Inches(6.8)),
        ("2. مسار المعلومات والتكامل (Information Flow)", LIGHT_GREEN_BG, DARK_GREEN, [
            "تصل نتيجة الدفع المؤكدة من جهة الدفع إلى منصة Ultimate Pay بالمرجع المعتمد.",
            "التحقق من صحة العملية ومطابقتها بالفاتورة الصحيحة ومطابقة المبلغ.",
            "تسجيل مبلغ الفاتورة تلقائيًا في النظام المحاسبي للتاجر عند تفعيل التكامل.",
            "إرسال إشعار فوري للتاجر يتضمن رقم الفاتورة والمبلغ وحالة السداد."
        ], Inches(0.8)),
    ]
    for title, bg_col, title_col, points, left in tracks13:
        col = s13.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(1.8), Inches(5.7), Inches(3.3))
        col.fill.solid()
        col.fill.fore_color.rgb = bg_col
        col.line.color.rgb = ACCENT_GREEN if bg_col != WHITE else CARD_BORDER
        tf = col.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.2)

        p = tf.paragraphs[0]
        p.text = title
        p.font.name = FONT_ARABIC
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = title_col
        p.space_after = Pt(10)
        set_rtl(p, PP_ALIGN.RIGHT)

        for pt in points:
            p_pt = tf.add_paragraph()
            p_pt.text = f"• {pt}"
            p_pt.font.name = FONT_ARABIC
            p_pt.font.size = Pt(10.5)
            p_pt.font.color.rgb = DARK_TEXT if bg_col == WHITE else DARK_GREEN
            p_pt.space_after = Pt(6)
            set_rtl(p_pt, PP_ALIGN.RIGHT)

    # Principle Box
    f_box = s13.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(5.25), Inches(11.733), Inches(0.7))
    f_box.fill.solid()
    f_box.fill.fore_color.rgb = WHITE
    f_box.line.color.rgb = ACCENT_GREEN
    tf = f_box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.1)
    p = tf.paragraphs[0]
    p.text = "🛡  مبدأ الحوكمة: تسجيل المبلغ محاسبيًا في نظام التاجر هو انعكاس لمعلومات الدفع المؤكدة، ولا يعني إطلاقًا أن المنصة نفذت تحويل النقد؛ فالأموال تنتقل مباشرة بين حسابات الأطراف لدى جهة الدفع."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = DARK_GREEN
    set_rtl(p, PP_ALIGN.CENTER)

    # Warning Box
    w_box = s13.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(6.05), Inches(11.733), Inches(0.65))
    w_box.fill.solid()
    w_box.fill.fore_color.rgb = AMBER_BG
    w_box.line.color.rgb = AMBER_BORDER
    tf = w_box.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.1)
    p = tf.paragraphs[0]
    p.text = "ℹ  تنبيه للمتحدث: الخدمة تقلل الإدخال اليدوي وتوفر إشعارًا واضحًا، ولا تلغي مسؤوليات المراجعة والمحاسبة، كما أنها لا تشمل إدارة دورة مستندية أو تسويات بين البنوك."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = AMBER_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    set_notes(s13, """ملاحظات المتحدث:
- الشرح الواضح لفصل المسار المالي عن مسار المعلومات.
- تأكيد أن Ultimate Pay لا تستلم ولا تحتفظ بأموال العميل ولا تحولها إلى التاجر.
- بيان أن تسجيل المبلغ في النظام المحاسبي يعتمد على تفعيل التكامل ونقل نتيجة الدفع المؤكدة، وليس دليلًا على قيام المنصة بحركة أموال نقدية.
- في حال السؤال عن الحسابات والتسويات: "تتم حركة الأموال مباشرة بين حسابات الأطراف لدى الجهات المصرفية المعتمدة وفق شروطها".""")
    # =========================================================================
    # SLIDE 14: سيناريو تطبيقي (End-to-End Walkthrough)
    # =========================================================================
    s14 = prs.slides.add_slide(blank_layout)
    set_slide_background(s14, LIGHT_BG)
    add_header(s14, "مثال توضيحي افتراضي", "دورة العملية بالكامل — الفاتورة رقم INV-1025 بقيمة 5,000 ريال", is_dark=False, slide_num=14)

    # Top Notice: Hypothetical example
    top_notice = s14.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.7), Inches(11.733), Inches(0.42))
    top_notice.fill.solid()
    top_notice.fill.fore_color.rgb = AMBER_BG
    top_notice.line.color.rgb = AMBER_BORDER
    tf = top_notice.text_frame
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = 0
    p = tf.paragraphs[0]
    p.text = "💡  مثال افتراضي للتوضيح: فاتورة مبيعات رقم INV-1025 بقيمة 5,000 ريال (حالة الدفع: ناجحة ومؤكدة)"
    p.font.name = FONT_ARABIC
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = AMBER_TEXT
    set_rtl(p, PP_ALIGN.CENTER)

    steps14 = [
        ("1. إصدار الفاتورة", "التاجر يُصدر الفاتورة رقم INV-1025 بقيمة 5,000 ريال في نظامه ويطلب سدادها.", Inches(10.75)),
        ("2. سداد العميل", "العميل يدفع 5,000 ريال وتنتقل مباشرة من حسابه لحساب التاجر لدى جهة الدفع.", Inches(8.75)),
        ("3. وصول النتيجة", "تصل نتيجة الدفع المؤكدة إلى منصة Ultimate Pay بالمرجع المعتمد من جهة الدفع.", Inches(6.75)),
        ("4. مطابقة الفاتورة", "المنصة تطابق النتيجة بالفاتورة رقم INV-1025 وتتأكد من مطابقة المبلغ المحدد.", Inches(4.75)),
        ("5. تسجيل المبلغ", "يُسجَّل مبلغ 5,000 ريال تلقائيًا في نظام التاجر المحاسبي وفق التكامل المفعّل.", Inches(2.75)),
        ("6. إشعار التاجر", "يصل إشعار للتاجر: «تم سداد الفاتورة رقم INV-1025 بمبلغ 5,000 ريال».", Inches(0.75)),
    ]
    for title, desc, left in steps14:
        card = s14.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(2.25), Inches(1.8), Inches(2.8))
        card.fill.solid()
        card.fill.fore_color.rgb = WHITE
        card.line.color.rgb = CARD_BORDER
        tf = card.text_frame
        tf.word_wrap = True
        tf.vertical_anchor = MSO_ANCHOR.TOP
        tf.margin_top = Inches(0.18)
        tf.margin_bottom = Inches(0.1)
        tf.margin_left = tf.margin_right = Inches(0.1)

        p_t = tf.paragraphs[0]
        p_t.text = title
        p_t.font.name = FONT_ARABIC
        p_t.font.size = Pt(11)
        p_t.font.bold = True
        p_t.font.color.rgb = DARK_GREEN
        p_t.space_after = Pt(6)
        set_rtl(p_t, PP_ALIGN.CENTER)

        p_d = tf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_ARABIC
        p_d.font.size = Pt(10)
        p_d.font.color.rgb = DARK_TEXT
        set_rtl(p_d, PP_ALIGN.CENTER)

    # Bottom Split Cards
    if os.path.exists('photo_terminal.png'):
        s14.shapes.add_picture('photo_terminal.png', Inches(0.8), Inches(5.2), width=Inches(4.5), height=Inches(1.55))

    c_later = s14.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(5.6), Inches(5.2), Inches(6.933), Inches(1.55))
    c_later.fill.solid()
    c_later.fill.fore_color.rgb = WHITE
    c_later.line.color.rgb = CARD_BORDER
    tf = c_later.text_frame
    tf.word_wrap = True
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf.margin_top = tf.margin_bottom = tf.margin_left = tf.margin_right = Inches(0.15)
    p = tf.paragraphs[0]
    p.text = "الخلاصة:\nربط نتيجة الدفع بالفاتورة والنظام المحاسبي وإشعار التاجر يقلل الحاجة للإدخال اليدوي، مع بقاء حركة الأموال مباشرة بين حساب العميل وحساب التاجر دون أي تدخل للمنصة."
    p.font.name = FONT_ARABIC
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = DARK_GREEN
    set_rtl(p, PP_ALIGN.RIGHT)

    set_notes(s14, """ملاحظات المتحدث:
- التأكيد على أن هذا المثال افتراضي لتوضيح وظيفة Payment Aggregator المحددة.
- إبراز أن النتيجة: تسجيل 5,000 ريال تلقائيًا في نظام التاجر بدل الإدخال اليدوي، وإشعار فوري للتاجر.
- عدم الدخول في تفاصيل تحويل الأموال بين حسابات أخرى أو تسويات؛ فالأموال انتقلت مباشرة بين العميل والتاجر.""")
    # SLIDE 15: لماذا Ultimate Pay؟ (The 6 Pillars)
    # =========================================================================
    s15 = prs.slides.add_slide(blank_layout)
    set_slide_background(s15, LIGHT_BG)
    add_header(s15, "لماذا Ultimate Pay؟", "ستة أسباب موثقة — لا وعود عامة", is_dark=False, slide_num=15)

    pillars = [
        ("منظومة موحدة", "واجهة واحدة لربط كافة المحافظ والبنوك وERP بدل قنوات متفرقة وعقود متعددة.", "❖", Inches(8.8), Inches(1.8)),
        ("شركة مالية مرخصة", "تعمل ضمن ترخيص البنك المركزي اليمني وفق أعلى معايير الحوكمة والامتثال.", "🏛", Inches(4.8), Inches(1.8)),
        ("ربط محكوم مصرفيًا", "لا تفعيل لأي قناة دفع دون اعتماد المؤسسة المالية صاحبة الحساب لضمان الانضباط.", "🛡", Inches(0.8), Inches(1.8)),
        ("تكامل محاسبي مباشر", "تسجيل مبالغ الفواتير تلقائيًا في أنظمة ERP المعتمدة مثل Onyx عند تفعيل التكامل.", "🔄", Inches(8.8), Inches(3.95)),
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
            "جلسة عمل لمراجعة آلية الربط المعتمدة ومطابقة نطاق التكامل التجاري والمصرفي.",
            "تحديد قنوات الدفع المستهدفة واعتماد نطاق التكامل التقني مع النظام المحاسبي للتاجر.",
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
