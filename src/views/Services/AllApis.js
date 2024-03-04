

import { Base_Url } from "./Base_Url";
import { commonApi } from "./CommonStructure";




//Station



export const stationRegisterApi=async(body)=>{

  return await  commonApi('POST',`${Base_Url}/stationapi/register/`,body,"")

}
export const stationLoginApi=async(data)=>{

    return await  commonApi('POST',`${Base_Url}/stationapi/token/`,data,"")
  
  }


  export const  employeeRegisterApi=async(body)=>{
    return await commonApi('POST',`${Base_Url}/employeeapi/register/`,body,"")
  }
  export const employeeLoginApi=async(data)=>{
    return await commonApi('POST',`${Base_Url}/employeeapi/token/`,data,"")
  }


  export const userRegisterApi=async(body)=>{
    return await commonApi('POST',`${Base_Url}/userapi/register/`,body,"")
  }

  export const userLoginApi=async(data)=>{
    return await commonApi('POST',`${Base_Url}/userapi/token/`,data,"")
  }