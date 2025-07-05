import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("early_school_math");

config.google_drive = {
  sheets_folder_ids: ["1PeJ5ishcTCWUvjhflbQqKO6M8u9rNuec"],
  assets_folder_ids: ["1APyASIAnwhnkjaSpkLb8kgoILtBGexOR"],
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/early-school-math-app-content.git",
  content_tag_latest: "1.1.110",
};

config.android = {
  app_id: "international.idems.early_school_math",
  app_name: "Early School Math",
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.ios.app_id = "international.idems.early-school-math";
config.ios.app_name = "Early School Math"

config.web.favicon_asset = "logos/swing_favicon.png";
config.api.db_name = "early_school_math"

config.app_data.output_path = "./app_data";

// Override constants
config.app_config.APP_LANGUAGES.default = "us_en";
config.app_config.APP_LANGUAGES_META = { kw_ar: { rtl: true } };
config.app_config.APP_HEADER_DEFAULTS.title = "Early School Math";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "ESM";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Early School Math";
config.app_config.APP_THEMES.available = ["early_family_math", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "early_family_math";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";

export default config;
