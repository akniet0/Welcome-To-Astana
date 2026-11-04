/* =====================================================================
   Visit Astana — all site text in English, Russian and Kazakh.
   Loaded before js/script.js, which reads these objects.
   ===================================================================== */

/* Interface strings, looked up by key with t("key") in script.js.
   {name}-style placeholders are filled in at runtime. */
const uiTranslations = {
    en: {
        brandTitle: "Visit Astana",
        brandSub: "Heart of the Great Steppe",
        bgBtn: "Change Background",
        nightMode: "🌙 Night Mode",
        dayMode: "☀️ Day Mode",
        navHome: "Home",
        navHistory: "History & Culture",
        navAttractions: "Attractions",
        navTours: "Tours",
        heroTitle: "Welcome to Astana",
        heroDesc: "Astana is a unique blend of futuristic architecture, rich nomadic heritage, and warm steppe hospitality.",
        btnLandmarks: "View Landmarks",
        btnBookTour: "Book a Tour",
        btnSupport: "Contact Support",
        factHeading: "Did You Know? Astana Cultural & Architecture Facts",
        historyTitle: "The Story of the Capital",
        attractionsTitle: "Must-See Landmarks in Astana",
        toursTitle: "Available Tour Packages",
        morningGreeting: "☀️ Good Morning from Astana!",
        afternoonGreeting: "🌤️ Good Afternoon! Great time to explore Nurzhol Boulevard.",
        eveningGreeting: "🌙 Good Evening! Enjoy Astana's illuminated skyline.",
        greetCustomPrefix: "Welcome to Astana, ",
        greetGuest: "Welcome to Astana, Honored Guest!",
        timePrefix: "Current Astana Time: ",
        readMoreOpen: "Read More History",
        readMoreClose: "Show Less History",
        dishesLoadedBtn: "All Delicacies Loaded ✓",
        ratedPrefix: "Rated ",
        step1Badge: "Step 1 of 2: Account Details",
        step2Badge: "Step 2 of 2: Tour Selection",
        clearedMsg: "All form fields have been cleared.",
        errName: "Please enter a valid full name (at least 2 letters, no special symbols or numbers).",
        errEmail: "Please enter a valid email address (e.g., name@example.com).",
        errPassSpace: "Password cannot contain spaces.",
        errPassFormat: "Password must be at least 8 characters and include at least one letter and one number.",
        errPassMatch: "Passwords do not match.",
        errMsgShort: "Message must be at least 5 characters long.",
        bookingConfirmed: "Booking confirmed for {name}! Package: {tour}.",
        inquiryThanks: "Thank you, {name}! Your inquiry was received.",
        tourSummary: "Showing {count} package(s) in \"{category}\" — Average Package Price: {price}",
        cat_all: "All Available Tour Packages",
        cat_city: "City & Architecture Tours",
        cat_night: "Evening Skyline Tours",
        cat_nature: "Nature & Resort Excursions",
        wait: "Please wait…",
        copyBtn: "Copy",
        copiedBtn: "Copied",
        copied: "Copied to clipboard!",
        copyFail: "Could not copy. Please select the text manually.",
        ratedToast: "Thanks! You rated {landmark} {stars}",
        shownCount: "Showing {shown} of {total} landmarks",
        noMatch: "No matches found",
        faqStatus: "Matches: {count} (in {questions} of {total} questions)",
        langLabel: "Language"
    },
    ru: {
        brandTitle: "Посетите Астану",
        brandSub: "Сердце Великой Степи",
        bgBtn: "Сменить фон",
        nightMode: "🌙 Ночной режим",
        dayMode: "☀️ Дневной режим",
        navHome: "Главная",
        navHistory: "История и Культура",
        navAttractions: "Достопримечательности",
        navTours: "Туры",
        heroTitle: "Добро пожаловать в Астану",
        heroDesc: "Астана — уникальное сочетание футуристической архитектуры, богатого кочевого наследия и теплого степного гостеприимства.",
        btnLandmarks: "Смотреть локации",
        btnBookTour: "Забронировать тур",
        btnSupport: "Служба поддержки",
        factHeading: "Знаете ли вы? Культурные и архитектурные факты об Астане",
        historyTitle: "История столицы",
        attractionsTitle: "Главные достопримечательности Астаны",
        toursTitle: "Доступные экскурсионные туры",
        morningGreeting: "☀️ Доброе утро из Астаны!",
        afternoonGreeting: "🌤️ Добрый день! Отличное время для прогулки по бульвару Нуржол.",
        eveningGreeting: "🌙 Добрый вечер! Насладитесь вечерней иллюминацией Астаны.",
        greetCustomPrefix: "Добро пожаловать в Астану, ",
        greetGuest: "Добро пожаловать в Астану, уважаемый гость!",
        timePrefix: "Местное время в Астане: ",
        readMoreOpen: "Читать далее историю",
        readMoreClose: "Скрыть подробности",
        dishesLoadedBtn: "Все деликатесы загружены ✓",
        ratedPrefix: "Оценка ",
        step1Badge: "Шаг 1 из 2: Данные аккаунта",
        step2Badge: "Шаг 2 из 2: Выбор тура",
        clearedMsg: "Все поля формы очищены.",
        errName: "Введите корректное имя (минимум 2 буквы, без цифр и спецсимволов).",
        errEmail: "Введите корректный email адрес (например, name@example.com).",
        errPassSpace: "Пароль не должен содержать пробелы.",
        errPassFormat: "Пароль должен содержать минимум 8 символов, хотя бы одну букву и одну цифру.",
        errPassMatch: "Пароли не совпадают.",
        errMsgShort: "Сообщение должно содержать минимум 5 символов.",
        bookingConfirmed: "Бронирование подтверждено для {name}! Тур: {tour}.",
        inquiryThanks: "Спасибо, {name}! Ваш запрос успешно получен.",
        tourSummary: "Показано туров: {count} в категории «{category}» — Средняя стоимость: {price}",
        cat_all: "Все доступные туры",
        cat_city: "Город и архитектура",
        cat_night: "Вечерние туры",
        cat_nature: "Природа и курорты",
        wait: "Пожалуйста, подождите…",
        copyBtn: "Копировать",
        copiedBtn: "Готово",
        copied: "Скопировано в буфер обмена!",
        copyFail: "Не удалось скопировать. Выделите текст вручную.",
        ratedToast: "Спасибо! Ваша оценка: {landmark} {stars}",
        shownCount: "Показано {shown} из {total} мест",
        noMatch: "Совпадений нет",
        faqStatus: "Совпадений: {count} (в {questions} из {total} вопросов)",
        langLabel: "Язык"
    },
    kz: {
        brandTitle: "Астанаға саяхат",
        brandSub: "Ұлы Дала жүрегі",
        bgBtn: "Фонды өзгерту",
        nightMode: "🌙 Түнгі режим",
        dayMode: "☀️ Күндізгі режим",
        navHome: "Басты бет",
        navHistory: "Тарих және Мәдениет",
        navAttractions: "Көрікті жерлер",
        navTours: "Турлар",
        heroTitle: "Астанаға қош келдіңіз",
        heroDesc: "Астана — футуристік сәулет, бай көшпелі мұра мен қонақжайлылықтың бірегей үйлесімі.",
        btnLandmarks: "Көрікті жерлер",
        btnBookTour: "Турға тапсырыс беру",
        btnSupport: "Қолдау қызметі",
        factHeading: "Білесіз бе? Астананың мәдениеті мен сәулеті туралы деректер",
        historyTitle: "Елорда тарихы",
        attractionsTitle: "Астананың басты көрікті жерлері",
        toursTitle: "Қолжетімді тур пакеттері",
        morningGreeting: "☀️ Астанадан қайырлы таң!",
        afternoonGreeting: "🌤️ Қайырлы күн! Нұржол желекжолымен серуендеуге тамаша уақыт.",
        eveningGreeting: "🌙 Қайырлы кеш! Астананың кешкі шамдарын тамашалаңыз.",
        greetCustomPrefix: "Астанаға қош келдіңіз, ",
        greetGuest: "Астанаға қош келдіңіз, құрметті қонақ!",
        timePrefix: "Астана уақыты: ",
        readMoreOpen: "Тарихты толығырақ оқу",
        readMoreClose: "Қысқарту",
        dishesLoadedBtn: "Барлық тағамдар жүктелді ✓",
        ratedPrefix: "Бағасы ",
        step1Badge: "1-қадам (2-ден): Аккаунт деректері",
        step2Badge: "2-қадам (2-ден): Турды таңдау",
        clearedMsg: "Барлық өрістер тазартылды.",
        errName: "Толық аты-жөніңізді дұрыс енгізіңіз (кемінде 2 әріп, сандар мен белгілерсіз).",
        errEmail: "Дұрыс электрондық поштаны енгізіңіз (мысалы, name@example.com).",
        errPassSpace: "Құпиясөзде бос орын болмауы керек.",
        errPassFormat: "Құпиясөз кемінде 8 таңбадан, кемінде бір әріп пен бір саннан тұруы керек.",
        errPassMatch: "Құпиясөздер сәйкес келмейді.",
        errMsgShort: "Хабарлама кемінде 5 таңбадан тұруы керек.",
        bookingConfirmed: "{name} үшін тапсырыс расталды! Тур: {tour}.",
        inquiryThanks: "Рақмет, {name}! Сұранысыңыз қабылданды.",
        tourSummary: "«{category}» санатында {count} тур көрсетілді — Орташа бағасы: {price}",
        cat_all: "Барлық қолжетімді турлар",
        cat_city: "Қала және сәулет турлары",
        cat_night: "Кешкі панорамалық турлар",
        cat_nature: "Табиғат және курорт",
        wait: "Күте тұрыңыз…",
        copyBtn: "Көшіру",
        copiedBtn: "Дайын",
        copied: "Алмасу буферіне көшірілді!",
        copyFail: "Көшіру мүмкін болмады. Мәтінді қолмен белгілеңіз.",
        ratedToast: "Рақмет! Сіздің бағаңыз: {landmark} {stars}",
        shownCount: "{total} орынның {shown} көрсетілді",
        noMatch: "Сәйкестік табылмады",
        faqStatus: "Сәйкестік: {count} ({total} сұрақтың {questions}-інде)",
        langLabel: "Тіл"
    }
};

