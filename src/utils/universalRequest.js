/*
 * @Author: linf
 * @Date:   2018/8/7
 * @Explain : 人员模块数据请求
 */
import cimApi from 'utils/cimApi';
import _ from 'lodash';

/**
 * 获取数据
 * @param json
 * @returns {*}
 */
const universalGet = (json) => {
    return cimApi.universalGetData(json)
}

/**
 * 更新数据
 * @param json
 * @returns {*}
 */
const universalUpdate = (json) => {
    const params = {
        object_type_id: json.objectID,
        property_value: json.values
    }
    let instanceID = encodeURIComponent(_.trim(json.instanceID));
    return cimApi.universalUpdteData(params, { instanceID: instanceID })
}

/**
 * 删除数据
 * @param json
 * @returns {*}
 */
const universalDelete = (json) => {
    let instanceID = encodeURIComponent(_.trim(json.instanceID));
    let params = {
        objectTypeId: _.trim(json.objectTypeId),
    }
    return cimApi.universalDeleteData(params, { instanceID: instanceID })
}

/**
 * 添加数据
 * @param json
 * @returns {*}
 */
const universalAdd = (json) => {
    const objectID = json.objectID;
    const values = json.values
    const names = Object.keys(values[0])
    return new Promise(function (resolve, reject) {
        cimApi.getObjectTypeAllPropertySets({}, { objectTypeId: objectID }).then((datas) => {
            let map = new Map();
            if (datas.message.toLowerCase() === 'success' && Array.isArray(datas.data)) {
                map = getIDToNameMap(datas.data, names)
                if (map.size > 0) {
                    const params = values.map((item, index) => {
                        return { object_type_id: objectID, property_value: getIDToValueMap(map, item) }
                    })
                    cimApi.universalAddData({ instances: params }).then((result) => {
                        resolve(result)
                    })
                }
            } else {
                resolve({ message: 'false' })
            }
        }).catch(() => {
            resolve({ message: 'false' })
        })
    })
}

/**
 * 获取属性 id -> name 的映射
 * @param propertySet
 * @param array
 * @returns {Map<any, any>}
 */
const getIDToNameMap = (propertySet, array) => {
    let result = new Map();
    for (let property of propertySet) {
        if (property.is_base === 0) {
            for (let key of array) {
                for (let propertyItem of property.properties) {
                    if (propertyItem.name === key) {
                        result.set(propertyItem.id, key)
                    }
                }
            }
        }
    }
    return result;
}

/**
 * 获取属性 id -> value 的映射
 * @param map
 * @param json
 */
const getIDToValueMap = (map, json) => {
    let result = {};
    map.forEach((key, value) => {
        let jsonValue = json[key]
        if (key === 'onDutyTime') {
            jsonValue = parseInt(jsonValue, 10)
        }
        result[value] = jsonValue;
    })
    return result;
}

export default {
    universalGet,
    universalDelete,
    universalUpdate,
    universalAdd,
}