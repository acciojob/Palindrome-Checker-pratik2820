// complete the given function

function palindrome(str){

	 const reversedStr = str.split('').reverse().join('');
	if(str===reversedStr){
		return true;
	}
	return false;
}
module.exports = palindrome
