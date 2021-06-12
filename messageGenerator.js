const messageGenerator = (what=[" "], action=[" "] , whereWhen=[" "], catchUpSentence=[" "] ) => {
    return {
        _what: what,
        _action: action,
        _whereWhen: whereWhen,
        _catchUpSentence: catchUpSentence,
        get what () {
            return this._what;
        },
        get action (){
            return this._action;
        },
        get whereWhen () {
            return this._whereWhen;
        },
        get catchUpSentence () {
            return this._catchUpSentence;
        },
        randomNumber (length){
            return Math.floor(Math.random()*length);
        },
        generateMessage () {
            return `${this.what[this.randomNumber(this.what.length)]} ${this.action[this.randomNumber(this.action.length)]} ${this.whereWhen[this.randomNumber(this.whereWhen.length)]}. ${this.catchUpSentence[this.randomNumber(this.catchUpSentence.length)]}`;
        }

    }
}

let what = ["You","An unexpected event","A relationship", "Your partner", "Your Friend", "Planets", "The essense", "It", "The sun", "Your life", "Truth"];
let action = ["will be happy", "should think about", "may take place", "happens", "will catch you", "will briefly become happy", " may indicate"];
let whereWhen = ["in your relationship", "tomorrow", "today", "in your planet", "at home", "in your life", "in your afterlife", "love"];
let catchUpSentence = ["It's not the number of breaths we take, but the number of moments that take our breath away.", "Life is what happens to you while you're busy making other plans.", "", "You're only as strong as the drinks you mix, the tables you dance on, and the friends you party with", "Live for the nights you'll never remember with the friends you'll never forget", "", "", "Live, laugh, love.", "You have to look through the rain to see the rainbow.", "Sing like no one is listening. Love like you've never been hurt. Dance like nobody is watching.", "", "Keep calm and carry on."];

let finalMessageGenerator = messageGenerator(what, action, whereWhen, catchUpSentence);


let printing = finalMessageGenerator.generateMessage();
