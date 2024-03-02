import React from "react";
import Layout from "../Layout";
import '../Home/home.css';
import mainImage from '../assets/home_logo.svg';
import home_cal from '../assets/home_cal.svg';
import client from '../assets/client.svg';
import server from '../assets/server.svg';
import designer from '../assets/designer.svg';
import ex_video from '../assets/ex_video.svg';
import Slider from "react-slick";
import { useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    centerMode: true, //슬라이트 크기조정
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Layout>
      <div className="wrapHome">
        <img src={mainImage} />
        <div className="intro">
          <h2 className="intro_title">CREW MATE 소개</h2>
          <div className="what_crewmate">
            <h3>CREW MATE란?</h3>
            <p className="what_crewmate_content">Crew mate는 학교 내의 모든 동아리를 종합적으로 소개하고, <br />관심 있는 학생들에게 자세한 정보를 제공합니다. <br /> 학생들은 간편하게 동아리의 활동 시간, 담당 선생님, <br /> 동아리의 활동 내역 등을 확인할 수 있습니다. <br /> 또한, 각 동아리들의 신청폼을 찾을 필요없이 <br /> crew mate를 통해 동아리 가입 신청도 쉽게 할 수 있도록하여, <br /> 학생들이 자신에게 가장 알맞은 동아리를 찾아 학교 생활을 더욱 <br /> 풍부하게 만들 수 있습니다.</p>
          </div>
          <div className="crewmate_customer">
            <h3>CREW MATE 사용자는?</h3>
            <p className="crewmate_customer_content">
              웹사이트를 통해 학생들은 자율 동아리 정보를 간편하게 <br />
              확인하고, 동아리 활동 일정을 효율적으로 관리할 수 있습니다.<br />
              이를 통해 학생들은 자신에게 가장 적합한 활동을 빠르게 선택하고 <br />
              참여하고 싶은 학생과, 웹사이트를 통해 학생들은 다양한 <br />
              자율 동아리에 쉽게 접근할 수 있으며, 동아리 신청 과정이 간편화됨으로써 <br />
              학교 내 활동에 참여하는 학생들의 수가 늘어날 것입니다. <br />
              이는 학생들이 더 많은 경험을 하는 데 도움이 될 것 입니다.<br />
              또한 학교 생활을 더욱 풍부하게 만들고 싶은 학생이 사용합니다.
            </p>
          </div>
        </div>
        <div className="cal_content_wrap">
          <div className="cal_content">
            <h1 className="cal_content_title">효율적인 동아리 관리 <br />가능합니다!</h1>
            <span>달력으로 동아리 일정을 간편하게 확인 할 수 있어요.</span>
          </div>
          <img src={home_cal} style={{ marginTop: '10%' }} />
        </div>
        <div className="home-slider-container" slide="custom-slide">
          <Slider {...settings}>
            <div className="slide1">
              <h3>1</h3>
            </div>
            <div className="slide1">
              <h3>2</h3>
            </div>
            <div className="slide1">
              <h3>3</h3>
            </div>
            <div className="slide1">
              <h3>4</h3>
            </div>
            <div className="slide1">
              <h3>5</h3>
            </div>
            <div className="slide1">
              <h3>6</h3>
            </div>
            <div className="slide1">
              <h3>7</h3>
            </div>
            <div className="slide1">
              <h3>8</h3>
            </div>
            <div className="slide1">
              <h3>9</h3>
            </div>
          </Slider>
        </div>
        <div className="intro_video">
          <div className="wrap_video">
            <h3>크루메이트 소개 영상</h3>
            <img src={ex_video} className="video_img" />
          </div>
        </div>
        <div className="effect_club_management">
          <p className="effect_title">간단하게 <span className="effect-title-content">효율적인<br /> 동아리 관리</span>가 <br />가능한 곳</p>
          <p className="effect_content">웹사이트를 통해 학생들은 자율 동아리 정보를 간편하게  확인하고,<br />
            동아리 활동 일정을 효율적으로 관리할 수 있습니다.<br />
            이를 통해 학생들은 자신에게 가장 적합한 활동을 빠르게 선택하고<br />
            참여 할 수 있습니다. 웹사이트를  통해 학생들은 다양한 <br />
            자율 동아리에 쉽게 접근할 수 있으며, <br />
            동아리 신청 과정이 간편화됨으로써 학교 내 활동에 참여하는 <br />
            학생들의 수가 늘어날 것입니다. <br />
            이는 학생들이 더 많은 경험을 하는 데 도움이 될 것 입니다 <br />
            찾아 학교 생활을 더욱 풍부 하게 만들
            수 있습니다.</p>
        </div>
        <div className="made_people">
          <div className="server_img">
            <p>백엔드 개발자 <span>임효진</span></p>
            <img src={server} />
          </div>
          <div className="client_img">
            <p>프론트 개발자 <span>박화경</span></p>
            <img src={client} />
          </div>
          <div className="designer_img">
            <p>디자이너 <span>최재현</span></p>
            <img src={designer} />
          </div>

        </div>
      </div>
    </Layout>
  )
}
