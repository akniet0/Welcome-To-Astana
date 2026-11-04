let audioCtx = null;

function playUiSound(type = "click") {
    try {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContextClass();
        }
        if (audioCtx.state === "suspended") {
            audioCtx.resume();
        }

        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === "success") {
            oscillator.type = "triangle";
            oscillator.frequency.setValueAtTime(523.25, now);
            oscillator.frequency.setValueAtTime(659.25, now + 0.08);
            gainNode.gain.setValueAtTime(0.12, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
            oscillator.start(now);
            oscillator.stop(now + 0.25);
        } else {
            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(440, now);
            gainNode.gain.setValueAtTime(0.08, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
            oscillator.start(now);
            oscillator.stop(now + 0.09);
        }
    } catch (err) {
        // Ignore audio errors if browser blocks autoplay
    }
}

function animateElementPop(element) {
    if (!element) return;
    element.style.transition = "transform 0.22s ease";
    element.style.transform = "scale(1.04)";
    setTimeout(function () {
        element.style.transform = "scale(1)";
    }, 220);
}


let currentLang = localStorage.getItem("astanaLang") || "en";

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
        errMsgShort: "Message must be at least 5 characters long."
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
        errMsgShort: "Сообщение должно содержать минимум 5 символов."
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
        errMsgShort: "Хабарлама кемінде 5 таңбадан тұруы керек."
    }
};

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


function updateDateTime() {
    const timeDisplay = document.getElementById("live-datetime");
    if (!timeDisplay) return;

    const now = new Date();
    const localeMap = { en: "en-US", ru: "ru-RU", kz: "kk-KZ" };
    timeDisplay.textContent = now.toLocaleString(localeMap[currentLang] || "en-US", {
        dateStyle: "medium",
        timeStyle: "medium"
    });
}
setInterval(updateDateTime, 1000);
updateDateTime();

function setTimeOfDayGreeting() {
    const greetingBadge = document.getElementById("time-of-day-greeting");
    if (!greetingBadge) return;

    const hour = new Date().getHours();
    const dict = uiTranslations[currentLang] || uiTranslations.en;
    let message = "";

    switch (true) {
        case (hour >= 5 && hour < 12):
            message = dict.morningGreeting;
            break;
        case (hour >= 12 && hour < 18):
            message = dict.afternoonGreeting;
            break;
        default:
            message = dict.eveningGreeting;
            break;
    }
    greetingBadge.textContent = message;
}

const bgColorButton = document.getElementById("change-bg-btn");
if (bgColorButton) {
    const colors = ["#faf5ee", "#f0f4f1", "#fdf6e2", "#f5e6d3", "#e8eff5"];
    let colorIndex = 0;

    bgColorButton.addEventListener("click", function () {
        playUiSound("click");
        document.body.classList.remove("dark-theme");
        localStorage.setItem("astanaTheme", "light");
        updateThemeButtonText();
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
        animateElementPop(bgColorButton);
    });
}

const themeToggleBtn = document.getElementById("theme-toggle-btn");

function updateThemeButtonText() {
    if (!themeToggleBtn) return;
    const isDark = document.body.classList.contains("dark-theme");
    const dict = uiTranslations[currentLang] || uiTranslations.en;
    themeToggleBtn.textContent = isDark ? dict.dayMode : dict.nightMode;
}

function applyThemeState(isDark) {
    if (isDark) {
        document.body.classList.add("dark-theme");
        document.body.style.backgroundColor = "";
    } else {
        document.body.classList.remove("dark-theme");
    }
    updateThemeButtonText();
}

if (localStorage.getItem("astanaTheme") === "dark") {
    applyThemeState(true);
} else {
    applyThemeState(false);
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
        playUiSound("click");
        const isDarkNow = !document.body.classList.contains("dark-theme");
        applyThemeState(isDarkNow);
        localStorage.setItem("astanaTheme", isDarkNow ? "dark" : "light");
        animateElementPop(themeToggleBtn);
    });
}

const navLinks = document.querySelectorAll("#keyboard-nav-menu .nav-link");
if (navLinks.length > 0) {
    navLinks.forEach(function (link, index) {
        link.addEventListener("keydown", function (event) {
            if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                const nextIndex = (index + 1) % navLinks.length;
                navLinks[nextIndex].focus();
                playUiSound("click");
            } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
                navLinks[prevIndex].focus();
                playUiSound("click");
            }
        });
    });
}

const updateGreetingBtn = document.getElementById("update-greeting-btn");
const visitorNameInput = document.getElementById("visitor-name-input");
const personalizedGreeting = document.getElementById("personalized-greeting");

if (updateGreetingBtn && visitorNameInput && personalizedGreeting) {
    updateGreetingBtn.addEventListener("click", function () {
        playUiSound("success");
        const dict = uiTranslations[currentLang] || uiTranslations.en;
        const visitorName = visitorNameInput.value.trim();
        if (visitorName !== "") {
            personalizedGreeting.textContent = dict.greetCustomPrefix + visitorName + "!";
        } else {
            personalizedGreeting.textContent = dict.greetGuest;
        }
        animateElementPop(personalizedGreeting);
    });
}

const showTimeBtn = document.getElementById("show-time-btn");
const clickedTimeOutput = document.getElementById("clicked-time-output");
if (showTimeBtn && clickedTimeOutput) {
    showTimeBtn.addEventListener("click", function () {
        playUiSound("click");
        const dict = uiTranslations[currentLang] || uiTranslations.en;
        const currentTime = new Date().toLocaleTimeString();
        clickedTimeOutput.textContent = dict.timePrefix + currentTime;
        animateElementPop(clickedTimeOutput);
    });
}

