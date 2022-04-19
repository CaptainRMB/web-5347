module.exports = {
    /**
     *   testing: https://regexr.com/
     */
    isEmail(str) {
        let regex = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return regex.test(str);
    },

    notNull(str) {
        return str.length !== 0;
    },

    isPwdValidated(str) {
        //             length      number>2      a-z lower    a-z upper   special char >1
        let regex = /^(?=^.{6,24}$)(?=(?:.*?\d){2})(?=.*[a-z])(?=.*[A-Z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%*()_+^&]*$/;
        return regex.test(str);
    }
}