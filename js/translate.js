document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            title: "News Portal",
            login: "Login",
            loading: "Loading weather...",
            "top-news": "Top News",
            "news-title-1": "Arda Güler outperformed Real Madrid's new transfer Mbappe! The Spanish announced, exactly 180 million Euros...",
            "news-content-1": "La Liga and Champions League champion Real Madrid announced that they have added Kylian Mbappe to their squad. In a statement made by Los Blancos, it was reported that a five-year contract was signed with the French star.",
            "time-source-1": "3 hours ago | Source: GazeteVatan",
            "news-title-2": "Life advice from robot to human",
            "news-content-2": "Researchers at the Massachusetts Institute of Technology (MIT) in the US have created an AI-powered chatbot that simulates the older personas of young users and offers their observations and sage advice. The aim of the project, called “Future You,” is to encourage people to think more about the person they want to be in the future. The chatbot, which produces plausible artificial memories, uses the user’s current desires to tell stories about successful lives.",
            "time-source-2": "5 hours ago | Source: Milliyet",
            "news-title-3": "2 shark attacks on the same day! 3 people injured...",
            "news-content-3": "Two separate shark attacks occurred on a beach in South Walton, Florida,on Friday. Authorities said in a statement regarding the attacks: “The South Walton Fire District and the Walton County Sheriff’s Office responded to two shark-related incidents Friday afternoon in Florida. Two people were seriously injured, and one person was slightly injured.",
            "time-source-3": "8 hours ago | Source: Hürriyet",
            "news-title-4": "The world's highest garbage dump! 11 tons of garbage found on three Himalayan peaks",
            "news-content-4": "The Nepalese army has said it has collected 11 tonnes of garbage, four corpses and one skeleton from Mount Everest and two other Himalayan peaks this year. It took soldiers 55 days to collect the garbage and bodies from Mount Everest, Nuptse and Lhotse. It is estimated that there are more than 50 tonnes of garbage and 200 bodies on Everest. The clean-up efforts on the mountain, often referred to as the ‘world’s highest garbage dump’, were launched in 2019 after concerns about crowds and dangerous conditions as climbers lined up to reach the summit. The army said that a total of 119 tonnes of garbage, 14 corpses and some skeletons were brought back in five clean-up operations. Content Video - The much-talked-about footage! Gang members searched half-naked faint Authorities hope to reduce litter this year and have climbers wear tracking devices to facilitate rescue operations and have climbers bring their own excrement from the summit. Rakesh Gurung, director of the Nepal Mountaineering Tourism Corporation, told the BBC that the government plans to set up mountain patrols to monitor litter in the future and allocate more financial resources. The government issued permits to climb the summit to 421 climbers during the spring climbing season, which ended in May. Last year, a record was broken when 478 were issued. That number does not include Nepalese guides. An estimated 600 people have climbed the mountain this year. Eight climbers have also died or gone missing this year. Last year, the number was 19. Gurung said the number of permits to climb the summit had fallen due to the global economic downturn. China issuing permits and elections in India have also contributed to the decline. The number is expected to fall further after the Nepalese Supreme Court ordered the government to reduce the number of permits.",
            "time-source-4":"1 day ago | Source: CnnTürk"

        },
        tr: {
            title: "Haber Portalı",
            login: "Giriş",
            loading: "Hava durumu yükleniyor...",
            "top-news": "En Son Haberler",
            "news-title-1": "Arda Güler, Real Madrid'in yeni transferi Mbappe'ye fark attı! İspanyollar açıkladı, tam 180 milyon Euro...",
            "news-content-1": "La Liga ve Şampiyonlar Ligi şampiyonu Real Madrid, Kylian Mbappe'yi kadrosuna kattığını duyurdu. Los Blancos'tan yapılan açıklamada Fransız yıldız ile beş yıllık sözleşme imzalandığı bildirildi.",
            "time-source-1": "3 saat önce | Kaynak: GazeteVatan",
            "news-title-2": "Robottan insana hayat tavsiyesi Başlığı 2",
            "news-content-2": "ABD’de Massachusetts Teknoloji Enstitüsü’ndeki (MIT) araştırmacılar, genç kullanıcıların yaşlı kişiliklerini kurgulayarak gözlemlerini ve bilgece tavsiyelerini sunan yapay zeka destekli bir sohbet robotu üretti. “Future You” (Gelecekteki Sen) adlı projenin amacının, insanları gelecekte olmak istedikleri kişi hakkında bugün daha fazla düşünmeye teşvik etmek olduğu belirtildi. Makul yapay anılar üreten sohbet robotu, başarılı yaşam hakkında hikayeler anlatmak için kullanıcının mevcut isteklerinden yararlanıyor.",
            "time-source-2": "5 saat önce | Kaynak: Milliyet",
            "news-title-3": "Aynı günde 2 köpek balığı saldırısı! 3 kişi yaralandı...",
            "news-content-3":"ABD’nin Florida eyaletinde Cuma günü South Walton bölgesinde bir plajda iki ayrı köpek balığı saldırısı yaşandı. Yetkililer saldırı ile ilgili olarak, “South Walton İtfaiye Bölgesi ve Walton County Şerif Ofisi, Florida Cuma öğleden sonra köpek balığı ile ilgili iki olaya müdahale etti. İki kişi ağır yaralanırken, bir kişi de hafif yaralanmıştır.",
            "time-source-3":"8 saat önce | Kaynak: Hürriyet",
            "news-title-4":"Dünyanın en yüksek çöplüğü! Üç Himalayalar zirvesinden 11 ton çöp çıktı",
            "news-content-4":"Nepal ordusu, Everest Dağı ve Himalayalar’daki diğer iki zirveden bu yıl içinde 11 ton çöp, dört ceset ve bir iskelet toplandığını açıkladı. Askerlerin, Everest, Nuptse ve Lhotse dağlarından çöpleri ve cesetleri toplamasının 55 gün sürdüğü belirtildi. Everest’te elli tondan fazla çöp ve 200 ceset bulunduğu tahmin ediliyor. Sık sık 'dünyanın en yüksek çöplüğü' diye anılan dağdaki temizlik çalışmaları 2019’da kalabalık ve dağcıların zirveye ulaşmak için tehlikeli koşullarda sıra olması kaygılarından sonra başlatılmıştı. Ordu, toplam beş temizlik faaliyetinde 119 ton çöp, 14 ceset ve bazı iskeletlerin getirildiğini belirtti. Content Video - Çok konuşulacak görüntü! Yarı çıplak aranan çete üyeleri bayılıyor Yetkililer bu yıl çöpleri azaltmayı ve dağcıların izleme cihazları bulundurmasıyla kurtarma faaliyetlerini kolaylaştırmayı ve dağcıların kendi dışkılarını zirveden getirmesini sağlamayı umuyor. Nepal Dağcılık Turizmi Kurumu Direktörü Rakesh Gurung BBC’ye yaptığı açıklamada, gelecekte hükümetin çöp gözlemi yapacak dağ devriyeleri oluşturmayı ve daha çok mali kaynak ayırmayı planladığını söyledi. Hükümet, Mayıs’ta sona eren ilkbahar tırmanış mevsiminde 421 dağcıya zirveye çıkma izni verdi. Geçen yıl rekor kırılmış ve 478 dağcıya izin verilmişti. Bu sayılara Nepalli kılavuzlar dahil değil. Bu yıl dağa 600 kişinin tırmandığı tahmin ediliyor. Bu yıl ayrıca sekiz dağcı öldü ya da kayboldu. Geçen yıl bu sayı 19 olmuştu. Gurung, zirveye çıkış izinlerinin küresel ekonomik durum nedeniyle düştüğünü söyledi. Çin’in de tırmanma izinleri vermesi ve Hindistan’daki seçimler de sayının düşmesine neden oldu. Nepal Yüksek Mahkemesi’nin hükümete izin sayısını azaltma talimatı vermesiyle, sayının daha da düşmesi bekleniyor.",
            "time-source-4":"1 gün önce | Kaynak: CnnTürk"
        }
    };

    function translate(lang) {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    document.getElementById('en-btn').addEventListener('click', () => translate('en'));
    document.getElementById('tr-btn').addEventListener('click', () => translate('tr'));
});
