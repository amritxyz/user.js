/*** PERFORMANCE CORE ********************************************/

/** Rendering (GPU) **/
user_pref("gfx.webrender.all", true);
user_pref("gfx.content.skia-font-cache-size", 32);
user_pref("browser.display.use_system_colors", false);

/** Image & Canvas **/
user_pref("image.mem.decode_bytes_at_a_time", 32768);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);

/** Networking **/
user_pref("network.http.max-connections", 500);
user_pref("network.http.max-persistent-connections-per-server", 8);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 3);
user_pref("network.http.request.max-start-delay", 5);

/** DNS cache **/
user_pref("network.dnsCacheEntries", 2000);
user_pref("network.dnsCacheExpiration", 900);

/** Speculative Connections OFF **/
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

/** Memory / Disk Caching **/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.capacity", 131072);
user_pref("browser.cache.memory.max_entry_size", 20480);

/** Media Performance **/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.memory_caches_combined_limit_kb", 256000);
user_pref("media.cache_readahead_limit", 120);
user_pref("media.cache_resume_threshold", 60);

/** Session History **/
user_pref("browser.sessionhistory.max_total_viewers", -1);
user_pref("browser.sessionstore.max_tabs_undo", 10);


/*** DEBLOAT & DISABLE CRAP **************************************/

/** UI Crap **/
user_pref("browser.uidensity", 1);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.chrome.site_icons", false);

/** New Tab / Home Bloat **/
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);

/** Disable ML/AI/Chat **/
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.sidebar", false);

/** Disable Pocket **/
user_pref("extensions.pocket.enabled", false);

/** Disable Firefox Accounts / Sync **/
user_pref("identity.fxaccounts.enabled", false);

/** Disable Search Suggestions / URL Bar bloat **/
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.shortcuts.bookmarks", false);
user_pref("browser.urlbar.shortcuts.history", false);

/** Disable Form Autofill **/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/** Disable Password Manager **/
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);

/** Disable Normandy / Recommendations **/
user_pref("browser.discovery.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** Disable Telemetry **/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);

/** Disable Safe Browsing Remote Checks (keep local protections) **/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** Disable UITour & misc marketing **/
user_pref("browser.uitour.enabled", false);

/** Disable content analysis (anti-keystroke scanning) **/
user_pref("browser.contentanalysis.enabled", false);

/** Misc cleanup **/
user_pref("permissions.manager.defaultsUrl", "");
user_pref("network.IDN_show_punycode", true);


/*** SECURITY (does not reduce performance) ***********************/
user_pref("dom.security.https_only_mode", true);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.cert_pinning.enforcement_level", 2);


/*** DOWNLOADS ****************************************************/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.alwaysOpenPanel", false);


/*** FINAL MISC ***************************************************/
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.aboutConfig.showWarning", false);
