/*
 * Lightweight bilingual layer.
 * English is the source copy. Arabic is the default reading experience and
 * intentionally uses a casual Saudi tone rather than a formal translation.
 */
const arabicCopy = {
  // Shared chrome
  '~/nightsky': '~/nightsky',
  'before tcp — the night the world learned to talk': 'قبل TCP — الليلة اللي العالم بدأ يتكلم',
  'field notes': 'ملاحظات ميدانية',
  guide: 'الدليل',
  'build the network': 'ابنِ الشبكة',
  netscape: 'نتسكيب',
  sources: 'المصادر',
  'infrastructure lab': 'مختبر البنية التحتية',
  'before tcp / network foundations': 'قبل TCP / أساسيات الشبكة',
  'back to the story': 'ارجع للقصة',
  'enter the infrastructure lab': 'ادخل مختبر البنية التحتية',
  'the infrastructure lab': 'مختبر البنية التحتية',
  'return to ~/nightsky': 'ارجع إلى ~/nightsky',
  '← return to ~/nightsky': '← ارجع إلى ~/nightsky',
  'infrastructure simulation / no real sockets': 'محاكاة البنية التحتية / بدون مقابس شبكية حقيقية',
  'read rfc 793 ↗': 'اقرأ RFC 793 ↗',

  // Homepage
  'an interactive field guide to the first connection': 'دليل تفاعلي لأول اتصال',
  "the world didn't become connected": 'العالم ما اتصل كله',
  'all at once.': 'مرة وحدة.',
  'before tcp, there were dedicated wires, telephone operators, packet switches, and people asking a simple question:': 'قبل TCP، كان فيه أسلاك مخصصة، وفرق هاتفية، ومبدلات حزم، وناس يسألون سؤال بسيط:',
  'how can a message cross a network without getting lost?': 'كيف توصل رسالة عبر الشبكة بدون تضيع؟',
  'a story about infrastructure': 'قصة عن البنية التحتية',
  'a hands-on simulation': 'محاكاة عملية',
  'the netscape chapter': 'فصل نتسكيب',
  'you': 'أنت',
  router: 'موجّه',
  server: 'خادم',
  packet: 'حزمة',
  'somewhere between two machines': 'في مكان بين جهازين',
  'a message is learning to travel.': 'رسالة تتعلم كيف تسافر.',
  'the first web · 1991': 'أول ويب · 1991',
  'start at the beginning': 'ابدأ من الأول',
  'physical reach': 'الوصول الفيزيائي',
  'fiber · radio': 'ألياف · راديو',
  'a narrated reconstruction': 'رواية تعيد بناء اللحظة',
  'imagine it is late. a researcher types a few words into a machine. the words do not vanish into a single glowing beam. they become small, numbered pieces — each one handed to the next machine, each one carrying a little proof of where it belongs.': 'تخيّل الليل طوّال، وباحث يكتب كم كلمة في جهاز. الكلمات ما تختفي في شعاع واحد؛ تتحول إلى قطع صغيرة مرقمة، كل وحدة تسلّمها للجهاز اللي بعدها، وتحمل دليل بسيط على مكانها.',
  'the long way around': 'الطريق الطويل',
  'every layer solved a different problem.': 'كل طبقة كانت تحل مشكلة مختلفة.',
  'tcp is important, but it did not appear from nowhere. it sits on top of ideas that made a global, packet-based network possible in the first place.': 'TCP مهم، لكنه ما ظهر من فراغ. هو واقف فوق أفكار جعلت شبكة عالمية قائمة على الحزم ممكنة من البداية.',
  'the circuit': 'الوصلة المخصصة',
  before: 'قبل كل شيء',
  'the packet': 'الحزمة',
  'the address': 'العنوان',
  'the promise': 'الوعد',
  'the name': 'الاسم',
  'the page': 'الصفحة',
  'the window': 'النافذة',
  '1960s': 'ستينيات القرن',
  '1970s': 'سبعينيات القرن',
  '1980s': 'ثمانينيات القرن',
  '1991': '1991',
  '1994': '1994',
  '00 / the circuit': '00 / الوصلة المخصصة',
  'a path had to be opened.': 'لازم نفتح طريق.',
  'early networks often reserved a continuous physical path for each conversation, much like a telephone call. that worked, but it was expensive and fragile: one busy route could block everyone who needed it.': 'الشبكات الأولى كانت تحجز مسار فيزيائي متصل لكل مكالمة، مثل الهاتف بالضبط. الحل كان يشتغل، بس كان غالي وهش: مسار واحد مزدحم يقدر يوقف كل اللي يحتاجونه.',
  'the problem it solved': 'المشكلة اللي حلتّها',
  'making a dedicated connection possible — but not scalable to the whole planet.': 'تسمح بتوصيل مخصص بين جهازين، بس ما تكبر مع حجم الكوكب.',
  'telephone + telegraph': 'هاتف + برق',
  'a useful mental model': 'نموذج نفهمه بسهولة',
  'one train, or a fleet of labeled envelopes?': 'قطار واحد، ولا أسطول مظاريف مكتوب عليها؟',
  'imagine sending a long letter. a dedicated circuit is one train on one track: elegant, but the whole track is reserved while the train moves. packet switching is a fleet of envelopes, each carrying a piece of the letter and a return address.': 'تخيّل إنك ترسل رسالة طويلة. الدائرة المخصصة مثل قطار على سكة: مرتب، بس السكة كلها محجوزة طول الرحلة. تبديل الحزم مثل أسطول مظاريف، كل ظفر ياخذ جزء من الرسالة وعنوان الرجوع.',
  message: 'رسالة',
  'one reserved path': 'مسار محجوز واحد',
  'many independent pieces': 'قطع مستقلة كثيرة',
  'the packet workshop': 'ورشة الحزم',
  'now break the message on purpose.': 'خلنا نكسر الرسالة عن قصد.',
  'packet switching makes sharing possible, but packets can disappear. see why the next layer needed to remember pieces, ask for replacements, and put the message back in order.': 'تبديل الحزم يخلّنا نشارك الخطوط، بس الحزم ممكن تضيع. شوف ليش الطبقة الجاية لازم تحفظ القطع، وتطلب البديل، وترتب الرسالة من جديد.',
  'how many pieces?': 'كم قطعة؟',
  'make one piece disappear': 'خلّ قطعة تختفي',
  'simulate packet loss': 'جرّب فقدان حزمة',
  'send the pieces': 'أرسل القطع',
  'this is a local animation. nothing leaves your browser.': 'هذا مجرد عرض محلي، ولا يطلع أي شي من المتصفح.',
  transmission: 'الإرسال',
  'ready to send': 'جاهز للإرسال',
  'a message is waiting to be split into smaller pieces.': 'في رسالة تنتظر تتقسم إلى قطع أصغر.',
  split: 'تقسيم',
  travel: 'تنقل',
  repair: 'إصلاح',
  'a missing envelope is not a lost message': 'الظرف اللي ضاع مو معناها الرسالة ضاعت',
  'when every envelope knows its place in the sequence. that tiny idea is the emotional center of tcp.': 'لأن كل ظرف يعرف ترتيبه. الفكرة الصغيرة هذي هي قلب TCP.',
  'dedicated simulation / infrastructure only': 'محاكاة منفصلة / البنية التحتية فقط',
  'build the network before the protocol.': 'ابنِ الشبكة قبل البروتوكول.',
  'the timeline above explains how the layers arrived. the infrastructure lab is its own focused space: start with a cable, add switches and routes, connect networks, and discover what tcp is actually standing on.': 'الخط الزمني فوق يشرح كيف وصلت الطبقات. مختبر البنية التحتية مكانه لوحده: تبدأ بكابل، تضيف مفاتيح ومسارات، تربط الشبكات، وبعدين تشوف على وش TCP واقف أصلاً.',
  'infrastructure / network layers': 'البنية التحتية / طبقات الشبكة',
  ready: 'جاهز',
  cable: 'كيبل',
  switch: 'مفتاح',
  network: 'شبكة',
  link: 'وصلة',
  packets: 'حزم',
  routes: 'مسارات',
  peering: 'تبادل',
  reach: 'انتشار',
  operations: 'تشغيل',
  'tcp rides': 'TCP يركب فوقها',
  'build the house first. then ask what kind of promise a protocol can make inside it.': 'ابنِ البيت أول. وبعدين اسأل: وش يقدر البروتوكول يَعِد داخله؟',
  'the page became a place you could enter.': 'الصفحة صارت مكان تقدر تدخله.',
  'mosaic made the web visible to more people. netscape navigator made it feel like a window: pages with links, images, forms, and eventually javascript.': 'موزايك خلّى الويب واضح لناس أكثر. وخلّى Netscape Navigator يحسسك إنه نافذة: صفحات فيها روابط وصور ونماذج، وبعدين JavaScript.',
  'nightsky netscape simulator': 'محاكي نتسكيب من NIGHTSKY',
  location: 'العنوان',
  'welcome to the early web': 'أهلاً في الويب المبكر',
  'hello, world.': 'مرحباً، عالم.',
  'this tiny page is a safe, modern echo of the first experiments: a title, some text, a link, and a button that reacts.': 'هذه الصفحة الصغيرة صدى آمن وحديث لتجارب البداية: عنوان، شوية نص، رابط، وزر يرد.',
  'run a little script': 'شغّل سكربت صغير',
  'the page is waiting for you.': 'الصفحة تنتظرك.',
  'read the': 'اقرأ',
  'story behind the signal': 'قصة الإشارة',
  'ready.': 'جاهز.',
  'no local cookie yet': 'ما فيه كوكي محفوظ بعد',
  'a small story about a big shift': 'قصة صغيرة عن نقلة كبيرة',
  'before, a page was a destination. now it could respond.': 'قبل، الصفحة كانت مكان توصل له. الحين تقدر ترد.',
  'the first pages could be read. javascript, created at netscape by brendan eich in 1995, gave a page a tiny bit of behavior: change a word, open a dialog, react to a click. the web stopped being a filing cabinet and started becoming a medium.': 'الصفحات الأولى كانت للقراءة بس. JavaScript، اللي Brendan Eich أنشأها في نتسكيب سنة 1995، أعطت الصفحة شوية سلوك: تغيّر كلمة، تفتح نافذة، أو ترد على كليك. الويب وقف يكون خزانة ملفات ويصير وسيلة.',
  'imagine every document learning a very small language of actions.': 'تخيّل كل وثيقة تتعلم لغة صغيرة جداً من الأفعال.',
  'historical note:': 'ملاحظة تاريخية:',
  'netscape did not invent the web. it helped make the existing web usable, popular, and programmable for millions of people.': 'نتسكيب ما اخترع الويب. ساعد إن الويب الموجود يصير قابل للاستخدام، محبوب، وقابل للبرمجة لملايين الناس.',
  'the through-line': 'الخيط اللي يجمع كل شي',
  'connection is a stack of small promises.': 'الاتصال مجموعة وعود صغيرة فوق بعض.',
  'a name finds an address. ip gives the address meaning. tcp makes delivery dependable. http asks for a resource. html describes the page. a browser turns all of that into something you can see and touch.': 'الاسم يدور على عنوان. IP يعطي العنوان معناه. TCP يخلّي التسليم مضمون. HTTP يطلب مورد. HTML يشرح الصفحة. والمتصفح يحوّل كل هذا لشي تشوفه وتقدر تلمسه.',
  name: 'اسم',
  address: 'عنوان',
  route: 'مسار',
  page: 'صفحة',
  'keep following the signal': 'كمّل 뒤 الإشارة',
  'read the original blueprints.': 'اقرأ المخططات الأصلية.',
  'the story continues in specifications, archives, and the people who kept making the next layer possible.': 'القصة مستمرة في المواصفات والأرشيف والناس اللي خلّوا الطبقة الجاية ممكنة.',
  'cern archive': 'أرشيف CERN',
  'the original world wide web project': 'مشروع World Wide Web الأصلي',
  'read the earliest account of the web ↗': 'اقرأ أول وصف للويب ↗',
  'transmission control protocol': 'بروتوكول التحكم بالإرسال',
  'tcp’s original specification ↗': 'مواصفة TCP الأصلية ↗',
  'internet protocol': 'بروتوكول الإنترنت',
  'the address-and-routing layer ↗': 'طبقة العناوين والتوجيه ↗',
  'domain name system': 'نظام أسماء النطاقات',
  'how names become addresses ↗': 'كيف تتحول الأسماء إلى عناوين ↗',
  'this is an educational reconstruction. the lab uses a fictional destination and does not open a real network connection.': 'هذا عرض تعليمي تقدريبي. المختبر يستخدم وجهة وهمية وما يفتح اتصال شبكي حقيقي.',
  'built as a small, interactive history of the first connection.': 'موقع صغير تفاعلي يروي تاريخ أول اتصال.',
  'back to the signal ↑': 'ارجع للإشارة ↑',

  // Infrastructure page
  'infrastructure lab — how the network was built': 'مختبر البنية التحتية — كيف انبنت الشبكة',
  'build the foundation from the ground up': 'ابنِ الأساس من الصفر',
  'before a protocol can travel, a network has to': 'قبل ما البروتوكول يتحرك، الشبكة لازم',
  'exist.': 'تكون موجودة.',
  'this page is not about watching tcp packets move. it is about the physical, logical, and human infrastructure that had to be built before tcp could become a useful way to communicate.': 'هذه الصفحة مو عن مشاهدة حزم TCP وهي تمشي. هي عن البنية التحتية الفيزيائية والمنطقية والبشرية اللي لازم تنبني قبل ما TCP يصير طريقة مفيدة للتواصل.',
  'the question': 'السؤال',
  'what must exist before a connection can be requested?': 'وش لازم يكون موجود قبل ما أحد يطلب اتصال؟',
  physical: 'فيزيائي',
  'cable · fiber · radio': 'كيبل · ألياف · راديو',
  switching: 'تبديل',
  'nodes · routers': 'عقد · موجّهات',
  addressing: 'عناوين',
  'ip · routes': 'IP · مسارات',
  services: 'خدمات',
  'tcp can ride here': 'TCP يقدر يركب هنا',
  'a protocol is a guest.': 'البروتوكول ضيف.',
  'the network is the house.': 'والشبكة هي البيت.',
  'build order': 'ترتيب البناء',
  'a private link': 'وصلة خاصة',
  'a shared switch': 'مفتاح مشترك',
  circuit: 'دائرة',
  'a packet switch': 'مبدّل حزم',
  'store + forward': 'تخزين + توجيه',
  'addresses + routes': 'عناوين + مسارات',
  'networks interconnect': 'الشبكات تترابط',
  maintenance: 'صيانة',
  'operate + standardize': 'تشغيل + معايير',
  'build one layer at a time. each layer solves a new problem; none of them is the whole internet.': 'ابنِ طبقة وحدة كل مرة. كل طبقة تحل مشكلة جديدة؛ ولا واحدة منها هي الإنترنت كلها.',
  'layer 00 / physical link': 'الطبقة 00 / وصلة فيزيائية',
  'two machines. one direct path.': 'جهازين. مسار مباشر واحد.',
  'layers built': 'الطبقات المبنية',
  'direct connection': 'اتصال مباشر',
  '1 path available': 'مسار متاح',
  'a physical path is necessary before any protocol can travel.': 'ما ينفع بروتوكول يتحرك قبل ما يكون فيه مسار فيزيائي.',
  'before packet switching': 'قبل تبديل الحزم',
  'why this layer exists': 'ليش هذي الطبقة موجودة',
  'the earliest useful networks began with a direct physical relationship: two endpoints, one cable, one reserved path.': 'أقدم الشبكات المفيدة بدأت بعلاقة فيزيائية مباشرة: نقطتين، كابل واحد، ومسار محجوز واحد.',
  solves: 'تحل',
  'moves bits between two known places.': 'تنقل البتات بين مكانين معروفين.',
  limit: 'الحد',
  'no alternate route and no efficient sharing.': 'ما فيه مسار بديل ولا مشاركة فعّالة.',
  'lay the first link': 'ركّب أول وصلة',
  'start with the simplest infrastructure: a direct connection between two machines.': 'ابدأ بأبسط بنية تحتية: اتصال مباشر بين جهازين.',
  'build the first layer': 'ابنِ أول طبقة',
  'reset build': 'ارجع للبداية',
  'field notes from the build': 'ملاحظات من البناء',
  'infrastructure is a promise maintained by people.': 'البنية التحتية وعد يحافظ عليه الناس.',
  'every layer below is physical equipment, operational work, shared rules, or a combination of all three.': 'كل طبقة تحت هي معدات فيزيائية، أو شغل تشغيلي، أو قواعد مشتركة، أو مزيج بينهم.',
  '01 / physical': '01 / فيزيائي',
  'a cable is a route.': 'الكابل مسار.',
  'fiber, copper, radio, and satellites move energy across distance. without a physical or electromagnetic path, there is no conversation to abstract.': 'الألياف والنحاس والراديو والأقمار تنقل الطاقة عبر المسافة. بدون مسار فيزيائي أو كهرومغناطيسي، ما فيه محادثة تقدر تتكلم عنها.',
  '02 / logical': '02 / منطقي',
  'a switch is a decision point.': 'المفتاح نقطة قرار.',
  'routers and switches decide where traffic should go next. they create shared infrastructure by giving many flows a way through the same landscape.': 'الموجّهات والمفاتيح تقرر وين يروح المرور بعد كذا. هم يبنون بنية مشتركة لما يعطون عدة تدفقات طريق عبر نفس المكان.',
  '03 / human': '03 / بشري',
  'standards make strangers interoperate.': 'المعايير تخلي الغرباء يفهمون بعض.',
  'protocol documents, naming systems, policies, maintenance crews, and operators turn isolated links into a network people can depend on.': 'مواصفات البروتوكولات وأنظمة الأسماء والسياسات وفرق الصيانة والمشغّلين يحوّلون وصلات معزولة إلى شبكة ناس يقدرون يعتمدون عليها.',
  'the point of the whole build': 'الخلاصة من البناء كله',
  'tcp is a protocol made possible by infrastructure.': 'TCP بروتوكول البنية التحتية هي اللي سمحت له يوجد.',
  'once links, switches, addresses, routes, interconnection, physical reach, and operations exist, tcp has a network to coordinate. it does not create that foundation; it makes a promise on top of it.': 'لما تصير الوصلات والمفاتيح والعناوين والمسارات والترابط والانتشار والتشغيل موجودة، TCP يلقى شبكة ينسّق عليها. ما هو اللي أسس الأساس؛ هو يعِد فوق الأساس.',
  'physical link': 'وصلة فيزيائية',
  'ip routing': 'توجيه IP',
  application: 'تطبيق',
  'return to ~/nightsky': 'ارجع إلى ~/nightsky',
  'infrastructure simulation / no real sockets': 'محاكاة البنية التحتية / بدون مقابس شبكية حقيقية',
  'read rfc 793 ↗': 'اقرأ RFC 793 ↗',

  // Dynamic journey and workshop copy
  'a message could travel in pieces.': 'الرسالة تقدر تسافر على شكل قطع.',
  'packet switching broke a message into small pieces. each piece could find its own way through a network, then the receiving machine could put the pieces back together. a busy route no longer had to hold the entire conversation.': 'تبديل الحزم قطع الرسالة لقطع صغيرة. كل قطعة تقدر تلاقي طريقها، وبعدين الجهاز المستقبل يرمّعها من جديد. المسار المزدحم ما عاد محجوز للمحادثة كلها.',
  'sharing scarce routes between many conversations at the same time.': 'مشاركة المسارات النادرة بين محادثات كثيرة بنفس الوقت.',
  'every packet needed a destination.': 'كل حزمة تحتاج وجهة.',
  'packets need a common way to name their source and destination. the internet protocol gave hosts addresses and gave routers a way to move each packet one network at a time toward its target.': 'الحزم تحتاج طريقة مشتركة تسمّي المصدر والوجهة. بروتوكول الإنترنت أعطى الأجهزة عناوين، وأعطى الموجّهات طريقة يمشون فيها كل حزمة شبكة ورا شبكة لهدفها.',
  'giving independently connected networks one shared addressing and routing language.': 'تعطي الشبكات المتصلة لغة عناوين وتوجيه مشتركة.',
  'arriving was not the same as being reliable.': 'الوصول مو نفس الموثوقية.',
  'networks can lose a packet, deliver one late, or send pieces in the wrong order. tcp adds sequence numbers, acknowledgements, retransmission, and flow control so an application can act as if the connection were dependable.': 'الشبكات ممكن تفقد حزمة، أو توصلها متأخرة، أو ترسل القطع بترتيب غلط. TCP يضيف أرقام ترتيب وإقرارات وإعادة إرسال وتحكم في التدفق، عشان التطبيق يحس إن الاتصال مضمون.',
  'making an unreliable packet network dependable enough for useful applications.': 'يخلّي شبكة الحزم غير الموثوقة مضمونة بما يكفي للتطبيقات المفيدة.',
  'people remember names. routers need numbers.': 'الناس تتذكر الأسماء. الموجّهات تحتاج أرقام.',
  'dns added a naming system to the internet. a name such as www.example.org could resolve to an ip address, making the network easier for people to use without memorizing routing tables and numeric addresses.': 'DNS أضاف نظام تسمية للإنترنت. اسم مثل www.example.org يقدر يتحول لعنوان IP، فتصير الشبكة أسهل للناس بدون حفظ جداول التوجيه والعناوين الرقمية.',
  'giving human-friendly destinations a place in a machine network.': 'تعطي الوجهات الودودة للإنسان مكان في شبكة الآلات.',
  'a network could carry a document.': 'الشبكة تقدر تحمل مستند.',
  'at cern, tim berners-lee combined urls, http, and html. a url named a resource, http asked for it, and html described the page. the first website went live in 1991.': 'في CERN، جمع Tim Berners-Lee بين URL وHTTP وHTML. الـURL سمّى المورد، وHTTP طلبه، وHTML شرح الصفحة. أول موقع دخل العمل سنة 1991.',
  'turning a connected network into a navigable collection of linked documents.': 'تحويل شبكة متصلة إلى مجموعة مستندات مترابطة تقدر تتنقل بينها.',
  'url + http + html · 1991': 'URL + HTTP + HTML · 1991',
  'the page became a place you could enter.': 'الصفحة صارت مكان تقدر تدخله.',
  'mosaic brought images and inline links into an approachable browser. netscape navigator made that experience feel like a window, and javascript gave the page a small new ability: it could respond.': 'موزايك جابت الصور والروابط لمتصفح قريب من الناس. ون netscape Navigator خلّى التجربة تحس إنها نافذة، وJavaScript أعطت الصفحة قدرة جديدة صغيرة: إنها ترد.',
  'making the web visible, familiar, and interactive for millions of people.': 'جعل الويب واضح ومألوق وقابل للتفاعل لملايين الناس.',
  'mosaic + netscape · 1993–1995': 'موزايك + نتسكيب · 1993–1995',
  'a packet is a small, self-contained piece of a message. it can wait, take a different route, and still know what it is carrying and where it is going.': 'الحزمة جزء صغير مكتفئ من رسالة. تقدر تنتظر، وتسلك طريق ثاني، ومع ذلك تعرف وش تحمل ووين رايحة.',
  'an ip address is a destination written in a language routers can read. the address does not promise a perfect trip; it gives every hop a next step.': 'عنوان IP هو وجهة مكتوبة بلغة الموجّهات يفهمونها. العنوان ما يضمن رحلة مثالية، لكنه يعطي كل قفزة خطوة جاية.',
  'tcp is the memory and the conversation manager. it remembers the order, notices what is missing, and asks for missing pieces to be sent again.': 'TCP هو ذاكرة المحادثة ومديرها. يحفظ الترتيب، ويكتشف وش ناقص، ويطلب إرسال القطع الناقصة من جديد.',
  'dns is the phone book of the network. it turns a name people can remember into an address machines can route toward.': 'DNS هو دليل هاتف الشبكة. يحوّل اسم يقدر الناس يتذكرونه إلى عنوان تقدر الآلة توجّهه.',
  'the web adds a language for requesting and describing resources. a page is no longer just a stream of bytes; it has structure, links, and meaning.': 'الويب يضيف لغة لطلب الموارد ووصفها. الصفحة ما صارت مجرد تدفق بايتات؛ صارت لها بنية وروابط ومعنى.',
  'a browser is the interpreter at the edge of the network. it turns packets into layout, links, images, and eventually behavior.': 'المتصفح هو المترجم عند حافة الشبكة. يحوّل الحزم إلى تخطيط وروابط وصور، وبعدين سلوك.',
  'ready to send': 'جاهز للإرسال',
  splitting: 'تقسيم',
  'in transit': 'في الطريق',
  'missing piece': 'قطعة ناقصة',
  repairing: 'إصلاح',
  reassembled: 'أعيد تجميعها',
  sending: 'أرسل',
  'deliver every piece': 'سلّم كل القطع',
  'the message is becoming independent pieces.': 'الرسالة بدأت تتحول إلى قطع مستقلة.',
  'each piece carries an address, a sequence number, and a small piece of the message.': 'كل قطعة تحمل عنوان ورقم ترتيب وجزء صغير من الرسالة.',
  'the receiver notices that packet': 'المستقبل يكتشف إن الحزمة',
  'never arrived.': 'ما وصلت.',
  'tcp remembers the gap and asks the sender to retransmit the missing sequence.': 'TCP يتذكر الفرج ويطلب من المرسل يعيد إرسال الترتيب الناقص.',
  'every sequence is present. the receiver can rebuild the original message.': 'كل الأرقام موجودة. المستقبل يقدر يرسم الرسالة الأصلية من جديد.',
  'every piece arrived in order. the message is ready to be read.': 'كل القطع وصلت بالترتيب. الرسالة صارت جاهزة للقراءة.',
  'the page changed. that is a tiny script at work.': 'الصفحة تغيّرت. هذا سكربت صغير يشتغل.',
  'one click. one event. one small change to the document.': 'كليك واحد. حدث واحد. تغيير صغير في المستند.',
  'you just made the page respond — a very early kind of magic.': 'خلّيت الصفحة ترد — نوع من السحر بدري.',
  'the page is waiting for you.': 'الصفحة تنتظرك.',
  'data': 'بيانات',
  'seq': 'ترتيب',

  'the earliest useful networks began with a direct physical relationship: two endpoints, one cable, one reserved path. a protocol is only a set of instructions; something physical has to carry those instructions.': 'أقدم الشبكات المفيدة بدأت بعلاقة فيزيائية مباشرة: نقطتين، كابل واحد، ومسار محجوز واحد. البروتوكول بس مجموعة تعليمات؛ لازم شيء فيزيائي يوصل التعليمات.',
  'arpanet · 1960s': 'ARPANET · ستينيات القرن',
  'arpanet · 1969': 'ARPANET · 1969',
  '01 / the packet': '01 / الحزمة',
  '02 / the address': '02 / العنوان',
  '03 / the promise': '03 / الوعد',
  '04 / the name': '04 / الاسم',
  '05 / the page': '05 / الصفحة',
  '06 / the window': '06 / النافذة',
  'domain name system · 1983': 'نظام أسماء النطاقات · 1983',
  'internet protocol · 1970s': 'بروتوكول الإنترنت · سبعينيات القرن',
  'transmission control protocol · 1980s': 'بروتوكول التحكم بالإرسال · ثمانينيات القرن',
  'internet protocol · 1970s–80s': 'بروتوكول الإنترنت · سبعينيات–ثمانينيات القرن',
  'build again': 'ابنِ من جديد',

  'layer 01 / circuit switching': 'الطبقة 01 / تبديل الدوائر',
  'a switch creates a shared meeting place.': 'المفتاح يصنع مكان مشترك تتلاقى فيه الأجهزة.',
  'circuit switch': 'مفتاح دوائر',
  'paths reserved on demand': 'مسارات محجوزة عند الطلب',
  'a switch connects endpoints, but the conversation still owns a reserved path.': 'المفتاح يربط نقاط النهاية، بس المحادثة بعد ما زالت تملك مسار محجوز.',
  'telephone networks used switches and operators to create a circuit between callers. the switch was a place where paths could be joined, which made networks useful at a larger scale without changing the basic idea of a reserved conversation.': 'شبكات الهاتف استخدمت مفاتيح ومشغّلين عشان يصنعون دائرة بين المتصلين. المفتاح كان المكان اللي تندمج فيه المسارات، وهذا جعل الشبكات أكبر بدون ما نغيّر فكرة المحادثة المحجوزة.',
  'connects many endpoints through a central exchange.': 'يربط نقاط نهاية كثيرة عبر مركز تبديل واحد.',
  'a reserved path uses capacity even when data is quiet.': 'المسار المحجوز يستخدم السعة حتى لو البيانات ساكتة.',
  'add a circuit switch': 'أضف مفتاح دوائر',
  'add the exchange that lets more than two machines reach one another.': 'أضف المركز اللي يخلّي أكثر من جهاز يوصلون بعض.',
  'add the switch': 'أضف المفتاح',
  'layer 02 / packet switching': 'الطبقة 02 / تبديل الحزم',
  'a node can forward one piece at a time.': 'العقدة تقدر توجّه قطعة وحدة كل مرة.',
  'packet-switched network': 'شبكة تبديل حزم',
  'many flows / shared links': 'تدفقات كثيرة / روابط مشتركة',
  'the new idea: a message can be split, routed, and reassembled.': 'الفكرة الجديدة: الرسالة تقدر تتقسم، تتوجّه، وتترجع من جديد.',
  'packet-switched networks moved small pieces through store-and-forward nodes. instead of reserving one private circuit for an entire conversation, many machines could share links and take different routes. arpanet demonstrated the idea through hosts connected to packet-switching nodes called imps.': 'شبكات تبديل الحزم حرّكت قطع صغيرة عبر عقد التخزين والتوجيه. بدل ما تحجز دائرة خاصة للمحادثة كلها، أجهزة كثيرة شاركت الروابط وسلكت طرق مختلفة. وARPANET بيّنت الفكرة عبر مضيفات موصولة بعقد تبديل اسمو IMPs.',
  'shares scarce links across many conversations.': 'يشارك الروابط النادرة بين محادثات كثيرة.',
  'pieces can arrive late, out of order, or not at all.': 'القطع ممكن توصل متأخرة، أو بترتيب غلط، أو ما توصل أبد.',
  'replace circuits with packet nodes': 'استبدل الدوائر بعقد حزم',
  'add routers that inspect each piece and choose a next hop instead of reserving a path.': 'أضف موجّهات تفحص كل قطعة وتختار قفزة جاية بدل حجز مسار.',
  'add packet nodes': 'أضف عقد الحزم',
  'layer 03 / addressing + routing': 'الطبقة 03 / العناوين + التوجيه',
  'a destination becomes a language routers share.': 'الوجهة تصير لغة تشترك فيها الموجّهات.',
  'ip network topology': 'خريطة شبكة IP',
  'routes can be compared': 'المسارات تقدر تتقارن',
  'addressing turns geography into a routing decision.': 'العنونة تحوّل المكان إلى قرار توجيه.',
  'packet switching needs a common way to describe where a packet is going. ip addresses give endpoints and networks identities; routing tables let each router choose a next hop. this is the logical infrastructure that turns a collection of links into one addressable network.': 'تبديل الحزم يحتاج طريقة مشتركة تصف وين الحزمة رايحة. عناوين IP تعطي نقاط النهاية والشبكات هوياتها، وجداول التوجيه تخلي كل موجّه يختار قفزة جاية. هذي البنية المنطقية اللي تحوّل مجموعة روابط إلى شبكة لها عنوان واحد.',
  'lets independent nodes make forwarding decisions.': 'تخلّي العقد المستقلة تقدر تقرر وين توجّه.',
  'ip itself does not promise that a packet will arrive.': 'IP نفسه ما يضمن إن الحزمة توصل.',
  'add ip addresses and routes': 'أضف عناوين IP ومسارات',
  'give the nodes identities and show how a router decides where traffic goes next.': 'أعطِ العقد هوياتها وورّينا كيف يقرر الموجّه وين يروح المرور بعد كذا.',
  'add addressing + routes': 'أضف العناوين + المسارات',
  'layer 04 / network of networks': 'الطبقة 04 / شبكة من شبكات',
  'independent networks agree to exchange traffic.': 'الشبكات المستقلة تتفق على تبادل المرور.',
  'peering + interconnection': 'تبادل + ترابط',
  'networks become one': 'الشبكات تصير وحدة',
  'internet interconnection': 'ترابط الإنترنت',
  'the internet is not one giant switch. it is networks choosing to work together.': 'الإنترنت مو مفتاح عملاق واحد. هو شبكات تختار تشتغل مع بعض.',
  'the internet is a network of networks. organizations, isps, universities, and backbones connect at peering points and private links, then use common protocols so traffic can cross organizational boundaries. no single operator owns the whole route.': 'الإنترنت شبكة من شبكات. المؤسسات ومزودو الخدمة والجامعات والعمود الفقري يتصلون عند نقاط تبادل ووصلات خاصة، ثم يستخدمون بروتوكولات مشتركة عشان المرور يعبر حدود المؤسسات. ولا مشغّل واحد يملك المسار كله.',
  'extends reach across independently operated networks.': 'يوسّع الوصول عبر شبكات يشغلها مشغّلون مختلفون.',
  'different operators must agree on technical and policy boundaries.': 'المشغّلون المختلفون لازم يتفقون على الحدود التقنية والسياسية.',
  'connect the networks': 'اربط الشبكات',
  'add an interconnection point so separate networks can exchange traffic.': 'أضف نقطة ترابط عشان الشبكات المنفصلة تقدر تتبادل المرور.',
  'add global reach': 'أضف الانتشار العالمي',
  'layer 05 / physical reach': 'الطبقة 05 / الوصول الفيزيائي',
  'global reach still has a physical shape.': 'الوصول العالمي بعد له شكل فيزيائي.',
  'fiber / radio / satellite': 'ألياف / راديو / قمر صناعي',
  'last mile + backbone': 'الميل الأخير + العمود الفقري',
  'global physical infrastructure': 'البنية الفيزيائية العالمية',
  'the "cloud" is cables, towers, landing stations, radios, and rooms full of equipment.': 'السحابة يعني كيبلات وأبراج ومحطات وصول وراديو وغرف مليانة معدات.',
  'digital networks still depend on physical paths: fiber in the ground, undersea cables, microwave and radio links, cellular towers, satellites, and equipment rooms. last-mile access connects homes and businesses to the larger network.': 'الشبكات الرقمية بعد تعتمد على مسارات فيزيائية: ألياف تحت الأرض، كيبلات تحت البحر، روابط موجات الميكروويف والراديو، أبراج خلوية، أقمار صناعية، وغرف معدات. الميل الأخير يوصل البيوت والشركات بالشبكة الأكبر.',
  'carries traffic across cities, countries, and oceans.': 'ينقل المرور عبر المدن والدول والمحيطات.',
  'physical routes need power, maintenance, repair, and redundancy.': 'المسارات الفيزيائية تحتاج طاقة وصيانة وإصلاح وتكرار احتياطي.',
  'extend the physical reach': 'وسّع الوصول الفيزيائي',
  'add the physical routes that make a global network visible in the real world.': 'أضف المسارات الفيزيائية اللي تبيّن الشبكة العالمية في الواقع.',
  'layer 06 / operations + standards': 'الطبقة 06 / التشغيل + المعايير',
  'a network survives because people maintain it.': 'الشبكة تعيش لأن الناس يحافظون عليها.',
  'operations + shared rules': 'تشغيل + قواعد مشتركة',
  'service depends on care': 'الخدمة تعتمد على العناية',
  'the invisible layer': 'الطبقة غير المرئية',
  'standards make strangers interoperate; operations keep the system alive.': 'المعايير تخلّي الغرباء يشتغلون مع بعض؛ والتشغيل يخلّي النظام حي.',
  'infrastructure is also organizational. protocol specifications, naming systems, routing policies, monitoring, security, maintenance crews, and agreements between operators make a physical network dependable and understandable to the people using it.': 'البنية التحتية كمان تنظيمية. مواصفات البروتوكولات وأنظمة الأسماء وسياسات التوجيه والمراقبة والأمن وفرق الصيانة والاتفاقيات بين المشغّلين يخلّون الشبكة الفيزيائية مضمونة ومفهومة للي يستخدمونها.',
  'keeps independent infrastructure compatible and alive.': 'يخلّي البنية التحتية المستقلة متوافقة وحيّة.',
  'no layer is static; capacity and policy must evolve.': 'ولا طبقة ثابتة؛ السعة والسياسة لازم يتطورون.',
  'add standards and operations': 'أضف المعايير والتشغيل',
  'add the shared rules and human work that turn equipment into a service.': 'أضف القواعد المشتركة والشغل البشري اللي يحوّل المعدات إلى خدمة.',
  'add operations + standards': 'أضف التشغيل + المعايير',
  'layer 07 / tcp can ride here': 'الطبقة 07 / TCP يقدر يركب هنا',
  'now tcp has something to coordinate.': 'الحين TCP عنده شيء ينسّقه.',
  'protocol stack': 'طبقات البروتوكول',
  'foundation complete': 'الأساس اكتمل',
  'tcp is a guest, not the house': 'TCP ضيف، مو البيت',
  'tcp can provide reliability because the infrastructure gives it an addressable network to use.': 'TCP يقدر يوفّر موثوقية لأن البنية التحتية تعطيه شبكة لها عنوان ويستخدمها.',
  'tcp is a protocol that rides on ip and the links beneath it. it adds sequence, acknowledgements, and recovery to a best-effort packet network. the protocol does not create the cables, routers, addresses, or agreements; it makes a promise on top of them.': 'TCP بروتوكول يركب على IP والروابط اللي تحته. يضيف ترتيب وإقرارات واسترجاعاً لشبكة حزم ما تقدر تضمن الوصول دائماً. البروتوكول ما يصنع الكيبلات ولا الموجّهات ولا العناوين ولا الاتفاقيات؛ هو يعِد فوقها.',
  'adds reliable, ordered delivery to the existing network.': 'يضيف تسليم موثوق ومرتب للشبكة الموجودة.',
  'its promise only works when the underlying service is reachable.': 'وعده يشتغل فقط لما الخدمة تحته تكون قابلة للوصول.',
  'place tcp on the foundation': 'حط TCP فوق الأساس',
  'review the layers that make a tcp conversation possible, without simulating individual tcp segments.': 'راجع الطبقات اللي تخلي محادثة TCP ممكنة، بدون ما نحاكي حزم TCP لحالها.',
  'show the foundation': 'ورّ الأساس',

  'machine a': 'جهاز A',
  'machine b': 'جهاز B',
  'caller a': 'متصل A',
  'caller b': 'متصل B',
  'caller c': 'متصل C',
  'reserved circuit': 'دائرة محجوزة',
  'manual / circuit exchange': 'بدالة / مركز تبديل',
  'host a': 'مضيف A',
  'host b': 'مضيف B',
  'host c': 'مضيف C',
  source: 'مصدر',
  destination: 'وجهة',
  'router 1': 'موجّه 1',
  'router 2': 'موجّه 2',
  'next hop': 'القفزة التالية',
  'store + forward': 'تخزين + توجيه',
  'network a': 'شبكة A',
  'network b': 'شبكة B',
  'network c': 'شبكة C',
  'network d': 'شبكة D',
  router: 'موجّه',
  'prefix + next hop': 'بادئة + القفزة التالية',
  'ip addresses': 'عناوين IP',
  'route table': 'جدول توجيه',
  'isp a': 'مزود A',
  'isp b': 'مزود B',
  'isp c': 'مزود C',
  'isp d': 'مزود D',
  'private network': 'شبكة خاصة',
  'campus network': 'شبكة حرم',
  'regional network': 'شبكة إقليمية',
  'content network': 'شبكة محتوى',
  exchange: 'تبادل',
  ixp: 'نقطة تبادل',
  'exchange traffic': 'تبادل مرور',
  peering: 'تبادل',
  'autonomous systems': 'أنظمة مستقلة',
  city: 'مدينة',
  'fiber + cells': 'ألياف + خلايا',
  coast: 'ساحل',
  'landing station': 'محطة وصول',
  ocean: 'محيط',
  'undersea cable': 'كيبل تحت البحر',
  rural: 'ريف',
  'last mile': 'الميل الأخير',
  fiber: 'ألياف',
  'terrestrial route': 'مسار برّي',
  cable: 'كيبل',
  'submarine route': 'مسار تحت البحر',
  tower: 'برج',
  'radio access': 'وصول راديوي',
  satellite: 'قمر صناعي',
  'remote link': 'وصلة بعيدة',
  policy: 'سياسة',
  'peering rules': 'قواعد التبادل',
  rfcs: 'RFCs',
  'shared language': 'لغة مشتركة',
  ops: 'تشغيل',
  'monitor + repair': 'مراقبة + إصلاح',
  security: 'أمان',
  'protect + observe': 'حماية + مراقبة',
  service: 'خدمة',
  'reliable enough to use': 'موثوقية كافية للاستخدام',
  'foundation complete': 'الأساس اكتمل',
  'link / physical': 'وصلة / فيزيائي',
  'the protocol rides on the house': 'البروتوكول يستضيفه البيت',
  standards: 'معايير',
  'human systems': 'أنظمة بشرية',
  'operations + shared rules': 'تشغيل + قواعد مشتركة',
  'service depends on care': 'الخدمة تعتمد على العناية',
  'the invisible layer': 'الطبقة غير المرئية',
  'ip network topology': 'خريطة شبكة IP',
  'packet-switched network': 'شبكة تبديل حزم',
  'many flows / shared links': 'تدفقات كثيرة / روابط مشتركة',
  'paths reserved on demand': 'مسارات محجوزة عند الطلب',
  'telephone infrastructure': 'بنية الهاتف',
  'internet interconnection': 'ترابط الإنترنت',
  'global physical infrastructure': 'البنية الفيزيائية العالمية',
  'protocol stack': 'طبقات البروتوكول',
  'foundation ready': 'الأساس جاهز',
  'routes can be compared': 'المسارات تقدر تتقارن',
  'networks become one': 'الشبكات تصير وحدة',
  'last mile + backbone': 'الميل الأخير + العمود الفقري',
  'service depends on care': 'الخدمة تعتمد على العناية',
};

