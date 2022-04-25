!function (e) {
    "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    "use strict";
    var t = {
        fuse_blocked_url: [],
        fuse_breakpoints: {m: 960, s: 600, xs: 0},
        fuse_cdn: "//cdn.fuseplatform.net/publift/tags/",
        fuse_id: 2080,
        fuse_industry: ["IAB1"],
        fuse_settings: {
            adblock: !1,
            amazonUam: {enabled: !1},
            blockthrough: !0,
            cmp: !0,
            confiant: !1,
            disableAutoLoadSlots: !1,
            disable_quantcast: !1,
            headerbidding: 1e3,
            identity: {enabled: !1},
            lazy: !1,
            prebid: {
                breakpoint_options: {
                    m: {enabled: !0, timeout: 1e3},
                    s: {enabled: !0, timeout: 1e3},
                    xs: {enabled: !0, timeout: 1e3}
                }, defaultTimeout: 1e3, enabled: !0, sendAllBids: !1
            },
            quickstart: !1,
            responsive: !0,
            strict_cmp: !1,
            useDomObserver: !1,
            publication_metadata: {
                publication_id: 1,
                generation_version: "3.2123.0",
                generation_time: "2021-12-01T16:59:20.742Z",
                revision: "v2"
            }
        },
        fuse_slots: [{
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307534"}}, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414341_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414341_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414341_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414341_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414341_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414341_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414341_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_1@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_1@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_1@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_1@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_1@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_1@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_1@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414341",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/home_incontent_1"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["s", "xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m", "s"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307536"}}, {
                bidder: "connectad",
                labelAny: ["s", "xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m", "s"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["s", "xs"],
                params: {publisherSubId: "22025414344_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414344_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414344_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414344_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m", "s"],
                params: {publisherSubId: "22025414344_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414344_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414344_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["s", "xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m", "s"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["s", "xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_3@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_3@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_3@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_3@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m", "s"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_3@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_3@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_3@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["s", "xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m", "s"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414344",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [[300, 250], [728, 90]],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/home_incontent_3"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307538"}}, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414347_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414347_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414347_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414347_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414347_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414347_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414347_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_2@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_2@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_2@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_2@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_2@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_2@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_2@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414347",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/home_incontent_2"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["s", "xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m", "s"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307540"}}, {
                bidder: "connectad",
                labelAny: ["s", "xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m", "s"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["s", "xs"],
                params: {publisherSubId: "22025414350_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414350_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414350_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414350_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m", "s"],
                params: {publisherSubId: "22025414350_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414350_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414350_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["s", "xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m", "s"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["s", "xs"],
                params: {adSlot: "71161633/REAL_arealme/home_footer@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_footer@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_footer@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_footer@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m", "s"],
                params: {adSlot: "71161633/REAL_arealme/home_footer@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_footer@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_footer@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["s", "xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m", "s"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414350",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [[300, 250], [728, 90]],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/home_footer"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["s", "xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["m", "xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m", "s"],
                params: {placementId: "19300659", size: "728x90"}
            }, {bidder: "appnexus", params: {placementId: "19307543"}}, {
                bidder: "connectad",
                labelAny: ["s", "xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["m", "xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m", "s"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "criteo",
                labelAny: ["s", "xs"],
                params: {publisherSubId: "22025414353_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414353_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414353_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["m", "xs"],
                params: {publisherSubId: "22025414353_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m", "s"],
                params: {publisherSubId: "22025414353_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {bidder: "ix", labelAny: ["s", "xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["m", "xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m", "s"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "openx",
                labelAny: ["s", "xs"],
                params: {delDomain: "publift-d.openx.net", size: "300x250", unit: "541218231"}
            }, {
                bidder: "openx",
                labelAny: ["xs"],
                params: {delDomain: "publift-d.openx.net", size: "320x100", unit: "541218231"}
            }, {
                bidder: "openx",
                labelAny: ["xs"],
                params: {delDomain: "publift-d.openx.net", size: "320x50", unit: "541218231"}
            }, {
                bidder: "openx",
                labelAny: ["m", "xs"],
                params: {delDomain: "publift-d.openx.net", size: "336x280", unit: "541218231"}
            }, {
                bidder: "openx",
                labelAny: ["m", "s"],
                params: {delDomain: "publift-d.openx.net", size: "728x90", unit: "541218231"}
            }, {
                bidder: "pubmatic",
                labelAny: ["s", "xs"],
                params: {adSlot: "71161633/REAL_arealme/category_header@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_header@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_header@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m", "xs"],
                params: {adSlot: "71161633/REAL_arealme/category_header@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m", "s"],
                params: {adSlot: "71161633/REAL_arealme/category_header@728x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["s", "xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["m", "xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m", "s"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414353",
            sizeMapping: {
                m: [[336, 280], [728, 90]],
                s: [[300, 250], [728, 90]],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/category_header"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307545"}}, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414356_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414356_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414356_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414356_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414356_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414356_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414356_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_2@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_2@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_2@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_2@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_2@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_2@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_2@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414356",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/category_incontent_2"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307535"}}, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414449_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414449_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414449_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414449_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414449_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414449_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414449_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_5@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_5@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_5@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_5@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_5@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_5@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_5@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414449",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/home_incontent_5"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307537"}}, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414452_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414452_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414452_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414452_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414452_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414452_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414452_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_4@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_4@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_4@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_4@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_4@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_4@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_4@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414452",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/home_incontent_4"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307539"}}, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414455_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414455_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414455_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414455_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414455_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414455_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414455_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_6@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_6@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_6@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_6@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_6@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_6@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_incontent_6@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414455",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/home_incontent_6"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "120x600"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "160x600"}
            }, {bidder: "appnexus", params: {placementId: "19307542"}}, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "120x600"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "160x600"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414458_1486316_160x600", size: "160x600", zoneId: "1486316"}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [120, 600]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [160, 600]}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_vrec_1@120x600", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_vrec_1@160x600", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "120x600"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "160x600"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414458",
            sizeMapping: {m: [[120, 600], [160, 600]], s: [], xs: []},
            sizes: [[120, 600], [160, 600]],
            slot: "/71161633,22556524959/REAL_arealme/category_vrec_1"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["s", "xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m", "s"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307544"}}, {
                bidder: "connectad",
                labelAny: ["s", "xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m", "s"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["s", "xs"],
                params: {publisherSubId: "22025414461_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414461_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414461_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414461_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m", "s"],
                params: {publisherSubId: "22025414461_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414461_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414461_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["s", "xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m", "s"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["s", "xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_1@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_1@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_1@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_1@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m", "s"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_1@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_1@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_1@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["s", "xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m", "s"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414461",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [[300, 250], [728, 90]],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/category_incontent_1"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307546"}}, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414464_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414464_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414464_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_footer@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_footer@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_footer@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414464",
            sizeMapping: {m: [[728, 90], [970, 90], [970, 250]], s: [], xs: []},
            sizes: [[728, 90], [970, 90], [970, 250]],
            slot: "/71161633,22556524959/REAL_arealme/category_footer"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["s", "xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m", "s"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307548"}}, {
                bidder: "connectad",
                labelAny: ["s", "xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m", "s"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["s", "xs"],
                params: {publisherSubId: "22025414467_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414467_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414467_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025414467_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m", "s"],
                params: {publisherSubId: "22025414467_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414467_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025414467_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["s", "xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m", "s"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["s", "xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_3@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_3@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_3@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_3@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m", "s"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_3@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_3@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/category_incontent_3@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["s", "xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m", "s"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025414467",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [[300, 250], [728, 90]],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/category_incontent_3"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["s", "xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m", "s"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307533"}}, {
                bidder: "connectad",
                labelAny: ["s", "xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m", "s"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["s", "xs"],
                params: {publisherSubId: "22025437868_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025437868_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025437868_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025437868_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m", "s"],
                params: {publisherSubId: "22025437868_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025437868_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025437868_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["s", "xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m", "s"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "pubmatic",
                labelAny: ["s", "xs"],
                params: {adSlot: "71161633/REAL_arealme/home_header@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_header@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_header@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/home_header@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m", "s"],
                params: {adSlot: "71161633/REAL_arealme/home_header@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_header@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/home_header@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["s", "xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m", "s"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025437868",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [[300, 250], [728, 90]],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/home_header"
        }, {
            attributes: {
                adblock: !1,
                headerbidding: !1,
                interscroller: !1,
                interstitial: !1,
                lazy: !1,
                refresh: 20,
                sticky: !1
            },
            bids: [{
                bidder: "appnexus",
                labelAny: ["s", "xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {bidder: "appnexus", params: {placementId: "19307541"}}, {
                bidder: "connectad",
                labelAny: ["s", "xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "criteo",
                labelAny: ["s", "xs"],
                params: {publisherSubId: "22025437871_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {bidder: "ix", labelAny: ["s", "xs"], params: {siteId: "509789", size: [320, 50]}}, {
                bidder: "pubmatic",
                labelAny: ["s", "xs"],
                params: {adSlot: "71161633/REAL_arealme/mob_footer_sticky@300x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["s", "xs"],
                params: {adSlot: "71161633/REAL_arealme/mob_footer_sticky@320x50", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["s", "xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025437871",
            interscrollerAttributes: {showBanner: !1, zIndex: 0},
            sizeMapping: {l: [], m: [], s: [[300, 50], [320, 50]], xl: [], xs: [[300, 50], [320, 50]]},
            sizes: [[300, 50], [320, 50]],
            slot: "/71161633,22556524959/REAL_arealme/mob_footer_sticky",
            stickyAttributes: {allowClose: !1, bgOpacity: 0, compact: !1}
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["s", "xs"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x100"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "320x50"}
            }, {
                bidder: "appnexus",
                labelAny: ["xs"],
                params: {placementId: "19300659", size: "336x280"}
            }, {
                bidder: "appnexus",
                labelAny: ["m", "s"],
                params: {placementId: "19300659", size: "728x90"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "970x90"}
            }, {bidder: "appnexus", params: {placementId: "19307547"}}, {
                bidder: "connectad",
                labelAny: ["s", "xs"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x100"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "336x280"}
            }, {
                bidder: "connectad",
                labelAny: ["m", "s"],
                params: {networkId: "10047", siteId: "1043047", size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["s", "xs"],
                params: {publisherSubId: "22025438072_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025438072_1486320_320x100", size: "320x100", zoneId: "1486320"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025438072_1486319_320x50", size: "320x50", zoneId: "1486319"}
            }, {
                bidder: "criteo",
                labelAny: ["xs"],
                params: {publisherSubId: "22025438072_1486323_336x280", size: "336x280", zoneId: "1486323"}
            }, {
                bidder: "criteo",
                labelAny: ["m", "s"],
                params: {publisherSubId: "22025438072_1486324_728x90", size: "728x90", zoneId: "1486324"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025438072_1486326_970x250", size: "970x250", zoneId: "1486326"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025438072_1486325_970x90", size: "970x90", zoneId: "1486325"}
            }, {bidder: "ix", labelAny: ["s", "xs"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [320, 50]}
            }, {bidder: "ix", labelAny: ["xs"], params: {siteId: "509789", size: [320, 100]}}, {
                bidder: "ix",
                labelAny: ["xs"],
                params: {siteId: "509789", size: [336, 280]}
            }, {bidder: "ix", labelAny: ["m", "s"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [970, 250]}}, {
                bidder: "openx",
                labelAny: ["s", "xs"],
                params: {delDomain: "publift-d.openx.net", size: "300x250", unit: "541218230"}
            }, {
                bidder: "openx",
                labelAny: ["xs"],
                params: {delDomain: "publift-d.openx.net", size: "320x100", unit: "541218230"}
            }, {
                bidder: "openx",
                labelAny: ["xs"],
                params: {delDomain: "publift-d.openx.net", size: "320x50", unit: "541218230"}
            }, {
                bidder: "openx",
                labelAny: ["xs"],
                params: {delDomain: "publift-d.openx.net", size: "336x280", unit: "541218230"}
            }, {
                bidder: "openx",
                labelAny: ["m", "s"],
                params: {delDomain: "publift-d.openx.net", size: "728x90", unit: "541218230"}
            }, {
                bidder: "openx",
                labelAny: ["m"],
                params: {delDomain: "publift-d.openx.net", size: "970x250", unit: "541218230"}
            }, {
                bidder: "openx",
                labelAny: ["m"],
                params: {delDomain: "publift-d.openx.net", size: "970x90", unit: "541218230"}
            }, {
                bidder: "pubmatic",
                labelAny: ["s", "xs"],
                params: {adSlot: "71161633/REAL_arealme/quiz_header@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/quiz_header@320x100", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/quiz_header@320x50", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/quiz_header@336x280", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m", "s"],
                params: {adSlot: "71161633/REAL_arealme/quiz_header@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/quiz_header@970x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/quiz_header@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["s", "xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x100"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "320x50"}
            }, {
                bidder: "triplelift",
                labelAny: ["xs"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "336x280"}
            }, {
                bidder: "triplelift",
                labelAny: ["m", "s"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025438072",
            sizeMapping: {
                m: [[728, 90], [970, 90], [970, 250]],
                s: [[300, 250], [728, 90]],
                xs: [[300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
            },
            sizes: [[300, 250], [320, 50], [320, 100], [336, 280], [728, 90], [970, 90], [970, 250], ["fluid"]],
            slot: "/71161633,22556524959/REAL_arealme/quiz_header"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "120x600"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "160x600"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "300x250"}
            }, {
                bidder: "appnexus",
                labelAny: ["m"],
                params: {placementId: "19300659", size: "300x600"}
            }, {bidder: "appnexus", params: {placementId: "19307549"}}, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "120x600"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "160x600"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "300x250"}
            }, {
                bidder: "connectad",
                labelAny: ["m"],
                params: {networkId: "10047", siteId: "1043047", size: "300x600"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025438075_1486316_160x600", size: "160x600", zoneId: "1486316"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025438075_1486321_300x250", size: "300x250", zoneId: "1486321"}
            }, {
                bidder: "criteo",
                labelAny: ["m"],
                params: {publisherSubId: "22025438075_1486322_300x600", size: "300x600", zoneId: "1486322"}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [120, 600]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [160, 600]}
            }, {bidder: "ix", labelAny: ["m"], params: {siteId: "509789", size: [300, 250]}}, {
                bidder: "ix",
                labelAny: ["m"],
                params: {siteId: "509789", size: [300, 600]}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/quiz_vec_1@120x600", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/quiz_vec_1@160x600", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/quiz_vec_1@300x250", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["m"],
                params: {adSlot: "71161633/REAL_arealme/quiz_vec_1@300x600", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "120x600"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "160x600"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x250"}
            }, {
                bidder: "triplelift",
                labelAny: ["m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "300x600"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22025438075",
            sizeMapping: {m: [[120, 600], [160, 600], [300, 250], [300, 600]], s: [], xs: []},
            sizes: [[120, 600], [160, 600], [300, 250], [300, 600]],
            slot: "/71161633,22556524959/REAL_arealme/quiz_vec_1"
        }, {
            attributes: {adblock: !1, headerbidding: !1, lazy: !1, refresh: !1},
            bids: [{bidder: "appnexus", params: {placementId: "20564823"}}, {
                bidder: "connectad",
                labelAny: ["xs"],
                params: {networkId: "10047", siteId: "1043047", size: "320x50"}
            }, {
                bidder: "pubmatic",
                labelAny: ["xs"],
                params: {adSlot: "71161633/REAL_arealme/mob_sticky_@320x50", publisherId: "156762"}
            }],
            id: "22166949628",
            sizeMapping: {m: [], s: [], xs: [[320, 50]]},
            sizes: [[320, 50]],
            slot: "/71161633,22556524959/REAL_arealme/mob_sticky_"
        }, {
            attributes: {adblock: !1, headerbidding: !0, interstitial: !1, lazy: !1, refresh: !1},
            bids: [{bidder: "appnexus", params: {placementId: "22656132"}}],
            id: "22602772924",
            sizeMapping: {l: [], m: [[300, 250]], s: [[300, 250]], xl: [], xs: [[300, 250]]},
            sizes: [[300, 250]],
            slot: "/71161633,22556524959/REAL_arealme/outstream"
        }, {
            attributes: {
                adblock: !1,
                headerbidding: !1,
                interscroller: !1,
                interstitial: !1,
                lazy: !1,
                refresh: 20,
                sticky: !1
            },
            bids: [{bidder: "appnexus", params: {placementId: "23543025"}}, {
                bidder: "connectad",
                labelAny: ["l", "m"],
                params: {networkId: 10047, siteId: 1043047, size: "728x90"}
            }, {
                bidder: "connectad",
                labelAny: ["l", "m"],
                params: {networkId: 10047, siteId: 1043047, size: "970x90"}
            }, {
                bidder: "criteo",
                labelAny: ["l", "m"],
                params: {publisherSubId: "22653498225_1486324_728x90", size: "728x90", zoneId: 1486324}
            }, {
                bidder: "criteo",
                labelAny: ["l", "m"],
                params: {publisherSubId: "22653498225_1486325_970x90", size: "970x90", zoneId: 1486325}
            }, {bidder: "ix", labelAny: ["l", "m"], params: {siteId: "509789", size: [728, 90]}}, {
                bidder: "ix",
                labelAny: ["l", "m"],
                params: {siteId: "509789", size: [970, 90]}
            }, {
                bidder: "pubmatic",
                labelAny: ["l", "m"],
                params: {adSlot: "71161633/REAL_arealme/desk_footer_sticky@728x90", publisherId: "156762"}
            }, {
                bidder: "pubmatic",
                labelAny: ["l", "m"],
                params: {adSlot: "71161633/REAL_arealme/desk_footer_sticky@970x90", publisherId: "156762"}
            }, {
                bidder: "triplelift",
                labelAny: ["l", "m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "728x90"}
            }, {
                bidder: "triplelift",
                labelAny: ["l", "m"],
                params: {inventoryCode: "Arealme_StandardDisplay", size: "970x90"}
            }],
            customLazy: {l: !1, m: !1, s: !1, xl: !1, xs: !1},
            id: "22653498225",
            interscrollerAttributes: {showBanner: !1, zIndex: 0},
            sizeMapping: {l: [[728, 90], [970, 90]], m: [[728, 90], [970, 90]], s: [], xl: [], xs: []},
            sizes: [[728, 90], [970, 90]],
            slot: "/71161633,22556524959/REAL_arealme/desk_footer_sticky",
            stickyAttributes: {allowClose: !1, bgOpacity: 0, compact: !1}
        }],
        fuse_tenant: "publift",
        fuse_uuid: "d9ad29ed-cab4-5e74-bf9e-d9838539a56e",
        supported_sizes: {
            l: [[728, 90], [970, 90]],
            m: [[120, 600], [160, 600], [300, 250], [300, 600], [336, 280], [728, 90], [970, 90], [970, 250]],
            s: [[300, 50], [300, 250], [320, 50], [728, 90]],
            xl: [],
            xs: [[300, 50], [300, 250], [320, 50], [320, 100], [336, 280], "fluid"]
        },
        tenantId: "DGKSPXNV53"
    };

    function i(t, e) {
        var a, i = Object.keys(t);
        return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(t), e && (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), i.push.apply(i, a)), i
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? i(Object(a), !0).forEach(function (e) {
                d(t, e, a[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : i(Object(a)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return t
    }

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function a(e, t, a) {
        return t && o(e.prototype, t), a && o(e, a), e
    }

    function d(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }

    function l(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != a) {
                var i, n, r = [], s = !0, o = !1;
                try {
                    for (a = a.call(e); !(s = (i = a.next()).done) && (r.push(i.value), !t || r.length !== t); s = !0) ;
                } catch (e) {
                    o = !0, n = e
                } finally {
                    try {
                        s || null == a.return || a.return()
                    } finally {
                        if (o) throw n
                    }
                }
                return r
            }
        }(e, t) || u(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e) {
        return function (e) {
            if (Array.isArray(e)) return p(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || u(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(e, t) {
        if (e) {
            if ("string" == typeof e) return p(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" === (a = "Object" === a && e.constructor ? e.constructor.name : a) || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? p(e, t) : void 0
        }
    }

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, i = new Array(t); a < t; a++) i[a] = e[a];
        return i
    }

    var b = this;
    Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
        t = t || window;
        for (var a = 0; a < b.length; a++) e.call(t, b[a], a, b)
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function (e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var a = Object(this), i = a.length >>> 0;
            if (0 == i) return !1;
            for (var n, r, t = 0 | t, s = Math.max(0 <= t ? t : i - Math.abs(t), 0); s < i;) {
                if ((n = a[s]) === (r = e) || "number" == typeof n && "number" == typeof r && isNaN(n) && isNaN(r)) return !0;
                s++
            }
            return !1
        }
    }), "undefined" != typeof window && window.NodeList && !window.NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
    var m = function () {
        function t(e) {
            n(this, t), this.pubID = e.pubID, this.adServer = e.adServer, this.logger = e.logger, this.browserWindow = e.browserWindow, this.gdpr = {}, this.params = {}, this.sco = e.sco || {}
        }

        return a(t, [{
            key: "loadAmazonUam", value: function (a, i, e, t, n, r, s) {
                function o(e, t) {
                    i[a]._Q.push([e, t])
                }

                i[a] || (i[a] = {
                    init: function () {
                        o("i", arguments)
                    }, fetchBids: function () {
                        o("f", arguments)
                    }, setDisplayBids: function () {
                    }, targetingKeys: function () {
                        return []
                    }, _Q: []
                }, (r = e.createElement(t)).async = !0, r.src = n, (s = e.getElementsByTagName(t)[0]).parentNode.insertBefore(r, s))
            }
        }, {
            key: "applyCCPA", value: function (e) {
                this.params = {us_privacy: e}, this.logger.log("[CONSENT]: CCPA config passed onto UAM")
            }
        }, {
            key: "applyGDPR", value: function () {
                this.gdpr = {cmpTimeout: 1e4}, this.logger.log("[CONSENT]: GDPR config passed onto UAM")
            }
        }, {
            key: "getUamConfig", value: function () {
                var e = {pubID: this.pubID, adServer: this.adServer};
                return Object.getOwnPropertyNames(this.gdpr).length && (e.gdpr = this.gdpr), Object.getOwnPropertyNames(this.params).length && (e.params = this.params), Object.getOwnPropertyNames(this.sco).length && (e.schain = {
                    ver: "1.0",
                    complete: 1,
                    nodes: [{asi: this.sco.asi, sid: this.sco.sellerId, hp: 1}]
                }), e
            }
        }, {
            key: "load", value: function () {
                if (this.loadAmazonUam("apstag", this.browserWindow, this.browserWindow.document, "script", "//c.amazon-adsystem.com/aax2/apstag.js"), !this.browserWindow.apstag) return this.logger.error("[LOAD]: 0. UAM script loading failed.")
            }
        }, {
            key: "init", value: function (e) {
                this.browserWindow.apstag.init(this.getUamConfig()), this.logger.log("[LOAD]: 0. UAM script loaded"), this.logger.log("[TIME]: time in ms it took UAM script to load", new Date - e)
            }
        }, {
            key: "makeBids", value: function (e, t) {
                var a = this;
                this.browserWindow.apstag.fetchBids({slots: e}, function (e) {
                    a.browserWindow.googletag.cmd.push(function () {
                        a.browserWindow.apstag.setDisplayBids(), t(e)
                    })
                })
            }
        }]), t
    }(), g = function () {
        function t(e) {
            n(this, t), this.browserWindow = e.browserWindow, this.versionLoader = e.versionLoader, this.logger = e.logger, this.versionNumber = 1, this.version = null, this.gdprApplies = !1, this.ccpaApplies = !1, this.ccpaPrivacyString = null, this.stubFunctionsGenerator = e.stubFunctionsGenerator, this.scriptLoader = e.scriptLoader, this.consentUIPrompt = e.consentUIPrompt
        }

        return a(t, [{
            key: "init", value: function () {
                this.scriptLoader.load(), this.generateStubs(), this.loadVersion()
            }
        }, {
            key: "generateStubs", value: function () {
                this.stubFunctionsGenerator.generate()
            }
        }, {
            key: "loadVersion", value: function () {
                this.checkForVersion1(), this.checkForVersion2()
            }
        }, {
            key: "versionHandler", value: function (e) {
                var t = this, a = e.found, e = e.versionNumber;
                null === this.version && (a ? this.setVersion(e) : setTimeout(function () {
                    t.loadVersion()
                }, 500))
            }
        }, {
            key: "checkForVersion1", value: function () {
                var a = this;
                this.browserWindow.__cmp("ping", null, function (e, t) {
                    a.versionHandler({found: t, versionNumber: 1})
                })
            }
        }, {
            key: "checkForVersion2", value: function () {
                var t = this;
                this.browserWindow.__tcfapi("ping", null, function (e) {
                    t.versionHandler({found: e.cmpLoaded, versionNumber: 2})
                })
            }
        }, {
            key: "setVersion", value: function (e) {
                this.versionNumber = e, this.version = this.versionLoader.getVersion(e)
            }
        }, {
            key: "checkForCCPA", value: function (e) {
                this.version.checkForCCPA(e)
            }
        }, {
            key: "cmpLoaded", value: function (e) {
                if (this.logger.log("[CMP]: Check if loaded"), null === this.version) return e(!1);
                this.version.cmpLoaded(e)
            }
        }, {
            key: "getConsentData", value: function (e) {
                this.version.getConsentData(e)
            }
        }, {
            key: "setGDPR", value: function (e) {
                this.gdprApplies = e
            }
        }, {
            key: "setCCPA", value: function (e) {
                this.ccpaApplies = e
            }
        }, {
            key: "setPrivacyString", value: function (e) {
                this.ccpaPrivacyString = e
            }
        }, {
            key: "setGDPRConsentPrompt", value: function () {
                this.version.setGDPRConsentPrompt()
            }
        }, {
            key: "setCCPAConsentPrompt", value: function () {
                this.version.setCCPAConsentPrompt()
            }
        }, {
            key: "setNonPrivacyRegionsPrompt", value: function () {
                this.consentUIPrompt.setup("You are outside the CCPA jurisdiction.")
            }
        }]), t
    }(), y = function () {
        function i(e, t, a) {
            n(this, i), this.browserWindow = e, this.domSelector = t || "div[data-fuse-privacy-tool]", this.elementId = a || "fuse-privacy-tool"
        }

        return a(i, [{
            key: "setup", value: function (e, t) {
                var a, i = this.browserWindow.document.querySelector(this.domSelector);
                i && (t ? ((a = document.createElement("a")).href = "javascript:void(0)", a.id = this.elementId, a.innerHTML = e, a.addEventListener("click", t), i.appendChild(a)) : i.textContent = e)
            }
        }]), i
    }(), f = function () {
        function t(e) {
            n(this, t), this.logger = e.logger, this.targetAdSlotNodeIdPrefix = e.targetAdSlotNodeIdPrefix, this.packageVersion = e.packageVersion, this.browserWindow = e.browserWindow, this.adSlotRegistry = e.adSlotRegistry, this.isInDebugMode = e.isInDebugMode, this.isDomObserverMode = e.isDomObserverMode
        }

        return a(t, [{
            key: "getActiveModules", value: function () {
                return ["no-module"]
            }
        }]), t
    }(), x = function () {
        function t(e) {
            n(this, t), this.slots = {}, this.logger = e.logger, this.getMatchedFuseSlot = e.getMatchedFuseSlot, this.destroySlotsFunc = e.destroySlotsFunc
        }

        return a(t, [{
            key: "add", value: function (e, t) {
                e && "string" == typeof e || this.logger.error("invalid key."), t || this.logger.error("invalid slot object passed.");
                e = e.toLowerCase();
                Array.isArray(this.slots[e]) || (this.slots[e] = []), this.slots[e].push(t)
            }
        }, {
            key: "purgeAll", value: function () {
                Object.keys(this.slots).forEach(this.purge.bind(this))
            }
        }, {
            key: "purge", value: function (e) {
                var t;
                e && "string" == typeof e && (t = e.toLowerCase(), (e = this.getMatchedFuseSlot(t)) && (e.targeting = {}), e = this.slots[t], Array.isArray(e) && (this.destroySlotsFunc(e), this.slots[t] = []))
            }
        }, {
            key: "purgeByCode", value: function (e, t) {
                var a, i;
                e && "string" == typeof e && ((i = (a = this.getSlots(e) || []).find(function (e) {
                    return e.getSlotElementId() === t
                })) ? (this.destroySlotsFunc([i]), i = e.toLowerCase(), this.slots[i] = a.filter(function (e) {
                    return e.getSlotElementId() !== t
                })) : this.logger.warn("no slot found for key: ".concat(e, " code: ").concat(t)))
            }
        }, {
            key: "getSlotsLength", value: function () {
                return Object.keys(this.slots).length
            }
        }, {
            key: "getSlots", value: function (e) {
                if (e && "string" == typeof e && Array.isArray(this.slots[e.toLowerCase()])) return this.slots[e.toLowerCase()]
            }
        }, {
            key: "setSlotTargetingById", value: function (t, a, i) {
                var e, n = this;
                t && "string" == typeof t && ((e = this.getMatchedFuseSlot(t)) && (e.targeting || (e.targeting = {}), e.targeting[a] = i), (e = n.slots[t.toLowerCase()]) && Array.isArray(e) && e.length && e.forEach(function (e) {
                    try {
                        e.setTargeting(a, i)
                    } catch (e) {
                        n.logger.error("error occurred while individually setTargeting for key - ".concat(t, "."), e.message, e.stack)
                    }
                }))
            }
        }]), t
    }(), h = function () {
        function t(e) {
            n(this, t), this.fuseDob = e.fuseDob, this.slotProblems = []
        }

        return a(t, [{
            key: "getSlotProblems", value: function () {
                return this.slotProblems
            }
        }, {
            key: "addSlotProblem", value: function (e) {
                1e3 <= this.slotProblems.length && (this.slotProblems = this.slotProblems.slice(100)), this.slotProblems.push(s(s({}, e), {}, {time: Date.now() - this.fuseDob}))
            }
        }]), t
    }(), A = function () {
        function t(e) {
            n(this, t), this.browserWindow = e.browserWindow
        }

        return a(t, [{
            key: "load", value: function () {
                var e = new XMLHttpRequest, t = this.browserWindow.document.location.hostname,
                    a = this.browserWindow.document.createElement("script"),
                    i = this.browserWindow.document.getElementsByTagName("script")[0],
                    n = this.browserWindow.document.getElementsByTagName("head")[0] || this.browserWindow.document.documentElement,
                    r = "https://quantcast.mgr.consensu.org".concat("/choice/", "PRrmquD1Ggcb1", "/", t, "/choice.js");
                e.onreadystatechange = function () {
                    var e;
                    4 === this.readyState && (a.async = !0, a.type = "text/javascript", 200 === this.status ? a.src = r : (e = "https://quantcast.mgr.consensu.org".concat("/choice.js"), a.src = e, r = e), i && i.parentNode ? i.parentNode.insertBefore(a, i) : (console.debug("First script element not fully initialised, falling back to head-based insertion"), n.insertBefore(a, n.firstChild)))
                }, e.open("GET", r, !0), e.send()
            }
        }]), t
    }(), I = function () {
        function t(e) {
            n(this, t), this.logger = e.logger, this.browserWindow = e.browserWindow
        }

        return a(t, [{
            key: "generate", value: function () {
                this.createStubFunctionV1(), this.createStubFunctionV2()
            }
        }, {
            key: "createStubFunctionV1", value: function () {
                var t;
                void 0 === this.browserWindow.__cmp ? (this.logger.debug("[CMP] Version 1 stub not found - generating"), t = this.browserWindow, this.browserWindow.__cmp = function () {
                    var e = arguments;
                    "object" !== r(t.__cmp.a) && setTimeout(function () {
                        t.__cmp.apply(t.__cmp, e)
                    }, 400)
                }) : this.logger.debug("[CMP] Found existing version 1 stub")
            }
        }, {
            key: "createStubFunctionV2", value: function () {
                function e() {
                    for (var e, n = "__tcfapiLocator", a = [], r = s.browserWindow, t = function e() {
                        var t, a = r.document, i = !!r.frames[n];
                        return i ? s.logger.debug("[CMP] Found existing version 2 stub") : (s.logger.debug("[CMP] Version 2 stub not found - generating"), a.body ? ((t = a.createElement("iframe")).style.cssText = "display:none", t.name = n, a.body.appendChild(t)) : setTimeout(e, 5)), !i
                    }; r;) {
                        try {
                            if (r.frames[n]) {
                                e = r;
                                break
                            }
                        } catch (e) {
                            "{}" !== JSON.stringify(e) && s.logger.error("[CONSENT]:", JSON.stringify(e))
                        }
                        if (r === s.browserWindow.top) break;
                        r = r.parent
                    }
                    e || (s.logger.log(" !cmpFrame "), t(), r.__tcfapi = function () {
                        var e, t = arguments;
                        if (!t.length) return a;
                        "setGdprApplies" === t[0] ? 3 < t.length && 2 === t[2] && "boolean" == typeof t[3] && (e = t[3], "function" == typeof t[2] && t[2]("set", !0)) : "ping" === t[0] ? "function" == typeof t[2] && t[2]({
                            gdprApplies: e,
                            cmpLoaded: !1,
                            cmpStatus: "stub"
                        }) : a.push(t)
                    }, r.addEventListener("message", function (a) {
                        var i = "string" == typeof a.data, e = {};
                        try {
                            e = i ? JSON.parse(a.data) : a.data
                        } catch (e) {
                            "{}" !== JSON.stringify(e) && s.logger.error("[CONSENT]:", JSON.stringify(e))
                        }
                        var n = e.__tcfapiCall;
                        n && s.browserWindow.__tcfapi(n.command, n.version, function (e, t) {
                            t = {__tcfapiReturn: {returnValue: e, success: t, callId: n.callId}};
                            i && (t = JSON.stringify(t)), a.source.postMessage(t, "*")
                        }, n.parameter)
                    }, !1))
                }

                var s = this;
                "undefined" != typeof module ? module.exports = e : e()
            }
        }]), t
    }(), _ = function () {
        function i(e) {
            n(this, i), this.logger = e.logger, this.browserWindow = e.browserWindow, this.consentUIPrompt = e.consentUIPrompt, this.uspTries = 0, this.uspTriesLimit = 3, this.createUspStub()
        }

        return a(i, [{
            key: "checkForCCPA", value: function (a) {
                var i = this;
                this.browserWindow.__uspapi("uspPing", 1, function (e, t) {
                    t && e.mode.includes("USP") && e.jurisdiction.includes(e.location.toUpperCase()) ? (i.logger.log("[CONSENT]: CCPA Region"), i.browserWindow.__uspapi("setUspDftData", 1, function (e, t) {
                        i.logger.log("[CONSENT]: Setting up data for USP API", JSON.stringify(e), t), i.browserWindow.__uspapi("getUSPData", 1, function (e, t) {
                            return t ? void a({
                                applies: !0,
                                privacyString: e.uspString
                            }) : (i.logger.log("[CONSENT]: Failed retrieving USP data use default instead"), a({
                                applies: !0,
                                privacyString: "1---"
                            }))
                        })
                    })) : a({applies: !1})
                })
            }
        }, {
            key: "setGDPRConsentPrompt", value: function () {
                var e = this;
                this.consentUIPrompt.setup("Privacy Settings", function () {
                    e.browserWindow.__tcfapi("displayConsentUi", 2, function () {
                        return e.logger.log("[CONSENT]: GDPR Consent UI displayed")
                    })
                })
            }
        }, {
            key: "setCCPAConsentPrompt", value: function () {
                var e = this;
                this.consentUIPrompt.setup("Do Not Sell My Data", function () {
                    e.browserWindow.__uspapi("displayUspUi")
                })
            }
        }, {
            key: "cmpLoaded", value: function (t) {
                var a = !1;
                setTimeout(function () {
                    if (!a) return t(!1)
                }, 1e3), this.browserWindow.__tcfapi("ping", 2, function (e) {
                    return a = !0, e && e.cmpLoaded ? t(!0) : t(!1)
                })
            }
        }, {
            key: "getConsentData", value: function (a) {
                this.browserWindow.__tcfapi("getTCData", 2, function (e, t) {
                    return t && e ? e.gdprApplies ? i.CONSENT_RECEIVED_STATES.includes(e.eventStatus.toLowerCase()) ? a({
                        consentReceived: !0,
                        personalisedAdsConsent: e.purpose.consents[2] && e.purpose.consents[3],
                        googlePersonalisedAdsConsent: e.purpose.consents[2] && e.purpose.consents[3],
                        gdprApplies: e.gdprApplies
                    }) : a({consentReceived: !1, gdprApplies: e.gdprApplies}) : a({
                        consentReceived: !0,
                        gdprApplies: !1
                    }) : a({consentReceived: !1})
                })
            }
        }, {
            key: "createUspStub", value: function () {
                function t() {
                    var e = arguments;
                    r(n.__uspapi) !== t ? setTimeout(function () {
                        void 0 !== n.__uspapi && n.__uspapi.apply(n.__uspapi, e)
                    }, 400) : (i.warn("[CONSENT] USP is still in stub mode. Calling to ".concat(e[0], " API will be unsuccessful")), "function" == typeof e[2] && e[2](void 0, !1))
                }

                var e, a = this, i = this.logger, n = this.browserWindow;
                void 0 === n.__uspapi && (n.__uspapi = t, e = setInterval(function () {
                    a.uspTries++, n.__uspapi === t && a.uspTries < a.uspTriesLimit ? i.warn("USP is not accessible") : clearInterval(e)
                }, 300))
            }
        }]), i
    }();
    _.CONSENT_RECEIVED_STATES = ["useractioncomplete", "tcloaded"];
    var S = function () {
        function t(e) {
            n(this, t), this.logger = e.logger, this.browserWindow = e.browserWindow, this.consentUIPrompt = e.consentUIPrompt
        }

        return a(t, [{
            key: "checkForCCPA", value: function (a) {
                var i = this;
                this.browserWindow.__cmp("uspPing", null, function (e, t) {
                    t && e && e.location && "ca" === e.location.toLowerCase() ? (i.logger.log("[CONSENT]: CCPA Region"), i.browserWindow.__cmp("getUSPData", 1, function (e, t) {
                        return t ? void a({
                            applies: !0,
                            privacyString: e.uspString
                        }) : (i.logger.log("[CONSENT]: Failed retrieving USP data use default instead"), a({
                            applies: !0,
                            privacyString: "1---"
                        }))
                    })) : a({applies: !1})
                })
            }
        }, {
            key: "setGDPRConsentPrompt", value: function () {
                var e = this;
                this.consentUIPrompt.setup("Privacy Settings", function () {
                    e.browserWindow.__cmp("displayConsentUi")
                })
            }
        }, {
            key: "setCCPAConsentPrompt", value: function () {
                var e = this;
                this.consentUIPrompt.setup("Do Not Sell My Data", function () {
                    e.browserWindow.__cmp("displayUspUi")
                })
            }
        }, {
            key: "cmpLoaded", value: function (t) {
                var a = !1;
                setTimeout(function () {
                    if (!a) return t(!1)
                }, 1e3), this.browserWindow.__cmp("ping", 2, function (e) {
                    return a = !0, e && e.cmpLoaded ? t(!0) : t(!1)
                })
            }
        }, {
            key: "getConsentData", value: function (a) {
                var i = this;
                this.browserWindow.__cmp("getVendorConsents", null, function (t, e) {
                    e && t ? i.browserWindow.__cmp("getGooglePersonalization", function (e) {
                        a({
                            consentReceived: !0,
                            personalisedAdsConsent: t.purposeConsents && t.purposeConsents[2] && t.purposeConsents[3],
                            googlePersonalisedAdsConsent: e && e.googlePersonalizationData && 1 === e.googlePersonalizationData.consentValue,
                            gdprApplies: t.gdprApplies
                        })
                    }) : a({consentReceived: !1, gdprApplies: t && t.gdprApplies})
                })
            }
        }]), t
    }(), z = function () {
        function t(e) {
            n(this, t), this.options = e
        }

        return a(t, [{
            key: "getVersion", value: function (e) {
                var t;
                switch (e) {
                    case 1:
                        t = new S(this.options);
                        break;
                    case 2:
                        t = new _(this.options);
                        break;
                    default:
                        t = new S(this.options)
                }
                return t
            }
        }]), t
    }(), v = t, w = {
        gpt: {name: "Google Publisher Tag", url: "//securepubads.g.doubleclick.net/tag/js/", file: "gpt.js"},
        prebid: {name: "Prebid.org", url: v.fuse_cdn || "//cdn.publift.com/fuse/tag/", file: "prebid.js"},
        adblock: {name: "Criteo AdBlock", url: "//static.criteo.net/js/ld/", file: "publishertag.js"},
        confiant: {
            name: "Confiant",
            url: "//confiant-integrations.global.ssl.fastly.net/ZVeqITFg3t0RVj7Gh41kEbdx9DA/gpt_and_prebid/",
            file: "config.js"
        },
        blockthrough: {name: "Blockthrough", url: "//publift-com.videoplayerhub.com/", file: "galleryplayer.js"}
    }, k = function () {
        return v.fuse_settings.publication_metadata.publication_id
    }, E = ["debug", "info", "warn", "error", "off"], C = function () {
        function t(e) {
            n(this, t), this.console = e.console, this.logName = e.logName, this.fuseDob = e.fuseDob, this.logLevel = e.logLevel || "off", this.logs = []
        }

        return a(t, [{
            key: "setFuseDob", value: function (e) {
                this.fuseDob = e
            }
        }, {
            key: "getTimestamp", value: function () {
                return this.fuseDob ? " [".concat(Date.now() - this.fuseDob, "]") : ""
            }
        }, {
            key: "callLogMethod", value: function (e) {
                for (var t = arguments.length, a = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) a[i - 1] = arguments[i];
                a[0] = "[".concat(this.logName, "]-").concat(a[0]).concat(this.getTimestamp()), "warn" !== e && "error" !== e || (1e3 <= this.logs.length && (this.logs = []), this.logs.push({
                    level: e,
                    params: a
                })), "error" !== e && E.indexOf(e) < E.indexOf(this.logLevel) || this.console[e].apply(null, a)
            }
        }, {
            key: "error", value: function () {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                this.callLogMethod("error", t)
            }
        }, {
            key: "warn", value: function () {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                this.callLogMethod("warn", t)
            }
        }, {
            key: "log", value: function () {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                this.callLogMethod("info", t)
            }
        }, {
            key: "info", value: function () {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                this.callLogMethod("info", t)
            }
        }, {
            key: "debug", value: function () {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                this.callLogMethod("debug", t)
            }
        }, {
            key: "setLogLevel", value: function (e) {
                this.logLevel = e
            }
        }, {
            key: "getLogLevel", value: function () {
                return this.logLevel
            }
        }, {
            key: "getLogs", value: function () {
                return this.logs
            }
        }]), t
    }(), D = "2.16.3", L = "2", P = new (function () {
        function e() {
            n(this, e);
            try {
                this.location = this.getBrowserWindowObject().top.location
            } catch (e) {
                this.location = this.getBrowserWindowObject().location
            }
        }

        return a(e, [{
            key: "getWindowLocation", value: function () {
                return this.location
            }
        }, {
            key: "getPackageVersion", value: function () {
                return D
            }
        }, {
            key: "getPackageMajorVersion", value: function () {
                return L
            }
        }, {
            key: "getEnvironmentType", value: function () {
                return "undefined" != typeof module && module.exports ? "node" : "browser"
            }
        }, {
            key: "isNodeEnvironment", value: function () {
                return "node" === this.getEnvironmentType()
            }
        }, {
            key: "getBrowserWindowObject", value: function () {
                return window
            }
        }, {
            key: "getPrebidGlobal", value: function () {
                return this.getBrowserWindowObject().fusePbjs || (this.getBrowserWindowObject().fusePbjs = {que: []}), this.getBrowserWindowObject().fusePbjs
            }
        }, {
            key: "getQueryParam", value: function (t) {
                return l(this.getWindowLocation().search.split(/[?&]/).filter(function (e) {
                    return "" !== e
                }).map(function (e) {
                    return e.split("=")
                }).filter(function (e) {
                    return e[0] === t
                }), 1)[0] || []
            }
        }, {
            key: "isInDebugMode", value: function () {
                return this.isNodeEnvironment() || "true" === this.getQueryParam("fuse_debug")[1]
            }
        }, {
            key: "isDomObserverMode", value: function () {
                if (this.getQueryParam("fuse_dom")[1]) return "true" === this.getQueryParam("fuse_dom")[1]
            }
        }, {
            key: "getUnitsAttributesFromParams", value: function (e) {
                var i = new RegExp("^fuse_(\\d+)_".concat(e, "(\\.\\w+|)$"), "i"),
                    e = this.getWindowLocation().search.split(/[?&]/).filter(function (e) {
                        return "" !== e
                    }).map(function (e) {
                        return e.split("=")
                    }).filter(function (e) {
                        return i.test(e[0])
                    }), n = [];
                return e.forEach(function (e) {
                    var t = e[0].match(i), a = "true" === e[1] || "false" !== e[1] && e[1], e = t[1];
                    void 0 === n[e] && (n[e] = {}), t[2] && (t = t[2].substring(1), n[e][t] = -1 !== t.search(new RegExp("color", "i")) ? "#" + a : a)
                }), n
            }
        }, {
            key: "getFooterStickiesFromParams", value: function () {
                return this.getUnitsAttributesFromParams("footersticky")
            }
        }, {
            key: "getInterscrollersFromParams", value: function () {
                return this.getUnitsAttributesFromParams("interscrollers")
            }
        }, {
            key: "getLogLevel", value: function () {
                if (this.isInDebugMode()) return "debug";
                if (this.getQueryParam("fuse_log_level") && this.getQueryParam("fuse_log_level")[1]) {
                    var e = this.getQueryParam("fuse_log_level")[1];
                    return -1 !== E.indexOf(e) ? e : "off"
                }
                return "off"
            }
        }, {
            key: "getMainLogPrefix", value: function () {
                return "FUSE"
            }
        }, {
            key: "getAdSlotQuerySelectorElement", value: function () {
                return "div"
            }
        }, {
            key: "getTargetAdSlotNodeIdPrefix", value: function () {
                return "fuse-slot-"
            }
        }, {
            key: "getTargetAdSlotNodeMainClassName", value: function () {
                return "fuse-slot"
            }
        }, {
            key: "getLogger", value: function (e) {
                return this.logger ? !this.logger.fuseDob && e && this.logger.setFuseDob(e) : this.logger = new C({
                    console: this.getBrowserWindowObject().console,
                    logName: this.getMainLogPrefix(),
                    fuseDob: e,
                    logLevel: this.getLogLevel()
                }), this.logger
            }
        }]), e
    }()), T = P.getBrowserWindowObject(), e = P.getWindowLocation(), R = function (t) {
        return l(e.search.split(/[?&]/).filter(function (e) {
            return "" !== e
        }).map(function (e) {
            return e.split("=")
        }).filter(function (e) {
            return e[0] === t
        }), 1)[0] || []
    }, O = function (e, t) {
        var a;
        e.hasOwnProperty("url") && ((a = T.document.createElement("script")).async = !0, a.type = "text/javascript", "function" == typeof t && (a.readyState ? a.onreadystatechange = function () {
            "loaded" !== a.readyState && "complete" !== a.readyState || (a.onreadystatechange = null, t())
        } : a.onload = function () {
            t()
        }), a.src = "https:".concat(e.url).concat(e.file), (e = T.document.getElementsByTagName("script")[0]).parentNode.insertBefore(a, e))
    }, N = function (t, a, i) {
        function n() {
            var e = Date.now() - d;
            e < a && 0 <= e ? r = setTimeout(n, a - e) : (r = null, i || (l = t.apply(o, s), r || (o = s = null)))
        }

        var r, s, o, d, l;
        return function () {
            o = this, s = arguments, d = Date.now();
            var e = i && !r;
            return r = r || setTimeout(n, a), e && (l = t.apply(o, s), o = s = null), l
        }
    }, B = P.getLogger(), M = P.getBrowserWindowObject(), F = function (e) {
        M.addEventListener("resize", N(e || function () {
            B.log("resized", M.innerWidth, M.innerHeight)
        }, 500))
    }, U = function (e) {
        var a, i = v.fuse_breakpoints, n = e || M.innerWidth;
        return Object.keys(i).forEach(function (e) {
            var t = i[e];
            t < n && (!a || n < a) && (a = {size: t, name: e})
        }), a
    }, W = {
        watchForBreakpoints: function (t) {
            var a = M.innerWidth, i = U(a).size;
            F(function () {
                a = M.innerWidth;
                var e = U(a).size;
                return e !== i ? (i = e, B.log("Window resized to %spx which crossed a breakpoint: New breakpoint is %spx", a, e), t(!0)) : t(!1)
            })
        }, setResizeListener: F, getCurrentBreakpoint: U
    };

    function G(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t.firstElementChild
    }

    function j() {
        return G('\n<div class="publift-widget-container closed">\n  <div class="publift-widget-background">\n  </div>\n  <div class="publift-widget-button">\n    <div></div>\n    <div></div>\n  </div>\n  <div class="publift-widget">\n  </div>\n</div>\n')
    }

    function q(e, t, a) {
        e.querySelector(".publift-widget").appendChild(t), e.querySelector(".publift-widget-button").addEventListener("click", function () {
            e.classList.contains("closed") ? e.classList.remove("closed") : e.classList.add("closed")
        });
        t = document.querySelector("body");
        t.insertAdjacentElement("beforeend", a), t.insertAdjacentElement("beforeend", e), window.requestAnimationFrame(function () {
            e.classList.remove("closed")
        })
    }

    var V = {
        bgColor: "#EFEFEF",
        bgOpacity: .7,
        allowClose: !1,
        buttonColor: "#313131",
        barColor: "#EFEFEF",
        borderWidth: "0px",
        zIndex: 2147483647
    }, Q = {
        bgColor: "#EFEFEF",
        allowClose: !1,
        buttonColor: "#313131",
        barColor: "#FFFFFF",
        borderWidth: "5px",
        zIndex: 2147483647
    }, H = function (e, t) {
        t = s(s({}, V), t || {});
        q(j(), e, G('\n<style id="publift-widget-styles">\n.publift-widget-container {\n  z-index: '.concat(t.zIndex, ";\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: ").concat(t.height, ";\n  transition: height .3s linear;\n}\n\n.publift-widget-button {\n  width: 40px;\n  border-radius: 2px 2px 0px 0px;\n  margin-left: 2px;\n  height: 20px;\n  background-color: ").concat(t.barColor, ";\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  display: ").concat(t.allowClose ? "flex" : "none", ";\n}\n\n.publift-widget-button :first-child, .publift-widget-button :last-child  {\n  background-color: ").concat(t.buttonColor, ";\n  width: 13px;\n  height: 3px;\n  border-radius:2px;\n  transition: transform .2s;\n}\n\n.publift-widget-button :first-child {\n  transform: rotate(30deg) translateX(2px);\n}\n.publift-widget-button :last-child {\n  transform: rotate(-30deg) translateX(-2px);\n}\n\n.publift-widget {\n  width:100%;\n  height: ").concat(t.height, ";\n  display: flex;\n  justify-content: center;\n  border-top: ").concat(t.borderWidth, " solid ").concat(t.barColor, ";\n}\n\n.publift-widget-background {\n  position: absolute;\n  width:100%;\n  height: ").concat(t.height, ";\n  background-color: ").concat(t.bgColor, ";\n  opacity: ").concat(t.bgOpacity, ";\n  bottom:0px;\n  z-index: -1;\n}\n\n.publift-widget-container.closed {\n  min-height: 0px;\n  height:0px !important;\n}\n.publift-widget-container.closed .publift-widget-background {\n  display: none;\n}\n\n</style>\n")))
    }, J = function (e, t) {
        t = s(s({}, Q), t || {});
        q(j(), e, G('\n<style id="publift-widget-styles">\n.publift-widget-container {\n  z-index: '.concat(t.zIndex, ";\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: transform .3s linear, height .3s linear;\n  background-color: ").concat(t.barColor, ";\n}\n.publift-widget-button {\n  width: 40px;\n  border-radius: 2px 2px 0px 0px;\n  margin-left: 2px;\n  height: 20px;\n  background-color: ").concat(t.barColor, ";\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -20px;\n  display: ").concat(t.allowClose ? "flex" : "none", ";\n}\n\n.publift-widget-button :first-child, .publift-widget-button :last-child  {\n  background-color: ").concat(t.buttonColor, ";\n  width: 13px;\n  height: 3px;\n  border-radius:2px;\n  transition: transform .2s;\n}\n\n.publift-widget-button :first-child {\n  transform: rotate(30deg) translateX(2px);\n}\n.publift-widget-button :last-child {\n  transform: rotate(-30deg) translateX(-2px);\n}\n\n.publift-widget {\n  display: flex;\n  justify-content: center;\n  border: ").concat(t.borderWidth, " solid ").concat(t.barColor, ";\n}\n\n.publift-widget-container.closed {\n  transform: translateY(120%) TranslateX(-50%);\n}\n</style>\n")))
    }, Y = function (e, t) {
        return s(s({}, (t = t || {}).compact ? Q : V), {}, {compact: !1}, t)
    }, X = function (e, t) {
        var a = W.getCurrentBreakpoint().name, e = e.sizeMapping, a = e[a] ? e[a].map(function (e) {
            return e[1]
        }) : [];
        return a.length ? "".concat(Math.max.apply(Math, c(a)) + Number(t.borderWidth.substring(0, t.borderWidth.length - 2)) * (t.compact ? 2 : 1), "px") : "0px"
    };

    function Z(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t.firstElementChild
    }

    var K, ee = function (e) {
            return s({selector: ".adBreak", showBanner: !1, height: "100vh", zIndex: 1e7, top: "auto"}, e || {})
        }, te = function (e) {
            var t = W.getCurrentBreakpoint().name, e = e.sizeMapping, t = e[t] ? e[t].map(function (e) {
                return e[1]
            }) : [];
            return t.length ? "".concat(Math.max.apply(Math, c(t)), "px") : "0px"
        }, ae = function () {
            function t(e) {
                n(this, t), this.logger = e.logger, this.footerStickiesParams = e.footerStickiesParams || [], this.interscrollersParams = e.interscrollersParams || []
            }

            return a(t, [{
                key: "stickySlots", value: function () {
                    var t = this;
                    return this.accountSettings.fuse_slots.filter(function (e) {
                        return e.attributes && (e.attributes.sticky || t.footerStickiesParams[e.id])
                    })
                }
            }, {
                key: "renderStickySlots", value: function () {
                    var e, t = this.stickySlots();
                    this.logger.info("[WIDGETS] Render Stickies: ".concat(t.length)), t.length && (e = t[0], 1 < t.length && this.logger.warn("[WIDGETS] Render ONLY first sticky cause of widget limitations: ".concat(e.id)), this.renderSticky(e))
                }
            }, {
                key: "renderInterscrollerSlots", value: function () {
                    var e, t = this.scrollSlots();
                    this.logger.info("[WIDGETS] Render Interscrollers: ".concat(t.length)), t.length && (e = t[0], 1 < t.length && this.logger.warn("[WIDGETS] Render ONLY first Interscroller cause of widget limitations: ".concat(e.id)), this.renderInterscroller(e))
                }
            }, {
                key: "renderSticky", value: function (e) {
                    !function (e, t, a) {
                        e = G(e), t = Y(a, t);
                        t.height = X(a, t), (t.compact ? J : H)(e, t)
                    }('<div data-fuse="'.concat(e.id, '"></div>'), s(s({}, e.stickyAttributes), this.footerStickiesParams[e.id]), e)
                }
            }, {
                key: "renderInterscroller", value: function (e) {
                    var t, a, i, n;
                    t = '<div data-fuse="'.concat(e.id, '"></div>'), a = s(s({}, e.interscrollerAttributes), this.interscrollersParams[e.id]), i = e, n = this.logger, e = ee(a), a = te(i), i = Z('\n    <div class="publift-scroll-unit-root">\n      '.concat(e.showBanner ? '<div class="publift-scroll-container-message banner_top">Advertisement</div>' : "", '\n      <div class="publift-scroll-container">\n        <div class="publift-scroll-clip">\n          <div class="publift-scroll-widget">').concat(t, "</div>\n        </div>\n      </div>\n    </div>\n  ")), t = Z('\n  <style id="publift-scroll-styles">\n  .publift-scroll-container {\n    width: 100vw;\n    min-height: '.concat(e.height, ";\n\n    z-index: ").concat(e.zIndex, ";\n    position: relative;\n  }\n\n  .publift-scroll-container-message {\n    background-color: black;\n    color: white;\n    padding: .5em;\n    text-align: center;\n    font-family: sans-serif;\n  }\n\n  .publift-scroll-clip {\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    clip-path: inset(0px);\n    clip: rect(0px, auto, auto, 0px);\n    min-height: ").concat(e.height, "\n  }\n\n  .publift-scroll-widget {\n    position: fixed;\n    top: ").concat(e.top, ";\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    bottom: 0px;\n    transform: translateZ(0px);\n  }\n  .publift-scroll-unit-root {\n    display: ").concat("0px" === a ? "none" : "block", ";\n  }\n\n  </style>\n  ")), (a = document.querySelector("body")) && (a.insertAdjacentElement("beforeend", t), (t = document.querySelector(e.selector)) ? (t.appendChild(i), i.style.marginLeft = "-".concat(i.getBoundingClientRect().x, "px")) : n.warn("[WIDGETS] Interscroller insertionPoint with selector not found: ".concat(e.selector)))
                }
            }, {
                key: "scrollSlots", value: function () {
                    var t = this;
                    return this.accountSettings.fuse_slots.filter(function (e) {
                        return e.attributes && (e.attributes.interscroller || t.interscrollersParams[e.id])
                    })
                }
            }, {
                key: "render", value: function (e) {
                    if (e) this.accountSettings = e; else if (!e && !this.isInited) return void this.logger.err("[WIDGETS] no accountSettings was provided");
                    this.renderStickySlots(), this.renderInterscrollerSlots()
                }
            }, {
                key: "cleanup", value: function () {
                    document.querySelector("#publift-widget-styles") && document.querySelector("#publift-widget-styles").remove(), document.querySelector(".publift-widget-container") && document.querySelector(".publift-widget-container").remove(), document.querySelector("#publift-scroll-styles") && document.querySelector("#publift-scroll-styles").remove(), document.querySelector(".publift-scroll-unit-root") && document.querySelector(".publift-scroll-unit-root").remove()
                }
            }, {
                key: "onBreakpointChange", value: function () {
                    var e = this.stickySlots(), t = this.scrollSlots();
                    this.logger.info("[WIDGETS] onBreakpointChange Stickies: ".concat(e.length, " Scrolls: ").concat(t.length));
                    var a, i, n = e[0];
                    e.length && (1 < e.length && this.logger.warn("[WIDGETS] onBreakpointChange ONLY first sticky cause of widget limitations: ".concat(n.id)), a = s(s({}, (r = n).stickyAttributes), this.footerStickiesParams[n.id]), i = Y(r, a), e = document.querySelector(".publift-widget-container"), n = document.querySelector(".publift-widget-background"), (a = document.querySelector(".publift-widget")) && document.querySelector(".publift-widget").children[0] && (r = X(r, i), e.style.height = r, i.compact || (n.style.height = r), a.style.height = r));
                    var r = t[0];
                    t.length && (1 < t.length && this.logger.warn("[WIDGETS] onBreakpointChange ONLY first scrolls cause of widget limitations: ".concat(r.id)), r = te(t = r), (t = document.querySelector(".publift-scroll-unit-root")) && (t.style.display = "0px" === r ? "none" : "block"))
                }
            }]), t
        }(), ie = function (e, t, a, i, n) {
            var r = e.top, s = e.bottom, o = e.left, d = e.right, l = e.width, e = e.height * n, n = l * n;
            return 0 <= r + e + i && 0 <= o + n && s - e - i <= a && d - n <= t
        }, ne = P.getAdSlotQuerySelectorElement(), re = P.getTargetAdSlotNodeMainClassName(),
        se = P.getBrowserWindowObject(), oe = JSON.parse(JSON.stringify(v.fuse_slots)), de = function () {
            return se.performance.timing.navigationStart
        }, le = P.getLogger(de()), ce = function () {
            return oe
        }, ue = function (e) {
            return !0 === e ? 0 : e
        }, pe = function (e, t) {
            t = t.name;
            return e.hasOwnProperty("customLazy") && e.customLazy.hasOwnProperty(t) && !1 !== e.customLazy[t] ? e.customLazy[t] : e.attributes.lazy
        }, be = function (e, t, a) {
            if (!e) return !1;
            var i = e.getBoundingClientRect(), n = se.document.hidden,
                r = se.innerWidth || se.document.documentElement.clientWidth,
                e = se.innerHeight || se.document.documentElement.clientHeight, t = t ? t / 100 : 1, a = ue(a),
                t = ie(i, r, e, a, t);
            return !n && t
        }, me = function (e) {
            if (!e) return le.error("missing parameter fuseSlot");
            e.matched = e.matched || 0, e.matched += 1
        }, ge = function (t) {
            if (!t) return le.error("missing parameter fuseSlotID");
            if ("string" != typeof t) return le.error("fuseSlotId should be of type string");
            var a = RegExp("".concat(t.toLowerCase(), "$"));
            return l(oe.filter(function (e) {
                return e.id === t || a.test(e.slot.toLowerCase())
            }), 1)[0] || !1
        }, ye = function (e) {
            return e.filter(function (e) {
                return !fe(e)
            })
        }, fe = function (e) {
            return Array.isArray(e) ? "fluid" === e[0] : "fluid" === e
        }, xe = {
            buildFuseSlot: function (e, t) {
                var a;
                return le.log("[SLOTS]: Building the fuse slot for ".concat(e.code, " "), new Date - de()), t.setAttribute("data-fuse-code", "".concat(e.code)), t.setAttribute("data-fuse-slot", "".concat(e.slot)), se.document.getElementById(e.code) || ((a = se.document.createElement("div")).setAttribute("id", "".concat(e.code)), a.className = re, t.appendChild(a)), t
            },
            checkInView: be,
            checkLazyFalsy: function (e, t, a) {
                return !!t.attributes.hasOwnProperty("lazy") && (!1 !== t.attributes.lazy && !be(e, 50, pe(t, a)))
            },
            clearFuseSkins: function () {
                for (var e = se.document.querySelectorAll("div.fuse-custom-skin"), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t])
            },
            filterFluidSizes: ye,
            isFluid: fe,
            formatSizes: function (e) {
                return e.map(function (e) {
                    return fe(e) && Array.isArray(e) ? e[0] : e
                })
            },
            getCurrentSizeMapSizes: function (t) {
                var e = W.getCurrentBreakpoint().name, a = l(ce().filter(function (e) {
                    return e.id === t
                }) || [], 1)[0];
                if (!a) return le.warn("[SLOTS]: getCurrentSizeMapSizes(): Could not find fuseSlot with id ".concat(t)), [];
                if (a.sizeMapping && a.sizeMapping[e]) {
                    var i = ye(a.sizeMapping[e]);
                    return 0 === i.length && le.debug("[SLOTS]: No non-fluid sizes available for ".concat(t, " at current breakpoint: '").concat(e, "'")), i
                }
                return le.warn('[SLOTS]: Fuse slot "'.concat(t, '" has no sizemap, sizeless prebid units may act strangely.')), ye(a.sizes || [])
            },
            getFuseDob: de,
            getElapsedTime: function () {
                return new Date - de()
            },
            getFuseQueue: function () {
                return se.fusetag.que || []
            },
            getFuseUnitByCode: function (e) {
                var t = se.document.querySelectorAll("".concat(ne, '[data-fuse-code="').concat(e, '"]'));
                return 1 < t.length && le.warn("There should be only one div with the data-fuse-code of ".concat(e)), t[0]
            },
            getFuseUnitById: function (e) {
                e = se.document.querySelectorAll("".concat(ne, '[data-fuse="').concat(e, '"]'));
                return e[e.length - 1]
            },
            getHeaderBiddingOptions: function (e) {
                if (e.prebid && e.prebid.enabled && e.prebid.breakpoint_options) {
                    var t = W.getCurrentBreakpoint().name, t = e.prebid.breakpoint_options[t];
                    if (t) return t
                }
                return {
                    enabled: 0 < e.headerbidding,
                    sendAllBids: e && e.prebid && !0 === e.prebid.sendAllBids,
                    timeout: e.headerbidding
                }
            },
            getMatchedFuseSlot: ge,
            getSlots: ce,
            getTime: function () {
                return K
            },
            getUnits: function () {
                return Array.prototype.slice.call(se.document.querySelectorAll("".concat(ne, "[data-fuse]")))
            },
            incrementMatchedFuseSlot: me,
            lazyAttribute: ue,
            lazyDeviceToggle: pe,
            matchNodeToFuseSlotObject: function (e) {
                if (!e) return le.error("missing parameter fuseSlotNode");
                var t = e.getAttribute("data-fuse"), a = ge(t);
                return a || le.warn("[SLOTS]: There is no FuseSlot set up in the account matching the id ".concat(t)), a && (me(a), t = e.getAttribute("data-targeting-key"), e = e.getAttribute("data-targeting-value"), t && t.length && e && e.length && (a.targeting || (a.targeting = {}), a.targeting[t] = e)), a
            },
            resetSlots: function () {
                return oe = JSON.parse(JSON.stringify(v.fuse_slots))
            },
            setNewTime: function (e) {
                return K = e
            },
            isEdgeBrowser: function () {
                return /[E]dge/.test(se.navigator.userAgent)
            }
        }, he = [], Ae = [], Ie = function (e) {
            var t, a = Date.now();
            he.push((d(t = {}, e, !0), d(t, "ts", a), d(t, "load_time_ms", a - xe.getFuseDob()), t))
        };
    Ie("init_start");
    var _e, Se = {
            setStateStatus: Ie, addAdEvent: function (e, t) {
                var a = Date.now();
                Ae.push({adEvent: e, requestID: t, ts: a, event_time_ms: a - xe.getFuseDob()})
            }, states: he, events: Ae
        }, ze = w.gpt, ve = P.getLogger(xe.getFuseDob()), we = P.getBrowserWindowObject(), ke = P.getWindowLocation(),
        Ee = function () {
            var e = ke.host;
            return e.substring(e.length - 40, e.length)
        }, Ce = function () {
            var e = ke.pathname;
            return e.substring(e.length - 40, e.length)
        }, De = function () {
            var e = ke.search;
            return e.substring(e.length - 40, e.length)
        }, Le = function () {
            for (var e = [], t = ke.pathname.split("/"), a = 0; a < t.length; a += 1) t[a].length && -1 === t[a].indexOf(".") && e.push(t[a]);
            return e
        }, Pe = function () {
            var t = ke.host, a = ke.pathname, i = "false";
            return v.fuse_blocked_url && v.fuse_blocked_url.forEach(function (e) {
                -1 < e.indexOf(t + a) && (i = "true")
            }), i
        }, Te = function (e) {
            if (_e && _e.cmd) return _e.cmd.push(e);
            ve.error("googletag or googletag.cmd not exists")
        }, Re = function (t) {
            if (_e) {
                if (t) {
                    var e = _e.pubads().getSlots();
                    if (Array.isArray(t)) {
                        var a, i, n = e.filter(function (e) {
                            return 0 <= t.indexOf(e.getSlotElementId())
                        });
                        return n.length !== t.length && (a = e.map(function (e) {
                            return e.getSlotElementId()
                        }), i = t.filter(function (e) {
                            return -1 === a.indexOf(e)
                        }), ve.warn("Could not find a GPT slot for all fuse slots.\n        Missing Slots=".concat(JSON.stringify(i), ",\n        All GPT Slots: ").concat(JSON.stringify(a)))), n
                    }
                    n = e.filter(function (e) {
                        return e.getSlotElementId() === t
                    });
                    return n || (e = e.map(function (e) {
                        return e.getSlotElementId()
                    }), ve.warn("Could not find a GPT slot for ".concat(t, ". GPT Slots=").concat(JSON.stringify(e), ")"))), n
                }
                ve.error("Called getGPTSlot() without a fuseSlotCode")
            }
            else ve.error("Called getGPTSlot(".concat(t, ") but googletag not defined"))
        };
    var Oe = function (e, i) {
        var n;
        return i.sizeMapping && 0 !== Object.keys(i.sizeMapping).length && (n = _e.sizeMapping(), Object.keys(i.sizeMapping).forEach(function (e) {
            var t = v.fuse_breakpoints[e], a = i.sizeMapping[e];
            void 0 !== t && (ve.log("[EVENT] Setting breakpoint for slot ".concat(i.slot, " for size ").concat(e, " with breakpoint ").concat(t, " and mapping ").concat(a)), n.addSize([t, 0], xe.formatSizes(a)))
        }), e.defineSizeMapping(n.build())), e
    }, Ne = function (t, a) {
        return a.targeting && Object.keys(a.targeting).length && Object.keys(a.targeting).forEach(function (e) {
            t.setTargeting(e, a.targeting[e])
        }), t
    }, Be = function (e, t) {
        Te(function () {
            ve.log("[GPT]: Setting targeting for [key: ".concat(e, ", value: ").concat(t, "]")), _e.pubads().setTargeting(e, t)
        })
    }, Me = function () {
        Be("fuse_profanity", Pe()), Be("fuse_site", Ee()), Be("fuse_path", Ce()), Be("fuse_query", De()), Be("fuse_category", Le()), Be("fuse_industry", v.fuse_industry);
        var e = "false";
        375 <= we.screen.width && (e = "true"), Be("inskin_yes", e), Be("fuse_uuid", v.fuse_uuid), Be("fuse_publication_id", k().toString())
    }, Fe = {
        setDefaultTargetingAsync: Me, loadGPTLibrary: function (e) {
            we.googletag && we.googletag._loadStarted_ ? ve.log("[LOAD]: 3. GPT v".concat(_e.getVersion(), " is already on the page, skip loading another copy")) : O(ze, function () {
                ve.log("[INIT]: GPT ".concat(we.googletag && we.googletag._loadStarted_ ? "v".concat(_e.getVersion(), " is loaded") : "not loaded")), e()
            })
        }, createGPTCall: function (e) {
            var t = _e.defineSlot(e.slot, e.sizes, e.code), a = Math.ceil(100 * Math.random());
            return t ? (t = Oe(t, e), t = Ne(t, e), a = 10 < a ? "optimized" : a % 10 == 0 ? "benchmark" : "exploration".concat(a % 10), !1 !== v.fuse_settings.adomik && t.setTargeting("publift_mv_testing", a), t.addService(_e.pubads())) : ve.warn("createGPTCall(): googletag.defineSlot() returned null"), t
        }, createGPTObj: function () {
            return _e = we.googletag || (we.googletag = {cmd: []})
        }, setTargetingAsync: Be, pushToGPTQue: Te, makeGPTCall: function (e) {
            var t;
            if (_e) return !e && 0 < _e.pubads().getSlots().length ? (t = _e.pubads().getSlots()[_e.pubads().getSlots().length - 1].getSlotElementId(), ve.error("[BIDS]: GPT called with no fuse slot")) : e ? t = e.code : (t = null, ve.error("[BIDS]: GPT called with no fuse slot")), ve.log("[BIDS]: Initialising DFP call at", new Date - (xe.getTime() || xe.getFuseDob())), _e.display(t);
            ve.warn("[BIDS]: GPT call skipped because googletag not defined")
        }, refreshUnitsAsync: function (n, r) {
            Te(function () {
                var e, t, a = n ? Re(n) : null, i = n && n.length ? JSON.stringify(a.map(function (e) {
                    return e.getSlotElementId()
                })) : "all units";
                !0 === xe.isEdgeBrowser() ? (ve.debug("[GC] will trigger GC for iFrames in Edge browser"), e = $("div[data-fuse] iframe"), t = $.Deferred(), e.one("load", function () {
                    try {
                        $(this.contentWindow).empty(), ve.log("[GC]: cleaned iFrame contentWindow")
                    } catch (e) {
                        ve.error("[GC]: error in cleaning iFrame contentWindow => ".concat(e))
                    }
                }), e.attr("src", "about:blank"), setTimeout(t.resolve, 5), t.promise().then(function () {
                    try {
                        CollectGarbage()
                    } catch (e) {
                        ve.error("[GC]: error in CollectGarbage => ".concat(e))
                    }
                    ve.log("[GPT]: Refreshing ".concat(i)), Se.addAdEvent("gpt_pubads_refresh_".concat(i), r), _e.pubads().refresh(a)
                })) : (ve.log("[GPT]: Refreshing ".concat(i)), Se.addAdEvent("gpt_pubads_refresh_".concat(i), r), _e.pubads().refresh(a))
            })
        }, getGPTSlot: Re, setTagSettings: function () {
            _e.pubads().disableInitialLoad(), _e.pubads().collapseEmptyDivs(!0), _e.pubads().setCentering(!0), _e.pubads().enableSingleRequest(), Me()
        }, eventSlotRenderEnded: function (t) {
            _e.pubads().addEventListener("slotRenderEnded", function (e) {
                t({hasCreative: !e.isEmpty, slotId: e.slot.getSlotElementId()})
            })
        }, eventSlotImpressionViewable: function () {
            _e.pubads().addEventListener("impressionViewable", function (e) {
                ve.log("[EVENT]: AD_IMPRESSION_VIEW for ".concat(e.slot.getSlotElementId()), new Date - (xe.getTime() || xe.getFuseDob()))
            })
        }, getFuseCategories: Le, getFuseHost: Ee, getFusePath: Ce, getFuseQuery: De, enableServices: function () {
            we.googletag.enableServices()
        }, disablePersonalisedAds: function () {
            we.googletag.pubads().disableInitialLoad(), we.googletag.pubads().setRequestNonPersonalizedAds(1)
        }, setInterstitialSlot: function (e) {
            if (e) {
                var t = (e.interstitialAttributes || {minPageViews: 0}).minPageViews;
                if (t) {
                    var a = window.sessionStorage, i = Number(a.getItem("fuse-page-views") || 0);
                    if (i < t) return void a.setItem("fuse-page-views", i + 1);
                    a.setItem("fuse-page-views", 0)
                }
                e = _e.defineOutOfPageSlot(e.slot, _e.enums.OutOfPageFormat.INTERSTITIAL);
                e ? (e.addService(_e.pubads()), _e.pubads().disableInitialLoad(), _e.enableServices(), _e.display(e), _e.pubads().refresh([e])) : ve.warn("setInterstitialSlot(): googletag.defineOutOfPageSlot returned undefined")
            }
        }, destroySlots: function (e) {
            _e.destroySlots(e)
        }
    }, Ue = function () {
        function e() {
            n(this, e)
        }

        return a(e, [{
            key: "code", value: function (e) {
                return "1---"
            }
        }]), e
    }(), We = new (function () {
        function e() {
            n(this, e)
        }

        return a(e, [{
            key: "getCcpaPrivacyStringCoder", value: function () {
                return new Ue
            }
        }, {
            key: "getUamPubID", value: function () {
                return t.fuse_settings.amazonUam && t.fuse_settings.amazonUam.enabled ? t.fuse_settings.amazonUam.pubID : ""
            }
        }, {
            key: "getUamAdServer", value: function () {
                return "googletag"
            }
        }, {
            key: "getSco", value: function () {
                return t.sco
            }
        }]), e
    }()), Ge = new (function () {
        function e() {
            n(this, e)
        }

        return a(e, [{
            key: "getPackageVersion", value: function () {
                return P.getPackageVersion()
            }
        }, {
            key: "getPackageMajorVersion", value: function () {
                return P.getPackageMajorVersion()
            }
        }, {
            key: "isInDebugMode", value: function () {
                return P.isInDebugMode()
            }
        }, {
            key: "isDomObserverMode", value: function () {
                return P.isDomObserverMode()
            }
        }, {
            key: "getAdSlotQuerySelectorElement", value: function () {
                return P.getAdSlotQuerySelectorElement()
            }
        }, {
            key: "getTargetAdSlotNodeIdPrefix", value: function () {
                return P.getTargetAdSlotNodeIdPrefix()
            }
        }, {
            key: "getBrowserWindowObject", value: function () {
                return P.getBrowserWindowObject()
            }
        }, {
            key: "getTargetAdSlotNodeMainClassName", value: function () {
                return P.getTargetAdSlotNodeMainClassName()
            }
        }, {
            key: "getPrebidGlobal", value: function () {
                return P.getPrebidGlobal()
            }
        }, {
            key: "getLogger", value: function () {
                return P.getLogger(xe.getFuseDob())
            }
        }, {
            key: "getGptSlotRegistry", value: function () {
                var t = this;
                return new x({
                    logger: this.getLogger(), getMatchedFuseSlot: function (e) {
                        return xe.getMatchedFuseSlot(e)
                    }, pushToGoogleTagQueueFunc: function (e) {
                        return e
                    }, destroySlotsFunc: function (e) {
                        return Fe.pushToGPTQue(function () {
                            t.getBrowserWindowObject().googletag.destroySlots(e)
                        })
                    }
                })
            }
        }, {
            key: "getFuseTag", value: function () {
                return new f({
                    logger: this.getLogger(),
                    targetAdSlotNodeIdPrefix: this.getTargetAdSlotNodeIdPrefix(),
                    packageVersion: this.getPackageVersion(),
                    browserWindow: this.getBrowserWindowObject(),
                    adSlotRegistry: this.getGptSlotRegistry(),
                    isInDebugMode: this.isInDebugMode(),
                    isDomObserverMode: this.isDomObserverMode()
                })
            }
        }, {
            key: "getUamPubID", value: function () {
                return We.getUamPubID()
            }
        }, {
            key: "getUamAdServer", value: function () {
                return We.getUamAdServer()
            }
        }, {
            key: "getSco", value: function () {
                return We.getSco()
            }
        }, {
            key: "getAmazonUam", value: function () {
                return new m({
                    pubID: this.getUamPubID(),
                    adServer: this.getUamAdServer(),
                    logger: this.getLogger(),
                    browserWindow: this.getBrowserWindowObject(),
                    sco: this.getSco()
                })
            }
        }, {
            key: "getCmpVersionLoader", value: function () {
                return new z({
                    logger: this.getLogger(),
                    browserWindow: this.getBrowserWindowObject(),
                    consentUIPrompt: new y(this.getBrowserWindowObject())
                })
            }
        }, {
            key: "getStubFunctionsGenerator", value: function () {
                return new I({logger: this.getLogger(), browserWindow: this.getBrowserWindowObject()})
            }
        }, {
            key: "getCmpScriptLoader", value: function () {
                return new A({browserWindow: this.getBrowserWindowObject()})
            }
        }, {
            key: "getConsentManger", value: function () {
                return new g({
                    browserWindow: this.getBrowserWindowObject(),
                    logger: this.getLogger(),
                    versionLoader: this.getCmpVersionLoader(),
                    stubFunctionsGenerator: this.getStubFunctionsGenerator(),
                    scriptLoader: this.getCmpScriptLoader(),
                    consentUIPrompt: new y(this.getBrowserWindowObject())
                })
            }
        }, {
            key: "getProblemReporter", value: function () {
                return this.problemReporter || (this.problemReporter = new h({fuseDob: xe.getFuseDob()}), this.problemReporter)
            }
        }, {
            key: "getWidgetsRenderer", value: function () {
                return this.widgetsRenderer || (this.widgetsRenderer = new ae({
                    logger: this.getLogger(),
                    footerStickiesParams: P.getFooterStickiesFromParams(),
                    interscrollersParams: P.getInterscrollersFromParams()
                }), this.widgetsRenderer)
            }
        }]), e
    }()), je = Ge.getLogger(), qe = Ge.getBrowserWindowObject(), Ve = w.adblock, Qe = function (e) {
        var t;
        qe.Criteo ? (t = e, qe.Criteo.events.push(function () {
            je.log("[SLOTS]: Adblock slots ".concat(t.containerid, " set up")), qe.Criteo.DisplayAcceptableAdIfAdblocked(t), qe.document.getElementById(t.containerid).style.height = t.height, qe.document.getElementById(t.containerid).style.display = "none"
        })) : je.warn("You need to declare the global Criteo Object first")
    }, He = {
        loadAdBlocklLibrary: function (e) {
            return O(Ve, function () {
                je.log("[LOAD]: 3. Adblock script loaded."), je.log("[TIME]: time in ms to load Adblock script", new Date - xe.getFuseDob()), e && e()
            })
        }, createAdBlockObj: function () {
            return qe.Criteo || (qe.Criteo = {events: []})
        }, buildAdBlockSlots: function (e, t) {
            var a, i, n;
            0 < t.querySelectorAll('[id^="crt"]').length || e.attributes && e.attributes.adblock && (a = qe.document.createElement("DIV"), i = e.sizes && 0 < e.sizes.length ? "".concat(e.sizes[0][1], "px") : "100%", n = {
                zoneid: Number(e.attributes.adblock),
                containerid: "crt-".concat(e.code),
                overrideZoneFloor: !1,
                height: i,
                callbacksuccess: function (e) {
                    je.log("[SLOTS]: Adblock slots ".concat(n.containerid, " loaded")), je.log("[TIME]: time in ms it took Adblock Slot ".concat(n.containerid, " to load"), new Date - xe.getFuseDob()), e.target.parentNode.style.display = "block"
                }
            }, a.id = n.containerid, a.className = "fuse-adblock", t.appendChild(a), Qe(n))
        }
    }, Je = Ge.getLogger();
    var Ye = {
        enable: function (e) {
            O(w.blockthrough, function () {
                Je.log("[LOAD]: 0. Blockthrough tag loaded"), Je.log("[TIME]: time in ms it took Blockthrough tag to load", new Date - xe.getFuseDob()), e && e()
            })
        }
    }, Xe = Ge.getLogger(), $e = Ge.getBrowserWindowObject();

    function Ze(e) {
        var t = e / .835;
        return ut.log("[BIDS]: Adjusting IX bid from Net to Gross from ".concat(e, " to ").concat(t)), t
    }

    var Ke = {
            enable: function (e) {
                $e.confiant = $e.confiant || {}, O(w.confiant, function () {
                    Xe.log("[LOAD]: 0. Confiant tag loaded"), Xe.log("[TIME]: time in ms it took Confiant tag to load", new Date - xe.getFuseDob()), e && e()
                })
            }
        }, et = Ge.getLogger(), tt = {}, at = 0, it = 0, nt = function (e) {
            tt[e] ? (tt[e].disconnect(), delete tt[e], et.log("[DOM-OBSERVER] observer stopped for ".concat(e))) : et.warn("[DOM-OBSERVER] observer not found for ".concat(e))
        }, rt = {
            addNodeDeletionObserver: function (a, i) {
                var e, n = a.code;
                tt[n] ? et.warn("[DOM-OBSERVER] node for ".concat(n, " was already observed")) : (et.log("[DOM-OBSERVER] new observer added ".concat(n)), (e = new MutationObserver(function (e) {
                    et.debug("[DOM-OBSERVER] Start for ".concat(n, " Events:").concat(at, " Time: ").concat(it));
                    var t = Date.now();
                    at++, e.forEach(function (e) {
                        "childList" === e.type && 0 < e.removedNodes.length && e.removedNodes.forEach(function (e) {
                            (e.id === n || e.querySelector && e.querySelector("#".concat(n))) && (nt(n), et.log("[DOM-OBSERVER] found deleted node ".concat(n)), i(a))
                        })
                    });
                    t = Date.now() - t;
                    it += t, et.debug("[DOM-OBSERVER] End for ".concat(n, " Took:").concat(t, " Events:").concat(at, " Time: ").concat(it))
                })).observe(document, {
                    attributes: !1,
                    childList: !0,
                    subtree: !0
                }), tt[n] = e), et.log("[DOM-OBSERVER] observer set to track deletion of ".concat(n))
            }, stopObserver: nt, getObservers: function () {
                return tt
            }
        }, st = function () {
            function i(e, t) {
                var a = this;
                n(this, i), this.log = t, this.registry = {}, e.forEach(function (e) {
                    a.registry[e] = []
                })
            }

            return a(i, [{
                key: "on", value: function (e, t) {
                    return !!this.registry[e] && (this.registry[e].push(t), !0)
                }
            }, {
                key: "off", value: function (e, a) {
                    return !!this.registry[e] && (this.registry[e].forEach(function (e, t) {
                        e === a && (i = t)
                    }), !(!i && 0 !== i) && (this.registry[e].splice(i, 1), !0));
                    var i
                }
            }, {
                key: "once", value: function (e, t) {
                    function a() {
                        t.apply(null, Array.prototype.slice.call(arguments)), i.off(e, a)
                    }

                    var i = this;
                    return i.on(e, a)
                }
            }, {
                key: "emit", value: function (e) {
                    if (!this.registry[e]) return !1;
                    var t = Array.prototype.slice.call(arguments);
                    t.shift(), this.log("[EVENT] ".concat(e, " triggered with ").concat(this.registry[e].length, " in the registry")), this.registry[e].forEach(function (e) {
                        e.apply(null, t)
                    })
                }
            }]), i
        }(), ot = Ge.getLogger(), dt = Ge.getBrowserWindowObject(), lt = {capture: !0, passive: !0}, ct = {
            addLazyListener: function (a, i, n) {
                dt.addEventListener("scroll", function e() {
                    var t = W.getCurrentBreakpoint();
                    xe.checkInView(a, null, xe.lazyDeviceToggle(i, t)) && (xe.lazyDeviceToggle(i, t) || 0 === xe.lazyDeviceToggle(i, t)) && (ot.debug("[SLOT] Lazy listener callback triggered for ".concat(i.code)), n() || ot.warn("[SLOT] Lazy listener failed to load ".concat(i.code, ". It will not be re-attempted.")), dt.removeEventListener("scroll", e, lt), ot.debug("[SLOT] Removed scroll listener for ".concat(i.code)))
                }, lt)
            }
        }, ut = Ge.getLogger(), pt = Ge.getPackageMajorVersion(), bt = Ge.getBrowserWindowObject(),
        mt = Ge.getPrebidGlobal(), gt = w.prebid, yt = {
            setConsentManagement: function (e) {
                "function" != typeof bt.__tcfapi && "function" != typeof bt.__cmp && !(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).cmp || (e.consentManagement = {
                    gdpr: {
                        cmpApi: "iab",
                        timeout: 1e4
                    }, usp: {cmpApi: "iab", timeout: 100}
                }, "function" == typeof bt.__tcfapi ? e.consentManagement.gdpr.defaultGdprScope = !0 : e.consentManagement.gdpr.allowAuctionWithoutConsent = !1, ut.log("[CONSENT]: prebid consent management module in place"))
            }, setUserSync: function (e) {
                e.userSync = {filterSettings: {iframe: {bidders: "*", filter: "include"}}}
            }, setPriceGranularity: function (e) {
                e.priceGranularity = {
                    buckets: [{max: 3, increment: .01, precision: 2}, {
                        max: 10,
                        increment: .1,
                        precision: 2
                    }, {max: 50, increment: 1, precision: 2}, {max: 100, increment: 10, precision: 2}]
                }
            }, setSizeConfig: function (t, a) {
                var i;
                a && a.fuse_settings && a.fuse_settings.responsive && (i = null, t.sizeConfig = [], Object.keys(a.fuse_breakpoints).forEach(function (e) {
                    t.sizeConfig.push({
                        mediaQuery: "(min-width:".concat(a.fuse_breakpoints[e], "px)").concat(i ? " and (max-width: ".concat(i - 1, "px)") : ""),
                        sizesSupported: a.supported_sizes[e],
                        labels: [e]
                    }), i = a.fuse_breakpoints[e]
                }))
            }, setBidderSettings: function (e) {
                e.bidderSettings = {ix: {bidCpmAdjustment: Ze}}
            }, setScoSettings: function (e, t) {
                t && (e.schain = {
                    validation: "strict",
                    config: {ver: "1.0", complete: 1, nodes: [{asi: t.asi, sid: t.sellerId, hp: 1}]}
                }, e.bidderSettings.schain = e.schain)
            }
        }, ft = function (e) {
            e.prebid_analytics && e.prebid_analytics.length && e.prebid_analytics.forEach(function (e, t) {
                0 !== t && ut.warn("\n          [ANALYTICS]: Having more than one analytics provider active may affect page performance.\n        "), mt.enableAnalytics(e), ut.log("[ANALYTICS]: Analytics enabled for ".concat(e.provider))
            })
        }, xt = function (e) {
            var t = {};
            return yt.setPriceGranularity(t), t.enableSendAllBids = e && !0 === e.sendAllBids, yt.setConsentManagement(t, v), yt.setSizeConfig(t, v), yt.setUserSync(t), yt.setBidderSettings(t), yt.setScoSettings(t, v.sco), t
        }, ht = {
            loadPrebidLibrary: function (e) {
                if (!mt || !mt.libLoaded) {
                    var t = s({}, gt);
                    return "true" === R("local_prebid")[1] ? (ut.warn("[LOAD]: local version of prebid in use"), t.url = "./") : t.url += "".concat(pt, "/").concat(v.fuse_id, "/"), R("originId")[1] && (t.file += "?originId=" + R("originId")[1]), O(t, function () {
                        ut.log("[LOAD]: 3. Prebid ".concat(mt && mt.libLoaded ? "".concat(mt.version, " is loaded and ready") : "not loaded")), ut.log("[TIME]: time in ms it took Prebid to load", new Date - xe.getFuseDob()), e(), bt.pbjs && bt.pbjs.libLoaded ? bt.pbjs.renderAd || (bt.pbjs.renderAd = mt.renderAd) : bt.pbjs = mt
                    })
                }
                ut.log("[LOAD]: 3. Prebid ".concat(mt.version, " is already loaded skip loading it again"))
            }, pushToPrebidQue: function (e) {
                mt && mt.que ? mt.que.push(e) : ut.error("[PREBID]: No prebid que available")
            }, setPrebidAdUnits: function (e) {
                var t = xe.getCurrentSizeMapSizes(e.id);
                ut.log("[BIDS]: Setting Prebid ad units for ".concat(e.code, " with sizes ").concat(JSON.stringify(t))), mt.addAdUnits({
                    code: e.code,
                    mediaTypes: {banner: {sizes: t}},
                    bids: e.bids
                })
            }, getPrebidDefaultConfig: xt, setPrebidConfig: function (e) {
                return e = e || xt(), ut.log("[BIDS]: Setting Prebid Config"), mt.setConfig(e), ft(v), e
            }
        };

    function At(e) {
        return "object" === r(e) && null !== e
    }

    var It = function () {
            function t(e) {
                n(this, t), this.browserWindow = e.browserWindow, this.userIdentityGlobal = e.userIdentityGlobal, this.placementId = e.placementId
            }

            return a(t, [{
                key: "setup", value: function () {
                    var e, t = this, a = this.browserWindow[this.userIdentityGlobal];
                    a && At(a) && (a.email || a.phoneNumber || a.emailHashes) ? (e = {placementID: this.placementId}, a.email ? e.email = a.email : a.phoneNumber ? e.phoneNumber = a.phoneNumber : e.emailHashes = a.emailHashes) : e = {
                        placementID: this.placementId,
                        storageType: "localStorage",
                        detectionType: "scrapeAndUrl",
                        cssSelectors: ["input[type=text]", "input[type=email]"],
                        detectionSubject: "all",
                        urlParameter: "user_id",
                        logging: "debug"
                    };
                    var i = document.createElement("script");
                    i.src = "https://ats.rlcdn.com/ats.js", i.onload = function () {
                        t.browserWindow.ats.start(e)
                    };
                    a = this.browserWindow.document.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(i, a)
                }
            }, {
                key: "configPrebid", value: function (e) {
                    return e.userSync || (e.userSync = {}), e.userSync.userIds = [{
                        name: "identityLink",
                        params: {pid: this.placementId},
                        storage: {type: "cookie", name: "idl_env", expires: 7}
                    }], e
                }
            }]), t
        }(), _t = function (e) {
            if (void 0 !== e && At(e)) return Object.keys(e).length
        }, St = Ge.getLogger(), zt = Ge.getTargetAdSlotNodeIdPrefix(), vt = Ge.getPackageVersion(), wt = Ge.isInDebugMode(),
        kt = Ge.getPrebidGlobal(), Et = Ge.getGptSlotRegistry(), Ct = Ge.getBrowserWindowObject(),
        Dt = Ge.getAmazonUam(), Lt = Ge.getConsentManger(), Ie = Ge.isDomObserverMode(), Pt = Ge.getProblemReporter(),
        Tt = Ge.getWidgetsRenderer(), Rt = t, Ot = Rt.fuse_settings;
    Ot.pageTargeting = [], void 0 !== Ie && (Ot.useDomObserver = Ie);
    var Nt = Ct.fusetag || (Ct.fusetag = {que: []});
    Nt.fuseUUID = Rt.fuse_uuid, Nt.initialised = Nt.initialised || !1, wt && (Nt.version = vt);
    var Bt = {}, Mt = {}, Ft = [], Ut = {}, Wt = {}, Gt = {}, jt = "onTagInitialised", qt = "onSlotsInitialised",
        Vt = "onSlotCreated", Qt = new st([jt, qt, Vt], function () {
            return St.log.apply(St, arguments)
        });
    Nt.edgeHtmlMaxAdsRefreshLimit = Ot.edgeHtmlMaxAdsRefreshLimit || 60;
    var Ht = {}, Jt = function (e) {
        delete Ht[e]
    }, Yt = function e() {
        var t = Math.random().toString(16).slice(2);
        return Object.prototype.hasOwnProperty.call(Ht, t) ? e() : t
    }, Xt = function (e) {
        Ht[e] = {aps: !1, prebid: !1}
    }, $t = function (e, t) {
        e = ua(e, function (e) {
            St.info("[BIDS][".concat(t, "]: Skipped AdServer request because the slot was deleted ").concat(e))
        });
        Fe.refreshUnitsAsync(e, t), Jt(t)
    }, Zt = function (e, t) {
        var a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
        Ht[t] ? (e = ua(e, function (e) {
            St.info("[BIDS]: Skip Bidder back for deleted unit ".concat(e))
        }), Ot.prebid.enabled && Ot.amazonUam.enabled ? a ? Ht[t].aps && Ht[t].prebid ? (St.info("[BIDS][".concat(t, "]: Starting auction")), $t(e, t)) : St.debug("[BIDS][".concat(t, "]: Still waiting for bids. Received: ").concat(JSON.stringify(Ht[t]))) : (St.info("[BIDS][".concat(t, "]: Timeout reached with missing responses, starting auction.\n        Received: ").concat(JSON.stringify(Ht[t]))), $t(e, t)) : $t(e, t)) : a && St.debug("[BIDS][".concat(t, "] Received ").concat(a, " bid after adserver request already sent"))
    }, wt = function () {
        return Bt
    }, Kt = function () {
        return Mt
    }, vt = function () {
        return Object.assign({}, Rt)
    }, ea = function () {
        Object.keys(Wt).forEach(function (e) {
            return clearInterval(Wt[e])
        }), Wt = {}
    }, ta = ["main", "experiment"], aa = function (e, t, a) {
        e += 500;
        St.log("[BIDS][".concat(a, "]: Set bidders timeout ").concat(e)), window.setTimeout(function () {
            Zt(t, a)
        }, e)
    }, ia = function (e) {
        var a = Yt();
        Xt(a);
        var t = e || Object.keys(Mt), i = xe.getHeaderBiddingOptions(Ot);
        St.log("[REFRESH][".concat(a, "]: Refreshing slots: ").concat(JSON.stringify(t)));
        var n = ua(t, function (e) {
            St.info("[REFRESH]: Skip Refreshing slots for deleted unit ".concat(e))
        });
        if (!(i && i.enabled || Ot.amazonUam.enabled)) return St.debug("[GPT][".concat(a, "]: Refreshing without Prebid or UAM")), xe.clearFuseSkins(), Fe.refreshUnitsAsync(n, a), void Jt(a);
        ht && i.enabled && ht.pushToPrebidQue(function () {
            kt.adUnits ? (St.debug("[PREBID][".concat(a, "]: Updating pbGlobal sizemap")), kt.adUnits = kt.adUnits.map(function (e) {
                var t = Mt[e.code];
                if (!t) return ca(e.code) && St.info("[BIDS]: Prebid Event fired for deleted unit ".concat(e.code)), St.debug("[PREBID][".concat(a, "]: Could not find fuseslot for ").concat(e.code)), e;
                t = xe.getCurrentSizeMapSizes(t.id);
                return e.mediaTypes && e.mediaTypes.banner && (e.mediaTypes.banner.sizes = t), e
            }), Se.addAdEvent("prebid_request_all", a), St.debug("[PREBID][".concat(a, "]: Requesting bids: ").concat(JSON.stringify(kt.adUnits))), kt.requestBids({
                adUnitCodes: n,
                timeout: i.timeout,
                bidsBackHandler: function (e) {
                    St.debug("[PREBID][".concat(a, "]: Prebid bid response: "), JSON.stringify(e)), Se.addAdEvent("prebid_response_all", a), kt.setTargetingForGPTAsync(), xe.clearFuseSkins(), Ht[a].prebid = !0, Zt(n, a, "prebid")
                }
            })) : St.error("[PREBID][".concat(a, "]: prebidGlobal not ready"))
        }), Ot.amazonUam.enabled && Mt && ((e = Object.values(Mt).filter(function (e) {
            return 0 <= n.indexOf(e.code)
        }).map(function (e) {
            return {slotID: e.code, slotName: e.slot, sizes: xe.getCurrentSizeMapSizes(e.id)}
        }).filter(function (e) {
            return e.sizes.length
        })).length ? (Se.addAdEvent("uam_request_all", a), St.debug("[UAM][".concat(a, "]: UAM slots "), JSON.stringify(e)), Dt.makeBids(e, function (e) {
            St.debug("[UAM][".concat(a, "]: UAM bid response for all "), JSON.stringify(e)), Se.addAdEvent("uam_response_all", a), Ht[a].aps = !0, Zt(n, a, "aps")
        })) : St.debug("[UAM][".concat(a, "]: Skipped UAM bid because no slots found"))), aa(i.timeout, t, a)
    }, na = function (n) {
        if (n) {
            var r = Yt();
            Xt(r), St.log("[REFRESH][".concat(r, "]: Refreshing ").concat(n));
            var e, a, s = xe.getHeaderBiddingOptions(Ot), o = Mt[n];
            return o ? s && s.enabled || Ot.amazonUam.enabled ? (ht && s.enabled && (St.debug("[REFRESH][".concat(r, "]: Pushed refresh of ").concat(n, " to prebid queue")), ht.pushToPrebidQue(function () {
                var e, t, a;
                kt && kt.adUnits && (void 0 !== (e = pa(n)) && (t = kt.adUnits[e], St.debug("[REFRESH][".concat(r, "]: Pushed refresh ").concat(JSON.stringify(t))), t && (a = xe.getCurrentSizeMapSizes(o.id), t.mediaTypes && t.mediaTypes.banner && (t.mediaTypes.banner.sizes = a), kt.adUnits[e] = t))), St.debug("[REFRESH][".concat(r, "]: Triggered prebid bid request for ").concat(n)), Se.addAdEvent("prebid_request_".concat(n), r);
                var i = new Date;
                kt.requestBids({
                    timeout: s.timeout, adUnitCodes: [n], bidsBackHandler: function (e) {
                        var t, a;
                        t = n, a = new Date - i.getTime(), St.log("[REFRESH][".concat(r, "]: Prebid response for ").concat(t, " in ").concat(a, "ms: "), JSON.stringify(e)), ca(t) ? St.info("[BIDS]: Prebid bid response fired for deleted unit ".concat(t)) : (Se.addAdEvent("prebid_response_".concat(t), r), kt.setTargetingForGPTAsync([t]), Ht[r].prebid = !0, Zt([t], r, "prebid"))
                    }
                })
            })), Ot.amazonUam.enabled && ((e = xe.getCurrentSizeMapSizes(o.id)).length ? (e = [{
                slotID: o.code,
                slotName: o.slot,
                sizes: e
            }], Se.addAdEvent("uam_request_".concat(o.code), r), St.debug("[REFRESH][".concat(r, "]: Triggered UAM bid request for ").concat(n)), a = new Date, Dt.makeBids(e, function (e) {
                var t = new Date - a.getTime();
                St.log("[REFRESH][".concat(r, "]: UAM bid response for ").concat(o.code, " in ").concat(t, "ms: "), JSON.stringify(e)), Se.addAdEvent("uam_response_".concat(o.code), r), Ht[r].aps = !0, Zt([o.code], r, "aps")
            })) : St.debug("[REFRESH][".concat(r, "]: Skipped UAM bid because no sizes available"))), void aa(s.timeout, [n], r)) : (ca(n) ? St.log("[REFRESH]: Skip refresh for deleted unit ".concat(n)) : (Se.addAdEvent("request_creative_".concat(n)), Fe.refreshUnitsAsync([n], r)), void Jt(r)) : (St.warn("[REFRESH][".concat(r, "]: Skip refresh because slot for ").concat(n, " not found")), ca(n) && St.log("[REFRESH]: Skip refresh for deleted unit ".concat(n)), void Jt(r))
        }
    }, ra = function (t, e) {
        Wt[t.code] && clearInterval(Wt[t.code]), Wt[t.code] = setInterval(function () {
            var e = W.getCurrentBreakpoint();
            xe.isEdgeBrowser() && (Gt[t.code] = Gt[t.code] || 0, Gt[t.code] > Nt.edgeHtmlMaxAdsRefreshLimit || !Ct.document.hasFocus()) ? St.log((Gt[t.code] > Nt.edgeHtmlMaxAdsRefreshLimit ? 'will skip refreshing ad(code: "'.concat(t.code, '") as it reached Edge browser ads refresh limit of ').concat(Nt.edgeHtmlMaxAdsRefreshLimit, " at the moment - ") : "will skip refreshing ad as browser page/tab is NOT active at the moment - ").concat((new Date).toISOString(), ".")) : t.element && xe.checkInView(Ct.document.getElementById(t.code) || t.element, 50, xe.lazyDeviceToggle(t, e)) && (xe.isEdgeBrowser() && (Gt[t.code] += 1), na(t.code))
        }, 1e3 * e)
    }, sa = function (e) {
        e.attributes.refresh ? (St.log("[LOAD]: Setting custom refresh time of ".concat(e.attributes.refresh, " seconds for ").concat(e.code, " at: "), new Date - xe.getFuseDob()), ra(e, e.attributes.refresh)) : 0 === e.attributes.refresh ? St.log("[LOAD]: No refresh timer set for ".concat(e.code, " at: "), new Date - xe.getFuseDob()) : Ot.refresh && 0 < Ot.refresh ? (St.log("[LOAD]: Setting global refresh time of ".concat(Ot.refresh, " seconds for ").concat(e.code, " at: "), new Date - xe.getFuseDob()), ra(e, Ot.refresh)) : St.log("[LOAD]: No refresh timer exists in account settings.")
    }, oa = function (e) {
        St.log("[LOAD]: Loading ".concat(e, " at ").concat(new Date - (xe.getTime() || xe.getFuseDob())));
        var t = xe.getFuseUnitByCode(e);
        if (!t) return St.warn("[LOAD] Unable to load ".concat(e, " because that node could not be found in the DOM")), !1;
        t = t.getAttribute("data-fuse-code");
        t || St.warn("[LOAD]: No fuseCode for fuse-slot-code of ".concat(e, ", this usually means there was an error with initialisation"));
        var a = Kt()[t];
        return ca(a.code) ? (St.log("[LOAD]: Skip for deleted unit ".concat(a.code)), !1) : a ? (Fe.pushToGPTQue(function () {
            if (!ca(a.code)) {
                var e = Fe.createGPTCall(a);
                return Et.add(a.id, e), e
            }
            St.log("[LOAD]: Skip createGPTCall for deleted unit ".concat(a.code))
        }), ht && 0 < Ot.headerbidding && ht.pushToPrebidQue(function () {
            ca(a.code) ? St.log("[LOAD]: Skip setPrebidAdUnits for deleted unit ".concat(a.code)) : ht.setPrebidAdUnits(a)
        }), Fe.pushToGPTQue(function () {
            ca(a.code) ? St.log("[LOAD]: Skip makeGPTCall for deleted unit ".concat(a.code)) : (Se.addAdEvent("call_gpt_".concat(a.code)), Fe.makeGPTCall(a))
        }), na(a.code), sa(a), St.log("[LOAD] Successfully loaded ".concat(e)), ga("loadFuseSlotByCode"), !0) : (St.error("[LOAD]: Unable to load ".concat(e, " because the slot could not be found")), !1)
    }, da = function (e, t) {
        var a = t ? Ct.document.getElementById(t) : xe.getFuseUnitById(e);
        if (!a) return St.warn("[SLOTS]: Could not find div with data-fuse attribute of ".concat(e));
        t = a.getAttribute("data-fuse-code");
        if (t && Bt[t] === a) return St.log("[SLOTS]: ".concat(e, " has already with been bootstrapped and showing ad with ad slot ID ").concat(t));
        var i = JSON.parse(JSON.stringify(xe.matchNodeToFuseSlotObject(a)));
        i && (i.code = "".concat(zt).concat(i.id, "-").concat(i.matched), xe.buildFuseSlot(i, a), He && i.attributes && i.attributes.adblock && He.buildAdBlockSlots(i, a), Mt[i.code] = i, Mt[i.code].element = a, Bt[i.code] = a, Ot.useDomObserver && (rt.addNodeDeletionObserver(i, ba), ma(i), ga("_loadSlotById_addNodeDeletionObserver")), Fe.pushToGPTQue(function () {
            if (!ca(i.code)) {
                var e = Fe.createGPTCall(i);
                return Et.add(i.id, e), e
            }
            St.log("[LOAD-BY-ID]: Skip createGPTCall for deleted unit ".concat(i.code))
        }), ht && 0 < Ot.headerbidding && ht.pushToPrebidQue(function () {
            ca(i.code) ? St.log("[LOAD-BY-ID]: Skip setPrebidAdUnits for deleted unit ".concat(i.code)) : ht.setPrebidAdUnits(i)
        }), Fe.pushToGPTQue(function () {
            Se.addAdEvent("call_gpt_".concat(i.code)), ca(i.code) ? St.log("[LOAD-BY-ID]: Skip makeGPTCall for deleted unit ".concat(i.code)) : Fe.makeGPTCall(i)
        }), sa(i), Qt.emit(Vt, i), na(i.code), ga("_loadSlotById"))
    }, st = function (e, t) {
        St.log("[EVENT]: loadSlotById(".concat(e, ", ").concat(t, ")")), Nt.initialised ? da(e, t) : Nt.onTagInitialised(function () {
            da(e, t)
        })
    }, la = function () {
        St.log("[EVENT]: resetSlots()"), xe.setNewTime(new Date), Ot.useDomObserver ? St.log("[EVENT]: resetSlots() using DomObserver") : (Object.keys(Mt).forEach(function (e) {
            ca(e) && St.log("[EVENT]: resetSlots() unit already deleted ".concat(e)), Ft.push(e)
        }), Et.purgeAll(), Bt = {}, Mt = {}, Ut = {}, ea(), ht && 0 < Ot.headerbidding && kt && kt.adUnits && kt.removeAdUnit(), xe.clearFuseSkins()), Object.keys(Ot.pageTargeting).forEach(function (e) {
            Fe.pushToGPTQue(function () {
                Ct.googletag.pubads().clearTargeting(e.key)
            })
        }), ga("resetSlots")
    }, ca = function (e) {
        return -1 !== Ft.indexOf(e)
    }, ua = function (e, a) {
        return e.filter(function (e) {
            var t = !ca(e);
            return !t && a && a(e), t
        })
    }, pa = function (t) {
        return kt && kt.adUnits ? kt.adUnits.findIndex(function (e) {
            return e.code === t
        }) : void 0
    }, ba = function (e) {
        var t = e.code, a = e.id;
        St.log("[DOM-OBSERVER] run node deletion callback for ".concat(t)), ca(t) ? St.log("[DOM-OBSERVER] unit already deleted ".concat(t)) : (Ft.push(t), delete Mt[t], Et.purgeByCode(a, t), Nt.disableRefresh(t), delete Ut[t], delete Bt[t], ma(e), ga("fuseNodeDeletionCallback"), kt && kt.adUnits && kt.adUnits.length && kt.removeAdUnit(t))
    }, ma = function (e) {
        var t = e.code, a = e.id, i = Et.getSlots(a), e = pa(t);
        St.debug("[RESOURCES] Resources for fuseSlot ".concat(t, "\n    gptSlots[").concat(a, "]:").concat(i ? i.length : void 0, "\n    prebidGlobal.adUnits[").concat(t, "]: ").concat(void 0 !== e ? kt.adUnits[e] : void 0, "\n    refreshData[").concat(t, "]: ").concat(Wt[t], "\n    refreshCounts[").concat(t, "]: ").concat(Gt[t]))
    }, ga = function (e) {
        St.debug("[RESOURCES][".concat(e || "manual", "] All Resources\n    gptSlots:").concat(Et.getSlotsLength(), "\n    FUSESLOTS:").concat(_t(Mt), "\n    PROCESSED_FUSE_CODE:").concat(_t(Ut), "\n    DELETED_FUSE_CODES:").concat(Ft.length, "\n    FUSEUNITS:").concat(_t(Bt), "\n    prebidGlobal.adUnits: ").concat(kt && kt.adUnits ? kt.adUnits.length : void 0, "\n    refreshData:").concat(_t(Wt), "\n    refreshCounts:").concat(_t(Gt), "\n    requestManager:").concat(_t(Ht)))
    }, ya = function (i) {
        var e = xe.getUnits(), n = [], r = [];
        e.forEach(function (e) {
            var t, a = e.getAttribute("data-fuse-code");
            a && i ? St.log("[SLOTS] Skip ".concat(a, " because it was processed at time ").concat(Ut[a])) : (a && St.warn("[SLOTS] Processing ".concat(a, " again. This is likely to be an error, but preserved for backwards compatibility")), (t = xe.matchNodeToFuseSlotObject(e)) && ((t = JSON.parse(JSON.stringify(t))).code = "".concat(zt).concat(t.id, "-").concat(t.matched), St.log("[SLOTS] Processing fuseId ".concat(t.id, " as ").concat(t.code)), xe.buildFuseSlot(t, e), He && t.attributes && t.attributes.adblock && He.buildAdBlockSlots(t, e), Mt[t.code] = t, Mt[t.code].element = e, Bt[t.code] = e, r.push(t.code), n.push(t), Ot.useDomObserver && (rt.addNodeDeletionObserver(t, ba), ma(t), ga("addNodeDeletionObserver")), a = W.getCurrentBreakpoint(), xe.checkLazyFalsy(e, t, a) ? (St.log("[SLOTS]: Adding lazy listener for ".concat(t.code)), ct.addLazyListener(e, t, function () {
                return oa(t.code)
            })) : (Fe.pushToGPTQue(function () {
                if (!ca(t.code)) {
                    var e = Fe.createGPTCall(t);
                    return Et.add(t.id, e), e
                }
                St.log("[SLOTS]: Skip createGPTCall for deleted unit ".concat(t.code))
            }), ht && 0 < Ot.headerbidding && t.bids && 0 < t.bids.length && ht.pushToPrebidQue(function () {
                ca(t.code) ? St.log("[SLOTS]: Skip setPrebidAdUnits for deleted unit ".concat(t.code)) : ht.setPrebidAdUnits(t)
            }), Fe.pushToGPTQue(function () {
                Se.addAdEvent("call_gpt_".concat(t.code)), ca(t.code) ? St.log("[SLOTS]: Skip makeGPTCall for deleted unit ".concat(t.code)) : Fe.makeGPTCall(t)
            }), sa(t)), St.log("[SLOTS] Processed ".concat(t.code)), Ut[t.code] = xe.getElapsedTime()))
        }), Qt.emit(qt, n), Fe.pushToGPTQue(function () {
            Fe.setDefaultTargetingAsync(), Ot.pageTargeting.forEach(function (e) {
                Fe.setTargetingAsync(e.key, e.value)
            })
        }), r.length ? ia(r) : St.debug("[SLOTS]: Refresh skipped because there's nothing to do"), ga("_processSlots")
    }, fa = function () {
        St.log("[EVENT]: loadSlots() started"), la(), Se.setStateStatus("process_slots_start"), ya(!1), Se.setStateStatus("process_slots_finish")
    };
    Nt.getAdSlotsById = function (e) {
        if (e && ("string" == typeof e || "number" == typeof e)) return Et.getSlots("".concat(e))
    }, Nt.setSlotTargetingById = function (e, t, a) {
        St.log("[EVENT]: setSlotTargetingById(".concat(e, ", ").concat(t, ", ").concat(a, ") started")), !e || "string" != typeof e && "number" != typeof e || Et.setSlotTargetingById(e, t, a)
    }, Nt.onSlotRenderEnded = function (t) {
        Fe.pushToGPTQue(function () {
            return Fe.eventSlotRenderEnded(function (e) {
                t(e)
            })
        })
    }, Nt.onTagInitialised = function (e) {
        Qt.once(jt, e)
    }, Nt.onSlotsInitialised = function (e) {
        Qt.once(qt, e)
    }, Nt.onSlotInitialised = function (e) {
        Qt.once(Vt, e)
    }, Nt.disableRefresh = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        e && Wt[e] ? (St.log("[REFRESH]: Disabling refresh for ".concat(e)), clearInterval(Wt[e])) : (St.log("[REFRESH]: Disabling refresh for all units"), ea())
    }, Nt.setTargeting = function (a, e) {
        var i = -1;
        Ot.pageTargeting.forEach(function (e, t) {
            -1 === i && e.key === a && (i = t)
        }), -1 < i ? (Ot.pageTargeting[i].value = e, St.log("[LOAD]: Updating custom targeting for [key: ".concat(a, ", value: ").concat(e, "]"))) : (Ot.pageTargeting.push({
            key: a,
            value: e
        }), St.log("[LOAD]: Adding custom targeting for [key: ".concat(a, ", value: ").concat(e, "]"))), Nt.initialised && Fe.setTargetingAsync(a, e)
    }, Nt.getTargeting = function () {
        return Ot.pageTargeting
    }, Nt.que.push = function (e) {
        if ("function" == typeof e) try {
            e.call()
        } catch (e) {
            St.error("Error processing command :", e.message, e.stack)
        } else St.error("Commands written into fusetag.que.push must be wrapped in a function")
    };
    var xa = function () {
        Nt.loaded || (Nt.loaded = !0, xe.getFuseQueue().forEach(function (e) {
            if (St.log("[LOAD]: executing functions pushed to Fuse Queue"), "function" == typeof e) try {
                e.call(), e.called = !0
            } catch (e) {
                St.error("Error processing command :", e.message, e.stack)
            } else St.error("Commands written into fusetag.que.push must be wrapped in a function")
        }))
    }, ha = function () {
        Nt.initialised ? St.log("[LOAD]: Fuse tag has been initialised, skip the remaining of the process") : (Ot.disableWidgetsRenderer || Tt.render(Rt), Se.setStateStatus("fuse_queue_start"), xa(), Se.setStateStatus("fuse_queue_finish"), Ot.disableAutoLoadSlots ? St.log("[LOAD]: disableAutoLoadSlots SET - NOT calling loadSlots") : (St.log("[LOAD]: disableAutoLoadSlots NOT SET - calling loadSlots"), fa()), Se.setStateStatus("on_tag_init_start"), Qt.emit(jt), Se.setStateStatus("on_tag_init_finish"), Nt.initialised = !0)
    };

    function Aa() {
        return Ct.googletag && Ct.googletag.apiReady
    }

    function Ia() {
        return "loading" !== Ct.document.readyState
    }

    function _a(e) {
        var t = e.disablePersonalisedAds, e = e.forceDisablePrebid;
        St.log("[INIT]: disablePersonalisedAds is ".concat(t ? "on" : "off")), St.log("[INIT]: forceDisablePrebid is ".concat(e ? "on" : "off")), t && Fe.pushToGPTQue(function () {
            Fe.disablePersonalisedAds()
        }), e && (Ot.headerbidding = 0, Ot.prebid && Ot.prebid.breakpoint_options && Object.keys(Ot.prebid.breakpoint_options).forEach(function (e) {
            Ot.prebid.breakpoint_options[e].enabled = !1
        })), ht && 0 < Ot.headerbidding && (Se.setStateStatus("prebid_load_start"), ht.loadPrebidLibrary(function () {
            Se.setStateStatus("prebid_load_finish")
        }), ht.pushToPrebidQue(function () {
            var e = Ot.prebid && !0 === Ot.prebid.sendAllBids, e = ht.getPrebidDefaultConfig({sendAllBids: e});
            Ot.identity.enabled && Ot.identity.module && (e = Ot.identity.module.configPrebid(e)), ht.setPrebidConfig(e)
        }), Fe.pushToGPTQue(function () {
            Ct.googletag.pubads().disableInitialLoad()
        }), St.log("[PREBID]: Enabled with ".concat(Ot.headerbidding, "ms timeout"))), Ot.amazonUam.enabled && (Dt.load(), Lt.gdprApplies ? Dt.applyGDPR() : Lt.ccpaApplies && Dt.applyCCPA(Lt.ccpaPrivacyString), Dt.init(xe.getFuseDob()), Se.setStateStatus("amazon")), He && 0 < Ot.adblock && (He.createAdBlockObj(), Se.setStateStatus("adblock_load_start"), He.loadAdBlocklLibrary(function () {
            Se.setStateStatus("adblock_load_finish")
        }), St.log("[ADBLOCK]: Enabled"));
        var a, i, n, r, s = Rt.fuse_slots.find(function (e) {
            return e.attributes && !0 === e.attributes.interstitial
        });
        Fe.pushToGPTQue(function () {
            Fe.setTagSettings(), Fe.eventSlotRenderEnded(function (e) {
                var t;
                e.hasCreative ? St.info("[BIDS]: Adserver responded with creative for ".concat(e.slotId)) : St.error("[BIDS]: Adserver responded without creative for ".concat(e.slotId)), e.hasCreative && Se.addAdEvent("ad_render_".concat(e.slotId)), Mt[e.slotId] ? (Mt[e.slotId].hasCreative = e.hasCreative, e.hasCreative || (t = {
                    fuseSlotId: Mt[e.slotId].id,
                    fuseSlotCode: Mt[e.slotId].code,
                    errorType: "MISSING_CREATIVE"
                }, Pt.addSlotProblem(t))) : ca(e.slotId) ? St.log("[BIDS]: Slot Render Ended Event fired for deleted unit ".concat(e.slotId)) : St.debug("[BIDS]: Slot Render Ended Event fired for non fuse units: ".concat(e.slotId))
            }), Fe.eventSlotImpressionViewable(Mt), Fe.enableServices(), Fe.setInterstitialSlot(s)
        }), W && Ot.responsive && W.watchForBreakpoints(function (e) {
            e && (ia(), Tt.onBreakpointChange())
        }), Ot.quickstart && Ot.disableAutoLoadSlots ? ha() : Ot.quickstart && !Ot.disableAutoLoadSlots ? (Se.setStateStatus("docready_wait_start"), Ia() ? (Se.setStateStatus("docready_wait_finish"), ha()) : a = setInterval(function () {
            Ia() && (Se.setStateStatus("docready_wait_finish"), clearInterval(a), ha())
        }, 25)) : (n = i = !1, Se.setStateStatus("gpt_apiready_wait_start"), Se.setStateStatus("docready_wait_start"), Ia() && Aa() ? (Se.setStateStatus("docready_wait_finish"), Se.setStateStatus("gpt_apiready_wait_finish"), ha()) : r = setInterval(function () {
            !i && Ia() && (i = !0, Se.setStateStatus("docready_wait_finish")), !n && Aa() && (n = !0, Se.setStateStatus("gpt_apiready_wait_finish")), i && n && (clearInterval(r), ha())
        }, 25))
    }

    function Sa() {
        return 1243 === Rt.fuse_id || 2561 === Rt.fuse_id || Ot.strict_cmp
    }

    Nt.init = _a, Nt.setDefaultTargeting = Fe.setDefaultTargetingAsync, Nt.getRefreshIntervals = function () {
        return JSON.parse(JSON.stringify(Wt))
    }, Nt.getSlots = Kt, Nt.getSettings = vt, Nt.getUnits = wt, Nt.loadSlots = fa, Nt.processNewSlots = function () {
        St.log("[EVENT]: processNewSlots() started"), ya(!0), St.debug("[EVENT]: processNewSlots() completed")
    }, Nt.loadSlotById = st, Nt.refreshSlots = ia, Nt.refreshSlotByCode = na, Nt.resetSlots = la, Nt.enableExperiment = function (e) {
        var t;
        ta.includes(e) ? (t = new Date((new Date).getTime() + 2592e6), t = "fuse_originId=".concat(e, ";expires=").concat(t.toUTCString(), ";path=/;"), Ct.document.cookie = t, St.log("Experiment type [".concat(e, "] set. Expires in ").concat(30, " days."))) : St.error("Invalid experiment type. Valid types: ".concat(ta))
    }, Nt.getCookie = function () {
        var e = Ct.document.cookie.match("(^|;)\\s*fuse_originId\\s*=\\s*([^;]+)") || "";
        return e = Array.isArray(e) ? e.pop() : e
    }, Nt.getCurrentBreakpoint = function () {
        return W.getCurrentBreakpoint()
    }, Nt.setLogLevel = function (e) {
        St.setLogLevel(e)
    }, Nt.getLogLevel = function () {
        return St.getLogLevel()
    }, Nt.getLogs = function () {
        return St.getLogs()
    }, Nt.getObservers = rt.getObservers, Nt.logResources = ga, Nt.getSlotProblems = function () {
        return Pt.getSlotProblems()
    }, Nt.states = Se.states, Nt.events = Se.events, Nt.widgetsRenderer = Tt, Nt.getAdSlotsByFuseId = Nt.getAdSlotsById, Nt.getFuseSlots = Kt, Nt.getFuseSettings = vt, Nt.getFuseUnits = wt, Nt.loadFuseSlots = fa, Nt.resetFuseSlots = la, Nt.loadFuseSlotById = st, Nt.setSlotTargetingByFuseId = Nt.setSlotTargetingById, Nt.loaded && St.warn("[LOAD]: Fuse Tag was loaded more than once."), Ot.confiant && (Se.setStateStatus("confiant_load_start"), Ke.enable(function () {
        Se.setStateStatus("confiant_load_finish")
    })), Ot.cmp && (1243 === Rt.fuse_id || 2561 === Rt.fuse_id || Ot.disable_quantcast ? (Lt.generateStubs(), Lt.loadVersion()) : (Lt.init(), Se.setStateStatus("cmp_load_start"))), Ot.blockthrough && (Se.setStateStatus("blockthrough_load_start"), Ye.enable(function () {
        Se.setStateStatus("blockthrough_load_finish")
    })), Ot.identity && Ot.identity.enabled && (Ot.identity.module || (Ot.identity.module = new It({
        browserWindow: Ct,
        userIdentityGlobal: Ot.identity.userIdentityGlobal,
        placementId: Ot.identity.placementId
    }), Ot.identity.module.setup()));
    try {
        St.log("[INIT][onFuseLoadCallback] Start"), St.debug("[INIT][onFuseLoadCallback] Finish")
    } catch (e) {
        St.error("[INIT][onFuseLoadCallback] Encountered error during evaluation", e)
    }

    function za() {
        Se.setStateStatus("gpt_load_start"), Fe.createGPTObj(), Fe.loadGPTLibrary(function () {
            Se.setStateStatus("gpt_load_finish")
        }), Fe.pushToGPTQue(function () {
            St.debug("First fuse queued GPT event executed"), Se.setStateStatus("gpt_queue_start")
        })
    }

    var va, wa, ka;
    Ot.wait_cmp_ready && "function" == typeof __tcfapi ? (va = !1, St.log("[LOAD]: 3. Wait for CMP to load before start loading GPT"), setTimeout(function () {
        va || (St.log("[LOAD]: 3. CMP has not been loaded after 3s ignore and continue"), za())
    }, 3e3), Ct.__tcfapi("addEventListener", 2, function (e) {
        va || (St.log("[LOAD]: 3. CMP has been loaded, going to load GPT script"), za(), va = !0), e && e.listenerId && Ct.__tcfapi("addEventListener", 2, function () {
        }, e.listenerId)
    })) : za(), Ot.skip_auto_init ? St.log("[INIT]: auto init is off skip Fuse init") : Ot.cmp ? (St.log("[CMP]: Found IAB CMP, checking for status before initiating"), wa = 1, ka = setInterval(function () {
        Lt.cmpLoaded(function (e) {
            if (!e) return wa < 200 ? void (wa += 1) : (clearInterval(ka), void (Sa() ? (St.info("[CMP]: Not loaded and timeout reached, disabling personalisation"), _a({
                disablePersonalisedAds: !0,
                forceDisablePrebid: !0
            })) : (St.info("[CMP]: Not loaded and timeout reached, continuing with personalisation"), _a({
                disablePersonalisedAds: !1,
                forceDisablePrebid: !1
            }))));
            St.log("[CMP]: Loaded version ".concat(Lt.versionNumber, ", checking for consent")), Se.setStateStatus("cmp_loaded"), clearInterval(ka);
            e = function e(t) {
                var a = t.consentReceived, i = t.personalisedAdsConsent, n = t.googlePersonalisedAdsConsent,
                    t = t.gdprApplies;
                if (!1 === t) {
                    St.log("[CMP]: Not in GDPR region");
                    var r = !1, s = !1;
                    return setTimeout(function () {
                        if (!s) return St.warn("[CMP]: USP API is not responding, continue as if not in CCPA region"), Lt.setNonPrivacyRegionsPrompt(), _a({
                            disablePersonalisedAds: r,
                            forceDisablePrebid: r
                        })
                    }, 1e3), void Lt.checkForCCPA(function (e) {
                        return s = !0, e.applies ? (Lt.setCCPAConsentPrompt(), Lt.setCCPA(e.applies), Lt.setPrivacyString(e.privacyString), r = "Y" === e.privacyString[2].toUpperCase()) : (St.log("[CMP]: Not in CCPA region, continue with personalisation"), Lt.setNonPrivacyRegionsPrompt()), _a({
                            disablePersonalisedAds: r,
                            forceDisablePrebid: r
                        })
                    })
                }
                if (a || !(wa < 200)) return Lt.setGDPR(t), Lt.setGDPRConsentPrompt(), 200 === wa && (Se.setStateStatus("cmp_determination_timeout"), Sa() ? (St.info("[CMP]: Determination not received and timeout reached, disabling personalisation"), _a({
                    disablePersonalisedAds: !0,
                    forceDisablePrebid: !0
                })) : (St.info("[CMP]: Determination not received and timeout reached, continuing with personalisation"), _a({
                    disablePersonalisedAds: !1,
                    forceDisablePrebid: !1
                }))), Se.setStateStatus("cmp_determination_received"), St.log("[CMP]: ".concat(n ? "[Y]" : "[N]", " Google Personalised Ads")), St.log("[CMP]: ".concat(i ? "[Y]" : "[N]", " Vendors Personalised Ads")), _a({
                    disablePersonalisedAds: !n,
                    forceDisablePrebid: !i
                });
                setTimeout(function () {
                    wa += 1, Lt.getConsentData(e)
                }, 100)
            };
            Lt.getConsentData(e)
        })
    }, 100)) : (St.log("[CMP]: No CMP found, continue to init Fuse"), _a(!1)), Ge.getBrowserWindowObject()
});