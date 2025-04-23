import "@/components/Content/Donation/Donation.scss";

import { ButtonIcon } from "@/libs/ButtonIcon";

export function Donation() {
  return (
    <section className="donation">
      <div className="content">
        <section className="info-container">
          <p className="title">기부를 통해 따뜻한 마음을 보내고 싶다면,</p>

          <div className="account-info">
            <p className="account-label">후원계좌 안내</p>
            <p className="account-detail">국민 924501-01-351204 / 사단법인 사색의향기</p>
          </div>
        </section>

        <section className="download-btns">
          <ButtonIcon icon="IconHeartHandshake" text="정기 후원" />
          <ButtonIcon text="일시 후원" />
        </section>
      </div>
    </section>
  );
}
