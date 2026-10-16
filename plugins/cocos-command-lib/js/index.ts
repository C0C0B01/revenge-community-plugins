import * as types from "./types";
import * as modules from "./modules"
import * as commands from "./commands"
import Settings from "./ui/Settings";
import { patchCommands } from "./commands";

const commandLib = {
  types,
	modules,
	commands
};

(globalThis as any).commandlib = commandLib

export default plugin({
  start({ decorate }) {
    patchCommands();

		decorate((plugin) => {
			plugin.api.unscoped.commandlib = commandLib
		})
  },
	SettingsComponent: Settings,
})

type CommandLibApi = typeof commandLib

declare module '@revenge-mod/plugins/types' {
	interface UnscopedPluginApi {
		commandslib: CommandLibApi
	}
}