/* Page text: the English text found in the HTML → its RU / KZ version. */
const fullPageTextMap = {
    // Home Page
    "Greet Me": { ru: "Поприветствовать", kz: "Сәлемдесу" },
    "Check Local Time": { ru: "Узнать время", kz: "Уақытты тексеру" },
    "Discover Random Fact": { ru: "Случайный факт", kz: "Кездейсоқ дерек" },
    "Astana Gallery in 9 Frames": { ru: "Галерея Астаны в 9 кадрах", kz: "Астана галереясы 9 кадрда" },
    "1. Baiterek Tower": { ru: "1. Монумент Байтерек", kz: "1. Бәйтерек монументі" },
    "Symbol of modern Kazakhstan": { ru: "Символ современного Казахстана", kz: "Қазіргі Қазақстанның символы" },
    "2. Khan Shatyr": { ru: "2. Хан Шатыр", kz: "2. Хан Шатыр" },
    "World's largest tensile tent": { ru: "Крупнейший шатер в мире", kz: "Әлемдегі ең үлкен шатыр" },
    "3. Hazret Sultan Mosque": { ru: "3. Мечеть Хазрет Султан", kz: "3. Әзірет Сұлтан мешіті" },
    "Grand oriental marble mosque": { ru: "Величественная белокаменная мечеть", kz: "Ақ мәрмәрдан салынған зәулім мешіт" },
    "4. Nur-Alem": { ru: "4. Сфера Нур-Алем", kz: "4. Нұр-Әлем сферасы" },
    "The iconic EXPO sphere": { ru: "Легендарная сфера ЭКСПО", kz: "ЭКСПО-ның бірегей сферасы" },
    "5. Astana by Night": { ru: "5. Ночная Астана", kz: "5. Түнгі Астана" },
    "Lively illuminated skyline": { ru: "Яркая вечерняя панорама", kz: "Кешкі жарқыраған панорама" },
    "6. Burabay Nature": { ru: "6. Природа Бурабая", kz: "6. Бурабай табиғаты" },
    "Kazakhstan's natural forest resort": { ru: "Природный лесной курорт Казахстана", kz: "Қазақстанның табиғи орманды курорты" },
    "7. City Center": { ru: "7. Центр города", kz: "7. Қала орталығы" },
    "Nurzhol Boulevard and open plazas": { ru: "Бульвар Нуржол и площади", kz: "Нұржол желекжолы мен алаңдар" },
    "8. Observation Sky View": { ru: "8. Панорамный вид", kz: "8. Панорамалық көрініс" },
    "Panoramic city panorama": { ru: "Обзорная панорама столицы", kz: "Елорданың биіктен көрінісі" },
    "9. Indoor Oasis": { ru: "9. Крытый оазис", kz: "9. Жабық оазис" },
    "Year-round tropical gardens": { ru: "Тропические сады круглый год", kz: "Жыл бойы жасыл тропикалық бақ" },
    "Featured Highlights": { ru: "Избранные локации", kz: "Таңдаулы орындар" },
    "Baiterek Tower": { ru: "Монумент Байтерек", kz: "Бәйтерек монументі" },
    "Ascend the iconic golden sphere for a bird's-eye view across the capital's central axis.": {
        ru: "Поднимитесь на золотую сферу, чтобы увидеть панораму центральной оси столицы с высоты птичьего полета.",
        kz: "Елорданың орталық көрінісін биіктен тамашалау үшін алтын шарға көтеріліңіз."
    },
    "Khan Shatyr": { ru: "Хан Шатыр", kz: "Хан Шатыр" },
    "A monumental transparent tent featuring shopping, an indoor tropical beach, and entertainment.": {
        ru: "Монументальный прозрачный шатер с магазинами, крытым тропическим пляжем и развлечениями.",
        kz: "Сауда орталығы, жабық тропикалық жағажайы және ойын-сауық алаңы бар алып мөлдір шатыр."
    },
    "Hazret Sultan": { ru: "Хазрет Султан", kz: "Әзірет Сұлтан" },
    "Marvel at pure white marble domes and traditional Kazakh decorative craftsmanship.": {
        ru: "Полюбуйтесь белоснежными мраморными куполами и традиционным казахским орнаментальным искусством.",
        kz: "Ақ мәрмәр күмбездер мен дәстүрлі қазақ ою-өрнек өнеріне тәнті болыңыз."
    },
    "Learn More": { ru: "Подробнее", kz: "Толығырақ" },
    "Frequently Asked Questions": { ru: "Часто задаваемые вопросы", kz: "Жиі қойылатын сұрақтар" },
    "Click any question to view details:": { ru: "Нажмите на любой вопрос, чтобы увидеть ответ:", kz: "Толық ақпарат алу үшін сұрақты басыңыз:" },
    "What is the best time to visit Astana?": { ru: "Какое лучшее время для посещения Астаны?", kz: "Астанаға барудың ең қолайлы уақыты қайсы?" },
    "May through September provides pleasant warm weather, outdoor cafes, and open city fountains.": {
        ru: "С мая по сентябрь стоит приятная теплая погода, работают летние террасы и городские фонтаны.",
        kz: "Мамыр мен қыркүйек аралығында ауа райы жылы болып, жазғы дәмханалар мен субұрқақтар жұмыс істейді."
    },
    "How do public buses work for tourists?": { ru: "Как работает общественный транспорт для туристов?", kz: "Туристер үшін қоғамдық автобустар қалай жұмыс істейді?" },
    "Buses accept contactless card and QR payments. Bus 10 runs directly from the airport through Baiterek Tower.": {
        ru: "Автобусы принимают бесконтактную оплату картой и QR. Маршрут №10 идет прямо из аэропорта через Байтерек.",
        kz: "Автобустарда банк картасымен және QR арқылы төлеуге болады. №10 автобус әуежайдан Бәйтерекке дейін тікелей барады."
    },
    "Is English spoken at major landmarks?": { ru: "Говорят ли на английском на главных объектах?", kz: "Негізгі нысандарда ағылшын тілінде қызмет көрсетіле ме?" },
    "Yes, major sites like Baiterek, EXPO Nur-Alem, and tourist kiosks offer services in Kazakh, Russian, and English.": {
        ru: "Да, крупные объекты, включая Байтерек и ЭКСПО Нур-Алем, обслуживают гостей на казахском, русском и английском языках.",
        kz: "Иә, Бәйтерек, ЭКСПО Нұр-Әлем сияқты ірі нысандар қазақ, орыс және ағылшын тілдерінде қызмет көрсетеді."
    },
    "Contact Visitor Helpdesk": { ru: "Связаться со службой поддержки", kz: "Туристерді қолдау қызметі" },
    "Your Name": { ru: "Ваше имя", kz: "Аты-жөніңіз" },
    "Your Email": { ru: "Ваш Email", kz: "Электрондық поштаңыз" },
    "Message": { ru: "Сообщение", kz: "Хабарлама" },
    "Send Inquiry": { ru: "Отправить запрос", kz: "Сұранысты жіберу" },

    // History Page
    "From an 1830 steppe outpost to an internationally recognized center of diplomatic dialogue and futuristic architecture, explore how Astana evolved across two centuries.": {
        ru: "От степного укрепления 1830 года до всемирно признанного центра дипломатии и футуристической архитектуры — узнайте, как развивалась Астана.",
        kz: "1830 жылғы дала бекінісінен бастап халықаралық дипломатия мен футуристік сәулет орталығына дейінгі Астананың екі ғасырлық даму тарихымен танысыңыз."
    },
    "Akmola Fortress": { ru: "Крепость Акмола", kz: "Ақмола бекінісі" },
    "Established on the picturesque banks of the Ishim River, growing rapidly into a lively trading crossroads along historic caravan routes.": {
        ru: "Основана на живописном берегу реки Ишим и быстро превратилась в оживленный торговый узел на пересечении караванных путей.",
        kz: "Есіл өзенінің көркем жағасында іргесі қаланып, тарихи керуен жолдарының бойындағы ірі сауда орталығына айналды."
    },
    "Official Capital Relocation": { ru: "Официальный перенос столицы", kz: "Елорданың ресми ауысуы" },
    "The national capital was officially transferred from Almaty to Akmola on December 10, 1997, initiating one of modern history's boldest urban architectural projects.": {
        ru: "10 декабря 1997 года столица была официально перенесена из Алматы в Акмолу, что дало старт масштабному градостроительному проекту.",
        kz: "1997 жылы 10 желтоқсанда ел астанасы Алматыдан Ақмолаға ресми түрде көшіріліп, заманауи тарихтағы ең ірі сәулет жобасы басталды."
    },
    'UNESCO "City of Peace"': { ru: "Премия ЮНЕСКО «Город мира»", kz: "ЮНЕСКО «Бейбітшілік қаласы»" },
    "Awarded this title in recognition of its peaceful inter-ethnic harmony, cultural dialogue, and rapid international diplomatic role.": {
        ru: "Удостоена этого звания за укрепление межэтнического согласия, культурного диалога и дипломатического сотрудничества.",
        kz: "Ұлтаралық татулық, мәдени диалог және халықаралық дипломатиядағы рөлі үшін осы мәртебелі атаққа ие болды."
    },
    'EXPO 2017 "Future Energy"': { ru: "ЭКСПО-2017 «Энергия будущего»", kz: "ЭКСПО-2017 «Болашақ энергиясы»" },
    "Astana welcomed millions of global visitors and over 115 countries, unveiling the landmark Nur-Alem sphere and green technology district.": {
        ru: "Астана приняла миллионы гостей и более 115 стран, открыв знаменитую сферу Нур-Алем и квартал зеленых технологий.",
        kz: "Астана миллиондаған қонақтар мен 115-тен астам елді қарсы алып, әйгілі Нұр-Әлем сферасы мен жасыл технологиялар аумағын ашты."
    },
    "Today": { ru: "Сегодня", kz: "Бүгінгі таңда" },
    "Smart Hub of Central Asia": { ru: "Умный хаб Центральной Азии", kz: "Орталық Азияның смарт-орталығы" },
    "Home to Astana IT University, the Astana International Financial Centre (AIFC), and world-renowned cultural theaters.": {
        ru: "Дом для Astana IT University, Международного финансового центра «Астана» (МФЦА) и театров мирового уровня.",
        kz: "Astana IT University, «Астана» халықаралық қаржы орталығы (АХҚО) және әлемдік деңгейдегі мәдени театрлар орналасқан орда."
    },
    "Read More History": { ru: "Читать далее историю", kz: "Тарихты толығырақ оқу" },
    "Flavors of the Steppe": { ru: "Вкусы Великой Степи", kz: "Ұлы Дала дәмі" },
    "Load Traditional Delicacies": { ru: "Загрузить традиционные блюда", kz: "Дәстүрлі тағамдарды жүктеу" },
    "Hearty, comforting dishes made for family feasts and cold winters:": {
        ru: "Сытные традиционные блюда, созданные для семейных застолий и морозных зим:",
        kz: "Отбасылық дастарқан мен қысқы аязға арналған тойымды ұлттық тағамдар:"
    },
    "Beshbarmak": { ru: "Бешбармак", kz: "Бесбармақ" },
    "Tender cuts served over broad homemade pasta ribbons with rich, savory onion broth.": {
        ru: "Нежное мясо, подаваемое на тонких сочнях домашнего теста с ароматным луковым бульоном.",
        kz: "Дәмді тұздық пен жайма нанның үстіне салынып берілетін асылған ет."
    },
    "Baursaks": { ru: "Баурсаки", kz: "Бауырсақ" },
    "Golden, airy fried dough spheres served steaming hot alongside milk tea.": {
        ru: "Золотистые воздушные кусочки теста, подаваемые горячими к чаю с молоком.",
        kz: "Сүтті шаймен бірге ыстықтай ұсынылатын алтын түстес, жұмсақ пісірілген нан."
    },
    "Qurt & Qymyz": { ru: "Курт и Кумыс", kz: "Құрт пен Қымыз" },
    "Sun-dried tangy cheese curds and nourishing fermented milk drinks of the nomads.": {
        ru: "Высушенный соленый творожный сыр и целебный кисломолочный напиток кочевников.",
        kz: "Күнге кептірілген дәмді құрт пен көшпенділердің шипалы сусыны — сары қымыз."
    },

    // Attractions Page
    "Astana is world-renowned for its visionary skyline and monuments reflecting Kazakh identity, history, and architectural ambition. Click the stars on any landmark to leave your visitor rating!": {
        ru: "Астана славится своим футуристическим обликом и монументами, отражающими казахскую идентичность. Нажмите на звезды, чтобы оценить локацию!",
        kz: "Астана қазақ болмысы мен тарихын бейнелейтін бірегей сәулетімен танымал. Кез келген нысанды бағалау үшін жұлдызшаларды басыңыз!"
    },
    "Historic & Spiritual Icons": { ru: "Исторические и духовные символы", kz: "Тарихи және рухани нысандар" },
    "Top Pick": { ru: "Выбор туристов", kz: "Үздік таңдау" },
    "Architecture": { ru: "Архитектура", kz: "Сәулет" },
    "Heritage": { ru: "Наследие", kz: "Мұра" },
    "The symbol of the capital, representing the mythical Tree of Life where the sacred bird Samruk laid a golden egg.": {
        ru: "Символ столицы, олицетворяющий мифическое Древо Жизни, в кроне которого священная птица Самрук отложила золотое яйцо.",
        kz: "Қасиетті Самұрық құсы алтын жұмыртқа салған аңыздағы Өмір бәйтерегін бейнелейтін елорда символы."
    },
    "Designed by Norman Foster, this is the world's largest tensile structure featuring retail and an indoor tropical beach.": {
        ru: "Спроектированный Норманом Фостером крупнейший в мире шатер с торговыми галереями и крытым тропическим пляжем.",
        kz: "Норман Фостер жобалаған, ішінде сауда орындары мен тропикалық жағажайы бар әлемдегі ең ірі шатыр."
    },
    "Hazret Sultan Mosque": { ru: "Мечеть Хазрет Султан", kz: "Әзірет Сұлтан мешіті" },
    "One of the largest mosques in Central Asia, featuring classic oriental architecture with traditional Kazakh decorative motifs.": {
        ru: "Одна из крупнейших мечетей Центральной Азии, сочетающая классическое восточное зодчество с казахскими узорами.",
        kz: "Классикалық шығыс сәулеті мен дәстүрлі қазақ ою-өрнегі үйлескен Орталық Азиядағы ең ірі мешіттердің бірі."
    },
    "Rate landmark": { ru: "Оцените объект", kz: "Баға беріңіз" },
    "Interactive Landmark Photo Explorer": { ru: "Интерактивная фотогалерея достопримечательностей", kz: "Көрікті жерлердің интерактивті фотогалереясы" },
    "Click any thumbnail below to dynamically update the main display photograph:": {
        ru: "Нажмите на любую миниатюру ниже, чтобы переключить главное фото:",
        kz: "Негізгі фотосуретті ауыстыру үшін төмендегі кез келген суретті басыңыз:"
    },
    "Baiterek Tower — Golden Observation Sphere on Nurzhol Boulevard": {
        ru: "Монумент Байтерек — Золотая обзорная сфера на бульваре Нуржол",
        kz: "Бәйтерек монументі — Нұржол желекжолындағы алтын шар"
    },
    "Modern Marvels & City Panoramas": { ru: "Современные чудеса и панорамы города", kz: "Заманауи ғажайыптар мен қала панорамасы" },
    "Nur-Alem: Museum of Future Energy": { ru: "Нур-Алем: Музей энергии будущего", kz: "Нұр-Әлем: Болашақ энергиясы музейі" },
    "Standing at 100 meters in diameter, Nur-Alem is the world's largest spherical building. Originally the centerpiece of EXPO 2017, its eight immersive floors showcase innovations in space, solar, wind, and kinetic energy.": {
        ru: "Здание высотой 100 метров является крупнейшей сферой в мире. Восемь интерактивных этажей посвящены энергии космоса, солнца, ветра и воды.",
        kz: "Биіктігі 100 метрлік Нұр-Әлем — әлемдегі ең үлкен сфералық ғимарат. Оның сегіз қабаты ғарыш, күн, жел және кинетикалық энергия инновацияларын көрсетеді."
    },
    "EXPO District": { ru: "Район ЭКСПО", kz: "ЭКСПО аумағы" },
    "Interactive Science": { ru: "Интерактивная наука", kz: "Интерактивті ғылым" },
    "Glass Walkway": { ru: "Стеклянный мост", kz: "Шыны көпір" },
    "City Vistas & Sunset Photography": { ru: "Городские виды и закаты", kz: "Қала көріністері мен күн батуы" },
    "Astana's wide boulevards and open steppe horizon produce sunset skies. Experience sweeping vistas from observation decks across the Ishim River, with viewpoints overlooking illuminated bridges at twilight.": {
        ru: "Широкие проспекты Астаны и открытый горизонт дарят невероятные закаты. Насладитесь видом на набережную реки Ишим и подсвеченные мосты.",
        kz: "Астананың кең даңғылдары мен ашық көкжиегінде күннің батуы ерекше көрінеді. Есіл өзенінің жағалауы мен жарқыраған көпірлерді тамашалаңыз."
    },
    "Golden Hour": { ru: "Золотой час", kz: "Алтын сағат" },
    "Ishim Riverfront": { ru: "Набережная Ишима", kz: "Есіл жағалауы" },
    "Night Illumination": { ru: "Ночная подсветка", kz: "Түнгі иллюминация" },
    "Visitor Information & Transport": { ru: "Информация для туристов и транспорт", kz: "Саяхатшыларға ақпарат және көлік" },
    "City Tourism Attraction Pass": { ru: "Туристическая карта City Pass", kz: "City Pass туристік картасы" },
    "Save up to 20% on entrance tickets by securing an official Astana City Pass. Includes fast-track admission to Baiterek, Nur-Alem, and the National Museum.": {
        ru: "Сэкономьте до 20% на билетах с официальной картой Astana City Pass. Включает быстрый проход в Байтерек, Нур-Алем и Национальный музей.",
        kz: "Ресми Astana City Pass картасымен билеттерге 20%-ға дейін үнемдеңіз. Бәйтерек, Нұр-Әлем және Ұлттық музейге кезексіз кіру кіреді."
    },
    "Check Tour Combinations": { ru: "Посмотреть пакеты туров", kz: "Тур пакеттерін көру" },
    "Getting Around": { ru: "Передвижение по городу", kz: "Қала ішінде қатынау" },
    "Buses accept contactless card payments (QR code and debit card).": {
        ru: "В автобусах доступна бесконтактная оплата (QR-код и банковские карты).",
        kz: "Автобустарда контактісіз төлем (QR-код және банк картасы) қабылданады."
    },

    // Tours Page
    "Explore Astana's futuristic skyline, historic avenues, and natural wonders. Filter packages by category or book your guide below.": {
        ru: "Исследуйте футуристические небоскребы, исторические проспекты и природные красоты Астаны. Выберите категорию тура и забронируйте экскурсию ниже.",
        kz: "Астананың футуристік келбетін, тарихи даңғылдары мен табиғат ғажайыптарын зерттеңіз. Санат бойынша сүзгіден өткізіп, гидке тапсырыс беріңіз."
    },
    "Tour Directory & Schedules": { ru: "Каталог и расписание туров", kz: "Турлар каталогы мен кестесі" },
    "All Tours": { ru: "Все туры", kz: "Барлық турлар" },
    "City & Architecture": { ru: "Город и архитектура", kz: "Қала және сәулет" },
    "Evening Skyline": { ru: "Вечерняя панорама", kz: "Кешкі панорама" },
    "Nature & Resort": { ru: "Природа и курорт", kz: "Табиғат және курорт" },
    "Preview": { ru: "Фото", kz: "Фото" },
    "Tour Package": { ru: "Пакет тура", kz: "Тур пакеті" },
    "Duration": { ru: "Длительность", kz: "Ұзақтығы" },
    "Highlights": { ru: "Главные локации", kz: "Негізгі орындар" },
    "Price": { ru: "Цена", kz: "Бағасы" },
    "Book a Tour & Register Account": { ru: "Бронирование тура и регистрация", kz: "Турға тапсырыс беру және тіркелу" },
    "Full Name *": { ru: "Полное имя *", kz: "Толық аты-жөніңіз *" },
    "Email Address *": { ru: "Email адрес *", kz: "Электрондық пошта *" },
    "Create Password (min. 8 characters) *": { ru: "Создайте пароль (мин. 8 символов) *", kz: "Құпиясөз ойлап табыңыз (кемінде 8 таңба) *" },
    "Confirm Password *": { ru: "Подтвердите пароль *", kz: "Құпиясөзді растаңыз *" },
    "Next: Tour Preferences →": { ru: "Далее: Выбор тура →", kz: "Келесі: Турды таңдау →" },
    "Reset All Inputs": { ru: "Очистить все поля", kz: "Барлық өрісті тазарту" },
    "Select Tour": { ru: "Выберите тур", kz: "Турды таңдаңыз" },
    "Preferred Time": { ru: "Предпочтительное время", kz: "Қолайлы уақыт" },
    "Morning (10:00 AM)": { ru: "Утро (10:00)", kz: "Таңертең (10:00)" },
    "Evening (6:00 PM)": { ru: "Вечер (18:00)", kz: "Кеш (18:00)" },
    "← Back": { ru: "← Назад", kz: "← Артқа" },
    "Submit Booking": { ru: "Подтвердить бронь", kz: "Тапсырысты растау" },
    "Booking Notice": { ru: "Уведомление о бронировании", kz: "Брондау туралы ескерту" },
    "Book day tours 24 hours in advance during peak summer seasons to ensure guide availability.": {
        ru: "Бронируйте дневные туры за 24 часа в летний сезон, чтобы гарантировать наличие гида.",
        kz: "Жазғы маусымда гидтің бос болуын қамтамасыз ету үшін күндізгі турларға 24 сағат бұрын тапсырыс беріңіз."
    },
    "Languages Available": { ru: "Доступные языки", kz: "Қолжетімді тілдер" },
    "Guided excursions can be conducted in Kazakh, Russian, and English upon request.": {
        ru: "Экскурсии с гидом проводятся на казахском, русском и английском языках по запросу.",
        kz: "Гидпен экскурсиялар сұраныс бойынша қазақ, орыс және ағылшын тілдерінде жүргізіледі."
    },
    "Included Amenities": { ru: "Что включено в тур", kz: "Турға не кіреді" },
    "Bottled mineral water": { ru: "Бутилированная вода", kz: "Бөтелкедегі ауыз су" },
    "Museum admission tickets": { ru: "Входные билеты в музеи", kz: "Музей билеттері" },
    "Certified local guide": { ru: "Сертифицированный местный гид", kz: "Сертификатталған жергілікті гид" },

    // Assignment 6 additions
    "Astana in Numbers": { ru: "Астана в цифрах", kz: "Астана сандармен" },
    "Year Akmola fortress was founded": { ru: "Год основания крепости Акмола", kz: "Ақмола бекінісі құрылған жыл" },
    "Residents call Astana home": { ru: "Жителей называют Астану домом", kz: "Тұрғын Астананы үйім дейді" },
    "Height of Baiterek's observation deck": { ru: "Высота смотровой площадки Байтерека", kz: "Бәйтерек көру алаңының биіктігі" },
    "Worshippers fit in Hazret Sultan": { ru: "Верующих вмещает Хазрет Султан", kz: "Әзірет Сұлтан сыйдыратын адам саны" },
    "How cold does Astana get in winter?": { ru: "Насколько холодно в Астане зимой?", kz: "Астанада қыста қаншалықты суық болады?" },
    "Winter temperatures often drop below -25°C with strong steppe winds. Pack a warm coat, hat, and gloves, and plan indoor stops like Khan Shatyr.": {
        ru: "Зимой температура часто опускается ниже -25°C, дуют сильные степные ветры. Возьмите теплую куртку, шапку и перчатки и планируйте остановки в помещениях, например в Хан Шатыре.",
        kz: "Қыста температура жиі -25°C-тан төмен түсіп, қатты дала желі соғады. Жылы күрте, бас киім мен қолғап алып, Хан Шатыр сияқты жабық орындарға аялдауды жоспарлаңыз."
    },
    "Which currency should I use in Astana?": { ru: "Какой валютой пользоваться в Астане?", kz: "Астанада қандай валюта қолданылады?" },
    "The local currency is the Kazakhstani tenge (KZT). Bank cards and QR payments work almost everywhere, including taxis and buses.": {
        ru: "Местная валюта — казахстанский тенге (KZT). Банковские карты и QR-оплата работают почти везде, включая такси и автобусы.",
        kz: "Жергілікті валюта — қазақстандық теңге (KZT). Банк карталары мен QR төлемі барлық жерде, соның ішінде такси мен автобустарда қабылданады."
    },
    "How do I get from the airport to the city center?": { ru: "Как добраться из аэропорта в центр города?", kz: "Әуежайдан қала орталығына қалай жетуге болады?" },
    "Take bus 10 or 12, or order a taxi through an app. The ride to Baiterek Tower takes about 25 minutes.": {
        ru: "Сядьте на автобус №10 или №12 либо закажите такси через приложение. Дорога до Байтерека занимает около 25 минут.",
        kz: "№10 немесе №12 автобусқа отырыңыз не қосымша арқылы такси шақырыңыз. Бәйтерекке дейін шамамен 25 минут жүресіз."
    },
    "Find a Landmark": { ru: "Найти достопримечательность", kz: "Көрікті жерді табу" },
    "Speak Like a Local": { ru: "Говорите как местный", kz: "Жергілікті тұрғындай сөйлеңіз" },
    "Emergency & Useful Numbers": { ru: "Экстренные и полезные номера", kz: "Шұғыл және пайдалы нөмірлер" }
};

