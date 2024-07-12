import React from 'react'
import {useQuery } from 'react-query'
import { getAllProperties } from '../utils/api'

const useProperties = () => {
  const { data, isError, isLoading, refetch } = useQuery(
    "allProperties" , getAllProperties, {refetchOnWindowFocus : false}
  /* query                function          configration object*/ 
  
  )

  return {data,isError,isLoading,refetch}

}

export default useProperties
