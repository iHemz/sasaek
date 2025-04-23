import { Link } from "react-router";
import { nowImage } from "@/assets";
import { links } from "@/components/Content/AppSection/data";
import { Notification } from "@/components/Content/AppSection/Notification";
import { ButtonIcon } from "@/libs/ButtonIcon";
import { MobileLogo } from "@/libs/MobileLogo";
import { PenTool } from "@/libs/PenTool";
import { SoftStarIcon } from "@/libs/SoftStarIcon";

export function Mobile() {
  return (
    <div className="mobile-app">
      <header>
        <section className="header-menu">
          <section className="header-top">
            <MobileLogo />
            <div className="other-btns">
              <Notification icon="IconBell" no_of_notifications={20} size={20} />

              <ButtonIcon icon="IconMenu2" size={22} />
            </div>
          </section>

          <nav className="header-bottom">
            {links.map((item) => (
              <Link key={item.id} to={item.href} {...(item.isActive && { className: "active" })}>
                {item.title}
              </Link>
            ))}
          </nav>
        </section>

        <section className="header-content">
          <div className="column">
            <p className="title">
              몽골 밤하늘의
              <br /> 쏟아지는 별을 보며
            </p>
            <p className="desc">테마여행 - 별과 인문학이 함께하는 아름다운 경험</p>
          </div>
          <div className="pagination">
            <p className="page-number">1 | 3 </p>
            <ButtonIcon icon="IconChevronRight" size={12} />
          </div>
        </section>
      </header>

      <footer>
        <section className="now-date-container">
          <p>
            <span>오늘의 향기</span> <br />
            <span>2025년 1월 10일 금요일</span>
          </p>
          <ButtonIcon icon="IconChevronRight" size={20} />
        </section>

        <section className="now-content-container">
          <img src={nowImage} alt="" />
          <div className="now-content-details">
            <div className="now-content-header">
              <SoftStarIcon />
              <p className="title">명언의 발견</p>
            </div>
            <p className="now-content-text">
              당신이 만일 생각하지 않는 사람이라면
              <br />
              당신은 무엇을 위한 인간이란 말인가.
            </p>

            <div className="now-footer-icon">
              <PenTool />
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
