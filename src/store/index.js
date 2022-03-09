import { createStore } from 'vuex';

export default createStore({
	state: {
		uiState: 'start',
		characterChoices: ['baker', 'mechanic', 'artist'],
		character: '',
		questionIndex: 0,
		score: 0,
		gameEndMessage: '',
		buttonMsg: '',
		questions: [
			{
				question: `What's your dog's name?`,
				baker: 'Woofgang Puck',
				mechanic: 'Alf',
				artist: 'Salvador Dogi',
			},
			{
				question: `What's your favorite hobby?`,
				baker: 'Extreme ironing',
				mechanic: 'Bacon santa cosplay',
				artist: 'Mimosas',
			},
			{
				question: `What's your favorite color?`,
				baker: 'turquoise',
				mechanic: 'yellow',
				artist: 'transparent',
			},
			{
				question: `Is cereal soup?`,
				baker: "You can't be serieal",
				mechanic: 'Yes, I am Jason Lengstorf',
				artist: 'wut',
			},
			{
				question: `What’s the most imaginative insult you can come up with?`,
				baker: "You're a substitute teacher with no lesson plan",
				mechanic: 'Yer face is a melted welly',
				artist: 'You eat buttons off the remote',
			},
			{
				question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
				baker: 'legoome',
				mechanic: 'brown paste',
				artist: 'groundnut smoosh',
			},
		],
	},
	mutations: {
		selectCharacter(state, character) {
			state.character = character;
		},
		selectQuestion(state, character) {
			character === state.character ? (state.score += 14) : (state.score -= 14);
			if (state.questionIndex < state.questions.length - 1) {
				state.questionIndex++;
			} else {
				Math.sign(state.score) > 0 ? (state.uiState = 'won') : (state.uiState = 'lost');
				if (state.uiState === 'won') {
					state.gameEndMessage = "Hmm, okay I guess you're alright";
					state.buttonMsg = 'Of course I am!';
				} else if (state.uiState === 'lost') {
					state.gameEndMessage = "Ha! You're not my friend, you're an alien!!";
					state.buttonMsg = 'What!? Let me try again!!';
				}
			}
		},
		updateUIState(state, uiState) {
			state.uiState = uiState;
		},
		restartGame(state) {
			state.uiState = 'start';
			state.character = '';
			state.questionIndex = 0;
			state.score = 0;
			state.gameEndMessage = '';
			state.buttonMsg = '';
		},
	},
	actions: {},
	modules: {},
});
