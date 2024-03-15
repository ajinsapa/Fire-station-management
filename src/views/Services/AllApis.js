

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
//station

export const getAllEmployeeListApi=async(header)=>{
  return await commonApi('GET',`${Base_Url}/stationapi/employees/`,"",header)
}

export const addTeamCreationApi=async(data,header)=>{
  return await commonApi('POST',`${Base_Url}/stationapi/team/`,data,header)
}
export const getVehicleListApi=async(header)=>{
return await commonApi('GET',`${Base_Url}/stationapi/vehicle/`,"",header)

}

export const getEquipmentApi=async(header)=>{
  return await commonApi('GET',`${Base_Url}/stationapi/equipments/`,"",header)
}
export const getResourceApi=async(header)=>{
  return await commonApi('GET',`${Base_Url}/stationapi/equipments/`,"",header)
}

export const getIncidentListApi=async(header)=>{
  return await commonApi('GET',`${Base_Url}/stationapi/incidents/`,"",header)
}
export const getTrainingStatusApi=async()=>{
  return await commonApi('GET',`${Base_Url}/stationapi/trainingstatus/`,"","")
}
export const getTrainingVideosApi=async(header)=>{
  return await commonApi('GET',`${Base_Url}/stationapi/trainings/`,"",header)
}
export const getIncidentStatusApi=async(header)=>{
  return await commonApi('GET',`${Base_Url}/stationapi/incidentstatus/`,"",header)

}
export const getSingleIncidentListApi=async(id,header)=>{
  return await commonApi('GET',`${Base_Url}/stationapi/incidents/${id}/`,"",header)
}



//employee

export const getEmployeeTrainingVideos=async(header)=>{
  return await commonApi('GET',`${Base_Url}/employeeapi/traininglist/`,"",header)
}