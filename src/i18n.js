import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      clear: 'Clear',
      error: 'Error',
      result: 'Result'
    }
  },
  hi: {
    translation: {
      clear: 'साफ़ करें',
      error: 'त्रुटि',
      result: 'परिणाम'
    }
  },
  bn: {
    translation: {
      clear: 'মুছে ফেলুন',
      error: 'ত্রুটি',
      result: 'ফলাফল'
    }
  },
  ta: {
    translation: {
      clear: 'துடைக்க',
      error: 'பிழை',
      result: 'முடிவு'
    }
  },
  te: {
    translation: {
      clear: 'తొలగించు',
      error: 'దోషం',
      result: 'ఫలితం'
    }
  },
  kn: {
    translation: {
      clear: 'ಅಳಿಸಿ',
      error: 'ದೋಷ',
      result: 'ಫಲಿತಾಂಶ'
    }
  },
  ml: {
    translation: {
      clear: 'മായ്ക്കുക',
      error: 'പിശക്',
      result: 'ഫലം'
    }
  },
  mr: {
    translation: {
      clear: 'क्लिअर',
      error: 'त्रुटी',
      result: 'निकाल'
    }
  },
  gu: {
    translation: {
      clear: 'સાફ કરો',
      error: 'ભૂલ',
      result: 'પરિણામ'
    }
  },
  pa: {
    translation: {
      clear: 'ਸਾਫ਼ ਕਰੋ',
      error: 'ਗਲਤੀ',
      result: 'ਨਤੀਜਾ'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 