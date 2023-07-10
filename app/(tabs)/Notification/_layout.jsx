import { Link, Stack, Tabs } from "expo-router"

export default function StackLayout() {

    return (
        <Stack>
            <Stack.Screen 
            name="index"
            options={{
                headerShown: false,
                headerTitle: "Notification",
            }}
            />
        </Stack>
    )
}
