import React, { Suspense, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/styles';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
export default function GroupSizesColors() {
  //변수 선언
  // 달력 변수
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  // 상품 유형 선택 변수
  const [product, setProduct] = React.useState('');
  const productChange = event => {
    setProduct(event.target.value);
  };
  // 칭고 위치 선택 변수
  const [container, setContainer] = React.useState('');
  const containerChange = event => {
    setContainer(event.target.value);
  };
  const [searchList, setSearchList] = React.useState([]);
  //검색
  const [searchDate, setSearchDate] = useState(['', '']);
  const [searchProduct, setSearchProduct] = useState('');
  const [searchContainer, setSearchContainer] = useState('');
  const navigate = useNavigate();
  const onclickSearch = () => {
    const front = {
      date: [
        dayjs(dateRange[0]).format('YYYY-MM-DD'),
        dayjs(dateRange[1]).format('YYYY-MM-DD'),
      ],
      productType: product,
      containerLocation: container,
    };
    fetch('http://localhost:9000/search', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(front),
    })
      .then(response => response.json())
      .then(data => {
        const newData = data.map(rowData => {
          if (rowData.containerINFO !== undefined) {
            return {
              name: rowData.containerINFO.name,
              scale: rowData.containerINFO.scale,
              operationDays: rowData.containerINFO.operationDays,
            };
          } else {
            return {
              name: '',
              scale: 0,
              operationDays: '',
            };
          }
        });
        setSearchList(searchList.concat(newData));
        setSearchDate(data[0].date);
        setSearchProduct(data[0].productType);
        setSearchContainer(data[0].containerLocation);
      });
  };
  useEffect(() => {
    if (searchDate !== [] && searchProduct !== '' && searchContainer !== '') {
      navigate('/search', {
        state: {
          date: searchDate,
          productType: searchProduct,
          containerLocation: searchContainer,
          list: searchList,
        },
      });
    }
  }, [searchDate, searchProduct, searchContainer, searchList]);
  //로딩 화면
  function SearchButton() {
    return (
      <Suspense fallback={<p>로딩 중...</p>}>
        <Button
          variant="contained"
          color="error"
          sx={{ borderRadius: '7px', bgcolor: 'warning.main' }}
          onClick={onclickSearch}
        >
          검색
        </Button>
      </Suspense>
    );
  }
  //달력
  const useStyles = makeStyles({
    input: {
      borderRadius: '30px',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      height: '60px',
      width: '300px',
      borderColor: 'orange',
      backgroundColor: 'dark',
      '& .react-date-picker__wrapper': {
        padding: '0 10px',
        borderColor: '#ccc',
        borderRadius: '4px',
      },
      '& .react-date-picker--open': {
        borderColor: 'red',
      },
      inputFormat: 'yyyy-MM-dd',
    },
    label: {
      fontWeight: 'bold',
      width: '100px',
      marginTop: '-7px',
      marginLeft: '12px',
      backgroundColor: 'dark',
      position: 'absolute',
      zIndex: '2000',
      fontSize: '11px',
      fontFamily: 'sans-serif',
      paddingLeft: '10px',
    },
    test: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        // borderColor: "red"
        border: 'none',
      },
    },
  });
  function Calendar() {
    const classes = useStyles();
    return (
      <>
        <label className={classes.label}>Calendar</label>
        <DatePicker
          className={classes.input}
          dateFormat="yyyy-MM-dd"
          selectsRange={true}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={update => {
            setDateRange(update);
          }}
          isClearable={true}
        />
      </>
    );
  }
  //컴포넌트 리턴 문
  return (
    <Wrapper className="white radius8 center ">
      <Box
        sx={{
          borderRadius: '40px',
          display: 'flex',
          flexDirection: 'row', //row는 box안의 컴포넌트 레이아웃이 가로로 줄 세워 줌 column은 반대
          alignItems: 'center',
          justifyContent: 'center', //중앙으로 오게 함
          border: 1,
          borderColor: 'orange',
          backgroundColor: 'white',
          '& > *': {
            m: 1,
          },
        }}
      >
        <Box
          sx={{
            minWidth: 150,
            maxHeight: 100,
            border: 2,
            borderRadius: '30px',
            borderColor: 'orange',
          }}
        >
          <FormControl
            sx={{ m: 0.7, width: 300 }}
            size="small"
            //classes={{ root: classes.test }}
          >
            <InputLabel id="demo-simple-select-label">
              상품 유형 선택
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={product}
              label="Age"
              onChange={productChange}
            >
              <MenuItem value={'의류'}>의류</MenuItem>
              <MenuItem value={'화장품/잡화'}>화장품/잡화</MenuItem>
              <MenuItem value={'레저/건강'}>레저/건강</MenuItem>
              <MenuItem value={'디지털/가전'}>디지털/가전</MenuItem>
              <MenuItem value={'육아/아동'}>육아/아동</MenuItem>
              <MenuItem value={'생활/인테리어'}>생활/인테리어</MenuItem>
              <MenuItem value={'냉장'}>냉장</MenuItem>
              <MenuItem value={'냉동'}>냉동</MenuItem>
              <MenuItem value={'상온식품'}>상온식품</MenuItem>
              <MenuItem value={'기타'}>기타</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl sx={{ height: '100%' }}>
          <Calendar fullWidth />
        </FormControl>
        <Box
          sx={{
            minWidth: 150,
            border: 2,
            borderRadius: '30px',
            borderColor: 'orange',
          }}
        >
          <FormControl
            FormControl
            sx={{ m: 0.7, width: 300 }}
            size="small"
            //classes={{ root: classes.test }}
          >
            <InputLabel id="demo-simple-select-label">
              창고 위치 선택
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={container}
              label="Age"
              onChange={containerChange}
            >
              <MenuItem value={'서울시'}>서울시</MenuItem>
              <MenuItem value={'부산시'}>부산시</MenuItem>
              <MenuItem value={'울산시'}>울산시</MenuItem>
              <MenuItem value={'대구시'}>대구시</MenuItem>
              <MenuItem value={'대전시'}>대전시</MenuItem>
              <MenuItem value={'제주도'}>제주도</MenuItem>
              <MenuItem value={'경상남도'}>경상남도</MenuItem>
              <MenuItem value={'경상북도'}>경상북도</MenuItem>
              <MenuItem value={'전라남도'}>전라남도</MenuItem>
              <MenuItem value={'전라북도'}>전라북도</MenuItem>
              <MenuItem value={'충청남도'}>충청남도</MenuItem>
              <MenuItem value={'충청북도'}>충청북도</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <SearchButton key="검색">검색</SearchButton>
      </Box>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding-top: 100px;
  width: 90%;
  padding-left: 200px;
  position: fixed;
  z-index: 900;
  min-height: 100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
