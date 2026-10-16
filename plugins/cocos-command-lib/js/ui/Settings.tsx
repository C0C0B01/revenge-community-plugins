import DonateCard from './DonateCard'
import Commands from "./Commands"
import Page from '@revenge-mod/components/Page'
import { ReactNative } from "@revenge-mod/react"
import { Design } from '@revenge-mod/discord/design'

// thank u for most of this ui kmmiioo :)
export default function Settings() {
  const { ScrollView, View } = ReactNative;
  const { Stack } = Design;

	return (
		<Page>
			<View style={{ flex: 1, position: 'relative' }}>
				<ScrollView contentContainerStyle={{ padding: 0 }}>
					<Stack>
            <DonateCard />
            <Commands/>
					</Stack>
				</ScrollView>
			</View>
		</Page>
	)
}
