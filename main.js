const bible = {
	book: "Provérbios",
	chapters: [
			{
				chapter: 1,
				verses: [
						{
							verse: 7,
							text: "O temor do Senhor é o princípio do conhecimento, mas os insensatos desprezam a sabedoria e a disciplina."
						},
						{
							verse: 8,
							text: "Ouça, meu filho, a instrução de seu pai e não despreze o ensino de sua mãe."
						}
					]
			},
			{
				chapter: 2,
				verses: [
						{
							verse: 6,
							text: "Pois o Senhor é quem dá sabedoria; de sua boca procedem o conhecimento e o discernimento."
						},
						{
							verse: 10,
							text: "Pois a sabedoria entrará em seu coração, e o conhecimento será agradável à sua alma."
						}
					]
			}
		]
};

const messageReference = document.getElementById('message');
const buttonReference = document.getElementById('new-msg-btn');
const citationReference = document.getElementById('citation');
const titleReference = document.getElementById('title');

function messageGenerator() {
	const chaptersLength = bible.chapters.length;
	const randomChapter = Math.floor(Math.random()*chaptersLength);
	const versesLength = bible.chapters[randomChapter].verses.length;
	const randomVerse = Math.floor(Math.random()*versesLength);

	titleReference.innerHTML = bible['book'];

	messageReference.innerHTML = bible.chapters[randomChapter].verses[randomVerse].text;

	citationReference.innerHTML = `${bible.book}, ${bible.chapters[randomChapter].chapter}: ${bible.chapters[randomChapter].verses[randomVerse].verse}`;
}

messageGenerator();

buttonReference.onclick = messageGenerator;