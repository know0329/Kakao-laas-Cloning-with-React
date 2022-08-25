import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
// Components
import ProjectBox from '../Elements/ProjectBox';
// Assets
import ProjectImg1 from '../../assets/img/projects/1.png';
import ProjectImg2 from '../../assets/img/projects/2.png';
import ProjectImg3 from '../../assets/img/projects/3.png';
import ProjectImg4 from '../../assets/img/projects/4.png';
import ProjectImg5 from '../../assets/img/projects/5.png';
import ProjectImg6 from '../../assets/img/projects/6.png';
import Clothes from '../../assets/img/folding/clothes.png';
import Cosmetics from '../../assets/img/folding/cosmetics.png';
import Sport from '../../assets/img/folding/sport.png';
import HomeAppliances from '../../assets/img/folding/homeappliances.png';
import Parenting from '../../assets/img/folding/parenting.png';
import Interior from '../../assets/img/folding/interior.png';
import Fridge from '../../assets/img/folding/fridge.png';
import FrozenFood from '../../assets/img/folding/frozen-food.png';
import Diet from '../../assets/img/folding/diet.png';
import Pill from '../../assets/img/folding/pill.png';
import Etc from '../../assets/img/folding/etc.png';
import { Cookies, useCookies } from 'react-cookie';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { ButtonBases } from '../ButtonBases';
import { useSelector, useDispatch } from 'react-redux'; // redux
import { action } from '../../../../../reducers/search'; // redux
axios.defaults.withCredentials = true;
export default function Projects() {
  const loginNavigate = useNavigate();
  const cookies = new Cookies();
  const [, , removeCookie] = useCookies();
  const [result, setResult] = useState();
  const [issue, setIssue] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');
  const setCookie = (name, value, options) => {
    return cookies.set(name, value, { ...options });
  };

  const issues = () => {
    axios
      .post('http://localhost:9000/verify/refresh', {
        refresh: localStorage.getItem('refreshToken'),
        username: cookies.get('username'),
      })
      .then(response => {
        console.log('???');
        console.log(response.data);
        setIssue(response.data.success);
        if (response.data.success) {
          const tokendecoded = jwt_decode(response.data.access);
          setCookie('accessToken', response.data.access, {
            maxAge: tokendecoded.exp - tokendecoded.iat,
          });
        } else {
          loginNavigate('/login');
          localStorage.removeItem('refreshToken');
          removeCookie('username');
        }
      });
  };
  const verify = () => {
    let message = '';
    axios
      .post('http://localhost:9000/verify/access', {
        access: cookies.get('accessToken'),
      })
      .then(response => {
        setResult(response.data.success);
        message = response.data.message;
        console.log(response.data.success);
        if (response.data.success) {
          console.log('토큰 유효');
          alert('체크체크');
        } else {
          console.log('토큰 재발행하셈');
          issues();
        }
      });
  };
  const loginClick = () => {
    if (localStorage.getItem('refreshToken') !== null) {
      verify();
    } else {
      alert('로그인 하고 오셈');
      loginNavigate('/login');
    }
  };
  //redux
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = data => {
    dispatch(action.getSearchList(data))
      .unwrap()
      .then(response => {
        const newList = response.map(data => {
          setSearchLocation(data.containerLocation);
          return {
            name: data.containerINFO.name,
            scale: data.containerINFO.scale,
            operationDays: data.containerINFO.operationDays,
          };
        });
        console.log(newList);
        setCategoryList(categoryList.concat(newList));
      });
  };
  React.useEffect(() => {
    if (categoryList.length !== 0) {
      navigate('/search', {
        state: {
          list: categoryList,
          containerLocation: searchLocation,
        },
      });
    }
  }, [categoryList]);
  return (
    <Wrapper id="projects">
      <div style={divStyle}>
        <h1 className="font30 extraBold">내 상품에 맞는 창고 찾기</h1>
        <div className="row textCenter">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={Clothes}
              title="의류"
              action={() => {
                search('의류');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={Cosmetics}
              title="화장품/잡화"
              action={() => {
                search('화장품/잡화');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={Sport}
              title="레저/건강"
              action={() => {
                search('레저/건강');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={HomeAppliances}
              title="디지털/가전"
              action={() => {
                search('디지털/가전');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={Parenting}
              title="육아/아동"
              action={() => {
                search('육아/아동');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={Interior}
              title="생활/인테리어"
              action={() => {
                search('생활/인테리어');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={Fridge}
              title="냉장"
              action={() => {
                search('냉장');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={FrozenFood}
              title="냉동"
              action={() => {
                search('냉동');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={Diet}
              title="상온식품"
              action={() => {
                search('상온식품');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={Pill}
              title="알약"
              action={() => {
                search('알약');
              }}
            />
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <ButtonBases
              img={Etc}
              title="기타"
              action={() => {
                search('기타');
              }}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">KaKao Friends</h1>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Frodo"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => {
                  loginClick();
                }}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Neo"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert('clicked')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Apeach"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert('clicked')}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Jay-G"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert('clicked')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Ryan"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert('clicked')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Con"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert('clicked')}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
const divStyle = {
  marginLeft: '370px',
};
