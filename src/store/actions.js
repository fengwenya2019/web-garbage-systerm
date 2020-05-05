import axios from "axios"
import { Toast } from 'vant';
import store from "../store"

export default {
    // 获取用户信息
    queryUserInfo(store,obj) {
        const base = "/laji"
        axios.post(base + "/user/getUser",{
            "userinfoPhone":obj.tel,
        }).then((res) => {
            if(res.data.code === 100){
                store.commit("setUserInfo", res.data.extend.userinfo[0])
            }else{
                Toast('网络错误');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 编辑用户信息
    editUserInfo(store,obj) {
        const base = "/laji"
        axios.post(base + "/user/update",{
            "userinfoId":parseInt(obj.id),
            "userinfoPhone":obj.param.tel,
            "userinfoName": obj.param.userinfoName,
            "userinfoUsername": obj.param.userinfoUsername,
            "userinfoPhone": obj.param.userinfoPhone,
            "userinfoPassword": obj.param.userinfoPassword,
            "email": obj.param.email,
            "cap": obj.param.cap,
        }).then((res) => {
            if(res.data.code === 100){
                Toast('编辑成功');
                obj.that.$router.push({
                    //核心语句
                    path: "/home/user" //跳转的路径
                });
            }else{
                Toast('编辑失败，请重试');
            }
        }).catch((err) => {
            Toast('编辑失败，网络错误');
        })
    },
    // 获取首页日报信息
    queryReportInfo() {
        const base = "/laji"
        axios.post(base + "/laji/green/getAllgreen").then((res) => {
            if(res.data.code === 100){
                store.commit("setReport", res.data.extend.greendailies)
            }else{
                Toast('网络错误');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 获取类别列表
    queryCataList() {
        const base = "/laji"
        axios.post(base + "/laji/c/getAllc").then((res) => {
            if(res.data.code === 100){
                store.commit("setCataList", res.data.extend.classifications)
            }else{
                Toast('网络错误');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 获取类别
    queryCataInfo(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/c/getc",{
            'classificationinfoId':obj.id,
        }).then((res) => {
            if(res.data.code === 100){
                store.commit("setCataInfo", res.data.extend.classification)
            }else{
                Toast('网络错误');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 获取指南
    queryGuideList(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/cg/getcBycgCode",{
            "code":obj.code
        }).then((res) => {
            if(res.data.code === 100){
                store.commit("setGuideList", res.data.extend.classificationguides)
            }else{
                Toast('网络错误');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 获取站点列表
    querySiteList() {
        const base = "/laji"
        axios.post(base + "/laji/loc/getAllloc").then((res) => {
            if(res.data.code === 100){
                store.commit("setSiteList", res.data.extend.locations)
            }else{
                Toast('网络错误');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 获取站点详细信息
    querySiteInfo(store,obj) {
        const base = "/laji"
        axios.post(base + "/laji/loc/getAlllocById",{
            "locationinfoId":obj.id
        }).then((res) => {
            if(res.data.code === 100){
                store.commit("setSiteInfo", res.data.extend.locations[0])
            }else{
                Toast('网络错误');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 搜索指南
    searchGuideList(store,obj){
        const base = "/laji"
        axios.post(base + "/laji/cg/getcBycgName",{
            "name":obj.word
        }).then((res) => {
            if(res.data.code === 100 && res.data.extend.classificationguides.length !== 0){
                store.commit("setSearchGuideList", res.data.extend.classificationguides)
            }else{
                Toast('没有该垃圾');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    },
    // 通过类别号码获取类别名字
    getGuideName(store,obj){
        const base = "/laji"
        axios.post(base + "/laji/cg/getcBycgName",{
            "name":obj.code
        }).then((res) => {
            if(res.data.code === 100){
                console.log(res.data.extend.classificationguides)
                store.commit("setSearchGuideList", res.data.extend.classificationguides)
            }else{
                Toast('没有该垃圾');
            }
        }).catch((err) => {
            Toast('网络错误');
        })
    }
}