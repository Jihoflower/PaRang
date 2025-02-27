import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Grid, Icon } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import LocationSelect from "./LocationSelect";
import FishingWeather from "./FishingWeather";
import FishingBoat from './BoatPage/FishingBoat';

import { useEffect, useState } from "react";
import ShowMoreFishingInfo from "./ShowMorePage/ShowMoreFishingInfo";
import { HowToUse } from './HowToUse';
import { HiOutlineMap } from 'react-icons/hi'

import { WiDaySunnyOvercast } from 'react-icons/wi';
import { GiFishingPole } from 'react-icons/gi';
import { GiFishingBoat } from 'react-icons/gi';



const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    // 사이드바 내용
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    <Typography>{children}</Typography>
                </Box>
            )}s
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export const VerticalTabs = ({ setPortName, tdWeather, city, harbor, setCity, setHarbor, btList }) => {
    const [value, setValue] = React.useState(0);
    const [putComponent, setPutComponent] = React.useState(<HowToUse />)

    const testHandler = () => {
        setPortName("송정항")
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const displayStyle = {
        display: 'block'
    }
    return (

        <Grid>
            <Box
                sx={{ flexGrow: 1, display: 'flex', height: '100vh' }}
            >
                <Grid item xs={2}>
                    <Tabs

                        orientation="vertical"
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ width: '100%', borderRight: 1, borderColor: 'divider' }}

                        spacing={2}
                    >
                        <Tab
                            onClick={() => { setPutComponent(<HowToUse setPortName={setPortName} tdWeather={tdWeather} />) }}
                            label="사용하기"{...a11yProps(0)} >
                        </Tab>
                        <Tab
                            sx={{ width: "100%", alignContent: 'left', p: 0, }}
                            icon={<HiOutlineMap style={{ fontSize: "25px", color: "#AFC9DC" }} />}
                            onClick={() => { setPutComponent(<LocationSelect tdWeather={tdWeather}  />) }}
                            label="지역 선택"{...a11yProps(1)} >
                        </Tab>
                        <Tab
                            sx={{ width: "100%", alignContent: 'left', p: 0 }}
                            icon={<WiDaySunnyOvercast style={{ fontSize: "25px", color: "blue" }} />}
                            onClick={() => { setPutComponent(<FishingWeather tdWeather={tdWeather} />) }}
                            label="기상 정보"{...a11yProps(2)} >
                        </Tab>
                        <Tab
                            sx={{ width: "100%", alignContent: 'left', p: 0 }}
                            icon={<GiFishingBoat style={{ fontSize: "25px", color: "blue" }} />}
                            onClick={() => { setPutComponent(<FishingBoat  tdWeather={tdWeather} btList={btList} />) }}
                            label="배 정보"{...a11yProps(3)} >
                        </Tab>
                        <Tab
                            sx={{ width: "100%", alignContent: 'left', p: 0 }}
                            icon={<GiFishingPole style={{ fontSize: "25px", color: "blue" }} />}
                            onClick={() => { setPutComponent(<ShowMoreFishingInfo  tdWeather={tdWeather} />) }}
                            label="추천정보"{...a11yProps(4)} >
                        </Tab>
                    </Tabs>
                </Grid>


                <Grid item xs={10} display={'block'} >
                    {putComponent}
                </Grid>

            </Box >
        </Grid >
    );
}