import router from '@system.router';

//start Station起始车站    endStation结束车站
export default {
    data: {
        startStation:"Not_Set",
        endStation:"Not_Set"
    },

    onInit() {
    },

    ToHome(){
        router.push({
            uri: "pages/index/index"
        })
    },
    ToInfo(){
        router.push({
            uri: "pages/info/info"
        })
    },
    ToSetting(){
        router.push({
            uri: "pages/setting/setting"
        })
    }
}
