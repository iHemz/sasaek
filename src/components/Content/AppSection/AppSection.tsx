import "@/components/Content/AppSection/AppSection.scss";

import { Mobile } from "@/components/Content/AppSection/Mobile";
import { AppIcon } from "@/libs/AppIcon";
import { ButtonIcon } from "@/libs/ButtonIcon";

export function AppSection() {
  return (
    <section className="app-section">
      <div className="content-wrapper">
        <div className="info-container">
          <section className="app-header">
            <AppIcon />
            <p>
              더 나은 세상을
              <br /> 만들어 가기 위한 노력.
            </p>
          </section>

          <section className="app-details">
            <p>
              바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를 초월한 커뮤니티를
              만들어나가려고 노력하고 있습니다.
              <br /> 작은 담소와 삶의 지혜가 필요하신 모든 분들을 환영합니다.
            </p>
            <p>
              삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다. 법률적이거나 개인적으로
              해결하기 어려운 문제들이 있으시다면 소담 서포터즈에게 도움을 요청해주세요.{" "}
            </p>
          </section>

          <section className="app-description">
            <p>2025. 6. 출시 예정</p>
            <p>커뮤니티 APP ‘소소담담’</p>
          </section>

          <ButtonIcon icon="IconDownload">앱 다운로드</ButtonIcon>
        </div>

        <aside>
          <Mobile />
        </aside>
      </div>
    </section>
  );
}
