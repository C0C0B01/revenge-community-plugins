import { getModules } from '@revenge-mod/modules/finders'
import { withProps } from '@revenge-mod/modules/finders/filters'

const EXPERIMENT_ID = '2025-08-animated-keyboard-android'

// todo: type this
let manager:any

export default plugin({
    start() {
        getModules(
            withProps('overrideBucket'),
            exports => {
                manager = exports
                exports.overrideBucket('apex', EXPERIMENT_ID, 1)
            },
        )
    },
    stop() {
        manager?.overrideBucket('apex', EXPERIMENT_ID, null)
        manager = undefined
    },
})
