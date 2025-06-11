function WordCard({ word, definition, transcription }) {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Карточка слова</h4>
          <p className="card-word">{word}</p>
          <p className="card-definition">{definition}</p>
          <p className="card-transcription">{transcription}</p>
        </div>
      </div>
    );
  }
  
    function CardWord() {
    const word = "слово";
    const definition = "перевод";
    const transcription = "транскрипция";

    return (
    <div>
        <h1>Карточки слов</h1>
        {}
        <WordCard 
        word={word} 
        definition={definition} 
        transcription={transcription} 
        />
    </div>
    );
}
export default CardWord;