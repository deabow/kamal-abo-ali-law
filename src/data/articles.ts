// =============================================================
// SINGLE SOURCE OF TRUTH — All article data lives here.
// Update the image, title, content etc. in ONE place and it
// automatically reflects on BOTH the listing card AND the
// detail page. No more sync issues.
// =============================================================

export interface ArticleContent {
  ar: string;
  en: string;
}

export interface Article {
  id: number;
  title: ArticleContent;
  summary?: ArticleContent;
  category: ArticleContent;
  categoryId: string;
  date: string;
  // ✏️ IMAGE PATH — update here to change it everywhere at once.
  // Use a local path like '/articles/my-image.jpg'
  // (place the file inside the /public/articles/ folder)
  // or a full Unsplash URL.
  image: string;
  author: ArticleContent;
  content: ArticleContent;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: {
      ar: 'وداعاً لتشابه الأسماء: أهم تعديلات قانون الإجراءات الجنائية الجديد 2026',
      en: 'Farewell to Name Confusion: Key Amendments to the New Criminal Procedure Law 2026'
    },
    summary: {
      ar: 'تعرف على تفاصيل المادة 27 من قانون الإجراءات الجنائية الجديد، وكيف يحميك إثبات الرقم القومي من أخطاء الأحكام الغيابية وتشابه الأسماء.',
      en: 'Learn about Article 27 of the new Criminal Procedure Law, and how mandatory National ID verification protects you from wrongful default judgments caused by name similarity.'
    },
    category: { ar: 'توعية قانونية', en: 'Legal Awareness' },
    categoryId: 'awareness',
    date: '2026-05-07',
    image: '/articles/تشابه الاسماء.png?v=1', // ✏️ Update image path here
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `اعتباراً من العام القضائي الجديد في أول أكتوبر 2026، وضعت الدولة حداً لمشكلة تؤرق الكثيرين وهي "تشابه الأسماء". وفقاً للمادة 27 من قانون الإجراءات الجنائية الجديد، أصبح لزاماً على مأموري الضبط القضائي إثبات بيانات الرقم القومي للمتهم فور تحديد هويته، مع إرفاق مستخرج رسمي بهذه البيانات في المحضر.

هذا التعديل يضمن أن تتضمن أحكام الإدانة كافة البيانات الشخصية الدقيقة للمحكوم عليه، مما يمنع حدوث أي لبس أو أخطاء قضائية ناتجة عن تشابه الأسماء، ويحمي المواطنين من الأحكام الغيابية غير الدقيقة.

في مؤسسة كمال أبو علي، نهتم دائماً باطلاعكم على أحدث المستجدات التشريعية التي تضمن حماية حقوقكم.`,
      en: `Starting from the new judicial year on October 1, 2026, the state has put an end to a problem that has troubled many citizens: "name similarity." According to Article 27 of the new Criminal Procedure Law, judicial police officers are now required to record the defendant's National ID data immediately upon identification, and attach an official extract of this data to the official report.

This amendment ensures that conviction rulings contain all precise personal details of the convicted person, preventing any confusion or judicial errors arising from name similarity, and protecting citizens from inaccurate default judgments.

At Kamal Abu Ali Law Firm, we are always committed to keeping you informed of the latest legislative developments that guarantee the protection of your rights.`
    }
  },
  {
    id: 2,
    title: {
      ar: 'دليل تأسيس الشركات العقارية: كيف تبدأ استثمارك على أساس قانوني سليم؟',
      en: 'Real Estate Company Formation Guide: How to Start Your Investment on a Solid Legal Foundation?'
    },
    summary: {
      ar: 'الخطوة الأولى لنجاح أي شركة عقارية هي التأسيس القانوني الصحيح. نوضح لك خارطة الطريق لإنهاء التراخيص، الملفات الضريبية، وصياغة العقود باحترافية.',
      en: 'The first step to success for any real estate company is correct legal formation. We show you the roadmap to completing licenses, tax files, and drafting contracts professionally.'
    },
    category: { ar: 'شركات', en: 'Companies' },
    categoryId: 'companies',
    date: '2026-05-07',
    image: '/articles/اسس شركتك صح.png?v=1', // ✏️ Update image path here
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `النجاح في السوق العقاري يبدأ من "التأسيس الصح". في مؤسسة كمال أبو علي، نقدم دعماً استشارياً متكاملاً للمستثمرين لضمان انطلاقة قوية وقانونية لشركاتهم. تشمل خدماتنا في هذا القطاع:

إجراءات التأسيس القانوني الكاملة للشركة.

استخراج وإنهاء جميع التراخيص اللازمة لمزاولة النشاط.

فتح الملفات التأمينية والضريبية وضمان الامتثال للقوانين.

صياغة وتوثيق كافة العقود والاتفاقات القانونية التي تحمي حقوق الشركة.

إذا كنت تطمح لأن تصبح شركتك علامة تجارية قوية في السوق، فالسر يكمن في البداية الصحيحة والمظلة القانونية التي تحمي استثماراتك من اليوم الأول.`,
      en: `Success in the real estate market begins with "getting it right from the start." At Kamal Abu Ali Law Firm, we provide comprehensive advisory support to investors to ensure a strong, legally sound launch for their companies. Our services in this sector include:

Complete legal formation procedures for the company.

Obtaining and finalizing all necessary licenses to operate.

Opening insurance and tax files and ensuring full legal compliance.

Drafting and documenting all contracts and legal agreements that protect the company's rights.

If you aspire to make your company a powerful brand in the market, the secret lies in a correct start and the legal umbrella that protects your investments from day one.`
    }
  },
  {
    id: 3,
    title: {
      ar: 'احذر العقوبات! دليل الجرائم الإلكترونية في القانون المصري',
      en: 'Beware the Penalties! A Guide to Cybercrime in Egyptian Law'
    },
    summary: {
      ar: 'الجرائم الإلكترونية لم تعد مجرد مشاكل عابرة على السوشيال ميديا. تعرف على عقوبات الاختراق، النصب الإلكتروني، وانتهاك الخصوصية وفقاً لأحدث القوانين.',
      en: 'Cybercrimes are no longer minor social media issues. Learn about the penalties for hacking, electronic fraud, and privacy violations under the latest Egyptian laws.'
    },
    category: { ar: 'التكنولوجيا والأمن السيبراني', en: 'Technology & Cybersecurity' },
    categoryId: 'technology-and-cybersecurity',
    date: '2026-05-07',
    image: '/articles/hack.png?v=1', // ✏️ Update image path here — file: public/articles/hack.png
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `في ظل التحول الرقمي السريع، وضع القانون المصري لمكافحة جرائم تقنية المعلومات عقوبات صارمة لضمان أمن المعلومات وحماية الخصوصية. لم تعد أفعال مثل اختراق الحسابات أو النصب الإلكتروني مجرد مخالفات، بل أصبحت جرائم يعاقب عليها القانون بالحبس والغرامة.

تشمل العقوبات الصارمة ما يلي:

اختراق الحسابات الشخصية أو البريد الإلكتروني.

النصب الإلكتروني وسرقة البيانات البنكية أو الشخصية.

التشهير ونشر الصور والبيانات الشخصية بدون إذن مسبق.

إذا تعرضت لأي نوع من أنواع الابتزاز أو النصب الإلكتروني، فإن التحرك القانوني السريع والدقيق هو وسيلتك الوحيدة لاستعادة حقوقك وحماية نفسك.`,
      en: `Amid the rapid digital transformation, Egyptian law on combating information technology crimes has established strict penalties to ensure information security and protect privacy. Acts such as account hacking or online fraud are no longer mere violations — they have become crimes punishable by law with imprisonment and fines.

Strict penalties include:

Hacking into personal accounts or email.

Electronic fraud and theft of banking or personal data.

Defamation and sharing personal photos or data without prior consent.

If you are subjected to any form of blackmail or online fraud, swift and precise legal action is your only means of reclaiming your rights and protecting yourself.`
    }
  },
  {
    id: 4,
    title: {
      ar: 'تحذير قانوني: مخاطر التوقيع على بياض وكيف تحمي نفسك؟',
      en: 'Legal Warning: The Risks of Signing a Blank Document and How to Protect Yourself'
    },
    summary: {
      ar: 'التوقيع على ورقة بيضاء قد يكلفك حياتك المهنية والمالية. اكتشف كيف يتم استغلال هذه الأوراق قانونياً وكيف تحمي نفسك من الوقوع في فخ العقود المزيفة.',
      en: 'Signing a blank document could cost you your professional and financial life. Discover how these papers are exploited legally and how to protect yourself from falling into the trap of forged contracts.'
    },
    category: { ar: 'توعية قانونية', en: 'Legal Awareness' },
    categoryId: 'awareness',
    date: '2026-05-07',
    image: '/articles/ورقة بيضاء.png?v=1', // ✏️ Update image path here — file: public/articles/ورقة بيضاء.png
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `يعد التوقيع على ورقة "على بياض" من أخطر التصرفات التي قد يقوم بها الشخص، حيث يمكن تحويل هذه الورقة بسهولة إلى إيصال أمانة، عقد بيع، أو دين مزيف يضعك تحت طائلة القانون.

لضمان حماية نفسك وحقوقك، نوصيك دائماً باتباع القواعد التالية:

الامتناع التام عن التوقيع أو البصم على أي ورقة فارغة مهما كانت الظروف.

كتابة الغرض من التوقيع أو كتابة صلب الموضوع بخط يدك قبل التوقيع.

الحرص على الاحتفاظ بصورة ضوئية أو نسخة موثقة من أي مستند تقوم بتوقيعه.

تذكر دائماً أن الوقاية القانونية خير من الدخول في نزاعات قضائية معقدة. في مؤسسة كمال أبو علي، نحن هنا لنقدم لك المشورة التي تحميك قبل فوات الأوان.`,
      en: `Signing a blank document is one of the most dangerous actions a person can take. Such a document can easily be converted into a trust receipt, a sales contract, or a fabricated debt that puts you at legal risk.

To ensure the protection of yourself and your rights, we always advise following these rules:

Completely refrain from signing or stamping any blank paper under any circumstances.

Write the purpose of the signature or the subject matter in your own handwriting before signing.

Always keep a photocopy or certified copy of any document you sign.

Always remember that legal prevention is better than entering into complex legal disputes. At Kamal Abu Ali Law Firm, we are here to provide you with the advice that protects you before it is too late.`
    }
  },
  {
    id: 5,
    title: {
      ar: 'إيصال الأمانة أم الشيك البنكي؟ دليل الفروقات القانونية وأيهما أضمن لحقك',
      en: 'Promissory Note or Bank Check? A Legal Comparison Guide and Which Better Protects Your Rights'
    },
    summary: {
      ar: 'أيهما أخطر قانونياً؟ تعرف على الفروقات الجوهرية بين إيصال الأمانة والشيك البنكي من حيث العقوبة، عدد الأطراف، وسهولة الإثبات في المحاكم المصرية.',
      en: 'Which is more legally risky? Learn the key differences between a promissory note and a bank check in terms of penalty, number of parties, and ease of proof in Egyptian courts.'
    },
    category: { ar: 'توعية قانونية', en: 'Legal Awareness' },
    categoryId: 'awareness',
    date: '2026-05-07',
    image: '/articles/شيك.png?v=1', // ✏️ Update image path here — file: public/articles/شيك.png
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `يقع الكثير من المواطنين في حيرة عند توثيق ديونهم أو معاملاتهم المالية: هل الأفضل استخدام إيصال الأمانة أم الشيك البنكي؟ إليك الفروق الجوهرية التي يجب أن تعرفها:

1. الشكل القانوني: إيصال الأمانة يمكن تحريره يدوياً، بينما الشيك يجب أن يكون من دفتر بنكي رسمي.
2. عدد الأطراف: إيصال الأمانة يضم 3 أطراف لضمان ركن التسليم، بينما الشيك يضم طرفين (الساحب والمستفيد).
3. التوصيف الجنائي: إيصال الأمانة تهمته "خيانة أمانة"، بينما الشيك تهمته "إصدار شيك بدون رصيد".
4. قوة الإثبات: الشيك البنكي أسرع في الإجراءات بمجرد الحصول على رفض من البنك، بينما قد يتطلب إيصال الأمانة إثبات واقعة التسليم والتبديد.

نصيحة مؤسسة كمال أبو علي: كلا الطرفين عقوبتهما الحبس، ولكن الشيك البنكي يظل الأقوى مالياً والأسرع قانونياً في استرداد الحقوق.`,
      en: `Many citizens find themselves confused when documenting debts or financial transactions: is it better to use a promissory note or a bank check? Here are the key differences you need to know:

1. Legal Form: A promissory note can be written by hand, while a check must come from an official bank booklet.
2. Number of Parties: A promissory note involves 3 parties to establish the delivery element, while a check involves 2 parties (the drawer and the beneficiary).
3. Criminal Classification: A promissory note carries the charge of "breach of trust," while a check carries the charge of "issuing a check without sufficient funds."
4. Strength of Proof: A bank check is faster procedurally once a bank rejection is obtained, while a promissory note may require proving the facts of delivery and misappropriation.

Advice from Kamal Abu Ali Law Firm: Both carry penalties of imprisonment, but a bank check remains the stronger financial instrument and the faster legal route to recovering your rights.`
    }
  },
  {
    id: 6,
    title: {
      ar: 'الفرق بين الخلع والطلاق للضرر',
      en: 'The Difference Between Khula and Divorce for Harm'
    },
    summary: {
      ar: 'كتير من الزوجات مش عارفين الفرق بين الخلع والطلاق للضرر. تعرفي على الفروق القانونية بينهم من حيث الحقوق المالية وإثبات الضرر وسرعة الإجراءات.',
      en: 'Many wives are unaware of the difference between Khula and divorce for harm. Learn the legal differences regarding financial rights, proving harm, and procedural speed.'
    },
    category: { ar: 'أحوال شخصية', en: 'Personal Status' },
    categoryId: 'personal-status',
    date: '2026-05-07',
    image: '/articles/طلاق.png?v=1',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `الفرق بين الخلع والطلاق للضرر ؟
كتير من الزوجات مش عارفين الفرق بين الخلع والطلاق للضرر 👇

💡 الفرق بينهم ببساطة:

✅ الخلع:
- الزوجة بتتنازل عن حقوقها المالية (المؤخر، المتعة، العدة).
- لازم ترد المهر اللي استلمته.
- مش محتاج إثبات ضرر.
- المحكمة بتحكم حتى لو الزوج رافض.

✅ الطلاق للضرر:
- الزوجة بتحافظ على حقوقها المالية.
- لازم تثبت إن فيه ضرر (زي ضرب، إهانة، خيانة، عدم إنفاق…).
- ممكن القاضي يرفض الطلب لو مفيش إثباتات قوية.
- القضايا بتاخد وقت أطول.

🎯 يعني لو الحياة فعلاً ما بقتش ممكنة، ومش قادرة تثبتي الضرر… الخلع بيكون أسرع وأسهل.`,
      en: `The Difference Between Khula and Divorce for Harm?
Many wives are unaware of the difference between Khula and divorce for harm 👇

💡 Here is the difference simply:

✅ Khula:
- The wife waives her financial rights (deferred dowry, alimony, waiting period alimony).
- She must return the dowry she received.
- Does not require proving harm.
- The court rules even if the husband refuses.

✅ Divorce for Harm:
- The wife maintains her financial rights.
- She must prove that there is harm (such as beating, insult, betrayal, non-payment of maintenance...).
- The judge may reject the request if there is no strong evidence.
- Cases take longer.

🎯 Meaning, if life really is no longer possible, and you cannot prove the harm... Khula is faster and easier.`
    }
  },
  {
    id: 7,
    title: {
      ar: 'الامتثال القانوني للشركات: كيف تحمي كيانك التجاري من المخاطر الضريبية والقضائية؟',
      en: 'Corporate Legal Compliance: How to Protect Your Commercial Entity from Tax and Judicial Risks?'
    },
    summary: {
      ar: 'هل شركتك ملتزمة قانونياً؟ اكتشف أهمية المراجعة الدورية لعقود الشراكة، السجلات التجارية، واللوائح الضريبية لتجنب الثغرات التي قد تهدد استقرار شركتك.',
      en: 'Is your company legally compliant? Discover the importance of periodic review of partnership contracts, commercial registers, and tax regulations to avoid loopholes that may threaten your company\'s stability.'
    },
    category: { ar: 'شركات', en: 'Companies' },
    categoryId: 'companies',
    date: '2026-05-07',
    image: '/articles/حماية الشركة.png?v=1',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: `تواجه الكثير من الشركات تحديات قانونية كبرى نتيجة لثغرات بسيطة في عقود الشراكة أو تأخير في تحديث السجلات التجارية والامتثال للوائح الضريبية والتأمينية. في مؤسسة كمال أبو علي، نؤمن أن الوقاية القانونية هي أساس استدامة الأعمال.

يوفر قسم الشركات لدينا منظومة متكاملة تشمل:

- المراجعة القانونية الدورية لكافة عقود وتصرفات الشركة.
- تحديث وتسجيل كافة التعديلات في السجل التجاري والجهات المختصة.
- تقديم استشارات استباقية لمعالجة أي مخالفات قبل تحولها لنيزاعات قضائية مكلفة.

الحفاظ على كيانك القانوني هو استثمار في مستقبلك، ونحن هنا لنضمن لك إدارة آمنة ومستقرة لشركتك.`,
      en: `Many companies face major legal challenges as a result of simple loopholes in partnership contracts or delays in updating commercial records and complying with tax and insurance regulations. At Kamal Abu Ali Law Firm, we believe that legal prevention is the foundation of business sustainability.

Our corporate department provides an integrated system that includes:

- Periodic legal review of all company contracts and actions.
- Updating and registering all amendments in the commercial register and competent authorities.
- Providing proactive consultations to address any violations before they turn into costly judicial disputes.

Maintaining your legal entity is an investment in your future, and we are here to ensure safe and stable management for your company.`
    }
  },
  {
    id: 8,
    title: {
      ar: 'دور حوكمة الشركات في حماية المستثمرين وضمان استدامة الأعمال',
      en: 'The Role of Corporate Governance in Protecting Investors and Ensuring Business Sustainability'
    },
    summary: {
      ar: 'تعرف على كيف تمثل حوكمة الشركات الدرع الواقي لحماية استثماراتك وضمان استقرار الكيانات التجارية في السوق.',
      en: 'Learn how corporate governance acts as a protective shield for your investments and ensures the stability of commercial entities in the market.'
    },
    category: { ar: 'شركات', en: 'Companies' },
    categoryId: 'companies',
    date: '2026-05-15',
    image: '/articles/common-mistakes.jpeg',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: 'تعتبر حوكمة الشركات من أهم الركائز التي تعتمد عليها الكيانات الاقتصادية الحديثة لضمان الشفافية والمساءلة. في مؤسسة كمال أبو علي، نؤكد دائماً أن إرساء قواعد الحوكمة ليس مجرد إجراء روتيني، بل هو استثمار استراتيجي يحمي الشركة من التخبط الإداري والمخاطر القانونية. تشمل الحوكمة تنظيم العلاقة بين مجلس الإدارة والمساهمين وأصحاب المصلحة، مما يعزز الثقة ويجذب المزيد من الاستثمارات. نحن نقدم استشارات دقيقة لهيكلة الشركات بما يتوافق مع أحدث التشريعات لضمان استدامتها ونموها.',
      en: 'Corporate governance is considered one of the most important pillars upon which modern economic entities rely to ensure transparency and accountability. At Kamal Abu Ali Law Firm, we always emphasize that establishing governance rules is not merely a routine procedure, but a strategic investment that protects the company from administrative confusion and legal risks. Governance includes regulating the relationship between the board of directors, shareholders, and stakeholders, which enhances trust and attracts more investments. We provide precise consultations for restructuring companies in accordance with the latest legislation to ensure their sustainability and growth.'
    }
  },
  {
    id: 9,
    title: {
      ar: 'الامتثال القانوني: خط الدفاع الأول للشركات ضد المخاطر والغرامات',
      en: 'Legal Compliance: The First Line of Defense for Companies Against Risks and Fines'
    },
    summary: {
      ar: 'دليلك الشامل لفهم أهمية الامتثال للوائح والقوانين لتجنب النزاعات القضائية التي قد تعصف بالشركات.',
      en: 'Your comprehensive guide to understanding the importance of compliance with regulations and laws to avoid judicial disputes that could devastate companies.'
    },
    category: { ar: 'شركات', en: 'Companies' },
    categoryId: 'companies',
    date: '2026-05-15',
    image: '/articles/شركات.jpg',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: 'الامتثال القانوني (Compliance) هو التزام الشركة بكافة الأنظمة واللوائح الصادرة عن الجهات الرقابية. إن غياب إدارة فاعلة للامتثال يعرض الشركات لغرامات طائلة ومنازعات قد تصل إلى إيقاف النشاط. من خلال خبرتنا في مؤسسة كمال أبو علي، نعمل على المراجعة الدورية للعقود، وسياسات العمل، واللوائح الداخلية للشركات للتأكد من مطابقتها التامة للقانون، مما يوفر بيئة عمل آمنة ويجنب الإدارة العليا أي مساءلة قانونية مفاجئة.',
      en: 'Legal Compliance is the company’s adherence to all regulations and laws issued by regulatory authorities. The absence of effective compliance management exposes companies to heavy fines and disputes that may reach the suspension of activities. Through our expertise at Kamal Abu Ali Law Firm, we conduct periodic reviews of contracts, work policies, and internal company regulations to ensure their full compliance with the law, providing a safe work environment and avoiding any sudden legal accountability for senior management.'
    }
  },
  {
    id: 10,
    title: {
      ar: 'الأخطاء الشائعة في صياغة العقود التجارية وكيفية تجنبها',
      en: 'Common Mistakes in Drafting Commercial Contracts and How to Avoid Them'
    },
    summary: {
      ar: 'كيف تحمي حقوق شركتك من خلال صياغة عقود تجارية محكمة خالية من الثغرات القانونية.',
      en: 'How to protect your company\'s rights by drafting tight commercial contracts free of legal loopholes.'
    },
    category: { ar: 'شركات', en: 'Companies' },
    categoryId: 'companies',
    date: '2026-05-15',
    image: '/articles/شركات2.jpg',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: 'العقد هو شريعة المتعاقدين، وأي ثغرة بسيطة في صياغته قد تؤدي إلى خسائر فادحة ونزاعات تجارية معقدة. الكثير من الشركات تقع في فخ استخدام النماذج الجاهزة للعقود دون تكييفها مع طبيعة الصفقة. نحن في مؤسستنا نولي اهتماماً بالغاً بصياغة ومراجعة العقود التجارية والمدنية بدقة متناهية، مع وضع شروط جزائية واضحة وآليات حاسمة لفض المنازعات، لضمان سير الأعمال بسلاسة وحفظ حقوق موكلينا بشكل قاطع.',
      en: 'The contract is the law of the contracting parties, and any minor loophole in its drafting can lead to heavy losses and complex commercial disputes. Many companies fall into the trap of using ready-made contract templates without adapting them to the nature of the transaction. At our firm, we pay great attention to drafting and reviewing commercial and civil contracts with utmost precision, setting clear penal clauses and decisive dispute resolution mechanisms, to ensure smooth business operations and conclusively preserve our clients\' rights.'
    }
  },
  {
    id: 11,
    title: {
      ar: 'المسؤولية القانونية للشركات في حماية البيانات ومواجهة الاختراقات السيبرانية',
      en: 'Corporate Legal Responsibility in Data Protection and Facing Cyber Breaches'
    },
    summary: {
      ar: 'كيف يفرض القانون عقوبات صارمة على الشركات التي تهمل حماية بيانات عملائها، وكيف تحمي مؤسستك قانونياً.',
      en: 'How the law imposes strict penalties on companies that neglect to protect their clients\' data, and how to legally protect your organization.'
    },
    category: { ar: 'التكنولوجيا والأمن السيبراني', en: 'Technology & Cybersecurity' },
    categoryId: 'technology-and-cybersecurity',
    date: '2026-05-16',
    image: '/cyber1.jpg',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: 'مع التحول الرقمي الشامل، أصبحت بيانات العملاء هي الأصول الأكثر قيمة والأكثر استهدافاً. إن وقوع أي اختراق سيبراني أو تسريب للبيانات لا يمثل مجرد أزمة تقنية، بل هو كارثة قانونية قد تعرض الشركة لملاحقات قضائية وغرامات مالية ضخمة بموجب قوانين حماية البيانات الشخصية. في مؤسسة كمال أبو علي، نساعد الشركات على بناء أطر قانونية متكاملة وإعداد سياسات خصوصية صارمة تتوافق مع التشريعات المحلية والدولية، لضمان حماية الإدارة من المسؤولية الجنائية والمدنية في حال حدوث أي هجوم سيبراني.',
      en: 'With comprehensive digital transformation, customer data has become the most valuable and targeted asset. A cyber breach or data leak is not just a technical crisis; it is a legal disaster that can expose a company to prosecution and massive financial fines under personal data protection laws. At Kamal Abu Ali Law Firm, we help companies build integrated legal frameworks and draft strict privacy policies that comply with local and international legislation, ensuring the protection of management from criminal and civil liability in the event of any cyber attack.'
    }
  },
  {
    id: 12,
    title: {
      ar: 'مكافحة الجرائم الإلكترونية: كيف يحميك القانون من الابتزاز والاحتيال الرقمي؟',
      en: 'Combating Cybercrime: How the Law Protects You from Digital Extortion and Fraud?'
    },
    summary: {
      ar: 'دليلك القانوني للتعامل مع التهديدات الرقمية، والخطوات الصحيحة لإثبات الجريمة الإلكترونية أمام جهات التحقيق.',
      en: 'Your legal guide to dealing with digital threats, and the correct steps to prove cybercrimes before investigating authorities.'
    },
    category: { ar: 'التكنولوجيا والأمن السيبراني', en: 'Technology & Cybersecurity' },
    categoryId: 'technology-and-cybersecurity',
    date: '2026-05-16',
    image: '/cyber2.jpg',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: 'تتطور الجرائم الإلكترونية بشكل متسارع، لتشمل الابتزاز الرقمي، اختراق الحسابات، النصب الإلكتروني، وسرقة الهوية الرقمية. الكثير من الضحايا يقعون في فخ عدم معرفة التصرف القانوني الصحيح، مما يضيع حقوقهم. نحن في مؤسستنا نمتلك فريقاً متخصصاً في تكييف الجرائم المعلوماتية قانونياً، وندعم موكلينا في جمع الأدلة الرقمية المعتمدة وتجهيز المحاضر أمام مباحث الإنترنت والجهات القضائية لضمان الملاحقة السريعة للجناة واسترداد الحقوق كاملة وبسرية تامة.',
      en: 'Cybercrimes are evolving rapidly, encompassing digital extortion, account hacking, electronic fraud, and digital identity theft. Many victims fall into the trap of not knowing the correct legal action, which loses their rights. At our firm, we have a specialized team in legally qualifying information crimes, and we support our clients in collecting certified digital evidence and preparing official reports before the internet police and judicial authorities to ensure the swift prosecution of perpetrators and the full recovery of rights in complete confidentiality.'
    }
  },
  {
    id: 13,
    title: {
      ar: 'الأدلة الرقمية أمام القضاء: حجيتها وكيفية التعامل معها في المحاكم',
      en: 'Digital Evidence Before the Judiciary: Its Authority and How to Handle It in Courts'
    },
    summary: {
      ar: 'هل تكفي رسالة "واتساب" أو بريد إلكتروني لإدانة أو تبرئة متهم؟ تعرف على الشروط القانونية لاعتماد الدليل الرقمي.',
      en: 'Is a "WhatsApp" message or an email enough to convict or acquit a defendant? Learn the legal conditions for adopting digital evidence.'
    },
    category: { ar: 'التكنولوجيا والأمن السيبراني', en: 'Technology & Cybersecurity' },
    categoryId: 'technology-and-cybersecurity',
    date: '2026-05-16',
    image: '/articles/d',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: 'لم يعد الدليل الجنائي مقتصراً على الأوراق والشهود، بل أصبحت الأدلة الرقمية المستخرجة من الهواتف، الحواسيب، والشبكات تلعب دوراً حاسماً في الفصل في القضايا الجنائية والتجارية. ومع ذلك، فإن القانون يفرض شروطاً صارمة لاعتبار الدليل الرقمي حجة قانونية، مثل مشروعية الحصول عليه وعدم العبث بمحتواه (Chain of Custody). نحن نعمل على فحص الأدلة الرقمية بدقة، وتقديم الدفوع القانونية اللازمة سواء لإثبات حجية الدليل لموكلينا أو الطعن بالتزوير والعبث في الأدلة المقدمة ضدهم.',
      en: 'Criminal evidence is no longer limited to papers and witnesses; digital evidence extracted from phones, computers, and networks now plays a decisive role in adjudicating criminal and commercial cases. However, the law imposes strict conditions for considering digital evidence as legal proof, such as the legality of obtaining it and not tampering with its content (Chain of Custody). We work to meticulously examine digital evidence and present the necessary legal defenses, whether to prove the authority of the evidence for our clients or to challenge the forgery and tampering of evidence presented against them.'
    }
  },
  {
    id: 14,
    title: {
      ar: 'بطلان إجراءات القبض والتفتيش: كيف تبرئ الثغرات القانونية المتهمين؟',
      en: 'Invalidation of Arrest and Search Procedures: How Legal Loopholes Acquit Defendants?'
    },
    summary: {
      ar: 'الدقائق الأولى من القبض هي الأهم. تعرف على كيف يمكن لخطأ إجرائي واحد أن ينسف القضية الجنائية من جذورها.',
      en: 'The first minutes of an arrest are the most important. Learn how a single procedural error can uproot a criminal case from its roots.'
    },
    category: { ar: 'القضايا الجنائية', en: 'Criminal Cases' },
    categoryId: 'criminal-cases',
    date: '2026-05-16',
    image: '/جنائي 1.jpg',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: 'في القضايا الجنائية، العبرة ليست فقط بالاتهام، بل بمدى مشروعية الدليل. الكثير من القضايا الكبرى تنتهي بالبراءة ليس لعدم ارتكاب الفعل، بل لبطلان إجراءات القبض والتفتيش أو استجواب المتهم دون محامٍ. في مؤسسة كمال أبو علي، نتبنى استراتيجية "التشريح القانوني" لأوراق القضية، حيث نبحث عن أدق الثغرات في محاضر الاستدلال وتحقيقات النيابة لإبطال الأدلة غير المشروعة وضمان محاكمة عادلة لموكلينا، لأن خطأ إجرائياً واحداً كفيل بتغيير مسار القضية تماماً.',
      en: 'In criminal cases, what matters is not just the accusation, but the legality of the evidence. Many major cases end in acquittal not because the act wasn\'t committed, but due to the invalidation of arrest and search procedures or interrogating the defendant without a lawyer. At Kamal Abu Ali Law Firm, we adopt a "legal anatomy" strategy for case files, searching for the minutest loopholes in police reports and prosecution investigations to invalidate illegal evidence and ensure a fair trial for our clients, because a single procedural error is enough to completely change the course of a case.'
    }
  },
  {
    id: 15,
    title: {
      ar: 'جرائم الأموال والاختلاس في الشركات: الخط الفاصل بين الخطأ الإداري والجناية',
      en: 'Financial Crimes and Embezzlement in Companies: The Dividing Line Between Administrative Error and Felony'
    },
    summary: {
      ar: 'متى يتحول التقصير الإداري إلى تهمة إهدار مال عام أو اختلاس؟ دليلك القانوني لحماية موقفك المالي.',
      en: 'When does administrative negligence turn into a charge of squandering public funds or embezzlement? Your legal guide to protecting your financial position.'
    },
    category: { ar: 'الجرائم المالية', en: 'Financial Crimes' },
    categoryId: 'financial-crimes',
    date: '2026-05-16',
    image: '/جنائي 2.jpg',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: 'قضايا الأموال، مثل الاختلاس، الرشوة، والتزوير، تعتبر من أعقد القضايا الجنائية لارتباطها بتعاملات مالية ومستندات متشابكة. غالباً ما يختلط الأمر بين الإهمال الإداري والقصد الجنائي، مما يعرض مسؤولين أبرياء لخطر السجن. نحن نمتلك خبرة واسعة في تفكيك هذه الاتهامات من خلال الاستعانة بخبراء ومطابقة الدفاتر المالية، وتقديم دفوع قاطعة تنفي الركن المعنوي للجريمة وتحمي السمعة المهنية لموكلينا وتجنبهم المساءلة الجنائية الظالمة.',
      en: 'Financial cases, such as embezzlement, bribery, and forgery, are considered among the most complex criminal cases due to their connection with intricate financial transactions and documents. Administrative negligence is often confused with criminal intent, exposing innocent officials to the risk of imprisonment. We have extensive experience in dismantling these accusations by consulting experts, matching financial records, and presenting conclusive defenses that negate the moral element of the crime, protecting our clients\' professional reputations and sparing them unjust criminal accountability.'
    }
  },
  {
    id: 16,
    title: {
      ar: 'حدود الدفاع الشرعي عن النفس والمال: متى يعفيك القانون من العقاب؟',
      en: 'Limits of Legitimate Self-Defense and Property Defense: When Does the Law Exempt You from Punishment?'
    },
    summary: {
      ar: 'أين ينتهي حقك في الدفاع عن نفسك وتبدأ مسؤوليتك الجنائية؟ تفاصيل قانونية دقيقة تفصل بين البراءة والإدانة.',
      en: 'Where does your right to defend yourself end and your criminal responsibility begin? Precise legal details that separate innocence and conviction.'
    },
    category: { ar: 'القضايا الجنائية', en: 'Criminal Cases' },
    categoryId: 'criminal-cases',
    date: '2026-05-16',
    image: '/جنائي 3.jpg',
    author: { ar: 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية', en: 'Kamal Abu Ali Law Firm for Legal Services and Consultations' },
    content: {
      ar: 'القانون يكفل حق الدفاع الشرعي عن النفس والمال والعرض، لكن هذا الحق ليس مطلقاً بل تحكمه شروط صارمة مثل "التناسب" و"الخطر المحدق". المبالغة في رد الاعتداء قد تحول المجني عليه إلى متهم في جناية. دورنا كمحامين جنائيين هو إثبات توافر شروط الدفاع الشرعي من خلال فحص مسرح الجريمة، تقارير الطب الشرعي، وشهادة الشهود، لضمان تكييف القضية بشكل يعفي الموكل من العقوبة ويؤكد حقه الأصيل في الدفاع عن نفسه وممتلكاته.',
      en: 'The law guarantees the right to legitimate self-defense of person, property, and honor, but this right is not absolute; it is governed by strict conditions such as "proportionality" and "imminent danger." Exaggerating the response to an attack may turn the victim into a felony suspect. Our role as criminal lawyers is to prove the fulfillment of the conditions of legitimate defense by examining the crime scene, forensic reports, and witness testimonies, to ensure the case is qualified in a way that exempts the client from punishment and affirms their inherent right to defend themselves and their property.'
    }
  }
  // ✏️ ADD NEW ARTICLES HERE — they will appear automatically on both the listing and detail pages.
];

// Lookup map for O(1) access by ID string — used by the detail page
export const ARTICLES_MAP: Record<string, Article> = Object.fromEntries(
  ARTICLES.map(a => [String(a.id), a])
);

// All unique categories derived from the data — used by the filter buttons
export const CATEGORIES = [
  { id: 'all', label: { ar: 'الكل', en: 'All' } },
  ...Array.from(new Set(ARTICLES.map(a => a.categoryId))).map(id => {
    const article = ARTICLES.find(a => a.categoryId === id)!;
    return { id, label: article.category };
  })
];
