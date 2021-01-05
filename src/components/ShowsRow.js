import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShowTile from './ShowTile';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const ShowsRow = ({ title, shows }) => {
    const dataProvider = useRef(new DataProvider((r1,r2)=>{
        return r1.id !== r2.id;
    }));
    let dataProviderVariable = useRef(dataProvider.current.cloneWithRows(shows));
    let showsPrevValue = useRef(shows);
    if (JSON.stringify(shows)!==JSON.stringify(showsPrevValue)) {
        dataProviderVariable.current = dataProvider.current.cloneWithRows(shows);
    }
    
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
            <RecyclerListView
                layoutProvider={layoutProvider}
                dataProvider={dataProviderVariable.current}
                rowRenderer={rowRenderer}
                isHorizontal={true}
                scrollViewProps={{showsHorizontalScrollIndicator:false}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    ParentContainer: {
        flex:1,
        marginHorizontal: 30,
        marginVertical: 0,
        height:250,
        width:900,
        
    },
    rowTitle: {
        fontSize: 20,
        marginBottom: 20,
        color: "white"
    }
});
export default ShowsRow;