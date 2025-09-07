import { Text, View, StyleSheet } from "react-native";
import i18n from "@/localization/translations";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text className="bg-blue-600 text-white p-4 rounded-lg text-4xl">{i18n.t("welcome")}</Text>
      <Text className="bg-red-600 text-white p-4 rounded-lg text-2xl">{i18n.t('pickup')}</Text>
    </View>
  );
}

// Styles 
const styles = StyleSheet.create({
  view: {
    flex: 1,
    gap: 4,
    // marginHorizontal: 10,
    // justifyContent: "center",
    // alignItems: "center",
  },
})
