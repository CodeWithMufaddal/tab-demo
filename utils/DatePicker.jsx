import { View, Text, Pressable, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { GlobStyles, applyStyles } from '../style';
import { ThemedText } from '../components/Themed';
import { icons } from '../constants';
import styles from '../components/common/header/screenheader.style';

const DatePicker = ({ label, icon }) => {

    const [date, setDate] = useState(null)
    const [picker, setPicker] = useState(false)

    // const handleDateChange = useCallback((e) => {
    //     console.log(e.nativeEvent.timestamp, 'change date')
    //     setDate(new Date(e.nativeEvent.timestamp))
    //     handleClose()
    // }, [])



    const renderPicker = () => {
        if (picker) {
            return (
                <RNDateTimePicker
                    style={{ width: 200 }}
                    value={date || new Date()}
                    mode="date"
                    placeholder="Select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2020-12-12"
                    confirmBtnText="OK"
                    cancelBtnText="Cancel"
                    onDateChange={date => setDate(date)}
                />
            );
        }
    }



    return (
        <View style={{ width: "45%" }}>
            <Pressable onPress={() => setPicker(!picker)}>
                <View style={[GlobStyles.flex, GlobStyles.flexRow, GlobStyles.flexCenterBetween, GlobStyles.transparent.button.small, { flex: 1, paddingVertical: 3, paddingHorizontal: 15, marginVertical: 10 }]}>
                    <ThemedText style={applyStyles.labelText}>
                        {date ? date.toDateString() : label}
                    </ThemedText>
                    <View style={[applyStyles.btnContainer, GlobStyles.dFlex, { borderWidth: 0, justifyContent: "flex-end" }]}>
                        <Image
                            source={icon}
                            resizeMode="center"
                            style={[styles.btnImg("70%")]}
                        />
                    </View>
                </View>
            </Pressable>


            {renderPicker()}
        </View>
    )
}

export default DatePicker