const sourceAttributeKeys = ['aria-label', 'title', 'placeholder', 'alt'];
const sourceText = new WeakMap();
const sourceAttributes = new WeakMap();
let currentLanguage = 'ar';

function normalize(value) {
  return value.replace(/\s+/g, ' ').trim().toLowerCase();
}

const arabicByKey = new Map(Object.entries(arabicCopy).map(([key, value]) => [normalize(key), value]));

function translatePhrase(value) {
  const key = normalize(value);
  if (!key) return value;
  if (arabicByKey.has(key)) return arabicByKey.get(key);

  let translated = value;
  translated = translated.replace(/^(\d+)\s+packets$/i, '$1 حزم');
  translated = translated.replace(/^(\d+)\s+local visit remembered$/i, '$1 زيارة محفوظة محلياً');
  translated = translated.replace(/^(\d+)\s+local visits remembered$/i, '$1 زيارات محفوظة محلياً');
  translated = translated.replace(/^(\d+)\s+pieces?$/i, '$1 قطع');
  translated = translated.replace(/^(\d+)\s+packets$/i, '$1 حزم');
  translated = translated.replace(/^(\d+)\s+bytes?$/i, '$1 بايت');
  translated = translated.replace(/^the receiver notices that packet\s+(\S+)\s+never arrived\.$/i, 'المستقبل يكتشف إن الحزمة $1 ما وصلت.');
  translated = translated.replace(/^a message is waiting to be split into\s+(\S+)\s+smaller pieces\.$/i, 'في رسالة تنتظر تتقسم إلى $1 قطع أصغر.');
  return translated;
}

