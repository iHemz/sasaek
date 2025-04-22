import "@/components/Content/Culture/culture.scss";

export function Culture() {
  return (
    <section className="culture">
      <section className="culture-info">
        <p className="title">새로운 문화 나눔을 만들어갑니다.</p>
        <div className="detail-container">
          <p>우리는</p>
          <div className="img-wrapper">
            <img src="src/assets/detail_image.png" alt="" />
          </div>
        </div>
        <p className="subtitle">사색의향기입니다.</p>
      </section>

      <p className="culture-description">
        사색의향기는 문학인들의 커뮤니티로서 “행복한 문화 나눔"을 통한 사회 공헌과 선진적이고 건전한
        사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다.
      </p>
    </section>
  );
}
