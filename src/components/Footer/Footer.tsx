import "@/components/Footer/footer.scss";

import { Link } from "react-router";
import { ButtonIcon } from "@/libs/ButtonIcon";
import { OPAQUE_WHITE } from "@/libs/common";
import { Logo } from "@/libs/Logo";

export default function Footer() {
  return (
    <footer>
      <section className="footer-content">
        <section>
          <Logo color={OPAQUE_WHITE} />
          <div className="info">
            <section className="info-links">
              <Link to="/privacy-policy">개인정보 처리방침</Link>
              <Link to="/terms-of-service">이용약관</Link>
              <Link to="/customer-service">고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)</Link>
            </section>

            <section className="info-details">
              <div className="info-detail-row">
                <p className="organization-name">사단법인 사색의향기</p>

                <p className="info-chairman-info">
                  <span className="label">이사장</span>
                  <span>오덕균</span>
                </p>

                <p className="registration-number">
                  <span className="label">고유번호</span>
                  <span>355-82-00129</span>
                </p>
              </div>

              <div className="address-container">
                <p className="address-row">
                  <span className="label">주소</span>
                  <span>서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동)</span>
                </p>

                <p className="phone-row">
                  <span className="label">전화</span>
                  <span>02-539-5101</span>
                </p>

                <p className="fax-row">
                  <span className="label">팩스</span>
                  <span>070-8668-5091</span>
                </p>

                <p className="email-row">
                  <span className="label">이메일</span>
                  <span>culppy@culppy.com</span>
                </p>
              </div>

              <p className="copyright-notice">Copyright ⓒ 2025 사색의향기. All Rights Reserved</p>
            </section>
          </div>
        </section>

        <section>
          <div className="right-content">
            <p className="newsletter-title">뉴스레터 구독하기</p>
            <p className="customer-service-info">
              이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을 빠르게 받아보실 수
              있습니다.
            </p>
          </div>

          <ButtonIcon className="footer-btn" icon="IconArrowRight">
            이메일 구독신청
          </ButtonIcon>
        </section>
      </section>
    </footer>
  );
}
