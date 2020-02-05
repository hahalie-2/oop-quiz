function Question(text, choices, answer) {
    this.text = text;
    this.chioces = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

