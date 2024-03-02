

import { Base_Url } from "./Base_Url";
import { commonApi } from "./CommonStructure";




//Station



export const stationRegisterApi=async(body)=>{

  return await  commonApi('POST',`${Base_Url}/stationapi/register/`,body,"")

}
export const stationLoginApi=async(body)=>{

    return await  commonApi('POST',`${Base_Url}/stationapi/token/`,body,"")
  
  }