const astanaFactsByLang = {
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

const newFactBtn = document.getElementById("new-fact-btn");
const factBox = document.querySelector("#astana-fact-box");
let currentFactIndex = 0;

function updateFactBoxLanguage() {
    if (!factBox) return;
    const list = astanaFactsByLang[currentLang] || astanaFactsByLang.en;
    factBox.textContent = list[currentFactIndex];
}

if (newFactBtn && factBox) {
    newFactBtn.addEventListener("click", function () {
        playUiSound("click");
        const list = astanaFactsByLang[currentLang] || astanaFactsByLang.en;
        currentFactIndex = (currentFactIndex + 1) % list.length;
        factBox.textContent = list[currentFactIndex];
        animateElementPop(factBox);
    });
}

const readMoreBtn = document.getElementById("read-more-btn");
const moreHistoryContent = document.getElementById("more-history-content");

if (readMoreBtn && moreHistoryContent) {
    readMoreBtn.addEventListener("click", function () {
        playUiSound("click");
        const dict = uiTranslations[currentLang] || uiTranslations.en;
        if (moreHistoryContent.style.display === "block") {
            moreHistoryContent.style.display = "none";
            readMoreBtn.textContent = dict.readMoreOpen;
        } else {
            moreHistoryContent.style.display = "block";
            readMoreBtn.textContent = dict.readMoreClose;
            animateElementPop(moreHistoryContent);
        }
    });
}

const extraDishesData = [
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

const loadMoreDishesBtn = document.getElementById("load-more-dishes-btn");
const dishesContainer = document.getElementById("dishes-container");
let dishesLoaded = false;

function renderExtraDishes() {
    if (!dishesContainer || !dishesLoaded) return;
    const existingExtra = dishesContainer.querySelectorAll(".extra-dish-card");
    existingExtra.forEach(function (card) {
        card.remove();
    });

    for (let i = 0; i < extraDishesData.length; i++) {
        const dish = extraDishesData[i];
        const article = document.createElement("article");
        article.className = "pure-card extra-dish-card";
        article.innerHTML = `
            <img src="${dish.image}" alt="${dish.name[currentLang]}" class="food-img-badge">
            <h3>${dish.name[currentLang]}</h3>
            <p>${dish.description[currentLang]}</p>
        `;
        dishesContainer.appendChild(article);
    }
}

if (loadMoreDishesBtn && dishesContainer) {
    loadMoreDishesBtn.addEventListener("click", function () {
        playUiSound("success");
        if (dishesLoaded) return;

        dishesLoaded = true;
        renderExtraDishes();

        const dict = uiTranslations[currentLang] || uiTranslations.en;
        loadMoreDishesBtn.textContent = dict.dishesLoadedBtn;
        loadMoreDishesBtn.disabled = true;
    });
}


const ratingContainers = document.querySelectorAll(".star-rating");
ratingContainers.forEach(function (container) {
    const stars = container.querySelectorAll(".rating-star");
    const statusText = container.parentElement.querySelector(".rating-status");

    stars.forEach(function (star) {
        star.addEventListener("click", function () {
            playUiSound("success");
            const ratingValue = parseInt(star.getAttribute("data-value"), 10);
            container.setAttribute("data-user-rating", ratingValue);

            stars.forEach(function (s) {
                const sVal = parseInt(s.getAttribute("data-value"), 10);
                if (sVal <= ratingValue) {
                    s.classList.add("selected");
                } else {
                    s.classList.remove("selected");
                }
            });

            const dict = uiTranslations[currentLang] || uiTranslations.en;
            if (statusText) {
                statusText.textContent = `${dict.ratedPrefix}${ratingValue}/5 ★`;
            }
            animateElementPop(container);
        });
    });
});

const galleryFeaturedImg = document.getElementById("gallery-featured-img");
const galleryCaption = document.getElementById("gallery-caption");
const galleryThumbs = document.querySelectorAll(".gallery-thumb");

if (galleryFeaturedImg && galleryThumbs.length > 0) {
    galleryThumbs.forEach(function (thumb) {
        thumb.addEventListener("click", function () {
            playUiSound("click");
            // data-src holds the real path while the thumbnail is lazy-loaded (Assignment 6, Task 9)
            const newSrc = thumb.getAttribute("data-src") || thumb.getAttribute("src");
            const newAlt = thumb.getAttribute("alt");

            galleryFeaturedImg.setAttribute("src", newSrc);
            galleryFeaturedImg.setAttribute("alt", newAlt);
            if (galleryCaption) {
                galleryCaption.textContent = newAlt;
            }

            galleryThumbs.forEach(function (t) {
                t.classList.remove("active-thumb");
            });
            thumb.classList.add("active-thumb");
            animateElementPop(galleryFeaturedImg);
        });
    });
}

const astanaToursData = [
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
        },
        getFormattedPrice: function () {
            return this.priceKzt.toLocaleString("en-US") + " KZT";
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
        },
        getFormattedPrice: function () {
            return this.priceKzt.toLocaleString("en-US") + " KZT";
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
        },
        getFormattedPrice: function () {
            return this.priceKzt.toLocaleString("en-US") + " KZT";
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
        },
        getFormattedPrice: function () {
            return this.priceKzt.toLocaleString("en-US") + " KZT";
        }
    }
];

let activeTourCategory = "all";

