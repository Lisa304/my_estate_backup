import React from "react";
import {Text, View, Dimensions} from 'react-native';
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import TestDropdown from "../AddObject/TestDropdown";

const HEIGHT =  Math.floor(Dimensions.get("window").height/20);
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;
const CAR_DATA=["一樓平面","坡道平面","坡道機械","升降平面","升降機械","塔式機械"];
const PUERPOSE_DATA=["住宅","住宅","住宅","住宅","住宅"];

const BulidingBlock = ({tmpdata,setTmpdata}) => {
    return (
        <>
        <View>
            <FirstBlockEntry title="總樓高"></FirstBlockEntry>
            <FirstBlockEntry title="地址"></FirstBlockEntry>
            <FirstBlockEntry title="門牌"></FirstBlockEntry>
            <FirstBlockEntry title="建坪"></FirstBlockEntry>
            <FirstBlockEntry title="總價"></FirstBlockEntry>
            <FirstBlockEntry title="格局"></FirstBlockEntry>
            <FirstBlockEntry 
                title="車位型態" 
                input={<TestDropdown datas = {CAR_DATA} width = {KEYINPUT_WIDTH/2} 
                tmpdata={tmpdata} setTmpdata={setTmpdata} 
                label = "車位型態" 
                />}
            />
            <FirstBlockEntry 
                title="用途" 
                input={<TestDropdown datas = {PUERPOSE_DATA} width = {KEYINPUT_WIDTH/2}
                tmpdata={tmpdata} setTmpdata={setTmpdata} 
                label = "車位型態"  />}
            />
            <Text>{JSON.stringify(tmpdata)}</Text>
        </View>
        </>
    )
}

export default BulidingBlock;