'use client';

import { motion } from 'motion/react';
import { Clock, ChevronLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Language } from '../types';

const ARTICLES_DATA: Record<string, any> = {
  '1': {
    id: 1,
    title: { ar: 'أهم حقوق المتهم أمام النيابة العامة', en: 'Rights of the Accused Before Public Prosecution' },
    category: { ar: 'قانون جنائي', en: 'Criminal Law' },
    date: '2024-03-15',
    image: '/10.jpg',
    readTime: { ar: '5 دقائق', en: '5 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `يتمتع المتهم أمام النيابة العامة بمجموعة من الحقوق الأساسية التي تكفلها القوانين المصرية والمواثيق الدولية. من أهم هذه الحقوق:

1. حق الصمت والدفاع: يحق للمتهم عدم الإدلاء بأي اعترافات ويحق له التمثيل القانوني أثناء التحقيق.

2. حق الاستئناف: للمتهم الحق في الاستئناف قرارات النيابة العامة والطعن فيها أمام المحكمة.

3. حق الاطلاع على الأدلة: يجب أن يكون المتهم على علم بالأدلة والمستندات المقدمة ضده.

4. حق الحصول على نسخة من الاتهام: يجب تسليم المتهم نسخة من الاتهام الموجه إليه.

5. حق الحماية من التعذيب والمعاملة السيئة: لا يجوز تعريض المتهم للتعذيب أو المعاملة المهينة.

من المهم جداً معرفة هذه الحقوق والتمسك بها أثناء أي إجراء قانوني. ننصحك باستشارة محامٍ متخصص في القانون الجنائي للحصول على أفضل الحماية القانونية.`,
      en: `The accused has a number of fundamental rights before the Public Prosecution that are guaranteed by Egyptian laws and international treaties. Key rights include:

1. Right to silence and defense: The accused has the right not to make any confessions and the right to legal representation during investigation.

2. Right to appeal: The accused has the right to appeal decisions of the Public Prosecution and challenge them before the court.

3. Right to access evidence: The accused must be aware of the evidence and documents presented against them.

4. Right to receive a copy of the charge: The accused must receive a copy of the charges against them.

5. Right to protection from torture and ill-treatment: The accused cannot be subjected to torture or degrading treatment.

It is very important to know these rights and maintain them during any legal proceeding. We recommend consulting a lawyer specializing in criminal law for the best legal protection.`
    }
  },
  '2': {
    id: 2,
    title: { ar: 'كيفية صياغة عقد تجاري يحمي مصالحك', en: 'How to Draft a Commercial Contract' },
    category: { ar: 'قانون تجاري', en: 'Commercial Law' },
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
    readTime: { ar: '7 دقائق', en: '7 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `صياغة عقد تجاري قوي وقانوني هي خطوة أساسية لحماية مصالحك التجارية. إليك الخطوات الأساسية:

1. تحديد الأطراف والبيانات: يجب أن يحتوي العقد على بيانات واضحة لجميع الأطراف المعنية.

2. تحديد الالتزامات: كل طرف يجب أن يعرف بالضبط ما هي التزاماته وحقوقه.

3. تحديد المقابل: يجب أن يكون السعر والشروط المالية واضحة تماماً.

4. شروط السداد: حدد واضحة لكيفية ومتى سيتم السداد.

5. شروط فك التعاقد: يجب أن تغطي العقد حالات إنهاء العقد والعواقب.

6. القانون الواجب التطبيق: حدد أي قانون سيحكم العقد في حالة النزاع.

نحن ننصح بشدة باستشارة محامٍ متخصص قبل توقيع أي عقد تجاري مهم.`,
      en: `Drafting a strong and legally compliant commercial contract is a critical step to protect your business interests. Here are the basic steps:

1. Identifying parties and information: The contract must contain clear information about all parties involved.

2. Determining obligations: Each party must know exactly what their obligations and rights are.

3. Determining the consideration: The price and financial terms must be absolutely clear.

4. Payment terms: Set clear terms for how and when payment will be made.

5. Contract termination clauses: The contract must cover cases of contract termination and consequences.

6. Applicable law: Specify which law will govern the contract in case of dispute.

We strongly recommend consulting a specialized lawyer before signing any important commercial contract.`
    }
  },
  '3': {
    id: 3,
    title: { ar: 'إجراءات الطلاق في القانون المصري', en: 'Divorce Procedures in Egyptian Law' },
    category: { ar: 'قانون الأسرة', en: 'Family Law' },
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&q=80&w=800',
    readTime: { ar: '8 دقائق', en: '8 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `الطلاق هو أحد الموضوعات الحساسة في القانون الأسري. يتم تنظيمه بموجب القانون المصري رقم 1 لسنة 2000. إليك الإجراءات الأساسية:

1. طلب رفع الدعوى: يقدم الطالب طلباً للمحكمة المختصة لرفع دعوى الطلاق.

2. محاولة الصلح: تحاول المحكمة الصلح بين الزوجين قبل نظر الدعوى.

3. سماع البينات: تستمع المحكمة إلى أدلة الطرفين وشهاداتهما.

4. صدور الحكم: تصدر المحكمة قرارها بالموافقة أو الرفض.

5. المراجعة والاستئناف: يحق لأي طرف الطعن في الحكم أمام محكمة الاستئناف.

6. مسائل الحضانة والنفقة: يتم تحديد الترتيبات المالية والحضانة في الحكم.

من المهم جداً الحصول على استشارة قانونية متخصصة في قانون الأسرة لحماية حقوقك.`,
      en: `Divorce is one of the sensitive topics in family law. It is regulated under Egyptian Law No. 1 of 2000. Here are the basic procedures:

1. Filing a petition: The applicant files a petition with the competent court to file a divorce case.

2. Reconciliation attempt: The court attempts reconciliation between the spouses before hearing the case.

3. Hearing evidence: The court listens to the evidence and testimony of both parties.

4. Issuance of judgment: The court issues its decision to approve or reject the case.

5. Review and appeal: Either party has the right to appeal the judgment before the Court of Appeal.

6. Custody and maintenance issues: Financial arrangements and custody are determined in the judgment.

It is very important to obtain specialized legal advice in family law to protect your rights.`
    }
  },
  '4': {
    id: 4,
    title: { ar: 'الأحكام الجنائية والطعن فيها', en: 'Criminal Judgments and Appeals' },
    category: { ar: 'قانون جنائي', en: 'Criminal Law' },
    date: '2024-03-20',
    image: '/12.jpg',
    readTime: { ar: '6 دقائق', en: '6 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `الحكم الجنائي هو القرار الذي تصدره المحكمة بشأن قضية جنائية. يحق للمحكوم عليه الطعن في الحكم من خلال عدة طرق قانونية.

أنواع الأحكام الجنائية:
1. الإدانة: الحكم على المتهم بعقوبة معينة.
2. البراءة: إعلان براءة المتهم من التهمة.
3. الحفظ: عدم متابعة الدعوى.

طرق الطعن:
1. الاستئناف: يقدم أمام محكمة الاستئناف.
2. المراجعة: في حالات استثنائية معينة.
3. الطعن الإداري: لحماية الحقوق الدستورية.

من المهم فهم حقوقك في الطعن وتقديم طعنك في الوقت المحدد قانوناً.`,
      en: `A criminal judgment is a decision issued by the court regarding a criminal case. The convicted person has the right to appeal the judgment through several legal methods.

Types of criminal judgments:
1. Conviction: Sentencing the defendant to a specific sentence.
2. Acquittal: Declaration of the defendant's innocence.
3. Dismissal: Non-prosecution of the case.

Methods of appeal:
1. Appeal: Submitted to the Court of Appeal.
2. Revision: In certain exceptional cases.
3. Administrative challenge: To protect constitutional rights.

It is important to understand your rights to appeal and to submit your appeal within the time limit set by law.`
    }
  },
  '5': {
    id: 5,
    title: { ar: 'الجرائم الإلكترونية وعقوباتها', en: 'Cybercrime and Penalties' },
    category: { ar: 'قانون جنائي', en: 'Criminal Law' },
    date: '2024-03-18',
    image: '/13.png',
    readTime: { ar: '7 دقائق', en: '7 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `الجرائم الإلكترونية هي الجرائم التي ترتكب عبر الإنترنت أو باستخدام الحاسبات الآلية. تنظمها قوانين خاصة لحماية الأفراد والمجتمع.

أنواع الجرائم الإلكترونية:
1. القرصنة والاختراق غير المصرح.
2. السرقة عبر الإنترنت والاحتيال الإلكتروني.
3. نشر محتوى مسيء أو إباحي.
4. هجمات DDoS والبرامج الخبيثة.
5. تزوير الهويات والتماس البيانات الشخصية.

العقوبات:
- الحبس من 6 أشهر إلى عدة سنوات.
- غرامات مالية تصل إلى آلاف الجنيهات.
- مراقبة إلكترونية.

ننصح بالحذر من هذه الجرائم والالتزام بالسلوك الأخلاقي عند استخدام الإنترنت.`,
      en: `Cybercrime refers to crimes committed over the Internet or using computers. They are regulated by special laws to protect individuals and society.

Types of cybercrimes:
1. Hacking and unauthorized access.
2. Online theft and fraud.
3. Publishing offensive or explicit content.
4. DDoS attacks and malware.
5. Identity theft and data harvesting.

Penalties:
- Imprisonment from 6 months to several years.
- Fines up to thousands of pounds.
- Electronic surveillance.

We recommend being careful about these crimes and adhering to ethical conduct when using the Internet.`
    }
  },
  '6': {
    id: 6,
    title: { ar: 'حقوق المستهلك في العقود التجارية', en: 'Consumer Rights in Commercial Contracts' },
    category: { ar: 'قانون تجاري', en: 'Commercial Law' },
    date: '2024-03-12',
    image: '/15.jpg',
    readTime: { ar: '7 دقائق', en: '7 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `المستهلك له مجموعة من الحقوق التي تحميه في التعاملات التجارية والعقود المختلفة.

أهم حقوق المستهلك:
1. حق الحصول على معلومات صحيحة: يجب أن تكون جميع المعلومات عن السلعة واضحة.
2. حق الأمان: يجب أن تكون السلعة آمنة وخالية من العيوب.
3. حق الاختيار: للمستهلك الحق في اختيار السلعة والمرة والسعر.
4. حق الحماية من الإعلان المضلل.
5. حق الاسترجاع والاستبدال: في حالة العيوب أو عدم الرضا.
6. حق التعويض: في حالة تعرضه للضرر.

الحماية القانونية:
- قانون حماية المستهلك المصري.
- جهات تابعة للدولة لحل النزاعات.

من المهم معرفة حقوقك وعدم التنازل عنها.`,
      en: `The consumer has a set of rights that protect him in commercial transactions and various contracts.

Consumer rights:
1. Right to accurate information: All information about goods must be clear.
2. Right to safety: Goods must be safe and free from defects.
3. Right to choice: The consumer has the right to choose goods, time and price.
4. Right to protection from misleading advertising.
5. Right to return and exchange: In case of defects or dissatisfaction.
6. Right to compensation: If harmed.

Legal protection:
- Egyptian Consumer Protection Law.
- State bodies to resolve disputes.

It is important to know your rights and not give them up.`
    }
  },
  '7': {
    id: 7,
    title: { ar: 'الضمانات والشروط في البيع والشراء', en: 'Warranties and Terms in Sales' },
    category: { ar: 'قانون تجاري', en: 'Commercial Law' },
    date: '2024-03-08',
    image: '/14.jpg',
    readTime: { ar: '6 دقائق', en: '6 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `الضمانات والشروط في عقود البيع والشراء تحمي كلا الطرفين وتوضح التزاماتهما.

أنواع الضمانات:
1. ضمان الملكية: البائع يضمن أن السلعة ملكه الصحيح.
2. ضمان الخلو من العيوب: السلعة خالية من العيوب الخفية.
3. ضمان الصلاحية للاستعمال: السلعة صالحة للغرض المطلوب.
4. ضمان الكمية والنوعية: السلعة بالكم والنوع المتفق عليه.

الشروط الهامة:
1. معلومات السلع بشكل واضح.
2. الأسعار والشروط المالية.
3. مدة الضمان والصيانة.
4. شروط الاسترجاع والاستبدال.
5. المسؤوليات والالتزامات.

من المهم قراءة جميع الشروط والضمانات قبل التوقيع على العقد.`,
      en: `Warranties and conditions in sales and purchase contracts protect both parties and clarify their obligations.

Types of warranties:
1. Warranty of title: The seller warrants that the goods are his rightful property.
2. Warranty of freedom from defects: The goods are free from hidden defects.
3. Warranty of fitness for use: The goods are fit for the intended purpose.
4. Warranty of quantity and quality: The goods are of the agreed quantity and quality.

Important conditions:
1. Clear information about goods.
2. Prices and financial terms.
3. Duration of warranty and maintenance.
4. Return and exchange conditions.
5. Responsibilities and obligations.

It is important to read all conditions and warranties before signing the contract.`
    }
  },
  '8': {
    id: 8,
    title: { ar: 'حضانة الأطفال وحقوق الوالدين', en: 'Child Custody and Parental Rights' },
    category: { ar: 'قانون الأسرة', en: 'Family Law' },
    date: '2024-03-14',
    image: '/17.jpg',
    readTime: { ar: '8 دقائق', en: '8 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `حضانة الأطفال هي قضية حساسة في القانون الأسري وتنظمها قوانين خاصة لحماية مصلحة الطفل.

معايير الحضانة:
1. مصلحة الطفل الفضلى: هي الأساس في كل قرار.
2. القدرة على الرعاية والتربية: الحاضن يجب أن يكون قادراً على رعاية الطفل.
3. الصفات الأخلاقية: الحاضن يجب أن يتمتع بسلوك حسن.
4. الاستقرار المادي: توفير الاحتياجات الأساسية.

حقوق الوالدين:
1. حق الزيارة: للوالد الغير حاضن الحق في زيارة الطفل.
2. حق النفقة: الالتزام بأعباء مالية لرعاية الطفل.
3. حق الخصومة: الحق في المطالبة بتعديل قرار الحضانة.

الترتيبات العملية:
1. تحديد مواعيد الزيارة.
2. تحديد مقدار النفقة.
3. تقسيم المسؤوليات بين الوالدين.

من المهم وضع اتفاقيات واضحة لحماية مصلحة الطفل.`,
      en: `Guardianship of children is a sensitive issue in family law and is regulated by special laws to protect the child's best interests.

Custody standards:
1. Child's best interest: It is the basis for every decision.
2. Ability to care and educate: The guardian must be able to care for the child.
3. Moral qualities: The guardian must have good conduct.
4. Financial stability: Provision of basic needs.

Parental rights:
1. Right to visit: The non-custodial parent has the right to visit the child.
2. Right to maintenance: Financial obligation to care for the child.
3. Right to claim: The right to request a modification to the custody order.

Practical arrangements:
1. Determining visit schedules.
2. Determining maintenance amounts.
3. Dividing responsibilities between parents.

It is important to establish clear agreements to protect the child's best interests.`
    }
  },
  '9': {
    id: 9,
    title: { ar: 'الميراث والوصية في الشريعة الإسلامية', en: 'Inheritance and Wills in Islamic Law' },
    category: { ar: 'قانون الأسرة', en: 'Family Law' },
    date: '2024-03-11',
    image: '/18.jpg',
    readTime: { ar: '9 دقائق', en: '9 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `الميراث والوصية مسائل مهمة في القانون الأسري تنظمها الشريعة الإسلامية والقوانين المصرية.

نظام الوراثة:
1. الوريث: هو من له حق في التركة بموجب الشرع والقانون.
2. التركة: أموال وممتلكات المتوفى.
3. أنصباء الوراثة: توزيع محددة لكل وارث حسب درجة القرابة.

أنواع الورثة:
1. الورثة من الذكور: الأب والابن والأخ.
2. الورثة من الإناث: الأم والابنة والأخت.
3. ذوو الأرحام: الأقارب من جهة الأم.

الوصية:
1. تعريفها: هبة موهوبة بصيغة تنفذ بعد وفاة الموصي.
2. شروطها: يجب أن تكون في حدود الثلث ولا تضر بحقوق الورثة.
3. صيغتها: يجب أن تكون بصيغة صحيحة وشهود.

من المهم التعامل مع هذه المسائل بعناية واستشارة محام متخصص.`,
      en: `Inheritance and wills are important issues in family law that are regulated by Islamic law and Egyptian laws.

Inheritance system:
1. Heir: One who has a right in the inheritance by virtue of law.
2. Estate: The property and possessions of the deceased.
3. Shares of inheritance: Distribution specific to each heir according to degree of relationship.

Types of heirs:
1. Male heirs: Father, son, and brother.
2. Female heirs: Mother, daughter, and sister.
3. Distant relatives: Relatives through the mother.

Wills:
1. Definition: A gift given by the testator executed after his death.
2. Conditions: Must be limited to one-third and not harm the rights of heirs.
3. Form: Must be in correct form with witnesses.

It is important to deal with these matters carefully and consult with a specialized lawyer.`
    }
  },
  '10': {
    id: 10,
    title: { ar: 'حقوق الموظف وواجباته', en: 'Employee Rights and Duties' },
    category: { ar: 'قانون العمل', en: 'Labor Law' },
    date: '2024-03-09',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    readTime: { ar: '7 دقائق', en: '7 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `العامل له حقوق وعليه واجبات تنظمها قوانين العمل المصري لضمان حماية العامل وحقوقه.

حقوق الموظف:
1. الراتب والأجر المنصف.
2. ساعات عمل محددة لا تزيد عن 8 ساعات يومياً.
3. إجازات سنوية.
4. مكافآت والعلاوات.
5. التأمين الاجتماعي والصحي.
6. بيئة عمل آمنة وصحية.

واجبات الموظف:
1. الالتزام بساعات العمل المحددة.
2. تنفيذ العمل بكفاءة واخلاص.
3. احترام لوائح المؤسسة.
4. الحفاظ على سرية الشركة.
5. الاحترام المتبادل مع الزملاء والإدارة.

الحماية القانونية:
- قانون العمل المصري رقم 12 لسنة 2003.
- حماية من الفصل التعسفي.
- المساواة في الحقوق والراتب.

من المهم معرفة حقوقك والدفاع عنها.`,
      en: `An employee has rights and duties that are regulated by Egyptian labor laws to ensure employee protection and rights.

Employee rights:
1. Fair salary and wages.
2. Specified working hours not exceeding 8 hours per day.
3. Paid annual leave.
4. Bonuses and allowances.
5. Social and health insurance.
6. Safe and healthy working environment.

Employee duties:
1. Compliance with specified working hours.
2. Perform work with efficiency and dedication.
3. Respect for institutional regulations.
4. Maintain company confidentiality.
5. Mutual respect with colleagues and management.

Legal protection:
- Egyptian Labor Law No. 12 of 2003.
- Protection from wrongful termination.
- Equality in rights and salaries.

It is important to know your rights and defend them.`
    }
  },
  '11': {
    id: 11,
    title: { ar: 'الإنهاء والاستقالة من العمل', en: 'Termination and Resignation' },
    category: { ar: 'قانون العمل', en: 'Labor Law' },
    date: '2024-03-07',
    image: '/19.jpg',
    readTime: { ar: '6 دقائق', en: '6 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `إنهاء العقد واستقالة الموظف هي عمليات قانونية تخضع لنصوص قانون العمل المصري.

أنواع الإنهاء:
1. الفصل من قبل المؤسسة: لأسباب تأديبية أو اقتصادية.
2. الاستقالة: قرار من الموظف بترك العمل.
3. الفصل التعسفي: فصل بدون سبب قانوني.

قواعد الإنهاء:
1. إشعار مسبق: عادة 30 يوماً قبل الإنهاء.
2. تحويل المستحقات: دفع ما يستحقه الموظف.
3. شهادة العمل: تقديم شهادة رسمية.
4. تسوية الحسابات: حساب جميع المستحقات المالية.

حقوق الموظف عند الإنهاء:
1. الراتب والعلاوات المستحقة.
2. مكافأة نهاية الخدمة.
3. تعويض عن البطالة (في حالات معينة).
4. إعادة النظر في قرار الفصل أمام المحاكم.

من المهم معرفة حقوقك وعدم قبول أي إجراء تعسفي.`,
      en: `Contract termination and employee resignation are legal processes governed by the Egyptian Labor Law.

Types of termination:
1. Termination by the institution: For disciplinary or economic reasons.
2. Resignation: Employee's decision to leave work.
3. Wrongful termination: Dismissal without legal grounds.

Termination rules:
1. Prior notice: Usually 30 days before termination.
2. Transfer of benefits: Payment of due employee compensation.
3. Work certificate: Provision of official certificate.
4. Settlement of accounts: Calculation of all financial benefits.

Employee rights upon termination:
1. Due salary and allowances.
2. End of service bonus.
3. Unemployment compensation (in certain cases).
4. Review of dismissal decision before courts.

It is important to know your rights and not accept any arbitrary action.`
    }
  },
  '12': {
    id: 12,
    title: { ar: 'التأمين الاجتماعي والمعاشات', en: 'Social Insurance and Pensions' },
    category: { ar: 'قانون العمل', en: 'Labor Law' },
    date: '2024-03-06',
    image: '/20.png',
    readTime: { ar: '7 دقائق', en: '7 min' },
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `التأمين الاجتماعي والمعاشات هي من أهم فوائد العمل وتوفر حماية مالية للموظف وأسرته.

أنواع التأمين الاجتماعي:
1. تأمين الشيخوخة: معاش عند بلوغ سن التقاعد.
2. تأمين الإنهاء والفصل: معاش في حالة فقدان العمل.
3. تأمين العجز: معاش في حالة عدم القدرة على العمل.
4. تأمين الأسرة: حماية للعائلة بعد وفاة المؤمن عليه.

حساب المعاش:
1. متوسط الراتب: يحسب على أساس آخر سنوات العمل.
2. سنوات الخدمة: عدد سنوات العمل لدى الدولة أو المؤسسة.
3. نسبة الاستحقاق: نسبة الراتب الذي يستحقه المتقاعد.

الفوائد الإضافية:
1. الرعاية الصحية.
2. المساعدات النقدية.
3. المساعدات الاجتماعية.

من المهم فهم نظام التأمين الاجتماعي والحصول على أقصى استفادة منه.`,
      en: `Social insurance and pensions are among the most important employment benefits and provide financial protection for employees and their families.

Types of social insurance:
1. Old-age insurance: Pension upon reaching retirement age.
2. Unemployment insurance: Pension in case of job loss.
3. Disability insurance: Pension in case of inability to work.
4. Family insurance: Protection for family after death of insured.

Pension calculation:
1. Average salary: Calculated based on last years of employment.
2. Years of service: Number of years of work with government or institution.
3. Entitlement rate: Percentage of salary the retiree is entitled to.

Additional benefits:
1. Health care.
2. Cash assistance.
3. Social assistance.

It is important to understand the social insurance system and get the most benefit from it.`
    }
  },
};

export default function ArticleDetail({ lang }: { lang: Language }) {
  const params = useParams();
  const articleIdParam = params?.articleId;
  const articleId = Array.isArray(articleIdParam) ? articleIdParam[0] : articleIdParam;
  const article = articleId ? ARTICLES_DATA[articleId as keyof typeof ARTICLES_DATA] : null;

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-primary">{lang === 'ar' ? 'المقال غير موجود' : 'Article not found'}</h2>
        <Link href="/articles" className="text-accent mt-4 inline-block">{lang === 'ar' ? 'العودة للمقالات' : 'Back to Articles'}</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link href="/articles" className="text-accent font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
          {lang === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {lang === 'ar' ? 'العودة للمقالات' : 'Back to Articles'}
        </Link>
      </div>

      <section className="section-padding w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Header Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden shadow-xl mb-12 h-96"
          >
            <img 
              src={article.image} 
              alt={article.title[lang]} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
              {article.category[lang]}
            </div>
            <h1 className="text-4xl font-bold text-primary mb-6 leading-tight">
              {article.title[lang]}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap gap-6 text-gray-600 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>{new Date(article.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>{article.readTime[lang]}</span>
              </div>
              <div>
                {article.author[lang]}
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
              {article.content[lang]}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-accent/10 rounded-3xl border-2 border-accent/20"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              {lang === 'ar' ? 'هل تحتاج إلى استشارة قانونية؟' : 'Need Legal Advice?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {lang === 'ar' ? 'فريقنا من المحامين المتخصصين جاهزون لمساعدتك. تواصل معنا اليوم.' : 'Our team of specialized lawyers is ready to help you. Contact us today.'}
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all"
            >
              {lang === 'ar' ? 'اطلب استشارة' : 'Request Consultation'}
            </Link>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              {lang === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
            </h3>
            <Link 
              href="/articles"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
            >
              {lang === 'ar' ? 'عرض جميع المقالات' : 'View All Articles'}
              {lang === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