/* Input placeholders: English → RU / KZ. */
const placeholderMap = {
    "Enter your name for a custom greeting": { ru: "Введите ваше имя для приветствия", kz: "Сәлемдесу үшін есіміңізді енгізіңіз" },
    "Enter name": { ru: "Введите имя", kz: "Есіміңізді енгізіңіз" },
    "Enter email": { ru: "Введите email", kz: "Email енгізіңіз" },
    "Ask a question...": { ru: "Задайте вопрос...", kz: "Сұрағыңызды жазыңыз..." },
    "Name": { ru: "Имя", kz: "Аты-жөніңіз" },
    "Enter password": { ru: "Введите пароль", kz: "Құпиясөзді енгізіңіз" },
    "Re-enter password": { ru: "Повторите пароль", kz: "Құпиясөзді қайталаңыз" },
    "Search the FAQ (e.g. bus, weather, English)": { ru: "Поиск по вопросам (например: автобус, погода)", kz: "Сұрақтардан іздеу (мысалы: автобус, ауа райы)" },
    "Search landmarks, e.g. Baiterek, museum, park": { ru: "Поиск: Байтерек, музей, парк...", kz: "Іздеу: Бәйтерек, мұражай, саябақ..." }
};

/* "Did you know?" facts on the Home page. */
const astanaFacts = {
    en: [
        "Baiterek Tower stands at 97 meters to the observation deck, symbolizing 1997—the year Astana became the capital of Kazakhstan.",
        "Khan Shatyr is listed in the Guinness World Records as the tallest tensile structure in the world at 150 meters.",
        "Nur-Alem is a complete sphere with a diameter of 80 meters and height of 100 meters, powered by solar and wind energy.",
        "Astana's master plan was designed by renowned Japanese metabolism architect Kisho Kurokawa.",
        "The Ishim River divides the city into the historic Right Bank and the futuristic administrative Left Bank."
    ],
    ru: [
        "Высота смотровой площадки Байтерека составляет 97 метров, что символизирует 1997 год — год переноса столицы в Астану.",
        "Хан Шатыр занесен в Книгу рекордов Гиннесса как самое высокое шатровое сооружение в мире (150 метров).",
        "Сфера Нур-Алем диаметром 80 метров и высотой 100 метров использует солнечные и ветровые генераторы энергии.",
        "Генеральный план застройки Астаны был разработан знаменитым японским архитектором Кисе Курокавой.",
        "Река Ишим делит столицу на исторический Правый берег и современный административный Левый берег."
    ],
    kz: [
        "Бәйтерек мұнарасының бақылау алаңына дейінгі биіктігі 97 метр, бұл 1997 жылы Астананың елорда болған жылын білдіреді.",
        "Хан Шатыр 150 метр биіктігімен әлемдегі ең биік шатырлы құрылыс ретінде Гиннестің рекордтар кітабына енген.",
        "Диаметрі 80 метр, биіктігі 100 метр болатын Нұр-Әлем сферасы күн мен жел энергиясын пайдаланады.",
        "Астананың бас жоспарын әйгілі жапон сәулетшісі Кисе Курокава жобалаған.",
        "Есіл өзені қаланы тарихи Оң жағалау мен заманауи әкімшілік Сол жағалауға бөледі."
    ]
};

