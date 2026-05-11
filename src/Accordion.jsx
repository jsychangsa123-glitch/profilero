import { useState } from 'react';

const QuoteGenerator = () => {
  // 1. 명언 데이터셋
  const quotes = [
    '삶이 있는 한 희망은 있다 - 키케로',
    '산다는것 그것은 치열한 전투이다 - 로망로랑',
    '언제나 현재에 집중할수 있다면 행복할것이다 - 파울로 코엘료',
    '피할수 없으면 즐겨라 - 로버트 엘리엇',
    '먼저 자신을 비웃어라. 다른 사람에게 비웃음 당하기 전에 - 에리히 캐스트너',
  ];

  // 2. 상태 관리 (현재 명언과 기록)
  const [currentQuote, setCurrentQuote] =
    useState('버튼을 눌러 명언을 만드세요!');
  const [history, setHistory] = useState([]);

  // 3. 명언 생성 함수
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];

    setCurrentQuote(newQuote);
    // 기록 추가 (최신순으로 앞에 추가)
    setHistory([newQuote, ...history]);
  };

  // 4. 🔥 핵심: for 문을 이용한 렌더링 로직
  const renderHistory = () => {
    const historyElements = []; // 컴포넌트를 담을 빈 배열

    for (let i = 0; i < history.length; i++) {
      // push를 통해 JSX 요소를 배열에 하나씩 담습니다.
      historyElements.push(
        <li
          key={i}
          style={{ padding: '5px 0', borderBottom: '1px solid #eee' }}
        >
          {history[i]}
        </li>,
      );
    }

    return historyElements; // 완성된 배열 반환
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h2>오늘의 명언</h2>
      <div
        style={{
          padding: '20px',
          background: '#f0f0f0',
          borderRadius: '10px',
          marginBottom: '20px',
        }}
      >
        <strong>{currentQuote}</strong>
      </div>

      <button
        onClick={generateQuote}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        새 명언 생성
      </button>

      <hr style={{ margin: '20px 0' }} />

      <h3>최근 기록 (History)</h3>
      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
        {/* map 대신 함수 호출로 for문 결과물을 렌더링 */}
        {renderHistory()}
      </ul>
    </div>
  );
};

export default QuoteGenerator;
