export function formatNumberWithCommas(num: number) {
    const number = typeof num === 'string' ? parseInt(num.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))) : num;
    if (isNaN(number)) return '';
  
    const isNegative = number < 0;
    const str = Math.floor(Math.abs(number)).toString();
    
    if (str === '0') return '۰';
  
    const reversedStr = str.split('').reverse().join('');
    const chunks = reversedStr.match(/\d{1,3}/g) || [];
    const formatted = chunks
      .map(chunk => chunk.split('').reverse().join(''))
      .reverse()
      .join('،'); // استفاده از ویرگول فارسی
  
    // تبدیل اعداد انگلیسی به فارسی
    const persianNumbers = formatted.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  
    return (isNegative ? '−' : '') + persianNumbers; // استفاده از علامت منفی فارسی (اختیاری)
  }