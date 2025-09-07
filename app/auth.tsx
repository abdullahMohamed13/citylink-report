import { Link } from "expo-router";
import { KeyboardAvoidingView, View, Platform } from "react-native";

import { Text, TextInput } from 'react-native-paper'

export default function AuthScreen() {
    return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View>
            <Text>Create Account</Text>
        </View>

        <TextInput
            autoCapitalize="none"
            label='Email'
            mode="outlined"
            placeholder="example@gmail.com"
            keyboardType="email-address"
        />
        <Link href='/' className="text-5xl flex justify-center items-center underline">Go Home</Link>
    </KeyboardAvoidingView>
}
