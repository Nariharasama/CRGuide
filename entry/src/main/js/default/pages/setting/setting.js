import router from '@system.router';

export default {
    data: {
        toggle_list: [
            {
                "id": "1", "name": "一等座", "checked": true
            },
            {
                "id": "2", "name": "二等座", "checked": false
            },

        ],
        idx: ""
    },
    allclick(arg) {
        this.idx = arg;
    },
    allchange(e) {
        if (e.checked != true) {
            return;
        }
        for (var i = 0; i < this.toggle_list.length; i++) {
            if (this.toggle_list[i].id === this.idx) {
                this.toggle_list[i].checked = true;
            } else {
                this.toggle_list[i].checked = false;
            }
        }
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