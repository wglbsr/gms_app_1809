<template>

</template>

<script>
  /*****!!!!!!******打包需要改为false*********!!!!********/
    let dev_mode = false;
  // let dev_mode = true;
  /*****!!!!!!******打包需要改为false*********!!!!********/
  const GMS_DOMAIN = dev_mode ? "http://localhost:10130/" : "http://www.dy-iot.net:10130/";
  const GMS = {
      //---------------------------------------旧接口,部分有改动------------------------------
      getMachineNumByStatus: GMS_DOMAIN + "ems/site/getMachineNumByStatus.do",
      searchMachineInUse: GMS_DOMAIN + "/ems/site/searchMachineInUse.do",
      getSiteDetailed1: GMS_DOMAIN + "ems/site/getSiteDetailed1.do",
      getGeneratorLocation: GMS_DOMAIN + "ems/site/getGeneratorLocation.do",//"/../../static/youji.json",//
      searchMachine: GMS_DOMAIN + "ems/site/searchMachine.do",
      getSiteWarningList: GMS_DOMAIN + "ems/site/getSiteWarningList.do",
      getGenerateLog: GMS_DOMAIN + "ems/site/getGenerateLog.do",
      exportGenerateTable: GMS_DOMAIN + "ems/site/exportGenerateTable",
      downloadGenerateTable: GMS_DOMAIN + "ems/site/downloadGenerateTable",
      getGeneratorForStation: GMS_DOMAIN + "getGeneratorForStation",
      modifyStartVoltage: GMS_DOMAIN + "ems/site/modifyStartVoltage.do",
      startMachine: GMS_DOMAIN + "ems/site/startMachine.do",
      offMachine: GMS_DOMAIN + "ems/site/offMachine.do",
      changeModel: GMS_DOMAIN + "ems/site/changeModel.do",
      changeProtectModel: GMS_DOMAIN + "ems/site/changeProtectModel.do",
      addSiteInfo: GMS_DOMAIN + "ems/site/addSiteInfo.do",


      //------------------------------------新接口------------------------------------
      relateGeneratorWithStation: GMS_DOMAIN + "relateGeneratorWithStation",

      getGeneratorDetail: GMS_DOMAIN + "getGeneratorDetail",

      updateGenerator: GMS_DOMAIN + "updateGenerator",

      updateGeneratorList: GMS_DOMAIN + "updateGeneratorList",

      getStationList: GMS_DOMAIN + "getStationList",

      addStation: GMS_DOMAIN + "addStation",

      updateStation: GMS_DOMAIN + "updateStation",

      getUnitList: GMS_DOMAIN + "getUnit",

      updateUnit: GMS_DOMAIN + "updateUnit",

      deleteUnit: GMS_DOMAIN + "deleteUnit",

      insertUnit: GMS_DOMAIN + "insertUnit",

      getContactList: GMS_DOMAIN + "getContact",

      updateContact: GMS_DOMAIN + "updateContact",

      deleteContact: GMS_DOMAIN + "deleteContact",

      insertContact: GMS_DOMAIN + "insertContact",

      insertOperate: GMS_DOMAIN + "insertOperate",

      updateOperate: GMS_DOMAIN + "updateOperate",

      getOperateList: GMS_DOMAIN + "getOperateList",

      getTimerOperateList: GMS_DOMAIN + "getTimerOperateList",

      // insertTimerOperateList: GMS_DOMAIN + "insertTimerOperateList",

      deleteAllTimerOperateByMachineNo: GMS_DOMAIN + "deleteAllTimerOperateByMachineNo",

      getMaxOperateExeId: GMS_DOMAIN + "getMaxOperateExeId",

      getContactByUnitId: GMS_DOMAIN + "getContactByUnitId",

      getStationListByContactId: GMS_DOMAIN + "getStationListByContactId",

      deleteContactByIdList: GMS_DOMAIN + "deleteContactByIdList",

      getAllMyChildren: GMS_DOMAIN + "getAllMyChildren",

      checkUsername: GMS_DOMAIN + "checkUsername",

      userRegister: GMS_DOMAIN + "userRegister",

      changePassword: GMS_DOMAIN + "changePassword",

      checkStationNo: GMS_DOMAIN + "checkStationNo",

      getStationByStationNo: GMS_DOMAIN + "getStationByStationNo",

      deleteStationByStationNo: GMS_DOMAIN + "deleteStationByStationNo",

      generatorRegister: GMS_DOMAIN + "generatorRegister",

      getNextLevelUser: GMS_DOMAIN + "getNextLevelUser",

      insertCustomer: GMS_DOMAIN + "insertCustomer",

      getCustomerByCustomerNo: GMS_DOMAIN + "getCustomerByCustomerNo",

      updateCustomer: GMS_DOMAIN + "updateCustomer",

      getAllCustomer: GMS_DOMAIN + "getAllCustomer",

      deleteCustomer: GMS_DOMAIN + "deleteCustomer",

      updateUser: GMS_DOMAIN + "updateUser",

      getUserListByCustomerNoAndLevel: GMS_DOMAIN + "getUserListByCustomerNoAndLevel",

      getUserByUserNo: GMS_DOMAIN + "getUserByUserNo",

      deleteUserByUserNo: GMS_DOMAIN + "deleteUserByUserNo",

      getContactByContactId: GMS_DOMAIN + "getContactByContactId",

      getRegionByParent: GMS_DOMAIN + "getRegionByParent",

      getStationByStationNoList: GMS_DOMAIN + "getStationByStationNoList",

      importStationDataByExcel: GMS_DOMAIN + "importStationDataByExcel",

      downloadImportFileExample: GMS_DOMAIN + "downloadImportFileExample",

      insertOperateList: GMS_DOMAIN + "insertOperateList",

      changeBootVoltage: GMS_DOMAIN + "changeBootVoltage",

      deleteAllTimerOperateByMachineNoList: GMS_DOMAIN + "deleteAllTimerOperateByMachineNoList",

      getWithoutGeneratorStationList: GMS_DOMAIN + "getWithoutGeneratorStationList",

      relateGeneratorListWithStation: GMS_DOMAIN + "relateGeneratorListWithStation"

    }
  ;

  const UserLevel = {
    Admin: {level: 200, name: "管理员"},  //管理员
    Country: {level: 100, name: "全国"},//全国
    Province: {level: 90, name: "省级"},//省
    City: {level: 80, name: "市级"},    //市
    District: {level: 70, name: "区级"},//区
    County: {level: 60, name: "县级"},  //县
    Town: {level: 50, name: "镇级"},   //镇
  };

  const AllType = {
      fuelOptions: [{
        value: '',
        label: '全部'
      }, {
        value: '柴油',
        label: '柴油'
      }, {
        value: '汽油',
        label: '汽油'
      }],
      currentOptions: [{
        value: '',
        label: '全部'
      }, {
        value: '直流',
        label: '直流'
      }, {
        value: '交流',
        label: '交流'
      }],
      stateOptions: [{
        value: '',
        label: '全部'
      }, {
        value: '在线',
        label: '在线'
      }, {
        value: '离线',
        label: '离线'
      }],
      generateOptions: [{
        value: '',
        label: '全部'
      }, {
        value: '发电',
        label: '发电'
      }, {
        value: '停电',
        label: '停电'
      }],
    }
  ;


  const CMD = {
    autoModeOptions: [
      {
        value: '0',
        label: '请选择'
      }, {
        value: '1',
        label: '低压自启'
      }, {
        value: '2',
        label: '断电自启'
      }, {
        value: '3',
        label: '定时启动'
      }],
    outageBootModeCmd: {cmd: "84 05 02 00 00 03 00 05 16", no: 12},//市电停电自启
    autoAppendZero: function (str, cnt, prepend) {
      let strLength = (str + "").length;
      if (strLength == cnt) {
        return str;
      } else if (strLength > cnt) {
        return str.substr(0, cnt);
      }
      let distance = cnt - strLength;
      for (let i = 0; i < distance; i++) {
        if (prepend) {
          str = "0" + str;
        } else {
          str = str + "0";
        }
      }
      return str;
    },
    translateCmdNoToText: function (operateNo) {
      let textAndNo = [{opNo: 13, text: "开启油机"}, {opNo: 16, text: "关闭油机"}, {opNo: 12, text: "断电自启"}, {
        opNo: 11,
        text: "低压自启"
      }];
      // , {opNo: 15, text: "开启油机"}
      // , {opNo: 18, text: "开启油机"}
      for (let i = 0; i < textAndNo.length; i++) {
        if (textAndNo[i].opNo == operateNo) {
          return textAndNo[i].text;
        }
      }
    },
    //更改为低压自启模式
    getChangeToBootVoltageCmd: function () {
      return {
        cmd: "84 05 02 00 00 02 00 04 16",
        no: 4
      };
    },
    getManualModeCmd: function () {
      return {
        cmd: "84 05 02 00 00 01 00 03 16",
        no: 3
      };
    },
    getStopGeneratorCmd: function () {
      return {
        cmd: "84 05 01 00 00 00 02 03 16",
        no: 2
      };
    },
    getStartGeneratorCmd: function () {
      return {
        cmd: "84 05 01 00 00 00 01 02 16",
        no: 1
      };
    },
    getStartOrStopOptions: function (operaData) {
      let startCnt = 0;
      let stopCnt = 0;
      for (let key in operaData) {
        if (operaData[key].opNo == CMD.getStartGeneratorCmd().no) {
          startCnt++;
        } else if (operaData[key].opNo == CMD.getStopGeneratorCmd().no) {
          stopCnt++;
        }
      }
      let operateTypeOptions = [{
        value: '0',
        label: '关机',
        disabled: stopCnt > 0 ? true : false
      }, {
        value: '1',
        label: '开机',
        disabled: startCnt > 0 ? true : false
      }];

      return operateTypeOptions;

    },
    //修改自启电压
    getChangeBootVoltageCmd: function (voltage) {
      let replacePart1 = "GH_IJ";
      let replacePart2 = "KL";
      let changeBootVoltage = "84 05 41 " + replacePart1 + " 2E " + replacePart2 + " 16";//前面四位X是电压的整数部分,后面两个为小数部分
      let voltageHex = (Number(voltage)).toString(16);
      let voltageStrList = voltageHex.split(".");
      let voltageIntPartHex = voltageStrList[0];
      let voltageDecimalPartHex = voltageStrList.length > 1 ? voltageStrList[1] : "00";
      let check = parseInt(voltageIntPartHex, 16) + parseInt(41, 16) + parseInt("2E", 16) + parseInt(voltageDecimalPartHex, 16);
      let autoAppendZero = function (str, cnt, prepend) {
        let strLength = (str + "").length;
        if (strLength == cnt) {
          return str;
        } else if (strLength > cnt) {
          return str.substr(0, cnt);
        }
        let distance = cnt - strLength;
        for (let i = 0; i < distance; i++) {
          if (prepend) {
            str = "0" + str;
          } else {
            str = str + "0";
          }
        }
        return str;
      };
      let finalIntPart = autoAppendZero(voltageIntPartHex, 4, true);
      finalIntPart = finalIntPart.substr(0, 2) + " " + finalIntPart.substr(2, 2);
      let finalDecimalPart = autoAppendZero(voltageDecimalPartHex, 2, false);
      changeBootVoltage = changeBootVoltage.replace(replacePart1, finalIntPart);
      let checkStr = check.toString(16);
      let finalCheckStr = checkStr.substring(checkStr.length - 2, checkStr.length);
      changeBootVoltage = changeBootVoltage.replace(replacePart2, finalDecimalPart + " " + autoAppendZero(finalCheckStr, 2, true));
      return {cmd: changeBootVoltage.toUpperCase(), no: 11};
    },
    //定时自启/熄火
    getTimerTaskCmd: function (index, start, deleteFlag, date) {
      //84 0E A1 00 00 XX XX XX XX yy yy mm dd hh MM ss校验和 16  新增定时油机开启
      //84 0E A4 00 01 XX XX XX XX yy yy mm dd hh MM ss校验和 16   新增定时油机熄火
      //84 0E A3 02 00 XX XX XX XX yy yy mm dd hh MM ss校验和 16   删除开启
      //84 0E A6 02 01 XX XX XX XX yy yy mm dd hh MM ss校验和 16   删除熄火
      let startCmdAdd = {
        cmd: ["84", "0E", "A1", "00", "00", "XX", "XX", "XX", "XX", "yy", "yy", "mm", "dd", "hh", "MM", "ss", "check", "16"],
        no: 13
      };
      let stopCmdAdd = {
        cmd: ["84", "0E", "A4", "00", "01", "XX", "XX", "XX", "XX", "yy", "yy", "mm", "dd", "hh", "MM", "ss", "check", "16"],
        no: 16
      };
      let startCmdDelete = {
        cmd: ["84", "0E", "A3", "02", "00", "XX", "XX", "XX", "XX", "yy", "yy", "mm", "dd", "hh", "MM", "ss", "check", "16"],
        no: 15
      };
      let stopCmdDelete = {
        cmd: ["84", "0E", "A6", "02", "01", "XX", "XX", "XX", "XX", "yy", "yy", "mm", "dd", "hh", "MM", "ss", "check", "16"],
        no: 18
      };
      let day = date.getDate();
      let year = date.getFullYear() + "";
      let yy1 = year.substr(0, 2);
      let yy2 = year.substr(2, 2);
      let month = date.getMonth() + 1;
      let hours = date.getHours();
      let min = date.getMinutes();
      let second = "00";
      let cmd = "";
      let cmdNo = "";
      let autoCompleteCmd = function (list, x1, x2, x3, x4, yy1, yy2, mm, dd, hh, MM, ss) {
        let finalCmd = "";
        if (list && list.length == 18) {
          list[5] = CMD.autoAppendZero(x1.toString(16), 2, true);
          list[6] = CMD.autoAppendZero(x2.toString(16), 2, true);
          list[7] = CMD.autoAppendZero(x3.toString(16), 2, true);
          list[8] = CMD.autoAppendZero(x4.toString(16), 2, true);
          list[9] = CMD.autoAppendZero(yy1, 2, true);
          list[10] = CMD.autoAppendZero(yy2, 2, true);
          list[11] = CMD.autoAppendZero(mm, 2, true);
          list[12] = CMD.autoAppendZero(dd, 2, true);
          list[13] = CMD.autoAppendZero(hh, 2, true);
          list[14] = CMD.autoAppendZero(MM, 2, true);
          list[15] = CMD.autoAppendZero(ss, 2, true);
          let checkNum = 0;
          for (let i = 2; i < 16; i++) {
            let temp = Number(parseInt(list[i], 16));
            checkNum += temp;
            // console.log("第" + (i - 1) + "次,加上" + temp + ",结果" + checkNum);
          }
          // console.log("checkNum:" + checkNum);
          let checkNumHex = (checkNum).toString(16);
          // console.log("checkNumHex:" + checkNumHex);
          list[16] = CMD.autoAppendZero(checkNumHex.substring(checkNumHex.length - 2, checkNumHex.length), 2, true);
        }
        for (let i = 0; i < list.length; i++) {
          if (i < list.length - 1) {
            finalCmd += list[i] + " ";
          } else {
            finalCmd += list[i];
          }
        }
        return finalCmd.toUpperCase();
      };
      if (start) { //开机
        cmd = (!deleteFlag) ? autoCompleteCmd(startCmdAdd.cmd, 0, 0, 0, index, yy1, yy2, month, day, hours, min, second) : autoCompleteCmd(startCmdDelete.cmd, 0, 0, 0, index, 0, 0, 0, 0, 0, 0, 0);
        cmdNo = (!deleteFlag) ? startCmdAdd.no : startCmdDelete.no;
      } else {//熄火
        cmd = (!deleteFlag) ? autoCompleteCmd(stopCmdAdd.cmd, 0, 0, 0, index, yy1, yy2, month, day, hours, min, second) : autoCompleteCmd(stopCmdDelete.cmd, 0, 0, 0, index, 0, 0, 0, 0, 0, 0, 0);
        cmdNo = (!deleteFlag) ? stopCmdAdd.no : stopCmdDelete.no;
      }
      return {cmd: cmd, no: cmdNo};
    },
  };

  const MODE = {
    manual: {value: 0, text: "手动模式"},
    accordingToVoltageBoot: {value: 1, text: "低压自启"},
    outageBoot: {value: 2, text: "停电自启"},
    accordingToTime: {value: 3, text: "定时自启"},
  };


  const MSG = {
    RetrieveDataError: "获取数据失败,请稍后重试!",
    UnknownError: "未知错误,请稍后重试!",
    UpdateError: "修改失败,请稍后重试!",
    AddError: "增加失败,请稍后重试!",
    DeleteError: "删除失败,请稍后重试!",
    OperateError: "操作失败,请稍后重试!"

  };

  const DATE_PICKER_LIST = [{
    text: '最近一周',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      picker.$emit('pick', [start, end]);
    }
  }];


  /**
   * this.API_DYNY.CONSTANCE
   * @type {{defaultLocationArr: number[], defaultMarkerTitle: string}}
   */
  const CONSTANCE = {
    defaultLocationArr: [113.04928, 23.634058],
    defaultLocationStr: "113.04928,23.634058",
    defaultMarkerTitle: "清远市德远能源开发有限公司" + "\n" + "广东省清远高新技术产业开发区创业一路6号A2栋6层602-2",
  };


  /**
   * this.API_DYNY.utils.getMarkerIcon
   * @type {{transformLat: (function(*=, *): number), transformLon: (function(*=, *): *), initTank: utils.initTank}}
   */
  const utils = {
    timestampToTime: function (timestamp, onlyTime) {
      let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let year = date.getFullYear() + '-';
      let month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let day = date.getDate();
      let hours = date.getHours();
      hours = hours > 9 ? hours : "0" + hours;
      let min = date.getMinutes();
      min = min > 9 ? min : "0" + min;
      let second = date.getSeconds();
      let finalTime = "";
      if (onlyTime) {
        return hours + ':' + min;
      } else {
        return year + month + day + ' ' + hours + ':' + min + ":" + second;
      }
    },

    translateCurrent: function (current) {
      if (isNaN(current)) {
        return 0;
      }
      let translatedCurrent = ((100 * Math.abs(current - 2.5)) / 0.625) - 3.2;
      let finalCurrent = translatedCurrent >= 100 || translatedCurrent <= 0 ? 0 : translatedCurrent;
      return this.keepHowManyNum(finalCurrent, 1);
    },
    getText: function (text) {
      if (text != null && text != "") {
        return text;
      }
      return "未知";
    },
    /**
     * 发送单个指令
     * @param mach_no
     * @param opNum
     * @param opNo
     * @param username
     * @param vue_this
     */
    sendOperate: function (mach_no, opNum, opNo, username, vue_this) {
      this.sendOperateList([mach_no], opNum, opNo, null, 0, username, vue_this);
    },
    /**
     * 发送多个油机的同一个指令
     * @param machNoList
     * @param opNum
     * @param opNo
     * @param executeDate
     * @param executeId
     * @param username
     * @param vue_this
     * @returns {number}
     */
    sendOperateList: function (machNoList, opNum, opNo, executeDate, executeId, username, vue_this, callback) {
      if (!machNoList || !vue_this || machNoList.length == 0) {
        return 0;
      }
      let params = [];
      for (let index in machNoList) {
        let operate = {
          machNo: machNoList[index],
          opNum: opNum,
          creatTime: new Date(),
          opNo: opNo,
          creatPer: username,
          action: dev_mode ? 1 : 0,
          // action: 0,
          deleted: false
        };
        if (executeDate) {
          operate.actualExecuteTime = executeDate;
        }
        if (executeId) {
          operate.executeId = executeId;
        }
        params.push(operate);
      }
      if (params.length == 0) {
        return 0;
      }
      vue_this.$http.post(GMS.insertOperateList, params).then(function (res) {
          if (res.body.result && res.body.data > 0) {
            vue_this.$message({
              message: "操作成功!",
              type: "success"
            });
            if (callback) {
              callback(res);
            }
          } else {
            vue_this.$message.error("操作失败,请稍后重试!");
          }
        }
      ).catch(function (error) {
        return 0
      });
    },

    changeMaintainTime: function (selectedGenerator, this_vue, successCallback, errorCallback) {
      if (!selectedGenerator || selectedGenerator.length == 0) {
        return;
      }
      this_vue.$prompt("请输入保养时间", '提示', {
        inputValue: selectedGenerator[0].maintain_time,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '保养时间不正确'
      }).then(({value}) => {
        let params = [];
        for (let index in selectedGenerator) {
          params.push({
            machNo: selectedGenerator[index].mach_no,
            maintainTime: value,
          });
        }
        this_vue.$http.post(GMS.updateGeneratorList, params).then(res => {
          if (res.body.result && res.body.data > 0) {
            this_vue.$message({
              message: "修改成功",
              type: "success"
            });
            successCallback && successCallback();
          } else {
            this_vue.$message.error("修改失败,请稍后重试!");
            errorCallback && errorCallback();
          }
        }).catch(function (error) {
          errorCallback && errorCallback();
        });
      }).catch(() => {
        this_vue.$message("取消操作");
      });
    },
    changeBootVoltageByMachNoList: function (selectedGenerator, this_vue, successCallback, errorCallback) {
      if (!selectedGenerator || selectedGenerator == 0) {
        return;
      }
      let tip = '请输启动电压';
      if (selectedGenerator.length == 1) {
        tip = "请输入'" + selectedGenerator[0].mach_name + "'的启动电压";
      }
      this_vue.$prompt(tip, '提示', {
        inputValue: selectedGenerator[0].start_Vo,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '电压格式不正确'
      }).then(({value}) => {
        let machNoList = [];
        for (let index in selectedGenerator) {
          machNoList.push(selectedGenerator[index].mach_no);
        }
        this_vue.$http.post(GMS.changeBootVoltage, {
          generatorNoList: machNoList,
          bootVoltage: value
        }, {emulateJSON: true}).then(res => {
          if (res.body.result && res.body.data > 0) {
            this_vue.$message({
              message: "修改成功",
              type: "success"
            });
            successCallback && successCallback();
          } else {
            this_vue.$message.error("修改失败,请稍后重试!");
            errorCallback && errorCallback();
          }
        }).catch(function (error) {
          errorCallback && errorCallback();
        });
      }).catch(() => {
        this_vue.$message("取消操作");
      });
    },
    deleteAllTimerOperate: function (machNo, vue_this, callback) {
      this.deleteAllTimerOperateByMachineNoList([machNo], vue_this, callback);
    },
    deleteTimerTask: function (machNo, executedId, opNo, username, cmdId, vue_this, callback) {
      let result = CMD.getTimerTaskCmd(executedId, opNo == 13, true, new Date());//opNo == 13判断是开机还是关机
      let paramsInsert = {
        machNo: machNo,
        creatTime: new Date(),
        creatPer: username,
        action: dev_mode ? 1 : 0,
        executeId: 0,
        deleted: 0,
        opNo: result.no,
        opNum: result.cmd
      };
      //发送(删除原来的指令)的指令
      vue_this.$http.post(GMS.insertOperate, paramsInsert).then(function (res1) {
        if (res1.body.result && res1.body.data > 0) {
          let paramsDelete = {
            machNo: machNo,
            id: cmdId,
            deleted: 1,
            executeId: 0,
          };
          //将原来的指令置为无效(deleted=true)
          vue_this.$http.post(GMS.updateOperate, paramsDelete).then(function (res2) {
            if (res2.body.result) {
              if (res2.body.data > 0) {
                callback && callback();
              }
            }
          });
        }
      });
    },
    deleteAllTimerOperateByMachineNoList: function (machNoList, vue_this, callback) {
      console.log("deleteAllTimerOperateByMachineNoList");
      if (!machNoList || !vue_this || machNoList.length == 0) {
        return;
      }
      let params = {
        machineNoList: machNoList
      };
      vue_this.$http.post(GMS.deleteAllTimerOperateByMachineNoList, params, {emulateJSON: true}).then(function (res) {
        console.log(res);
        if (res.body.result && res.body.data > 0) {
          callback && callback();
        }
      });
    },
    modeSwitch: function (machNoList, mode, username, bootVoltage, vue_this, callback) {
      if (!machNoList || !vue_this || machNoList.length == 0) {
        // callback();
        return;
      }
      if (mode == MODE.outageBoot.value) {//断电自启
        this.sendOperateList(machNoList, CMD.outageBootModeCmd.cmd, CMD.outageBootModeCmd.no, null, 0, username, vue_this);
        this.deleteAllTimerOperateByMachineNoList(machNoList, vue_this, callback);//删除定时任务
      } else if (mode == MODE.accordingToVoltageBoot.value) {//根据电压自启
        vue_this.$http.post(GMS.changeBootVoltage, {
          generatorNoList: machNoList,
          bootVoltage: bootVoltage,
        }, {emulateJSON: true}).then(res => {
          let param1 = CMD.getChangeToBootVoltageCmd();
          let param2 = CMD.getChangeBootVoltageCmd(bootVoltage);
          this.sendOperateList(machNoList, param1.cmd, param1.no, null, 0, username, vue_this);//1.先修改为低压自启
          this.sendOperateList(machNoList, param2.cmd, param2.no, null, 0, username, vue_this);//2.再发送自启电压
          this.deleteAllTimerOperateByMachineNoList(machNoList, vue_this, callback);//3.删除定时任务
        });
      } else if (mode == MODE.manual.value) {//手动模式
        let param = CMD.getManualModeCmd();
        this.sendOperateList(machNoList, param.cmd, param.no, null, 0, username, vue_this);
        this.deleteAllTimerOperateByMachineNoList(machNoList, vue_this, callback);//删除定时任务
      }
    },
    keepHowManyNum: function (value, keppNum, force) {
      if (isNaN(value) && !force) {
        // console.log(value);
        return value;
      }

      if (isNaN(value) || !value) {
        value = 0;
      }
      if (!keppNum) {
        keppNum = 1;
      }
      let temp = Math.pow(10, keppNum);
      let result = Math.round(Number(value) * temp) / temp;
      return result;
    },
    /**
     *
     * @param enumKey
     * @param value
     * @returns {*}
     */
    getEnumText(enumKey, value) {
      let enumData = {
        connected: [{value: 0, text: "离线"}, {value: 1, text: "在线"}],
        stationType: [{value: 0, text: "固定"}, {value: 1, text: "移动"}],
        generateType: [{value: 0, text: "交流"}, {value: 1, text: "直流"}],
        fuelType: [{value: 0, text: "汽油"}, {value: 1, text: "柴油"}],//city_electricity
        city_electricity: [{value: 0, text: "市电"}, {value: 1, text: "停电"}],
      };
      for (let key in enumData) {
        if (key == enumKey) {
          for (let i = 0; i < enumData[key].length; i++) {
            if (value == enumData[key][i].value) {
              return enumData[key][i].text;
            }
          }
        }
      }
      return value;
    },
    /**
     * 获取自己的下级
     * @param level
     * @returns {Array}
     */
    getLevelList: function (level) {
      let result = [];
      let levelList = [UserLevel.Admin, UserLevel.Country, UserLevel.Province, UserLevel.City, UserLevel.District, UserLevel.County, UserLevel.Town];
      for (let index in levelList) {
        if (level >= levelList[index].level) {
          result.push(levelList[index]);
        }
      }
      return result;
    },
    /**
     * 初始化地图标记
     * @param data
     * @param mapObject
     * @param router
     * @returns {boolean}
     */
    initMarkers: function (data, mapObject, router) {
      let dataObj = !data ? {} : data;
      let result = true;
      if (!Array.isArray(dataObj)) {
        dataObj = [dataObj];
      }
      if (dataObj.length < 2) {
        mapObject.setZoom(15);
        if (!dataObj[0].stationPosition || dataObj[0].stationPosition == "NULL") {
          dataObj[0].stationPosition = "23.634058,113.04928";
          result = false;
        }
      }
      for (let i in dataObj) {
        let machineName = dataObj[i].stationName ? dataObj[i].stationName : dataObj[i].machName;
        let temp = new AMap.Marker({
          map: mapObject,//地图对象
        });
        let coordinate = dataObj[i].stationPosition;
        if (!this.isCoordinate(coordinate)) {
          continue;
        }
        if (!coordinate || coordinate == "NULL" || coordinate == "") {//|| true
          coordinate = ["23.634058", "113.04928"];
          if (dataObj[i].stationLongitude && dataObj[i].stationLatitude) {
            coordinate = [dataObj[i].stationLongitude, dataObj[i].stationLatitude];
          }
        } else {
          coordinate = this.fixCoordinate(dataObj[i].stationPosition);
        }
        temp.setPosition(coordinate);
        temp.setIcon(this.getMarkerIcon(dataObj[i].stationConnnectState, dataObj[i].stationState));//设置图标
        // "发电机类型:" + this.getText(dataObj[i].useType) + "发电机" + "\n"
        let title = "发电机编号:" + this.getText(dataObj[i].mach_no) + "\n"
          + "基站名称:" + this.getText(machineName) + "\n"
          + "基站编码:" + this.getText(dataObj[i].stationId) + "\n" + "状态:";
        if (data.stationConnnectState === "在线") {
          title = title + this.getText(dataObj[i].stationState) + "\n";
        } else {
          title = title + this.getText(dataObj[i].stationConnnectState) + "\n";
        }
        temp.setTitle(title);
        temp.myi = dataObj[i].machineNumber;
        temp.mytype = dataObj[i].stationType;
        if (!!router) {
          temp.on('click', function () {
            if (this.mytype === "直流" || this.mytype === "交流") {
              router.push({path: '/index/baseStationIndex', query: {mach_no: this.myi, mach_type: this.mytype}});
            }
          });
        }
      }
      mapObject.setFitView();
      return result;
    },
    /**
     * 判断是否为地图坐标
     * @param coordinateStr
     * @returns {boolean}
     */
    isCoordinate: function (coordinateStr) {
      if (!coordinateStr || coordinateStr == "NULL") {
        return false;
      }
      let longReg = /^[0-9]{1,3}\.[0-9]{1,9}$/;
      let latReg = /^[0-9]{1,3}\.[0-9]{1,9}$/;
      let coordinateArr = coordinateStr.split(",");
      let lon = Number(coordinateArr[0]);
      let lat = Number(coordinateArr[1]);
      if (longReg.test(lon) && latReg.test(lat)) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 根据状态获取图标
     * @param connected
     * @param status
     */
    getMarkerIcon: function (connected, status) {
      if (connected == "在线") {
        if (status == "发电") {
          return require("./assets/images/green.png");
        }
        else if (status == "停电") {
          return require("./assets/images/gray.png");
        } else if (status == "市电") {
          return require("./assets/images/blue.png");
        }
      } else {
        return require("./assets/images/deepGray.png");
      }
    },
    /**
     * 地图坐标校准
     * @param x
     * @param y
     * @returns {number}
     */
    transformLat: function (x, y) {
      var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
      ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
      ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
      ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;

      return ret;
    },
    /**
     * 是否已经超出中国范围
     * @param lat
     * @param lon
     * @returns {boolean}
     */
    outOfChina: function (lat, lon) {
      if (lon < 72.004 || lon > 137.8347 || lat < 0.8293 || lat > 55.8271)
        return true;
      return false;
    },
    /**
     *地图坐标校准
     * @param coordinate
     * @returns {*}
     */
    fixCoordinate: function (coordinate)  //Lon是经度，Lat是纬度
    {
      let temp = "23.634058,113.04928";
      if (!!coordinate && coordinate !== "NULL") {
        temp = coordinate + "";
      }
      let coordinateArr = temp.split(",");
      let wgLon = Number(coordinateArr[0]);
      let wgLat = Number(coordinateArr[1]);
      if (this.outOfChina(wgLat, wgLon)) {
        return [wgLat, wgLon];
      }
      let dLat = this.transformLat(wgLon - 105.0, wgLat - 35.0);
      let dLon = this.transformLon(wgLon - 105.0, wgLat - 35.0);
      let radLat = wgLat / 180.0 * Math.PI;
      let magic = Math.sin(radLat);
      magic = 1 - this.ee * magic * magic;
      let sqrtMagic = Math.sqrt(magic);

      dLat = (dLat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtMagic) * Math.PI);

      dLon = (dLon * 180.0) / (this.a / sqrtMagic * Math.cos(radLat) * Math.PI);

      let mgLat = wgLat + dLat;
      let mgLon = wgLon + dLon;
      return [mgLon, mgLat];

    },

    /**
     * 取整
     * @param num
     * @returns {number}
     */
    getNumber: function (num) {
      if (!num || isNaN(num)) {
        return 0;
      } else {
        return Math.floor(num);
      }
    },
    /**
     * 坐标校准
     * @param x
     * @param y
     * @returns {*}
     */
    transformLon: function (x, y) {
      var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
      ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
      ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
      ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
      return ret;
    },
    /**
     * 初始化油量canvas
     * @param canvasObj
     * @param capacity
     * @param percentage
     */
    initTank: function (canvasObj, capacity, percentage) {
      if (!canvasObj) {
        return;
      }
      let canvas = canvasObj;
      let ctx = canvas.getContext('2d');
      let nowRange = Math.floor(this.getNumber(percentage));
      let level = Math.floor(this.getNumber(capacity));
      if (parseFloat(nowRange) > 100) {
        nowRange = 100;
      }
      let mW = canvas.width = 250;
      let mH = canvas.height = 250;
      let lineWidth = 2;
      let r = mH / 2;
      let cR = r - 16 * lineWidth;
      let sX = 0;
      let sY = mH / 2;
      let axisLength = mW;
      let waveWidth = 0.015;
      let waveHeight = 10;
      let speed = 0.09;
      let xOffset = 0;

      ctx.lineWidth = lineWidth;
      let IsdrawCircled = false;
      let drawCircle = function () {
        ctx.beginPath();
        ctx.strokeStyle = '#1080d0';
        ctx.arc(r, r, cR + 5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r, r, cR, 0, 2 * Math.PI);
        ctx.clip();
      }
      //圆形油量显示
      let drawSin = function (xOffset) {
        ctx.save();
        let points = [];
        let dY, y;
        ctx.beginPath();
        for (let x = sX; x < sX + axisLength; x += 20 / axisLength) {
          if (nowRange >= 80 && nowRange < 100) {
            y = -Math.sin((sX + x) * waveWidth + xOffset);
            dY = mH * (1 - (nowRange - 12) / 100);
          }
          else if (nowRange > 30 && nowRange < 80 || nowRange >= 100 || nowRange <= 0) {
            y = -Math.sin((sX + x) * waveWidth + xOffset);
            dY = mH * (1 - nowRange / 100);
          }
          else if (nowRange > 0 && nowRange <= 30) {
            y = -Math.sin((sX + x) * waveWidth + xOffset);
            dY = mH * (1 - (nowRange + 10) / 100);
          }
          points.push([x, dY + y * waveHeight]);
          ctx.lineTo(x, dY + y * waveHeight);
        }
        ctx.lineTo(axisLength, mH);
        ctx.lineTo(sX, mH);
        ctx.lineTo(points[0][0], points[0][1]);
        if (nowRange >= 80 && nowRange <= 100) {
          ctx.fillStyle = '#339900';
        }
        else if (nowRange > 30 && nowRange < 80 || nowRange > 100 || nowRange <= 0) {
          ctx.fillStyle = '#F16601';
        }
        else if (nowRange > 0 && nowRange <= 30) {
          ctx.fillStyle = '#FF0000';
        }
        ctx.closePath(); //add
        ctx.fill();
        ctx.restore();
      };


      let drawText = function () {
        ctx.save();

        let size = 0.4 * cR;
        ctx.font = size + 'px Microsoft Yahei';

        ctx.fillStyle = "rgba(06, 85, 128, 0.8)";

        ctx.fillText(nowRange > 0 ? nowRange : 0, 80, 105);//92,105//nowRange  百分百比

        ctx.font = "24px Microsoft Yahei";
        ctx.fillText("%", 145, 105);//135,105

        ctx.font = "26px Microsoft Yahei";
        ctx.fillText(level > 0 ? level : 0, 92, 175);//升

        ctx.font = "20px Microsoft Yahei";
        ctx.fillText("L", 148, 175);

        ctx.restore();
      };


      let render = function () {
        ctx.clearRect(0, 0, mW, mH);
        if (IsdrawCircled == false) {
          drawCircle();
          IsdrawCircled = true;
        }
        drawSin(xOffset);
        drawText();
        xOffset += speed;
        requestAnimationFrame(render);
      }
      render();
    }
  }

  export default {
    GMS,
    CMD,
    utils,
    GMS_DOMAIN,
    MSG,
    MODE,
    DATE_PICKER_LIST,
    CONSTANCE,
    AllType,
    UserLevel
  }

</script>

<style scoped>

</style>