function saveOriginalText(node) {
  if (!sourceText.has(node)) sourceText.set(node, node.nodeValue);
}

function saveOriginalAttributes(element) {
  if (!sourceAttributes.has(element)) {
    const values = {};
    sourceAttributeKeys.forEach((key) => {
      if (element.hasAttribute(key)) values[key] = element.getAttribute(key);
    });
    sourceAttributes.set(element, values);
  }
}

function translateTextNode(node) {
  saveOriginalText(node);
  const original = sourceText.get(node);
  if (currentLanguage === 'en') {
    if (node.nodeValue !== original) node.nodeValue = original;
    return;
  }

  const leading = original.match(/^\s*/)?.[0] || '';
  const trailing = original.match(/\s*$/)?.[0] || '';
  const value = original.trim().replace(/\s+/g, ' ');
  const translated = translatePhrase(value);
  node.nodeValue = `${leading}${translated}${trailing}`;
}

function translateAttributes(element) {
  saveOriginalAttributes(element);
  const values = sourceAttributes.get(element);
  sourceAttributeKeys.forEach((key) => {
    if (!(key in values)) return;
    const value = currentLanguage === 'en' ? values[key] : translatePhrase(values[key]);
    element.setAttribute(key, value);
  });
}

function apply(root = document) {
  if (!root || !root.nodeType) return;
  const scope = root === document ? document.body : root;
  if (!scope) return;

  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, noscript, textarea')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(translateTextNode);

  const elements = [];
  if (scope.nodeType === Node.ELEMENT_NODE) elements.push(scope);
  scope.querySelectorAll?.('*').forEach((element) => elements.push(element));
  elements.forEach(translateAttributes);
}

function updateDocumentLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.body?.classList.toggle('lang-ar', currentLanguage === 'ar');
  document.body?.classList.toggle('lang-en', currentLanguage === 'en');
  const title = currentLanguage === 'ar'
    ? (document.body?.classList.contains('infrastructure-page') ? 'مختبر البنية التحتية — كيف انبنت الشبكة' : 'قبل TCP — الليلة اللي العالم بدأ يتكلم')
    : (document.body?.classList.contains('infrastructure-page') ? 'Infrastructure Lab — How the Network Was Built' : 'Before TCP — The Night the World Learned to Talk');
  document.title = title;
}

function updateToggle() {
  const toggle = document.querySelector('#languageToggle');
  if (!toggle) return;
  toggle.textContent = currentLanguage === 'ar' ? 'EN' : 'عربي';
  toggle.setAttribute('aria-label', currentLanguage === 'ar' ? 'التبديل إلى English' : 'Switch to Arabic');
}

function setLanguage(language, persist = true) {
  currentLanguage = language === 'en' ? 'en' : 'ar';
  if (persist) {
    try { localStorage.setItem('nightsky-language', currentLanguage); } catch { /* storage can be disabled */ }
  }
  updateDocumentLanguage();
  window.dispatchEvent(new CustomEvent('nightsky:languagechange', { detail: { language: currentLanguage } }));
  apply(document);
  updateToggle();
}

function translateOrOriginal(value) {
  return currentLanguage === 'ar' ? translatePhrase(value) : value;
}

window.NIGHTSKY_I18N = {
  apply,
  setLanguage,
  t: translateOrOriginal,
  get language() { return currentLanguage; },
};

function initialize() {
  const toggle = document.querySelector('#languageToggle');
  if (toggle) {
    toggle.addEventListener('click', () => setLanguage(currentLanguage === 'ar' ? 'en' : 'ar'));
  }
  let saved = null;
  try { saved = localStorage.getItem('nightsky-language'); } catch { /* storage can be disabled */ }
  setLanguage(saved === 'en' ? 'en' : 'ar', false);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize, { once: true });
} else {
  initialize();
}
