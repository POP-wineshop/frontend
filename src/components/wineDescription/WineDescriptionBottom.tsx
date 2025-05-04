const wineDescriptionText = [
  { key: '테이스팅 노트', value: `테이스팅 노트` },
  { key: '양조 방법', value: `양조 방법` },
  { key: '와인 스토리', value: `와인 스토리` },
  { key: '와이너리 설명', value: `와이너리 설명` },
];

const WineDescriptionBottom = () => {
  return (
    <div className="wine-description-bottom py-8 flex flex-col items-center">
      {wineDescriptionText.map(({ key, value }) => (
        <div
          className="wine-description-text mb-8 flex flex-col items-center w-2/3 min-w-120"
          key={key}
        >
          <p className="text-xl font-semibold mb-2">{key}</p>
          <hr className="w-60 border-t border-gray-300 mb-2" />
          <p className="break-words whitespace-normal">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default WineDescriptionBottom;
