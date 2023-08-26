/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 소문자로 만들고, 띄어쓰기 제거
    s = s.toLowerCase().trim();

    // 알파벳과 숫자 이외의 문자 제거하기
    s = s.replace(/[^a-z0-9]/g, '');
  
    // 문자열을 앞으로 읽은 것과 뒤로 읽은 것이 같은지 판별
    return s === s.split('').reverse().join('');
};