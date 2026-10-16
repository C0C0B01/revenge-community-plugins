import { getStore } from '@revenge-mod/discord/flux'
import { getModules } from '@revenge-mod/modules/finders'
import { withProps } from '@revenge-mod/modules/finders/filters'
import { after } from '@revenge-mod/patcher'

const patches: (() => void)[] = []
let multiAccountStore: object | undefined
let multiAccounts: any

export default plugin({
	start() {
		getModules(withProps('getCanUseMultiAccountMobile'), exports => {
			multiAccounts = exports
			patches.push(
				after(multiAccounts, 'getCanUseMultiAccountMobile', () => true),
			)
		})

		getStore('MultiAccountStore', store => {
			multiAccountStore = store
			Object.defineProperty(store, 'canUseMultiAccountNotifications', {
				get: () => true,
				configurable: true,
			})
		})
	},
	stop() {
		for (const unpatch of patches) unpatch()
		if (multiAccountStore)
			(
				multiAccountStore as Record<string, unknown>
			).canUseMultiAccountNotifications = undefined
	},
})
