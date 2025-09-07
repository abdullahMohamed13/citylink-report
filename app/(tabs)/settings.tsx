import { useState } from "react";
import { View, Text, Button } from "react-native";
import { Card, RadioButton } from "react-native-paper";
import { getLocales } from 'expo-localization'
import { ThemeName, useTheme } from "@/themes/ThemeProvider";

export default function Settings() {
    const [language, setLanguage] = useState<string>(getLocales()[0].languageCode ?? "en");
    const { currentTheme, setCurrentTheme } = useTheme();

    return <View>
        <Text>Account settings</Text>

        {/* Language */}
        <Card>
            <Text>Choose Language</Text>
            <RadioButton.Group
                onValueChange={(newValue) => setLanguage(newValue)}
                value={language}
            >
                <RadioButton.Item
                    label="العربية"
                    value='ar'
                />
                <RadioButton.Item
                    label="English"
                    value="en"
                />
            </RadioButton.Group>
        </Card>

        {/* Theming */}
        <Card>
            <Text>Choose Your Theme</Text>
            <RadioButton.Group
                onValueChange={(newValue) => setCurrentTheme(newValue as ThemeName)}
                value={currentTheme}
                >
                <RadioButton.Item
                    label="Light"
                    value='light'
                    />
                <RadioButton.Item
                    label="Dark"
                    value="dark"
                    />
            </RadioButton.Group>
        </Card>

        {/* Account deletion */}
        <Card>
            <Button title="Delete Your Account" />
            <Text>Note that: all of your info will be deleted and not accessible anymore</Text>
        </Card>

    </View>
}
