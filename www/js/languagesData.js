    function loadDevanagari() {
        var data = [
        {"k": "\u0905", "a": ["audio/deva_letter_a.mp3"], "i": [{"i": "images/pomegranate.jpg", "n": ["\u0905", "\u0928\u093E", "\u0930"], "alt_n": ["anaar"], "a": ["audio/deva_anaar.mp3"]}, {"i": "images/pineapple.jpg", "n": ["\u0905", "\u0928", "\u0928", "\u0938"], "alt_n": ["ananas"], "a": ["audio/deva_ananas.mp3"]}]},
        {"k": "\u0906", "a": ["audio/deva_letter_aa.mp3"], "i": [{"i": "images/aam.jpg", "n": ["\u0906", "\u092E"], "alt_n": ["aam"], "a": ["audio/deva_aam.mp3"]}]},
        {"k": "\u0907", "a": ["audio/deva_letter_i.mp3"], "i": [{"i": "images/imli.jpg", "n": ["\u0907", "\u092E", "\u0932\u0940"], "alt_n": ["imli"], "a": ["audio/deva_imli.mp3"]}]},
        {"k": "\u0908", "a": ["audio/deva_letter_ii.mp3"], "i": [{"i": "images/iishwar.jpg", "n": ["\u0908", "\u0936\u094D\u0935", "\u0930"], "alt_n": ["iishwar"], "a": ["audio/deva_iishvar.mp3"]}]},
        {"k": "\u0909", "a": ["audio/deva_letter_u.mp3"], "i": [{"i": "images/ullu.jpg", "n": ["\u0909", "\u0932\u094D\u0932\u0941"], "alt_n": ["ullu"], "a": ["audio/deva_ullu.mp3"]}]},
        {"k": "\u090A", "a": ["audio/deva_letter_uu.mp3"], "i": [{"i": "images/uunt.jpg", "n": ["\u090A\u0902", "\u091F"], "alt_n": ["uunt"], "a": ["audio/deva_uunt.mp3"]}]},
        {"k": "\u090B", "a": ["audio/deva_letter_vocalic_r.mp3"], "i": [{"i": "images/rishi.jpg", "n": ["\u090B", "\u0937\u0940"], "alt_n": ["rishi"], "a": ["audio/deva_rishi.mp3"]}]},
        {"k": "\u090F", "a": ["audio/deva_letter_e.mp3"], "i": [{"i": "images/edi.jpg", "n": ["\u090F", "\u0921\u0940"], "alt_n": ["edi"], "a": ["audio/deva_edi.mp3"]}]},
        {"k": "\u0910", "a": ["audio/deva_letter_ai.mp3"], "i": [{"i": "images/ainak.jpg", "n": ["\u0910", "\u0928", "\u0915"], "alt_n": ["ainak"], "a": ["audio/deva_ainak.mp3"]}]},
        {"k": "\u0913", "a": ["audio/deva_letter_o.mp3"], "i": [{"i": "images/okhali.jpg", "n": ["\u0913", "\u0916", "\u0932\u0940"], "alt_n": ["okhali"], "a": ["audio/deva_okhali.mp3"]}]},
        {"k": "\u0914", "a": ["audio/deva_letter_au.mp3"], "i": [{"i": "images/aurat.jpg", "n": ["\u0914", "\u0930", "\u0924"], "alt_n": ["aurat"], "a": ["audio/deva_aurat.mp3"]}]},
        {"k": "\u0905\u0902", "a": ["audio/deva_letter_anuswar.mp3"], "i": [{"i": "images/angoor.jpg", "n": ["\u0905\u0902", "\u0917\u0942", "\u0930"], "alt_n": ["angoor"], "a": ["audio/deva_angoor.mp3"]}]},
        {"k": "\u0905\u0903", "a": ["audio/deva_letter_aha.mp3"], "i": [{"i": "images/swata_h.jpg", "n": ["\u0938\u094D\u0935", "\u0924\u0903"], "alt_n": ["swata_h"], "a": ["audio/deva_swata_h.mp3"]}, {"i": "images/puna_h.jpg", "n": ["\u092A\u0941", "\u0928\u0903"], "alt_n": ["puna_h"], "a": ["audio/deva_puna_h.mp3"]}]},

        {"k": "\u0915", "a": ["audio/deva_ka.mp3"], "i": [{"i": "images/kabutar.jpg", "n": ["\u0915", "\u092C\u0941", "\u0924", "\u0930"], "alt_n": ["kabutar"], "a": ["audio/deva_kabutar.mp3"]}]},
        {"k": "\u0916", "a": ["audio/deva_kha.mp3"], "i": [{"i": "images/khargosh.jpg", "n": ["\u0916", "\u0930", "\u0917\u094B", "\u0936"], "alt_n": ["khargosh"], "a": ["audio/deva_khargosh.mp3"]}]},
        {"k": "\u0917", "a": ["audio/deva_ga.mp3"], "i": [{"i": "images/gaay.jpg", "n": ["\u0917\u093E", "\u092F"], "alt_n": ["gaay"], "a": ["audio/deva_gaay.mp3"]}]},
        {"k": "\u0918", "a": ["audio/deva_gha.mp3"], "i": [{"i": "images/ghadi.jpg", "n": ["\u0918", "\u0921\u0940"], "alt_n": ["ghadi"], "a": ["audio/deva_ghadi.mp3"]}]},
        {"k": "\u0919", "a": ["audio/deva_nga.mp3"], "i": [{"i": "images/wangamay.jpg", "n": ["\u0935\u093E", "\u0919", "\u092E", "\u092F"], "alt_n": ["wangamay"], "a": ["audio/deva_wangamay.mp3"]}]},

        {"k": "\u091A", "a": ["audio/deva_cha.mp3"], "i": [{"i": "images/charkha.jpg", "n": ["\u091A", "\u0930", "\u0916\u093E"], "alt_n": ["charkha"], "a": ["audio/deva_charkha.mp3"]}]},
        {"k": "\u091B", "a": ["audio/deva_chha.mp3"], "i": [{"i": "images/chhatri.jpg", "n": ["\u091B", "\u0924\u094D\u0930\u0940"], "alt_n": ["chhatri"], "a": ["audio/deva_chhatri.mp3"]}]},
        {"k": "\u091C", "a": ["audio/deva_ja.mp3"], "i": [{"i": "images/jahaaj.jpg", "n": ["\u091C", "\u0939\u093E", "\u091C"], "alt_n": ["jahaaj"], "a": ["audio/deva_jahaaj.mp3"]}]},
        {"k": "\u091D", "a": ["audio/deva_jha.mp3"], "i": [{"i": "images/jhanda.jpg", "n": ["\u091D\u0902", "\u0921\u093E"], "alt_n": ["jhanda"], "a": ["audio/deva_jhanda.mp3"]}]},
        {"k": "\u091E", "a": ["audio/deva_nya.mp3"], "i": [{"i": "images/jnyan.jpg", "n": ["\u091C\u094D\u091E\u093E", "\u0928"], "alt_n": ["JNYan"], "a": ["audio/deva_jnyan.mp3"]}]},

        {"k": "\u091F", "a": ["audio/deva_tta.mp3"], "i": [{"i": "images/tamatar.jpg", "n": ["\u091F", "\u092E\u093E", "\u091F", "\u0930"], "alt_n": ["Tamatar"], "a": ["audio/deva_tamatar.mp3"]}]},
        {"k": "\u0920", "a": ["audio/deva_ttha.mp3"], "i": [{"i": "images/thathera.jpg", "n": ["\u0920", "\u0920\u0947", "\u0930\u093E"], "alt_n": ["THathera"], "a": ["audio/deva_thathera.mp3"]}]},
        {"k": "\u0921", "a": ["audio/deva_dda.mp3"], "i": [{"i": "images/damaru.jpg", "n": ["\u0921", "\u092E", "\u0930\u0942"], "alt_n": ["Damaru"], "a": ["audio/deva_damaru.mp3"]}]},
        {"k": "\u0922", "a": ["audio/deva_ddha.mp3"], "i": [{"i": "images/dhakkan.jpg", "n": ["\u0922", "\u0915\u094D\u0915", "\u0928"], "alt_n": ["DHakkan"], "a": ["audio/deva_dhakkan.mp3"]}]},
        {"k": "\u0923", "a": ["audio/deva_nna.mp3"], "i": [{"i": "images/baan.jpg", "n": ["\u092C\u093E", "\u0923"], "alt_n": ["baaN"], "a": ["audio/deva_baan.mp3"]}]},

        {"k": "\u0924", "a": ["audio/deva_ta.mp3"], "i": [{"i": "images/tarbooj.jpg", "n": ["\u0924", "\u0930", "\u092C\u0942", "\u091C"], "alt_n": ["tarbooj"], "a": ["audio/deva_tarbooj.mp3"]}]},
        {"k": "\u0925", "a": ["audio/deva_tha.mp3"], "i": [{"i": "images/tharmas.jpg", "n": ["\u0925", "\u0930\u094D\u092E", "\u0938"], "alt_n": ["tharmas"], "a": ["audio/deva_tharmas.mp3"]}]},
        {"k": "\u0926", "a": ["audio/deva_da.mp3"], "i": [{"i": "images/dawaat.jpg", "n": ["\u0926", "\u0935\u093E", "\u0924"], "alt_n": ["dawaat"], "a": ["audio/deva_dawaat.mp3"]}]},
        {"k": "\u0927", "a": ["audio/deva_dha.mp3"], "i": [{"i": "images/dhanush.jpg", "n": ["\u0927", "\u0928\u0941", "\u0937"], "alt_n": ["dhanush"], "a": ["audio/deva_dhanush.mp3"]}]},
        {"k": "\u0928", "a": ["audio/deva_na.mp3"], "i": [{"i": "images/nal.jpg", "n": ["\u0928", "\u0932"], "alt_n": ["nal"], "a": ["audio/deva_nal.mp3"]}]},

        {"k": "\u092A", "a": ["audio/deva_pa.mp3"], "i": [{"i": "images/patang.jpg", "n": ["\u092A", "\u0924\u0902", "\u0917"], "alt_n": ["patang"], "a": ["audio/deva_patang.mp3"]}]},
        {"k": "\u092B", "a": ["audio/deva_pha.mp3"], "i": [{"i": "images/fal.jpg", "n": ["\u092B", "\u0932"], "alt_n": ["fal"], "a": ["audio/deva_fal.mp3"]}]},
        {"k": "\u092C", "a": ["audio/deva_ba.mp3"], "i": [{"i": "images/bakari.jpg", "n": ["\u092C", "\u0915", "\u0930\u0940"], "alt_n": ["bakari"], "a": ["audio/deva_bakari.mp3"]}]},
        {"k": "\u092D", "a": ["audio/deva_bha.mp3"], "i": [{"i": "images/bhaalu.jpg", "n": ["\u092D\u093E", "\u0932\u0942"], "alt_n": ["bhaalu"], "a": ["audio/deva_bhaalu.mp3"]}]},
        {"k": "\u092E", "a": ["audio/deva_ma.mp3"], "i": [{"i": "images/machhali.jpg", "n": ["\u092E", "\u091B", "\u0932\u0940"], "alt_n": ["machhali"], "a": ["audio/deva_machhali.mp3"]}]},

        {"k": "\u092F", "a": ["audio/deva_ya.mp3"], "i": [{"i": "images/yagya.jpg", "n": ["\u092F", "\u091C\u094D\u091E"], "alt_n": ["yaJNYa"], "a": ["audio/deva_yagya.mp3"]}]},
        {"k": "\u0930", "a": ["audio/deva_ra.mp3"], "i": [{"i": "images/rath.jpg", "n": ["\u0930", "\u0925"], "alt_n": ["rath"], "a": ["audio/deva_rath.mp3"]}]},
        {"k": "\u0932", "a": ["audio/deva_la.mp3"], "i": [{"i": "images/lattu.jpg", "n": ["\u0932", "\u091F\u094D\u091F\u0941"], "alt_n": ["lattu"], "a": ["audio/deva_lattu.mp3"]}]},
        {"k": "\u0935", "a": ["audio/deva_va.mp3"], "i": [{"i": "images/wajan.jpg", "n": ["\u0935", "\u091C", "\u0928"], "alt_n": ["wajan"], "a": ["audio/deva_wajan.mp3"]}]},
        {"k": "\u0936", "a": ["audio/deva_sha.mp3"], "i": [{"i": "images/shalgam.jpg", "n": ["\u0936", "\u0932", "\u0917", "\u092E"], "alt_n": ["shalgam"], "a": ["audio/deva_shalgam.mp3"]}]},
        {"k": "\u0937", "a": ["audio/deva_ssha.mp3"], "i": [{"i": "images/shatkon.jpg", "n": ["\u0937", "\u091F", "\u0915\u094B", "\u0923"], "alt_n": ["SHatkon"], "a": ["audio/deva_shatkon.mp3"]}]},
        {"k": "\u0938", "a": ["audio/deva_sa.mp3"], "i": [{"i": "images/sapera.jpg", "n": ["\u0938", "\u092A\u0947", "\u0930\u093E"], "alt_n": ["sapera"], "a": ["audio/deva_sapera.mp3"]}]},
        {"k": "\u0939", "a": ["audio/deva_ha.mp3"], "i": [{"i": "images/hal.jpg", "n": ["\u0939", "\u0932"], "alt_n": ["hal"], "a": ["audio/deva_hal.mp3"]}]},
        {"k": "\u0915\u094D\u0937", "a": ["audio/deva_ksha.mp3"], "i": [{"i": "images/kshatriya.jpg", "n": ["\u0915\u094D\u0937", "\u0924\u094D\u0930\u093F", "\u092F"], "alt_n": ["kshatriya"], "a": ["audio/deva_kshatriya.mp3"]}]},
        {"k": "\u0924\u094D\u0930", "a": ["audio/deva_tra.mp3"], "i": [{"i": "images/trishul.jpg", "n": ["\u0924\u094D\u0930\u093F", "\u0936\u0941", "\u0932"], "alt_n": ["trishul"], "a": ["audio/deva_trishul.mp3"]}]},
        {"k": "\u091C\u094D\u091E", "a": ["audio/deva_jnya.mp3"], "i": [{"i": "images/dnyandev.jpg", "n": ["\u091C\u094D\u091E\u093E", "\u0928", "\u0926\u0947", "\u0935"], "alt_n": ["jNYandev"], "a": ["audio/deva_dnyandev.mp3"]}]},

        {"k": "\u0966", "a": ["audio/deva_zero.mp3"], "i": [{"i": "images/shunya.jpg", "n": ["\u0936\u0941", "\u0928\u094D\u092F"], "alt_n": ["shunya"], "a": ["audio/deva_zero.mp3"]}]},
        {"k": "\u0967", "a": ["audio/deva_ek.mp3"], "i": [{"i": "images/ek.jpg", "n": ["\u090F", "\u0915"], "alt_n": ["ek"], "a": ["audio/deva_ek.mp3"]}]},
        {"k": "\u0968", "a": ["audio/deva_do.mp3"], "i": [{"i": "images/do.jpg", "n": ["\u0926\u094B"], "alt_n": ["do"], "a": ["audio/deva_do.mp3"]}]},
        {"k": "\u0969", "a": ["audio/deva_teen.mp3"], "i": [{"i": "images/teen.jpg", "n": ["\u0924\u0940", "\u0928"], "alt_n": ["teen"], "a": ["audio/deva_teen.mp3"]}]},
        {"k": "\u096A", "a": ["audio/deva_chaar.mp3"], "i": [{"i": "images/chaar.jpg", "n": ["\u091A\u093E", "\u0930"], "alt_n": ["chaar"], "a": ["audio/deva_chaar.mp3"]}]},
        {"k": "\u096B", "a": ["audio/deva_paanch.mp3"], "i": [{"i": "images/paanch.jpg", "n": ["\u092A\u093E\u0901", "\u091A"], "alt_n": ["paanch"], "a": ["audio/deva_paanch.mp3"]}]},
        {"k": "\u096C", "a": ["audio/deva_chhe.mp3"], "i": [{"i": "images/chhe.jpg", "n": ["\u091B\u0947"], "alt_n": ["chhe"], "a": ["audio/deva_chhe.mp3"]}]},
        {"k": "\u096D", "a": ["audio/deva_saant.mp3"], "i": [{"i": "images/saant.jpg", "n": ["\u0938\u093E\u0901", "\u0924"],"alt_n": ["saant"],  "a": ["audio/deva_saant.mp3"]}]},
        {"k": "\u096E", "a": ["audio/deva_aanth.mp3"], "i": [{"i": "images/aanth.jpg", "n": ["\u0905\u093E\u0901", "\u0920"], "alt_n": ["aanth"], "a": ["audio/deva_aanth.mp3"]}]},
        {"k": "\u096F", "a": ["audio/deva_nau.mp3"], "i": [{"i": "images/nau.jpg", "n": ["\u0928\u094C"], "alt_n": ["nau"], "a": ["audio/deva_nau.mp3"]}]},
        {"k": "\u0967\u0966", "a": ["audio/deva_das.mp3"], "i": [{"i": "images/das.jpg", "n": ["\u0926", "\u0938"], "alt_n": ["das"], "a": ["audio/deva_das.mp3"]}]},
        {"k": "\u0967\u0967", "a": ["audio/deva_gyarah.mp3"], "i": [{"i": "images/gyarah.jpg", "n": ["\u0917\u094D\u092F\u093E", "\u0930", "\u0939"], "alt_n": ["gyarah"], "a": ["audio/deva_gyarah.mp3"]}]},
        {"k": "\u0967\u0968", "a": ["audio/deva_baarah.mp3"], "i": [{"i": "images/baarah.jpg", "n": ["\u092C\u093E", "\u0930", "\u0939"], "alt_n": ["baarah"], "a": ["audio/deva_baarah.mp3"]}]},
        {"k": "\u0967\u0969", "a": ["audio/deva_terah.mp3"], "i": [{"i": "images/terah.jpg", "n": ["\u0924\u0947", "\u0930", "\u0939"], "alt_n": ["terah"], "a": ["audio/deva_terah.mp3"]}]},
        {"k": "\u0967\u096A", "a": ["audio/deva_chaudah.mp3"], "i": [{"i": "images/chaudah.jpg", "n": ["\u091A\u094C", "\u0926", "\u0939"], "alt_n": ["chaudah"], "a": ["audio/deva_chaudah.mp3"]}]},
        {"k": "\u0967\u096B", "a": ["audio/deva_pandrah.mp3"], "i": [{"i": "images/pandrah.jpg", "n": ["\u092A\u0902", "\u0926\u094D\u0930", "\u0939"], "alt_n": ["pandrah"], "a": ["audio/deva_pandrah.mp3"]}]},
        {"k": "\u0967\u096C", "a": ["audio/deva_solah.mp3"], "i": [{"i": "images/solah.jpg", "n": ["\u0938\u094B", "\u0932", "\u0939"], "alt_n": ["solah"], "a": ["audio/deva_solah.mp3"]}]},
        {"k": "\u0967\u096D", "a": ["audio/deva_sataara.mp3"], "i": [{"i": "images/sataara.jpg", "n": ["\u0938", "\u0924\u093E", "\u0930\u093E"], "alt_n": ["sataara"], "a": ["audio/deva_sataara.mp3"]}]},
        {"k": "\u0967\u096E", "a": ["audio/deva_athaara.mp3"], "i": [{"i": "images/athaara.jpg", "n": ["\u0905", "\u0920\u093E", "\u0930\u093E"], "alt_n": ["athaara"], "a": ["audio/deva_athaara.mp3"]}]},
        {"k": "\u0967\u096F", "a": ["audio/deva_unnis.mp3"], "i": [{"i": "images/unnis.jpg", "n": ["\u0909", "\u0928\u094D\u0928\u0940", "\u0938"], "alt_n": ["unnis"], "a": ["audio/deva_unnis.mp3"]}]},
        {"k": "\u0968\u0966", "a": ["audio/deva_bees.mp3"], "i": [{"i": "images/bees.jpg", "n": ["\u092C\u0940", "\u0938"], "alt_n": ["bees"], "a": ["audio/deva_bees.mp3"]}]}
        ];
        loadData(data);
    }

    function loadKannada() {
        var data = [
        {"k": "\u0C85", "a": ["audio/deva_letter_a.mp3"], "i": [{"i": "images/kannada/arasa.jpg", "n": ["\u0C85", "\u0CB0", "\u0CB8"], "alt_n": ["\u0905\u0930\u0938\u0941", "arasu"], "a": ["audio/kannada/arasa.mp3"]}, {"i": "images/pineapple.jpg", "n": ["\u0C85", "\u0CA8\u0CBE", "\u0CA8", "\u0CB8\u0CCD"], "alt_n": ["\u0905\u0928\u093E\u0928\u0938", "anaanas"], "a": ["audio/deva_ananas.mp3"]}]},
        {"k": "\u0C86", "a": ["audio/deva_letter_aa.mp3"], "i": [{"i": "images/kannada/aane.jpg", "n": ["\u0C86", "\u0CA8\u0CC6"], "alt_n": ["\u0906\u0928\u0946", "aane"], "a": ["audio/kannada/aane.mp3"]}]},
        {"k": "\u0C87", "a": ["audio/deva_letter_i.mp3"], "i": [{"i": "images/kannada/ili.jpg", "n": ["\u0C87", "\u0CB2\u0CBF"], "alt_n": ["\u0907\u0932\u093F", "ili"], "a": ["audio/kannada/ili.mp3"]}]},
        {"k": "\u0C88", "a": ["audio/deva_letter_ii.mp3"], "i": [{"i": "images/kannada/iillige.jpg", "n": ["\u0C88", "\u0CB3\u0CBF", "\u0C97\u0CC6"], "alt_n": ["\u0908\u0933\u093F\u0917\u0946", "iiLige"], "a": ["audio/kannada/iillige.mp3"]}]},
        {"k": "\u0C89", "a": ["audio/deva_letter_u.mp3"], "i": [{"i": "images/kannada/ulli.jpg", "n": ["\u0C89", "\u0CB3\u0CBF"], "alt_n": ["\u0909\u0933\u093F", "uLi"], "a": ["audio/kannada/ulli.mp3"]}]},
        {"k": "\u0C8A", "a": ["audio/deva_letter_uu.mp3"], "i": [{"i": "images/kannada/uuta.jpg", "n": ["\u0C8A", "\u0C9F"], "alt_n": ["\u090A\u091F\u093E", "uuta"], "a": ["audio/kannada/uuta.mp3"]}]},
        {"k": "\u0C8B", "a": ["audio/deva_letter_vocalic_r.mp3"], "i": [{"i": "images/rishi.jpg", "n": ["\u0C8B", "\u0CB7\u0CBF"], "alt_n": ["\u090B\u0937\u093F", "rishi"], "a": ["audio/deva_rishi.mp3"]}]},
        {"k": "\u0C8E", "a": ["audio/deva_letter_e.mp3"], "i": [{"i": "images/kannada/ele.jpg", "n": ["\u0C8E", "\u0CB2\u0CC6"], "alt_n": ["\u090E\u0932\u0946", "ele"], "a": ["audio/kannada/ele.mp3"]}]},
        {"k": "\u0C8F", "a": ["audio/deva_letter_e.mp3"], "i": [{"i": "images/kannada/eedi.jpg", "n": ["\u0C8F", "\u0CA1\u0CBF"], "alt_n": ["\u090F\u0921\u093F", "edi"], "a": ["audio/kannada/eedi.mp3"]}]},
        {"k": "\u0C90", "a": ["audio/deva_letter_ai.mp3"], "i": [{"i": "images/kannada/aida.jpg", "n": ["\u0C90", "\u0CA6\u0CC1"], "alt_n": ["\u0910\u0926\u0941", "aida"], "a": ["audio/kannada/aida.mp3"]}]},
        {"k": "\u0C92", "a": ["audio/deva_letter_o.mp3"], "i": [{"i": "images/uunt.jpg", "n": ["\u0C92\u0C82", "\u0C9F\u0CC6"], "alt_n": ["\u0912\u0902\u091F\u0946", "uunt"], "a": ["audio/kannada/onte.mp3"]}]},
        {"k": "\u0C93", "a": ["audio/deva_letter_o.mp3"], "i": [{"i": "images/kannada/oata.jpg", "n": ["\u0C93", "\u0C9F"], "alt_n": ["\u0913\u091F\u093E", "oata"], "a": ["audio/kannada/oata.mp3"]}]},
        {"k": "\u0C94", "a": ["audio/deva_letter_au.mp3"], "i": [{"i": "images/kannada/aushadh.jpg", "n": ["\u0C94", "\u0CB7", "\u0CA7"], "alt_n": ["\u0914\u0937\u0927\u093E", "aushadh"], "a": ["audio/kannada/aushadh.mp3"]}]},
        {"k": "\u0C85\u0C82", "a": ["audio/deva_letter_anuswar.mp3"], "i": [{"i": "images/kannada/angi.jpg", "n": ["\u0C85\u0C82", "\u0C97\u0CBF"], "alt_n": ["\u0905\u0902\u0917\u093F", "angi"], "a": ["audio/kannada/angi.mp3"]}]},

        {"k": "\u0C95", "a": ["audio/deva_ka.mp3"], "i": [{"i": "images/kannada/kamal.jpg", "n": ["\u0C95", "\u0CAE", "\u0CB2"], "alt_n": ["\u0915\u092E\u0932\u093E", "kamal"], "a": ["audio/kannada/kamal.mp3"]}]},
        {"k": "\u0C96", "a": ["audio/deva_kha.mp3"], "i": [{"i": "images/kannada/khadg.jpg", "n": ["\u0C96", "\u0CA1\u0CCD\u0C97"], "alt_n": ["\u0916\u0921\u094D\u0917\u093E", "khaDga"], "a": ["audio/kannada/khadg.mp3"]}]},
        {"k": "\u0C97", "a": ["audio/deva_ga.mp3"], "i": [{"i": "images/kannada/ganapati.jpg", "n": ["\u0C97", "\u0CA3", "\u0CAA", "\u0CA4\u0CBF"], "alt_n": ["\u0917\u0923\u092A\u0924\u093F", "gaNapati"], "a": ["audio/kannada/ganapati.mp3"]}]},
        {"k": "\u0C98", "a": ["audio/deva_gha.mp3"], "i": [{"i": "images/kannada/ghante.jpg", "n": ["\u0C98\u0C82", "\u0C9F\u0CC6"], "alt_n": ["\u0918\u0902\u091F\u0946", "ghante"], "a": ["audio/kannada/ghante.mp3"]}]},
        {"k": "\u0C99", "a": ["audio/deva_nga.mp3"], "i": [{"i": "images/wangamay.jpg", "n": ["\u0CB5\u0CBE", "\u0C99", "\u0CAE", "\u0CAF"], "alt_n": ["\u0935\u093E\u0919\u092E\u092F", "waNGamay"], "a": ["audio/deva_wangamay.mp3"]}]},

        {"k": "\u0C9A", "a": ["audio/deva_cha.mp3"], "i": [{"i": "images/kannada/chandu.jpg", "n": ["\u0C9A\u0C82", "\u0CA1\u0CC1"], "alt_n": ["\u091A\u0902\u0921\u0941", "chanDu"], "a": ["audio/kannada/chandu.mp3"]}]},
        {"k": "\u0C9B", "a": ["audio/deva_chha.mp3"], "i": [{"i": "images/chhatri.jpg", "n": ["\u0C9B", "\u0CA4\u0CCD\u0CB0\u0CBF"], "alt_n": ["\u091B\u0924\u094D\u0930\u093F", "chhatri"], "a": ["audio/deva_chhatri.mp3"]}]},
        {"k": "\u0C9C", "a": ["audio/deva_ja.mp3"], "i": [{"i": "images/kannada/jalak.jpg", "n": ["\u0C9C", "\u0CB3", "\u0C95"], "alt_n": ["\u091C\u0933\u0915\u0941", "jalak"], "a": ["audio/kannada/jalak.mp3"]}]},
        {"k": "\u0C9D", "a": ["audio/deva_jha.mp3"], "i": [{"i": "images/kannada/zari.jpg", "n": ["\u0C9D", "\u0CB0\u0CBF"], "alt_n": ["\u091D\u0930\u093F", "Zari"], "a": ["audio/kannada/zari.mp3"]}]},
        {"k": "\u0C9E", "a": ["audio/deva_nya.mp3"], "i": [{"i": "images/jnyan.jpg", "n": ["\u0C9C\u0CCD\u0C9E\u0CBE", "\u0CA8"], "alt_n": ["\u091C\u094D\u091E\u093E\u0928", "JNYan"], "a": ["audio/deva_jnyan.mp3"]}]},

        {"k": "\u0C9F", "a": ["audio/deva_tta.mp3"], "i": [{"i": "images/kannada/tagaru.jpg", "n": ["\u0C9F", "\u0C97", "\u0CB0\u0CC1"], "alt_n": ["\u091F\u0917\u0930\u0941", "Tagaru"], "a": ["audio/kannada/tagaru.mp3"]}]},
        {"k": "\u0CA0", "a": ["audio/deva_ttha.mp3"], "i": [{"i": "images/kannada/peetha.jpg", "n": ["\u0CAA\u0CC0", "\u0CA0"], "alt_n": ["\u092A\u0940\u0920\u093E", "peeTHa"], "a": ["audio/kannada/peetha.mp3"]}]},
        {"k": "\u0CA1", "a": ["audio/deva_dda.mp3"], "i": [{"i": "images/damaru.jpg", "n": ["\u0CA1", "\u0CAE", "\u0CB0\u0CC1"], "alt_n": ["\u0921\u092E\u0930\u0941", "Damaru"], "a": ["audio/deva_damaru.mp3"]}]},
        {"k": "\u0CA2", "a": ["audio/deva_ddha.mp3"], "i": [{"i": "images/kannada/dhakke.jpg", "n": ["\u0CA2", "\u0C95\u0CCD\u0C95\u0CC6"], "alt_n": ["\u0922\u0915\u094D\u0915\u0946", "DHakke"], "a": ["audio/kannada/dhakke.mp3"]}]},
        {"k": "\u0CA3", "a": ["audio/deva_nna.mp3"], "i": [{"i": "images/kannada/kana.jpg", "n": ["\u0C95", "\u0CA3"], "alt_n": ["\u0915\u0923\u093E", "kaNa"], "a": ["audio/kannada/kana.mp3"]}]},

        {"k": "\u0CA4", "a": ["audio/deva_ta.mp3"], "i": [{"i": "images/kannada/tabaka.jpg", "n": ["\u0CA4", "\u0CAC", "\u0C95"], "alt_n": ["\u0924\u092C\u0915\u093E", "tabaka"], "a": ["audio/kannada/tabaka.mp3"]}]},
        {"k": "\u0CA5", "a": ["audio/deva_tha.mp3"], "i": [{"i": "images/kannada/thadi.jpg", "n": ["\u0CA5", "\u0CA1\u0CBF"], "alt_n": ["\u0925\u0921\u093F", "thadi"], "a": ["audio/kannada/thadi.mp3"]}]},
        {"k": "\u0CA6", "a": ["audio/deva_da.mp3"], "i": [{"i": "images/kannada/dan.jpg", "n": ["\u0CA6", "\u0CA8"], "alt_n": ["\u0926\u0928\u093E", "dana"], "a": ["audio/kannada/dan.mp3"]}]},
        {"k": "\u0CA7", "a": ["audio/deva_dha.mp3"], "i": [{"i": "images/dhanush.jpg", "n": ["\u0CA7", "\u0CA8\u0CC1", "\u0CB8\u0CCD\u0CB8\u0CC1"], "alt_n": ["\u0927\u0928\u0941\u0938\u094D\u0938\u0941", "dhanussu"], "a": ["audio/kannada/dhanussu.mp3"]}]},
        {"k": "\u0CA8", "a": ["audio/deva_na.mp3"], "i": [{"i": "images/kannada/navilu.jpg", "n": ["\u0CA8", "\u0CB5\u0CBF", "\u0CB2\u0CC1"], "alt_n": ["\u0928\u0935\u093F\u0932\u0941", "navilu"], "a": ["audio/kannada/navilu.mp3"]}]},

        {"k": "\u0CAA", "a": ["audio/deva_pa.mp3"], "i": [{"i": "images/patang.jpg", "n": ["\u0CAA", "\u0C9F"], "alt_n": ["\u092A\u091F\u093E", "paTa"], "a": ["audio/kannada/pata.mp3"]}]},
        {"k": "\u0CAB", "a": ["audio/deva_pha.mp3"], "i": [{"i": "images/fal.jpg", "n": ["\u0CAB", "\u0CB2"], "alt_n": ["\u092B\u0932\u093E", "fala"], "a": ["audio/deva_fal.mp3"]}]},
        {"k": "\u0CAC", "a": ["audio/deva_ba.mp3"], "i": [{"i": "images/lattu.jpg", "n": ["\u0CAC", "\u0C97", "\u0CB0\u0CBF"], "alt_n": ["\u092C\u0917\u0930\u093F", "bagari"], "a": ["audio/kannada/bagari.mp3"]}]},
        {"k": "\u0CAD", "a": ["audio/deva_bha.mp3"], "i": [{"i": "images/kannada/bharani.jpg", "n": ["\u0CAD", "\u0CB0", "\u0CA3\u0CBF"], "alt_n": ["\u092D\u0930\u0923\u093F", "bharaNi"], "a": ["audio/kannada/bharani.mp3"]}]},
        {"k": "\u0CAE", "a": ["audio/deva_ma.mp3"], "i": [{"i": "images/kannada/mane.jpg", "n": ["\u0CAE", "\u0CA8\u0CC6"], "alt_n": ["\u092E\u0928\u0946", "mane"], "a": ["audio/kannada/mane.mp3"]}]},

        {"k": "\u0CAF", "a": ["audio/deva_ya.mp3"], "i": [{"i": "images/kannada/yantra.jpg", "n": ["\u0CAF\u0C82", "\u0CA4\u0CCD\u0CB0"], "alt_n": ["\u092F\u0902\u0924\u094D\u0930\u093E", "yantra"], "a": ["audio/kannada/yantra.mp3"]}]},
        {"k": "\u0CB0", "a": ["audio/deva_ra.mp3"], "i": [{"i": "images/rath.jpg", "n": ["\u0CB0", "\u0CA5"], "alt_n": ["\u0930\u0925\u093E", "ratha"], "a": ["audio/deva_rath.mp3"]}]},
        {"k": "\u0CB2", "a": ["audio/deva_la.mp3"], "i": [{"i": "images/kannada/langa.jpg", "n": ["\u0CB2\u0C82", "\u0C97"], "alt_n": ["\u0932\u0902\u0917\u093E", "langa"], "a": ["audio/kannada/langa.mp3"]}]},
        {"k": "\u0CB3", "a": ["audio/deva_lla.mp3"], "i": [{"i": "images/nal.jpg", "n": ["\u0CA8", "\u0CB3"], "alt_n": ["\u0928\u0933\u093E", "naLA"], "a": ["audio/kannada/nal.mp3"]}]},
        {"k": "\u0CB5", "a": ["audio/deva_va.mp3"], "i": [{"i": "images/kannada/vanki.jpg", "n": ["\u0CB5\u0C82", "\u0C95\u0CBF"], "alt_n": ["\u0935\u0902\u0915\u093F", "vanki"], "a": ["audio/kannada/vanki.mp3"]}]},
        {"k": "\u0CB6", "a": ["audio/deva_sha.mp3"], "i": [{"i": "images/kannada/shankha.jpg", "n": ["\u0CB6\u0C82", "\u0C96"], "alt_n": ["\u0936\u0902\u0916\u093E", "shankha"], "a": ["audio/kannada/shankha.mp3"]}]},
        {"k": "\u0CB7", "a": ["audio/deva_ssha.mp3"], "i": [{"i": "images/shatkon.jpg", "n": ["\u0CB7", "\u0C9F\u0CCD", " \u0C95\u0CCB", "\u0CA8"], "alt_n": ["\u0937\u091F\u0915\u094B\u0928", "SHatkona"], "a": ["audio/deva_shatkon.mp3"]}]},
        {"k": "\u0CB8", "a": ["audio/deva_sa.mp3"], "i": [{"i": "images/kannada/sar.jpg", "n": ["\u0CB8", "\u0CB0"], "alt_n": ["\u0938\u0930\u093E", "sara"], "a": ["audio/kannada/sar.mp3"]}]},
        {"k": "\u0CB9", "a": ["audio/deva_ha.mp3"], "i": [{"i": "images/jahaaj.jpg", "n": ["\u0CB9", "\u0CA1", "\u0C97"], "alt_n": ["\u0939\u0921\u0917\u0941", "haDaga"], "a": ["audio/kannada/hadaga.mp3"]}]},
        {"k": "\u0C95\u0CCD\u0CB7", "a": ["audio/deva_ksha.mp3"], "i": [{"i": "images/kshatriya.jpg", "n": ["\u0C95\u0CCD\u0CB7", "\u0CA4\u0CCD\u0CB0\u0CBF", "\u0CAF"], "alt_n": ["\u0915\u094D\u0937\u0924\u094D\u0930\u093F\u092F\u093E", "kshatriya"], "a": ["audio/deva_kshatriya.mp3"]}]},
        {"k": "\u0C9C\u0CCD\u0C9E", "a": ["audio/deva_jnya.mp3"], "i": [{"i": "images/yagya.jpg", "n": ["\u0CAF", "\u0C9C\u0CCD\u0C9E"], "alt_n": ["\u092F\u091C\u094D\u091E\u093E", "yaJNYa"], "a": ["audio/deva_yagya.mp3"]}]},

        {"k": "\u0CE6", "a": ["audio/kannada/zero.mp3"], "i": [{"i": "images/shunya.jpg", "n": ["\u0CB8\u0CCA\u0C82", "\u0CA8\u0CCD\u0CA8\u0CC6"], "a": ["audio/kannada/zero.mp3"]}]},
        {"k": "\u0CE7", "a": ["audio/kannada/one.mp3"], "i": [{"i": "images/ek.jpg", "n": ["\u0CE7"], "a": ["audio/kannada/one.mp3"]}]},
        {"k": "\u0CE8", "a": ["audio/kannada/two.mp3"], "i": [{"i": "images/do.jpg", "n": ["\u0CE8"], "a": ["audio/kannada/two.mp3"]}]},
        {"k": "\u0CE9", "a": ["audio/kannada/three.mp3"], "i": [{"i": "images/teen.jpg", "n": ["\u0CE9"], "a": ["audio/kannada/three.mp3"]}]},
        {"k": "\u0CEA", "a": ["audio/kannada/four.mp3"], "i": [{"i": "images/chaar.jpg", "n": ["\u0CEA"], "a": ["audio/kannada/four.mp3"]}]},
        {"k": "\u0CEB", "a": ["audio/kannada/five.mp3"], "i": [{"i": "images/paanch.jpg", "n": ["\u0CEB"], "a": ["audio/kannada/five.mp3"]}]},
        {"k": "\u0CEC", "a": ["audio/kannada/six.mp3"], "i": [{"i": "images/chhe.jpg", "n": ["\u0CEC"], "a": ["audio/kannada/six.mp3"]}]},
        {"k": "\u0CED", "a": ["audio/kannada/seven.mp3"], "i": [{"i": "images/saant.jpg", "n": ["\u0CED"], "a": ["audio/kannada/seven.mp3"]}]},
        {"k": "\u0CEE", "a": ["audio/kannada/eight.mp3"], "i": [{"i": "images/aanth.jpg", "n": ["\u0CEE"], "a": ["audio/kannada/eight.mp3"]}]},
        {"k": "\u0CEF", "a": ["audio/kannada/nine.mp3"], "i": [{"i": "images/nau.jpg", "n": ["\u0CEF"], "a": ["audio/kannada/nine.mp3"]}]},
        {"k": "\u0CE7\u0CE6", "a": ["audio/kannada/ten.mp3"], "i": [{"i": "images/das.jpg", "n": ["\u0CE7\u0CE6"], "a": ["audio/kannada/ten.mp3"]}]},
        {"k": "\u0CE7\u0CE7", "a": ["audio/kannada/eleven.mp3"], "i": [{"i": "images/gyarah.jpg", "n": ["\u0CE7\u0CE7"], "a": ["audio/kannada/eleven.mp3"]}]},
        {"k": "\u0CE7\u0CE8", "a": ["audio/kannada/twelve.mp3"], "i": [{"i": "images/baarah.jpg", "n": ["\u0CE7\u0CE8"], "a": ["audio/kannada/twelve.mp3"]}]},
        {"k": "\u0CE7\u0CE9", "a": ["audio/kannada/thirteen.mp3"], "i": [{"i": "images/terah.jpg", "n": ["\u0CE7\u0CE9"], "a": ["audio/kannada/thirteen.mp3"]}]},
        {"k": "\u0CE7\u0CEA", "a": ["audio/kannada/fourteen.mp3"], "i": [{"i": "images/chaudah.jpg", "n": ["\u0CE7\u0CEA"], "a": ["audio/kannada/fourteen.mp3"]}]},
        {"k": "\u0CE7\u0CEB", "a": ["audio/kannada/fifteen.mp3"], "i": [{"i": "images/pandrah.jpg", "n": ["\u0CE7\u0CEB"], "a": ["audio/kannada/fifteen.mp3"]}]},
        {"k": "\u0CE7\u0CEC", "a": ["audio/kannada/sixteen.mp3"], "i": [{"i": "images/solah.jpg", "n": ["\u0CE7\u0CEC"], "a": ["audio/kannada/sixteen.mp3"]}]},
        {"k": "\u0CE7\u0CED", "a": ["audio/kannada/seventeen.mp3"], "i": [{"i": "images/sataara.jpg", "n": ["\u0CE7\u0CED"], "a": ["audio/kannada/seventeen.mp3"]}]},
        {"k": "\u0CE7\u0CEE", "a": ["audio/kannada/eighteen.mp3"], "i": [{"i": "images/athaara.jpg", "n": ["\u0CE7\u0CEE"], "a": ["audio/kannada/eighteen.mp3"]}]},
        {"k": "\u0CE7\u0CEF", "a": ["audio/kannada/ninteen.mp3"], "i": [{"i": "images/unnis.jpg", "n": ["\u0CE7\u0CEF"], "a": ["audio/kannada/ninteen.mp3"]}]},
        {"k": "\u0CE8\u0CE6", "a": ["audio/kannada/twenty.mp3"], "i": [{"i": "images/bees.jpg", "n": ["\u0CE8\u0CE6"], "a": ["audio/twenty.mp3"]}]}

        ];
        loadData(data);
    }
