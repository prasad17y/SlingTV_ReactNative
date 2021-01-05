import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import ToastExample from '../native_modules/ToastExample';

const MenuBar = ({menuItems}) => {
    //for tab animation
    const [layoutComputed, setLayoutComputed] = useState(false);
    const [menuItemsDetails,setMenuItemsDetails] = useState(menuItems.map((menuTitle,index)=>{
        let details = {
            menuTitle,
            index,
            width : 0,
        };
        return details;
    }));
    let animatedStyles;
    const width = useSharedValue(0);
    const left = useSharedValue(0);
    
    animatedStyles = useAnimatedStyle(()=>{
        if(layoutComputed == false){
            return {};
        }
        return {
            left:left.value,
            width:width.value,
        }
    });

    function onTabPress(menuIndex) {
        //ToastExample.show("Tab Pressed", ToastExample.SHORT);
        left.value = withSpring(distanceFromLeft(menuIndex));
        width.value = withSpring(menuItemsDetails[menuIndex].width);
    }

    function distanceFromLeft(index){
        let dist=0;
        for(let i=0;i<index;i++){
            dist += menuItemsDetails[i].width + 30;
        }
        return dist;
    }
    
    useEffect(()=>{
        if(!layoutComputed){
            return;
        }

        onTabPress(0);
    },[layoutComputed]);
    
    return (
        <View style={styles.ParentContainer}>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    let menuIndex;
                    menuItemsDetails.forEach((element,index) => {
                        if(element.menuTitle == item){
                            menuIndex = index;
                        }
                    });
                    
                    return (
                        <TouchableHighlight 
                            style={styles.tab} 
                            underlayColor={null}
                            onPress={()=>{onTabPress(menuIndex);}}
                            onLayout={(event) => {
                                var {width} = event.nativeEvent.layout;
                                menuItemsDetails[menuIndex].width = width;
                                if(menuIndex==menuItemsDetails.length-1){
                                    setLayoutComputed(true);
                                }
                            }}
                            
                        >
                            <Text style={styles.menuTitle}>{item}</Text>
                        </TouchableHighlight>
                    );
                }}
            />
            <View style={styles.tabHighlighterContainer}>
                {/* this is the view which moves during animation */}
                <Animated.View style={[styles.tabHighlighter,animatedStyles]} >

                </Animated.View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    ParentContainer: {
        marginHorizontal: 30,
        marginTop: 30,
        borderBottomWidth:1,
        borderBottomColor:"white",
    },
    tabHighlighterContainer: {
        height: 4,
    },
    tabHighlighter: {
        backgroundColor: "darkorange",
        position:"absolute",
        top:0,
        bottom:0,
    },
    animatedBorder : {
        borderBottomWidth: 4,
        borderColor: "darkorange",
    },
    menuTitle: {
        fontSize: 20,
        color: "white"
    },
    tab: {
        marginRight:30,
    }
});
export default MenuBar;