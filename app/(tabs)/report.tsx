import {View, Text } from 'react-native'
import {TextInput} from 'react-native-paper'

export default function ReportScreen() {
    return <View>
        <Text>Report</Text>
        <TextInput
            // autoCapitalize=""
            label='Report Title'
            mode="outlined"
            placeholder="type the report title"
        />
        <TextInput
            autoCapitalize="words"
            label='Report Description'
            mode="outlined"
            placeholder="type the report description"
        />
    </View>
}
