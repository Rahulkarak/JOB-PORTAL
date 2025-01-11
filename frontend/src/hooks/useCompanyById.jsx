import React, { useEffect } from 'react'
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setAllJobs } from '../redux/jobSlice';
import axios from 'axios';
import { setSingleCompany } from '../redux/companySlice';

const useCompanyById = (comapanyId) => {
    const dispatch=useDispatch();
  return (
    useEffect(()=>{
        const fetchSingleCompany=async()=>{
            try {
                const res=await axios.get(`${COMPANY_API_END_POINT}/get/${comapanyId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleCompany();
    },[comapanyId,dispatch])
  )
}

export default useCompanyById