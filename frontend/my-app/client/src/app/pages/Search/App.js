import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Topbar from './component/Topbar';
import Box from '@mui/joy/Box';
import TextField from '@mui/joy/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Slider from '@mui/material/Slider';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
export function App() {
  const location = useLocation();
  //list
  const [searchList, setSearchList] = useState(location.state.list);
  // 필터 변수들
  const [optionScale, setOptionScale] = useState(100);
  const [optionDays, setOptionDays] = useState();
  const [optionName, setOptionName] = useState();
  const onNameChange = e => {
    setOptionName(e.target.value);
  };
  const onDaysChange = e => {
    if (e.target.value !== undefined) setOptionDays(e.target.value);
  };
  const onScaleChange = (event, value) => {
    setOptionScale(value);
  };
  React.useEffect(() => {
    console.log(searchList);
  }, [searchList]);
  React.useEffect(() => {
    //FilterList();
    if (optionDays !== undefined) {
      setIsEmptyDays(false);
    }
    if (optionName !== undefined && optionName !== '') {
      setIsEmptyName(false);
    }
  }, [optionDays, optionName]);

  // 필터 값 존재 유무

  const [isEmptyDays, setIsEmptyDays] = useState(true);
  const [isEmptyName, setIsEmptyName] = useState(true);

  function FilterList() {
    fetch('http://localhost:9000/filter', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        isEmpty: {
          optionName: isEmptyName,
          optionDays: isEmptyDays,
        },
        key: {
          optionName: 'containerINFO.name',
          optionDays: 'containerINFO.operationDays',
        },
        value: {
          optionName: optionName,
          optionDays: optionDays,
        },
        essential: {
          optionScale: optionScale,
          date: location.state.date,
          productType: location.state.productType,
          containerLocation: location.state.containerLocation,
        },
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success === true) {
          searchList.length = 0;
          const newData = data.list.map(rowData => {
            return {
              name: rowData.containerINFO.name,
              scale: rowData.containerINFO.scale,
              operationDays: rowData.containerINFO.operationDays,
            };
          });
          setSearchList(searchList.concat(newData));
          console.log(searchList);
        } else setSearchList([]);
      });
  }

  // 필터 - Scale
  function Scale() {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <List sx={{ border: 2, borderRadius: 5 }}>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="면적(단위: 평)" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ paddingRight: '10px' }}>
            <br />
            <Slider
              sx={{ color: '#000080' }}
              size="lg"
              valueLabelDisplay="on"
              value={optionScale}
              onChange={onScaleChange}
            />
          </Box>
        </Collapse>
      </List>
    );
  }

  function OperationDays() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <List sx={{ border: 2, borderRadius: 5 }}>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="운영 요일" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <FormControl>
            <FormLabel id="daysSelect"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="daysSelect"
              name="daysSelect"
              value={optionDays}
              onChange={onDaysChange}
            >
              <FormControlLabel
                value=""
                control={<Radio />}
                label="제약 없음"
              />
              <FormControlLabel
                value="6m"
                control={<Radio />}
                label="주6일(월~토)"
              />
              <FormControlLabel
                value="6s"
                control={<Radio />}
                label="주6일(일~금)"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="주5일(월~금)"
              />
            </RadioGroup>
          </FormControl>
        </Collapse>
      </List>
    );
  }
  //filter 초기화
  function FilterReset() {
    setOptionScale(100);
    setOptionName('');
    setOptionDays();
    setIsEmptyName(true);
    setIsEmptyDays(true);
  }

  function chnageDaysToKorean(day) {
    if (day === '5') {
      return '주 5일(월~금)';
    } else if (day === '6s') {
      return '주 6일(일~금)';
    } else if (day === '6m') {
      return '주 6일(월~토)';
    } else if (day === '') {
      return '제약 없음';
    } else return '없음';
  }

  function SearchCard() {
    return searchList.map(list => (
      <div key={list.name}>
        <br />
        <Card
          sx={{
            minWidth: 275,
            borderRadius: 11,
            border: 0.5,
            borderColor: '#000080',
          }}
        >
          <CardContent>
            <br />
            <Typography
              sx={{ fontSize: 14, fontWeight: 'bold', color: '#000080' }}
              color="text.secondary"
              gutterBottom
            >
              회사 : {list.name}
            </Typography>
            <Typography
              sx={{ fontSize: 14, fontWeight: 'bold', color: '#000080' }}
              color="text.secondary"
              gutterBottom
            >
              면적 : {list.scale} 평
            </Typography>
            <Typography
              sx={{ fontSize: 14, fontWeight: 'bold', color: '#000080' }}
              color="text.secondary"
              gutterBottom
            >
              운영 요일 : {chnageDaysToKorean(list.operationDays)}
            </Typography>
            <Typography
              sx={{ fontSize: 14, fontWeight: 'bold', color: '#000080' }}
              color="text.secondary"
              gutterBottom
            >
              창고 위치 : {location.state.containerLocation}
            </Typography>
          </CardContent>
        </Card>
      </div>
    ));
  }

  return (
    <div>
      <Topbar />
      <SideFilter sx={{ border: 2, borderRadius: 5 }}>
        <Box
          sx={{
            color: '#000080',
            py: 2,
            display: 'grid',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
            fontsize: 14,
          }}
        >
          필터
          <TextField
            sx={{ border: 2, borderRadius: 20 }}
            placeholder="이름으로 검색하기"
            variant="solid"
            color="primary"
            onChange={onNameChange}
            value={optionName}
          />
          <Scale />
          <OperationDays />
          <Button
            sx={{ border: 2, borderRadius: 20, color: '#000080' }}
            onClick={FilterList}
          >
            검색
          </Button>
          <Button
            sx={{ border: 2, borderRadius: 20, color: '#000080' }}
            onClick={FilterReset}
          >
            초기화{' '}
          </Button>
        </Box>
      </SideFilter>
      <Wrapper>
        <h1 className="extraBold font30">검색 결과</h1>
        <br />
        <SearchCard />
        <br />
        <a
          href="/"
          className="radius8 darkBg "
          style={{ padding: '10px 20px', color: 'white' }}
        >
          뒤로가기
        </a>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.section`
  padding-top: 200px;
  width: 70%;
  padding-left: 580px;
  position: flex;
  z-index: 900;
  min-height: 100px;
`;
const SideFilter = styled.section`
  margin-top: 200px;
  margin-left: 150px;
  padding-left: 120px;
  padding-right: 0px;
  position: fixed;
  z-index: 890;
  min-height: 100px;
  width: 15%;
`;
