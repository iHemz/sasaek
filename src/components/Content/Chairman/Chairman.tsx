import { chairman1, chairman2, chairman3, chairmanPic, chairmanSignature } from "@/assets";
import { Avatar } from "@/components/Content/Chairman/Avatar";

import "@/components/Content/Chairman/chairman.scss";

import { ButtonIcon } from "@/libs/ButtonIcon";

export function Chairman() {
  return (
    <section className="chairman-frame">
      <section className="section-1">
        <div className="chairman-info">
          <p className="title">이사장 인사말.</p>
          <div className="chairman-details">
            <section className="details-column">
              <p className="greeting">안녕하세요, 사색의향기 이사장 오덕균 입니다.</p>
              <p className="message">
                사색의향기는 '행복한 문화 나눔'을 통해 더 나은 사회를 만들어가고자
                <br />
                노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께
                성장하겠습니다.
              </p>
              <p className="thanks">많은 관심과 응원 부탁드립니다. 감사합니다.</p>
            </section>

            <section className="signature-column">
              <p>사단법인 사색의향기 이사장 오덕균</p>
              <img src={chairmanSignature} alt="" />
            </section>

            <ButtonIcon icon="IconChevronRight" className="chairman-btn">
              인터뷰 더 보기
            </ButtonIcon>
          </div>
        </div>
      </section>

      <section className="chairmen-section">
        <Avatar image={chairman1} text="오덕균 이사장" />
        <Avatar image={chairman2} text="정준호 이사" imageClass="img-bottom" />
        <Avatar image={chairman3} text="권혁준 고문" />
      </section>

      <aside>
        <div className="decorator"></div>
        <img src={chairmanPic} alt="" />
      </aside>
    </section>
  );
}