/* Extra dishes added by "Load Traditional Delicacies" on the History page. */
const extraDishes = [
    {
        image: "images/besh.jpg",
        name: { en: "Kazy & Shuzhuk", ru: "Казы и Шужук", kz: "Қазы мен Шұжық" },
        description: {
            en: "Traditional seasoned horsemeat sausages prized as a centerpiece on festive dastarkhan tables.",
            ru: "Традиционные деликатесы из конины, которые являются главным украшением праздничного дастархана.",
            kz: "Мерекелік дастарқанның басты сәні саналатын дәстүрлі жылқы етінен жасалған қазы мен шұжық."
        }
    },
    {
        image: "images/baursak.jpg",
        name: { en: "Zhent & Talkan", ru: "Жент и Талкан", kz: "Жент пен Талқан" },
        description: {
            en: "Rich nomadic dessert crafted from toasted millet, honey, butter, and crushed raisins.",
            ru: "Сытный кочевой десерт из обжаренного проса, меда, топленого масла и изюма.",
            kz: "Қуырылған тары, бал, сары май және мейізден дайындалған құнарлы ұлттық тәтті тағам."
        }
    },
    {
        image: "images/qymyz.jpg",
        name: { en: "Shubat", ru: "Шубат", kz: "Шұбат" },
        description: {
            en: "Refreshing fermented camel milk packed with vitamins and traditional steppe heritage.",
            ru: "Освежающее ферментированное верблюжье молоко, богатое витаминами и полезными свойствами.",
            kz: "Дәрумендерге бай, шипалы әрі сергітетін дәстүрлі түйе сүті — шұбат."
        }
    }
];

