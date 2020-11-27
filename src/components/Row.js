import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import ShowTile from './ShowTile';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const Row = ({ title, shows }) => {
    const dataProvider = useRef(new DataProvider((r1,r2)=>{
        return r1.id !== r2.id;
    }));
    const [dataProviderStateVariable,setDataProviderStateVariable] = useState(dataProvider.current.cloneWithRows(shows));
    //to update data inside dataProvider => dataProvider.current.cloneWithRows(newData);
    let {width} = Dimensions.get("window");
    const layoutProvider = new LayoutProvider(
        index => {
            return 0;
        },
        (type,dim) => {
            switch(type){
                case 0 :
                    dim.width = 281;
                    dim.height = 400;
                    break;
                default :
                    dim.width=0;
                    dim.height=0;
            }
        }
    );

    function rowRenderer(type, data) {
        switch (type) {
            case 0:
                return (
                        <ShowTile showDetails={data}></ShowTile>
                );
            default:
                return null;
        }
    }

    return (
        <View style={styles.ParentContainer}>
            <Text style={styles.rowTitle}>{title}</Text>
            {/* horizontal row of program/shows */}
            <RecyclerListView
                layoutProvider={layoutProvider}
                dataProvider={dataProviderStateVariable}
                rowRenderer={rowRenderer}
                isHorizontal={true}
                scrollViewProps={{showsHorizontalScrollIndicator:false}}
            />
            {/* <FlatList
                data={shows}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                            <ShowTile showDetails={item}></ShowTile>
                    );
                }}
            /> */}

        </View>
    );
};

const styles = StyleSheet.create({
    ParentContainer: {
        flex:1,
        marginHorizontal: 30,
        marginVertical: 30,
        height:250,
        width:900,
        /* borderWidth:1,
        borderColor:"white", */
    },
    rowTitle: {
        fontSize: 20,
        marginBottom: 20,
        color: "white"
    }
});
export default Row;