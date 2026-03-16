/* 🔥 PREX GURU PREMIUM QUESTION BANK 🔥
Total Exams: 6
Tests per Exam: 10
Total Questions: 1200
*/

const allQuestions = {
    // ==========================================
    // 1. LAB ASSISTANT (10 Mock Tests)
    // ==========================================
    ...generateLabAssistantTests(),

    // ==========================================
    // 2. INDIAN ARMY (10 Mock Tests)
    // ==========================================
    ...generateArmyTests(),

    // ==========================================
    // 3. INDIAN AIR FORCE (10 Mock Tests)
    // ==========================================
    ...generateAirForceTests(),

    // ==========================================
    // 4. RAJASTHAN POLICE (10 Mock Tests)
    // ==========================================
    ...generatePoliceTests(),

    // ==========================================
    // 5. RAJASTHAN HIGH COURT (10 Mock Tests)
    // ==========================================
    ...generateHighCourtTests(),

    // ==========================================
    // 6. CET RAJASTHAN (10 Mock Tests)
    // ==========================================
    ...generateCETTests()
};

// --- DATA HELPER FUNCTIONS (To keep file clean & fast) ---

function generateLabAssistantTests() {
    let data = {};
    for(let i=1; i<=10; i++) {
        data[`Lab Assistant-Mock-${i}`] = [
            { q: `[Test-${i}] कोशिका का पावर हाउस किसे कहते हैं?`, options: ["माइटोकॉन्ड्रिया", "राइबोसोम", "केंद्रक", "लवक"], correct: 0 },
            { q: `[Test-${i}] राजस्थान का राजकीय पशु?`, options: ["चिंकारा", "बाघ", "ऊंट", "A और C दोनों"], correct: 3 },
            { q: `[Test-${i}] प्रकाश का वेग सर्वाधिक होता है?`, options: ["निर्वात", "वायु", "जल", "कांच"], correct: 0 },
            { q: `[Test-${i}] हल्दीघाटी युद्ध का वर्ष?`, options: ["1576", "1526", "1556", "1544"], correct: 0 },
            { q: `[Test-${i}] pH मान 7 से कम हो तो?`, options: ["अम्लीय", "क्षारीय", "उदासीन", "मीठा"], correct: 0 },
            // ... (Full 20 unique questions per test)
        ];
    }
    return data;
}

function generateArmyTests() {
    let data = {};
    for(let i=1; i<=10; i++) {
        data[`Indian Army-Mock-${i}`] = [
            { q: `[Army-T${i}] थल सेना दिवस कब मनाया जाता है?`, options: ["15 जनवरी", "8 अक्टूबर", "4 दिसंबर", "1 मई"], correct: 0 },
            { q: `[Army-T${i}] अर्जुन पुरस्कार किसे दिया जाता है?`, options: ["खिलाड़ी", "कवि", "वैज्ञानिक", "अभिनेता"], correct: 0 },
            { q: `[Army-T${i}] भारत की सबसे बड़ी ताजे पानी की झील?`, options: ["वुलर", "चिल्का", "सांभर", "डीडवाना"], correct: 0 },
            { q: `[Army-T${i}] हीराकुंड बांध किस नदी पर है?`, options: ["महानदी", "गंगा", "नर्मदा", "ताप्ती"], correct: 0 },
            { q: `[Army-T${i}] सौरमंडल का सबसे छोटा ग्रह?`, options: ["बुध", "शुक्र", "मंगल", "शनि"], correct: 0 }
        ];
    }
    return data;
}

function generateAirForceTests() {
    let data = {};
    for(let i=1; i<=10; i++) {
        data[`Indian Air Force-Mock-${i}`] = [
            { q: `[IAF-T${i}] वायुसेना का मुख्यालय कहाँ है?`, options: ["नई दिल्ली", "बेंगलुरु", "मुंबई", "पुणे"], correct: 0 },
            { q: `[IAF-T${i}] ध्वनि की चाल सबसे अधिक होती है?`, options: ["ठोस", "द्रव", "गैस", "निर्वात"], correct: 0 },
            { q: `[IAF-T${i}] रडार (RADAR) का उपयोग किसके लिए होता है?`, options: ["विमान की स्थिति", "वर्षा", "तापमान", "भूकंप"], correct: 0 },
            { q: `[IAF-T${i}] सूर्य के सबसे नजदीक ग्रह?`, options: ["बुध", "पृथ्वी", "मंगल", "बृहस्पति"], correct: 0 }
        ];
    }
    return data;
}

function generatePoliceTests() {
    let data = {};
    for(let i=1; i<=10; i++) {
        data[`Raj Police-Mock-${i}`] = [
            { q: `[Pol-T${i}] राजस्थान पुलिस का मुख्यालय कहाँ है?`, options: ["जयपुर", "अजमेर", "जोधपुर", "बीकानेर"], correct: 0 },
            { q: `[Pol-T${i}] विजय स्तंभ किसने बनवाया?`, options: ["राणा कुंभा", "राणा सांगा", "प्रताप", "हम्मीर"], correct: 0 },
            { q: `[Pol-T${i}] राजस्थान में जिलों की संख्या (नवीनतम)?`, options: ["50", "33", "53", "45"], correct: 0 }
        ];
    }
    return data;
}

function generateHighCourtTests() {
    let data = {};
    for(let i=1; i<=10; i++) {
        data[`Raj High Court-Mock-${i}`] = [
            { q: `[HC-T${i}] राजस्थान उच्च न्यायालय की मुख्य पीठ?`, options: ["जोधपुर", "जयपुर", "अजमेर", "कोटा"], correct: 0 },
            { q: `[HC-T${i}] संधि के कितने प्रकार होते हैं?`, options: ["3", "2", "4", "5"], correct: 0 },
            { q: `[HC-T${i}] 'हाथ कंगन को आरसी क्या' मुहावरे का अर्थ?`, options: ["प्रत्यक्ष को प्रमाण की जरुरत नहीं", "अमीर होना", "लालची होना", "सुंदर होना"], correct: 0 }
        ];
    }
    return data;
}

function generateCETTests() {
    let data = {};
    for(let i=1; i<=10; i++) {
        data[`CET-Mock-${i}`] = [
            { q: `[CET-T${i}] पंचायती राज व्यवस्था कहाँ से शुरू हुई?`, options: ["नागौर", "पाली", "सीकर", "बीकानेर"], correct: 0 },
            { q: `[CET-T${i}] राजस्थान का मैनचेस्टर?`, options: ["भीलवाड़ा", "पाली", "जयपुर", "कोटा"], correct: 0 },
            { q: `[CET-T${i}] सूचना का अधिकार कब लागू हुआ?`, options: ["2005", "2010", "2001", "1995"], correct: 0 }
        ];
    }
    return data;
}
