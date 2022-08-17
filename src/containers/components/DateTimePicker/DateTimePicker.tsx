import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

interface Props {
    openStatus: boolean
    handlerOpenStatus : () => void
}


const DateTimePicker: React.FC<Props> = (props) => {
    const [date, setDate] = useState(new Date())
    console.log("Open Status:" ,props.openStatus)


    return (
        <>
            <DatePicker
                modal
                open={!!(props.openStatus)}
                date={date}
                onConfirm={(date) => {
                    props.handlerOpenStatus()
                    setDate(date)
                }}
                onCancel={() => {
                    props.handlerOpenStatus()
                }}
            />
        </>
    )
}

export default DateTimePicker;