function renderToursTable(categoryFilter) {
    activeTourCategory = categoryFilter || activeTourCategory;
    const tbody = document.getElementById("tour-table-body");
    const summaryEl = document.getElementById("tour-filter-summary");
    if (!tbody) return;

    const categoryNames = {
        en: { city: "City & Architecture Tours", night: "Evening Skyline Tours", nature: "Nature & Resort Excursions", all: "All Available Tour Packages" },
        ru: { city: "Город и архитектура", night: "Вечерние туры", nature: "Природа и курорты", all: "Все доступные туры" },
        kz: { city: "Қала және сәулет турлары", night: "Кешкі панорамалық турлар", nature: "Табиғат және курорт", all: "Барлық қолжетімді турлар" }
    };

    let categoryLabel = "";
    // Switch statement to handle tour category selection
    switch (activeTourCategory) {
        case "city":
            categoryLabel = categoryNames[currentLang].city;
            break;
        case "night":
            categoryLabel = categoryNames[currentLang].night;
            break;
        case "nature":
            categoryLabel = categoryNames[currentLang].nature;
            break;
        case "all":
        default:
            categoryLabel = categoryNames[currentLang].all;
            break;
    }

    // Higher-Order Function: .filter()
    const filteredTours = astanaToursData.filter(function (tour) {
        return activeTourCategory === "all" || tour.category === activeTourCategory;
    });

    // Higher-Order Function: .map() + loop to calculate average price
    const prices = filteredTours.map(function (t) {
        return t.priceKzt;
    });
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    const avgPrice = prices.length > 0 ? Math.round(total / prices.length) : 0;

    if (summaryEl) {
        if (currentLang === "ru") {
            summaryEl.textContent = `Показано туров: ${filteredTours.length} в категории «${categoryLabel}» — Средняя стоимость: ${avgPrice.toLocaleString("en-US")} KZT`;
        } else if (currentLang === "kz") {
            summaryEl.textContent = `«${categoryLabel}» санатында ${filteredTours.length} тур көрсетілді — Орташа бағасы: ${avgPrice.toLocaleString("en-US")} KZT`;
        } else {
            summaryEl.textContent = `Showing ${filteredTours.length} package(s) in "${categoryLabel}" — Average Package Price: ${avgPrice.toLocaleString("en-US")} KZT`;
        }
    }

    tbody.innerHTML = "";
    filteredTours.forEach(function (tour) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${tour.image}" alt="${tour.title[currentLang]}" class="rounded-circle shadow-sm tour-avatar" width="65" height="65">
            </td>
            <td><strong>${tour.title[currentLang]}</strong></td>
            <td>${tour.duration[currentLang]}</td>
            <td>${tour.highlights[currentLang]}</td>
            <td><span class="badge bg-success">${tour.getFormattedPrice()}</span></td>
        `;
        tbody.appendChild(row);
    });
}

const tourFilterBtns = document.querySelectorAll(".tour-filter-btn");
if (tourFilterBtns.length > 0) {
    tourFilterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            playUiSound("click");
            tourFilterBtns.forEach(function (b) {
                b.classList.remove("active");
            });
            btn.classList.add("active");
            const selectedCat = btn.getAttribute("data-category");
            renderToursTable(selectedCat);
        });
    });
}

let currentFormStep = 1;

function navigateFormStep(targetStepNumber, onStepChangedCallback) {
    const step1 = document.getElementById("form-step-1");
    const step2 = document.getElementById("form-step-2");
    if (!step1 || !step2) return;

    currentFormStep = targetStepNumber;
    if (targetStepNumber === 2) {
        step1.classList.remove("active-step");
        step2.classList.add("active-step");
    } else {
        step2.classList.remove("active-step");
        step1.classList.add("active-step");
    }

    if (typeof onStepChangedCallback === "function") {
        onStepChangedCallback(targetStepNumber);
    }
}

const nextStepBtn = document.getElementById("next-step-btn");
const prevStepBtn = document.getElementById("prev-step-btn");
const stepIndicator = document.getElementById("step-indicator");
const clearFormBtn = document.getElementById("clear-form-btn");

if (nextStepBtn) {
    nextStepBtn.addEventListener("click", function () {
        const name = document.getElementById("user-name");
        const email = document.getElementById("user-email");
        const password = document.getElementById("user-password");
        const confirmPassword = document.getElementById("user-confirm-password");
        const errorMsg = document.getElementById("form-error-msg");
        const successMsg = document.getElementById("form-success-msg");
        const dict = uiTranslations[currentLang] || uiTranslations.en;

        errorMsg.textContent = "";
        if (successMsg) successMsg.textContent = "";

        const nameVal = name.value.trim();
        const emailVal = email.value.trim();
        const passwordVal = password.value;
        const confirmVal = confirmPassword.value;

        // 1. Name validation: at least 2 letters, only letters (EN/RU/KZ), spaces, or hyphens
        const nameRegex = /^[A-Za-zА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]+([ -][A-Za-zА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]+)*$/;
        if (nameVal.length < 2 || !nameRegex.test(nameVal)) {
            errorMsg.textContent = dict.errName;
            return;
        }

        // 2. Email validation: standard user@domain.tld format (blocks '@.')
        const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(emailVal)) {
            errorMsg.textContent = dict.errEmail;
            return;
        }

        // 3. Password validation: no spaces allowed, min 8 chars, at least 1 letter and 1 number
        if (/\s/.test(passwordVal)) {
            errorMsg.textContent = dict.errPassSpace;
            return;
        }
        if (passwordVal.length < 8 || !/[A-Za-z]/.test(passwordVal) || !/[0-9]/.test(passwordVal)) {
            errorMsg.textContent = dict.errPassFormat;
            return;
        }

        // 4. Confirm password match
        if (passwordVal !== confirmVal) {
            errorMsg.textContent = dict.errPassMatch;
            return;
        }

        playUiSound("click");
        navigateFormStep(2, function () {
            if (stepIndicator) {
                stepIndicator.textContent = dict.step2Badge;
            }
        });
    });
}

if (prevStepBtn) {
    prevStepBtn.addEventListener("click", function () {
        playUiSound("click");
        const dict = uiTranslations[currentLang] || uiTranslations.en;
        navigateFormStep(1, function () {
            if (stepIndicator) {
                stepIndicator.textContent = dict.step1Badge;
            }
        });
    });
}

if (clearFormBtn) {
    clearFormBtn.addEventListener("click", function () {
        playUiSound("click");
        const dict = uiTranslations[currentLang] || uiTranslations.en;
        document.querySelectorAll("#booking-form input[type='text'], #booking-form input[type='email'], #booking-form input[type='password']").forEach(function (input) {
            input.value = "";
        });
        const errorMsg = document.getElementById("form-error-msg");
        const successMsg = document.getElementById("form-success-msg");
        if (errorMsg) errorMsg.textContent = "";
        if (successMsg) successMsg.textContent = dict.clearedMsg;
    });
}

const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("user-name");
        const tourSelect = document.getElementById("tour-select");
        const errorMsg = document.getElementById("form-error-msg");
        const successMsg = document.getElementById("form-success-msg");
        const $submitBtn = $("#booking-submit-btn");

        // Assignment 6 / Task 6: ignore repeated clicks while the "server" is working
        if ($submitBtn.prop("disabled")) return;

        errorMsg.textContent = "";
        successMsg.textContent = "";
        setButtonLoading($submitBtn, true);

        // Simulated server call (2 seconds)
        setTimeout(function () {
            setButtonLoading($submitBtn, false);
            playUiSound("success");

            const selectedOptionText = tourSelect.options[tourSelect.selectedIndex].text;
            let message;
            if (currentLang === "ru") {
                message = `Бронирование подтверждено для ${name.value}! Тур: ${selectedOptionText}.`;
            } else if (currentLang === "kz") {
                message = `${name.value} үшін тапсырыс расталды! Тур: ${selectedOptionText}.`;
            } else {
                message = `Booking confirmed for ${name.value}! Package: ${selectedOptionText}.`;
            }
            successMsg.textContent = message;
            animateElementPop(successMsg);

            // Assignment 6 / Task 7: toast notification
            showToast(message, "success");
        }, 2000);
    });
}

const openModalBtn = document.getElementById("open-popup-btn");
const closeModalBtn = document.getElementById("close-popup-btn");
const popupModal = document.getElementById("popup-modal");
const popupForm = document.getElementById("popup-form");
const popupCallbackStatus = document.getElementById("popup-callback-status");

function submitInquiryAsync(formData, onCompleteCallback) {
    setTimeout(function () {
        if (currentLang === "ru") {
            onCompleteCallback("Спасибо, " + formData.name + "! Ваш запрос успешно получен.");
        } else if (currentLang === "kz") {
            onCompleteCallback("Рақмет, " + formData.name + "! Сұранысыңыз қабылданды.");
        } else {
            onCompleteCallback("Thank you, " + formData.name + "! Your inquiry was received.");
        }
    }, 1800); // simulated server delay (shows the Task 6 spinner)
}

if (openModalBtn && popupModal) {
    openModalBtn.addEventListener("click", function () {
        playUiSound("click");
        popupModal.style.display = "flex";
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", function () {
            popupModal.style.display = "none";
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === popupModal) {
            popupModal.style.display = "none";
        }
    });

    if (popupForm) {
        popupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const dict = uiTranslations[currentLang] || uiTranslations.en;
            const supportName = document.getElementById("support-name").value.trim();
            const supportEmail = document.getElementById("support-email").value.trim();
            const supportMsg = document.getElementById("support-msg").value.trim();

            const nameRegex = /^[A-Za-zА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]+([ -][A-Za-zА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]+)*$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

            if (supportName.length < 2 || !nameRegex.test(supportName)) {
                if (popupCallbackStatus) {
                    popupCallbackStatus.className = "small fw-semibold text-danger mb-2";
                    popupCallbackStatus.textContent = dict.errName;
                }
                return;
            }

            if (!emailRegex.test(supportEmail)) {
                if (popupCallbackStatus) {
                    popupCallbackStatus.className = "small fw-semibold text-danger mb-2";
                    popupCallbackStatus.textContent = dict.errEmail;
                }
                return;
            }

            if (supportMsg.length < 5) {
                if (popupCallbackStatus) {
                    popupCallbackStatus.className = "small fw-semibold text-danger mb-2";
                    popupCallbackStatus.textContent = dict.errMsgShort;
                }
                return;
            }

            // Assignment 6 / Task 6: spinner + disabled button while "sending"
            const $sendBtn = $("#popup-submit-btn");
            if ($sendBtn.prop("disabled")) return;
            if (popupCallbackStatus) popupCallbackStatus.textContent = "";
            setButtonLoading($sendBtn, true);

            submitInquiryAsync({ name: supportName }, function (responseMessage) {
                setButtonLoading($sendBtn, false);
                playUiSound("success");
                if (popupCallbackStatus) {
                    popupCallbackStatus.className = "small fw-semibold text-success mb-2";
                    popupCallbackStatus.textContent = responseMessage;
                }
                // Assignment 6 / Task 7: toast notification
                showToast(responseMessage, "success");
                setTimeout(function () {
                    popupForm.reset();
                    if (popupCallbackStatus) popupCallbackStatus.textContent = "";
                    popupModal.style.display = "none";
                }, 1200);
            });
        });
    }
}

const accordionQuestions = document.querySelectorAll(".accordion-question");
accordionQuestions.forEach(function (button) {
    button.addEventListener("click", function () {
        playUiSound("click");
        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains("open");

        document.querySelectorAll(".accordion-answer").forEach(function (p) {
            p.classList.remove("open");
        });

        if (!isOpen) {
            answer.classList.add("open");
        }
    });
});

function switchSiteLanguage(langCode) {
    let selectedDictionary;

    // Assignment 6: remove <mark> highlights first, otherwise highlighted
    // elements are no longer "leaf" elements and would be skipped below.
    clearSearchHighlights($("body"));

    // Required Switch Statement for language selection
    switch (langCode) {
        case "ru":
            currentLang = "ru";
            selectedDictionary = uiTranslations.ru;
            break;
        case "kz":
            currentLang = "kz";
            selectedDictionary = uiTranslations.kz;
            break;
        case "en":
        default:
            currentLang = "en";
            selectedDictionary = uiTranslations.en;
            break;
    }

    // 1. Translate elements with explicit data-i18n attributes
    const translatableElements = document.querySelectorAll("[data-i18n]");
    translatableElements.forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        if (selectedDictionary[key]) {
            el.textContent = selectedDictionary[key];
        }
    });

    // 2. Automatically translate all headings, paragraphs, buttons, labels, table headers, and spans
    const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, p, a, button, label, th, span, small, li");
    textElements.forEach(function (el) {
        if (el.hasAttribute("data-i18n") || el.id === "live-datetime" || el.id === "theme-toggle-btn") return;
        if (el.children.length > 0) return; // Only translate leaf text elements to preserve child tags

        if (!el.hasAttribute("data-orig-en")) {
            el.setAttribute("data-orig-en", el.textContent.trim());
        }
        const origText = el.getAttribute("data-orig-en");
        if (fullPageTextMap[origText]) {
            el.textContent = currentLang === "en" ? origText : (fullPageTextMap[origText][currentLang] || origText);
        }
    });

    // 3. Translate input & textarea placeholders
    const inputElements = document.querySelectorAll("input[placeholder], textarea[placeholder]");
    inputElements.forEach(function (input) {
        if (!input.hasAttribute("data-orig-ph")) {
            input.setAttribute("data-orig-ph", input.getAttribute("placeholder"));
        }
        const origPh = input.getAttribute("data-orig-ph");
        if (placeholderMap[origPh]) {
            input.setAttribute("placeholder", currentLang === "en" ? origPh : (placeholderMap[origPh][currentLang] || origPh));
        }
    });

    // 4. Refresh dynamic components in the selected language
    updateThemeButtonText();
    setTimeOfDayGreeting();
    updateDateTime();
    updateFactBoxLanguage();
    renderToursTable(activeTourCategory);
    renderExtraDishes();

    if (stepIndicator) {
        stepIndicator.textContent = currentFormStep === 2 ? selectedDictionary.step2Badge : selectedDictionary.step1Badge;
    }
}

const langSelector = document.getElementById("lang-selector");
if (langSelector) {
    langSelector.value = currentLang;
    switchSiteLanguage(currentLang);

    langSelector.addEventListener("change", function (event) {
        playUiSound("click");
        const chosenLang = event.target.value;
        localStorage.setItem("astanaLang", chosenLang);
        switchSiteLanguage(chosenLang);
    });
} else {
    switchSiteLanguage(currentLang);
}

/* =====================================================================
   ASSIGNMENT 6 — jQuery
   ---------------------------------------------------------------------
   The helpers below are declared at the top level (not inside ready)
   so the older vanilla-JS code above can call them too.
   ===================================================================== */

// Small translation table for the text that jQuery generates
const jqText = {
    en: { wait: "Please wait…", copied: "Copied to clipboard!", copyFail: "Could not copy. Please select the text manually.", rated: "Thanks! You rated", shown: "Showing", of: "of", landmarks: "landmarks", noMatch: "No matches found", matches: "matches", match: "match", inQuestions: "in", questions: "questions", question: "question" },
    ru: { wait: "Пожалуйста, подождите…", copied: "Скопировано в буфер обмена!", copyFail: "Не удалось скопировать. Выделите текст вручную.", rated: "Спасибо! Ваша оценка", shown: "Показано", of: "из", landmarks: "мест", noMatch: "Совпадений нет", matches: "совпадений", match: "совпадение", inQuestions: "в", questions: "вопросах", question: "вопросе" },
    kz: { wait: "Күте тұрыңыз…", copied: "Алмасу буферіне көшірілді!", copyFail: "Көшіру мүмкін болмады. Мәтінді қолмен белгілеңіз.", rated: "Рақмет! Сіздің бағаңыз", shown: "Көрсетілді", of: "/", landmarks: "орын", noMatch: "Сәйкестік табылмады", matches: "сәйкестік", match: "сәйкестік", inQuestions: "", questions: "сұрақта", question: "сұрақта" }
};
function t(key) {
    return (jqText[currentLang] || jqText.en)[key];
}

/* ---------- Task 7: Notification system (toasts that fade out) ---------- */
function showToast(message, type) {
    type = type || "success";
    const icons = { success: "✓", info: "i", warning: "!", error: "×" };

    // Create the container once, the first time a toast is shown
    let $stack = $("#toast-stack");
    if ($stack.length === 0) {
        $stack = $('<div id="toast-stack" class="toast-stack" aria-live="polite"></div>').appendTo("body");
    }

    const $toast = $('<div class="site-toast" role="status"></div>').addClass("toast-" + type);
    $('<span class="toast-icon"></span>').text(icons[type] || icons.info).appendTo($toast);
    $('<span class="toast-text"></span>').text(message).appendTo($toast); // .text() = safe from HTML injection
    $('<button type="button" class="toast-close" aria-label="Close">&times;</button>').appendTo($toast);
    $('<span class="toast-timer"></span>').appendTo($toast);

    $toast.hide().appendTo($stack).fadeIn(250);

    // Auto-hide after 3.5 s: fade out, then remove from the DOM
    const hideTimer = setTimeout(function () {
        $toast.fadeOut(500, function () { $(this).remove(); });
    }, 3500);

    $toast.find(".toast-close").on("click", function () {
        clearTimeout(hideTimer);
        $toast.stop(true).fadeOut(200, function () { $(this).remove(); });
    });
}

/* ---------- Task 6: Loading spinner on a submit button ---------- */
function setButtonLoading($btn, isLoading) {
    if (!$btn || $btn.length === 0) return;

    if (isLoading) {
        $btn.data("original-html", $btn.html())            // remember the old label
            .prop("disabled", true)                         // block repeated clicks
            .addClass("is-loading")
            .attr("aria-busy", "true")
            .html('<span class="btn-spinner" aria-hidden="true"></span> ' + t("wait"));
    } else {
        $btn.html($btn.data("original-html"))
            .prop("disabled", false)
            .removeClass("is-loading")
            .removeAttr("aria-busy");
    }
}

/* ---------- Task 3: Search highlighting helpers ---------- */
function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Removes every <mark class="search-hit"> inside $scope and joins the text back together
function clearSearchHighlights($scope) {
    $scope.find("mark.search-hit").each(function () {
        const parent = this.parentNode;
        $(this).contents().unwrap();   // the opposite of .wrap(): keep the text, drop the <mark>
        parent.normalize();             // merge the split text nodes back into one
    });
}

// Wraps every match of `keyword` inside $elements with <mark class="search-hit">.
// Returns the number of matches. Works on text nodes only, so existing tags stay intact.
function highlightKeyword($elements, keyword) {
    clearSearchHighlights($elements);
    keyword = String(keyword).trim();
    if (keyword === "") return 0;

    const regex = new RegExp("(" + escapeRegExp(keyword) + ")", "gi"); // used to split the text
    const testRegex = new RegExp(escapeRegExp(keyword), "i");             // non-global: .test() has no state
    let total = 0;

    $elements.each(function () {
        // collect the text nodes of this element (nodeType 3 = text)
        const textNodes = $(this).find("*").addBack().contents().filter(function () {
            return this.nodeType === 3 && testRegex.test(this.nodeValue);
        });

        textNodes.each(function () {
            const parts = this.nodeValue.split(regex); // odd indexes are the matches
            const $pieces = $.map(parts, function (part, i) {
                if (part === "") return null;
                if (i % 2 === 1) {
                    total++;
                    return $('<mark class="search-hit"></mark>').text(part)[0];
                }
                return document.createTextNode(part);
            });
            $(this).replaceWith($pieces);
        });
    });
    return total;
}


$(document).ready(function () {
    // ---------- Task 0: Setup check ----------
    console.log("jQuery is ready!");

    const $window = $(window);
    const $document = $(document);

    /* ================================================================
       Task 4: Colorful and stylized scroll progress bar
       ================================================================ */
    const $progress = $(
        '<div id="scroll-progress" aria-hidden="true">' +
            '<div class="scroll-progress-fill"><span class="scroll-progress-glow"></span></div>' +
        '</div>' +
        '<div id="scroll-percent" class="scroll-percent" aria-hidden="true">0%</div>'
    );
    $("body").prepend($progress);

    const $fill = $("#scroll-progress .scroll-progress-fill");
    const $percent = $("#scroll-percent");

    function updateScrollProgress() {
        const scrollTop = $window.scrollTop();
        const maxScroll = $document.height() - $window.height();
        const percent = maxScroll > 0 ? Math.min(100, Math.round((scrollTop / maxScroll) * 100)) : 0;

        $fill.css("width", percent + "%");
        $percent.text(percent + "%").toggleClass("visible", scrollTop > 80);
        $percent.toggleClass("done", percent >= 100);
    }

    // Clicking the badge scrolls smoothly back to the top
    $percent.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

    /* ================================================================
       Task 5: Animated number counter (starts when visible)
       ================================================================ */
    const $counters = $(".counter");

    function formatCounter($el, value) {
        return $el.data("format") === "comma" ? Math.round(value).toLocaleString("en-US") : Math.round(value);
    }

    function isInViewport($el, offset) {
        const top = $el.offset().top;
        const bottom = top + $el.outerHeight();
        const viewTop = $window.scrollTop();
        const viewBottom = viewTop + $window.height();
        return bottom > viewTop - (offset || 0) && top < viewBottom + (offset || 0);
    }

    function runCounters() {
        $counters.each(function () {
            const $el = $(this);
            if ($el.data("counted") || !isInViewport($el, -40)) return;
            $el.data("counted", true);

            // jQuery .animate() can tween any number on a plain object
            $({ value: 0 }).animate({ value: Number($el.data("target")) }, {
                duration: 2200,
                easing: "swing",
                step: function (now) {
                    $el.text(formatCounter($el, now));
                },
                complete: function () {
                    $el.text(formatCounter($el, $el.data("target")));
                    $el.closest(".stat-card").addClass("counted");
                }
            });
        });
    }

    /* ================================================================
       Task 9: Image lazy loading (scroll + offset + attr('src'))
       ================================================================ */
    function loadImage($img) {
        const realSrc = $img.attr("data-src");
        if (!realSrc || $img.hasClass("lazy-loaded")) return;

        $img.addClass("lazy-loading");
        $img.one("load", function () {
            $img.removeClass("lazy-loading").addClass("lazy-loaded");
        });
        $img.attr("src", realSrc);
    }

    function lazyLoadImages() {
        const preload = 200; // start loading 200px before the image appears
        const viewTop = $window.scrollTop();
        const viewBottom = viewTop + $window.height();

        $("img.lazy").not(".lazy-loaded, .lazy-loading").each(function () {
            const $img = $(this);
            const top = $img.offset().top;
            const bottom = top + $img.outerHeight();
            if (bottom >= viewTop - preload && top <= viewBottom + preload) {
                loadImage($img);
            }
        });
    }

    // Carousel slides are hidden (display:none) until shown, so offset() can't be
    // used for them. Instead we load a slide right before Bootstrap shows it.
    $("#astanaCarousel").on("slide.bs.carousel", function (e) {
        const $slides = $(this).find(".carousel-item");
        const nextIndex = e.to;
        loadImage($slides.eq(nextIndex).find("img.lazy-slide"));
        loadImage($slides.eq((nextIndex + 1) % $slides.length).find("img.lazy-slide")); // preload one more
    });
    // Preload the second slide once the page has finished loading
    $window.on("load", function () {
        loadImage($("#astanaCarousel .carousel-item").eq(1).find("img.lazy-slide"));
    });

    /* ---- One throttled scroll/resize handler drives Tasks 4, 5 and 9 ---- */
    let ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
            updateScrollProgress();
            runCounters();
            lazyLoadImages();
            ticking = false;
        });
    }
    $window.on("scroll resize", onScroll);
    onScroll();

    /* ================================================================
       Task 1: Real-time search and live filter (attractions.html)
       ================================================================ */
    const $landmarkSearch = $("#landmark-search");
    const $landmarkItems = $("#landmark-list .landmark-item");
    const $landmarkCount = $("#landmark-count");
    const $landmarkEmpty = $("#landmark-empty");
    const $suggestions = $("#autocomplete-list");

    function filterLandmarks(query) {
        query = String(query).trim().toLowerCase();

        // .filter() returns only the items whose text (or keywords) contain the query
        const $matches = $landmarkItems.filter(function () {
            const haystack = ($(this).text() + " " + $(this).data("keywords")).toLowerCase();
            return haystack.indexOf(query) !== -1;
        });

        $landmarkItems.not($matches).stop(true, true).slideUp(150);
        $matches.stop(true, true).slideDown(150);

        // Re-use the Task 3 highlighter to show WHY each item matched
        highlightKeyword($landmarkItems.find(".landmark-name, .landmark-desc, .landmark-badge, .landmark-district"), query);

        $landmarkCount.text(t("shown") + " " + $matches.length + " " + t("of") + " " + $landmarkItems.length + " " + t("landmarks"));
        $landmarkEmpty.toggle($matches.length === 0);
    }

    /* ================================================================
       Task 2: Autocomplete search suggestions (dropdown)
       ================================================================ */
    const landmarkNames = $landmarkItems.map(function () {
        return {
            name: $(this).find(".landmark-name").text(),
            category: $(this).data("category"),
            keywords: String($(this).data("keywords"))
        };
    }).get();
    let activeSuggestion = -1;

    function closeSuggestions() {
        $suggestions.empty().removeClass("open");
        $landmarkSearch.attr("aria-expanded", "false");
        activeSuggestion = -1;
    }

    function showSuggestions(query) {
        query = String(query).trim().toLowerCase();
        $suggestions.empty();
        activeSuggestion = -1;
        if (query.length === 0) {
            closeSuggestions();
            return;
        }

        // Names that START with the query come first, then names that only contain it
        const starts = [];
        const contains = [];
        $.each(landmarkNames, function (_, item) {
            const name = item.name.toLowerCase();
            if (name.indexOf(query) === 0) starts.push(item);
            else if (name.indexOf(query) !== -1 || item.category.toLowerCase().indexOf(query) !== -1 || item.keywords.indexOf(query) !== -1) contains.push(item);
        });
        const results = starts.concat(contains).slice(0, 6);

        if (results.length === 0) {
            $('<li class="autocomplete-empty"></li>').text(t("noMatch")).appendTo($suggestions);
        } else {
            $.each(results, function (_, item) {
                const $li = $('<li class="autocomplete-item" role="option"></li>').attr("data-name", item.name);
                const $name = $('<span class="autocomplete-name"></span>').text(item.name);
                highlightKeyword($name, query);   // bold the typed part
                $li.append($name).append($('<span class="autocomplete-cat"></span>').text(item.category));
                $suggestions.append($li);
            });
        }
        $suggestions.addClass("open");
        $landmarkSearch.attr("aria-expanded", "true");
    }

    function chooseSuggestion(name) {
        $landmarkSearch.val(name);
        closeSuggestions();
        filterLandmarks(name);

        // Scroll to the chosen landmark and flash it
        const $target = $landmarkItems.filter(function () {
            return $(this).find(".landmark-name").text() === name;
        }).first();
        if ($target.length) {
            $("html, body").animate({ scrollTop: $target.offset().top - 160 }, 400);
            $target.addClass("flash");
            setTimeout(function () { $target.removeClass("flash"); }, 1200);
        }
    }

    function moveActive(direction) {
        const $items = $suggestions.find(".autocomplete-item");
        if ($items.length === 0) return;
        activeSuggestion = (activeSuggestion + direction + $items.length) % $items.length;
        $items.removeClass("active").eq(activeSuggestion).addClass("active");
    }

    if ($landmarkSearch.length) {
        // keyup fires after every typed character (as suggested in the task hint).
        // "input" also covers paste, mobile keyboards and the ✕ clear button.
        let lastQuery = null;
        $landmarkSearch.on("keyup input", function (e) {
            if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key)) return;
            const query = $(this).val();
            if (query === lastQuery) return; // keyup + input for the same character → run once
            lastQuery = query;
            filterLandmarks(query);
            showSuggestions(query);
        });

        // Keyboard navigation inside the dropdown
        $landmarkSearch.on("keydown", function (e) {
            if (e.key === "ArrowDown") { e.preventDefault(); moveActive(1); }
            else if (e.key === "ArrowUp") { e.preventDefault(); moveActive(-1); }
            else if (e.key === "Escape") { closeSuggestions(); }
            else if (e.key === "Enter") {
                e.preventDefault();
                const $active = $suggestions.find(".autocomplete-item.active");
                if ($active.length) chooseSuggestion($active.data("name"));
                else closeSuggestions();
            }
        });

        // Event delegation: the <li> items are created dynamically
        $suggestions.on("mousedown", ".autocomplete-item", function (e) {
            e.preventDefault(); // keep focus in the input
            chooseSuggestion($(this).data("name"));
        });

        // Close the dropdown when clicking anywhere else
        $document.on("click", function (e) {
            if (!$(e.target).closest(".search-wrapper").length) closeSuggestions();
        });

        filterLandmarks("");
    }

    /* ================================================================
       Task 3: Search highlighting in the FAQ (index.html)
       ================================================================ */
    const $faqSearch = $("#faq-search");
    const $faqItems = $("#faq-section .accordion-item-simple");
    const $faqStatus = $("#faq-search-status");

    function searchFaq() {
        const query = String($faqSearch.val()).trim();
        const count = highlightKeyword($faqItems.find(".accordion-question, .accordion-answer"), query);

        if (query === "") {
            $faqItems.removeClass("faq-dim").find(".accordion-answer").removeClass("open");
            $faqStatus.text("");
            return;
        }

        let questionsWithHits = 0;
        $faqItems.each(function () {
            const hasHit = $(this).find("mark.search-hit").length > 0;
            if (hasHit) questionsWithHits++;
            $(this).toggleClass("faq-dim", !hasHit);
            $(this).find(".accordion-answer").toggleClass("open", hasHit); // open matching answers
        });

        if (count === 0) {
            $faqStatus.text(t("noMatch"));
        } else {
            $faqStatus.text(count + " " + (count === 1 ? t("match") : t("matches")) + " " + t("inQuestions") + " " +
                questionsWithHits + " " + (questionsWithHits === 1 ? t("question") : t("questions")));
        }
    }

    if ($faqSearch.length) {
        $faqSearch.on("keyup search input", searchFaq);
    }

    // After the language switcher rewrites the page text, re-apply the active searches
    $("#lang-selector").on("change", function () {
        if ($faqSearch.length) searchFaq();
        if ($landmarkSearch.length) filterLandmarks($landmarkSearch.val());
    });

    /* ================================================================
       Task 8: Copy to clipboard button
       ================================================================ */
    let copyFromButton = null; // the text to copy while our own copy event is running

    // .on("copy") — runs for every copy on the page. When the copy was started by
    // one of our buttons we put the snippet text into the clipboard ourselves.
    $document.on("copy", function (e) {
        if (copyFromButton !== null) {
            e.originalEvent.clipboardData.setData("text/plain", copyFromButton);
            e.preventDefault();
        }
    });

    // When a visitor selects a snippet manually and presses Ctrl+C, confirm it too
    $(".snippet-text").on("copy", function () {
        showToast(t("copied"), "info");
    });

    function copyText(text) {
        // Modern Clipboard API (needs HTTPS — GitHub Pages is HTTPS)
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }
        // Fallback: trigger a real "copy" event that our .on("copy") handler fills in
        return new Promise(function (resolve, reject) {
            copyFromButton = text;
            const ok = document.execCommand("copy");
            copyFromButton = null;
            ok ? resolve() : reject();
        });
    }

    $(".copy-btn").on("click", function () {
        const $btn = $(this);
        const text = $btn.closest(".snippet").find(".snippet-text").text();

        copyText(text).then(function () {
            $btn.find(".copy-tooltip").text(t("copied"));
            $btn.addClass("copied");                      // CSS swaps the icon to a ✓ and shows the tooltip
            $btn.find(".copy-label").text("Copied");
            showToast(t("copied") + " — " + text, "success");
            clearTimeout($btn.data("timer"));
            $btn.data("timer", setTimeout(function () {
                $btn.removeClass("copied");
                $btn.find(".copy-label").text("Copy");
            }, 2000));
        }).catch(function () {
            showToast(t("copyFail"), "error");
        });
    });

    /* ================================================================
       Task 7 (extra): toasts for other user actions
       ================================================================ */
    $(".star-rating .rating-star").on("click", function () {
        const landmark = $(this).closest(".star-rating").data("landmark");
        const stars = $(this).data("value");
        showToast(t("rated") + " " + landmark + " " + "★".repeat(stars), "success");
    });
});