/* Tour packages shown in the table on the Tours page. */
const astanaTours = [
    {
        id: "arch",
        category: "city",
        priceKzt: 12000,
        image: "images/astana-architecture.jpg",
        title: { en: "Astana Architecture", ru: "Архитектура Астаны", kz: "Астана сәулеті" },
        duration: { en: "4 Hours", ru: "4 часа", kz: "4 сағат" },
        highlights: {
            en: "Baiterek Tower, Khan Shatyr, Palace of Peace",
            ru: "Байтерек, Хан Шатыр, Дворец мира и согласия",
            kz: "Бәйтерек, Хан Шатыр, Бейбітшілік және келісім сарайы"
        }
    },
    {
        id: "night",
        category: "night",
        priceKzt: 8000,
        image: "images/tour-night.jpg",
        title: { en: "Astana by Night", ru: "Вечерняя Астана", kz: "Түнгі Астана" },
        duration: { en: "2.5 Hours", ru: "2.5 часа", kz: "2.5 сағат" },
        highlights: {
            en: "Illuminated bridges, Ishim riverfront, EXPO sphere",
            ru: "Подсвеченные мосты, набережная Ишима, сфера ЭКСПО",
            kz: "Жарқыраған көпірлер, Есіл жағалауы, ЭКСПО сферасы"
        }
    },
    {
        id: "burabay",
        category: "nature",
        priceKzt: 28000,
        image: "images/tour-burabay.jpg",
        title: { en: "Burabay Day Trip", ru: "Тур в Бурабай на день", kz: "Бурабайға күндізгі тур" },
        duration: { en: "9 Hours", ru: "9 часов", kz: "9 сағат" },
        highlights: {
            en: "Lake Burabay, Okzhetpes Rock, pine hiking trails",
            ru: "Озеро Бурабай, скала Окжетпес, сосновые тропы",
            kz: "Бурабай көлі, Оқжетпес жартасы, қарағайлы орман"
        }
    },
    {
        id: "expo",
        category: "city",
        priceKzt: 10000,
        image: "images/nuralem.jpg",
        title: { en: "EXPO & Smart City Innovation", ru: "ЭКСПО и Умный город", kz: "ЭКСПО және Ақылды қала" },
        duration: { en: "3 Hours", ru: "3 часа", kz: "3 сағат" },
        highlights: {
            en: "Nur-Alem Sphere, AIFC FinTech Hub, Congress Center",
            ru: "Сфера Нур-Алем, технопарк МФЦА, Конгресс-центр",
            kz: "Нұр-Әлем сферасы, АХҚО хабы, Конгресс-орталық"
        }
    }
];
